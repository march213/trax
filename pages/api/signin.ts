import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

import PrismaClient from '../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body
  const user = await PrismaClient.user.findUnique({
    where: {
      email,
    },
  })

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      process.env.JWT_SECRET,
      { expiresIn: '8h' },
    )

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('trax_access_token', token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      }),
    )

    const { password: userPassword, ...userData } = user

    res.json(userData)
  } else {
    res.status(401)
    res.json({ error: 'Email or Password is wrong' })
  }
}

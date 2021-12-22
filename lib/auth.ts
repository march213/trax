import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import PrismaClient from './prisma'

export function validateRoute(handler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { trax_access_token: token } = req.cookies
    if (token) {
      let user

      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        user = await PrismaClient.user.findUnique({
          where: { id },
        })
        if (!user) {
          throw new Error('User not found')
        }
      } catch (e) {
        res.status(401)
        res.json({ error: 'Not Authorized' })
        return
      }

      return handler(req, res, user)
    }

    res.status(401)
    res.json({ error: 'Not Authorized' })
  }
}

export const validateToken = (token) => {
  const user = jwt.verify(token, process.env.JWT_SECRET)
  return user
}

import PrismaClient from '../../lib/prisma'
import { validateRoute } from '../../lib/auth'

export default validateRoute(async (req, res, user) => {
  const playlistsCount = await PrismaClient.playlist.count({
    where: {
      userId: user.id,
    },
  })

  res.json({ ...user, playlistsCount })
})

import PrismaClient from '../../lib/prisma'
import { validateRoute } from '../../lib/auth'

export default validateRoute(async (req, res, user) => {
  const playlists = await PrismaClient.playlist.findMany({
    where: {
      userId: user.id,
    },
  })

  res.json(playlists)
})

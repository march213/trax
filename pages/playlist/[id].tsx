import { GetServerSideProps } from 'next'
import PrismaClient from '../../lib/prisma'
import { GradientLayout } from '../../components/gradientLayout'
import { validateToken } from '../../lib/auth'

export default function Playlist({ playlist }) {
  if (!playlist) return null

  return (
    <GradientLayout
      color="red"
      subtitle="playlist"
      title={playlist.name}
      image="https://res.cloudinary.com/dh5nhyzyb/image/upload/v1640153483/Screen_Shot_2021-12-22_at_1.10.35_AM.png"
    >
      playlist
    </GradientLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id: userId } = validateToken(context.req.cookies.trax_access_token)
  const playlistId = context.query.id

  let playlist = null

  try {
    playlist = await PrismaClient.playlist.findFirst({
      where: {
        id: Number(playlistId),
        userId,
      },
      include: {
        songs: {
          include: {
            artist: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    })
  } catch (error) {}

  return {
    props: { playlist },
  }
}

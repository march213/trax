import { GetServerSideProps } from 'next'
import PrismaClient from '../../lib/prisma'
import { GradientLayout } from '../../components/gradientLayout'
import { validateToken } from '../../lib/auth'
import { SongsTable } from '../../components/songsTable'

const getBGColor = (id) => {
  const colors = ['blue', 'purple', 'green', 'yellow', 'orange', 'teal', 'red', 'gray', 'pink']
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[id - 1] || colors[randomIndex]
}

export default function Playlist({ playlist }) {
  if (!playlist) return null

  return (
    <GradientLayout
      color={getBGColor(playlist.id)}
      subtitle="playlist"
      title={playlist.name}
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
      roundImage={false}
    >
      <SongsTable songs={playlist.songs} />
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

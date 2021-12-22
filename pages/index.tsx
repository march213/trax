import Head from 'next/head'
import { GradientLayout } from '../components/gradientLayout'

export default function Home() {
  return (
    <GradientLayout
      color="gray"
      subtitle="profile"
      title="Jane M"
      description="15 public playlists"
      image="https://res.cloudinary.com/dh5nhyzyb/image/upload/v1640153483/Screen_Shot_2021-12-22_at_1.10.35_AM.png"
      roundImage
    >
      <div>home page</div>
    </GradientLayout>
  )
}

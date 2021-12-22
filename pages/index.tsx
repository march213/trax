import { GetServerSideProps } from 'next'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

import { GradientLayout } from '../components/gradientLayout'
import PrismaClient from '../lib/prisma'

export default function Home({ artists }) {
  return (
    <GradientLayout
      color="gray"
      subtitle="profile"
      title="Jane M"
      description="15 public playlists"
      image="https://res.cloudinary.com/dh5nhyzyb/image/upload/v1640153483/Screen_Shot_2021-12-22_at_1.10.35_AM.png"
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%" key={artist.id}>
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image src="https://placekitten.com/300/300" borderRadius="100%" />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let artists = []

  try {
    artists = await PrismaClient.artist.findMany({})
  } catch (error) {}

  return {
    props: { artists },
  }
}

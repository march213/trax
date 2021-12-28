import { Box, Flex, Text } from '@chakra-ui/layout'

const PlayerBar = () => {
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="2">
      <Flex align="center">
        <Box padding="5" color="white" width="30%">
          <Text fontSize="lg">Song Name</Text>
          <Text fontSize="sm">Artist Name</Text>
        </Box>
        <Box padding="5" width="40%">
          controls
        </Box>
      </Flex>
    </Box>
  )
}

export { PlayerBar }

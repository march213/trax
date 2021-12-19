import { Box } from '@chakra-ui/layout'

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top={0} left={0} width="250px" bgColor="blackAlpha.900">
        Sidebar
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left={0} right={0} bottom={0} height="100px" bgColor="blackAlpha.800">
        Play bar
      </Box>
    </Box>
  )
}

export { PlayerLayout }

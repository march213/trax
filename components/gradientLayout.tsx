import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const GradientLayout = ({ title, subtitle, color, image, children, description, roundImage }) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0, 0, 0, 0.9) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="10" align="end">
        <Box padding="5">
          <Image src={image} boxSize="160px" boxShadow="2xl" borderRadius={roundImage ? '50%' : '4px'} />
        </Box>
        <Box padding="5" lineHeight="40px" color="white">
          <Text fontSize="xs" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="xs">{description}</Text>
        </Box>
      </Flex>
      <Box py="10">{children}</Box>
    </Box>
  )
}

export { GradientLayout }

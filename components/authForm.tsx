import { FC, useState } from 'react'
import NextImage from 'next/image'
import { Box, Flex, Input, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { auth } from '../lib/mutations'

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await auth(mode, { email, password })
    setIsLoading(false)
    router.push('/')
  }

  return (
    <Box height="100vh" width="100vw" bg="blackAlpha.900" color="white">
      <Flex justify="center" align="center" height="100px" borderBottom="1px solid rgba(255, 255, 255, 0.3)">
        <NextImage src="/trax-logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="12" bg="gray.900" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              mb="4"
              borderColor="gray.600"
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              mb="4"
              borderColor="gray.600"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              disabled={!email || !password}
              _hover={{ backgroundColor: 'green.400' }}
              _focus={{ backgroundColor: 'green.600' }}
              _active={{ backgroundColor: 'green.600' }}
              _disabled={{
                backgroundColor: 'green.800',
                cursor: 'not-allowed',
                '&:hover,&:focus,&:active': {
                  backgroundColor: 'green.800',
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export { AuthForm }

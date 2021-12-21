import { FC, useState } from 'react'
import NextImage from 'next/image'
import { Box, Flex, Input, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import { auth } from '../lib/mutations'

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const email = e.target.elements?.email?.value
    const password = e.target.elements?.password?.value

    if (!email || !password) {
      setError('Please enter an email and password')
      setIsLoading(false)
      return
    }

    await auth(mode, { email, password })
    setError(undefined)
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
            <Input mb="4" borderColor="gray.600" name="email" type="email" placeholder="email" />
            <Input mb="4" borderColor="gray.600" name="password" type="password" placeholder="password" />
            {error ? (
              <Text mb="4" color="red.400">
                {error}
              </Text>
            ) : null}
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
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

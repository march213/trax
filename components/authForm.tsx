import { FC, useState } from 'react'
import NextImage from 'next/image'
import { Box, Flex, Input, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
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
    const firstName = e.target.elements?.fistName?.value
    const lastName = e.target.elements?.lastName?.value

    if (!email || !password) {
      setError('Please enter an email and password')
      setIsLoading(false)
      return
    }

    if (mode === 'signup') {
      await auth(mode, { email, password, firstName, lastName })
    } else {
      await auth(mode, { email, password })
    }
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
            {mode === 'signup' ? (
              <>
                <Input mb="4" borderColor="gray.600" name="firstName" type="text" placeholder="fist name" />
                <Input mb="4" borderColor="gray.600" name="lastName" type="text" placeholder="last name" />
              </>
            ) : null}
            {error ? (
              <Text mb="4" color="red.400">
                {error}
              </Text>
            ) : null}
            <Button type="submit" colorScheme="green" isLoading={isLoading}>
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export { AuthForm }

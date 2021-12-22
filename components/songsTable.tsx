import { Box } from '@chakra-ui/layout'
import { Table, Thead, Tbody, Td, Tr, Th, IconButton } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'

const SongsTable = ({ songs }) => {
  if (!songs) return null

  return (
    <Box px="5">
      <Box mb="5">
        <IconButton
          colorScheme="green"
          icon={<BsFillPlayFill fontSize="28px" color="white" />}
          rounded="3xl"
          aria-label="play button"
          boxShadow="2xl"
        />
      </Box>
      <Box>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song) => {
              return (
                <Tr key={song.id}>
                  <Td>{song.name}</Td>
                  <Td>{new Date(song.createdAt).toLocaleDateString()}</Td>
                  <Td>{song.duration}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

export { SongsTable }

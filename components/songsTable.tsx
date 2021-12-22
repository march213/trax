import { Box, Flex } from '@chakra-ui/layout'
import { Table, Thead, Tbody, Td, Tr, Th, IconButton } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { formatDate, formatTime } from '../lib/formatters'

const SongsTable = ({ songs }) => {
  if (!songs) return null

  return (
    <Box px="5" color="white">
      <Box mb="5">
        <IconButton
          colorScheme="green"
          icon={<BsFillPlayFill fontSize="28px" color="white" />}
          isRound
          size="lg"
          aria-label="play"
          boxShadow="2xl"
        />
      </Box>
      <Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid rgba(255, 255, 255, 0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song) => {
              return (
                <Tr
                  key={song.id}
                  cursor="cursor"
                  sx={{
                    transition: 'all 0.3s',
                    '&:hover': {
                      bg: 'rgba(255, 255, 255, 0.03)',
                    },
                  }}
                >
                  <Td>{song.id}</Td>
                  <Td>{song.name}</Td>
                  <Td>{formatDate(song.createdAt)}</Td>
                  <Td>{formatTime(song.duration)}</Td>
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

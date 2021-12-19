import NextImage from 'next/image'
import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from 'react-icons/md'

const Sidebar = () => {
  return (
    <Box width="100%" height="calc(100vh - 100px)" bg="blackAlpha.900" px="2" color="gray.300">
      <Box py="5">
        <Box width="120px" mb="5" px="5">
          <NextImage src="/trax-logo.svg" height={60} width={120} />
          Trax
        </Box>
      </Box>
    </Box>
  )
}

export { Sidebar }

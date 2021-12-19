import NextImage from 'next/image'
import NextLink from 'next/link'
import { Box, List, ListItem, ListIcon, Divider, Center, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from 'react-icons/md'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Your Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/favorites',
  },
]

const Sidebar = () => {
  return (
    <Box width="100%" height="calc(100vh - 100px)" px={2} color="gray.300" bg="blackAlpha.900">
      <Box py={5}>
        <Box width="120px" mb={5} px={5}>
          <NextImage src="/trax-logo.svg" height={60} width={120} />
        </Box>
        <Box mb={5}>
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem key={menu.name} px={5} fontSize="16px">
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} mr={5} color="white" />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider mb={5} color="whiteAlpha.400" />
        <Box>
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem key={menu.name} px={5} fontSize="16px">
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon as={menu.icon} mr={5} color="white" />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export { Sidebar }

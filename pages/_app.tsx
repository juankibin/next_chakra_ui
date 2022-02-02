import type { AppProps } from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  extendTheme,
  useDisclosure,
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Collapse,
} from '@chakra-ui/react';
import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from 'react-icons/fi';
import { useRouter } from 'next/router';
import { HamburgerIcon } from '@chakra-ui/icons';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};
const theme = extendTheme({ colors });

const navigation = [
  { name: 'Home', href: '/', isActive: true },
  { name: 'About', href: '/about', isActive: false },
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <ChakraProvider theme={theme}>
      <Flex
        h={[null, '100vh']}
        maxW='2000px'
        flexDir={['column', 'row']}
        overflow='hidden'
      >
        <Flex
          w={['100%', '100%', '10%', '15%', '15%']}
          flexDir='column'
          alignItems='center'
          backgroundColor='#020202'
          color='#fff'
          maxH='100vh'
        >
          <Flex
            flexDir='column'
            h={[null, null, '100vh']}
            justifyContent='space-between'
          >
            <Flex flexDir='column' as='nav'>
              <Heading
                mt={50}
                mb={[25, 50, 100]}
                fontSize={['4xl', '4xl', '2xl', '3xl', '4xl']}
                alignSelf='center'
                letterSpacing='tight'
              >
                Rise.
              </Heading>
              <Flex
                flexDir={['row', 'row', 'column', 'column', 'column']}
                align={[
                  'center',
                  'center',
                  'center',
                  'flex-start',
                  'flex-start',
                ]}
                wrap={['wrap', 'wrap', 'nowrap', 'nowrap', 'nowrap']}
                justifyContent='center'
              >
                {navigation.map((item) => (
                  <Flex
                    key={item.name}
                    className='sidebar-items'
                    mr={[2, 6, 0, 0, 0]}
                    onClick={() => {
                      router.push(item.href);
                      navigation.forEach((x) => (x.isActive = false));
                      item.isActive = true;
                    }}
                  >
                    <Link display={['none', 'none', 'flex', 'flex', 'flex']}>
                      <Icon
                        as={FiHome}
                        fontSize='2xl'
                        className='active-icon'
                      />
                    </Link>
                    <Link
                      _hover={{ textDecor: 'none' }}
                      display={['flex', 'flex', 'none', 'flex', 'flex']}
                    >
                      <Text className='active'>{item.name}</Text>
                    </Link>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={['100%', '100%', '60%', '60%', '100%']}
          flexDir={['row', 'column']}
          minH='100vh'
        >
          <Flex w='100%' minH='8vh' backgroundColor='red'>
            <IconButton
              borderRadius='none'
              aria-label='Search database'
              icon={<HamburgerIcon />}
              onClick={onToggle}
            />
          </Flex>
          <Flex w='100%' overflow='auto'>
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;

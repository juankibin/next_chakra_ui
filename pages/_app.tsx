import type { AppProps } from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  extendTheme,
  Flex,
  Box,
  Button,
  Stack,
  IconButton,
  useDisclosure,
  Collapse,
  Slide,
} from '@chakra-ui/react';
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
      <Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box borderWidth='2px' borderRadius='lg'>
            <Stack
              width='200px'
              spacing={4}
              direction='column'
              align='center'
              pt={20}
            >
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  type='button'
                  onClick={() => {
                    router.push(item.href);
                    navigation.forEach((x) => (x.isActive = false));
                    item.isActive = true;
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Stack>
          </Box>
        </Collapse>
        <Stack width='100%' direction='column'>
          <Box height='50px' overflow='hidden' borderWidth='2px'>
            <IconButton
              borderRadius='none'
              aria-label='Search database'
              icon={<HamburgerIcon />}
              onClick={onToggle}
            />
          </Box>
          <Component {...pageProps} />
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;

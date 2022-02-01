import type { NextPage } from 'next';
import { SimpleGrid, Box } from '@chakra-ui/react';

const About: NextPage = () => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box bg='tomato' height='80px'>
        Here
      </Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
      <Box bg='tomato' height='80px'></Box>
    </SimpleGrid>
  );
};

export default About;

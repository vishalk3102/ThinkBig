import { Avatar, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import img from '../../assets/images/aboutimg.jpg';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding='8'>
      <VStack>
        <Avatar src={img} boxSize={['40', '48']} />
        <Text children='Co-Founder' opacity={0.7} />
      </VStack>

      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children='Vishal Kumar' size={['md', 'xl']} />
        <Text
          children={
            'Hi, we at ThinkBig are a team of expert programmers and professional teachers. Our mission is to provide quality content at a reasonable price.'
          }
          textAlign={['center', 'left']}
        />
      </VStack>
    </Stack>
  );
};

export default Founder;

import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti';
import { DiGithubAlt } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg='blackAlpha.900' minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width='full'>
          <Heading children='All Rights Reserved' color={'white'} />
          <Heading
            children='Vishal Kumar'
            color={'yellow.600'}
            fontFamily={'body'}
            size='sm'
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent='center'
          color={'white'}
          fontSize='30'
        >
          <a
            href='https://www.linkedin.com/in/vishalk3102/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TiSocialTwitter />
          </a>
          <a
            href='https://www.instagram.com/vishal_k_31'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TiSocialInstagram />
          </a>
          <a
            href='https://github.com/vishalk3102'
            target='_blank'
            rel='noopener noreferrer'
          >
            <DiGithubAlt />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;

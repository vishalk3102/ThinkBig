import { Avatar, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Founder = () => {
  return (
      <Stack
          direction={['column', 'row']}
          spacing={['4', '16']}
          padding='8'
      >
          <VStack>
              <Avatar
                  src='https://avatars.githubusercontent.com/u/110460904?v=4'
                  boxSize={['40', '48']}
              />
              <Text
                  children='Co-Founder'
                  opacity={0.7}
              />
          </VStack>

          <VStack
              justifyContent={'center'}
              alignItems={['center', 'flex-start']}
          >
              <Heading
                  children='Adil Khursheed'
                  size={['md', 'xl']}
              />
              <Text
                  children={"Hi, we at course bundler are a team of expert programmers and professional teachers. Our mission is to provide quality content at a reasonable price."}
                  textAlign={['center', 'left']}
              />
          </VStack>
      </Stack>
  )
}

export default Founder
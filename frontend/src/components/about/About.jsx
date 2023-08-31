import { Box, Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Founder from './Founder'
import introVideo from '../../assets/videos/intro.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import TandC from './TandC';
import termsandconditions from '../../assets/docs/termsandcondition'

const About = () => {
  return (
      <Container
          maxW={'container.lg'}
          padding='16'
          boxShadow={'lg'}
      >
          
          <Heading
              children='About Us'
              textAlign={['center', 'left']}
          />

          <Founder />

          <Stack
              m={'8'}
              direction={['column', 'row']}
              alignItems='center'
          >
              <Text
                  fontFamily={'cursive'}
                  m='8'
                  textAlign={['center', 'left']}
              >
                  We are a video streaming platform with some premium courses available only for premium users.
              </Text>
              
              <Link to='/subscribe'>
                  <Button
                      variant={'ghost'}
                      colorScheme='yellow'
                  >
                      Checkout Our Plan
                  </Button>
              </Link>
          </Stack>

          <Box>
              <video
                autoPlay={true}
                  controls
                  muted
                  loop
                controlsList='nodownload nofullscreen noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                  src={introVideo}

              >
              </video>
          </Box>

          <TandC termsandconditions = {termsandconditions} />
          
          <HStack
              my={'4'}
              padding='4'
          >
              <RiSecurePaymentFill />
              <Heading
                  children='Payment is secured by Razorpay'
                  size={'xs'}
                  fontFamily='sans-serif'
                  textTransform={'uppercase'}
              />
          </HStack>
    </Container>
  )
}

export default About
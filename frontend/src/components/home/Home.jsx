import React from 'react'
import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import "./home.css";
import { Link } from 'react-router-dom';
import course from '../../assets/images/course.svg';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';


const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={['16', '18', '20', '56']}
        >
          <VStack
            width={"full"}
            alignItems={['center', 'flex-end']}
            spacing='8'
          >
            <Heading textAlign={['center', 'left']} children="Learn from the experts" size={"2xl"} />
            <Text textAlign={['center', 'left']} children="Find Valuable content at reasonable price" />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="yellow">
                Explore Courses
              </Button>
            </Link>
          </VStack>

          <Image className='courseImg' boxSize={'md'} src={course} objectFit="contain" />

        </Stack>
      </div>

      <Box padding={"8"} bg="blackAlpha.800">
        <Heading
          textAlign={"center"}
          fontFamily="body"
          color={"yellow.400"}
          children="OUR BRANDS"
        />

        <HStack
          className='brandsBanner'
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>

      </Box>

      <div className="container2">
        <video
          autoPlay={true}
          controls
          controlsList='nodownload nofullscreen noremoteplayback'
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        >
        </video>
      </div>
    </section>
  )
}

export default Home
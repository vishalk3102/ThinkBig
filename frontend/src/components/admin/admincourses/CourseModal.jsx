import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../auth/Register';

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteLectureButtonHandler,
  courseTitle,
  addLectureButtonHandler,
  lectures = [],
  loading,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  const closeHandler = () => {
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={closeHandler}
      scrollBehavior="outside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody p={'16'}>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
              </Box>

              <Heading children={'Lectures'} size={'lg'} />

              {lectures.map((item, i) => (
                <VideoCard
                  key={i}
                  title={item.title}
                  description={item.description}
                  num={i + 1}
                  lectureId={item._id}
                  courseId={id}
                  deleteButtonHandler={deleteLectureButtonHandler}
                  loading={loading}
                />
              ))}
            </Box>

            <Box>
              <form
                onSubmit={e =>
                  addLectureButtonHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={'4'}>
                  <Heading
                    children="Add Lecture"
                    size={'md'}
                    textTransform={'uppercase'}
                  />

                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="purple.300"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <Input
                    required
                    accept="video/mp4"
                    type={'file'}
                    focusBorderColor="purple.300"
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'purple',
                      },
                    }}
                    onChange={changeVideoHandler}
                  />

                  {videoPrev && (
                    <video
                      src={videoPrev}
                      controlsList="nodownload"
                      controls
                    ></video>
                  )}

                  <Button
                    isLoading={loading}
                    w={'full'}
                    colorScheme="purple"
                    type="submit"
                  >
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>

        <ModalFooter>
          <Button onClick={closeHandler}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
  loading,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      padding={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>

      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
        isLoading={loading}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}

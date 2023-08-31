import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ChangePhotoBox from './ChangePhotoBox';
import {
  removeFromPlaylist,
  updateProfilePicture,
} from '../../redux/actions/profileAction';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../../redux/actions/userAction';
import { toast } from 'react-hot-toast';
import { cancelSubscription } from '../../redux/actions/subscriptionAction';

const Profile = ({ user }) => {
  const dispatch = useDispatch();

  const { loading, message, error } = useSelector(state => state.profile);
  const {
    loading: subscriptionLoading,
    message: subscriptionMessage,
    error: subscriptionError,
  } = useSelector(state => state.subscription);

  const removeFromPlaylistHandler = async id => {
    await dispatch(removeFromPlaylist(id));
    dispatch(getMyProfile());
  };

  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('file', image);

    await dispatch(updateProfilePicture(myForm));

    dispatch(getMyProfile());
  };

  const cancelSubscriptionHandler = () => {
    dispatch(cancelSubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: 'clearMessage' });
      dispatch(getMyProfile());
    }
  }, [dispatch, error, message, subscriptionError, subscriptionMessage]);

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container minH={'95vh'} maxW="container.lg" py={'8'}>
      <Heading children="profile" m={'8'} textTransform="uppercase" />

      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems="center"
        spacing={['8', '16']}
        padding="8"
      >
        <VStack>
          <Avatar boxSize={'48'} src={user.avatar.url} />
          <Button colorScheme={'yellow'} variant="ghost" onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Created At" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription && user.subscription.status === 'active' ? (
                <Button
                  onClick={cancelSubscriptionHandler}
                  color={'yellow.500'}
                  variant="unstyled"
                  isLoading={subscriptionLoading}
                >
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems="center">
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading children="Playlist" size={'md'} my="8" />

      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems="center"
          flexWrap={'wrap'}
          p="4"
        >
          {user.playlist.map(elem => (
            <VStack w={'48'} m="2" key={elem.course}>
              <Image boxSize={'full'} objectFit="contain" src={elem.poster} />

              <HStack>
                <Link to={`/course/${elem.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>

                <Button
                  isLoading={loading}
                  onClick={() => removeFromPlaylistHandler(elem.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
        loading={loading}
      />
    </Container>
  );
};

export default Profile;

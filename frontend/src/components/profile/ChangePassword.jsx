import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profileAction';
import { toast } from 'react-hot-toast';

const ChangePassword = () => {
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    dispatch(changePassword(oldpassword, newpassword));
  };

  const { loading, error, message } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Container py={'16'} minH="90vh">
      <form onSubmit={submitHandler}>
        <Heading
          children="Change Password"
          my={'16'}
          textTransform="uppercase"
          textAlign={['center', 'left']}
        />

        <VStack>
          <Input
            required
            value={oldpassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old password"
            type={'password'}
            focusBorderColor="yellow.500"
          />

          <Input
            required
            value={newpassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New password"
            type={'password'}
            focusBorderColor="yellow.500"
          />

          <Button
            isLoading={loading}
            w={'full'}
            colorScheme="yellow"
            type="submit"
          >
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;

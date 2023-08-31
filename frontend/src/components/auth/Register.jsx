import React, { useState } from 'react'
import {Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/userAction';

export const fileUploadCss = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "#ECC94B",
    backgroundColor:"#FFFFFF"
  }

const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,
}

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");
  
  const dispatch = useDispatch();

const changeImageHandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
        setImagePrev(reader.result);
        setImage(file);
    }
}

const submitHandler = (e) => {
  e.preventDefault();
  const myForm = new FormData();

  myForm.append("name",name)
  myForm.append("email",email)
  myForm.append("password",password)
  myForm.append("file", image)

  dispatch(register(myForm));
}
  return (
    <Container h={'100vh'}>
      <VStack
       h={'full'}
       justifyContent='center'
       spacing={'16'}
      >
        <Heading
            children={"Registration"}
            textTransform='uppercase'
        />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
            <Box
                marginY={'4'}
                display={'flex'}
                justifyContent={"center"}
            >
                <Avatar src={imagePrev} size={'2xl'}/>
            </Box>
          <Box marginY={'4'}>
            <FormLabel
              htmlFor='name'
              children='Name'
            />
            <Input
              required
              id='name'
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Enter Your Name'
              type={'text'}
              focusBorderColor='yellow.500'
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel
              htmlFor='email'
              children='Email Address'
            />
            <Input
              required
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='example@gmail.com'
              type={'email'}
              focusBorderColor='yellow.500'
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel
              htmlFor='password'
              children='Password'
            />
            <Input
              required
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter your password'
              type={'password'}
              focusBorderColor='yellow.500'
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel
              htmlFor='chooseAvatar'
              children='Choose Avatar'
            />
            <Input
              required
              accept='image/*'
              id='chooseAvatar'
              type={'file'}
              focusBorderColor='yellow.500'
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>
          <Button
            my='4'
            colorScheme={'yellow'}
            type='submit'
          >
            Sign Up
          </Button>

          <Box my={'4'}>
            Already registered? {" "}
            <Link to='/login'>
              <Button
                colorScheme={'yellow'}
                variant='link'
              >
                Log In
              </Button> {" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  )
}

export default Register
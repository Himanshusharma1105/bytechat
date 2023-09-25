import React, { useState, useRef } from 'react';
import { FormControl, FormLabel, Input, Button, Flex, Box, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FormHelperText } from '@chakra-ui/react';
import '../style.scss';

import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";






function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue); // Call the onChange prop to update the parent component's state
  };

  const handleClick = () => setShow(!show);

  return (
    <FormControl isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          value={value}
          onChange={handlePasswordChange} // Handle password changes here
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  });
  

 

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the form data state based on the input field's name
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Perform further actions, such as sending data to a server
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Access the form data and selected file here
    console.log('Form Data:', formData);
    
  
    const {email, password } = formData; // Destructure the values

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  

  
   
  };
  
  
  
  

  
  // You can now pass these variables to a function or perform further actions
 

  

 

 
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <Flex flexDirection={'column'} color={'black'} background={'antiquewhite'} borderRadius={'10px'} margin={'10px'} padding={'20px'}>
          <Box fontWeight={'bold'} color={'black'} alignSelf={'center'} padding={'10px'} fontSize={'2xl'}>
            <span className="logo">Bytechat</span>
          </Box>
          <Box alignSelf={'center'} fontSize={'2xl'}>
            <span className="title">Register</span>
          </Box>

          <form className="form" onSubmit={handleSubmit}>
            <FormControl isRequired>
             
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <PasswordInput
  value={formData.password}
  onChange={(newValue) => handleInputChange({ target: { name: 'password', value: newValue } })}
/>

              <FormHelperText>We'll never share your email or password.</FormHelperText>
            </FormControl>
       

            <Button colorScheme="facebook" size="sm" fontSize="sm" type="submit">
              Log In
            </Button>
          </form>
          <p> Don't Have an account? <Link to="/register">Register!</Link></p>
        </Flex>
      </div>
    </div>
  );
};

export default Login;
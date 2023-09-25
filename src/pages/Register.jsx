import React, { useState, useRef } from 'react';
import { FormControl, FormLabel, Input, Button, Flex, Box, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FormHelperText } from '@chakra-ui/react';
import '../style.scss';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";



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

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // Store the selected file in state
    setSelectedFile(file);
    console.log('Selected file:', file.name);
  };

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
    console.log('Selected File:', selectedFile);
  
    const { firstName, email, password } = formData; // Destructure the values
    console.log(password);
  
    try {
      // Create the user with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password);
  
      // After creating the user, you can perform additional actions, if needed
     
  
      // Perform other actions like uploading the avatar file, etc.
      // ...
  
      console.log('User created:', res.user);
    } catch (error) {
      // Handle any errors that occur during user creation
      console.error('Error creating user:', error);
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
              <FormLabel>First name</FormLabel>
              <Input
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
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
            <Box margin="10px">
              <input
                type="file"
                id="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileInputChange}
              />
              <label htmlFor="file" onClick={handleFileInputClick}>
                Upload Avatar!
              </label>
            </Box>

            <Button colorScheme="facebook" size="sm" fontSize="sm" type="submit">
              Sign Up
            </Button>
          </form>
          <p> Have an account? Login!</p>
        </Flex>
      </div>
    </div>
  );
};

export default Register;
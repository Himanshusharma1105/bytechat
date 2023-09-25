import React from 'react';
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, Flex } from '@chakra-ui/react';
import { FormHelperText } from '@chakra-ui/react';
import "../style.scss"
import { Box } from '@chakra-ui/react';
import { useRef } from 'react';



function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

const Login = () => {
    const fileInputRef = useRef(null);
  
    const handleFileInputClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileInputChange = (e) => {
      const selectedFile = e.target.files[0];
      // Handle the selected file as needed
      console.log('Selected file:', selectedFile.name);
    };
  
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <Flex flexDirection={'column'} color={'black'} background={'antiquewhite'} borderRadius={'10px'} margin={'10px'} padding={'20px'}>
            <Box fontWeight={'bold'} color={'black'} alignSelf={'center'} padding={'10px'} fontSize={'2xl'}>
              <span className="logo">Bytechat</span>
            </Box>
            <Box alignSelf={'center'} fontSize={'2xl'}>
              <span className="title">Login</span>
            </Box>
  
            <form className="form">
              <FormControl isRequired>
               
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='Enter Your Email' />
                <FormLabel>Password</FormLabel>
                <PasswordInput />
                <FormHelperText>We'll never share your email or password.</FormHelperText>
              </FormControl>
             

             
             
  
              <Button colorScheme='facebook' size='sm' fontSize='sm'> Sign In </Button>
  
            </form>
            <p>  Don't have an account? Register!</p>
            
            {/* Hidden file input and label */}
           
          </Flex>
        </div>
      </div>
    );
  }
  
  export default Login;
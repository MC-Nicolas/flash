import React, { useState } from 'react';

import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import FlexContainer from './flexContainer/flexContainer.component';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      method='POST'
      className='w-full h-full flex flex-col'
      onSubmit={handleSubmit}
    >
      <FlexContainer flex='col'>
        <TextField
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          label='Email'
          type='email'
          variant='standard'
          style={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type='password'
          label='Password'
          variant='standard'
          style={{ marginBottom: '30px' }}
        />
        <Button variant='contained' endIcon={<SendIcon />} type='submit'>
          Login
        </Button>
      </FlexContainer>
    </form>
  );
};

export default LoginForm;

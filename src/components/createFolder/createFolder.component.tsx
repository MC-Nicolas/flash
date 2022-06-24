import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

import toast from 'react-hot-toast';
import BlurLayer from '../blurLayer/blurLayer.component';
import FlexContainer from '../flexContainer/flexContainer.component';

import SendIcon from '@mui/icons-material/Send';
import { Button, TextField } from '@mui/material';

import { createNewFolder } from '../../database/createNewFolder';

type Props = {};

const CreateFolder = (props: Props) => {
  const { email } = useAppSelector((state) => state.user);
  const [folderName, setFolderName] = useState('');
  const handleSubmit = async () => {
    await createNewFolder(email, folderName);
    setFolderName('');
    toast.success('Folder created successfully');
  };
  return (
    <FlexContainer height='100%'>
      <BlurLayer
        className='flex flex-col justify-evenly'
        width='450px'
        height='500px'
      >
        <h2 className='text-xl font-bold tracking-wider'>Create new folder</h2>
        <TextField
          onChange={(e) => setFolderName(e.target.value)}
          label='Folder name'
          type='text'
          variant='standard'
          style={{ marginBottom: '20px' }}
        />
        <Button
          color='success'
          variant='contained'
          endIcon={<SendIcon />}
          onClick={handleSubmit}
        >
          Create
        </Button>
      </BlurLayer>
    </FlexContainer>
  );
};

export default CreateFolder;

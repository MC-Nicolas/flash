import React, { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

import toast from 'react-hot-toast';
import BlurLayer from '../blurLayer/blurLayer.component';
import FlexContainer from '../flexContainer/flexContainer.component';

import SendIcon from '@mui/icons-material/Send';
import { Button, TextField } from '@mui/material';

import { createNewFolder } from '../../database/createNewFolder';
import MuiSelect from '../muiSelect/muiSelect.component';
import { extractKeys } from '../../utils/formatting';
import { createNewSubFolder } from '../../database/createNewSubFolder';

type Props = {};

const CreateSubFolder = (props: Props) => {
  const { email } = useAppSelector((state) => state.user);
  const { folders } = useAppSelector((state) => state.user);

  const [folderToAddSubFolder, setFolderToAddSubFolder] = useState('');

  const foldersNames = extractKeys(folders);

  const [subFolderName, setSubFolderName] = useState('');
  const handleSubmit = async () => {
    const isError = await createNewSubFolder(
      email,
      folderToAddSubFolder,
      subFolderName
    );
    if (isError) {
      toast.error('Folder already exists');
    } else {
      setFolderToAddSubFolder('');
      toast.success('Folder created successfully');
    }
  };
  return (
    <FlexContainer height='100%'>
      <BlurLayer
        className='flex flex-col justify-evenly'
        width='450px'
        height='500px'
      >
        <h2 className='text-xl font-bold tracking-wider'>
          Create new Sub folder
        </h2>
        <FlexContainer
          width='200px'
          className='my-5'
          flex='col'
          justify='between'
          height='80px'
        >
          <TextField
            onChange={(e) => setSubFolderName(e.target.value)}
            value={subFolderName}
            label='Sub Folder name'
            type='text'
            variant='standard'
            style={{ marginBottom: '20px' }}
          />
          <MuiSelect
            title='Folder'
            value={folderToAddSubFolder}
            options={foldersNames}
            onChange={(e: { target: { value: string } }) =>
              setFolderToAddSubFolder(e.target.value)
            }
          />
        </FlexContainer>
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

export default CreateSubFolder;

import React, { useState } from 'react';

import toast from 'react-hot-toast';
import FlexContainer from '../flexContainer/flexContainer.component';
import BlurLayer from '../blurLayer/blurLayer.component';

import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MuiSelect from '../muiSelect/muiSelect.component';
import { useAppSelector } from '../../redux/hooks';
import { extractKeys } from '../../utils/formatting';
import { useFolders } from '../../hooks/folders/folders.hooks';
import { createNewFlashcard } from '../../database/createNewFlashcard';

const CreateFlashcard = () => {
  const [folderToAddFlashcard, setFolderToAddFlashcard] = useState('');
  const [subFolderToAddFlashcard, setSubFolderToAddFlashcard] = useState('');
  const [flashcardData, setFlashcardData] = useState({ front: '', back: '' });

  const { email } = useAppSelector((state) => state.user);
  const { folders } = useAppSelector((state) => state.user);
  const { subFolders } = useFolders(folders, folderToAddFlashcard);

  const foldersNames = extractKeys(folders);
  const subFoldersNames = extractKeys(subFolders);

  const handleSubmit = async () => {
    await createNewFlashcard(
      email,
      folderToAddFlashcard,
      subFolderToAddFlashcard,
      flashcardData.front,
      flashcardData.back
    );
    setFlashcardData({ front: '', back: '' });
    toast.success('Flashcard created successfully');
  };

  return (
    <FlexContainer height='100%'>
      <BlurLayer
        className='flex flex-col justify-evenly'
        width='450px'
        height='500px'
      >
        <h2 className='text-xl font-bold tracking-wider'>
          Create new Flashcard
        </h2>
        <FlexContainer flex='col' height='100px'>
          <TextField
            onChange={(e: any) =>
              setFlashcardData({ ...flashcardData, front: e.target.value })
            }
            label='Front side'
            type='text'
            variant='standard'
            value={flashcardData.front}
            style={{ marginBottom: '20px' }}
          />
          <TextField
            onChange={(e: any) =>
              setFlashcardData({ ...flashcardData, back: e.target.value })
            }
            label='Back side'
            type='text'
            variant='standard'
            value={flashcardData.back}
            style={{ marginBottom: '20px' }}
          />
          <FlexContainer width='200px' flex='col' className='my-5'>
            <MuiSelect
              title='Folder'
              value={folderToAddFlashcard}
              options={foldersNames}
              onChange={(e: { target: { value: string } }) =>
                setFolderToAddFlashcard(e.target.value)
              }
            />
            <MuiSelect
              title='Sub Folder'
              value={subFolderToAddFlashcard}
              options={subFoldersNames}
              onChange={(e: { target: { value: string } }) =>
                setSubFolderToAddFlashcard(e.target.value)
              }
            />
          </FlexContainer>
        </FlexContainer>
        <Button
          color='success'
          variant='contained'
          endIcon={<SendIcon />}
          type='submit'
          onClick={handleSubmit}
        >
          Create
        </Button>
      </BlurLayer>
    </FlexContainer>
  );
};

export default CreateFlashcard;

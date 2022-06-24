import React, { useState } from 'react';

import FolderIcon from '@mui/icons-material/Folder';

import ButtonIconAndText from '../components/buttonIconAndText/buttonIconAndText.component';
import FlexContainer from '../components/flexContainer/flexContainer.component';
import ArticleIcon from '@mui/icons-material/Article';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import { Button } from '@mui/material';
import CreateFolder from '../components/createFolder/createFolder.component';
import CreateFlashcard from '../components/createFlashcard/createFlashcard.component';
import CreateSubFolder from '../components/createSubFolder/createSubFolder.component';

type Props = {};

const CreatePage = (props: Props) => {
  const [createType, setCreateType] = useState('folder');
  return (
    <FlexContainer flex='col'>
      <FlexContainer width='600px' height='300px' justify='between'>
        <Button
          variant='contained'
          endIcon={<FolderIcon />}
          size='large'
          onClick={() => setCreateType('folder')}
        >
          Folder
        </Button>
        <Button
          variant='contained'
          endIcon={<FolderCopyIcon />}
          size='large'
          onClick={() => setCreateType('Sub folder')}
        >
          Sub Folder
        </Button>
        <Button
          variant='contained'
          endIcon={<ArticleIcon />}
          size='large'
          onClick={() => setCreateType('flashcard')}
        >
          Flashcards
        </Button>
      </FlexContainer>
      {createType === 'folder' && <CreateFolder />}
      {createType === 'flashcard' && <CreateFlashcard />}
      {createType === 'Sub folder' && <CreateSubFolder />}
    </FlexContainer>
  );
};

export default CreatePage;

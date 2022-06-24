import React from 'react';

import FlexContainer from '../flexContainer/flexContainer.component';
import DecksContainer from '../decksContainer/decksContainer.component';
import Sidebar from '../sidebar/sidebar.component';
import { useAppSelector } from '../../redux/hooks';
import { extractKeys } from '../../utils/formatting';

//

const Dashboard = () => {
  const { folders } = useAppSelector((state) => state.user);
  const { activeFolder } = useAppSelector((state) => state.foldersNav);
  const extractedFolders = extractKeys(folders);

  return (
    <FlexContainer className='justify-between'>
      <Sidebar folders={extractedFolders} />
      <FlexContainer>
        <DecksContainer activeFolder={activeFolder} />
      </FlexContainer>
    </FlexContainer>
  );
};

export default Dashboard;

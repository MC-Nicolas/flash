import { useEffect, useState } from 'react';

export const useFolders = (folders: any, activeFolder: string) => {
  const [subFolders, setSubFolders] = useState([]);

  useEffect(() => {
    if (activeFolder) {
      const subFolders = folders[activeFolder.toLowerCase()];
      setSubFolders(subFolders);
    }
  }, [folders, activeFolder]);

  return { subFolders };
};

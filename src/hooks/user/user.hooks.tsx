import { useEffect, useState } from 'react';
import { getDataForUser } from '../../redux/user/userActions';

export const useUserInfos = (email: string) => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await getDataForUser(email);
        const folders = await userData?.folders;
        setFolders(folders);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [email]);

  return { folders };
};

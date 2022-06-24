import { doc, getDoc, setDoc } from 'firebase/firestore';
import { database } from './firebase';

export const createNewSubFolder = async (
  email: string,
  folderName: string,
  subFolderName: string
) => {
  let isError = false;
  const userRef = doc(database, 'users', email);

  const userRefSnapshot = await getDoc(userRef);

  if (userRefSnapshot.exists()) {
    const data = userRefSnapshot.data();
    const { folders } = data;
    const subFolder = folders[folderName][subFolderName];
    if (subFolder) {
      return (isError = true);
    } else {
      await setDoc(
        userRef,
        { folders: { [folderName]: { [subFolderName]: {} } } },
        { merge: true }
      );
    }
  }

  return isError;
};

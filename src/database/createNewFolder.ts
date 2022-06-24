import { doc, getDoc, setDoc } from 'firebase/firestore';
import { database } from './firebase';

export const createNewFolder = async (email: string, folderName: string) => {
  const userRef = doc(database, 'users', email);
  await setDoc(userRef, { folders: { [folderName]: {} } }, { merge: true });
};

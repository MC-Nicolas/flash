import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../database/firebase';

// Async
export const getDataForUser = async (email: string) => {
  const userRef = doc(database, 'users', email);
  const docSnap = await getDoc(userRef);

  return docSnap.data();
};

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { database } from './firebase';

export const createNewFlashcard = async (
  email: string,
  folderName: string,
  subFolderName: string,
  flashcardFront: string,
  flashcardBack: string
) => {
  const userRef = doc(database, 'users', email);
  console.log(email, folderName, subFolderName, flashcardFront, flashcardBack);
  await setDoc(
    userRef,
    {
      folders: {
        [folderName]: {
          [subFolderName]: {
            flashcards: [{ front: flashcardFront, back: flashcardBack }],
          },
        },
      },
    },
    { merge: true }
  );
};

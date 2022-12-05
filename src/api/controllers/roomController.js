import { db } from "../../../firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const getRooms = async (uid) => {
  const docRef = doc(db, "rooms", uid);
  let result = { success: false };

  await getDoc(docRef)
    .then((docSnap) => {
      if (docSnap.exists()) {
        result = { success: true, uid, ...docSnap.data() };
      } else {
        result = { success: false, uid };
      }
    })
    .catch((err) => (result = { success: false }));

  return result;
};

export const postRooms = async (uid, data) => {
  const docRef = doc(db, "rooms", uid);

  await setDoc(docRef, data);
};

export const updateRooms = async (uid, data) => {
  const docRef = doc(db, "rooms", uid);

  await setDoc(docRef, data);
};

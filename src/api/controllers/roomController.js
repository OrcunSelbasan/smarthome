import { db } from "../../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

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
  await setDoc(doc(db, "rooms", uid), data);
}

import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth/web-extension";

import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";

export const useRegister = () => {
  const [isPending, setIspending] = useState(false);

  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setIspending(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      setIspending(false);
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      setIspending(false);
    }
  };
};

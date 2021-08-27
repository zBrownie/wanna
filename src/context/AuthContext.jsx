import { useState, useEffect } from "react";
import { createContext } from "use-context-selector";
import { Auth, Firestore } from "../services/fb";

const {
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} = Auth;

const { getFirestore, addDoc, collection } = Firestore;
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const auth = getAuth();
  const db = getFirestore();
  const [userApp, setUserApp] = useState(null);

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleCreateAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const userData = {
          userName: user.email.split("@")[0],
          email: user.email,
          admin: false,
          cart: [],
          cpf: 0,
          cep: 0,
          location: {},
          lastLogin: new Date(),
        };
        addDoc(collection(db, "users"), userData)
          .then((doc) => {
            console.log("ID", doc.id);
          })
          .catch((e) => {})
          .finally(() => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/firebase.User

        const uid = user.uid;
      }
    });
  }, [auth]);
  return (
    <AuthContext.Provider
      value={{ userApp, handleLogin, handleLogout, handleCreateAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
}

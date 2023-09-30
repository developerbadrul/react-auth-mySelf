import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase.init";
import Dashboard from "../Pages/Dashboard/Dashboard";

const handleSignUp = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const fullName = e.target.text.value;
    // console.log(e); 
    console.log("working sign in", fullName, email, password);
    createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user.email);
        })
        .catch(error => {
            console.log(error);
        })
};

const handleLoginIn = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("working login", email, password);
    signInWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result.user))
        .catch(error => console.log(error.message))
}


const handlaGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider)
        .then(result => <Dashboard user={result}></Dashboard>)
        .catch(error => console.log(error.massage))
    
}

export { handleSignUp, handleLoginIn, handlaGoogleSignIn};
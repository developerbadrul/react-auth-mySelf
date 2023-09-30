import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.init";

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


export { handleSignUp, handleLoginIn };
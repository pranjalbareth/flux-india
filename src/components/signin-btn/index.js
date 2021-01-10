import React, {useContext} from 'react'
import { UserContext } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth';
import"./style.css";

export default function SignInBtn() {
const [user, setUser] = useContext(UserContext).user;

const signInBtnClick = async () => {
  let userBySignIn = await signInWithGoogle();
  if(userBySignIn) setUser(userBySignIn);
  console.log(userBySignIn);
};
    return (
        <div className="signInBtn" onClick={signInBtnClick}  style={{cursor:"pointer"}}>
            <p>Sign in with Google</p>
        </div>
    );
}

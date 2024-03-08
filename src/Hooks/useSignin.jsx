import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Components/Others/Loader/Loader';
import auth from '../../firebase.init';

const useSignin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, gLoading] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const from = location.state?.from?.pathname || '/productdetails/:id';

    const signInGoogle = async () => {
        await signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
                toast("User SingIn Successfully !")
            })

    };

    if (gLoading) {
        return <Loader />;
    }



    const logOut = () => {
        return signOut(auth)
            .then((result) => { })
            .catch((error) => {
                console.log(error);
            });
    };



    return {
        signInGoogle,
        logOut,

    };
};

export default useSignin;
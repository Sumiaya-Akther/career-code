import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import registerLotti from "../../assets/lotties/animation.json"
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';

const Login = () => {
     const navigate = useNavigate();
    const { handleLogin, googleLogin } = useContext(AuthContext);
    const location = useLocation();

        const handleSubmit = (e) => {
        e.preventDefault()
        const userEmail = e.target.userEmail.value
        const password = e.target.password.value


        handleLogin(userEmail, password)
            .then((userCredential) => {
                // Signed in 
                const currentUser = userCredential.user;
                if (currentUser) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(`${location.state ? location.state : "/"}`);
                }
            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong please try again!",
                    });
                }
            });

    }


     const handleGoogleLogin = async () => {
        try {
            const user = await googleLogin();
            // console.log(user);


            if (user) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(`${location.state ? location.state : "/"}`);
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error",
            });
        }
    };


    return (
         <div className="grid items-center grid-cols-1 gap-10 px-8 py-10 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          
            <div className="hidden md:flex flex-col justify-between">
                <Lottie animationData={registerLotti} loop={true}>

                </Lottie>
            </div>
            <div className='py-8 px-6'>
            <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 bg-cyan-500">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center dark:text-gray-600">Dont have account?
                    <NavLink to="/register" rel="noopener noreferrer" className="focus:underline hover:underline font-semibold">Register here</NavLink>
                </p>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-bold">Email address</label>
                            <input type="email" name="userEmail" id="email" required placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm font-bold">Password</label>
                                    Forgot password?
                            </div>
                            <input type="password" name="password" id="password" required placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-semibold bg-black text-white rounded-md dark:bg-violet-600 dark:text-gray-50">Log in</button>
                </form>
            </div>
        </div>

        </div>
    );
};

export default Login;
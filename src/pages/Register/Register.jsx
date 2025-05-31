import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import registerLotti from "../../assets/lotties/animation.json"
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const navigate = useNavigate();
    const { handleregister, setUser, updateUser } = useContext(AuthContext);
    const [nameError, setNameError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const fullname = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        //console.log(fullname, photo, email, password);

        if (password.length < 6) {
            setNameError("Password Should be more than 6 character");
            return;
        } else {
            setNameError("");
        }

        if (!/[a-z]/.test(password)) {
            setNameError("Password must be on Lowercase");
            return
        } else {
            setNameError("");
        }

        if (!/[A-Z]/.test(password)) {
            setNameError("Password must be on Uppercase");
            return
        } else {
            setNameError("");
        }

        handleregister(email, password)

            .then((userCredential) => {

                const currentUser = userCredential.user;

                updateUser({ displayName: fullname, photoURL: photo });
                setUser({ ...currentUser, displayName: fullname, photoURL: photo })

                if (currentUser) {

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/");
                }
            })

    };


    // const handleLogin = async () => {
    //     try {
    //         const user = await googleLogin();

    //         if (user) {
    //             Swal.fire({
    //                 position: "center",
    //                 icon: "success",
    //                 title: "User Created Successfully",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });

    //             navigate("/");
    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             title: "Error!",
    //             text: error.message,
    //             icon: "error",
    //         });
    //     }
    // };




    return (
        <div className="grid items-center grid-cols-1 gap-10 px-8 py-10 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <div className='p-3'>
                <div className="flex flex-col  p-6 rounded-md sm:p-10 bg-cyan-500 ">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Register Now</h1>
                        <p className="text-sm dark:text-gray-600">Register a new account</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm text-black font-semibold">Full Name</label>
                                <input type="text" name="name" id="name" required placeholder="John Henry" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="photo" className="block mb-2 text-sm text-black font-semibold">User Picture</label>
                                <input type="url" name="photo" id="photo" required placeholder="photo url..." className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-black font-semibold">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-black font-semibold">Password</label>
                                </div>
                                <input type="password" name="password" required id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                {nameError && <p className='text-sm text-error'>{nameError}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full btn bg-black text-white px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Register Now</button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-600 text-black">Already have an account?
                                <NavLink to="/login" rel="noopener noreferrer" href="#" className="hover:underline font-semibold dark:text-violet-600">Login</NavLink>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden md:flex flex-col justify-between">
                <Lottie animationData={registerLotti} loop={true}>

                </Lottie>
            </div>

        </div>
    );
};

export default Register;
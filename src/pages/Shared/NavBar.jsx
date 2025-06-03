import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

const NavBar = () => {
    const navigate = useNavigate();
     const { user, logOut } = useContext(AuthContext);

    const links = <>
        <li>    <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "text-cyan-900 font-bold border-b-2 border-cyan-900 p-2" : ""
            }
        >
            Home
        </NavLink></li>
        {
            user && <>
             <li>    <NavLink
            to="/myApplications"
            className={({ isActive }) =>
                isActive ? "text-cyan-900 font-bold border-b-2 border-cyan-900 p-2" : ""
            }
        >
            My Applications
        </NavLink></li>
            </>
        }

    </>
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className='w-11/12 mx-auto flex justify-between'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <h1 className="flex items-center font-bold text-3xl">Career <span className='text-cyan-600'>Code</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <div>
                        <ThemeToggle></ThemeToggle>
                    </div>
                    {
                        user ? (
                            <div className='flex gap-5'>

                                <button onClick={logOut} className='btn  btn-info rounded-4xl'>LogOut</button>

                                <button className="avater rounded-full" title={user?.displayName
                                }><img className='w-8 rounded-full' src={`${user.photoURL}`} alt="" /></button>

                            </div>
                        ) : (
                            <div className='flex gap-5'>
                                <button onClick={() => navigate("/login")} className="btn btn-info rounded-4xl">Login</button>

                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
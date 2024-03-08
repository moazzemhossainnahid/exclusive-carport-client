import React from 'react';
import { FaGlobeAsia } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../firebase.init';
import Authentication from './Authentication';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Header = ({ currentLanguageCode, languages }) => {
    const [user] = useAuthState(auth);
    const { t } = useTranslation();
    return (
        <div className='w-full max-w-full container sticky top-0 z-50'>
            <div className="bg-base-100 z-50 sticky top-0">
                <div className="navbar w-full md:w-4/5 mx-auto">

                    <div className="navbar-start">
                        <Link reloadDocument to="/" className="w-2/3 md:w-1/3">
                            <img src="https://i.ibb.co/8NNvYfT/emotion.png" alt="" className="w-32 md:w-40 py-2" />
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className="">

                            <div className="dropdown dropdown-end p-0">
                                <label tabIndex={0} className="btn bg-transparent outline-none border-none text-black focus:bg-transparent hover:bg-transparent btn-sm"><FaGlobeAsia /></label>
                                <ul tabIndex={0} className="dropdown-content text-sm z-[1] menu p-1 shadow bg-base-100 rounded">
                                    {languages.map(({ code, name, flag }) => (
                                        <li className='p-1' key={code} >
                                            <button className={`${code === currentLanguageCode && 'bg-primary'} p-2`} onClick={() => { i18next.changeLanguage(code) }}
                                                disabled={code === currentLanguageCode} > <span className={`fi fi-${flag}`}></span>{name} 
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="">
                            {
                                user && <div className="md:pl-5"><Authentication /></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
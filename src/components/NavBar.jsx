import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Project",
        },
        {
            id: 4,
            link: "Experience",
        },
        {
            id: 5,
            link: "Contact",
        },

    ];
    return (
        <div className="flex justify-between p-4 h-20  drop-shadow bg-stone-100">
            <div className="flex p-2 space-x-1">
                <div className="w-10 cursor-pointer">
                    <img className="rounded-full" src="https://placeimg.com/80/80/people" />
                </div>
                <div>
                </div>
            </div>

            <div className="flex p-2">

            <ul className="hidden md:flex">
            
                {links.map( ({ id, link}) => (
                    <li key= {id} className="px-4 space-x-4 cursor-pointer capitalize font-medium-500 text-gray-500 hover:scale-105 duration-200
                    ">{link}</li>
                ))}
             </ul>
             <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                 { nav ? <FaTimes size={20}/> : <FaBars size={20}/>}
             </div>

             {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                
            {links.map( ({ id, link}) => (
                    <li key= {id} className="px-4 cursor-pointer capitalize py-6 text-4xl">{link}</li>
                ))}
        </ul>
        )}
             
            </div>

        </div>
    )

}

export default NavBar;
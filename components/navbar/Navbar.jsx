import React from 'react'
import { FloatingNav } from '../ui/floating-navbar';

const Navbar = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/#about",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];
    return (
        <FloatingNav navItems={navItems} />
    )
}

export default Navbar
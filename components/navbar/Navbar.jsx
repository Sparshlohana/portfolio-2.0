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
            name: "Buy Me a Coffee",
            link: "/buy-me-a-coffee",
        },
    ];
    return (
        <FloatingNav navItems={navItems} />
    )
}

export default Navbar
"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "./context/active-section-provider";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSection()
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="sticky top-5 z-20 my-5 sm:top-10 sm:my-10"
        >

            {/* Desktop Navbar */}
            <div className='hidden sm:block'>
                <nav className='bg-background/80 items-center gap-2 text-muted-foreground text-sm flex rounded-full border px-2 py-2 backdrop-blur-sm'>
                    <ul className='flex gap-5'>
                        {navLinks.map((data) => (
                            <li key={data.name}>
                                <Link
                                    href={data.href}
                                    className="hover:text-foreground relative px-4 py-1 transition-colors"
                                    onClick={() => {
                                        setActiveSection(data.name)
                                        setTimeOfLastClick(Date.now())
                                    }}
                                >
                                    {data.name}
                                    {data.name === activeSection && (
                                        <motion.span
                                            className="bg-muted absolute inset-0 -z-10 rounded-full"
                                            layoutId="activeSection"
                                            transition={{
                                                type: 'spring',
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        ></motion.span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </motion.header>
    )
}

export default Header
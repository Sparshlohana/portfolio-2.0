"use client";

import React from 'react'
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from 'next/link';
import { GithubIcon } from "@/components/icons";

const Hero = () => {
    return (
        <AuroraBackground showRadialGradient={true} >
            <motion.div
                initial={{ opacity: 0.0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    Welcome to my Portfolio!
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >

                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                    Let&apos;s Dive into it.
                </div>
                <Link href={"https://github.com/Sparshlohana/"} target='_blank' className=" rounded-full  text-white dark:text-black">
                    <GithubIcon className="invert w-10 h-10"/>
                </Link>
            </motion.div>
        </AuroraBackground>
    )
}

export default Hero
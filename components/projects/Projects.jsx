import React from 'react'
import { PinContainer } from '../ui/3d-pin'
import { FlipWords } from '../ui/flip-words'
import { motion } from 'framer-motion'

const Projects = () => {
    const words = ["Creation", "Projects", "Websites", "Apps"];
    return (
        <>
            <div className="pt-20 h-fit w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className='flex flex-col gap-14 py-10'>
                    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                        My
                        <FlipWords words={words} />
                    </div>
                    <div className='flex flex-wrap justify-center items-center gap-14'>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/bakaaa.sparshlohana.live"
                                href="https://bakaaa.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Bakaaa
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is my first Project, I have ever made. This is an infotainment website where you can watch and download anime for free.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br" style={{ backgroundImage: "url('/bakaaa.png')", backgroundSize: "cover" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/dictionary.sparshlohana.live"
                                href="https://dictionary.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Dictionary
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a Dictionary which will make your work easy. It will search any word for you and give you lots of definitions.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/dictionary.png')", backgroundSize: "cover" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/checkyourgender.sparshlohana.live/"
                                href="https://checkyourgender.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Check Your Gender
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a fun website which is made to know how much male/female are you. You can use it and enjoy it with your friends.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/checkyourGender.png')", backgroundSize: "cover" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/weather.sparshlohana.live"
                                href="https://weather.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Weather
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a website that tells you real time weather in any country, region or state. It is using weather API for getting accurate information.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/weather.png')", backgroundSize: "cover" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/qr.sparshlohana.live"
                                href="https://qr.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        QR Generator
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This useful website generates QR code for the text as well as the URL that a user enters. It is practically very fast and user will get response immediately.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/QrCode.png')", backgroundSize: "cover" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/qr.sparshlohana.live"
                                href="https://qr.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        My Blog
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a website where you can create your own blogs and reads others blogs. It is a fullstack website with OAuth implemented where you can sign in.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/myBlog.png')", backgroundSize: "cover" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/bookmark.sparshlohana.live/"
                                href="https://bookmark.sparshlohana.live"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        BookMarks
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a website where I have saved all my important links and bookmarks so that I can easily access and manage all your important links in one convenient place.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/bookmark.png')", backgroundSize: "cover" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/ace.sparshlohana.live"
                                href="https://ace.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Audit ACE
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a website which automates the job of a CA, basically it is used to automate the Audit process of a company.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/auditAce.png')", backgroundSize: "cover" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/counter.sparshlohana.live/"
                                href="https://counter.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Counter
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a counter where which is created using React and Framer Motion. When you click it blinks!
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/Counter.png')", backgroundSize: "contain" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/enthub.sparshlohana.live"
                                href="https://enthub.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Enthub
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is an Ultimate Entertainment Hub where you can watch all the Movies and Websites for free.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/enthub.png')", backgroundSize: "contain" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/quiz.sparshlohana.live"
                                href="https://quiz.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Quiz
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a website where you can play quiz and test your knowledge. It is a fun website where you can play quiz and enjoy it with your friends.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/quiz.png')", backgroundSize: "contain" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/whiteboard.sparshlohana.live"
                                href="https://whiteboard.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Whiteboard
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a whiteboard where you can draw anything you want. It is a fun website where you can draw and enjoy it with your friends.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/whiteboard.png')", backgroundSize: "contain" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0.0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                        >
                            <PinContainer
                                title="/rrr.sparshlohana.live"
                                href="https://rrr.sparshlohana.live/"
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/20 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                        Rapid Road Rescue
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal">
                                        <span className="text-slate-500 ">
                                            This is a startup website where you can book mechanics if your vehicle is broken down. It is a fullstack website with OAuth implemented where you can sign in.
                                        </span>
                                    </div>
                                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br " style={{ backgroundImage: "url('/rrr.png')", backgroundSize: "contain" }} />
                                </div>
                            </PinContainer>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
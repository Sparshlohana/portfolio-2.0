import React from 'react'
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from '../ui/google-gemini-effect';

const About = () => {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
    return (
        <div id='about'
            className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] relative pt-40 overflow-clip"
            ref={ref}
        >
            <GoogleGeminiEffect
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
                title="About Me"
                description="Hi, I'm Sparsh Lohana. Scroll down to explore more skills and experiences. From professional achievements to personal anecdotes, get a comprehensive view of who I am and what I aspire to achieve."
            />
        </div>
    )
}

export default About
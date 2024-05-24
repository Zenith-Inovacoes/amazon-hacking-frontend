"use client"

import { motion } from "framer-motion"
import ReactPlayer from "react-player"

export default function Video() {
    return (
        <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{duration: .8, delay: .6}} className="mt-16 aspect-video w-full md:mt-0 md:max-w-[420px] rounded-2xl lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:max-w-[576px]">
            <ReactPlayer playing={true} muted={true} controls url="https://www.youtube.com/watch?v=IKr2TJyrBBY"/>
        </motion.div>
    )
}
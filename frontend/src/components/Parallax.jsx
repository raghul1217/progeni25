import React, { useRef } from 'react'
import '../styles/parallax.css'
import pilot from "../assets/pilot.svg";
import {motion, useScroll, useTransform} from 'framer-motion';

const Parallax = () => {
    
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const ystars = useTransform(scrollYProgress, [0,1], ["0%", "50%"])
    const yplanets = useTransform(scrollYProgress, [0,1], ["0%", "50%"])
    const ypilot= useTransform(scrollYProgress, [0,1], ["0%", "50%"])
    const ytext= useTransform(scrollYProgress, [0,1], ["0%", "100%"])

  return (
    <div className="parallax" ref={ref}>
        <div className="parallax-content">
        {/* <motion.h1 style={{y: ytext}}>Progen'i25.0</motion.h1> */}
        <motion.div className="pilot" style={{y: ytext}}><img src={pilot} /></motion.div>
        </div>
        <motion.div className="mountains" ></motion.div>
        <motion.div className="planets" style={{y: ypilot}}></motion.div>
        <motion.div className="stars" style={{x: ystars}}></motion.div>
    </div>

  )
}

export default Parallax
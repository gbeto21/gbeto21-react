import React from 'react'
import Typed from "react-typed";
import { motion } from "framer-motion"

const Header = () => {

    const container = {
        hidden: {
            opacity: 1,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transsition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: {
            y: 30,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>
                    Hello
                </h1>
                <Typed
                    className="typed-text"
                    strings={["Web developer", "AWS Certified", "Node", "Google."]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <motion.div
                    className="icons-wrapper"
                    variants={container}
                    initial='hidden'
                    animate='visible'
                >
                    <div style={{ display: 'flex' }}>
                        <motion.div className="item-1 item" variants={item}></motion.div>
                        <motion.div className="item-2 item" variants={item}></motion.div>
                        <motion.div className="item-3 item" variants={item}></motion.div>
                        <motion.div className="item-4 item" variants={item}></motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Header

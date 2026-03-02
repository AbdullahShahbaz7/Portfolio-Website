import React from 'react'
import './Hero.scss'
import profile from '../../assets/profile.jpg'
import {motion} from 'framer-motion'
import Portfolio from '../portfolio/Portfolio'

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1
        }
    }
}


const sliderVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        }
    }
}


const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper1">
        <motion.div 
        className="textContainer" 
        variants={textVariants}
        initial="initial"
        animate="animate"
         >
            <motion.h2 variants={textVariants}  id='heroname'></motion.h2>
            <motion.h1 variants={textVariants}  id='heroheading'> 
                <b>Frontend Developer </b> <br /> and
                <span style ={{color: "orange"}}> Programmer</span>
                </motion.h1>
                <motion.p variants={textVariants}> I am a motivated and versatile individual, always eager to take on new challenges. 
                    With a passion for learning I am dedicated to delivering high-quality results. 
                    With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and 
                    achieve great things.
                </motion.p>
            {<motion.div variants={textVariants}  className="herobuttons">
                {/* <motion.button variants={textVariants}  id='heroworkbutton' onClick={()=>{
                    document.querySelector('#Portfolio').scrollIntoView({behavior:"smooth"})
                }}>See the Latest Works</motion.button> */}

               <motion.a href="/Resume.pdf" download>
                <motion.button variants={textVariants}  id='heroresumetbutton' >
                    Download Resume</motion.button>
                </motion.a> 
            </motion.div> }
        </motion.div>
        </div>


        <div className="imageContainer">
            <img  id='profile' src={profile} alt="" />
        </div> 


        <motion.div 
        className="slidingTextContent"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        >
        Computer Science Student 
        </motion.div>     
    </div>
  )
}

export default Hero

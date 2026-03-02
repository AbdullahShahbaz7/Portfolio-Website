import {useRef}from 'react'
import "./Portfolio.scss"
import Menz from '../../assets/Menz.png'
import WP from '../../assets/WP.png'
import CV from '../../assets/CV.png'

import { a, section } from 'framer-motion/client'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

const items=[
    {
    id:1,
    title:`AI Powered Skin Care Website`,
    img: WP,
    link: "https://www.umabassentials.com",
    desc: "AI-powered skincare WordPress website with an intelligent chatbot that provides personalized product recommendations based on skin type and concerns. Design Responsive for Desktop, Mobile and Tablet."
    },

    {
    id:2,
    title:"Modern CV Website",
    img: CV,
    link: "https://cv-repo-name.vercel.app/",
    desc: "Built a fully responsive personal CV website using HTML, CSS, and JavaScript, optimized for both desktop and mobile devices. Integrated an email-based contact form to enable direct communication and improve user engagement."
    },

        {
    id:3,
    title:"Menz E Commerce Website",
    img: Menz,
    desc: "Developed a full-stack e-commerce platform using React, Django, and PostgreSQL, featuring a scalable backend architecture and a modern, visually appealing UI/UX."
    },

]

const Single=({item})=>{

  const ref=useRef()
    const {scrollYProgress}=useScroll({
      target:ref,
      //offset: ["start start", "end start"]
  });

  const y=useTransform(scrollYProgress,[0,1], [-300 ,300])
  return (
    <section>
    <div className="container">
      <img src={item.img} alt=""ref={ref} />
      <motion.div className="textContainer" style={{y}}>
        <h2 >{item.title}</h2>
        <p>{item.desc}</p>
        <button className='Btn' on onClick={()=> window.open(item.link, "_blank")}>Click to See Live Website</button>

      </motion.div>
    </div>
    </section>
  )
}
const Portfolio = () => {

  const ref=useRef()
  const {scrollYProgress}=useScroll({target:ref, 
    offset:["end end", "start start" ]
  });

  const scaleX= useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,
  })
  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
    {items.map(item=>(
      <Single item={item} key={item.id}/>
    ))}
    </div>
  )
}

export default Portfolio

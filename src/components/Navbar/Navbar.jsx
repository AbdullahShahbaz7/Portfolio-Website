import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import fb from '../../assets/fb.png'
import insta from  '../../assets/insta.jpeg'
import gh from  '../../assets/gh.jpg'
import {motion} from 'framer-motion'
import Sidebar from '../Sidebar/sidebar'
const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
             {/* opacity is a value from 0 to 1 that controls how visible an element is. */}
             {/* scale is how big or small your element appears. */}

            <motion.span 
              style={{ marginLeft: "-50x" }} // 👈 adjust as needed
            initial={{opacity:0, scale:0.5}}   
            animate={{opacity:1, scale:1.5}}
            transition={{duration:2}}
            >
            
            <div className='myname'>
             &lt;Abdullah/<motion.span style={{ color: "orange"}}><b>Shahbaz</b></motion.span>&gt;
            </div>

</motion.span>
            { <div className="social">
                <a href='https://github.com/AbdullahShahbaz7' className='link1' ><img id='img' src={gh} alt="Image"/><span>Github Profile</span></a>
            </div> }

        </div>
    </div>
  )
}

export default Navbar

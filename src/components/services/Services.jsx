import './Services.scss'
import {motion} from 'framer-motion'
import peopleimg from '../../assets/people.webp'
import Contact from '../contact/Contact'

function cont()
{
  <div className="contact">
    <h1>Hello</h1>
  </div>
}
const Services = () => {
  return (
    <motion.div className='services'>
       <motion.div className="textContainer">
        <p>We Focus on Helping your Brand Grow  <br /> and Move Forward  <hr /></p>
    
        </motion.div>

       <motion.div className="titleContainer">
        <div className="title">
            <img src={peopleimg} alt="peopleimage" />
            <h1 className='h1s'><motion.b  whileHover={{color:"orange"}}  className='bolds'>Progressive </motion.b> Ideas</h1>
        </div>

        <div className="title">
          <h1 className='h1s'><motion.b  whileHover={{color:"orange"}}  className='bolds'>For Your</motion.b> Business. </h1> 
         <button id='btns'
          onClick={() => window.location.href = '#Contact'}
         >Contact Me</button>
        </div>
       </motion.div>
       <div className="listContainer">
        
        
        <div className="box">
            <h2>UI/UX Design</h2>
            {/* <hr /> */}
            <p>I create websites and apps UI that look great and are simple to navigate. From planning layouts to testing with real users, I make sure your digital product helps your business succeed.</p>
            <button id='btns2'> Figma</button>
        </div>

        <div className="box">
            <h2>Static Business Website </h2>
                {/* <hr /> */}
            <p>I build professional websites that load quickly, work perfectly on phones, and help you get found on Google. Great for shops, services, or company sites.</p>
            <button id='btns2'>React | CSS </button>
        </div>


        <div className="box">
            <h2>MERN Stack Business Website</h2>
                {/* <hr /> */}
            <p>Need login systems, live data, or admin tools? I create complete web applications that handle complex tasks while staying easy to manage.</p>
            <button id='btns2'>Mongodb | React | Node</button>
        </div>


            <div className="box">
            <h2>Logo Designing</h2>
                {/* <hr /> */}
            <p>I design clean logos that look good everywhere - from business cards to billboards. You'll get all the files and style guides you need.</p>
            <button id='btns2'>Canva</button>
        </div>
       </div>
    </motion.div>
  )
}

export default Services

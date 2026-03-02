import React, { useState } from 'react'
import './Contact.scss'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
}

const Contact = () => {
  const [success, setSuccess] = useState(false)

  return (
    <motion.div
      className='contact'
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>

        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>abdullah7shahbaz@gmail.com</span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Phone Number</h2>
          <span>+92 3260889308</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <form
          action="https://formspree.io/f/mjgebwdb"
          method="POST"
          onSubmit={() => setSuccess(true)}
        >
          <input type="text" required placeholder='Name' name='name' />
          <input type="email" required placeholder='Email' name='email' />
          <textarea rows={8} required placeholder='Message' name='message' />
          <button type="submit">Submit</button>

          {success && "Email has been successfully sent!"}
        </form>
      </div>

      <div className="footer">
        <h4>© 2025 Abdullah Shahbaz. All rights reserved.</h4>
      </div>
    </motion.div>
  )
}

export default Contact
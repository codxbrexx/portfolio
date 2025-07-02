import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE_DATA } from '../utils/data';
import { IoMdMail } from 'react-icons/io';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ fullName: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      id='contact' 
      className='max-w-screen-xl mx-auto px-6 pb-20'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h5 
        className='section-title text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14'
        variants={itemVariants}
      >
        Get In Touch
      </motion.h5>
    
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 md:gap-16'
        variants={containerVariants}
      > 
        <motion.div 
          className='space-y-4'
          variants={itemVariants}
        >
          <ContactInfoCard 
            icon={<IoMdMail />} 
            text={PROFILE_DATA.email} 
            type="email"
            index={0}
          />
          <ContactInfoCard 
            icon={<IoPhonePortraitOutline />} 
            text={PROFILE_DATA.phone} 
            type="phone"
            index={1}
          />
          <ContactInfoCard 
            icon={<MdOutlineWeb />} 
            text={PROFILE_DATA.website} 
            type="website"
            index={2}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <h5 className='md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5'> Contact Form </h5>
          <motion.form 
            className='flex flex-col space-y-4'
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.input 
              type='text' 
              name='fullName' 
              placeholder='Full Name' 
              className='input-box' 
              autoComplete='off'
              value={formData.fullName}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: "var(--primary)" }}
            />
            <motion.input 
              type='email' 
              name='email' 
              placeholder='Email' 
              className='input-box' 
              autoComplete='off'
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: "var(--primary)" }}
            />
            <motion.textarea 
              name='message' 
              cols='30' 
              rows='4' 
              placeholder='Your Message' 
              className='input-box resize-none' 
              autoComplete='off'
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02, borderColor: "var(--primary)" }}
            />
            <motion.button 
              type='submit' 
              className='primary-btn group'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </motion.div>
              ) : (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Send Message
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiSend />
                  </motion.div>
                </motion.div>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const ContactInfoCard = ({icon, text, type, index}) => {
  const iconColors = {
    email: "text-blue-400",
    phone: "text-green-400", 
    website: "text-purple-400"
  };

  const bgColors = {
    email: "from-blue-900/50 to-blue-800/50",
    phone: "from-green-900/50 to-green-800/50",
    website: "from-purple-900/50 to-purple-800/50"
  };

  return (
    <motion.div 
      className={`flex items-center gap-5 glass-card px-4 py-3 group cursor-pointer`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.02, 
        x: 10,
        boxShadow: "0 10px 30px rgba(15, 157, 248, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className={`w-10 h-10 text-xl ${iconColors[type]} flex items-center justify-center bg-gradient-to-r ${bgColors[type]} backdrop-blur-sm rounded border border-blue-700/50 group-hover:border-blue-500/70 transition-all duration-300`}
        whileHover={{ 
          scale: 1.2, 
          rotate: 360,
          boxShadow: "0 0 20px rgba(15, 157, 248, 0.5)"
        }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <motion.p 
        className='text-cyan-100 text-xs md:text-sm group-hover:text-cyan-200 transition-colors'
        whileHover={{ x: 5 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default Contact;
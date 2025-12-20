import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiBriefcase, FiUsers, FiMessageSquare, FiHelpCircle } from "react-icons/fi";

// Form configuration
const CONTACT_TYPES = [
  { id: 'job', label: 'Job Opportunity', icon: <FiBriefcase />, color: 'from-green-500 to-emerald-500' },
  { id: 'project', label: 'Project', icon: <FiUsers />, color: 'from-blue-500 to-cyan-500' },
  { id: 'consultation', label: 'Consultation', icon: <FiMessageSquare />, color: 'from-violet-500 to-pink-500' },
  { id: 'other', label: 'Other', icon: <FiHelpCircle />, color: 'from-orange-500 to-red-500' }
];

const URGENCY_LEVELS = [
  { id: 'low', label: 'Low Priority', color: 'text-gray-400' },
  { id: 'medium', label: 'Medium', color: 'text-yellow-400' },
  { id: 'high', label: 'High Priority', color: 'text-orange-400' },
  { id: 'urgent', label: 'Urgent', color: 'text-red-400' }
];

const FormField = ({ label, error, children, required = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-2"
  >
    <label className="block text-sm font-medium text-blue-200/80 ml-1">
      {label} {required && <span className="text-pink-400">*</span>}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="text-pink-400 text-xs ml-1"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

const ContactTypeSelector = ({ selected, onSelect }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
    {CONTACT_TYPES.map((type) => (
      <motion.button
        key={type.id}
        type="button"
        onClick={() => onSelect(type.id)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          relative p-4 rounded-xl text-center transition-all duration-300 border
          ${selected === type.id
            ? 'bg-[#0a0a0a] border-violet-500/50 text-white shadow-[0_0_20px_rgba(139,92,246,0.2)]'
            : 'bg-[#0a0a0a]/40 border-white/5 text-gray-400 hover:border-white/10 hover:bg-[#0a0a0a]/60'
          }
        `}
      >
        <div className="text-2xl mb-2 flex justify-center">{type.icon}</div>
        <div className="text-xs font-medium">{type.label}</div>
        
        {selected === type.id && (
          <motion.div
            layoutId="contactTypeSelector"
            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${type.color} opacity-10`}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.button>
    ))}
  </div>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    contactType: '',
    urgency: 'medium',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.contactType) newErrors.contactType = 'Please select a contact type';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
            name: '', email: '', company: '', contactType: '', urgency: 'medium',
            subject: '', message: '', budget: '', timeline: ''
        });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  if (isSubmitted) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 px-6 rounded-2xl bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20"
        >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                ✅
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Thank you for reaching out! I'll review your message and get back to you within 24 hours.
            </p>
            <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 rounded-xl font-medium bg-green-500 hover:bg-green-400 text-black transition-colors"
            >
                Send Another Message
            </button>
        </motion.div>
    );
  }

  const inputClassName = `
    w-full px-4 py-3 rounded-xl bg-[#0a0a0a]/50 border border-white/10 
    text-white placeholder-gray-500 
    focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 
    transition-all duration-300 focus:outline-none focus:bg-[#0a0a0a]/80
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
        {/* Contact Type */}
        <FormField label="What are you interested in?" required error={errors.contactType}>
          <ContactTypeSelector
            selected={formData.contactType}
            onSelect={(type) => setFormData(prev => ({ ...prev, contactType: type }))}
          />
        </FormField>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Your Name" required error={errors.name}>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className={inputClassName} />
          </FormField>
          <FormField label="Email Address" required error={errors.email}>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@company.com" className={inputClassName} />
          </FormField>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Company (Optional)">
            <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your Company" className={inputClassName} />
          </FormField>
          <FormField label="Urgency">
            <div className="relative">
                <select name="urgency" value={formData.urgency} onChange={handleInputChange} className={`${inputClassName} appearance-none cursor-pointer`}>
                {URGENCY_LEVELS.map(level => (
                    <option key={level.id} value={level.id} className="bg-[#1a1a1a]">{level.label}</option>
                ))}
                </select>
            </div>
          </FormField>
        </div>

        {/* Subject */}
        <FormField label="Subject" required error={errors.subject}>
          <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Brief subject..." className={inputClassName} />
        </FormField>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <FormField label="Budget Range (Optional)">
                <select name="budget" value={formData.budget} onChange={handleInputChange} className={`${inputClassName} appearance-none cursor-pointer`}>
                    <option value="" className="bg-[#1a1a1a]">Select Range</option>
                    <option value="<5k" className="bg-[#1a1a1a]">Under $5,000</option>
                    <option value="5k-10k" className="bg-[#1a1a1a]">$5,000 - $10,000</option>
                    <option value="10k-30k" className="bg-[#1a1a1a]">$10,000 - $30,000</option>
                    <option value=">30k" className="bg-[#1a1a1a]">$30,000+</option>
                </select>
             </FormField>
             <FormField label="Timeline (Optional)">
                <select name="timeline" value={formData.timeline} onChange={handleInputChange} className={`${inputClassName} appearance-none cursor-pointer`}>
                    <option value="" className="bg-[#1a1a1a]">Select Timeline</option>
                    <option value="asap" className="bg-[#1a1a1a]">ASAP</option>
                    <option value="1mo" className="bg-[#1a1a1a]">Within 1 month</option>
                    <option value="1-3mo" className="bg-[#1a1a1a]">1-3 months</option>
                    <option value="flexible" className="bg-[#1a1a1a]">Flexible</option>
                </select>
             </FormField>
        </div>

        {/* Message */}
        <FormField label="Project Details" required error={errors.message}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell me about your project context, goals, and any specific requirements..."
            rows={5}
            className={`${inputClassName} resize-none`}
          />
        </FormField>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg
            ${isSubmitting 
                ? 'bg-gray-800 text-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-violet-500/20'
            } transition-all duration-300`}
        >
          {isSubmitting ? (
              <>Sending...</>
          ) : (
             <>Send Message <FiSend /></>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

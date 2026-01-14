import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { PROFILE_DATA } from "../utils/data";
import ContactForm from "./ContactForm";

const Contact = () => {
    const [activeTab, setActiveTab] = useState("info");

    return (
        <section className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
            {/* Background Gradients */}


            <div className="text-center mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-white to-violet-200 mb-6">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-blue-200/60 max-w-2xl mx-auto text-lg mb-8">
                        Have a project in mind? Let&apos;s discuss how we can create something amazing together.
                    </p>

                    {/* Tabs */}
                    <div className="inline-flex p-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 mb-8">
                        {['info', 'form'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                                ${activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'}
                            `}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="contactTab"
                                        className="absolute inset-0 bg-violet-600 rounded-lg shadow-lg shadow-violet-500/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {tab === 'info' ? '📍 Contact Info' : '✉️ Send Message'}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="relative max-w-4xl mx-auto z-10 min-h-[500px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'info' ? (
                        <motion.div
                            key="info"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <ContactCard
                                    icon={<FiMail />}
                                    title="Email"
                                    value={PROFILE_DATA.email}
                                    href={`mailto:${PROFILE_DATA.email}`}
                                    color="bg-violet-500/20 text-violet-400 border-violet-500/20"
                                />
                                <ContactCard
                                    icon={<FiPhone />}
                                    title="Phone"
                                    value={PROFILE_DATA.phone}
                                    href={`tel:${PROFILE_DATA.phone}`}
                                    color="bg-cyan-500/20 text-cyan-400 border-cyan-500/20"
                                />
                                <ContactCard
                                    icon={<FiMapPin />}
                                    title="Location"
                                    value={PROFILE_DATA.location}
                                    color="bg-pink-500/20 text-pink-400 border-pink-500/20"
                                />
                            </div>

                            {/* CTA Box */}
                            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center backdrop-blur-md">
                                <h3 className="text-2xl font-bold text-white mb-2">Ready to start?</h3>
                                <p className="text-gray-400 mb-6">Initiate a conversation by filling out the detailed form.</p>
                                <button
                                    onClick={() => setActiveTab('form')}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                                >
                                    Go to Contact Form <FiArrowRight />
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ContactForm />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const ContactCard = ({ icon, title, value, href, color }) => (
    <div className="p-6 rounded-2xl bg-[#0a0a0a]/40 border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-colors duration-300">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 border ${color}`}>
            {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        {href ? (
            <a href={href} className="text-sm text-gray-400 hover:text-white transition-colors break-all">{value}</a>
        ) : (
            <p className="text-sm text-gray-400">{value}</p>
        )}
    </div>
);

export default Contact;

import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import heroBg from '../assets/hero-bg.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Journey', href: '#timeline' },
        { name: 'About', href: '#about' },
    ];

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, height: '4px',
                    background: 'var(--primary-color)', zIndex: 2000, originX: 0,
                    scaleX: useScrollProgress()
                }}
            />
            <nav className="glass" style={{
                position: 'fixed',
                top: scrolled ? '0.5rem' : '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1100px',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.75rem 2rem',
                alignItems: 'center',
                transition: 'var(--transition)'
            }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{portfolioData.profile.name.split(' ')[0]}<span className="gradient-text">{portfolioData.profile.name.split(' ')[1]}</span></h2>

                {/* Desktop Nav */}
                <div style={{ display: 'none', gap: '1.5rem', fontSize: '0.9rem' }} className="desktop-menu">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} style={{ fontWeight: 500 }}>{link.name}</a>
                    ))}
                    <a href="#contact" className="gradient-text" style={{ fontWeight: 800 }}>Hire Me</a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                    className="mobile-toggle"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                margin: '0.5rem 0',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                textAlign: 'center'
                            }}
                            className="glass"
                        >
                            {navLinks.map(link => (
                                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
                            ))}
                            <a href="#contact" className="gradient-text" style={{ fontWeight: 800 }} onClick={() => setIsOpen(false)}>Hire Me</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

// Helper hook for scroll progress
const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const update = () => {
            const height = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(window.scrollY / height);
        };
        window.addEventListener('scroll', update);
        return () => window.removeEventListener('scroll', update);
    }, []);
    return progress;
};

const Hero = () => (
    <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '8rem',
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            zIndex: -1,
            filter: 'blur(4px)'
        }} />
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span style={{
                    color: 'var(--primary-color)',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase'
                }}>
                    {portfolioData.profile.title}
                </span>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    marginTop: '1rem',
                    marginBottom: '1.5rem',
                    lineHeight: 1.1
                }}>
                    <span className="gradient-text">{portfolioData.profile.tagline}</span>
                </h1>
                <p style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    color: 'var(--text-muted)',
                    fontSize: '1.1rem'
                }}>
                    {portfolioData.profile.brandStatement}
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                    <a href="#projects" className="glass" style={{
                        padding: '0.8rem 2rem',
                        backgroundColor: 'var(--primary-color)',
                        borderColor: 'transparent',
                        fontWeight: 600
                    }}>
                        View Projects
                    </a>
                    <a href="#" className="glass" style={{
                        padding: '0.8rem 2rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(255,255,255,0.05)'
                    }}>
                        Download CV
                    </a>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <a href={portfolioData.profile.github} className="glass" style={{ padding: '0.8rem' }} target="_blank" rel="noreferrer"><Github size={20} /></a>
                        <a href={portfolioData.profile.linkedin} className="glass" style={{ padding: '0.8rem' }} target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

export { Navbar, Hero };

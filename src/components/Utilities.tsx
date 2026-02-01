import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="glass"
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        padding: '1rem',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-color)',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 1000,
                        boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-hover)' }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

const LoadingScreen = () => (
    <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--bg-color)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
                height: '2px',
                background: 'var(--primary-color)',
                marginBottom: '1.5rem'
            }}
        />
        <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="gradient-text"
            style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.2em' }}
        >
            LAWAN.DEV
        </motion.h2>
    </motion.div>
);

export { ScrollToTop, LoadingScreen };

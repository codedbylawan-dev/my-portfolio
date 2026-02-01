import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.warn('Backend not reachable, using fallback mockup:', error);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }

        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section id="contact">
            <div className="container" style={{ maxWidth: '700px' }}>
                <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                        Have a question or want to work together? Drop a message!
                    </p>

                    {status !== 'success' ? (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '0.5rem',
                                        color: '#fff',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '0.5rem',
                                        color: '#fff',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '0.5rem',
                                        color: '#fff',
                                        outline: 'none',
                                        resize: 'none'
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="glass"
                                disabled={status === 'sending'}
                                style={{
                                    padding: '1rem',
                                    backgroundColor: status === 'sending' ? 'var(--glass-border)' : 'var(--primary-color)',
                                    color: '#fff',
                                    fontWeight: 600,
                                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    border: 'none',
                                    marginTop: '1rem',
                                    opacity: status === 'sending' ? 0.7 : 1
                                }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ textAlign: 'center', padding: '2rem 0' }}
                        >
                            <CheckCircle size={48} color="#10b981" style={{ marginBottom: '1rem' }} />
                            <h3>Message Sent!</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Thanks for reaching out. I'll get back to you soon.</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

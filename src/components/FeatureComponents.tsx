import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Globe, Layers, CheckCircle2, Calendar, X, Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1] as any
        }
    }
};

const Skills = () => {
    const getIcon = (cat: string) => {
        switch (cat) {
            case 'Frontend': return <Globe size={24} />;
            case 'Backend': return <Code size={24} />;
            case 'Database': return <Database size={24} />;
            default: return <Layers size={24} />;
        }
    };

    return (
        <section id="skills">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Technical <span className="gradient-text">Mastery</span>
                </h2>
                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '2rem'
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {portfolioData.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass"
                            whileHover={{ y: -10, borderColor: 'var(--primary-color)' }}
                            style={{ padding: '2rem', transition: 'var(--transition)' }}
                        >
                            <div style={{ color: 'var(--primary-color)', marginBottom: '1.25rem' }}>
                                {getIcon(skill.category)}
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>{skill.category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {skill.items.map(item => (
                                    <span key={item} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '2rem',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                        color: 'var(--primary-color)'
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const categories = ['All', 'JavaScript', 'Python', 'SQL', 'Full Stack'];

    const filteredProjects = filter === 'All'
        ? portfolioData.projects
        : portfolioData.projects.filter(p => p.tags.includes(filter));

    return (
        <section id="projects" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                    Project <span className="gradient-text">Stories</span>
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                    Real-world problems solved with clean code and logic.
                </p>

                {/* Filter Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '4rem',
                    flexWrap: 'wrap'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className="glass"
                            style={{
                                padding: '0.5rem 1.5rem',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                backgroundColor: filter === cat ? 'var(--primary-color)' : 'transparent',
                                borderColor: filter === cat ? 'var(--primary-color)' : 'var(--glass-border)',
                                color: filter === cat ? '#fff' : 'var(--text-muted)',
                                transition: 'var(--transition)'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(301px, 1fr))',
                                    gap: '4rem',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="glass" style={{
                                    height: '350px',
                                    background: `linear-gradient(45deg, var(--surface-color), var(--bg-color))`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        display: 'flex',
                                        gap: '0.5rem'
                                    }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.7rem',
                                                padding: '0.2rem 0.6rem',
                                                background: 'rgba(0,0,0,0.3)',
                                                borderRadius: '4px',
                                                border: '1px solid var(--glass-border)'
                                            }}>{tag}</span>
                                        ))}
                                    </div>
                                    <span style={{ fontSize: '1.5rem', fontWeight: 800, opacity: 0.2 }}>{project.title}</span>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{project.description}</p>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                            <div style={{ flex: 1 }}>
                                                <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>PROBLEM</h4>
                                                <p style={{ fontSize: '0.9rem' }}>{project.problem}</p>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <h4 style={{ fontSize: '0.9rem', color: '#10b981', marginBottom: '0.5rem' }}>SOLUTION</h4>
                                                <p style={{ fontSize: '0.9rem' }}>{project.solution}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                                        {project.techStack.map(tech => (
                                            <span key={tech} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>#{tech}</span>
                                        ))}
                                    </div>

                                    <div style={{ padding: '1.5rem', borderLeft: '3px solid var(--primary-color)', background: 'rgba(255,255,255,0.02)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <CheckCircle2 size={16} color="var(--primary-color)" />
                                            <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Key Impact</span>
                                        </div>
                                        <p style={{ fontSize: '0.95rem' }}>{project.impact}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.85)',
                                backdropFilter: 'blur(8px)'
                            }}
                        />
                        <motion.div
                            layoutId={selectedProject.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="glass"
                            style={{
                                width: '100%',
                                maxWidth: '800px',
                                maxHeight: '90vh',
                                overflowY: 'auto',
                                position: 'relative',
                                background: 'var(--surface-color)',
                                padding: '3rem'
                            }}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-muted)',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={24} />
                            </button>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{selectedProject.title}</h2>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                                {selectedProject.tags.map((tag: any) => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.3rem 1rem',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        color: 'var(--primary-color)',
                                        borderRadius: '4px',
                                        border: '1px solid var(--glass-border)'
                                    }}>{tag}</span>
                                ))}
                            </div>

                            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                                {selectedProject.description}
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                                <div>
                                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>CHALLENGE</h4>
                                    <p style={{ fontSize: '0.95rem' }}>{selectedProject.problem}</p>
                                </div>
                                <div>
                                    <h4 style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '0.9rem' }}>ARCHITECTURE</h4>
                                    <p style={{ fontSize: '0.95rem' }}>{selectedProject.solution}</p>
                                </div>
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
                                <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle2 size={18} color="var(--primary-color)" /> Key Takeaway
                                </h4>
                                <p style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{selectedProject.impact}</p>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <a href={selectedProject.github} className="glass" style={{ padding: '0.8rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary-color)', border: 'none' }}>
                                    <Github size={18} /> Source Code
                                </a>
                                <a href={selectedProject.link} className="glass" style={{ padding: '0.8rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

const Timeline = () => (
    <section id="timeline">
        <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
                Learning <span className="gradient-text">Journey</span>
            </h2>
            <motion.div
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    position: 'relative',
                    paddingLeft: '2rem',
                    borderLeft: '2px solid var(--glass-border)'
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {portfolioData.timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        style={{ marginBottom: '3rem', position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            left: '-2.6rem',
                            top: '0.5rem',
                            width: '1rem',
                            height: '1rem',
                            borderRadius: '50%',
                            backgroundColor: 'var(--primary-color)',
                            border: '4px solid var(--bg-color)',
                            zIndex: 1
                        }} />
                        <div className="glass" style={{ padding: '1.5rem 2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                                <Calendar size={14} />
                                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.year}</span>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

const GithubStats = () => {
    const username = "Lawangoud";
    const theme = "tokyonight";

    return (
        <section id="github">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Activity <span className="gradient-text">& Contribution</span>
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem',
                    justifyContent: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&bg_color=161A23&border_color=3b82f6&title_color=3b82f6&text_color=ffffff`}
                            alt="GitHub Stats"
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass"
                        style={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&bg_color=161A23&border_color=3b82f6&title_color=3b82f6&text_color=ffffff`}
                            alt="Top Languages"
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Certifications = () => (
    <section id="certifications">
        <div className="container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                Professional <span className="gradient-text">Validation</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {portfolioData.certifications?.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass"
                        style={{ padding: '2rem' }}
                    >
                        <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: 600 }}>{cert.year}</span>
                        <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{cert.title}</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{cert.provider}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export { Skills, Projects, Timeline, GithubStats, Certifications };

import { useEffect, useState } from 'react';

const heroTexts = [
  'MERN Stack Developer',
  'Data Scientist',
  'Cybersecurity Enthusiast',
  'Digital Marketer'
];

const skillCategories = [
  {
    title: 'MERN Stack',
    icon: 'fas fa-code',
    color: 'green',
    skills: [
      { name: 'MongoDB', value: 80 },
      { name: 'Express.js', value: 78 },
      { name: 'React.js', value: 85 },
      { name: 'Node.js', value: 80 }
    ]
  },
  {
    title: 'Data Science',
    icon: 'fas fa-brain',
    color: 'blue',
    skills: [
      { name: 'Python', value: 75 },
      { name: 'Pandas / NumPy', value: 70 },
      { name: 'Machine Learning', value: 60 },
      { name: 'Data Visualization', value: 65 }
    ]
  },
  {
    title: 'Cybersecurity',
    icon: 'fas fa-shield-alt',
    color: 'purple',
    skills: [
      { name: 'Networking Basics', value: 65 },
      { name: 'Security Fundamentals', value: 60 },
      { name: 'Linux / CLI', value: 70 },
      { name: 'JWT / Auth Security', value: 78 }
    ]
  },
  {
    title: 'Digital Marketing',
    icon: 'fas fa-bullhorn',
    color: 'orange',
    skills: [
      { name: 'SEO', value: 72 },
      { name: 'Social Media', value: 80 },
      { name: 'Content Marketing', value: 68 },
      { name: 'Analytics', value: 65 }
    ]
  }
];

const projects = [
  {
    number: '01',
    icon: 'fas fa-shopping-cart',
    title: 'E-Commerce Platform',
    description: 'Full stack online store with cart, Stripe payments, admin panel, and real-time inventory management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    number: '02',
    icon: 'fas fa-users',
    title: 'Task Management Dashboard',
    description: 'Collaborative project management tool with JWT auth, real-time updates, and role-based access.',
    tags: ['React', 'Express', 'JWT', 'MongoDB']
  },
  {
    number: '03',
    icon: 'fas fa-chart-line',
    title: 'Data Analytics Dashboard',
    description: 'Interactive analytics dashboard with ML insights and beautiful visualizations.',
    tags: ['Python', 'Pandas', 'React', 'REST API']
  }
];

const services = [
  { icon: 'fas fa-layer-group', title: 'Full Stack Development', description: 'End-to-end web applications using MERN stack — from database design to beautiful React frontends.' },
  { icon: 'fas fa-plug', title: 'API Development', description: 'Scalable RESTful APIs with Node.js & Express, complete with authentication and documentation.' },
  { icon: 'fas fa-bug', title: 'Bug Fixing', description: 'Quick diagnosis and fixing of bugs in existing web applications — frontend or backend.' },
  { icon: 'fas fa-chart-bar', title: 'Data Analysis', description: 'Transform raw data into actionable insights using Python, Pandas, and visualization libraries.' },
  { icon: 'fas fa-shield-alt', title: 'Security Consultation', description: 'Basic security audit for web apps — JWT implementation, input validation, and vulnerability review.' },
  { icon: 'fas fa-rocket', title: 'Digital Marketing', description: 'SEO optimization, social media strategy, and content marketing to grow your online presence.' }
];

const contactLinks = [
  { href: 'https://www.fiverr.com/chandali390', icon: 'fas fa-briefcase', label: 'Hire on Fiverr', classes: 'contact-link fiverr' },
  { href: 'mailto:chand7697@gmail.com', icon: 'fas fa-envelope', label: 'Send Email', classes: 'contact-link email' },
  { href: 'tel:+923494660390', icon: 'fas fa-phone', label: '+923494660390', classes: 'contact-link email' }
];

const socialLinks = [
  { href: '#', icon: 'fab fa-github' },
  { href: '#', icon: 'fab fa-linkedin' },
  { href: '#', icon: 'fab fa-twitter' },
  { href: '#', icon: 'fab fa-fiverr' },
  { href: '#', icon: 'fas fa-envelope' }
];

function App() {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    const currentText = heroTexts[textIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentText.length) {
          setTypedText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setTextIndex((textIndex + 1) % heroTexts.length);
        }
      }
    }, charIndex === currentText.length && !deleting ? 1800 : deleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    const moveHandler = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      setTimeout(() => {
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
      }, 80);
    };

    const hoverEls = document.querySelectorAll('a, button');
    const enterHandler = () => { cursor.style.transform = 'translate(-50%,-50%) scale(2)'; };
    const leaveHandler = () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; };

    document.addEventListener('mousemove', moveHandler);
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', enterHandler);
      el.addEventListener('mouseleave', leaveHandler);
    });

    return () => {
      document.removeEventListener('mousemove', moveHandler);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', enterHandler);
        el.removeEventListener('mouseleave', leaveHandler);
      });
    };
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
            bar.style.width = `${bar.dataset.width}%`;
          });
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => revealObserver.observe(el));
    document.querySelectorAll('.skill-category').forEach((el) => barObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      barObserver.disconnect();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Sending message...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) {
        setStatusMessage(data.error || 'Unable to send message.');
        return;
      }

      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatusMessage('Network error. Please try again later.');
    }
  };

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />

      <nav>
        <div className="logo">CA<span>.</span>dev</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>Hire Me</a>
      </nav>

      <section id="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-content">
          <div className="hero-tag">Available for Freelance</div>
          <h1 className="hero-name">
            <span className="hi">Hello, World! 👋</span>
            <span className="name">I'm <span>Chand Ali</span></span>
          </h1>
          <div className="typing-container">
            <span id="typed-text">{typedText}</span>
          </div>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Hire Me</a>
            <a href="#projects" className="btn-outline">View Projects</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">5+</div>
              <div className="stat-label">Skills</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">10+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="section-header reveal">
          <div className="section-tag">// about me</div>
          <h2 className="section-title">Who Am <span>I?</span></h2>
          <div className="section-line" />
        </div>
        <div className="about-grid">
          <div className="about-img-wrap reveal-left">
            <div className="about-img-frame">
              <i className="fas fa-user-circle" />
              <span className="placeholder-text">// upload your photo</span>
            </div>
            <div className="about-corner" />
          </div>
          <div className="about-text reveal-right">
            <p>Hi! I'm <span>Chand Ali</span>, a passionate <span>Full Stack MERN Developer</span> with a strong foundation in building modern, scalable web applications. I love turning complex problems into simple, beautiful solutions.</p>
            <p>Beyond web development, I'm also deeply interested in <span>Data Science</span>, exploring machine learning models and data-driven insights. My curiosity extends to <span>Cybersecurity</span>, where I study networking fundamentals and security practices.</p>
            <p>I also have hands-on experience in <span>Digital Marketing</span> — SEO, social media strategy, and content marketing — making me a well-rounded tech professional.</p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Chand Ali</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Pakistan 🇵🇰</span>
              </div>
              <div className="info-item">
                <span className="info-label">Availability</span>
                <span className="info-value" style={{ color: 'var(--green)' }}>Open to Work ✓</span>
              </div>
              <div className="info-item">
                <span className="info-label">Fiverr</span>
                <span className="info-value" style={{ color: 'var(--blue)' }}>Active Seller</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="section-header reveal">
          <div className="section-tag">// my skills</div>
          <h2 className="section-title">Tech <span>Arsenal</span></h2>
          <div className="section-line" />
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="skill-category reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="cat-header">
                <div className={`cat-icon ${category.color}`}><i className={category.icon} /></div>
                <span className="cat-title">{category.title}</span>
              </div>
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.value}%</span>
                  </div>
                  <div className="skill-bar"><div className="skill-fill" data-width={skill.value} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="section-header reveal">
          <div className="section-tag">// my work</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="section-line" />
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.number} className="project-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="project-img">
                <div className="img-overlay" />
                <i className={project.icon} />
                <span className="proj-num">{project.number}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-tags">
                  {project.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href="#" className="proj-btn live">Live Demo</a>
                  <a href="#" className="proj-btn code"><i className="fab fa-github" /> Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services">
        <div className="section-header reveal">
          <div className="section-tag">// what i do</div>
          <h2 className="section-title">My <span>Services</span></h2>
          <div className="section-line" />
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.title} className="service-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="service-icon"><i className={service.icon} /></div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="section-header reveal">
          <div className="section-tag">// get in touch</div>
          <h2 className="section-title">Contact <span>Me</span></h2>
          <div className="section-line" />
        </div>
        <div className="contact-wrap reveal">
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} className={link.classes} target="_blank" rel="noreferrer">
                <i className={link.icon} /> {link.label}
              </a>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem' }}>
              Send Message <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }} />
            </button>
            {statusMessage && <p style={{ marginTop: '1rem', color: 'var(--green)' }}>{statusMessage}</p>}
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-text">
          © 2025 <span>Chand Ali</span> — Built with ❤️ & MERN Stack
        </div>
        <div className="social-links">
          {socialLinks.map((item) => (
            <a key={item.icon} href={item.href} className="social-link"><i className={item.icon} /></a>
          ))}
        </div>
      </footer>
    </>
  );
}

export default App;

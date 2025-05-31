import React, { useState, useEffect } from 'react';
import './index.css';
import { Brain, BookOpen, Mail, Linkedin, Twitter, FileText, ExternalLink, ChevronDown, ChevronUp, Menu, X, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Researcher Data
const researcherData = {
  name: "Habibur Rahman Rifat",
  title: "AI Researcher in Medical and Environmental Sectors",
  tagline: "Harnessing artificial intelligence to advance healthcare and environmental sustainability.",
  profileImageUrl: "mine.png",
  about: [
    "Habibur Rahman Rifat is an AI researcher with nearly three years of experience specializing in the application of machine learning and computer vision to address challenges in medical diagnostics and environmental sustainability. With a strong foundation in computer science, his work focuses on developing innovative AI solutions to improve disease detection, water quality monitoring, and predictive modeling.",
    "His research journey is driven by a passion for leveraging technology to solve pressing global challenges. He has contributed to impactful projects, including Alzheimer’s disease diagnosis from MRI scans, leukemia classification, and real-time water quality prediction, blending deep learning, explainable AI, and IoT-based frameworks.",
    "Rifat is dedicated to interdisciplinary collaboration and aspires to establish an AI research firm and a non-profit to promote computer vision education, aiming to bridge the gap between cutting-edge technology and societal impact."
  ],
  researchInterests: [
    {
      id: 1,
      title: "Deep Learning for Disease Diagnosis",
      description: "Developing advanced neural network architectures for early and accurate diagnosis of diseases like Alzheimer’s and leukemia from medical imaging data.",
      icon: <Brain size={24} />
    },
    {
      id: 2,
      title: "AI for Environmental Monitoring",
      description: "Utilizing machine learning and IoT frameworks for real-time water quality monitoring and prediction to support environmental sustainability.",
      icon: <Brain size={24} />
    },
    {
      id: 3,
      title: "Explainable AI in Healthcare",
      description: "Building interpretable AI models to enhance trust and adoption in clinical settings for medical diagnostics.",
      icon: <Brain size={24} />
    },
    {
      id: 4,
      title: "IoT-Enabled AI Systems",
      description: "Integrating IoT with deep learning for privacy-preserving, scalable solutions in medical and environmental applications.",
      icon: <Brain size={24} />
    }
  ],
  publications: [
    {
      id: 1,
      title: "Hybridized convolutional neural networks and long short-term memory for improved Alzheimer’s disease diagnosis from MRI scans",
      authors: "Khatun, M., Islam, M.M., Rifat, H.R., Shahid, M.S.B., Talukder, M.A., Uddin, M.A.",
      journal: "2023 26th International Conference on Computer and Information Technology (ICCIT)",
      year: 2023,
      link: "https://ieeexplore.ieee.org/abstract/document/10441274",
      doi: "10.1109/ICCIT60459.2023.00000",
      abstract: "This paper presents a hybridized CNN-LSTM model that enhances Alzheimer’s disease diagnosis accuracy using MRI scans, outperforming traditional methods in feature extraction and temporal analysis."
    },
    {
      id: 2,
      title: "Utilizing deep feature fusion for automatic leukemia classification: an Internet of Medical Things-Enabled deep learning framework",
      authors: "Islam, M.M., Rifat, H.R., Shahid, M.S.B., Akhter, A., Uddin, M.A.",
      journal: "Sensors (Basel, Switzerland) 24 (13), 4420",
      year: 2024,
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11244606/",
      doi: "10.3390/s24134420",
      abstract: "We propose a deep feature fusion framework leveraging IoT for automatic leukemia classification, achieving high accuracy and scalability in medical diagnostics."
    },
    {
      id: 3,
      title: "Hypertuning-Based Ensemble Machine Learning Approach for Real-Time Water Quality Monitoring and Prediction",
      authors: "Shahid, M.S.B., Rifat, H.R., Uddin, M.A., Islam, M.M., Mahmud, M.Z., Sakib, M.K.H., ...",
      journal: "Applied Sciences 14 (19), 8622",
      year: 2024,
      link: "https://www.mdpi.com/2076-3417/14/19/8622",
      doi: "10.3390/app14198622",
      abstract: "This study introduces an ensemble machine learning approach with hyperparameter tuning for real-time water quality monitoring, enhancing prediction accuracy for environmental applications."
    },
    {
      id: 4,
      title: "Explainable Machine Learning for Efficient Diabetes Prediction Using Hyperparameter Tuning, SHAP Analysis, Partial Dependency, and LIME",
      authors: "Islam, M.M., Rifat, H.R., Shahid, M.S.B., Akhter, A., Uddin, M.A., Uddin, K.M.M.",
      journal: "Engineering Reports 7 (1), e13080",
      year: 2025,
      link: "https://onlinelibrary.wiley.com/doi/full/10.1002/eng2.13080",
      doi: "10.1002/eng2.13080",
      abstract: "We develop an explainable machine learning model for diabetes prediction, integrating SHAP, partial dependency, and LIME for transparency and improved clinical trust."
    }
  ],
  contact: {
    email: "habiburrifat01@gmail.com",
    linkedin: "https://www.linkedin.com/in/habibur-rahman-rifat/",
    twitter: "https://x.com/rifat69050149?s=21&t=SDYAzvu_2qSLi-GD16OWgg",
    googleScholar: "https://scholar.google.com/citations?user=QNknsaQAAAAJ&hl=en",
    github: "https://github.com/Rifat429",
    cvLink: "https://github.com/Rifat429/CV/blob/main/CV_Habibur_Rahman_Rifat.pdf"
  },
};

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bat-header-dark">
      <div className="bat-header-inner">
        <motion.a
          href="#home"
          className="bat-logo-dark"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bat-logo-icon">🦇</span> {researcherData.name}
        </motion.a>
        <nav className="bat-nav-desktop">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`bat-nav-link-dark ${activeSection === link.href.substring(1) ? "active" : ""}`}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
        <div className="bat-nav-mobile-toggle">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bat-nav-toggle-btn"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="bat-nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`bat-nav-link-dark ${activeSection === link.href.substring(1) ? "active" : ""}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * navLinks.indexOf(link) }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const HeroSection = () => (
  <section id="home" className="bat-section-dark hero-section-dark">
    <motion.div
      className="bat-hero-content-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={researcherData.profileImageUrl}
        alt={researcherData.name}
        className="bat-avatar-dark"
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x300/111/FF2222?text=${researcherData.name.split(' ').map(n => n[0]).join('')}`; }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="bat-title-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {researcherData.name}
      </motion.h1>
      <motion.p
        className="bat-subtitle-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {researcherData.title}
      </motion.p>
      <motion.p
        className="bat-tagline-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {researcherData.tagline}
      </motion.p>
      <motion.a
        href="#about"
        className="bat-btn-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.a>
    </motion.div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="bat-section-dark bat-card-dark">
    <div className="bat-container-dark">
      <motion.h2
        className="bat-section-title-dark"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="bat-about-text-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {researcherData.about.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
      {researcherData.contact.cvLink && (
        <motion.div
          className="bat-cv-link-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={researcherData.contact.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bat-btn-dark-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={20} className="mr-2" />
            Download CV
          </motion.a>
        </motion.div>
      )}
    </div>
  </section>
);

const ResearchSection = () => (
  <section id="research" className="bat-section-dark bat-card-dark">
    <div className="bat-container-dark">
      <motion.h2
        className="bat-section-title-dark"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Research Interests
      </motion.h2>
      <div className="bat-research-grid-dark">
        {researcherData.researchInterests.map((item) => (
          <motion.div
            key={item.id}
            className="bat-research-card-dark"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: item.id * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="bat-research-icon-dark">{item.icon}</div>
            <h3 className="bat-research-title-dark">{item.title}</h3>
            <p className="bat-research-desc-dark">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const PublicationItem = ({ publication }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      className="bat-publication-card-dark"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="bat-publication-title-dark">{publication.title}</h3>
      <p className="bat-publication-authors-dark">{publication.authors}</p>
      <p className="bat-publication-meta-dark">
        {publication.journal}, {publication.year}
      </p>
      {publication.abstract && (
        <>
          <motion.div
            className="bat-publication-abstract-dark"
            animate={{ maxHeight: isExpanded ? '24rem' : '3.5rem' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <p>{publication.abstract}</p>
          </motion.div>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bat-publication-toggle-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
            {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
          </motion.button>
        </>
      )}
      <div className="bat-publication-links-dark">
        {publication.link && (
          <motion.a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bat-link-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Publication <ExternalLink size={16} className="ml-1" />
          </motion.a>
        )}
        {publication.doi && (
          <motion.a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bat-link-dark-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DOI: {publication.doi} <ExternalLink size={16} className="ml-1" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const PublicationsSection = () => (
  <section id="publications" className="bat-section-dark bat-card-dark">
    <div className="bat-container-dark">
      <motion.h2
        className="bat-section-title-dark"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Publications
      </motion.h2>
      <div className="bat-publications-list-dark">
        {researcherData.publications.map((pub) => (
          <PublicationItem key={pub.id} publication={pub} />
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="bat-section-dark bat-card-dark">
    <div className="bat-container-dark">
      <motion.h2
        className="bat-section-title-dark"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      <motion.div
        className="bat-contact-card-dark"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="bat-contact-desc-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out for collaborations, questions, or discussions.
        </motion.p>
        <div className="bat-contact-links-dark">
          <motion.a
            href={`mailto:${researcherData.contact.email}`}
            className="bat-contact-link-dark"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Mail size={24} className="mr-4" />
            <span>{researcherData.contact.email}</span>
          </motion.a>
          {researcherData.contact.linkedin && (
            <motion.a
              href={researcherData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bat-contact-link-dark"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Linkedin size={24} className="mr-4" />
              <span>LinkedIn Profile</span>
            </motion.a>
          )}
          {researcherData.contact.twitter && (
            <motion.a
              href={researcherData.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bat-contact-link-dark"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Twitter size={24} className="mr-4" />
              <span>Twitter Profile</span>
            </motion.a>
          )}
          {researcherData.contact.googleScholar && (
            <motion.a
              href={researcherData.contact.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="bat-contact-link-dark"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <BookOpen size={24} className="mr-4" />
              <span>Google Scholar</span>
            </motion.a>
          )}
          {researcherData.contact.github && (
            <motion.a
              href={researcherData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bat-contact-link-dark"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Github size={24} className="mr-4" />
              <span>GitHub Profile</span>
            </motion.a>
          )}
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <motion.footer
    className="bat-footer-dark"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="bat-container-dark text-center">
      <p>© {new Date().getFullYear()} {researcherData.name}. All rights reserved.</p>
      <p className="bat-footer-note-dark">Powered by AI and Passion for Science.</p>
    </div>
  </motion.footer>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = { root: null, rootMargin: '0px', threshold: 0.4 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);
    sections.forEach(section => observer.observe(section));
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
  return (
    <div className="bat-bg-dark font-main">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
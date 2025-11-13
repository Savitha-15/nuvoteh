import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // install using: npm install lucide-react
import ContactForm from "./components/ContactForm";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="homepage" id="home">
      {/* ✅ Navbar */}
      <motion.nav
        className="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <h1 className="logo">Nuvoteh</h1>

          {/* Desktop Menu */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button (Mobile) */}
          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.ul
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </motion.nav>

      {/* ✅ Hero Section */}
      <motion.header
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="highlight">Welcome to Nuvoteh</h2>
        <p className="subtitle">Innovative Technology for a Smarter Tomorrow.</p>
        <p>
          Welcome to NUVOTEH - Empowering Digital Innovation. At NUVOTEH, we turn
          ideas into exceptional digital solutions. From conceptualizing imaginative
          graphics, implementing cutting-edge websites, to engineering sophisticated
          IT systems — we innovate precisely and passionately.
        </p>
        <p>Our goal is simple — Innovation that empowers success.</p>
      </motion.header>

      {/* ✅ About Us */}
      <motion.section
        className="vision"
        id="about"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>About Us</h1>

        <div className="about-boxes">
          {/* Who We Are */}
          <div className="about-card">
            <div className="emoji">👥</div>
            <h3>Who We Are</h3>
            <p>
              NUVOTEH is a creative and technology-based company founded by passionate
              innovators. We unite a diverse team of designers, developers, and thinkers
              who believe in innovation and quality for every project.
            </p>
          </div>

          {/* Our Vision */}
          <div className="about-card">
            <div className="emoji">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To be a professional and reliable digital partner built on creativity,
              quality, and exceptional customer service that empowers success.
            </p>
          </div>

          {/* Our Mission */}
          <div className="about-card">
            <div className="emoji">💡</div>
            <h3>Our Mission</h3>
            <p>
              To deliver modern, scalable, and user-friendly digital solutions that help
              individuals and organizations succeed in the online world.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ✅ Services */}
      <motion.section
        className="services"
        id="services"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Our Services</h2>

        <div className="service-grid">
          {[
            {
              img: "/assets/webdevelopment.jpg",
              title: "Web Development",
              desc: "Responsive, fast, and user-friendly websites for your business.",
            },
            {
              img: "/assets/appdevelopment.jpg",
              title: "App Development",
              desc: "Android/iOS apps designed with smooth, intuitive UI/UX.",
            },
            {
              img: "/assets/digitalmarkerting.jpg",
              title: "Digital Marketing",
              desc: "SEO, social media, and advertising campaigns that deliver results.",
            },
            {
              img: "/assets/documentation.jpg",
              title: "Documentation",
              desc: "Professional reports, proposals, and business documentation.",
            },
            {
              img: "/assets/seo.jpg",
              title: "SEO",
              desc: "Boost your website’s visibility with advanced SEO strategies.",
            },
            {
              img: "/assets/businesspromotion.jpg",
              title: "Business Promotion",
              desc: "Creative marketing campaigns to grow your brand.",
            },
            {
              img: "/assets/tradermentership.jpg",
              title: "Trading Mentorship",
              desc: "Learn stock, forex, and crypto trading from experienced mentors.",
            },
            {
              img: "/assets/logomarker.jpg",
              title: "Logo Design",
              desc: "Unique, memorable, and modern logos for your brand identity.",
            },
            {
              img: "/assets/posterdesign.jpg",
              title: "Poster Design",
              desc: "Creative posters and visual designs for your marketing needs.",
            },
            {
              img: "/assets/videoediting.jpg",
              title: "Video Editing",
              desc: "Professional video editing with smooth transitions and storytelling.",
            },
            {
              img: "/assets/graphicdesign.jpg",
              title: "Graphic Design",
              desc: "Creative, modern, and professional designs that make your brand stand out.",
            },
          ].map((service) => (
            <div className="service-card" key={service.title}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

  {/* ✅ Footer / Contact */}
<motion.footer
  className="contact"
  id="contact"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <h2 className="contact-title">Contact</h2>

  <div className="contact-grid">
    {/* Left – Form */}
    <div className="contact-left">
      <ContactForm />
    </div>

    {/* Right – Info */}
    <div className="contact-right">
      <h3>Contact Details</h3>
      <p>
        <strong>Email:</strong>{" "}
        <a
          href="nuvoteh2023@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Email
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/nuvoteh-creators-510304329"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit LinkedIn
        </a>
      </p>
      <p>
        <strong>Instagram:</strong>{" "}
        <a
          href="https://www.instagram.com/nuvoteh_official"
          target="_blank"
          rel="noopener noreferrer"
        >
          @nuvoteh_official
        </a>
      </p>
      <p>
        <strong>Contacts:</strong>
        <br />
        📱 99762 57449 (Prakash)
        <br />
        📱 91508 56346 (Gokul Nath)
        <br />
        📱 83442 29777 (Savitha Lakshmi)
      </p>
    </div>
  </div>

  <p className="footer-end">© 2025 Nuvoteh. All Rights Reserved.</p>
</motion.footer>

</div>
  );
}

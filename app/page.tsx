import Link from "next/link"
import styles from "./page.module.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal Portfolio & Resume",
      image: "/images/favicon.ico",
      details:
        "A responsive portfolio website built with Next.js and CSS modules to showcase my projects, skills, and experience. Features dark mode support and a clean, modern design.",
      codeUrl: "https://github.com/hit-sharq/joshua-mwendwa",
      demoUrl: "https://joshua-mwendwa.vercel.app/",
      slug: "portfolio-website",
      technologies: ["Next.js", "React", "TypeScript", "CSS Modules"],
    },
    {
      title: "Learning Platform",
      description: "Collaborative Learning Environment",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Great%20Learning%20launches%20SaaS-based%20digital%20campus%20solution-BbT0arBDXXzWWAeCZOawD3Na753ErK.jpeg",
      details:
        "A user-friendly learning environment that facilitates efficient course and assignment management. I focused on the back-end development, creating the necessary models using Flask.",
      codeUrl: "https://github.com/hit-sharq/learning-platform-client.git",
      demoUrl: "https://learning-platform-client-alpha.vercel.app/",
      slug: "learning-platform",
      technologies: ["Python", "Flask", "PostgreSQL", "RESTful API"],
    },
    {
      title: "PetApp",
      description: "Pet Care Tracking Application",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pet%20Adoption%20App%20Design-KXD2RpRnVjHyfzDM4Jis25bO74YfpZ.jpeg",
      details:
        "An all-in-one pet care tracking app designed to help pet owners manage their pets' essential health and wellness needs. I was responsible for generating the routes for each specific model within the app.",
      codeUrl: "https://github.com/hit-sharq/petApp-frontend",
      demoUrl: "https://pet-app-frontend.vercel.app/",
      slug: "pet-app",
      technologies: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Arts Afrik – Global African Art Marketplace",
      description: "Global digital marketplace connecting African artists with international collectors.",
      image: "/images/artsAfrik.png",
      details:
        "Arts Afrik is a global digital marketplace designed to connect African artists with international collectors and enthusiasts. The platform empowers artists to showcase and sell their work, while providing buyers with a curated, immersive experience of authentic African art.",
      codeUrl: "https://github.com/hit-sharq/artAfrik",
      demoUrl: "https://art-afrik-joshua-mathias-projects.vercel.app/",
      slug: "arts-afrik",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Clerk Auth", "Cloudinary"],
    },
    {
      title: "ECOPURE Cleaning Services",
      description:
        "A full-stack web platform providing eco-friendly residential and commercial cleaning services with online booking and administrative features.",
      image: "/images/ecopure.png",
      details:
        "ECOPURE is a modern cleaning service platform that emphasizes environmental responsibility and ease of use. Designed for both customers and administrators, it features a seamless booking flow, dynamic service listings, contact forms, a secure dashboard, and integration with Cloudinary for media management.",
      codeUrl: "https://github.com/hit-sharq/EcOPURE",
      demoUrl: "https://ec-opure-q1y6.vercel.app/",
      slug: "ecopure-cleaning",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Cloudinary"],
    },
  ]

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Joshua Mwendwa</h1>
            <p className={styles.subtitle}>Full-Stack Software Engineer & Creative Problem Solver</p>
            <div className={styles.cta}>
              <Link href="#contact" className={styles.primaryButton}>
                Get in Touch
              </Link>
              <Link href="#projects" className={styles.secondaryButton}>
                View My Work
              </Link>
            </div>
            <SocialLinks className={styles.socialLinks} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.about}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.sectionDescription}>
              Motivated and passionate software engineer with a solid foundation in programming principles, acquired
              through intensive boot camp training and hands-on personal projects. I bring creativity, dedication, and a
              collaborative spirit to every project I work on.
            </p>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutColumn}>
                <ul className={styles.aboutList}>
                  <li>
                    <h3>💻 Technical Skills</h3>
                    <p>Python, JavaScript, TypeScript, HTML/CSS, Node.js, React, Express, Flask, PostgreSQL, Next.js</p>
                  </li>
                  <li>
                    <h3>🎓 Education</h3>
                    <p>
                      Software Engineering Bootcamp - Moringa School (2024), Kenya Certificate of Secondary Education
                    </p>
                  </li>
                  <li>
                    <h3>💼 Experience</h3>
                    <p>
                      Bootcamp Graduate with hands-on project experience, Sales Assistant at Gemark International Kenya
                      Ltd
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.aboutColumn}>
                <ul className={styles.aboutList}>
                  <li>
                    <h3>🚀 What Drives Me</h3>
                    <p>
                      I am eager to leverage my skills in a dynamic entry-level role within the tech industry, where I
                      can contribute to innovative solutions and continue to grow as a developer.
                    </p>
                  </li>
                  <li>
                    <h3>🤝 Leadership & Collaboration</h3>
                    <p>
                      I have demonstrated strong leadership abilities throughout my educational journey and have
                      excellent communication skills. I am strongly committed to fostering a collaborative team
                      environment.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.projects}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>My Projects</h2>
            <p className={styles.sectionDescription}>
              Here are some of my recent projects. Each one represents a unique challenge and solution, showcasing
              different aspects of my technical skills and problem-solving abilities.
            </p>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  details={project.details}
                  codeUrl={project.codeUrl}
                  demoUrl={project.demoUrl}
                  slug={project.slug}
                  technologies={project.technologies}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.contact}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.sectionDescription}>
              Have a project in mind or want to chat? I'd love to hear from you! Feel free to reach out through any of
              these channels.
            </p>

            <div className={styles.socialContactWrapper}>
              <div className={styles.socialLinksSection}>
                <h3 className={styles.contactSubtitle}>Connect With Me</h3>
                <SocialLinks className={styles.contactSocial} variant="outline" showLabels={true} />
              </div>

              <div className={styles.formSection}>
                <h3 className={styles.contactSubtitle}>Send Me a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

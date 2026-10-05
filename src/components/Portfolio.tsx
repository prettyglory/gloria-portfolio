import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ArrowUp, ArrowUpRight, Award, BriefcaseBusiness, Check, ChevronRight, Code2, Cpu, ExternalLink, Github, GraduationCap, Mail, Menu, Moon, Network, Sun, X } from "lucide-react";
import { certifications, education, experiences, navItems, photos, profile, projects, skillGroups, type ProjectCategory } from "@/data/portfolio";
import { Button, ButtonLink } from "./Button";
import { ContactForm } from "./ContactForm";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const categories: ("All" | ProjectCategory)[] = ["All", "Software", "AI/ML", "IoT", "Mobile", "Embedded Systems"];
const sectionIds = navItems.map((item) => item.toLowerCase());

function Navbar({ theme, onTheme }: { theme: "light" | "dark"; onTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) setActive(id); }, { rootMargin: "-30% 0px -60%", threshold: 0 });
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);
  return (
    <header className="site-header">
      <div className="navbar glass-panel">
        <a href="#home" className="brand" aria-label="Gloria Beneth Mbilinyi, home"><span>GB</span><strong>Gloria Beneth</strong></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={active === item.toLowerCase() ? "active" : ""}>{item}</a>)}
        </nav>
        <div className="nav-actions">
          <span className="study-mark">DIT · BEng</span>
          <Button variant="icon" onClick={onTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} title="Toggle color theme">{theme === "light" ? <Moon size={17} /> : <Sun size={17} />}</Button>
          <Button variant="icon" className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label="Open navigation menu" aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</Button>
        </div>
      </div>
      <AnimatePresence>{open && <motion.nav className="mobile-nav glass-panel" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} aria-label="Mobile navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className={active === item.toLowerCase() ? "active" : ""}>{item}<ChevronRight size={15} /></a>)}</motion.nav>}</AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-anchor">
      <Reveal className="hero-copy">
        <p className="eyebrow">Computer Engineering Student</p>

        <h1>
          Gloria Beneth <span>Mbilinyi</span>
        </h1>

        <p className="hero-title">{profile.shortTitle}</p>

        <p className="hero-lead">
          I am a Computer Engineering student passionate about building
          intelligent software systems, AI-powered applications, IoT solutions,
          embedded systems, and practical technology solutions.
        </p>

        <div className="hero-actions">
          <ButtonLink href="#projects">
            View Projects <ArrowUpRight size={16} />
          </ButtonLink>

          <ButtonLink variant="secondary" href="#contact">
            Contact Me
          </ButtonLink>
        </div>

        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} />
            {profile.githubLabel}
          </a>

          <span>·</span>
          <span className="pending-link" title="Link pending">
            LinkedIn
          </span>

          <span>·</span>

          <a href="#contact">
            <Mail size={16} />
            Email
          </a>
        </div>

        <div className="availability">
          <span />
          <strong>
            Open to internships, scholarships, hackathons & bootcamps
          </strong>
        </div>
      </Reveal>

      <Reveal className="profile-wrap" delay={0.08}>
        <div className="profile-frame glass-panel">
          <img
            src={photos.profile}
            alt="Gloria Beneth Mbilinyi, profile photo"
            className="profile-photo"
          />

          <div className="profile-note">
            <div>
              <small>Currently</small>
              <strong>
                BEng · Dar es Salaam Institute of Technology
              </strong>
            </div>
            <span />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AboutSkills() {
  return <>
    <section id="about" className="section section-anchor"><Reveal><SectionHeading number="01" title="Engineering with purpose" kicker="About"/><div className="about-grid"><p className="about-lead">I turn real-world problems into practical technical solutions.</p><div><p>I am pursuing a Bachelor of Engineering in Computer Engineering at Dar es Salaam Institute of Technology, building experience across software, artificial intelligence, IoT, embedded systems, and computer networking.</p><p>My work connects code with physical systems—from secure healthcare platforms and RAG assistants to accessible control systems and environmental sensor networks.</p></div><figure className="about-photo"><img src={photos.coding} alt="Gloria coding on her laptop during a tech session" /><figcaption>Coding Photo · Tech for a Better Tomorrow session</figcaption></figure><dl><div><dt>10+</dt><dd>Technical projects</dd></div><div><dt>7</dt><dd>Engineering domains</dd></div><div><dt>4.6</dt><dd>Diploma GPA</dd></div></dl></div></Reveal></section>
    <section id="skills" className="section section-anchor"><Reveal><SectionHeading number="02" title="Technical capabilities" kicker="Skills"/></Reveal><div className="skills-grid">{skillGroups.map((group, index) => <Reveal key={group.title} delay={Math.min(index*.03,.18)}><article className="skill-card glass-panel"><div className="skill-top"><span>{String(index+1).padStart(2,"0")}</span><Code2 size={17}/></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article></Reveal>)}</div></section>
  </>;
}

function ProjectCard({ project, onDetails }: { project: typeof projects[number]; onDetails: () => void }) {
  return <motion.article layout className={`project-card glass-panel ${project.featured ? "featured" : ""}`}>
    <div className="project-image">{"image" in project && project.image ? <img src={project.image} alt={`${project.title} — ${project.imageLabel}`} className="project-photo" /> : <ImagePlaceholder label={project.imageLabel} className="project-placeholder" />}<span>{project.category}</span></div>
    <div className="project-body"><p className="project-index">{String(projects.indexOf(project)+1).padStart(2,"0")} / Project</p><h3>{project.title}</h3><p>{project.description}</p><div className="tech-row">{project.technologies.slice(0,5).map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-actions">{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={15}/>GitHub</a>}{project.secondaryGithub && <a href={project.secondaryGithub} target="_blank" rel="noreferrer"><Code2 size={15}/>Frontend</a>}<button onClick={onDetails}>Project Details <ArrowUpRight size={14}/></button></div></div>
  </motion.article>;
}

function Projects() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);
  const reduced = useReducedMotion();
  const filtered = useMemo(() => category === "All" ? projects : projects.filter(p => p.category === category), [category]);
  return <section id="projects" className="section projects-section section-anchor"><Reveal><SectionHeading number="03" title="Selected engineering work" kicker="Projects"/><div className="filter-row" aria-label="Filter projects">{categories.map(cat => <button key={cat} onClick={() => setCategory(cat)} className={cat === category ? "active" : ""}>{cat}</button>)}</div></Reveal><motion.div layout className="projects-grid"><AnimatePresence mode="popLayout">{filtered.map(project => reduced ? <div key={project.title}><ProjectCard project={project} onDetails={() => setSelected(project)}/></div> : <motion.div key={project.title} layout initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .97 }}><ProjectCard project={project} onDetails={() => setSelected(project)}/></motion.div>)}</AnimatePresence></motion.div>
  <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={(e)=>{if(e.currentTarget===e.target)setSelected(null)}}><motion.div role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className="project-dialog glass-panel" initial={{opacity:0,y:16,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:16,scale:.98}}><Button variant="icon" className="dialog-close" onClick={()=>setSelected(null)} aria-label="Close project details"><X size={18}/></Button><p className="eyebrow">{selected.category} · Project Details</p><h3 id="project-dialog-title">{selected.title}</h3><p>{selected.description}</p><div className="dialog-tech">{selected.technologies.map(tech=><span key={tech}><Check size={12}/>{tech}</span>)}</div>{selected.github ? <ButtonLink href={selected.github} target="_blank" rel="noreferrer">View repository <ExternalLink size={15}/></ButtonLink> : <p className="repository-note">Repository link will be added when available.</p>}</motion.div></motion.div>}</AnimatePresence>
  </section>;
}

function ExperienceEducation() {
  return <>
    <section id="experience" className="section section-anchor"><Reveal><SectionHeading number="04" title="Experience & technical training" kicker="Practice"/></Reveal><div className="experience-grid">{experiences.map((item,index)=><Reveal key={item.title} delay={index*.06}><article className={`experience-card glass-panel ${item.placeholder ? "placeholder" : ""}`}>{index===1 && <img src={photos.pcb} alt="Gloria soldering a PCB during hands-on engineering practice" className="experience-photo" />}<div className="experience-icon">{index===0?<BriefcaseBusiness/>:index===1?<Cpu/>:<Award/>}</div><p className="eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.description}</p><span>{item.status}</span></article></Reveal>)}</div></section>
    <section id="education" className="section section-anchor"><Reveal><SectionHeading number="05" title="Education" kicker="Timeline"/><div className="timeline glass-panel">{education.map((item,index)=><article key={item.period}><div className="timeline-marker"><span className={index===0?"current":""}/></div><p className="timeline-period">{item.period}</p><div><h3>{item.title}</h3><p>{item.place}</p></div><strong>{item.note}</strong></article>)}</div></Reveal></section>
  </>;
}

function CertificationsGithub() {
  const cells = Array.from({length: 91},(_,i)=> (i*7+i%5)%5);
  return <>
    <section id="certifications" className="section section-anchor"><Reveal><SectionHeading number="06" title="Certifications & credentials" kicker="Learning"/><div className="cert-grid">{certifications.map((cert,index)=><article className="cert-card glass-panel" key={index}><Award size={20}/><p className="eyebrow">{cert.year}</p><h3>{cert.name}</h3><p>{cert.organization}</p><span>{cert.placeholder ? "Ready for verified details" : "View credential"}</span></article>)}</div></Reveal></section>
    <section className="section github-section"><Reveal><div className="github-panel"><div className="github-copy"><p className="eyebrow">Open source · prettyglory</p><h2>Building in public, one practical system at a time.</h2><p>Explore the source code behind my software, AI, mobile, and embedded engineering projects.</p><ButtonLink href={profile.github} target="_blank" rel="noreferrer">Explore My GitHub <Github size={17}/></ButtonLink></div><div className="github-visual glass-panel"><div className="github-header"><Github size={20}/><span>Contribution activity</span><strong>prettyglory</strong></div><div className="contribution-grid" aria-label="Decorative contribution activity visualization">{cells.map((level,index)=><span key={index} data-level={level}/>)}</div><div className="repo-list">{["smart-clinic","dit-smart-assistant","liftSystem","GeePlayer"].map(name=><a key={name} href={`${profile.github}/${name}`} target="_blank" rel="noreferrer"><span>{name}</span><ArrowUpRight size={14}/></a>)}</div></div></div></Reveal></section>
  </>;
}

function ContactFooter() {
  return <><section id="contact" className="section contact-section section-anchor"><Reveal><div className="contact-panel glass-panel"><div className="contact-copy"><p className="eyebrow">08 / Contact</p><h2>Let’s build something practical.</h2><p>I am open to internships, scholarships, job opportunities, hackathons, tech bootcamps, and thoughtful engineering collaborations.</p><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub</a><span className="pending-link"><Mail size={17}/>Email available on request</span><span className="pending-link">LinkedIn link pending</span></div></div><ContactForm/></div></Reveal></section><footer><div><p>Designed & Built by Gloria Beneth Mbilinyi</p><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href="#contact">Contact</a><a href="#home">Back to Top <ArrowUp size={14}/></a></div></div></footer></>;
}

export function Portfolio() {
  const [theme,setTheme] = useState<"light"|"dark">("light");
  useEffect(()=>{const stored=window.localStorage.getItem("portfolio-theme"); const next=stored==="dark"||(!stored&&window.matchMedia("(prefers-color-scheme: dark)").matches)?"dark":"light"; setTheme(next); document.documentElement.classList.toggle("dark",next==="dark")},[]);
  const toggle=()=>setTheme(current=>{const next=current==="light"?"dark":"light"; document.documentElement.classList.toggle("dark",next==="dark"); window.localStorage.setItem("portfolio-theme",next); return next;});
  return <div className="portfolio-shell"><div className="technical-grid" aria-hidden="true"/><Navbar theme={theme} onTheme={toggle}/><main><Hero/><AboutSkills/><Projects/><ExperienceEducation/><CertificationsGithub/><ContactFooter/></main></div>;
}

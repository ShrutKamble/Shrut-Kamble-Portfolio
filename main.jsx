import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const projects = [
  {
    n:"01", title:"BSNL Infrastructure Monitoring Dashboard", type:"Infrastructure & Monitoring",
    text:"Designed a monitoring platform around a multi-node virtualization environment to provide visibility into infrastructure resources and services.",
    tech:["Proxmox","Linux","MongoDB","FastAPI","NFS","RAID"],
    result:"Virtualization • storage • monitoring"
  },
  {
    n:"02", title:"Wi-Fi Deauthentication Detector", type:"Wireless Security / IoT",
    text:"Built an ESP32-based defensive system that monitors Wi-Fi management traffic and provides local alerts when suspicious deauthentication activity is detected.",
    tech:["ESP32","802.11","OLED","Wi-Fi","IoT Security"],
    result:"Detection • packet monitoring • alerting"
  },
  {
    n:"03", title:"Network Honeypot Environment", type:"Defensive Security",
    text:"Created a controlled honeypot environment to observe unwanted network activity and understand defensive monitoring and isolation requirements.",
    tech:["Linux","Honeypot","Networking","Security"],
    result:"Threat observation • defense"
  },
  {
    n:"04", title:"File Integrity Checker", type:"Security Automation",
    text:"Developed a Python utility that creates a cryptographic baseline and identifies unexpected changes to monitored files.",
    tech:["Python","SHA-256","JSON","Hashing"],
    result:"Integrity monitoring • automation"
  },
  {
    n:"05", title:"Web Vulnerability Scanner", type:"Security Lab",
    text:"Built a controlled security-lab tool using Python HTTP requests and HTML parsing to explore basic web application assessment concepts.",
    tech:["Python","Requests","BeautifulSoup"],
    result:"Web assessment • security testing"
  },
  {
    n:"06", title:"Port Scanner", type:"Network Security Lab",
    text:"Created a basic port-scanning utility to understand service discovery, network sockets and the security implications of exposed services.",
    tech:["Python","TCP","Sockets","Networking"],
    result:"Reconnaissance • service discovery"
  }
];

const skills = [
  ["Networking",["CCNA concepts","Routing & switching","TCP/IP & OSI","OSPF • RIP • EIGRP","Cisco Packet Tracer","GNS3"]],
  ["Cybersecurity",["SOC fundamentals","Network security","Wireshark","Kali Linux","Traffic analysis","Defensive security"]],
  ["Infrastructure",["Ubuntu / Debian","Proxmox","OPNsense","NFS / RAID","MongoDB","Nginx"]],
  ["Technical",["Python","Git / GitHub","WinSCP","Linux CLI","FastAPI","Troubleshooting"]]
];

function Icon({type}) {
  const p={
    arrow:<><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    github:<><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2-.35 6.5-1.55 6.5-7A5.4 5.4 0 0 0 19 3.77 5 5 0 0 0 18.91 1S17.73.65 15 2.5a13.4 13.4 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5 5 0 0 0 4 3.77 5.4 5.4 0 0 0 2.5 7.5c0 5.45 3.3 6.65 6.5 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 21c-4 .95-4-2-5-2"/></>,
    linkedin:<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    download:<><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    menu:<><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close:<><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>
  }[type];
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{p}</svg>;
}

function App(){
  const [menu,setMenu]=useState(false);
  const go=id=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"})};
  return <div className="app">
    <div className="grid"/>
    <header className="nav">
      <button className="logo" onClick={()=>go("home")}><span>SK</span> Shrut<span className="green">.</span></button>
      <nav className={menu?"links open":"links"}>
        {["about","skills","projects","experience","contact"].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}
      </nav>
      <button className="mobile" onClick={()=>setMenu(!menu)}><Icon type={menu?"close":"menu"}/></button>
    </header>

    <main>
      <section id="home" className="hero section">
        <div>
          <div className="availability"><i/> AVAILABLE FOR INTERNSHIP OPPORTUNITIES</div>
          <div className="eyebrow">NETWORK ENGINEERING <b>/</b> CYBERSECURITY</div>
          <h1>Shrut Rajendra<br/><span>Kamble</span></h1>
          <p className="intro">Electronics & Telecommunication Engineering graduate focused on <strong>networking, infrastructure and defensive cybersecurity.</strong> I build practical labs, troubleshoot systems and learn by understanding how the technology actually works.</p>
          <div className="buttons">
            <button className="primary" onClick={()=>go("projects")}>Explore my work <Icon type="arrow"/></button>
            <a className="outline" href="/Shrut_Kamble_Resume.pdf" download><Icon type="download"/> Download Resume</a>
          </div>
          <div className="social">
            <a href="https://github.com/ShrutKamble" target="_blank" rel="noreferrer"><Icon type="github"/> GitHub</a>
            <a href="https://www.linkedin.com/in/shrut-kamble-44831724a/" target="_blank" rel="noreferrer"><Icon type="linkedin"/> LinkedIn</a>
            <a href="mailto:shrutkamble25@gmail.com"><Icon type="mail"/> Email</a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-top"><span>PROFILE / 2026</span><em>01</em></div>
          <div className="signal"><span className="signal-line"/><span className="signal-dot"/></div>
          <div className="profile-grid">
            <div><small>FOCUS</small><strong>Networking<br/>Cybersecurity</strong></div>
            <div><small>INTEREST</small><strong>Blue Team<br/>Infrastructure</strong></div>
            <div><small>ENVIRONMENT</small><strong>Linux<br/>Network Labs</strong></div>
            <div><small>APPROACH</small><strong>Hands-on<br/>Problem Solving</strong></div>
          </div>
          <div className="terminal"><p><span>$</span> whoami</p><p>network_engineer / security_learner</p><p><span>$</span> status</p><p className="ok">● learning • building • troubleshooting</p></div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="label">01 / ABOUT ME</div>
        <div className="two">
          <h2>Not just learning<br/><span>— building.</span></h2>
          <div className="copy">
            <p className="big">I’m interested in what happens <strong>behind the interface</strong> — packets, protocols, servers, logs, services and the security decisions that connect them.</p>
            <p>My work combines networking fundamentals with practical infrastructure and cybersecurity projects. I have worked with Cisco networking labs, Linux systems, virtualization, storage, wireless monitoring and security tooling.</p>
            <p>I’m looking for an internship where I can contribute, troubleshoot real systems, learn from experienced engineers and grow into a strong network/security professional.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="label">02 / TECHNICAL SKILLS</div>
        <div className="section-title"><h2>My technical <span>toolkit.</span></h2><p>Technologies and concepts I have studied or worked with hands-on.</p></div>
        <div className="skills">{skills.map(([title,items],i)=><article key={title}><small>0{i+1}</small><h3>{title}</h3>{items.map(x=><div className="skill" key={x}><i/> {x}</div>)}</article>)}</div>
      </section>

      <section id="projects" className="section">
        <div className="label">03 / PROJECTS</div>
        <div className="section-title"><h2>Work that shows<br/><span>how I think.</span></h2><p>Selected academic, internship and personal projects demonstrating practical problem solving.</p></div>
        <div className="projects">{projects.map(p=><article key={p.n} className="project"><div className="pnum">{p.n}</div><div><small>{p.type}</small><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div></div><div className="result"><b>KEY AREA</b><span>{p.result}</span></div></article>)}</div>
      </section>

      <section id="experience" className="section">
        <div className="label">04 / EXPERIENCE & CERTIFICATIONS</div>
        <div className="experience">
          <article><span>INTERNSHIP</span><div><h3>Cybersecurity & Technical Project Work</h3><p>Worked on security-focused Python projects including file integrity checking, web assessment and port scanning, alongside practical networking and security labs.</p></div></article>
          <article><span>INTERNSHIP</span><div><h3>Technical / IT Project Experience</h3><p>Hands-on exposure to technical environments, documentation, troubleshooting and project-based implementation.</p></div></article>
          <article><span>CERTIFICATION</span><div><h3>Cisco Certified Network Associate — CCNA</h3><p>Networking foundation covering network fundamentals, connectivity, routing, switching, services and troubleshooting.</p></div></article>
          <article><span>CERTIFICATION</span><div><h3>SOC Fundamentals</h3><p>Completed training focused on security operations concepts, monitoring and defensive security fundamentals.</p></div></article>
        </div>
        <div className="hands"><div><small>HANDS-ON NETWORKING</small><h3>Beyond the screen.</h3></div><p>Fiber splicing • OTDR • Crimping • Modem configuration • Network troubleshooting • Cisco lab configuration</p></div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-box">
          <div><div className="label">05 / CONTACT</div><h2>Looking for the<br/><span>next opportunity.</span></h2><p>Interested in networking, infrastructure, SOC and cybersecurity internship opportunities.</p></div>
          <div className="contact-links">
            <a href="mailto:shrutkamble25@gmail.com"><Icon type="mail"/> shrutkamble25@gmail.com</a>
            <a href="https://www.linkedin.com/in/shrut-kamble-44831724a/" target="_blank" rel="noreferrer"><Icon type="linkedin"/> LinkedIn profile</a>
            <a href="https://github.com/ShrutKamble" target="_blank" rel="noreferrer"><Icon type="github"/> GitHub profile</a>
          </div>
        </div>
      </section>
    </main>
    <footer><span>© 2026 Shrut Rajendra Kamble</span><span>NETWORKING • SECURITY • INFRASTRUCTURE</span></footer>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);

import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const certs = [
    // Anthropic AI
    {
      title: "Building with the Claude API",
      issuer: "Anthropic",
      category: "ai",
      date: "Issued Mar 2026",
      credentialId: "cf75s324orbc",
      link: "https://verify.skilljar.com/c/cf75s324orbc",
      highlight: "AI Agent Design & Multimodal API Integration",
      skills: ["Prompt Engineering", "Interactions API", "Function Calling"],
      badgeColor: "purple"
    },
    {
      title: "Introduction to Model Context Protocol (MCP)",
      issuer: "Anthropic",
      category: "ai",
      date: "Issued Mar 2026",
      credentialId: "dqrut2kbqp9a",
      link: "https://verify.skilljar.com/c/dqrut2kbqp9a",
      highlight: "Enterprise Context & Agent Protocols",
      skills: ["MCP Servers", "Tool Schemas", "Autonomous Agents"],
      badgeColor: "purple"
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      category: "ai",
      date: "Issued Mar 2026",
      credentialId: "qo63vmkhfvy6",
      link: "https://verify.skilljar.com/c/qo63vmkhfvy6",
      highlight: "Autonomous Terminal Engineering",
      skills: ["CLI Automation", "Refactoring", "Developer Tooling"],
      badgeColor: "purple"
    },
    {
      title: "Certificate of Completion: Introduction to Agent Skills",
      issuer: "Anthropic",
      category: "ai",
      date: "Issued Mar 2026",
      credentialId: "n5jgwq7t8ceo",
      link: "https://verify.skilljar.com/c/n5jgwq7t8ceo",
      highlight: "Agentic Capabilities & Workflow Automation",
      skills: ["Agent Workflows", "Tool Orchestration", "Safety Protocols"],
      badgeColor: "purple"
    },

    // Data Engineering
    {
      title: "Data Engineering (NQF Level 5)",
      issuer: "Sand Technologies",
      category: "data-engineering",
      date: "Issued Jun 2023 · Graduated 2024",
      credentialId: "NQF-5-DE",
      link: "https://www.sandtech.com/",
      highlight: "Big Data & Scalable Cloud Pipelines",
      skills: ["Python", "SQL Server", "Hadoop", "PySpark", "Data Warehousing"],
      badgeColor: "red"
    },
    {
      title: "SQL Boot Camp & Database Performance",
      issuer: "Udemy",
      category: "data-engineering",
      date: "Issued Dec 2019",
      credentialId: "UC-S999T2EZ",
      link: "https://www.udemy.com/certificate/UC-S999T2EZ/",
      highlight: "Complex Query Tuning & Schema Modeling",
      skills: ["SQL / T-SQL", "Stored Procedures", "Query Tuning", "Indexing"],
      badgeColor: "red"
    },

    // Power BI & BI Analytics
    {
      title: "Advanced Sales Analytics for Decision Making with Power BI",
      issuer: "Udemy",
      category: "bi",
      date: "Issued May 2020",
      credentialId: "UC-e04caae3-f9b0-42fe-b56e-3788ec100f66/",
      link: "https://www.udemy.com/certificate/UC-e04caae3-f9b0-42fe-b56e-3788ec100f66/",
      highlight: "Executive BI Dashboards & KPIs",
      skills: ["Power BI", "DAX", "Financial Modeling", "KPI Dashboards"],
      badgeColor: "red"
    },
    {
      title: "Microsoft Power BI - Up and Running with Power BI Desktop",
      issuer: "Udemy",
      category: "bi",
      date: "Issued May 2020",
      credentialId: "UC-e04caae3-f9b0-42fe-b56e-3788ec100f66/",
      link: "https://www.udemy.com/certificate/UC-e04caae3-f9b0-42fe-b56e-3788ec100f66/",
      highlight: "Data Modeling & Dynamic Reports",
      skills: ["Power BI Desktop", "Data Transformations", "Visualizations"],
      badgeColor: "red"
    },
    {
      title: "Microsoft Power BI - Publishing to Power BI Services",
      issuer: "Udemy",
      category: "bi",
      date: "Issued May 2020",
      credentialId: "UC-e04caae3-f9b0-42fe-b56e-3788ec100f66/",
      link: "https://www.udemy.com/certificate/UC-e04caae3-f9b0-42fe-b56e-3788ec100f66/",
      highlight: "Cloud BI Deployment & Workspaces",
      skills: ["Power BI Service", "Workspaces", "Scheduled Refreshes"],
      badgeColor: "red"
    },
    {
      title: "Power BI - Data Analytics Essentials with Power BI",
      issuer: "Udemy",
      category: "bi",
      date: "Issued May 2020",
      credentialId: "UC-e04caae3-f9b0-42fe-b56e-3788ec100f66/",
      link: "https://www.udemy.com/certificate/UC-e04caae3-f9b0-42fe-b56e-3788ec100f66/",
      highlight: "Analytical Storytelling & Measures",
      skills: ["DAX Measures", "Data Analysis", "Dashboard UX"],
      badgeColor: "red"
    },

    // RPA & API Testing
    {
      title: "Complete UiPath RPA Developer Course: Build 7 Robots",
      issuer: "Udemy",
      category: "rpa",
      date: "Issued May 2020",
      credentialId: "UC-22a36ffc-f90e-404b-acc3-ba945b3fe41c/",
      link: "https://www.udemy.com/certificate/UC-22a36ffc-f90e-404b-acc3-ba945b3fe41c/",
      highlight: "Robotic Process Automation Delivery",
      skills: ["UiPath", "Robots Automation", "Workflow Design"],
      badgeColor: "purple"
    },
    {
      title: "WebServices/REST API Testing with SoapUI + Real-Time Projects",
      issuer: "Udemy",
      category: "rpa",
      date: "Issued Sep 2020",
      credentialId: "UC-22a36ffc-f90e-404b-acc3-ba945b3fe41c/",
      link: "https://www.udemy.com/certificate/UC-22a36ffc-f90e-404b-acc3-ba945b3fe41c/",
      highlight: "API Validation & End-to-End Integration",
      skills: ["REST APIs", "SoapUI", "Endpoint Testing", "JSON/XML"],
      badgeColor: "purple"
    },

    // Excel, Power Query & DAX
    {
      title: "Microsoft Excel - Excel Power Query, Power Pivot & DAX",
      issuer: "Udemy",
      category: "excel",
      date: "Issued Apr 2020",
      credentialId: "UC-c7cc539e-2e5c-4f17-b8f9-b44ac43bf9a6/",
      link: "https://www.udemy.com/certificate/UC-c7cc539e-2e5c-4f17-b8f9-b44ac43bf9a6/",
      highlight: "Advanced Data Transformation",
      skills: ["Power Query", "Power Pivot", "DAX", "Automation"],
      badgeColor: "purple"
    },
    {
      title: "Microsoft Excel - Data Visualization, Charts & Graphs",
      issuer: "Udemy",
      category: "excel",
      date: "Issued Apr 2020",
      credentialId: "UC-c7cc539e-2e5c-4f17-b8f9-b44ac43bf9a6/",
      link: "https://www.udemy.com/certificate/UC-c7cc539e-2e5c-4f17-b8f9-b44ac43bf9a6/",
      highlight: "Executive Data Visualization",
      skills: ["Data Visualization", "Dynamic Charts", "Financial Reporting"],
      badgeColor: "purple"
    },
    {
      title: "Microsoft Excel - Advanced Formulas & Functions",
      issuer: "Udemy",
      category: "excel",
      date: "Issued Apr 2020",
      credentialId: "UC-c7cc539e-2e5c-4f17-b8f9-b44ac43bf9a6/",
      link: "https://www.udemy.com/certificate/UC-c7cc539e-2e5c-4f17-b8f9-b44ac43bf9a6/",
      highlight: "Complex Data Analysis",
      skills: ["Advanced Formulas", "Data Verification", "Audit Controls"],
      badgeColor: "purple"
    },
    {
      title: "Excel PRO TIPS: 75+ Tips to go from Excel Beginner to Pro",
      issuer: "Udemy",
      category: "excel",
      date: "Issued Apr 2020",
      credentialId: "UC-c7cc539e-2e5c-4f17-b8f9-b44ac43bf9a6/",
      link: "https://www.udemy.com/certificate/UC-c7cc539e-2e5c-4f17-b8f9-b44ac43bf9a6/",
      highlight: "Data Modeling & Efficiency Hacks",
      skills: ["Data Optimization", "Productivity", "Formulas"],
      badgeColor: "purple"
    }
  ];

  const filteredCerts = activeCategory === 'all'
    ? certs
    : certs.filter(c => c.category === activeCategory);

  return (
    <div className="container page-section">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="page-title">Licenses & <span className="glow-text">Certifications</span></h1>
        <p className="page-subtitle" style={{ margin: '0 auto' }}>
          Official accredited credentials across AI Engineering, Cloud Data Platforms, Business Intelligence, RPA Automation, and Advanced Analytics.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <button 
          onClick={() => setActiveCategory('all')}
          className={`btn-secondary ${activeCategory === 'all' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.15rem', 
            fontSize: '0.85rem',
            background: activeCategory === 'all' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: activeCategory === 'all' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          All Credentials ({certs.length})
        </button>
        <button 
          onClick={() => setActiveCategory('ai')}
          className={`btn-secondary ${activeCategory === 'ai' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.15rem', 
            fontSize: '0.85rem',
            background: activeCategory === 'ai' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: activeCategory === 'ai' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          Anthropic AI & Agents (4)
        </button>
        <button 
          onClick={() => setActiveCategory('data-engineering')}
          className={`btn-secondary ${activeCategory === 'data-engineering' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.15rem', 
            fontSize: '0.85rem',
            background: activeCategory === 'data-engineering' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: activeCategory === 'data-engineering' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          Data Engineering & SQL (2)
        </button>
        <button 
          onClick={() => setActiveCategory('bi')}
          className={`btn-secondary ${activeCategory === 'bi' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.15rem', 
            fontSize: '0.85rem',
            background: activeCategory === 'bi' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: activeCategory === 'bi' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          Power BI & Analytics (4)
        </button>
        <button 
          onClick={() => setActiveCategory('rpa')}
          className={`btn-secondary ${activeCategory === 'rpa' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.15rem', 
            fontSize: '0.85rem',
            background: activeCategory === 'rpa' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: activeCategory === 'rpa' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          RPA & API Testing (2)
        </button>
        <button 
          onClick={() => setActiveCategory('excel')}
          className={`btn-secondary ${activeCategory === 'excel' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.15rem', 
            fontSize: '0.85rem',
            background: activeCategory === 'excel' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: activeCategory === 'excel' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          Excel Power Query & DAX (4)
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredCerts.map((cert, index) => (
          <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{ 
                  background: cert.badgeColor === 'red' ? 'rgba(255, 51, 102, 0.1)' : 'rgba(168, 85, 247, 0.1)', 
                  padding: '0.85rem', 
                  borderRadius: '12px', 
                  color: cert.badgeColor === 'red' ? 'var(--accent-red)' : 'var(--accent-purple)',
                  border: `1px solid ${cert.badgeColor === 'red' ? 'rgba(255, 51, 102, 0.25)' : 'rgba(168, 85, 247, 0.25)'}`
                }}>
                  <Award size={28} />
                </div>
                <span className="tag" style={{ fontSize: '0.75rem' }}>{cert.date}</span>
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--text-primary)', lineHeight: '1.35' }}>{cert.title}</h3>
              <p style={{ color: 'var(--accent-red)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>{cert.issuer}</p>
              
              {cert.credentialId && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  ID: {cert.credentialId}
                </p>
              )}
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>{cert.highlight}</p>
            </div>

            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {cert.skills.map((skill, i) => (
                  <span key={i} className="tag" style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem' }}>{skill}</span>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.5rem', 
                    width: '100%',
                    padding: '0.65rem 1rem',
                    background: 'rgba(168, 85, 247, 0.1)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '8px',
                    color: '#D8B4FE', 
                    fontSize: '0.88rem', 
                    fontWeight: 600,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--accent-gradient)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                    e.currentTarget.style.color = '#D8B4FE';
                    e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                  }}
                >
                  Show Credential <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

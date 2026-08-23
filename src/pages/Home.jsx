import React, { useState } from 'react';
import { ArrowRight, Database, Cloud, ShieldCheck, FileText, TrendingUp, CheckCircle2, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillCard from '../components/SkillCard';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('cloud');

  const stackDetails = {
    cloud: [
      { name: "Microsoft Azure", role: "Primary Enterprise Cloud", desc: "Orchestrating scalable data lakes, storage tiers, and serverless compute using Azure Data Factory, Azure Data Lake Storage, and Azure Repos." },
      { name: "Amazon Web Services (AWS)", role: "Cloud Data Warehousing", desc: "Architecting cloud-native analytical pipelines using AWS Redshift, S3 buckets, RDS database instances, and IAM least-privilege security." },
      { name: "Terraform & IaC", role: "Infrastructure Automation", desc: "Declarative infrastructure-as-code management and CI/CD automated provisioning across multi-cloud environments." }
    ],
    engineering: [
      { name: "Python (Pandas, PySpark)", role: "Core Data Processing", desc: "Developing resilient data ingestion scripts, distributed transformations, and automated reconciliation frameworks." },
      { name: "Advanced SQL & T-SQL", role: "Database Engineering", desc: "Designing high-performance analytical views, stored procedures, and complex query optimizations for high-throughput banking systems." },
      { name: "Apache Airflow & Spark", role: "Pipeline Orchestration", desc: "Building modular DAGs with automated dependency scheduling, error handling, and latency-tuned data transformations." }
    ],
    bi: [
      { name: "Microsoft Power BI", role: "Executive Semantic Models", desc: "Engineering complex DAX measures, dimensional data models, Power Query transformations, and row-level security (RLS)." },
      { name: "SSRS & SSIS", role: "Automated Reporting", desc: "Automating recurring financial reporting packages and ETL migration packages for banking and wealth-management clients." },
      { name: "MetaBase & Tableau", role: "Interactive Analytics", desc: "Translating transactional dataset flows into actionable business intelligence dashboards and operational KPIs." }
    ],
    governance: [
      { name: "POPIA & GDPR Compliance", role: "Regulatory Governance", desc: "Implementing automated data-masking and encryption protocols for customer and sensitive financial dataset migrations." },
      { name: "PII Protection & Masking", role: "Data Security", desc: "Establishing automated data-anonymization and audit frameworks to eliminate discrepancy reporting." },
      { name: "Data Lineage & Stewardship", role: "Quality Assurance", desc: "Designing end-to-end data validation checks, metadata standards, and audit trails across banking platforms." }
    ],
    ai: [
      { name: "Anthropic Claude API", role: "AI Agent Engineering", desc: "Designing multimodal agentic workflows, prompt architectures, and intelligent tool calling for automated data pipelines." },
      { name: "Model Context Protocol (MCP)", role: "Protocol Integration", desc: "Building and consuming MCP server tools to safely expose structured data schemas and APIs to AI agents." },
      { name: "RPA & Process Automation", role: "Workflow Elimination", desc: "Deploying Selenium, UiPath, and Automation Anywhere bots to automate document synthesis and reporting workflows." }
    ]
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot"></span>
            Senior Cloud Data Engineer & FinTech BI Architect
          </div>

          <h1 className="hero-title">
            Architecting <span className="glow-text">Scalable Cloud & Data</span> Ecosystems
          </h1>
          
          <p className="hero-subtitle">
            I'm <strong style={{ color: 'var(--text-primary)' }}>Fortune Mogoeng</strong>, a Senior Cloud Data Engineer and FinTech Business Intelligence Architect based in <strong>Cape Town, South Africa</strong>. I specialize in bridging the gap between complex cloud data infrastructure and strategic, insight-driven executive decision-making.
          </p>
          
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">
              Explore Featured Works <ArrowRight size={18} />
            </Link>
            <Link to="/resume" className="btn-secondary">
              <FileText size={18} /> View Career History
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
              <Download size={18} /> Master CV (PDF)
            </a>
          </div>

          {/* Qualitative Strategic Highlights */}
          <div className="positioning-grid">
            <div className="positioning-card">
              <div className="positioning-title">Hybrid Cloud Architect</div>
              <div className="positioning-desc">Expert in deploying data lakehouses and automated ETL across Microsoft Azure and AWS.</div>
            </div>
            <div className="positioning-card">
              <div className="positioning-title">FinTech Data Provenance</div>
              <div className="positioning-desc">Proven delivery in premier tier-one banking platforms (WesBank, Absa Group).</div>
            </div>
            <div className="positioning-card">
              <div className="positioning-title">POPIA & PII Governance</div>
              <div className="positioning-desc">Automated data anonymization, field encryption, and audit-ready data reconciliation.</div>
            </div>
            <div className="positioning-card">
              <div className="positioning-title">AI & Agentic Systems</div>
              <div className="positioning-desc">Anthropic certified in Claude API, Model Context Protocol (MCP), and agent workflows.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="container page-section">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="page-title">Core <span className="glow-text">Engineering</span> Pillars</h2>
          <p className="page-subtitle" style={{ margin: '0 auto' }}>
            Bridging cloud data engineering rigor with high-performance transactional processing and executive intelligence.
          </p>
        </div>

        <div className="skills-grid">
          <SkillCard 
            icon={<Database size={26} />}
            title="ETL/ELT Data Engineering"
            description="Designing and automating batch and streaming data pipelines using Python, PySpark, SQL, and Apache Airflow to ingest and transform multi-source datasets."
            tags={["Python", "PySpark", "SQL / T-SQL", "Apache Airflow", "ETL/ELT"]}
          />
          <SkillCard 
            icon={<Cloud size={26} />}
            title="Cloud & Data Warehousing"
            description="Architecting scalable cloud data lakes, warehouses, and storage tiers across Azure (Data Factory, Synapse) and AWS (S3, Redshift) with Terraform and CI/CD."
            tags={["Azure Data Factory", "AWS S3 / Redshift", "CI/CD & DevOps", "Terraform / IaC"]}
            isPurple={true}
          />
          <SkillCard 
            icon={<TrendingUp size={26} />}
            title="FinTech BI & Data Modeling"
            description="Kimball dimensional modeling, high-performance transactional views, and executive business intelligence dashboards in Power BI, Tableau, and SSRS."
            tags={["Power BI (DAX)", "Tableau", "Dimensional Modeling", "SSRS / SSIS"]}
          />
          <SkillCard 
            icon={<ShieldCheck size={26} />}
            title="Governance, Security & QA"
            description="Implementing automated data validation frameworks, masking, and encryption protocols for strict POPIA, GDPR, and regulatory audit compliance."
            tags={["POPIA Compliance", "Data Anonymization", "Audit Frameworks", "RBAC & IAM"]}
            isPurple={true}
          />
        </div>

        {/* Interactive Stack Explorer */}
        <div className="stack-explorer">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Technical Stack & Architecture Capabilities</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Select a domain below to inspect specific tools, patterns, and architectural implementations.
            </p>
          </div>

          <div className="stack-tabs">
            <button className={`stack-tab ${activeTab === 'cloud' ? 'active' : ''}`} onClick={() => setActiveTab('cloud')}>
              Cloud Platforms
            </button>
            <button className={`stack-tab ${activeTab === 'engineering' ? 'active' : ''}`} onClick={() => setActiveTab('engineering')}>
              Data Engineering
            </button>
            <button className={`stack-tab ${activeTab === 'bi' ? 'active' : ''}`} onClick={() => setActiveTab('bi')}>
              FinTech Analytics & BI
            </button>
            <button className={`stack-tab ${activeTab === 'governance' ? 'active' : ''}`} onClick={() => setActiveTab('governance')}>
              POPIA & Governance
            </button>
            <button className={`stack-tab ${activeTab === 'ai' ? 'active' : ''}`} onClick={() => setActiveTab('ai')}>
              AI & Automation
            </button>
          </div>

          <div className="stack-content-grid">
            {stackDetails[activeTab].map((item, idx) => (
              <div key={idx} className="stack-item-card">
                <h4>
                  <span>{item.name}</span>
                  <CheckCircle2 size={16} color="var(--accent-red)" />
                </h4>
                <div style={{ color: 'var(--accent-purple)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {item.role}
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Experience Proof */}
        <div className="experience-preview">
          <div className="card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-red)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Enterprise Background & Banking Provenance</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Delivered mission-critical data pipelines and business intelligence architectures for premier South African financial institutions, including <strong>WesBank</strong> (Asset & Vehicle Finance), <strong>Absa Group</strong>, <strong>Embelo</strong>, and <strong>ExploreAI Academy</strong>.
            </p>
            <div className="company-pills">
              <div className="company-pill">
                <strong>Embelo</strong> <span className="role">• Senior Cloud Data Engineer</span>
              </div>
              <div className="company-pill">
                <strong>WesBank</strong> <span className="role">• Business Intelligence Engineer</span>
              </div>
              <div className="company-pill">
                <strong>Absa Group</strong> <span className="role">• Data Engineer</span>
              </div>
              <div className="company-pill">
                <strong>ExploreAI Academy</strong> <span className="role">• Data Engineer</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="contact-cta-section" style={{ marginTop: '5rem', textAlign: 'center' }}>
          <div className="card" style={{ padding: '3.5rem 2rem', background: 'var(--bg-glass)' }}>
            <h2 className="page-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Scale Your <span className="glow-text">Data Architecture?</span></h2>
            <p className="page-subtitle" style={{ margin: '0 auto 2.5rem', maxWidth: '600px' }}>
              I'm currently open to Senior Cloud Data Engineering roles. Let's schedule a call to discuss how I can optimize your cloud infrastructure and BI workflows.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://calendar.google.com/calendar/u/0/r" target="_blank" rel="noreferrer" className="btn-primary">
                Schedule a Call <ArrowRight size={18} />
              </a>
              <a href="mailto:fortunemogoeng@gmail.com" className="btn-secondary">
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

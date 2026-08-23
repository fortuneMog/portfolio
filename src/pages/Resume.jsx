import React from 'react';
import { Calendar, Briefcase, GraduationCap, Building2, Download } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const experiences = [
    {
      role: "Senior Cloud Data Engineer",
      company: "Embelo",
      location: "City of Cape Town, South Africa (Hybrid)",
      period: "Nov 2025 - Present",
      dotClass: "red",
      bullets: [
        "Data Pipeline Architecture: Designed, developed, and automated robust batch and real-time ETL/ELT data pipelines to ingest, transform, and load complex datasets from disparate enterprise sources.",
        "Cloud Infrastructure Management: Built and optimized scalable cloud data warehouses, data lakes, and storage solutions within enterprise cloud environments utilizing Azure Data Factory, Azure Data Lake, and Azure Storage.",
        "System & Query Optimization: Monitored, tuned, and optimized database performance, indexing, and query execution times to ensure high availability and cost-effective cloud resource consumption.",
        "Data Governance & Quality: Implemented data quality assurance protocols, validation checks, and governance frameworks to maintain high standards of data integrity, security, and compliance.",
        "Cross-Functional Collaboration: Partnered with BI engineers, data scientists, product owners, and business analysts to translate complex business requirements into scalable technical data models.",
        "Automation & CI/CD: Implemented CI/CD pipelines and infrastructure-as-code (IaC via Terraform) to automate deployments, orchestrate workflows, and eliminate manual processing errors."
      ],
      skills: ["Azure Data Factory", "Azure Data Lake", "Data Modeling", "CI/CD", "Terraform", "Python", "SQL", "Data Governance"]
    },
    {
      role: "Business Intelligence Engineer",
      company: "WesBank",
      location: "South Africa (Hybrid / Contract)",
      period: "Feb 2025 - Nov 2025",
      dotClass: "purple",
      bullets: [
        "POPIA Compliance & PII Anonymization: Designed and implemented automated data-masking and encryption protocols, ensuring full POPIA compliance during the migration of sensitive financial and customer datasets across SQL Server and AWS environments.",
        "Data Quality & Reconciliation Engine: Built a robust Data Quality, Validation & Reconciliation framework using Python, reducing financial-reporting discrepancies and enabling a reliable single source of truth for audits.",
        "Transactional Flow Optimization: Developed high-performance SQL views, stored procedures, and transactional-flow analytics to identify bottlenecks in high-volume Credit/Debit processing for vehicle and asset finance systems (including credit scoring, debit settlements, and loan book auditing).",
        "Reporting Automation: Improved operational efficiency by automating recurring financial reporting processes using SSRS/SSIS, saving the business many hours per week and accelerating stakeholder reporting.",
        "Cloud Cost & Storage Efficiency: Optimised AWS S3 and Redshift usage through data tiering and ETL performance tuning, resulting in measurable reductions in monthly cloud-infrastructure costs.",
        "Predictive Risk Integration: Partnered with Data Science teams to embed predictive credit-scoring models into BI dashboards, offering proactive early-warning insights for credit-risk teams.",
        "DPLC & Version Control: Strengthened the Data Product Life Cycle (DPLC) by introducing Azure Repos version control and CI/CD practices, reducing deployment defects and improving time-to-market for new data capabilities."
      ],
      skills: ["SQL Server", "AWS Redshift", "Python", "Power BI", "SSRS/SSIS", "POPIA", "Data Anonymization", "Azure Repos"]
    },
    {
      role: "Data Engineer",
      company: "Absa Group",
      location: "Sandton / Remote (Contract)",
      period: "Feb 2024 - Jan 2025",
      dotClass: "red",
      bullets: [
        "Data Warehouse Modernization (Google XYZ): Architected unified enterprise data warehouse schemas for retail and corporate banking analytics by implementing columnar storage, hash-partitioning, and clustered index hierarchies, ensuring consistent sub-second query response times across multi-source financial datasets.",
        "Cloud Data Solutions & Scalability: Engineered cloud-native streaming and batch ingestion pipelines on AWS (Redshift, S3, RDS) to ingest transactional banking metrics, eliminating processing bottlenecks through automated cloud scaling and optimized resource allocation.",
        "Banking API & Cross-Platform Integration: Developed and maintained secure RESTful APIs, Webhooks, and data connectors to facilitate seamless, real-time data flow between core banking ledger systems and external regulatory services.",
        "Automated Data Integrity & Resiliency: Built automated cross-source validation protocols and schema compatibility checks, eliminating data synchronization discrepancies and ensuring high data availability across downstream reporting layers.",
        "Financial Analytics & Executive Insights: Collaborated with cross-functional banking teams to design customer satisfaction and transactional behavior analytics, enabling product managers to uncover key banking usage patterns."
      ],
      skills: ["AWS Redshift", "Amazon RDS", "Data Warehousing", "Python", "REST APIs", "Webhooks", "Columnar Storage", "Partitioning"]
    },
    {
      role: "Data Engineer",
      company: "ExploreAI Academy",
      location: "Remote (Contract)",
      period: "Jul 2023 - Feb 2024",
      dotClass: "purple",
      bullets: [
        "Pipeline Automation: Designed and developed robust, scalable data pipelines to streamline data processing and integrate multiple data sources using Apache Airflow, Spark, and SQL, improving processing speed and efficiency.",
        "Database Latency Optimization: Optimized database schemas and data models to improve query performance and reduce latency via indexing strategies, partitioning, and query optimization.",
        "Regulatory Compliance & Security: Enforced strict adherence to GDPR, CCPA, and industry security standards, implementing robust data encryption, anonymization techniques, and role-based access controls.",
        "Machine Learning Support: Preprocessed and curated high-volume feature stores, engineered input features, and validated pipeline outputs to support production machine learning models.",
        "Governance & Metadata Management: Established data lineage mapping, metadata management standards, and trained internal stakeholders on data stewardship best practices."
      ],
      skills: ["Apache Airflow", "PySpark", "SQL", "Cloud Computing", "GDPR/CCPA", "Machine Learning Prep", "Data Governance"]
    },
    {
      role: "Data Analyst",
      company: "Upwork",
      location: "Remote (Freelance)",
      period: "May 2022 - Jun 2023",
      dotClass: "red",
      bullets: [
        "Data Accuracy & Verification: Entered and processed large volumes of operational and financial data accurately, consistently maintaining a data accuracy rate of 99% using advanced verification software.",
        "Discrepancy Resolution: Performed meticulous data validation processes, identifying and correcting 95% of errors found in data submissions through custom error-tracking systems.",
        "Compliance & Auditing: Conducted regular quality checks and compliance audits to safeguard sensitive records and adhere to evolving data governance policies.",
        "Workflow Automation: Collaborated to identify data capture bottlenecks, streamlining manual processes with automation scripts to reduce turnaround time."
      ],
      skills: ["Data Entry", "Data Verification", "Quality Control", "Power BI", "Process Automation", "Market Research"]
    },
    {
      role: "Business Data Analyst & Data Architect",
      company: "Xpert Decision Systems (XDS) Pty Ltd",
      location: "Johannesburg Metropolitan Area (Remote / Full-time)",
      period: "Mar 2018 - Apr 2022",
      dotClass: "purple",
      bullets: [
        "Cloud Architecture for Banking Clients: Partnered directly with tier-one banking and wealth-management clients to scope, gather, and architect custom cloud reporting configurations across AWS and Azure with zero production defect rate.",
        "RPA & Automation Delivery: Designed and deployed tailored Robotic Process Automation (RPA) workflows (Automation Anywhere & UiPath) to eliminate repetitive manual reporting operations.",
        "Requirements & Business Analysis: Translated complex stakeholder requirements into clear technical specifications, database schemas, and SSRS reports for wealth management teams.",
        "Data Governance & QA Protocols: Established comprehensive data governance frameworks and QA protocols, conducting regular audits to maintain high standards of data accuracy and regulatory compliance."
      ],
      skills: ["Robotic Process Automation (RPA)", "Automation Anywhere", "UiPath", "Cloud Architecture (AWS/Azure)", "Requirements Analysis", "SSRS", "Data Governance"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Information Systems (Information Technology)",
      institution: "Independent Institute of Education (IIE)",
      year: "Graduated 2017",
      details: "Comprehensive study of database management systems, Python programming, business systems analysis, and enterprise data architecture."
    },
    {
      degree: "Data Engineering Certificate (NQF Level 5)",
      institution: "Sand Technologies",
      year: "Graduated 2024",
      details: "Specialized postgraduate engineering training covering Hadoop, Spark, SQL Server, cloud computing, data warehousing, and big data ETL processes."
    }
  ];

  return (
    <div className="container page-section resume-page">
      <div className="resume-header">
        <div>
          <h1 className="page-title">Career Experience & <span className="glow-text">Credentials</span></h1>
          <p className="page-subtitle">
            A comprehensive record of my professional trajectory across enterprise cloud engineering, tier-one banking platforms, and academic achievements. Based in <strong>Cape Town, South Africa</strong>.
          </p>
        </div>
        <div>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary" style={{ gap: '0.6rem' }}>
            <Download size={18} /> Download Master CV (PDF)
          </a>
        </div>
      </div>

      <div className="resume-grid">
        {/* Work Experience Section */}
        <div>
          <div className="section-header">
            <div className="section-icon-box">
              <Briefcase size={22} />
            </div>
            <h2>Professional Experience</h2>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className={`timeline-dot ${exp.dotClass === 'purple' ? 'purple' : ''}`}></div>
                <div className="timeline-content">
                  <div className="timeline-top">
                    <h3>{exp.role}</h3>
                    <span className="timeline-date">
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>
                  
                  <div className="timeline-company">
                    <Building2 size={16} />
                    <strong>{exp.company}</strong>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.85rem' }}>• {exp.location}</span>
                  </div>

                  <ul className="timeline-bullets">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <div className="timeline-tags">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div style={{ marginTop: '2rem' }}>
          <div className="section-header">
            <div className="section-icon-box purple">
              <GraduationCap size={22} />
            </div>
            <h2>Academic Background</h2>
          </div>

          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot purple"></div>
                <div className="timeline-content">
                  <div className="timeline-top">
                    <h3>{edu.degree}</h3>
                    <span className="timeline-date">
                      <Calendar size={14} /> {edu.year}
                    </span>
                  </div>
                  
                  <div className="timeline-company" style={{ color: 'var(--accent-purple)' }}>
                    <Building2 size={16} />
                    <span>{edu.institution}</span>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

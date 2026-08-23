import React, { useState, useEffect } from 'react';
import { Database, Layers, Car, Bot, Cloud, BarChart3, X, CheckCircle2, Terminal, Copy, Check } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const handleCopy = async (code) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        // Fallback for environments where clipboard API is unavailable
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy code to clipboard: ', err);
    }
  };

  const projects = [
    {
      id: 1,
      title: "SQL Data Engineering & Market Intelligence Pipeline",
      category: "data-engineering",
      badge: "Public GitHub Repo",
      badgeType: "red",
      icon: <Database size={24} color="var(--accent-red)" />,
      description: "A production-grade SQL Data Engineering project performing deep exploratory data analysis (EDA), salary distributions, and optimal skill mapping across high-demand engineering roles using advanced PostgreSQL window functions, CTEs, and query optimization.",
      highlights: [
        "Analyzed top demanded & highest paying data skills using PostgreSQL CTEs and aggregations",
        "Engineered optimal skill intersection queries to identify high-ROI career paths",
        "Structured modular SQL scripts with documented schema design and query execution plans"
      ],
      tags: ["PostgreSQL", "Advanced SQL", "CTEs & Window Functions", "Data Modeling", "EDA"],
      github: "https://github.com/fortuneMog/SQL_Data_Engineering_projects",
      architecture: {
        problem: "Engineering professionals and recruiters lack quantitative insights into the optimal intersection of high-demand skills, salary distributions, and technology stacks.",
        solution: "Engineered a modular PostgreSQL analytical engine using Common Table Expressions (CTEs), DENSE_RANK() window functions, and filtered aggregations over large-scale job posting datasets.",
        flow: [
          { stage: "Ingestion", desc: "Multi-table raw job postings, skills mapping, and compensation datasets loaded into PostgreSQL staging." },
          { stage: "Transformation", desc: "Recursive CTEs and aggregation layers calculating median salaries, posting frequency, and technology pairings." },
          { stage: "Optimization", desc: "Composite B-tree indexing on skill_id and salary columns reducing execution time on multi-million row scans." },
          { stage: "Output", desc: "Structured reporting views serving optimal skill rankings (Python, AWS, SQL, PySpark) by compensation tier." }
        ],
        codeSnippet: `-- 03_optimal_skills.sql: Calculate High-Demand & High-Paying Data Engineering Skills
WITH skills_demand AS (
    SELECT 
        skills_dim.skill_id,
        skills_dim.skills,
        COUNT(skills_job_dim.job_id) AS demand_count
    FROM job_postings_fact
    INNER JOIN skills_job_dim ON job_postings_fact.job_id = skills_job_dim.job_id
    INNER JOIN skills_dim ON skills_job_dim.skill_id = skills_dim.skill_id
    WHERE job_title_short = 'Data Engineer'
    GROUP BY skills_dim.skill_id, skills_dim.skills
),
average_salary AS (
    SELECT 
        skills_job_dim.skill_id,
        ROUND(AVG(salary_year_avg), 0) AS avg_salary
    FROM job_postings_fact
    INNER JOIN skills_job_dim ON job_postings_fact.job_id = skills_job_dim.job_id
    WHERE job_title_short = 'Data Engineer' AND salary_year_avg IS NOT NULL
    GROUP BY skills_job_dim.skill_id
)
SELECT 
    skills_demand.skill_id,
    skills_demand.skills,
    skills_demand.demand_count,
    average_salary.avg_salary
FROM skills_demand
INNER JOIN average_salary ON skills_demand.skill_id = average_salary.skill_id
WHERE skills_demand.demand_count > 10
ORDER BY avg_salary DESC, demand_count DESC
LIMIT 25;`,
        impact: "Provides clear, data-driven skill prioritization for data engineering roadmaps and automated tech stack benchmarking."
      }
    },
    {
      id: 2,
      title: "Vehicle & Asset Finance Stock Reconciliation Pipeline",
      category: "fintech-cloud",
      badge: "Automotive FinTech",
      badgeType: "red",
      icon: <Car size={24} color="var(--accent-red)" />,
      description: "Engineered high-throughput relational data transformations and reconciliation pipelines joining multi-table automotive datasets (vehicle stock, MM catalog specs, image registries, and service logs) to eliminate catalog mismatch and audit inventory in real-time.",
      highlights: [
        "Constructed complex multi-source SQL joins and Pandas reconciliation scripts for high-volume vehicle inventories",
        "Automated mismatch identification between vehicle MM master catalogs and active dealer stock",
        "Enforced audit-ready data normalization, validation checks, and reporting views for asset finance auditing"
      ],
      tags: ["Python", "SQL / T-SQL", "Pandas", "Dimensional Modeling", "Data Reconciliation", "FinTech"],
      github: "https://github.com/fortuneMog/Vehicle_Finance_Reconciliation",
      architecture: {
        problem: "Automotive dealerships and asset finance lenders suffer from inventory catalog discrepancies when dealer stock entries diverge from MM (Mead & McGrouther) master vehicle codes, leading to valuation errors and delayed loan approvals.",
        solution: "Built a Python & SQL reconciliation pipeline executing multi-table relational joins, fuzzy string matching, and discrepancy flaggers to synchronize live inventory against official automotive catalogs.",
        flow: [
          { stage: "Data Extraction", desc: "Extracting dealer stock records, vehicle MM catalogs, image metadata, and service history logs." },
          { stage: "Reconciliation Engine", desc: "Executing LEFT and FULL OUTER JOIN layers in Pandas & SQL to isolate unmapped stock IDs and price variances." },
          { stage: "Data Quality Auditing", desc: "Automated integrity assertions verifying VIN formatting, mileage outliers, and catalog taxonomy alignment." },
          { stage: "Reporting Layer", desc: "Publishing cleaned dimensional star-schema tables into PostgreSQL/Redshift for real-time asset valuation." }
        ],
        codeSnippet: `# Vehicle Stock & MM Catalog Reconciliation Pipeline
import pandas as pd

def reconcile_vehicle_stock(stock_df, mm_catalog_df, service_df):
    # Step 1: Clean & Normalize Join Keys
    stock_df['clean_mm_code'] = stock_df['mm_code'].str.strip().str.upper()
    mm_catalog_df['clean_mm_code'] = mm_catalog_df['mm_code'].str.strip().str.upper()
    
    # Step 2: Multi-source Relational Join
    reconciled = pd.merge(
        stock_df,
        mm_catalog_df,
        on='clean_mm_code',
        how='left',
        suffixes=('_dealer', '_master')
    )
    
    # Step 3: Flag Catalog Mismatches & Valuation Discrepancies
    reconciled['is_unmatched'] = reconciled['master_model'].isnull()
    reconciled['price_variance'] = reconciled['retail_price_dealer'] - reconciled['book_value_master']
    
    # Step 4: Audit Verification
    audit_summary = {
        'total_stock': len(stock_df),
        'matched_count': len(reconciled[~reconciled['is_unmatched']]),
        'unmatched_exceptions': len(reconciled[reconciled['is_unmatched']]),
        'total_variance_value': reconciled['price_variance'].sum()
    }
    return reconciled, audit_summary`,
        impact: "Eliminated manual inventory cross-referencing, cutting stock-matching discrepancies and speeding up vehicle asset financing audits."
      }
    },
    {
      id: 3,
      title: "Anthropic Claude API & MCP Autonomous Data Agent",
      category: "ai",
      badge: "AI Agent Architecture",
      badgeType: "purple",
      icon: <Bot size={24} color="var(--accent-purple)" />,
      description: "Architected an autonomous database assistant and ETL tool orchestrator leveraging the Anthropic Claude API and Model Context Protocol (MCP). Implemented structured tool calling for secure schema discovery, dynamic query synthesis, and automated data quality audits.",
      highlights: [
        "Implemented custom MCP servers to expose database metadata, schemas, and analytical tools securely to LLMs",
        "Automated natural language query generation with built-in SQL execution plan validation",
        "Designed agentic error recovery loops for autonomous data cleaning and discrepancy detection"
      ],
      tags: ["Anthropic Claude API", "Model Context Protocol (MCP)", "Claude Code", "Python", "Tool Calling"],
      github: "https://github.com/fortuneMog/MCP_Autonomous_Agent",
      architecture: {
        problem: "Business analysts and non-technical stakeholders struggle to construct complex SQL queries against enterprise schemas, while engineering teams spend repetitive hours writing ad-hoc validation scripts.",
        solution: "Constructed an MCP (Model Context Protocol) agent server integrating Anthropic Claude API with function calling, allowing the LLM to inspect schemas, generate validated SQL, and return formatted analytical insights securely.",
        flow: [
          { stage: "User Prompt", desc: "Stakeholder submits natural language query (e.g. 'Identify top 5 default risk branches')." },
          { stage: "MCP Tool Schema", desc: "Agent discovers available database tools (get_table_schema, execute_safe_query, explain_plan)." },
          { stage: "Inference & Validation", desc: "Claude synthesizes parameterized SQL and runs EXPLAIN query to check cost/indexes." },
          { stage: "Execution & Synthesis", desc: "MCP server executes query in read-only sandbox and formats statistical summary." }
        ],
        codeSnippet: `// Model Context Protocol (MCP) Server Tool Definition
{
  "name": "query_financial_lakehouse",
  "description": "Execute secure, read-only SQL queries against the financial data warehouse with automated EXPLAIN validation.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "query": {
        "type": "string",
        "description": "The SQL query to execute against the analytics layer"
      },
      "max_rows": {
        "type": "integer",
        "default": 100
      }
    },
    "required": ["query"]
  }
}`,
        impact: "Enabled natural-language access to enterprise data lakehouses while ensuring strict read-only security and query plan verification."
      }
    },
    {
      id: 4,
      title: "Azure Cloud Data Lakehouse & ADF Pipeline",
      category: "fintech-cloud",
      badge: "Enterprise Cloud",
      badgeType: "purple",
      icon: <Cloud size={24} color="var(--accent-purple)" />,
      description: "Designed and deployed scalable cloud data architectures across Microsoft Azure, orchestrating automated multi-source ingestion into medallion lakehouse storage layers using Azure Data Factory, Azure Data Lake Storage (ADLS Gen2), and Synapse Analytics.",
      highlights: [
        "Built resilient batch and real-time ETL pipelines in Azure Data Factory with automated monitoring and error alerting",
        "Configured partitioned ADLS Gen2 storage tiers with zero-trust RBAC and Azure Key Vault secret management",
        "Automated infrastructure provisioning using Terraform (IaC) and Azure DevOps CI/CD release pipelines"
      ],
      tags: ["Azure Data Factory", "Azure Data Lake (ADLS Gen2)", "Synapse Analytics", "Terraform", "CI/CD"],
      github: "https://github.com/fortuneMog/Azure_Data_Lakehouse",
      architecture: {
        problem: "Enterprise on-premise transactional systems generated siloed financial records, making real-time cross-platform reporting slow, fragile, and prone to infrastructure bottlenecks.",
        solution: "Architected an end-to-end Medallion Lakehouse on Microsoft Azure (Bronze / Raw -> Silver / Enriched -> Gold / Curated) orchestrated by Azure Data Factory and Synapse Analytics.",
        flow: [
          { stage: "Bronze Layer", desc: "Raw multi-source ingestion from SQL Server and REST APIs into partitioned ADLS Gen2 Parquet containers." },
          { stage: "Silver Layer", desc: "PySpark & Synapse cleaning pipelines applying schema enforcement, deduplication, and PII masking." },
          { stage: "Gold Layer", desc: "Kimball star-schema dimensional tables serving Power BI models and executive financial reporting." },
          { stage: "IaC & CI/CD", desc: "Terraform modules defining all storage, compute, and Key Vault configurations with Azure DevOps triggers." }
        ],
        codeSnippet: `# Terraform: Azure Data Lake & Storage Infrastructure (IaC)
resource "azurerm_storage_account" "lakehouse_sa" {
  name                     = "saadlsfintechprod01"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
  is_hns_enabled           = true # Enable Hierarchical Namespace for ADLS Gen2
  min_tls_version          = "TLS1_2"

  network_rules {
    default_action = "Deny"
    bypass         = ["AzureServices"]
  }
}`,
        impact: "Accelerated analytical query speeds across multi-million record banking datasets while ensuring strict zero-trust governance."
      }
    },
    {
      id: 5,
      title: "Power BI Financial & Credit Risk Executive Analytics",
      category: "bi",
      badge: "Executive BI",
      badgeType: "red",
      icon: <BarChart3 size={24} color="var(--accent-red)" />,
      description: "Developed enterprise-grade tabular data models and dynamic Power BI dashboards for senior leadership, delivering real-time visibility into credit risk exposure, loan book settlement velocity, and transactional flow bottlenecks.",
      highlights: [
        "Engineered complex DAX calculations, dynamic time-intelligence measures, and granular Row-Level Security (RLS)",
        "Integrated predictive credit scoring models to provide proactive early-warning risk monitoring",
        "Automated data refresh schedules and SSRS financial packages, eliminating manual spreadsheet overhead"
      ],
      tags: ["Microsoft Power BI", "Advanced DAX", "Power Query (M)", "Credit Risk Analytics", "SSRS"],
      github: "https://github.com/fortuneMog/PowerBI_Credit_Risk_Analytics",
      architecture: {
        problem: "Executive risk teams lacked real-time visibility into credit portfolio health, default probabilities, and loan settlement velocity across multi-branch lending operations.",
        solution: "Constructed a high-performance tabular data model in Power BI with optimized DAX measures, dynamic time intelligence, and granular department-level Row-Level Security (RLS).",
        flow: [
          { stage: "Data Modeling", desc: "Designed Star Schema fact and dimension tables (DimCustomer, DimDate, DimLoanProduct, FactSettlements)." },
          { stage: "Advanced DAX", desc: "Authored cumulative settlement velocity, default risk cohort tracking, and moving-average loss measures." },
          { stage: "Row-Level Security", desc: "Implemented dynamic user-principal-name (UPN) filtering restricting regional managers to their portfolio." },
          { stage: "Executive Delivery", desc: "Published to Power BI Service with automated scheduled refreshes and executive mobile layouts." }
        ],
        codeSnippet: `// Advanced DAX: Rolling 90-Day Credit Risk Default Exposure
DefaultExposure90D = 
VAR MaxDate = MAX('DimDate'[Date])
VAR MinDate = MaxDate - 90
VAR TotalOutstandingBook = 
    CALCULATE(
        SUM('FactLoanBook'[OutstandingBalance]),
        FILTER(
            ALL('DimDate'),
            'DimDate'[Date] >= MinDate && 'DimDate'[Date] <= MaxDate
        )
    )
VAR ImpairedLoans = 
    CALCULATE(
        SUM('FactLoanBook'[OutstandingBalance]),
        'FactLoanBook'[CreditScoreCategory] IN {"High Risk", "Default"},
        FILTER(
            ALL('DimDate'),
            'DimDate'[Date] >= MinDate && 'DimDate'[Date] <= MaxDate
        )
    )
RETURN
    DIVIDE(ImpairedLoans, TotalOutstandingBook, 0)`,
        impact: "Transformed executive credit risk reporting from weekly static spreadsheets to real-time interactive decision dashboards."
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container page-section">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 className="page-title">Featured <span className="glow-text">Architectures & Code</span></h1>
        <p className="page-subtitle" style={{ margin: '0 auto' }}>
          Explore my public GitHub repositories, production data pipelines, AI agent systems, and enterprise FinTech architectures.
        </p>
      </div>

      {/* Category Filter */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <button 
          onClick={() => setFilter('all')}
          className={`btn-secondary ${filter === 'all' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.25rem', 
            fontSize: '0.85rem',
            background: filter === 'all' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: filter === 'all' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          All Works ({projects.length})
        </button>
        <button 
          onClick={() => setFilter('data-engineering')}
          className={`btn-secondary ${filter === 'data-engineering' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.25rem', 
            fontSize: '0.85rem',
            background: filter === 'data-engineering' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: filter === 'data-engineering' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          SQL & Data Engineering
        </button>
        <button 
          onClick={() => setFilter('fintech-cloud')}
          className={`btn-secondary ${filter === 'fintech-cloud' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.25rem', 
            fontSize: '0.85rem',
            background: filter === 'fintech-cloud' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: filter === 'fintech-cloud' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          FinTech & Cloud Lakehouse
        </button>
        <button 
          onClick={() => setFilter('ai')}
          className={`btn-secondary ${filter === 'ai' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.25rem', 
            fontSize: '0.85rem',
            background: filter === 'ai' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: filter === 'ai' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          Anthropic AI & Agents
        </button>
        <button 
          onClick={() => setFilter('bi')}
          className={`btn-secondary ${filter === 'bi' ? 'active' : ''}`}
          style={{ 
            padding: '0.45rem 1.25rem', 
            fontSize: '0.85rem',
            background: filter === 'bi' ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.04)',
            borderColor: filter === 'bi' ? 'transparent' : 'var(--border-subtle)'
          }}
        >
          Executive Power BI
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelectProject={setSelectedProject} />
        ))}
      </div>

      {/* In-Depth Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ 
                  background: selectedProject.badgeType === 'red' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(99, 102, 241, 0.15)',
                  padding: '0.6rem',
                  borderRadius: '10px',
                  border: `1px solid ${selectedProject.badgeType === 'red' ? 'rgba(56, 189, 248, 0.25)' : 'rgba(99, 102, 241, 0.25)'}`
                }}>
                  {selectedProject.icon}
                </div>
                <div>
                  <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{selectedProject.title}</h2>
                  <span className={`badge ${selectedProject.badgeType === 'red' ? 'badge-red' : 'badge-purple'}`} style={{ marginTop: '0.2rem' }}>
                    {selectedProject.badge}
                  </span>
                </div>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {/* Problem & Solution */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.75rem' }}>
                <div className="modal-callout">
                  <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>The Engineering Challenge</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                    {selectedProject.architecture.problem}
                  </p>
                </div>
                <div className="modal-callout" style={{ borderLeftColor: 'var(--accent-secondary)' }}>
                  <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>The Architecture Solution</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                    {selectedProject.architecture.solution}
                  </p>
                </div>
              </div>

              {/* Data Flow / Pipeline Stages */}
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={18} color="var(--accent-cyan)" /> End-to-End Pipeline & Data Flow
              </h4>
              <div className="pipeline-flow-grid">
                {selectedProject.architecture.flow.map((stage, idx) => (
                  <div key={idx} className="pipeline-flow-card">
                    <div className="pipeline-flow-step">Stage 0{idx + 1}</div>
                    <div className="pipeline-flow-title">{stage.stage}</div>
                    <div className="pipeline-flow-desc">{stage.desc}</div>
                  </div>
                ))}
              </div>

              {/* Code Snippet */}
              <div style={{ marginTop: '1.75rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Terminal size={18} color="var(--accent-secondary)" /> Core Implementation Code & Schemas
                  </h4>
                  <button 
                    onClick={() => handleCopy(selectedProject.architecture.codeSnippet)}
                    className="btn-secondary" 
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', gap: '0.4rem' }}
                  >
                    {copiedCode ? <><Check size={14} color="var(--accent-emerald)" /> Copied</> : <><Copy size={14} /> Copy Code</>}
                  </button>
                </div>

                <pre className="code-box">
                  <code>{selectedProject.architecture.codeSnippet}</code>
                </pre>
              </div>

              {/* Business Impact */}
              <div className="impact-box">
                <CheckCircle2 size={20} color="var(--accent-emerald)" />
                <div>
                  <strong style={{ color: 'var(--text-primary)', fontSize: '0.92rem' }}>Measurable Engineering & Operational Impact:</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                    {selectedProject.architecture.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

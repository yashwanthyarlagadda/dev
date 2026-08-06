export interface ContactInfo {
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  linkedin: { label: string; href: string };
  github: { label: string; href: string };
}

export interface Stat {
  value: string;
  label: string;
}

export interface ExperienceProject {
  name: string;
  focus: string;
  bullets: string[];
}

export interface ExperienceTeam {
  name: string;
  note: string;
  current?: boolean;
  chips: string[];
  projects: ExperienceProject[];
}

export interface ExperienceRole {
  company: string;
  title: string;
  location: string;
  period: string;
  summary: string;
  teams: ExperienceTeam[];
}

export interface Project {
  name: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  location: string;
  period: string;
}

export const profile = {
  name: "Yashwanth Yarlagadda",
  role: "Software Development Engineer",
  location: "Seattle, WA",
  tagline:
    "I design and build scalable backend systems, cloud-native applications, and AI-powered services on AWS.",
  summary:
    "Software Development Engineer with 4+ years of experience designing and building scalable backend systems, cloud-native applications, and AI-powered services on AWS. Experienced in Java, Python, TypeScript, Spring Boot, AWS serverless technologies, Amazon SageMaker AI, and large language model (LLM) applications. Strong background in developing production-grade ML infrastructure, distributed systems, and automation solutions, with a focus on reliability, scalability, and operational excellence.",
  availability: "Open to new opportunities",
  focusAreas: [
    "Production ML Infrastructure",
    "Distributed Systems",
    "AWS Serverless",
    "GenAI & LLM Applications",
  ],
  resumePath: "resume.pdf",
  photoPath: "profile.jpg",
};

export const contact: ContactInfo = {
  email: "kethan403@gmail.com",
  phone: "+1 (469) 996-4010",
  phoneHref: "+14699964010",
  location: "Seattle, WA",
  linkedin: {
    label: "linkedin.com/in/yyashwanth",
    href: "https://www.linkedin.com/in/yyashwanth",
  },
  github: {
    label: "github.com/yashwanthyarlagadda",
    href: "https://github.com/yashwanthyarlagadda",
  },
};

export const stats: Stat[] = [
  { value: "4+", label: "Years of experience" },
  { value: "3", label: "Amazon teams" },
  { value: "20+", label: "AWS services used" },
];

export const experience: ExperienceRole = {
  company: "Amazon",
  title: "Software Development Engineer",
  location: "Seattle, WA",
  period: "Aug 2022 - Present",
  summary:
    "Across three teams at Amazon, I've built production-grade ML infrastructure, distributed backend services, and experimentation platforms that power Customer Service AI and the retail catalog.",
  teams: [
    {
      name: "Customer Service Wit Team",
      note: "Production ML inference for Customer Service AI",
      current: true,
      chips: ["Amazon SageMaker AI", "Python", "LLMs", "AWS", "ML Infrastructure"],
      projects: [
        {
          name: "SmartMatch & Contact Summarizer",
          focus: "Host Production ML inference endpoints",
          bullets: [
            "Designed, deployed, and maintained Amazon SageMaker models and inference endpoints for SmartMatch and Contact Summarizer, enabling scalable production-grade ML inference.",
            "Built FAST stack integration for SmartMatch, replacing the legacy model invocation path and improving inference reliability.",
            "Developed Python inference-layer components for request pre-processing, feature transformation, response post-processing, and seamless SageMaker integration.",
            "Deployed a secondary SageMaker endpoint trained on redacted transcripts to satisfy Amazon Security Review (ASR) requirements for sensitive data.",
            "Built CloudWatch p99 latency metrics for proactive monitoring, reducing production incident detection time.",
            "Led ASR compliance: Data Dictionary Review, HTTPS and IAM remediation, and dependency upgrades to strengthen production security.",
          ],
        },
        {
          name: "Routing Resolution Models",
          focus: "Tier-1 ML infrastructure & Model development",
          bullets: [
            "Led production-readiness initiatives to elevate Routing Models to Tier-1 infrastructure supporting mission-critical Customer Service AI traffic.",
            "Designed and integrated AWS Fault Injection Simulator (FIS) chaos tests into deployment pipelines, validating resilience against packet-loss and latency faults.",
            "Implemented automated rollback mechanisms and deployment safety improvements for public AWS deployment pipelines.",
            "Designed a configurable SageMaker Inference Recommender to optimize endpoint sizing, improving infrastructure utilization and deployment flexibility.",
          ],
        },
        {
          name: "Human-in-the-Loop (HITL) Chatbot",
          focus: "Feature development for Amazon Customer Service Chat Bot",
          bullets: [
            "Root-caused a critical customer-impacting regression causing approved refunds to fail silently despite successful chatbot responses.",
            "Analyzed nearly 1,000 customer sessions to identify a multi-resolution model limitation, presenting findings to Applied Scientists for remediation.",
            "Authored the technical design for multi-item HITL processing and resolved approval-token validation failures in the Concessions Orchestrator.",
            "Implemented eligibility rules for replacement, fully refunded, and zero-value orders while simplifying the HITL pipeline.",
          ],
        },
      ],
    },
    {
      name: "Catalog Experimentation & Impact Measurement",
      note: "A/B testing and experimentation platform for the Amazon catalog",
      chips: ["AWS CDK", "Apache Airflow", "Lambda", "Step Functions", "EventBridge"],
      projects: [
        {
          name: "Exakt Service Setup & Integration",
          focus: "Statistical engine integration",
          bullets: [
            "Led the end-to-end integration of Amazon's Exakt statistical engine into the Catalog Experimentation Platform — architecture, implementation, and production deployment.",
            "Authored High-Level and Low-Level Design docs and provisioned beta and production infrastructure using AWS CDK.",
            "Built Apache Airflow DAGs, Lambda workflows, and SNS integrations to automate experiment report generation and downstream processing.",
            "Developed CloudWatch dashboards and operational runbooks, and validated statistical parity between Exakt and baseline reporting pipelines.",
          ],
        },
        {
          name: "Experimentation Platform Automation",
          focus: "Experiment lifecycle automation",
          bullets: [
            "Designed end-to-end experimentation workflows using EventBridge, Lambda, Airflow, SNS, and S3, automating Weblab creation and traffic dial-up / dial-down.",
            "Enhanced self-service experimentation through automated reporting, lifecycle management, and production notification workflows.",
            "Improved reliability via a Step Functions redesign, expanded integration testing, and operational monitoring.",
            "Led No_Value support for Catalog V3 completeness experiments and resolved production issues across DynamoDB, Step Functions, Airflow, SQS, and IAM.",
          ],
        },
      ],
    },
    {
      name: "Amazon Scout Robotics",
      note: "Teleoperations & Delivery Experience team",
      chips: ["Java", "TypeScript", "Integration Testing", "Robotics"],
      projects: [
        {
          name: "Teleoperations & Delivery Experience",
          focus: "Robotics management systems",
          bullets: [
            "Developed integration tests supporting teleoperation and delivery workflows for Amazon Scout robotics.",
            "Implemented Java and TypeScript features for robotics management systems, collaborating with cross-functional engineering teams.",
          ],
        },
      ],
    },
  ],
};

export const projects: Project[] = [
  {
    name: "AI Support Inbox",
    tagline: "Full-Stack AI Customer Support Platform",
    stack: ["Java 17", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Ollama (Llama 3)"],
    bullets: [
      "Developed a full-stack AI-powered customer support application that enables support agents to manage tickets and generate context-aware AI responses.",
      "Built a RESTful backend using Spring Boot and PostgreSQL to support ticket creation, retrieval, status tracking, and priority management.",
      "Integrated a locally hosted Llama 3 LLM through Ollama to generate intelligent draft responses with robust error handling and graceful fallback mechanisms.",
      "Designed a responsive React + TypeScript frontend featuring an interactive support inbox, ticket details, and one-click AI-assisted reply generation.",
      "Implemented clean API design and end-to-end frontend/backend integration following modern full-stack development practices.",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "REST APIs", "Ollama", "LLM"],
  },
  {
    name: "Life Calendar",
    tagline: "Serverless Personal Milestone Tracking Application",
    stack: ["Python", "FastAPI", "AWS Lambda", "DynamoDB", "React", "Google OAuth", "Vercel"],
    bullets: [
      "Developed a full-stack serverless application that visualizes an individual's life as weekly milestones, enabling users to capture and reflect on significant life events.",
      "Designed an intuitive calendar-based interface that organizes milestones by age and month while efficiently supporting large milestone datasets.",
      "Built a FastAPI backend deployed on AWS Lambda with DynamoDB as the persistence layer for scalable, serverless data storage.",
      "Implemented secure authentication using Google OAuth and JWT-based authorization to protect user data and application endpoints.",
      "Managed CORS, authentication flows, and API security while deploying the frontend on Vercel and backend on AWS serverless infrastructure.",
    ],
    technologies: ["Python", "FastAPI", "AWS Lambda", "DynamoDB", "React", "Google OAuth", "JWT", "Vercel"],
  },
];

export const skills: SkillCategory[] = [
  {
    label: "Programming Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "R", "Datapath Query Language"],
  },
  {
    label: "Backend Development",
    skills: ["Spring Boot", "Spring", "REST APIs", "FastAPI", "Microservices", "Docker"],
  },
  {
    label: "AWS & Cloud",
    skills: [
      "Amazon SageMaker AI",
      "AWS Lambda",
      "S3",
      "CloudFormation",
      "AWS CDK",
      "CloudWatch",
      "EventBridge",
      "DynamoDB",
      "SNS",
      "SQS",
      "Step Functions",
      "Apache Airflow",
      "IAM",
      "Glue",
      "Athena",
      "RDS",
      "EC2",
      "EMR",
    ],
  },
  {
    label: "AI / Machine Learning",
    skills: [
      "Large Language Models (LLMs)",
      "Amazon SageMaker AI",
      "Prompt Engineering",
      "Ollama",
      "Mistral",
      "Inference Pipelines",
      "Model Deployment",
      "Pre / Post-Processing",
    ],
  },
  {
    label: "Databases & Data Engineering",
    skills: ["PostgreSQL", "DynamoDB", "Apache Airflow", "EMR", "Apache Spark"],
  },
  {
    label: "DevOps & Tools",
    skills: ["Git", "GitHub", "CI/CD Pipelines", "Docker", "Linux", "CloudWatch", "JUnit", "Mockito"],
  },
];

export const education: EducationItem[] = [
  {
    school: "Northern Illinois University",
    degree: "M.S.",
    field: "Computer Science",
    location: "DeKalb, IL",
    period: "2021 - 2022",
  },
  {
    school: "Institute of Aeronautical Engineering",
    degree: "B.Tech",
    field: "Computer Science",
    location: "Hyderabad, India",
    period: "2016 - 2020",
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

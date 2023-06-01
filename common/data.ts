interface Category {
  name: string;
}

export const categories: Record<string, Category> = {
  paas: { name: "Platform-as-a-Service (PaaS)" },
  iaas: { name: "Infrastructure-as-a-Service (IaaS)" },
  notifications: { name: "Notifications service" },
  email: { name: "Email service" },
  auth: { name: "Authentication service" },
  "secrets-management": { name: "Secrets management service" },
  "hosting": { name: "Web app hosting" },
  database: { name: "Database-as-a-Service" },
  api: { name: "API-as-a-Service" },
  storage: {name: "Storage system"},
  cron: {name: "Job and Cron scheduling"},
  serverless: {name:"Serverless"},
  oss: {name: "Open-Source Software"},
  selfhosted: {name: "Self-hosted"},
  cloud: {name: "Cloud"},
};

export interface Project {
  id: string;
  name: string;
  description: string;
  categoryIds: string[];
  website?: string;
  imgPath?: string;
}

export const projects: Project[] = [
  {
    id: "vercel",
    name: "Vercel",
    description:
      "Build and ship full-stack web applications globally, to the edge.",
    categoryIds: ["paas", "hosting", "cron"],
    website: "https://vercel.com",
    imgPath: "/vercel.svg",
  },
  {
    id: "knock",
    name: "Knock",
    description: "Notification infrastructure that scales",
    categoryIds: ["paas", "notifications"],
    website: "https://knock.app",
    imgPath: "/knock.jpeg"
  },
  {
    id: "novu",
    name: "Novu",
    description: "The open-source notification infrastructure for developers",
    categoryIds: ["paas", "notifications", "oss"],
    website: "https://novu.co",
    imgPath: "/novu.svg"
  },
  {
    id: "resend",
    name: "Resend",
    description:
      "Developer-friendly platform and tools that allows devs to send transactional emails at scale",
    categoryIds: ["paas", "email"],
    website: "https://resend.com",
    imgPath: "/resend.jpeg",
  },
  {
    id: "clerk",
    name: "Clerk",
    description: "Authentication-as-a-service for developers",
    categoryIds: ["auth"],
    website: "https://clerk.dev",
    imgPath: "/clerk.png",
  },
  {
    id: "infisical",
    name: "Infisical",
    description:
      "Open-source secrets management service for developers and teams",
    categoryIds: ["secrets-management", "oss"],
    website: "https://infisical.com",
    imgPath: "/infisical.jpeg",
  },
  {
    id: "railway",
    name: "Railway",
    description:
      "Made for any language, for projects big and small. Railway is the cloud that takes the complexity out of shipping software and web apps.",
    categoryIds: ["paas", "hosting"],
    website: "https://railway.app",
    imgPath: "/railway.png",
  },
  {
    id: "koyeb",
    name: "Koyeb",
    description:
      "Koyeb is a developer-friendly serverless platform to deploy web apps globally. No-ops, servers, or infrastructure management.",
    categoryIds: ["paas", "hosting"],
    website: "https://www.koyeb.com",
    imgPath: "/koyeb.png",
  },
  {
    id: "render",
    name: "Render",
    description:
      "Render is a unified cloud to build and run all your web apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git.",
    categoryIds: ["paas", "hosting", "serverless", "cloud"],
    website: "https://render.com/",
    imgPath: "/render.png",
  },
  {
    id: "appwrite",
    name: "Appwrite",
    description:
      `
Appwrite is a backend platform for developing Web, Mobile, and Flutter applications. Built with the open source community and optimized for developer experience in the coding languages you love.
`,
    categoryIds: ["paas", "database", "oss", "serverless", "auth", "storage", "cloud", "selfhosted"],
    website: "https://appwrite.io",
    imgPath: "/appwrite.svg",
  },
  {
    id: "supabase",
    name: "Supabase",
    description:
      "Supabase is an open source Firebase alternative for building secure and performant PostgreSQL backends with minimal configuration.",
    categoryIds: ["paas", "auth", "database", "storage", "serverless", "cloud", "selfhosted", "oss"],
    website: "https://supabase.com/",
    imgPath: "/supabase.svg",
  },
  {
    id: "convex",
    name: "Convex",
    description:
      `
Convex is the backend application platform with everything you need to build your product.

Convex functions, a database, file storage, scheduling, search, and realtime updates fit together seamlessly and are accessible from client libraries for your favorite environment.

Stay in your development flow, and stop stitching things together.
      `,
    categoryIds: ["paas", "database", "storage", "cron", "serverless", "cloud"],
    website: "https://convex.dev",
    imgPath: "/convex.png",
  },
  {
    id: "documenso",
    name: "Documenso",
    description:
      `
Beautiful, open document signing tools you can build upon.
      `,
    categoryIds: ["oss", "selfhosted"],
    website: "https://documenso.com",
    imgPath: "/documenso.png",
  },
  {
    id: "dub",
    name: "Dub.sh",
    description:
      `
Open-sourced link management for modern marketing teams. Bit.ly alternative.
      `,
    categoryIds: ["oss", "selfhosted", "cloud"],
    website: "https://dub.sh",
    imgPath: "/dub.jpeg",
  },
  {
    id: "tinybird",
    name: "Tinybird",
    description: "Tinybird is the modern real-time data platform for developers and data teams. Ingest data, query it with SQL, and instantly publish the results as high-concurrency, low-latency APIs.",
    categoryIds: ["api", "iaas", "paas", "cloud"],
    website: "https://tinybird.com",
    imgPath: "/tinybird.jpeg",
  }
];

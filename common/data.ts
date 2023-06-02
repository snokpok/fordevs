import { InputDescription } from "@mantine/core/lib/Input/InputDescription/InputDescription";

interface Category {
  name: string;
}

export const categories: Record<string, Category> = {
  saas: { name: "Software-as-a-Service (SaaS)" },
  paas: { name: "Platform-as-a-Service (PaaS)" },
  iaas: { name: "Infrastructure-as-a-Service (IaaS)" },
  notifications: { name: "Notifications service" },
  email: { name: "Email service" },
  auth: { name: "Authentication service" },
  "secrets-management": { name: "Secrets management service" },
  "hosting": { name: "Web app hosting" },
  database: { name: "Database-as-a-Service" },
  api: { name: "API-as-a-Service" },
  storage: { name: "Storage system" },
  cron: { name: "Job and Cron scheduling" },
  serverless: { name: "Serverless" },
  oss: { name: "Open-Source Software" },
  selfhosted: { name: "Self-hosted" },
  cloud: { name: "Cloud" },
  analytics: { name: "Analytics" },
  cx: { name: "Customer Experience & Surveying" },
  nocode: { name: "No-code tool" },
  documentation: { name: "Documentation" },
  observability: { name: "Observability (APM, monitoring)" },
  graphql: { name: "GraphQL" }
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
    categoryIds: ["auth", "paas"],
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
    categoryIds: ["oss", "selfhosted", "cloud", "saas"],
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
    categoryIds: ["api", "paas", "cloud"],
    website: "https://tinybird.com",
    imgPath: "/tinybird.jpeg",
  },
  {
    id: "mailgun",
    name: "Mailgun",
    description: "Powerful APIs that enable you to send, receive, and track email effortlessly. Supports transactional and bulk emails",
    categoryIds: ["api", "paas", "cloud", "email"],
    website: "https://mailgun.com",
    imgPath: "/mailgun.svg",
  },
  {
    id: "formbricks",
    name: "Formbricks",
    description: "Survey any segment. No coding required. Survey granular user segments at any point in the user journey. Gather up to 6x more insights with targeted micro-surveys. All open-source.",
    categoryIds: ["paas", "cloud", "cx"],
    website: "https://formbricks.com",
    imgPath: "/formbricks.png",
  },
  {
    id: "calcom",
    name: "Cal.com",
    description: "The event-juggling scheduler for everyone. Focus on meeting, not making meetings. Free for individuals.",
    categoryIds: ["saas", "cloud", "selfhosted"],
    website: "https://cal.com",
    imgPath: "/calcom.svg",
  },
  {
    id: "webstudio",
    name: "Webstudio",
    description: "Open-source alternative to Webflow. No-code website builder.",
    categoryIds: ["saas", "selfhosted", "cloud", "nocode"],
    website: "https://webstudio.is/",
    imgPath: "/webstudio.svg"
  },
  {
    id: "mintlify",
    name: "Mintlify",
    description: `
Beautiful documentation that converts users.
Build the documentation you've always wanted. Beautiful out of the box, easy to maintain, and optimized for user engagement.
    `,
    categoryIds: ["saas", "documentation", "cloud"],
    website: "https://mintlify.com",
    imgPath: "/mintlify.svg"
  },
  {
    id: "coolify",
    name: "Coolify",
    description: `
Made self-hosting simple.
An open-source & self-hostable Heroku / Netlify alternative (and even more).
  `,
    categoryIds: ["selfhosted", "hosting", "iaas"],
    website: "https://coolify.io/",
    imgPath: "/coolify.png",
  },
  {
    id: "dokku",
    name: "Dokku",
    description: `
An open source PAAS alternative to Heroku.
Dokku helps you build and manage the lifecycle of applications from building to scaling
`,
    categoryIds: ["selfhosted", "hosting", "iaas"],
    website: "https://dokku.com/",
    imgPath: "/dokku.svg"
  },
  {
    id: "internal",
    name: "Internal.io",
    description: `
Build apps in 5 minutes.
No-code required, no complicated setup. Create database apps and other internal tools for teams to create, read and update data.
  `,
    categoryIds: ["nocode", "saas", "cloud"],
    website: "https://www.internal.io/",
    imgPath: "/internal.svg"
  },
  {
    id: "hasura",
    name: "Hasura",
    description: `
  Instant GraphQL on all your data
 modern apps & APIs 10x faster.
 in Authorization & Caching.
 fast GraphQL & REST APIs.
Open source.
  `,
    categoryIds: ["paas", "cloud", "oss", "api", "auth", "graphql"],
    website: "https//hasura.io",
    imgPath: "/hasura.svg"
  },
  {
    id: "appsmith",
    name: "Appsmith",
    description: `
Build internal tools 10X faster, ship in clicks
Easily connect to popular databases and APIs

Quickly build UI with ready React-powered widgets

Customize and extend functionality with code

Deploy reliably, share with end-users securely
  `,
    categoryIds: ["saas", "cloud", "oss", "nocode"],
    website: "https://www.appsmith.com/",
    imgPath: "/appsmith.png"
  }
]; 
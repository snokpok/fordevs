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
      "Build and ship full-stack applications globally, to the edge.",
    categoryIds: ["paas", "iaas"],
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
    categoryIds: ["paas", "notifications"],
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
    categoryIds: ["secrets-management"],
    website: "https://infisical.com",
    imgPath: "/infisical.jpeg",
  },
];

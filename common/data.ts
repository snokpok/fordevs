interface Category {
    name: string;
}

export const categories: Record<string, Category> = {
    paas: {name: "Platform-as-a-Service (PaaS)"},
    iaas: {name: "Infrastructure-as-a-Service (IaaS)",},
    notifications: {name: "Notifications service"},
    email: {name: "Email service"},
    auth: {name: "Authentication service"},
    "secrets-management": {name: "Secrets management service"}
}

interface Project {
    id: string,
    name: string;
    description: string;
    categoryIds: string[],
    website?: string,
}

export const projects: Project[] = [
    {id: "vercel", name: "Vercel", description: "Build and ship full-stack applications globally, to the edge.", categoryIds: ["paas", "iaas"], website: "https://vercel.com"},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"], website: "https://knock.io"},
    {id: "resend", name: "Resend", description: "Developer-friendly platform and tools that allows devs to send transactional emails at scale", categoryIds: ["paas", "email"], website: "https://resend.com"},
    {id: "clerk", name: "Clerk", description: "Authentication-as-a-service for developers", categoryIds: ["auth"], website: "https://clerk.dev"},
    {id: "infisical", name: "Infisical", description: "Open-source secrets management service for developers and teams", categoryIds: ["secrets-management"], website: "https://infisical.io"},
]
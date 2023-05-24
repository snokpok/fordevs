interface Category {
    name: string;
}

export const categories: Record<string, Category> = {
    paas: {name: "Platform-as-a-Service (PaaS)"},
    iaas: {name: "Infrastructure-as-a-Service (IaaS)",},
    notifications: {name: "Notifications"}
}

interface Project {
    id: string,
    name: string;
    description: string;
    categoryIds: string[],
    website?: string,
}

export const projects: Project[] = [
    {id: "vercel", name: "Vercel", description: "Build and ship full-stack applications globally, to the edge.", categoryIds: ["paas", "iaas"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
    {id: "knock", name: "Knock.io", description: "Notification infrastructure that scales", categoryIds: ["paas", "notifications"]},
]
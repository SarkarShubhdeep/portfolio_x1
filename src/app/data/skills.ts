export interface Skill {
    name: string;
    bgTransparency: number;
}

export interface SkillGroup {
    title: string;
    skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
    {
        title: "Web Development",
        skills: [
            { name: "Next.js", bgTransparency: 10 },
            { name: "React.js", bgTransparency: 15 },
            { name: "Node.js", bgTransparency: 10 },
            { name: "Tailwind CSS", bgTransparency: 20 },
            { name: "HTML", bgTransparency: 10 },
            { name: "CSS", bgTransparency: 20 },
            { name: "JavaScript", bgTransparency: 15 },
            { name: "TypeScript", bgTransparency: 10 },
            { name: "Python", bgTransparency: 20 },
            { name: "Django", bgTransparency: 20 },
            { name: "Design Libraries", bgTransparency: 10 },
            { name: "MongoDB", bgTransparency: 15 },
            { name: "Expo", bgTransparency: 10 },
            { name: "SQL", bgTransparency: 20 },
            { name: "Flutter", bgTransparency: 20 },
            { name: "Git", bgTransparency: 10 },
            { name: "GitHub", bgTransparency: 20 },
            { name: "RESTful APIs", bgTransparency: 15 },
            { name: "GraphQL", bgTransparency: 10 },
            { name: "Motion", bgTransparency: 20 },
            { name: "GSAP", bgTransparency: 20 },
            { name: "Docker", bgTransparency: 15 },
            { name: "Cypress", bgTransparency: 20 },
            { name: "Jest", bgTransparency: 20 },
            { name: "PHP", bgTransparency: 10 },
        ],
    },
    {
        title: "UX & UI Design",
        skills: [
            { name: "Sketching & Wireframing", bgTransparency: 10 },
            { name: "Prototyping", bgTransparency: 20 },
            { name: "User Research", bgTransparency: 15 },
            { name: "Personas & Journey Mapping", bgTransparency: 10 },
            { name: "Responsive Design Principles", bgTransparency: 20 },
            { name: "Design Systems & Tokenization", bgTransparency: 20 },
            { name: "Logo Designing", bgTransparency: 15 },
            { name: "Typography", bgTransparency: 20 },
            { name: "Adobe Suite", bgTransparency: 20 },
            { name: "Framer", bgTransparency: 10 },
            { name: "Rive (micro-interactions)", bgTransparency: 20 },
        ],
    },
    {
        title: "Developer Practices",
        skills: [
            { name: "Agile Methodology", bgTransparency: 10 },
            { name: "Scrum", bgTransparency: 20 },
            { name: "Kanban", bgTransparency: 15 },
            { name: "Test-Driven Development", bgTransparency: 10 },
            { name: "Code Reviews", bgTransparency: 20 },
            { name: "CI/CD workflows", bgTransparency: 20 },
        ],
    },
    {
        title: "AI & Developer Tools",
        skills: [
            { name: "Cursor AI", bgTransparency: 10 },
            { name: "GitHub Copilot", bgTransparency: 20 },
            { name: "ChatGPT", bgTransparency: 15 },
            { name: "AI Prompt Design", bgTransparency: 10 },
            { name: "Workflow Automation", bgTransparency: 20 },
            { name: "LLMs for Product Ideation", bgTransparency: 20 },
            { name: "AI-enhanced Dev Workflows", bgTransparency: 10 },
        ],
    },
];

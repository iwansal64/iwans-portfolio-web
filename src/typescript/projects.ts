export type ProjectType = {
      title: string,
      description: string,
      github_link: string,
      link?: string,
      milestones: {
            numeric: string,
            about: string
      }[],
      techStack: string[]
};

export const projects: ProjectType[] = [
      {
            title: "KPRS Website",
            description: "This is a website that was used by my school to vote for the next Student Council President and Vice President",
            github_link: "https://github.com/teamitmivhs/KPRS-voting-website",
            milestones: [
                  {
                        numeric: "4K+",
                        about: "Active Voter"
                  },
                  {
                        numeric: "4 Weeks",
                        about: "Working Time"
                  }
            ],
            techStack: [
                  "Rust",
                  "SvelteJS",
                  "SurrealDB",
                  "Actix Web"
            ]
      },
      {
            title: "E-Lapor",
            description: "This is an active website that is useful for reporting any violation around the schools, such as littering!",
            link: "https://webreport.smkind-mm2100.sch.id/",
            github_link: "https://github.com/teamitmivhs/E-Lapor",
            milestones: [
                  {
                        numeric: "400+",
                        about: "Reports"
                  },
                  {
                        numeric: "1 Year",
                        about: "Working Time"
                  }
            ],
            techStack: [
                  "AstroJS",
                  "Postgre SQL",
                  "Prisma",
                  "PHP"
            ]
      }
]
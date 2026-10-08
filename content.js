/* ============================================================
   EDIT THIS FILE to change any text, link or image on the site.
   Images: drop files into the assets/ folder and write the path,
   e.g. "assets/profile.jpg". Leave "" to hide an image.
   Lines marked EDIT ME are placeholders - replace with your resume details.
   ============================================================ */
window.SITE = {
  career: {
    brand: "VICKY",
    name: "Vickraman Elumalai",
    role: "Windows Server & VMware Administrator",
    intro: "Bengaluru-based Windows Server and VMware administrator moving into cloud and DevOps engineering.",
    photo: "assets/profile.jpg",
    switchLabel: "Creator side",
    about: [
      "I have about 2.6 years of experience running Windows Server environments on VMware virtualization.",
      "I am now building AWS, Terraform and CI/CD skills through hands-on projects, aiming for Cloud and DevOps engineering roles."
    ],
    experience: [
      { role: "Windows Server Administrator", company: "Your company (EDIT ME)", dates: "Month Year - Present (EDIT ME)",
        points: [
          "Administer Windows Server and VMware vSphere infrastructure. (EDIT ME)",
          "Add a measurable result from your resume here. (EDIT ME)",
          "Add another responsibility or achievement. (EDIT ME)"
        ] }
    ],
    projects: [
      { title: "AI-powered EC2 Lifecycle Manager",
        desc: "Serverless AWS automation for EC2 instance lifecycles, built with EventBridge, Lambda (PowerShell), CloudWatch, Bedrock (Claude Haiku), SNS and S3. Infrastructure in Terraform, deployed with GitHub Actions.",
        tags: ["AWS", "Terraform", "PowerShell", "In progress"],
        link: "https://github.com/your-username/your-repo", image: "" }
    ],
    skills: [
      { group: "Working with", items: ["Windows Server", "VMware vSphere", "PowerShell", "AWS (EC2, Lambda, EventBridge, CloudWatch, SNS, S3)"] },
      { group: "Learning", items: ["Terraform", "GitHub Actions", "Linux and Bash", "Python", "Docker"] }
    ],
    certifications: ["Add certifications here (EDIT ME)"],
    contact: {
      email: "your-email@example.com", location: "Bengaluru, Karnataka", button: "Email me",
      links: [ { label: "GitHub", url: "https://github.com/your-username" }, { label: "LinkedIn", url: "https://linkedin.com/in/your-profile" } ]
    }
  },

  creator: {
    brand: "vicky makes stuff",
    headline: "Content & edits, after hours",
    intro: "By day I run servers. On the side I create content and edit videos. Here is the messy, fun part of my work.",
    switchLabel: "Back to the day job",
    work: [
      { title: "Reel title one (EDIT ME)", desc: "One line about what you made or edited.", tag: "Reel", link: "", image: "" },
      { title: "YouTube edit (EDIT ME)", desc: "Cuts, captions, sound, colour.", tag: "YouTube", link: "", image: "" },
      { title: "Short film (EDIT ME)", desc: "Tell the story behind it.", tag: "Edit", link: "", image: "" },
      { title: "Another idea (EDIT ME)", desc: "Anything you are proud of.", tag: "Content", link: "", image: "" }
    ],
    tools: ["Premiere Pro", "DaVinci Resolve", "CapCut", "After Effects", "Photoshop"],
    contact: {
      headline: "Want something made?", text: "Send me a message and tell me your idea.", email: "your-email@example.com", button: "Say hi",
      links: [ { label: "Instagram", url: "https://instagram.com/your-handle" }, { label: "YouTube", url: "https://youtube.com/@your-channel" } ]
    }
  }
};

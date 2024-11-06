document.addEventListener("DOMContentLoaded", () => {
    // Populate Experience Timeline
    const timeline = document.querySelector(".timeline");
    const experienceData = [
        { year: "2022", role: "Intern at XYZ Corp", details: "Supported financial audits and data analysis for client accounts." },
        { year: "2023", role: "Analyst at ABC Ltd", details: "Led a cost optimization project, achieving a 15% annual savings." },
        { year: "2024", role: "Consultant at DEF Inc.", details: "Provided consulting services for strategic process improvement." }
    ];

    experienceData.forEach(exp => {
        const div = document.createElement("div");
        div.className = "timeline-item";
        div.innerHTML = `
            <h3>${exp.year}</h3>
            <h4>${exp.role}</h4>
            <p>${exp.details}</p>
        `;
        timeline.appendChild(div);
    });

    // Populate Skills with Progress Bars
    const skillsChart = document.querySelector(".skills-chart");
    const skillsData = [
        { skill: "Data Analysis", level: 85 },
        { skill: "Financial Modeling", level: 75 },
        { skill: "Consulting", level: 90 },
        { skill: "Project Management", level: 80 },
    ];

    skillsData.forEach(skill => {
        const skillContainer = document.createElement("div");
        skillContainer.className = "skill-item";
        skillContainer.innerHTML = `
            <label>${skill.skill}</label>
            <div class="progress-bar">
                <div class="progress" style="width: ${skill.level}%;">
                    <span>${skill.level}%</span>
                </div>
            </div>
        `;
        skillsChart.appendChild(skillContainer);
    });

    // Populate Project Gallery with Project Cards
    const projectGallery = document.querySelector(".project-gallery");
    const projectData = [
        { title: "Financial Audit Tool", description: "An automated tool for audit risk assessment.", link: "#" },
        { title: "Cost Optimization Model", description: "Model developed for ABC Ltd to save 15% annually.", link: "#" },
        { title: "Client Report Dashboard", description: "Interactive dashboard for client reporting.", link: "#" },
    ];

    projectData.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectGallery.appendChild(projectCard);
    });
});

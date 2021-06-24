export const contactsMap = [
    { type: "phone", details:"+359 895 669 349" },
    { type: "envelope", details:"a.stamatova@abv.bg" },
    { type: "github", details:"TonyStamatova", link:"https://github.com/TonyStamatova" },
    { type: "linkedin", details:"LinkedIn Profile", link:"https://www.linkedin.com/in/antonia-stamatova-99a163155/" },
    { type: "facebook", details:"Message me", link:"https://www.facebook.com/antonia.stamatova" },
    { type: "skype", details:"Antoniya Stamatova" }
];

export const projects = [
    { 
        name: "RunBoyarovRun",
        type: "Single-Page App",
        techStack: [ "ASP.NET Core", "Blazor Web Assembly" ],
        description: "The website of a track-and-field sports club",
        links: {
            demoLink: "",
            linkToRepo: "https://github.com/TonyStamatova/RunBoyarovRun",
            createAnIssue: "https://github.com/TonyStamatova/RunBoyarovRun/issues/new"
        }
    },
    { 
        name: "LibraryAPI",
        type: "Web API",
        techStack: [ "ASP.NET Web API", "Entity Framework 6", "MS SQL Server" ],
        description: "A Web API for a centralised book library",
        links: {
            linkToRepo: "https://github.com/TonyStamatova/LibraryAPI",
            createAnIssue: "https://github.com/TonyStamatova/LibraryAPI/issues/new"
        }
    },
    { 
        name: "Portfolio",
        type: "Single-Page App",
        techStack: [ "React" ],
        description: "A website to serve as my personal portfolio",
        deployedOn: "GitHub Pages",
        links: {
            demoLink: "https://tonystamatova.github.io/",
            linkToRepo: "https://github.com/TonyStamatova/TonyStamatova.github.io",
            createAnIssue: "https://github.com/TonyStamatova/TonyStamatova.github.io/issues/new"
        }
    },
];

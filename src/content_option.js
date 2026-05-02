const logotext = "SAKIL";
const meta = {
    title: "Shariar Sakil--Portfolio",
    description: "I’m Shariar Sakil, a student, currently studying in Belgium. I am also a web developer, and I love to create simple yet beautiful websites with great user experience.",
};

const introdata = {
    title: "Welcome\nI’m Shariar Sakil",
    animated: {
        first: "I code ",
        second: "I play games",
        third: "I make videos",
        fourth: "I Travel",

    },
    description: "When I'm not coding, you'll find me exploring new destinations, capturing moments through video, or diving into epic gaming adventures.",
    your_img_url: "/images/profile.png",
};

const dataabout = {
    title: "About my self",
    aboutme: `I'm Shariar Sakil, an Applied Computer Science student at Thomas More, Belgium, passionate about web development, IoT, and building real-world digital solutions. 
    My tech journey started in childhood with video games and movies especially Mr. Robot which sparked my enthusiasm for computer science. 
    I chose this program because it blends software development with electronics and IoT. Beyond coding, I'm an adventurer at heart: I explore new places, do video production, and contribute to documentaries. 
    These hobbies keep me creative and help me solve problems from fresh angles. 
    My goals are to become a full-stack developer and IoT architect focused on agriculture and environmental sustainability, then start my own tech consultancy. 
    Let's build something amazing together.`,
};
const worktimeline = [{
        jobtitle: "Frontend Developer",
        where: "Saifurs",
        date: "2021",
    },
    {
        jobtitle: "Freelance Web Developer",
        where: "Self-employed",
        date: "2022",
    },
];

const skills = [
    // Technical Skills
    {
        name: "JavaScript",
        category: "Technical"
    },
    {
        name: "React",
        category: "Technical"
    },
    {
        name: "Python",
        category: "Technical"
    },
    {
        name: "Java",
        category: "Technical"
    },
    {
        name: "HTML/CSS",
        category: "Technical"
    },
    {
        name: "Node.js",
        category: "Technical"
    },
    {
        name: "Linux",
        category: "Technical"
    },
    {
        name: "Laravel",
        category: "Technical"
    },
    {
        name: "Docker",
        category: "Technical"
    },
    {
        name: "Git/Version Control",
        category: "Technical"
    },
    // Soft Skills
    {
        name: "Problem-Solving",
        category: "Soft"
    },
    {
        name: "Communication",
        category: "Soft"
    },
    {
        name: "Team Collaboration",
        category: "Soft"
    },
    {
        name: "Project Management",
        category: "Soft"
    },
    {
        name: "Adaptability",
        category: "Soft"
    },
    {
        name: "Critical Thinking",
        category: "Soft"
    }
];

const services = [
    {
        title: "Web Development",
        description: "Building modern, responsive websites with clean and efficient code.",
    },
    {
        title: "Python Programming",
        description: "Developing powerful backend solutions and automation using Python.",
    },
    {
    title: "Creative Web Design",
    description: "Designing visually engaging and interactive websites with a creative touch.",
}
];

const dataprojects = [{
        id: 1,
        name: "FarmForward",
        img: "/images/farm.png",
        detailImg: "/images/farm.png",
        description: "FarmForward - SKILL2 Project (6 ECTS) | ",
        overview: "FarmForward is a comprehensive crop management platform designed to support farmers with real-time data, decision-making tools, and resource management. Built during SKILL2 project course at Thomas More.",
        partIDidTitle: "My Role & Contributions",
        partIDidContent: [
            "Designed and developed backend REST APIs using Node.js and Express",
            "Implemented database architecture with MongoDB for scalable data storage",
            
        ],
        dashboards: [
            { title: "Main Dashboard", img: "/images/farm-dash.png", description: "Overview of farm metrics and crop status" },
        ],
        whatILearned: [
            "Full-stack web development best practices",
            "Database design for agricultural data",
            "API security and authentication",
            
        ],
        link: "https://github.com/SHARIARxSAKIL/FarmForward",
    },
    {
        id: 2,
        name: "GrowGym",
        img: "/images/grow.png",
        detailImg: "/images/grow-detail.png",
        description: "GrowGym - SKILL2 (6 ECTS)| ",
        overview: "GrowGym is a complete gym management system that helps gym owners manage memberships, classes, schedules, and member progress. Built with modern web technologies for optimal performance and user experience.",
        partIDidTitle: "My Role & Contributions",
        partIDidContent: [
            "Models, Migrations, and Database Design",
            "Nutrition Plan (Member,Coach, Admin)",
            "Equipment (Coach, Admin)",
        ],
        dashboards: [
            { title: "Member Dashboard", img: "/images/grow-dash.png", description: "Track fitness progress and class schedules" },
        ],
        whatILearned: [
            "Scalable architecture design",
            "User authentication systems",
            "Database optimization",    
            "Deployment strategies for web applications",
            "Models, Migrations, and Database Design",

        ],
        link: "https://growgym.be/",
    },
    {
        id: 3,
        name: "MathJack",
        img: "/images/math.png",
        detailImg: "/images/math-detail.png",
        description: "MathJack - SKILL1 (6 ECTS)| ",
        overview: "MathJack is an interactive math-based game that teaches probability and game theory concepts through engaging gameplay. Built with vanilla HTML, CSS, and JavaScript.",
        partIDidTitle: "My Role & Contributions",
        partIDidContent: [
            "Designed and developed complete game using vanilla JavaScript",
            "Implemented game logic with probability calculations",
            "Created interactive UI with HTML/CSS"
        ],
        dashboards: [
            { title: "Game Interface", img: "/images/math-dash.png", description: "Interactive game board with real-time calculations" },
        ],
        whatILearned: [
            "Game theory fundamentals",
            "Probability calculations",
            "User interaction design"
        ],
        link: "https://mathjack.onrender.com/",
    },
    {
        id: 4,
        name: "IoT Essentials",
        img: "/images/fish.png",
        detailImg: "/images/fish.png",
        description: "Fish Doorbell - IoT Essentials (6 ECTS) | ",
        overview: "An innovative IoT solution that uses sensors to detect fish presence in water bodies and sends real-time notifications. This project demonstrates practical IoT implementation and sensor integration.",
        partIDidTitle: "My Role & Contributions",
        partIDidContent: [
            "Integrated Arduino sensors with IoT platform",
            "Developed real-time notification system",
            "Created cloud infrastructure for data processing",
            "Built mobile app for user alerts",
            "Implemented data visualization dashboard"
        ],
        dashboards: [
            { title: "Sensor Data Dashboard", img: "/images/fish-dash.png", description: "Real-time fish detection and sensor readings" },
        ],
        whatILearned: [
            "IoT hardware integration",
            "How to work with sensors and microcontrollers, Orange Pi",
            "Real-time data processing",

        ],
        link: "https://www.youtube.com/watch?v=1nqCeJ7n6ac",
    },
    {
        id: 5,
        name: "Giardini Full Stack",
        img: "/images/giardini.png",
        detailImg: "/images/giardini-detail.png",
        description: "Restaurant Website - Full Stack (6 ECTS) |",
        overview: "A comprehensive full-stack project demonstrating complete web application development from frontend to backend. Built following real business requirements and modern web standards.",
        partIDidTitle: "My Role & Contributions",
        partIDidContent: [
            "Implemented full-stack architecture",
            "Built responsive frontend with HTML, CSS, and JavaScript",
            "Menu and chefs page"
        ],
        dashboards: [
            { title: "Application Dashboard", img: "/images/giardini-dash.png", description: "Features for menu" },
        ],
        whatILearned: [
            "Client-server architecture",
            "Responsive web design",
            "Full project lifecycle management"
        ],
        link: "https://giardini.netlify.app/",
    },
    {
        id: 6,
        name: "Meal Rush",
        img: "/images/meal.png",
        detailImg: "/images/meal-detail.png",
        description: "Meal Rush - SKILL2 (6 ECTS) |",
        overview: "Meal Rush is an engaging Python-based game that demonstrates programming fundamentals and game mechanics. Players serve meals in a busy restaurant environment with increasing difficulty levels.",
        partIDidTitle: "My Role & Contributions",
        partIDidContent: [
            "Created object-oriented game architecture",
            "Designed difficulty progression system",
            "Built UI and scoring mechanism",
            "working on the game balancing and user experience"
        ],
        dashboards: [
            { title: "Game Screen", img: "/images/meal-dash.png", description: "Main gameplay interface with score tracking" },
        ],
        whatILearned: [
            "Game loop design",
            "Graphics and animation",
            "Game balancing and user experience"
        ],
        link: "https://github.com/SHARIARxSAKIL/Meal-Rush",
    },
    {
        id: 7,
        name: "Web Design Project",
        img: "/images/web.png",
        detailImg: "/images/web.png",
        description: "Portfolio - Web Design Essentials (6 ECTS)|",
        overview: "A showcase of modern web design principles and creative implementation. This project demonstrates responsive design, visual hierarchy, and user-centered design practices.",
        partIDidTitle: "My Role & Contributions",
        partIDidContent: [
            "Whole project was designed and developed by me",
        ],
        dashboards: [
            { title: "Website Homepage", img: "/images/web.png", description: "Responsive landing page" },
        ],
        whatILearned: [
            "Modern design principles",
            "Responsive CSS techniques",
            "User experience optimization",
            "Visual design hierarchy",
            "Web accessibility standards"
        ],
        link: "https://sakil.sinners.be/",
    },
];

// const contactConfig = {
//     YOUR_EMAIL: "name@domain.com",
//     YOUR_FONE: "(555)123-4567",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
//     // creat an emailjs.com account 
//     // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
//     YOUR_SERVICE_ID: "service_id",
//     YOUR_TEMPLATE_ID: "template_id",
//     YOUR_USER_ID: "user_id",
// };

const socialprofils = {
    github: "https://github.com/SHARIARxSAKIL",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/md-shamim-shariar-sakil-515b84330/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataprojects,
    worktimeline,
    skills,
    services,
    introdata,
    socialprofils,
    logotext,
};
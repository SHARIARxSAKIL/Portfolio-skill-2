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
    aboutme: `I'm Shariar Sakil, a passionate Applied Computer Science student based in Belgium with a strong drive for web development and creating impactful digital solutions. My journey in tech began with a fascination for how software shapes our daily lives, which led me to pursue Applied Computer Science & Electronics-ICT. I chose this program because it combines practical software development with electronics and IoT, allowing me to build end-to-end solutions that matter in the real world.

Beyond coding, I'm an adventurer at heart—I explore new destinations, capture moments through video production, and contribute to documentaries. These hobbies fuel my creativity and help me approach problems from different perspectives. I believe in continuous learning and solving real-world problems through technology.

My professional ambitions include becoming a full-stack developer and architect for IoT solutions that address agricultural and environmental challenges. I want to leverage my skills to build sustainable technology that positively impacts communities. Let's collaborate and build something amazing together!`,
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
        value: 85,
        category: "Technical"
    },
    {
        name: "React",
        value: 80,
        category: "Technical"
    },
    {
        name: "Python",
        value: 85,
        category: "Technical"
    },
    {
        name: "Java",
        value: 85,
        category: "Technical"
    },
    {
        name: "HTML/CSS",
        value: 90,
        category: "Technical"
    },
    {
        name: "Node.js",
        value: 80,
        category: "Technical"
    },
    {
        name: "REST APIs",
        value: 85,
        category: "Technical"
    },
    {
        name: "Database Design (SQL/NoSQL)",
        value: 80,
        category: "Technical"
    },
    {
        name: "IoT Development",
        value: 75,
        category: "Technical"
    },
    {
        name: "Git/Version Control",
        value: 85,
        category: "Technical"
    },
    // Soft Skills
    {
        name: "Problem-Solving",
        value: 90,
        category: "Soft"
    },
    {
        name: "Communication",
        value: 85,
        category: "Soft"
    },
    {
        name: "Team Collaboration",
        value: 85,
        category: "Soft"
    },
    {
        name: "Project Management",
        value: 80,
        category: "Soft"
    },
    {
        name: "Adaptability",
        value: 90,
        category: "Soft"
    },
    {
        name: "Critical Thinking",
        value: 85,
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
        img: "/images/farm.png",
        description: "FarmForward - SKILL2 Project | This project focuses on crop management and farmer support. Demonstrated expertise in backend API design, database architecture, and real-world problem solving for agricultural communities.",
        link: "https://github.com/SHARIARxSAKIL/FarmForward",
    },
    {
        img: "/images/grow.png",
        description: "GrowGym - SKILL2(6 ECTS)| Gym management system built with modern web technologies. Key learnings: scalable architecture, user authentication.",
        link: "https://growgym.be/",
    },
    {
        img: "/images/math.png",
        description: "MathJack - SKILL1(6 ECTS)| Created using HTML/CSS/JavaScript. Learned: game theory, probability calculations, event-driven programming, and interactive UI design.",
        link: "https://mathjack.onrender.com/",
    },
    {
        img: "/images/fish.png",
        description: "IoT Essentials(6 ECTS) | Innovative IoT solution that notifies users when fish approach designated areas. Demonstrates understanding of sensor integration, real-time data processing, and IoT systems.",
        link: "https://www.youtube.com/watch?v=1nqCeJ7n6ac",
    },
    {
        img: "/images/giardini.png",
        description: "Full Stack(6 ECTS) | Learned: client-server architecture, responsive design, and real business requirements implementation.",
        link: "https://giardini.netlify.app/",
    },
    {
        img: "/images/meal.png",
        description: "Meal Rush - Python Game Project | Demonstrates programming fundamentals, game mechanics, and user experience design. Learned: object-oriented programming, game loop design, and event handling.",
        link: "https://github.com/SHARIARxSAKIL/Meal-Rush",
    },
    {
        img: "/images/web.png",
        description: "Web Design Project(6 ECTS) | Creative web design project showcasing modern design principles and responsive layouts.",
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
const logotext = "SAKIL";
const meta = {
    title: "Shariar Sakil - Portfolio",
    description: "I'm Shariar Sakil, an Applied Computer Science student in Belgium with an interest in web development, IoT, agriculture, and practical digital products.",
};

const introdata = {
    title: "Welcome\nI'm Shariar Sakil",
    animated: {
        first: "I code",
        second: "I play games",
        third: "I make videos",
        fourth: "I travel",
    },
    description: "When I'm not coding, you'll find me exploring new destinations, capturing moments through video, or diving into gaming projects.",
    your_img_url: "/images/profile.png",
};

const dataabout = {
    title: "About myself",
    aboutme: `I'm Shariar Sakil, an Applied Computer Science student at Thomas More, Belgium, passionate about web development, IoT, and building real-world digital solutions.
    My tech journey started in childhood with video games and movies, especially Mr. Robot, which sparked my enthusiasm for computer science.
    I chose this program because it blends software development with electronics and IoT. Beyond coding, I'm an adventurer at heart: I explore new places, do video production, and contribute to documentaries.
    These hobbies keep me creative and help me solve problems from fresh angles.
    My goals are to become a full-stack developer and IoT architect focused on agriculture and environmental sustainability, then start my own tech consultancy.
    Let's build something meaningful together.`,
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
        description: "Developing backend solutions, automation, and logic-driven applications using Python.",
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
        overview: "FarmForward was made during my second semester for the Skill 2 project at Thomas More. The assignment focused on problems that farmers in Tanzania face, especially the challenge that many farmers do not have access to smartphones. That context made the project more interesting to me because it connected technology with agriculture, accessibility, and real people instead of just building another standard website. I worked mainly on the design and GitHub collaboration, and the project helped me think about how a digital platform should be shaped around the user's reality. For my future goal of working with IoT in agriculture, FarmForward is an important first step: it shows how information can support farmers, and it also makes me think about how sensor data, soil moisture readings, weather information, or SMS-based alerts could make a platform like this more useful in the future.",
        partIDidTitle: "My Role",
        partIDidContent: [
            "Worked on the visual design and page structure",
            "Collaborated with the team through GitHub",
            "Helped connect the project idea to the needs of Tanzanian farmers",
        ],
        dashboards: [
            { title: "Main Dashboard", img: "/images/farm-dash.png", description: "Overview of farm information and crop status" },
        ],
        whatILearned: "FarmForward taught me that a good technical solution starts with understanding the people who will use it. At first it is easy to think mainly about screens, buttons, and features, but the fact that many farmers in the target group did not have smartphones changed how I looked at the problem. It made me ask questions like: can this idea work on simpler devices, could important information be sent by SMS, and how can we avoid designing only for people who already have modern technology? I also learned how important teamwork is in a project like this. Sitting together, sharing work through GitHub, and discussing design choices helped me practice communication and responsibility. Technically, I improved my front-end thinking, but the bigger lesson was learning to connect a design decision to a real-world limitation.",
        link: "https://github.com/SHARIARxSAKIL/FarmForward",
    },
    {
        id: 2,
        name: "GrowGym",
        img: "/images/grow.png",
        detailImg: "/images/grow-detail.png",
        description: "GrowGym - SKILL2 (6 ECTS) | ",
        overview: "GrowGym was a Skill 2 school project where our team built a gym management platform. The goal was to create a practical system with real features instead of only a visual concept. My main contributions were the models, migrations, database structure, nutrition plan functionality, and the equipment pages for coach and admin users. I focused on the parts that define how information is stored and managed, because a gym application depends on clean relationships between users, plans, equipment, and roles. This project felt useful to me because it showed how a web application becomes more professional when the database and user flows are planned carefully from the start.",
        partIDidTitle: "My Role",
        partIDidContent: [
            "Created models, migrations, and database structure",
            "Built nutrition plan functionality for member, coach, and admin roles",
            "Developed equipment pages for coach and admin users",
        ],
        dashboards: [
            { title: "Member Dashboard", img: "/images/grow-dash.png", description: "Track fitness progress and class schedules" },
        ],
        whatILearned: "GrowGym helped me understand how much planning is needed behind a feature before users ever see it on the screen. For example, building nutrition plans was not only about creating a form; I had to think about which role should create, view, or manage the plan and how that information should be connected in the database. The models and migrations made me more careful with naming, relationships, and future changes, because a weak database structure can make later features harder to build. I also practiced soft skills because this was a team project: we had to divide tasks, explain our progress, and make sure our work fitted together. I did not focus on the hosting part, but I learned from seeing how my contribution still needed to fit into the complete application.",
        link: "https://growgym.be/",
    },
    {
        id: 3,
        name: "MathJack",
        img: "/images/math.png",
        detailImg: "/images/math-detail.png",
        description: "MathJack - SKILL1 (6 ECTS) | ",
        overview: "MathJack was my Skill 1 game project, built with vanilla HTML, CSS, and JavaScript. The idea was to combine a card-game style interaction with math, probability, and decision-making. I chose this type of project because games force you to manage rules, state, user actions, and feedback at the same time. Every click changes the situation, so the interface has to stay synchronized with the logic. That made the project a good foundation for understanding interactive applications without relying on a framework.",
        partIDidTitle: "My Role",
        partIDidContent: [
            "Designed and developed the complete game using vanilla JavaScript",
            "Implemented the game logic and score calculations",
            "Created the interactive UI with HTML and CSS"
        ],
        dashboards: [
            { title: "Game Interface", img: "/images/math-dash.png", description: "Interactive game board with real-time calculations" },
        ],
        whatILearned: "MathJack taught me how important state management is, even in a small game. I had to keep track of the player, the game rules, the score, button states, and the feedback shown on the screen. When something went wrong, I learned to debug step by step instead of guessing, for example by checking when a card was added, when the score changed, and when the game should end. Working in vanilla JavaScript also made me appreciate what frameworks do later, because I had to manually connect the logic to the DOM. The soft skill I practiced most was persistence: small logic bugs can be frustrating, but solving them taught me to slow down and test one rule at a time.",
        link: "https://mathjack.onrender.com/",
    },
    {
        id: 4,
        name: "IoT Essentials",
        img: "/images/fish.png",
        detailImg: "/images/fish.png",
        description: "Fish Doorbell - IoT Essentials (6 ECTS) | ",
        overview: "The IoT Essentials project was a practical system that used sensors to detect fish presence and send real-time notifications. This project was important for me because it moved beyond normal web development and connected software with hardware, sensor data, and cloud communication. Instead of only building an interface, I had to think about the full path from the physical world to a user notification. That is closely connected to my future interest in IoT architecture, because the same pattern can be used in agriculture for soil sensors, irrigation alerts, crop monitoring, or environmental dashboards.",
        partIDidTitle: "My Role",
        partIDidContent: [
            "Integrated Arduino sensors with the IoT platform",
            "Developed the real-time notification flow",
            "Created cloud infrastructure for data processing",
            "Built mobile app features for user alerts",
            "Implemented a data visualization dashboard"
        ],
        dashboards: [
            { title: "Sensor Data Dashboard", img: "/images/fish-dash.png", description: "Real-time fish detection and sensor readings" },
        ],
        whatILearned: "IoT Essentials taught me that debugging an IoT project is different from debugging a normal website. A problem can come from the wiring, the sensor, the microcontroller, the Orange Pi, the network, the cloud endpoint, or the application logic. I learned to test one layer at a time instead of assuming the code was always the problem. This project also made me think more like an architect: data has to travel reliably from hardware to software, and users need clear notifications at the right moment. The soft skills were just as important, because IoT work requires patience, asking for help when hardware behaves unexpectedly, and explaining technical problems clearly to teammates.",
        link: "https://www.youtube.com/watch?v=1nqCeJ7n6ac",
    },
    {
        id: 5,
        name: "Giardini Full Stack",
        img: "/images/giardini.png",
        detailImg: "/images/giardini-detail.png",
        description: "Restaurant Website - Full Stack (6 ECTS) | ",
        overview: "Giardini was a full-stack restaurant website project based on a more realistic business case. The project helped me understand how a website should support a real organization: visitors need to find the menu, understand the atmosphere, and navigate the pages easily. My contribution focused on the responsive front end and pages such as the menu and chefs page. Compared with smaller exercises, this project required more attention to consistency, page structure, and how the front end connects with the rest of the application.",
        partIDidTitle: "My Role",
        partIDidContent: [
            "Implemented full-stack application structure",
            "Built responsive frontend pages with HTML, CSS, and JavaScript",
            "Created the menu and chefs pages"
        ],
        dashboards: [
            { title: "Application Dashboard", img: "/images/giardini-dash.png", description: "Features for menu management" },
        ],
        whatILearned: "Giardini helped me improve my understanding of client-server architecture and responsive design in a practical context. I learned that a restaurant website is not only about making pages look good; the content has to be clear, the layout has to work on different devices, and the user should quickly find what they need. While working on the menu and chefs pages, I practiced organizing content in a way that feels natural for visitors. I also learned to think more about finishing and presentation, because a project for a realistic business case needs to feel complete and understandable, not just technically functional.",
        link: "https://giardini.netlify.app/",
    },
    {
        id: 6,
        name: "Meal Rush",
        img: "/images/meal.png",
        detailImg: "/images/meal-detail.png",
        description: "Meal Rush - SKILL2 (6 ECTS) | ",
        overview: "Meal Rush was a Python game project where players serve meals in a busy restaurant environment while the difficulty increases. I liked this project because it combined programming logic with game design decisions. It was not enough to make the game run; the gameplay also had to feel balanced, readable, and fair. I worked on the object-oriented structure, difficulty progression, scoring, user interface, and balancing. The project showed me how a program becomes easier to extend when the responsibilities are separated into clear parts.",
        partIDidTitle: "My Role",
        partIDidContent: [
            "Created object-oriented game architecture",
            "Designed the difficulty progression system",
            "Built the UI and scoring mechanism",
            "Worked on game balancing and user experience"
        ],
        dashboards: [
            { title: "Game Screen", img: "/images/meal-dash.png", description: "Main gameplay interface with score tracking" },
        ],
        whatILearned: "Meal Rush taught me why object-oriented programming matters in a project with many moving parts. Customers, meals, scoring, timing, and difficulty all affect each other, so putting everything in one place would quickly become confusing. By separating responsibilities, I could think more clearly about how the game should behave. I also learned that balancing is a real problem-solving skill: if the game becomes too hard too quickly, users stop enjoying it, but if it is too easy, it loses tension. This helped me practice testing, adjusting, and accepting that the first version of an idea usually needs improvement.",
        link: "https://github.com/SHARIARxSAKIL/Meal-Rush",
    },
    {
        id: 7,
        name: "Web Design Project",
        img: "/images/web.png",
        detailImg: "/images/web.png",
        description: "Portfolio - Web Design Essentials (6 ECTS) | ",
        overview: "This Web Design Essentials project was my chance to build a complete portfolio-style website from the ground up. I designed and developed the whole project myself, which made it personal because every design choice had to represent my style and interests. The goal was to practice modern web design principles, responsive layouts, visual hierarchy, and user-centered thinking. It also helped me understand how important a portfolio is: it is not only a place to show projects, but also a way to communicate who I am as a developer.",
        partIDidTitle: "My Role",
        partIDidContent: [
            "Designed and developed the full project myself",
            "Created responsive layouts for different screen sizes",
            "Worked on visual hierarchy, spacing, and user experience"
        ],
        dashboards: [
            { title: "Website Homepage", img: "/images/web.png", description: "Responsive landing page" },
        ],
        whatILearned: "This project taught me that web design is a mix of technical structure and communication. I learned how spacing, contrast, typography, and layout choices guide the visitor through a page. Because I built the whole project myself, I also had to manage my own time and make decisions without waiting for someone else to choose a direction. That made me more confident, but it also showed me the value of feedback. A portfolio can look finished to me, but another person may notice that a section feels too generic or not personal enough. That lesson is one reason I am improving the project descriptions now.",
        link: "https://sakil.sinners.be/",
    },
];

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

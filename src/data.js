const skillsList = [
    { title: "React JS", value: 75 },
    { title: "Android Studio", value: 75 },
    { title: "Node JS ", value: 60 },
    { title: "Express JS ", value: 70 },
    { title: "Firebase", value: 70 },
    { title: "CSS", value: 80 },
];
const projectList = [
    {
        id: 1,
        title: "Texas CDL Prep",
        technologies: ["Android", "Swift", "MongoDB", "Wordpress"],
        overview: "Designed and developed a study guide to help customers obtain there Commercial Drivers License in the State of Texas.",
        extOverview: "",
        backgroundImage:
            "https://texascdlprep.com/images/mbanner.png",
    },
    {
        id: 2,
        title: "Professional Employee Tracker",
        technologies: ["Node JS", "MySQL", "Inquirer"],
        overview: "CMS interface using specific technology plugins like Node.js, Inquirer, and MYSQL. Also capable of creating database, tables/rows, and seeds directly through the same interface.",
        extOverview: "",
        backgroundImage:
            "https://sc04.alicdn.com/kf/UT8uy8vX9XaXXcUQpbX9.png",
    },
    {
        id: 3,
        title: "CryptoCurrency Dashboard",
        technologies: ["HTML", "CSS", "Node JS", "REST Api"],
        overview: "The CryptoCurrency Dashboard web application allows a user to search a crypto coin (by its abbreviation) in the search bar and see a candlestick graph that displays the market price.",
        extOverview: "",
        backgroundImage:
            "https://miro.medium.com/max/1838/1*wPVjXYATyBoz-aB26qJuWw.png",
    },
];

const experienceList = [
    {
        id: 0,
        position: "Owner",
        company: "Texas CDL Prep",
        length: "2016-Present",
        overview: "Designed and developed Texas CDL Prep which is currently available on all App Stores.  Texas CDL Prep helps individuals obtain their Commercial Drivers License in a fast paced method.  Devised and executed test plans to assess software functionality, integrity and security based on industry practices. Provided dedicated support and timely issue resolution to clients following successful app launch.  Application designed in Swift & Android Studio.  Currently working on a cross-platform version in React Native.",
        links: {
            website: "https://www.texascdlanswers.com/",
        },
    },
    {
        id: 1,
        company: "SMU Coding Boot Camp",
        length: "2021-2022",
        overview: "Completed Full-Stack Development Bootcamp (Certificate Badge upon request)",
        links: {
            website: "https://www.smu.edu/",
        },
    },
    {
        id: 2,
        company: "Allcare Heat & Air",
        length: "2018-Present",
        overview: "Laid out and installed communication connections and controls in part with High Velocity based out of Ontario, Canada & Unico Systems based out of St. Louis, MO.  Analyzed blueprints and manufacturers to design specifications to determine HVAC equipment configuration and complete proper installation. Optimized performance by balancing systems and calibrating controls.",
        links: {
            website: "https://www.unicosystem.com/",
        },
    },
];

export { skillsList, projectList, experienceList };

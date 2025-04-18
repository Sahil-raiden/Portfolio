// src/components/data/portfolioData.ts

// ─── Types ─────────────────────────────────────────────────────────────
export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

export type Experience = {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string[];
    logoUrl: string;
};

// ─── Projects ──────────────────────────────────────────────────────────
export const projects: Project[] = [
    {
        id: 1,
        title: 'Thermal Remote Sensing Data Validation Application with Landsat-8 ISRO',
        description: 'Led development of an application using Python and Landsat-8 data at ISRO, integrating and validating thermal remote sensing data for accurate environmental monitoring.',
        imageUrl: '/assets/1.png',
    },
    {
        id: 2,
        title: 'GUI Remodel for LIDAR Output from Ouster Studio DRDO',
        description: 'Assisted project managers in planning and executing various projects, ensuring adherence to project timelines and deliverables. Monitored project budgets, tracked expenses, and prepared financial reports to ensure cost-effectiveness and adherence to financial guidelines.',
        imageUrl: '/assets/2.jpeg',
    },
    {
        id: 3,
        title: 'Newsletter Web Application with ReactJS',
        description: 'Prepared and served a variety of beverages with precision and creativity, consistently meeting or exceeding quality standards, and receiving compliments for latte art and presentation.',
        imageUrl: '/assets/3.png',
    },
    {
        id: 4,
        title: 'Sentiment Analysis Application for YouTube Video Comments',
        description: "Developed an application with Python and NLTK to analyze YouTube comments' sentiment, providing insights into viewer engagement and content effectiveness.",
        imageUrl: '/assets/4.png',
    },
    {
        id: 5,
        title: 'Cancer Detection System',
        description: 'Developed a Java-based Cancer Detection System with integrated patient management and book inventory modules, leveraging MySQL for secure and efficient data handling, achieving an estimated accuracy of 80%.',
        imageUrl: '/assets/5.png',
    }, {
        id: 6,
        title: 'A Carpooling Interface EnviGo',
        description: "With EnviGo, we're revolutionizing the way you travel by connecting you with like-minded individuals headed in the same direction.",
        imageUrl: '/assets/6.jpeg',
    },
];

// ─── Work Experiences ──────────────────────────────────────────────────
export const workExperiences: Experience[] = [
    {
        id: 1,
        title: 'Project Intern',
        company: 'ADRIN, DOS, Hyderabad',
        duration: 'Sep 2023 – April 2024',
        description: [
            'Developed a lake surface temperature retrieval algorithm using Landsat-8 thermal infrared satellite data.',
            'Received hands-on experience in data analysis, remote sensing technologies, and algorithm development.',
            'Collaborated closely with the mentor to refine the algorithm.',
        ],
        logoUrl: '/assets/adrin.png',
    },
    {
        id: 2,
        title: 'Web Development Intern',
        company: 'ALTRUISTY, Hyderabad',
        duration: 'March 2024 – Present',
        description: [
            'Developed a web app for event organization and music management.',
            'Integrated scheduling, venue management, musician profiles, and communication tools.',
        ],
        logoUrl: '/assets/altruisty.jpeg',
    },
    {
        id: 3,
        title: 'Campus Ambassador',
        company: 'IIT Bombay',
        duration: 'June 2024 – August 2024',
        description: [
            'Promoted campus events and engaged student communities via digital outreach.',
            'Collaborated with other ambassadors to drive student participation in IIT Bombay initiatives.',
        ],
        logoUrl: '/assets/iitb.png',
    },
];

// ─── Certifications ────────────────────────────────────────────────────
export const certificationsList = [
    {
        id: 'cert1',
        title: 'Career Essentials in Generative AI',
        description: 'By Microsoft and LinkedIn',
        imageUrl: '/assets/c1.jpeg',
    },
    {
        id: 'cert2',
        title: 'DSA Certification',
        description: 'SmartInterviews',
        imageUrl: '/assets/c2.png',
    },
    {
        id: 'cert3',
        title: 'Generative AI Certification',
        description: 'NXT Wave',
        imageUrl: '/assets/c3.png',
    },
    {
        id: 'cert4',
        title: 'Google Gen AI',
        description: 'GDGC VNRVJIET',
        imageUrl: '/assets/c4.png',
    },
    {
        id: 'cert5',
        title: 'MERN Stack Certification',
        description: '',
        imageUrl: 'https://picsum.photos/id/305/300/200',
    },
];


// ─── Skills ────────────────────────────────────────────────────────────
// src/components/data/portfolioData.ts
export const skillsList = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Python', logoUrl: '/logos/python.svg' },
            { name: 'C++', logoUrl: '/logos/cpp.svg' },
            { name: 'C', logoUrl: '/logos/c.svg' },
            { name: 'SQL', logoUrl: '/logos/sql.svg' },
            { name: 'R', logoUrl: '/logos/r.svg' },
            { name: 'Java', logoUrl: '/logos/java.svg' },
            { name: 'MySQL', logoUrl: '/logos/mysql.svg' },
        ],
    },
    {
        title: 'Frontend Technologies',
        skills: [
            { name: 'HTML', logoUrl: '/logos/html.svg' },
            { name: 'CSS', logoUrl: '/logos/css.svg' },
            { name: 'Bootstrap', logoUrl: '/logos/bootstrap.svg' },
            { name: 'React', logoUrl: '/logos/react.svg' },
            { name: 'JavaScript', logoUrl: '/logos/javascript.svg' },
        ],
    },
    {
        title: 'Backend Technologies',
        skills: [
            { name: 'Node.js', logoUrl: '/logos/nodejs.svg' },
            { name: 'MongoDB', logoUrl: '/logos/mongodb.svg' },
            { name: 'Express.js', logoUrl: '/logos/express.svg' },
        ],
    },
    {
        title: 'Other Tools',
        skills: [
            { name: 'Power BI', logoUrl: '/logos/powerbi.svg' },
            { name: 'AutoCAD', logoUrl: '/logos/autocad.svg' },
        ],
    },
];


// ─── Research Publications ─────────────────────────────────────────────
export const researchPublicationsList = [
    {
        id: 1,
        title: "Machine Learning-Based Cardiovascular Disease Detection Using Optimal Feature Selection",
        authors: "Alugani Sanjana, A Sahil Madan",
        journal: "International Journal of Mathematical Modeling Simulation and Applications (IJMMSA)",
        details: "ISSN: 0973‑8355, Published: Feb 2025",
    },
    {
        id: 2,
        title: "Stock Analysis and Prediction Using Big Data and Machine Learning",
        authors: "Alugani Sanjana, A Sahil Madan",
        journal: "International Journal for Advanced Research in Science & Technology (IJARST)",
        details: "ISSN: 2457‑0362, Published: Jan 2025",
    },
];


// ─── Achievements ──────────────────────────────────────────────────────
export const achievementsList = [
    "Won 1st prize in NSO for two years in Round 1 (Science Olympiad Foundation)",
    "Won 2nd prize in NSO in Round 2",
    "Won 1st prize in IMO in Round 1 (Science Olympiad Foundation)",
    "Qualified NTSE Stage 1 exam (NCERT)",
    "Gold medal in Analytical & Problem‑Solving Skills Olympiad (Eduranet 2018‑2019)",
    "Silver medal in Advanced Mathematics Skills Olympiad (Eduranet 2018‑2019)",
    "One Silver & two Bronze Medals in FIITJEE Talent Reward Exam (FTRE)",
    "Runners‑up in Hult Prize Sustainable Fashion (Hult Prize Foundation)",
];

// ─── Leadership & Community ────────────────────────────────────────────
export const leadershipList = [
    "Campus Director of Hult Prize student chapter",
    "Member of ED‑Cell VNRVJIET (PR & Networking, Event Organisation)",
    "Member of Computer Society of India",
    "Active NSS member; organized blood‑donation event",
];

// ─── Languages ─────────────────────────────────────────────────────────
export const languagesList = [
    "English (Proficient)",
    "Telugu (Native)",
    "Hindi (Fluent)",
];
export const graduationList = [
    {
        degree: 'B.Tech in Electronics and Communication Engineering',
        institution: 'VNRVJIET, Hyderabad, India',
        duration: '2022 – 2026',
        logoUrl: '/assets/vnr.jpeg', // Replace with actual college logo
        highlights: ['CGPA: 8.9 (up to 6th sem)', 'Involved in ED-Cell, CSI, NSS, and research.'],
    },
    {
        degree: 'High School (MPC)',
        institution: 'FIITJEE Junior College, Hyderabad',
        duration: '2020 – 2022',
        logoUrl: '/assets/fiitjee.png', // Replace with school logo
        highlights: ['Grade: 91.7%', 'Cleared JEE Mains and various competitive exams and Olympiads'],
    },
];

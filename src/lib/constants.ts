export const HACKATHON_CONFIG = {
  name: "InnoHack 2026",
  tagline: "Build the Future, One Line at a Time",
  description: "Join 500+ innovators for 36 hours of coding, creativity, and collaboration",
  dates: {
    registration: {
      start: new Date("2026-01-15T00:00:00"),
      end: new Date("2026-02-20T23:59:59"),
      earlyBird: new Date("2026-02-10T23:59:59"),
    },
    event: {
      start: new Date("2026-03-15T09:00:00"),
      end: new Date("2026-03-16T21:00:00"),
    },
  },
  venue: {
    name: "Innovation Hub, Main Campus",
    address: "123 University Avenue, Tech City, IN 560001",
    mapUrl: "https://maps.google.com",
  },
  pricing: {
    team: 500,
    solo: 300,
    earlyBird: {
      team: 400,
      solo: 250,
    },
  },
  capacity: {
    maxTeams: 300,
    currentTeams: 187,
  },
  duration: 36, // hours
  prizePool: 500000, // INR
  social: {
    instagram: "https://instagram.com/innohack",
    twitter: "https://twitter.com/innohack",
    linkedin: "https://linkedin.com/company/innohack",
    discord: "https://discord.gg/innohack",
    whatsapp: "https://chat.whatsapp.com/innohack",
    telegram: "https://t.me/innohack",
  },
  contact: {
    email: "hello@innohack.dev",
    phone: "+91 98765 43210",
  },
};

export const TIMELINE = [
  {
    date: "Feb 20, 2026",
    time: "11:59 PM",
    title: "Registration Closes",
    description: "Last chance to register your team",
    icon: "calendar",
  },
  {
    date: "Mar 15, 2026",
    time: "8:00 AM",
    title: "Check-in & Breakfast",
    description: "Arrive early, grab your swag kit",
    icon: "coffee",
  },
  {
    date: "Mar 15, 2026",
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Kickoff, rules, and problem statements revealed",
    icon: "rocket",
  },
  {
    date: "Mar 15, 2026",
    time: "11:00 AM",
    title: "Hacking Begins!",
    description: "36 hours of pure innovation starts now",
    icon: "code",
  },
  {
    date: "Mar 16, 2026",
    time: "11:00 PM",
    title: "Submissions Due",
    description: "Code freeze! Submit your projects",
    icon: "upload",
  },
  {
    date: "Mar 16, 2026",
    time: "2:00 PM",
    title: "Demos & Judging",
    description: "Showcase your creation to the judges",
    icon: "presentation",
  },
  {
    date: "Mar 16, 2026",
    time: "6:00 PM",
    title: "Awards & Closing",
    description: "Winners announced, celebrate together!",
    icon: "trophy",
  },
];

export const PRIZES = [
  {
    position: "1st",
    title: "Grand Champion",
    amount: 200000,
    perks: ["Internship opportunities", "Mentorship program", "Tech gadgets"],
    color: "from-yellow-400 to-amber-600",
    icon: "🏆",
  },
  {
    position: "2nd",
    title: "First Runner-up",
    amount: 100000,
    perks: ["Cloud credits worth ₹50,000", "Premium dev tools"],
    color: "from-gray-300 to-gray-500",
    icon: "🥈",
  },
  {
    position: "3rd",
    title: "Second Runner-up",
    amount: 50000,
    perks: ["Exclusive workshop access", "Tech merchandise"],
    color: "from-amber-600 to-amber-800",
    icon: "🥉",
  },
  {
    position: "Special",
    title: "Best Innovation",
    amount: 25000,
    perks: ["Innovation lab access", "Startup incubation support"],
    color: "from-purple-400 to-purple-600",
    icon: "💡",
  },
  {
    position: "Special",
    title: "Best UI/UX",
    amount: 25000,
    perks: ["Design tool subscriptions", "Portfolio review"],
    color: "from-pink-400 to-pink-600",
    icon: "🎨",
  },
  {
    position: "Special",
    title: "People's Choice",
    amount: 25000,
    perks: ["Community recognition", "Social media feature"],
    color: "from-blue-400 to-blue-600",
    icon: "❤️",
  },
];

export const SPONSORS = {
  title: [
    { name: "TechCorp", logo: "/sponsors/techcorp.svg", tier: "title" },
  ],
  platinum: [
    { name: "CloudNine", logo: "/sponsors/cloudnine.svg", tier: "platinum" },
    { name: "DevStudio", logo: "/sponsors/devstudio.svg", tier: "platinum" },
  ],
  gold: [
    { name: "CodeLabs", logo: "/sponsors/codelabs.svg", tier: "gold" },
    { name: "DataDrive", logo: "/sponsors/datadrive.svg", tier: "gold" },
    { name: "AIVentures", logo: "/sponsors/aiventures.svg", tier: "gold" },
  ],
  silver: [
    { name: "StartupHub", logo: "/sponsors/startuphub.svg", tier: "silver" },
    { name: "ByteWorks", logo: "/sponsors/byteworks.svg", tier: "silver" },
    { name: "TechMentor", logo: "/sponsors/techmentor.svg", tier: "silver" },
    { name: "InnovateCo", logo: "/sponsors/innovateco.svg", tier: "silver" },
  ],
};

export const PAST_WINNERS = [
  {
    year: 2025,
    teamName: "CodeCrafters",
    project: "EcoTrack",
    description: "AI-powered carbon footprint tracker that gamifies sustainable living",
    members: ["Arjun Sharma", "Priya Patel", "Rahul Kumar"],
    college: "IIT Delhi",
    award: "Grand Champion",
    techStack: ["React", "Python", "TensorFlow", "MongoDB"],
    image: "/achievements/2025-winner.jpg",
    projectUrl: "#",
  },
  {
    year: 2025,
    teamName: "ByteBusters",
    project: "MedConnect",
    description: "Telemedicine platform connecting rural patients with specialists",
    members: ["Sneha Reddy", "Vikram Singh"],
    college: "NIT Trichy",
    award: "First Runner-up",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "WebRTC"],
    image: "/achievements/2025-runner.jpg",
    projectUrl: "#",
  },
  {
    year: 2024,
    teamName: "InnoMinds",
    project: "SignSpeak",
    description: "Real-time sign language to speech converter using computer vision",
    members: ["Ananya Gupta", "Rohan Mehta", "Kavya Nair"],
    college: "BITS Pilani",
    award: "Grand Champion",
    techStack: ["Python", "OpenCV", "MediaPipe", "Flutter"],
    image: "/achievements/2024-winner.jpg",
    projectUrl: "#",
  },
  {
    year: 2024,
    teamName: "TechTitans",
    project: "FarmWise",
    description: "IoT-based smart farming solution with disease detection",
    members: ["Aditya Verma", "Ishita Joshi"],
    college: "VIT Vellore",
    award: "Best Innovation",
    techStack: ["Arduino", "React Native", "AWS", "Machine Learning"],
    image: "/achievements/2024-innovation.jpg",
    projectUrl: "#",
  },
];

export const FAQ_DATA = [
  {
    question: "Who can participate in InnoHack 2026?",
    answer: "Any college student with a valid student ID can participate. Whether you're a first-year exploring tech or a final-year pro, everyone's welcome! You can participate solo or form a team of up to 4 members.",
  },
  {
    question: "Do I need to have prior hackathon experience?",
    answer: "Absolutely not! InnoHack welcomes participants of all skill levels. We'll have mentors available throughout the event to help you learn and build. It's all about learning, experimenting, and having fun!",
  },
  {
    question: "What should I bring to the hackathon?",
    answer: "Bring your laptop, charger, any hardware you might need, valid college ID, and tons of enthusiasm! We'll provide meals, snacks, swag, and a great environment. Oh, and maybe a sleeping bag if you plan to power nap!",
  },
  {
    question: "Can I start working on my project before the hackathon?",
    answer: "Nope! All coding must be done during the hackathon. However, you can brainstorm ideas, form teams, and research technologies beforehand. We want a level playing field for everyone.",
  },
  {
    question: "What are the problem statements?",
    answer: "Problem statements will be revealed during the opening ceremony. They'll cover various domains like HealthTech, EdTech, FinTech, Sustainability, and Open Innovation. Stay tuned!",
  },
  {
    question: "Is food and accommodation provided?",
    answer: "Yes! Your registration fee covers all meals (breakfast, lunch, dinner, and midnight snacks), unlimited caffeine, and access to rest areas. It's going to be a well-fed hackathon!",
  },
  {
    question: "What's the refund policy?",
    answer: "Full refunds are available up to 7 days before the event. After that, 50% refund until 3 days before. No refunds within 3 days of the event. Transfers to another participant are allowed.",
  },
  {
    question: "Will there be mentors and workshops?",
    answer: "Yes! Industry experts and senior developers will be available as mentors. We'll also have lightning workshops on trending topics during the event. Learning never stops!",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aishwarya Rao",
    college: "IIT Bombay",
    year: "InnoHack 2025",
    quote: "The energy was incredible! Met my future co-founder here. The mentorship we received was invaluable.",
    image: "/testimonials/aishwarya.jpg",
    role: "Winner, Best UI/UX",
  },
  {
    name: "Karthik Menon",
    college: "NIT Surathkal",
    year: "InnoHack 2024",
    quote: "First hackathon, and I was hooked! The organizers made everyone feel welcome, especially beginners like me.",
    image: "/testimonials/karthik.jpg",
    role: "Participant",
  },
  {
    name: "Shreya Bhatt",
    college: "IIIT Hyderabad",
    year: "InnoHack 2025",
    quote: "36 hours of pure adrenaline. The problem statements were challenging yet achievable. Can't wait for 2026!",
    image: "/testimonials/shreya.jpg",
    role: "Grand Champion",
  },
];

export const ORGANIZERS = [
  {
    name: "Dr. Priya Sharma",
    role: "Faculty Advisor",
    image: "/team/priya.jpg",
    linkedin: "#",
  },
  {
    name: "Arjun Nair",
    role: "Lead Organizer",
    image: "/team/arjun.jpg",
    linkedin: "#",
  },
  {
    name: "Meera Krishnan",
    role: "Sponsorship Head",
    image: "/team/meera.jpg",
    linkedin: "#",
  },
  {
    name: "Rohit Gupta",
    role: "Technical Lead",
    image: "/team/rohit.jpg",
    linkedin: "#",
  },
];

export const SKILLS_OPTIONS = [
  "JavaScript/TypeScript",
  "Python",
  "Java",
  "C/C++",
  "React/Next.js",
  "Node.js",
  "Machine Learning",
  "Mobile Development",
  "UI/UX Design",
  "Cloud/DevOps",
  "Blockchain",
  "IoT/Hardware",
  "Data Science",
  "Cybersecurity",
  "Game Development",
];

export const EXPERIENCE_LEVELS = [
  { value: "beginner", label: "Beginner", description: "New to hackathons, eager to learn!" },
  { value: "intermediate", label: "Intermediate", description: "Some experience, ready to level up" },
  { value: "advanced", label: "Advanced", description: "Hackathon veteran, here to win!" },
];

export const PROBLEM_TRACKS = [
  { value: "healthtech", label: "HealthTech", description: "Solutions for healthcare challenges" },
  { value: "edtech", label: "EdTech", description: "Revolutionizing education" },
  { value: "fintech", label: "FinTech", description: "Financial innovation" },
  { value: "sustainability", label: "Sustainability", description: "Green tech solutions" },
  { value: "open", label: "Open Innovation", description: "Any creative solution!" },
];

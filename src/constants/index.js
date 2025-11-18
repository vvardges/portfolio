export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Heike Hengstmann',
    position: 'Product Owner (PSPO I) at Invia Group Germany',
    img: 'https://media.licdn.com/dms/image/v2/D4D03AQExxIUZoqj8Zg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712602708742?e=1764806400&v=beta&t=XTz7Dw2dm-UGdH2zRxVA5-IKc-qKR5JekUNowAClohQ',
    review:
      'Since more than 2 1/2 years I have been working closely with Vardges in our team at Invia Travel Germany. I can confidently say that he is an exceptional frontend developer with a lot of experience. His attention to detail, reliability and ability to consistently deliver on time make him an invaluable team member. Vardges is not only highly skilled but also a joy to work with, bringing a positive and collaborative spirit to every project. He introduced new colleagues to our projects in an excellent way.\n' +
      'I highly recommend Vardges for any future opportunities. He will be for sure a great asset to any team.',
  },
  {
    id: 2,
    name: 'Robert Mould',
    position: 'Client at Upwork',
    img: 'assets/review2.png',
    review:
      'Vardges is an excellent freelancer. Has brilliant communication skills (excellent English) and solid technical skills. I would happily work with Vardges again and recommend him to the Upwork community.',
  },
  {
    id: 3,
    name: 'Rocky Lua',
    position: 'Client at Upwork ',
    img: 'assets/review3.png',
    review:
      "One of the MOST amazing developers you can possibly find! Very prompt, very bright, very thoughtful in his work and the end result wow'd me!",
  },
  {
    id: 4,
    name: 'Vardges Musheghyan',
    position: 'Software Engineer at PicsArt',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQGYIPBBajkg3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677742838310?e=1764806400&v=beta&t=F9Y225HnNx5mtuDg8Z4GX_bp14q8t_tx7PKPIPZWLb4',
    review:
      "I had the privilege of being one of Vardges' first students when he was teaching at Picsart Academy, he is an exceptional software engineer and an outstanding educator. I work now at Picsart.",
  },
];

export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Invia Travel Germany',
    link: 'https://www.invia.com/',
    pos: 'Senior Frontend Engineer',
    duration: '2022 - 2024',
    title:
      "Led the development and scaling of a major European travel booking and management platform used by thousands daily. Directed hiring, onboarding, and mentoring of frontend engineers while fostering a strong engineering culture. Collaborated closely with design, backend, and product teams to deliver seamless user experiences from concept to deployment.",
    icon: 'https://cdn.brandfetch.io/invia.de/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'VMware',
    link: 'https://www.vmware.com/',
    pos: 'Mid Frontend Engineer',
    duration: '2019 - 2022',
    title:
      "Contributed to VMware’s cloud observability platform (Wavefront), building high-performance visualization components for real-time metrics dashboards. Enhanced analytics experiences using D3.js, Highcharts, Virtualizer, and Html2pdf, improving scalability and system responsiveness.",
    icon: 'https://www.vmware.com/vm-favicon-96x96.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'SFL',
    pos: 'Junior Frontend Engineer',
    duration: '2017 - 2019',
    title:
      "Developed features for WeAdapt, an advanced online video editor for marketers and creators. Built and maintained core UI elements including the timeline, preview canvas, and export pipeline using Fabric.js and AWS S3, ensuring smooth editing workflows.",
    icon: 'https://cdn.staff.am/staff.am/upload/c/2/0/a/c20a4428.png.webp',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Smart Production',
    pos: 'Full-stack Engineer',
    duration: '2014 - 2017',
    title:
      "Delivered 10+ full-stack web applications and CMS-driven business platforms across e-commerce, hospitality, and healthcare industries. Designed back-end architectures and responsive UIs, led small development teams, collaborated directly with clients, and ensured long-term maintainable solutions.",
    icon: 'https://media.licdn.com/dms/image/v2/C4D0BAQFA4ui9CWmn6g/company-logo_200_200/company-logo_200_200/0/1630550297741/smart_production_logo?e=2147483647&v=beta&t=pByDE7sE3p1F8BtsVuI6UzqqVemFTnxekeLM0sSFPCo',
    animation: 'wave',
  },
];

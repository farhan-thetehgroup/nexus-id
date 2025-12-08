export const MENU_ITEMS = [
  { name: "Sponsors", id: "sponsors" },
  { name: "Why", id: "why" },
  // { name: "Tour", id: "tours" },
  { name: "Target Audience", id: "audience" },
  { name: "Event Formats", id: "event-formats" },
  { name: "Speakers", id: "speakers" },
  { name: "Agenda", id: "agenda" },
  { name: "Location", id: "location" },
  { name: "Contact", id: "contact" },
];

export const BRAND_LOGO = "/images/brand-logo/nexus-green.svg";
export const BRAND_LOGO_WHITE = "/images/brand-logo/nexus-teh-white.svg";
export const SPEED_PARTNERS_MARQUEE = 300000; // kecepatan scroll (ms)
export const LINK_REGISTER =
  "https://event.thetehgroup.com/-nexus-indonesia-2026/overview?token=ZT1jNTU3N2JiMy0wOTJkLTRjNjUtODIyNi0zMjUzODEwNDE4NGU%3d";
export const TEASER_URL =
  "https://cyberattack-event.com/wp-content/uploads/2024/10/CA-MY-EVENT-DRAFT-2.mp4";

export const TEASER_URL_2 =
  "https://cyberattack-event.com/wp-content/uploads/2024/03/Cyberattack-Nexus_3-1.mp4";

export const GALLERY = [
  { src: "/images/gallery/ev1.png", alt: "Keynote session" },
  { src: "/images/gallery/ev2.png", alt: "Panel discussion" },
  { src: "/images/gallery/ev3.png", alt: "Live demo" },
  { src: "/images/gallery/ev4.png", alt: "Networking session" },
  { src: "/images/gallery/ev5.png", alt: "Audience engagement" },
  { src: "/images/gallery/ev6.png", alt: "Closing remarks" },
];

export const GALLERY_ID = [
  { src: "/images/gallery/id1.png", alt: "Indonesia 1" },
  { src: "/images/gallery/id2.png", alt: "Indonesia 2" },
  { src: "/images/gallery/id3.png", alt: "Indonesia 3" },
  { src: "/images/gallery/id4.png", alt: "Indonesia 4" },
  { src: "/images/gallery/id5.png", alt: "Indonesia 5" },
  { src: "/images/gallery/id6.png", alt: "Indonesia 6" },
  { src: "/images/gallery/id7.png", alt: "Indonesia 7" },
  { src: "/images/gallery/id8.png", alt: "Indonesia 8" },
];

export const GALLERY_SG = [
  { src: "/images/gallery/sg1.png", alt: "Singapore 1" },
  { src: "/images/gallery/sg2.png", alt: "Singapore 2" },
  { src: "/images/gallery/sg3.png", alt: "Singapore 3" },
];

export const GALLERY_CN = [
  { src: "/images/gallery/hk1.png", alt: "Hong Kong 1" },
  { src: "/images/gallery/hk2.png", alt: "Hong Kong 2" },
  { src: "/images/gallery/hk3.png", alt: "Hong Kong 3" },
  { src: "/images/gallery/hk4.png", alt: "Hong Kong 4" },
  { src: "/images/gallery/hk5.png", alt: "Hong Kong 5" },
  { src: "/images/gallery/hk6.png", alt: "Hong Kong 6" },
];

export const GALLERY_MY = [
  { src: "/images/gallery/my1.png", alt: "Malaysia 1" },
  { src: "/images/gallery/my2.png", alt: "Malaysia 2" },
  { src: "/images/gallery/my3.png", alt: "Malaysia 3" },
  { src: "/images/gallery/my4.png", alt: "Malaysia 4" },
  { src: "/images/gallery/my5.png", alt: "Malaysia 5" },
  { src: "/images/gallery/my6.png", alt: "Malaysia 6" },
  { src: "/images/gallery/my7.png", alt: "Malaysia 7" },
  { src: "/images/gallery/my8.png", alt: "Malaysia 8" },
];

export const GALLERY_COLLAB = [
  { src: "/images/gallery/co1.png", alt: "Collaboration 1" },
  { src: "/images/gallery/co2.png", alt: "Collaboration 2" },
  { src: "/images/gallery/co3.png", alt: "Collaboration 3" },
  { src: "/images/gallery/co4.png", alt: "Collaboration 4" },
  { src: "/images/gallery/co5.png", alt: "Collaboration 5" },
  { src: "/images/gallery/co6.png", alt: "Collaboration 6" },
];

export const TOUR_CITIES = [
  {
    city: "Jakarta",
    date: "February 4, 2026",
    country: "Indonesia",
    attendees: "400+",
    gradient: "from-brand-500 to-tech-green-600",
    position: { top: "55%", left: "65%" },
    gallery: GALLERY_ID,
    pattern: "/images/pattern/jakarta.webp",
  },
  {
    city: "Singapore",
    date: "March 11, 2026",
    country: "Singapore",
    attendees: "400+",
    gradient: "from-red-500 to-pink-600",
    position: { top: "45%", left: "70%" },
    gallery: GALLERY_SG,
    pattern: "/images/pattern/singapore.webp",
  },
  {
    city: "Manila",
    date: "April 9, 2026",
    country: "Philippines",
    attendees: "400+",
    gradient: "from-yellow-500 to-orange-600",
    position: { top: "35%", left: "75%" },
    gallery: GALLERY,
    pattern: "/images/pattern/manila.webp",
  },
  {
    city: "Ho Chi Minh",
    date: "May 6, 2026",
    country: "Vietnam",
    attendees: "400+",
    gradient: "from-indigo-500 to-purple-600",
    position: { top: "35%", left: "65%" },
    gallery: GALLERY_COLLAB,
    pattern: "/images/pattern/hochiminh.webp",
  },
  {
    city: "Kuala Lumpur",
    date: "June 10, 2026",
    country: "Malaysia",
    attendees: "400+",
    gradient: "from-emerald-500 to-teal-600",
    position: { top: "50%", left: "62%" },
    gallery: GALLERY_MY,
    pattern: "/images/pattern/malaysia.webp",
  },
  {
    city: "Bangkok",
    date: "June 25, 2026",
    country: "Thailand",
    attendees: "400+",
    gradient: "from-blue-500 to-cyan-600",
    position: { top: "40%", left: "68%" },
    gallery: GALLERY_COLLAB,
    pattern: "/images/pattern/thailand.webp",
  },
  {
    city: "Shenzhen",
    date: "July 10, 2026",
    country: "China",
    attendees: "400+",
    gradient: "from-purple-500 to-pink-600",
    position: { top: "40%", left: "60%" },
    gallery: GALLERY_CN,
    pattern: "/images/pattern/shenzhen.webp",
  },
];

export const PARTNERS = [
  {
    src: "/images/sponsors/LMNTRIX.webp",
    alt: "LMNTRIX",
    url: "https://lmntrix.com/",
  },
  {
    src: "/images/sponsors/XTREMAX.webp",
    alt: "Xtremax",
    url: "https://www.xtremax.com/",
  },
  {
    src: "/images/sponsors/TrendMicro.webp",
    alt: "TrendMicro",
    url: "https://www.trendmicro.com/",
  },
  {
    src: "/images/sponsors/ProofPoint.webp",
    alt: "ProofPoint",
    url: "https://www.proofpoint.com/",
  }
];

export const LOCATION_DATA = {
  title: "Pullman Ciawi Vimala Hills Resort ",
  address: "Jl. Raya Puncak, Gadog, Megamendung , 16770 Bogor Indonesia",
  date: "4-5 February 2026",
  room: "Keluak Room, Vimala Ballroom, Vimala Ballroom Foyer",
  // image: "/images/venue/jakarta.webp", // Main image displayed in the section
  images: [
    { src: "/images/venue/pullman-entrance.jpg", alt: "Pullman Ciawi Vimala Hills Resort - Entrance" },
    { src: "/images/venue/pullman-ballroom.jpg", alt: "Pullman Ballroom" },
    { src: "/images/venue/pullman-pool.jpg", alt: "Pullman Pool" },
    { src: "/images/venue/pullman-bedroom.jpg", alt: "Pullman Bedroom" },
  ], // Gallery images for modal view
  googleMapsUrl: "https://maps.app.goo.gl/z156Fo2Rybj6x2GD9",
  additionalInfo: "Parking available on-site. Free Wi-Fi provided.",
};

export const EMAIL = "hello@thetehgroup.com";
export const MAILTO_URL = `mailto:${EMAIL}?subject=Become a Sponsor Nexus 2026&body=Hello, I am interested in becoming a sponsor for Nexus 2026 event. Could we discuss further details about the event? `;
export const PHONE_WHATSAPP = "+852 68019775";
export const WHATSAPP_MESSAGE =
  "Hi Nexus Team,\nI'm interested in joining as a sponsor for Nexus. Could we discuss the available sponsorship packages and next steps? Thank you!";

export const SPEAKERS = [
  {
    id: 1,
    fullName: "Dr. Anung Herlianto EC, SE.AKT, CA, MBA",
    jobTitle: "Deputy Commissioner and Head",
    company: "Otoritas Jasa Keuangan (OJK)",
    image: "/images/speakers/Dr-Anung-Herlianto.webp",
    isExclusive: true,
  },
  {
    id: 2,
    fullName: "Pinky Dezar Zulkarnain",
    jobTitle: "Director of IT",
    company: "Badan Pengawas Keuangan Republik Indonesia (BPK RI)",
    image: "/images/speakers/Pengky-Dezar.webp",
    isExclusive: true,
  },
  {
    id: 3,
    fullName: "Mochammad Firdaus",
    jobTitle: "Director of Electronics Service System, Network, and Infrastructure",
    company: "Kementrian Investasi dan Hilirisasi",
    image: "/images/speakers/Mochammad-Firdaus.webp",
    isExclusive: true,
  },
  {
    id: 4,
    fullName: "Ashok Bajpai",
    jobTitle: "Chief Transformation Officer",
    company: "PT Pertamina Bina Medika IHC",
    image: "/images/speakers/Ahok-Bajpai.webp",
    isExclusive: true,
  },
  {
    id: 5,
    fullName: "Sendy Filemon",
    jobTitle: "Director of IT & Digital Experience",
    company: "PT Bank Sinarmas Tbk",
    image: "/images/speakers/Sendy-Filemon.webp",
  },
  {
    id: 6,
    fullName: "Benedict Sulaiman",
    jobTitle: "Director of IT",
    company: "Mandaya Hospital",
    image: "/images/speakers/Benedict-Sulaiman.webp",
  },
  {
    id: 7,
    fullName: "Dwi Prasetyo Minarto",
    jobTitle: "VP of IT",
    company: "PT Kilang Pertamina International",
    image: "/images/speakers/Dwi-Prasetyo.webp",
  },
  {
    id: 8,
    fullName: "Adhiguna Mahendra",
    jobTitle: "Director of Data and Artificial Intelligence",
    company: "Otorita Ibu Kota Nusantara",
    image: "/images/speakers/Adhiguna-Mahendra.webp",
  },
  {
    id: 9,
    fullName: "Dea Saka Kurnia Putra",
    jobTitle: "Vice Chair of the Permanent Committee on Cybersecurity and Critical Infrastructure Protection",
    company: "Indonesia Chamber of Commerce and Industry (KADIN)",
    image: "/images/speakers/Dea-Saka.webp",
  },
  {
    id: 10,
    fullName: "I Gede Darwin Atma Winarta",
    jobTitle: "Head of Digital Transformation",
    company: "BCA Life",
    image: "/images/speakers/Gede-Darwin.webp",
  },
  {
    id: 11,
    fullName: "Surya Adhi Saputra",
    jobTitle: "Country Digital and Technology Head for Indonesia, Philippines, and Thailand",
    company: "Haleon",
    image: "/images/speakers/Surya-Adhi.webp",
  },
  {
    id: 12,
    fullName: "Sigit Triwibowo",
    jobTitle: "Head of IT and Digital",
    company: "IKEA",
    image: "/images/speakers/Sigit-Triwibowo.webp",
  },
  {
    id: 13,
    fullName: "Indra S Adillah",
    jobTitle: "Head of IT and Digital",
    company: "Indonesia Air Asia",
    image: "/images/speakers/Indra-S-Adillah.webp",
  },
  {
    id: 14,
    fullName: "Darmadi",
    jobTitle: "Chief Information Officer",
    company: "Toyota Astra Motor",
    image: "/images/speakers/Darmadi.webp",
  }
];

export const AGENDA_DAY_1 = [
  {
    id: 1,
    time: "03:30 PM - 04:00 PM",
    title: "Registration",
    type: "registration",
    description: "Registration & PM Coffee Break",
  },
  {
    id: 2,
    time: "04:30 PM - 05:30 PM",
    title: "Panel Discussion",
    moderator: {
      name: "Jeffrey Teh",
      image: "/images/contacts/jeffreyteh.png",
      role: "CEO of TEH Group",
    },
    type: "session",
    // speaker: {
    //   name: "Dr. Sarah Chen",
    //   image: "/images/contacts/zen.png",
    //   role: "Chief AI Officer, Tech Innovations Asia",
    // },
    // description: "Exploring the latest trends and innovations in enterprise technology",
  },
  {
    id: 3,
    time: "05:30 PM",
    title: "Dinner & Networking Drink",
    type: "break",
    // moderator: {
    //   name: "Jeffrey Teh",
    //   image: "/images/contacts/jeffreyteh.png",
    //   role: "CTO, The TEH Group",
    // },
    // speakers: [
    //   {
    //     name: "Michael Rodriguez",
    //     image: "/images/contacts/ken.png",
    //     role: "VP of Cybersecurity",
    //   },
    //   {
    //     name: "Lisa Anderson",
    //     image: "/images/contacts/jeffreyteh.png",
    //     role: "CISO, SecureNet Corp",
    //   },
    // ],
    // description: "Industry leaders discuss the intersection of AI and cybersecurity",
  }
];

export const AGENDA_DAY_2 = [
  {
    id: 9,
    time: "08:00 AM",
    title: "Registration & AM Coffee Break",
    type: "registration",
    description: "Networking and registration",
  },
  {
    id: 10,
    time: "09:30 AM - 02:00 PM",
    title: "One on One Meeting",
    type: "meeting",
    // speaker: {
    //   name: "Michael Rodriguez",
    //   image: "/images/contacts/ken.png",
    //   role: "VP of Cybersecurity, Global Security Solutions",
    // },
    // description: "Deep dive into implementing zero trust security models",
  },
  {
    id: 13,
    time: "09:15 AM - 10:00 AM",
    title: `Session 1`,
    type: "session",
    // moderator: {
    //   name: "Oskar Riandi",
    //   image: "/images/contacts/ken.png",
    //   role: "KORIKA",
    // },
    speakers: [
      {
        name: "Pinky Dezar Zulkarnain",
        image: "/images/speakers/Pengky-Dezar.webp",
        role: "Director of IT - BPK RI",
      },
      {
        name: "Sendy Filemon",
        image: "/images/speakers/Sendy-Filemon.webp",
        role: "Director of IT & Digital Experience - PT Bank Sinarmas Tbk",
      },
      {
        name: "Benedict Sulaiman",
        image: "/images/speakers/Benedict-Sulaiman.webp",
        role: "Director of IT - Mandaya Hospital",
      },
      {
        name: "Dwi Prasetyo Minarto",
        image: "/images/speakers/Dwi-Prasetyo.webp",
        role: "VP of IT - PT Kilang Pertamina International",
      }
    ],
    description: `Panel Discussion "AI-Powered Transformation: Building Smart, Secure, and Scalable Systems for 2026"`,
  },
  {
    id: 14,
    time: "10:00 AM - 10:30 AM",
    title: `Session 2`,
    type: "session",
    speakers: [
      {
        name : "Dr. Anung Herlianto EC, SE.AKT, CA, MBA",
        image: "/images/speakers/Dr-Anung-Herlianto.webp",
        role: `Deputy Commissioner and Head of OJK Institute (Otoritas Jasa Keuangan)`,
      }
    ],
    description: `Key Notes : "Building Trust and Resilience in the Age of AI: The Regulatory Perspective"`,
  },
  {
    id: 15,
    time: "10:30 AM - 10:45 AM",
    title: "Coffee Break",
    type: "break"
  },
  {
    id: 16,
    time: "10:45 AM - 11:15 AM",
    title: "Session 3",
    type: "session",
    speakers: [
      {
        name: `Mochammad Firdaus`,
        image: "/images/speakers/Mochammad-Firdaus.webp",
        role: `Director of Electronics Service System, Network, and Infrastructure - Kementrian Investasi dan Hilirisasi`,
      }
    ],
    description: "Modernizing Public Investment Services: Building Fast, Transparent, and Integrated Digital Systems for Global Competitiveness",
  },
  {
    id: 17,
    time: "11:15 AM - 11:45 AM",
    title: "Sponsor Demo",
    type: "session"
  },
  {
    id: 18,
    time: "11:45 AM - 01:00 PM",
    title: "Lunch Break",
    type: "break"
  },
  {
    id: 19,
    time: "01:00 PM - 01:30 PM",
    title: "Session 4",
    type: "session",
    speaker: {
      name: "Adhiguna Mahendra",
      image: "/images/speakers/Adhiguna-Mahendra.webp",
      role: "Director of Data and Artificial Intelligence - Otorita Ibu Kota Nusantara",
    },
    description: "AI City: Building Nusantara from Data and Intelligence",
  },
  {
    id: 20,
    time: "01:30 PM - 02:00 PM",
    title: "Session 5",
    type: "session",
    speakers: [
      {
        name: `Dea Saka Kurnia Putra`,
        image: "/images/speakers/Dea-Saka.webp",
        role: `Vice Chair of the Permanent Committee on Cybersecurity and Critical Infrastructure Protection - Indonesia Chamber of Commerce and Industry (KADIN)`,
      }
    ],
    description: "Strengthening Indonesia’s Cyber Resilience: Strategic Policy, Industry Coordination, and Infrastructure Protection in the AI Era",
  },
  {
    id: 21,
    time: "02:00 PM - 02:30 PM",
    title: "Session 6",
    type: "session",
    speakers: [
      {
        name: `Ashok Bajpai`,
        image: "/images/speakers/Ahok-Bajpai.webp",
        role: `Chief Transformation Officer - PT Pertamina Bina Medika IHC`,
      }
    ],
    description: "Healthcare Transformation at Scale: Building a Smart, Agile, and Efficient National Hospital Network",
  },
  {
    id: 22,
    time: "02:30 PM - 03:10 PM",
    title: "Session 7",
    type: "session",
    // moderator: {
    //   name: "Prakoso Bhairawa PUTERA",
    //   image: "/images/contacts/ken.png",
    // },
    speakers: [
      {
        name: `I Gede Darwin Atma Winarta`,
        image: "/images/speakers/Gede-Darwin.webp",
        role: `Head of Digital Transformation - BCA Life`,
      },
      {
        name: `Surya Adhi Saputra`,
        image: "/images/speakers/Surya-Adhi.webp",
        role: `Country Digital and Technology Head for Indonesia, Philippines, and Thailand - Haleon`,
      },
      {
        name: `Sigit Triwibowo`,
        image: "/images/speakers/Sigit-Triwibowo.webp",
        role: `Head of IT and Digital - IKEA`,
      }
    ],
    description: "Fireside Chat - Driving Intelligent Transformation: Lessons from Leading Industries",
  },
  {
    id: 23,
    time: "03:10 PM - 04:10 PM",
    title: "Session 8 : Roundtable Discussions",
    type: "roundtable",
    roundtables: [
      {
        title: `Roundtable 1 - "AI Adoption in Large-Scale Enterprises: Strategy, Governance, and Real Business Impact"`,
        speakers: [
          {
            name: `Indra S Adillah`,
            image: "/images/speakers/Indra-S-Adillah.webp",
            role: `Head of IT and Digital - Indonesia Air Asia`,
          }
        ]
      },
      {
        title: `Roundtable 2 - "AI Adoption in Large-Scale Enterprises: Strategy, Governance, and Real Business Impact"`,
        speakers: [
          {
            name: `Darmadi`,
            image: "/images/speakers/Darmadi.webp",
            role: `Chief Information Officer - Toyota Astra Motor`,
          }
        ]
      }
      // {
      //   title: "Roundtable 3",
      //   speakers: [
      //     {
      //       name: `Widianty`,
      //       image: "/images/contacts/jeffreyteh.png",
      //       role: `Head of Tech - PT Kalbe Farma, Tbk`,
      //     }
      //   ]
      // }
    ]
  }
];
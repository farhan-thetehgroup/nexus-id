export const MENU_ITEMS = [
  { name: "Partners", id: "supported-by" },
  // { name: "Why", id: "why" },
  // { name: "Tour", id: "tours" },
  { name: "Speakers", id: "speakers" },
  { name: "Event Formats", id: "event-formats" },
  { name: "Agenda", id: "agenda" },
  { name: "Location", id: "location" },
  { name: "Contact", id: "contact" },
];

export const BRAND_LOGO = "/images/brand-logo/nexus-green.svg";
export const BRAND_LOGO_WHITE = "/images/brand-logo/nexus-teh-white.svg";
export const SPEED_PARTNERS_MARQUEE = 300000; // kecepatan scroll (ms)
export const LINK_REGISTER =
  "https://event.thetehgroup.com/-nexus-indonesia-2026/overview?token=ZT1jNTU3N2JiMy0wOTJkLTRjNjUtODIyNi0zMjUzODEwNDE4NGUmcmM9MUVFU0JEQkRQQg%3d%3d";

export const VIP_REGISTRATION_URL =
  "https://event.thetehgroup.com/nexus-indonesia-2027/overview?token=ZT0zNjczM2RmYi1iNjVlLTQzMmMtYjVmZi03YTk4ZDExZDQxMGYmcmM9VjhYNDZEWVI1MQ%3d%3d";

export const CONFERENCE_ONLY_REGISTRATION_URL =
  "https://event.thetehgroup.com/nexus-indonesia-2027-conference/overview?token=ZT1iZjE5N2VmYS05NTc1LTRiODUtOTgzNS02NWY0MzlkNTI1NTUmcmM9VTJJNUoyM0VNUg%3d%3d";

export const TICKET_OPTIONS = [
  {
    id: "vip",
    eyebrow: "Premium access",
    title: "VIP",
    copy: "Priority access and the full Nexus Indonesia 2027 experience.",
    href: VIP_REGISTRATION_URL,
  },
  {
    id: "conference-only",
    eyebrow: "Conference pass",
    title: "Conference Only",
    copy: "Access to the full-day conference program.",
    href: CONFERENCE_ONLY_REGISTRATION_URL,
  },
];
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
  },
  {
    src: "/images/sponsors/CleanStart.webp",
    alt: "Clean Start",
    url: "https://www.cleanstart.com/",
  },
  {
    src: "/images/sponsors/OrcaSecurity.webp",
    alt: "Orca Security",
    url: "https://orca.security",
  },
  {
    src: "/images/sponsors/Tanium.webp",
    alt: "Tanium",
    url: "https://www.tanium.com/",
  },
  {
    src: "/images/sponsors/Semperis.webp",
    alt: "Semperis",
    url: "https://www.semperis.com/",
  },
  {
    src: "/images/sponsors/TelinPro.webp",
    alt: "Telin Pro",
    url: "https://www.telin.net/en",
  },
  {
    src: "/images/sponsors/Equinix.webp",
    alt: "Equinix",
    url: "https://www.equinix.com/",
  },
  {
    src: "/images/sponsors/Datadog.webp",
    alt: "Datadog",
    url: "https://www.datadoghq.com/",
  },
  {
    src: "/images/sponsors/Tictag.webp",
    alt: "Tigtag",
    url: "https://www.tictag.io/id/",
  },
  {
    src: "/images/sponsors/Ofisgate.webp",
    alt: "Ofisgate",
    url: "https://ofisgate.com/",
  },
];

export const EVENT_FORMAT_GALLERY = {
  oneOnOne: [
    { src: "/images/event-formats/one-on-one.jpg", alt: "One-on-one meeting setup" },
    { src: "/images/event-formats/one-on-one-2.jpg", alt: "Expert consultation session" },
    { src: "/images/event-formats/one-on-one-3.jpg", alt: "Expert consultation session" },
  ],
  liveDemo: [
    { src: "/images/event-formats/live-demo-1.jpg", alt: "Live demonstration session" },
    { src: "/images/event-formats/live-demo-2.jpg", alt: "Product showcase" },
    { src: "/images/event-formats/live-demo-3.jpg", alt: "Technical demo" },
  ],
  workshop: [
    { src: "/images/event-formats/workshop-1.jpg", alt: "Interactive workshop" },
    { src: "/images/event-formats/workshop-2.jpg", alt: "Group activity" },
    { src: "/images/event-formats/workshop-3.jpg", alt: "Hands-on session" },
  ],
  conference: [
    { src: "/images/event-formats/conference-1.jpg", alt: "Keynote Speaker" },
    { src: "/images/event-formats/conference-2.jpg", alt: "Panel Discussion" },
    { src: "/images/event-formats/conference-3.jpg", alt: "Fireside Chat" },
  ],
  exhibition: [
    { src: "/images/event-formats/exhibition-1.jpg", alt: "Exhibition hall" },
    { src: "/images/event-formats/exhibition-2.jpg", alt: "Exhibition hall" },
    { src: "/images/event-formats/exhibition-3.jpg", alt: "Exhibition hall" },
  ],
};

export const SUPPORTED_BY = [
  // Add government logos here
  // Example structure:
  {
    src: "/images/supports/BPK-RI.webp",
    alt: "Badan Pengawas Keuangan Republik Indonesia (BPK RI)",
    url: "https://www.bpk.go.id/",
  },
  {
    src: "/images/supports/OJK.webp",
    alt: "Otoritas Jasa Keuangan (OJK)",
    url: "https://www.ojk.go.id/",
  },
  {
    src: "/images/supports/BSSN.webp",
    alt: "Badan Siber dan Sandi Negara (BSSN)",
    url: "https://www.bssn.go.id/",
  },
  {
    src: "/images/supports/Kementerian-Investasi-dan-Hilirisasi.webp",
    alt: "Kementrian Investasi dan Hilirisasi",
    url: "https://bkpm.go.id/",
  },
  {
    src: "/images/supports/KADIN-Indonesia.webp",
    alt: "Kamar Dagang dan Industri (KADIN) Indonesia",
    url: "https://kadin.id/",
  },
];

export const LOCATION_DATA = {
  title: "Royal Tulip Gunung Geulis Resort and Golf",
  address: "Jl. Bukit Geulis, Nagrak, Gadog-Bogor, Kabupaten Bogor, Jawa Barat 16720",
  date: "24 March 2027",
  room: "Royal Tulip Ballroom South, Royal Tulip Ballroom West, Royal Tulip Ballroom East",
  // image: "/images/venue/jakarta.webp", // Main image displayed in the section
  images: [
    { src: "/images/venue/royal-tulip-enterence.jpg", alt: "Royal Tulip Gunung Geulis Resort and Golf - Entrance" },
    { src: "/images/venue/royal-tulip-ballroom.jpg", alt: "Royal Tulip Ballroom South" },
    { src: "/images/venue/royal-tulip-drone.jpg", alt: "Royal Tulip Gunung Geulis Resort and Golf - Drone" },
    { src: "/images/venue/royal-tulip-food.jpg", alt: "Royal Tulip Gunung Geulis Resort and Golf - Food" },
  ], // Gallery images for modal view
  googleMapsUrl: "https://maps.app.goo.gl/YmMWRHamWmRfqyjy9",
  additionalInfo: "Parking available on-site. Free Wi-Fi provided.",
};

export const EMAIL = "hello@thetehgroup.com";
export const MAILTO_URL = `mailto:${EMAIL}?subject=Become a Sponsor Nexus 2026&body=Hello, I am interested in becoming a sponsor for Nexus 2026 event. Could we discuss further details about the event? `;
export const PHONE_WHATSAPP = "+852 68019775";
export const WHATSAPP_MESSAGE =
  "Hi Nexus Team,\nI'm interested in joining as a sponsor for Nexus. Could we discuss the available sponsorship packages and next steps? Thank you!";

/* 2027 speaker lineup - client table drop (chat screenshots): 27 rows.
   Names / titles / companies are verbatim from the table; corporate email
   columns stay in the client's spreadsheet, not on the public site.
   Headshots pending - cards fall back to initials until the drop arrives.
   Per-entry comment carries the session role tag from the table
   (Opening / Keynote / Moderator / Fireside / Panelist / Presentation n)
   for when the 2027 programme is assembled. */
export const SPEAKERS = [
  {
    id: 1, // Opening
    fullName: "Uli Agustina",
    jobTitle: "Kepala Departemen Pengawasan Inovasi Teknologi Sektor Keuangan, Aset Keuangan Digital & Aset Kripto",
    company: "OJK",
  },
  {
    id: 2, // Keynote
    fullName: "Setiaji",
    jobTitle: "Director of Information Technology",
    company: "BPJS Kesehatan",
  },
  {
    id: 3, // Moderator
    fullName: "Pitra Saputra",
    jobTitle: "Head of Data Management",
    company: "Allo Bank",
  },
  {
    id: 4, // Panelist
    fullName: "Hendy Gunawan",
    jobTitle: "Enterprise Data Governance and Data Protection Division Head",
    company: "Bank Sinarmas",
  },
  {
    id: 5, // Panelist
    fullName: "Suhelmy Syaifuddin",
    jobTitle: "VP - Head of Data Analytics & AI ML",
    company: "Indosat",
  },
  {
    id: 6, // Panelist
    fullName: "Yudhi Dwi Cahyono",
    jobTitle: "Department Head of Data & AI Governance",
    company: "Bank BRI",
  },
  {
    id: 7, // Moderator
    fullName: "Rickent Putra Haki",
    jobTitle: "VP of Technology",
    company: "InJourney Hospitality",
  },
  {
    id: 8, // Fireside
    fullName: "Siauw Yohanes Darmawan",
    jobTitle: "Sr. GM IT",
    company: "Combiphar",
  },
  {
    id: 9, // Moderator
    fullName: "Varuna De Wass Gunawardena",
    jobTitle: "Head of IT",
    company: "Agrinesia Raya",
  },
  {
    id: 10, // Panelist
    fullName: "Rajesh Grover",
    jobTitle: "Group Chief Digital & Technology Officer",
    company: "Domino's Pizza Indonesia",
  },
  {
    id: 11, // Panelist
    fullName: "Dify Purba",
    jobTitle: "Head of Digital & AI Strategy",
    company: "JEC Eye Hospitals and Clinics",
  },
  {
    id: 12, // Moderator
    fullName: "Jerry Pratama Hakim",
    jobTitle: "Head of Information Technology",
    company: "KPN Corp",
  },
  {
    id: 13, // Panelist - name cell unreadable in every OCR pass; derived from the corporate email yoke.susatyo@pertamina.com - CONFIRM spelling with the client
    fullName: "Yoke Susatyo",
    jobTitle: "Trusted Adviser to Business Support Director",
    company: "Pertamina",
  },
  {
    id: 14, // Panelist
    fullName: "Joseph L",
    jobTitle: "IT and Digital Transformation Director",
    company: "PT Darma Henwa",
  },
  {
    id: 15, // Moderator
    fullName: "Erwin Susilo",
    jobTitle: "Head of Digital Transformation",
    company: "PT Sinar Mitra Sepadan Finance (SMSFinance)",
  },
  {
    id: 16, // Panelist
    fullName: "Andreas Tanadi",
    jobTitle: "Head, Business Transformation",
    company: "MSIG",
  },
  {
    id: 17, // Panelist
    fullName: "Rachmadi Gustrian",
    jobTitle: "Chief Transformation",
    company: "IFG",
  },
  {
    id: 18, // Panelist
    fullName: "Henri H.",
    jobTitle: "Senior Vice President - Head of Strategic Transformation, Cybersecurity & AI GRC Enthusiast",
    company: "Adira Finance",
  },
  {
    id: 19, // Presentation 1 - company cell literally "BUMN" (generic), flagged for the client to name the actual institution
    fullName: "Nikson Putra",
    jobTitle: "Information Security Division Head (SVP)",
    company: "BUMN",
  },
  {
    id: 20, // Presentation 2
    fullName: "Guntur Pratomo",
    jobTitle: "CISO",
    company: "Bank Sinarmas",
  },
  {
    id: 21, // Presentation 3
    fullName: "Sachunaden Prabhu",
    jobTitle: "CISO",
    company: "Bank Sahabat Sampoerna",
  },
  {
    id: 22, // Presentation 4
    fullName: "Ridwan Santoso",
    jobTitle: "IT Security Operations Department Head",
    company: "Allo Bank",
  },
  {
    id: 23, // Presentation 5
    fullName: "Anas Dwi Vidianto",
    jobTitle: "Cloud Cybersecurity & Operation Division Head",
    company: "Astra International",
  },
  {
    id: 24, // Presentation 6
    fullName: "Nuzli Hernawan",
    jobTitle: "Business Director of Infrastructure, Cloud & Cybersecurity",
    company: "Telkomsigma",
  },
  {
    id: 25, // Presentation 7
    fullName: "Dani Aquarius Febrianda",
    jobTitle: "AVP - Head of Information Security (BISO)",
    company: "Prudential Syariah",
  },
  {
    id: 26, // Presentation 8
    fullName: "Nico Restu Pratama",
    jobTitle: "Head of Cybersecurity",
    company: "Kideco Agung Jaya",
  },
  {
    id: 27, // Presentation 9 - title/email row is cut off at the bottom edge of the screenshot
    fullName: "Eryk Budi Pratama",
    jobTitle: undefined,
    company: "KADIN",
  }
];

export const AGENDA_DAY_1 = [
  {
    id: 1,
    time: "02:30 PM - 03:00 PM",
    title: "Check-in & Registration",
    type: "registration",
    description: "Check-in & Registration",
  },
  {
    id: 2,
    time: "03:30 PM - 05:30 PM",
    title: "Welcoming Speech",
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
    time: "03:40 PM - 04:10 PM",
    title: "Session 1",
    type: "session",
    // moderator: {
    //   name: "Jeffrey Teh",
    //   image: "/images/contacts/jeffreyteh.png",
    //   role: "CTO, The TEH Group",
    // },
    speakers: [
      {
        name: "Theo Sutarto",
        image: "/images/speakers/Theo-Sutarto.webp",
        role: "Assistant Deputy Minister, Coordinating Ministry for Economic Affairs of the Republic of Indonesia",
      },
    ],
    description: "AI Governance for Sustainable Economic Growth: Policy Directions for Indonesia’s Digital Future",
  },
  {
    id: 4,
    time: "04:10 PM - 04:40 PM",
    title: "Sponsor Presentation",
    type: "demo-session",
    image: "/images/sponsors/CleanStart.webp",
    speakers: [
      {
        name: "Nelish Jain",
        image: "/images/speakers/Nelish-Jain.webp",
        role: "Co-Founder and CEO -Clean Start",
      },
    ],
  },
  {
    id: 5,
    time: "04:40 PM - 05:10 PM",
    title: "Sponsor Presentation",
    type: "demo-session",
    image: "/images/sponsors/XTREMAX.webp",
    speakers: [
      {
        name: "James Leong",
        image: "/images/speakers/James-Leong.webp",
        role: "Ceo and Founder - Xtremax",
      },
    ],
    description: "Bridging the Gaps in AI Adaption",
  },
  {
    id: 6,
    time: "05:10 PM - 05:40 PM",
    title: "Sponsor Presentation",
    type: "demo-session",
    speakers: [
      {
        name: "Billy Yuliadi",
        image: "/images/speakers/Billy-Yuliadi.webp",
        role: "Technical Director - Tanium",
      },
    ],
    image: "/images/sponsors/Tanium.webp",
    description: "Stay Ready So You Don’t Need to Get Ready",
  },
  {
    id: 7,
    time: "05:40 PM - 06:10 PM",
    title: "Sponsor Presentation",
    type: "demo-session",
    speakers: [
      {
        name: "Michael Choo",
        image: "/images/speakers/Michael-Choo.webp",
        role: "Senior Solutions Architect - Sempiris APJ",
      },
    ],
    image: "/images/sponsors/Semperis.webp",
    description: "Mitigating Risk to the #1 Target for Attackers: Your Enterprise Identity System",
  },
  {
    id: 8,
    time: "06:10 PM",
    title: "Dinner / Networking Drink",
    type: "break"
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
    time: "09:15 AM - 09:45 AM",
    title: `Session 1 `,
    type: "session",
    speakers: [
      {
        name: "Drs. Slamet Aji Pamungkas, M.Eng",
        image: "/images/speakers/Slamet-Aji.webp",
        role: "Deputi Bidang Keamanan Siber dan Sandi Perekonomian - Badan Siber dan Sandi Negara (BSSN)",
      },
    ],
    description: `The Future of Cybersecurity in Supporting Sustainable Economic Growth`,
  },
  {
    id: 14,
    time: "09:45 AM - 10:30 AM",
    title: `Session 2`,
    type: "session",
    moderator: {
      name: "Adhiguna Mahendra",
      image: "/images/speakers/Adhiguna-Mahendra.webp",
      role: "Director of Data AI - Bunda Mulia University",
    },
    speakers: [
      {
        name: "Pinky Dezar Zulkarnain",
        image: "/images/speakers/Pengky-Dezar.webp",
        role: "Director of IT - BPK RI",
      },
      {
        name: "Purnama Sulfa",
        image: "/images/speakers/Purnama-Sulfa.webp",
        role: "Head of Chief Information Security Division - Mandiri Taspen",
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
    description: `Panel Discussion “AI-Powered Transformation: Building Smart, Secure, and Scalable Systems for 2026”"`,
  },
  {
    id: 15,
    time: "10:30 AM - 11:00 AM",
    title: "Session 3",
    type: "session",
    speakers: [
      {
        name : "Dr. Anung Herlianto EC, SE.AKT, CA, MBA",
        image: "/images/speakers/Dr-Anung-Herlianto.webp",
        role: `Deputy Commissioner and Head of OJK Institute (Otoritas Jasa Keuangan)`,
      }
    ],
    description: "Building Trust and Resilience in the Age of AI: The Regulatory Perspective",
  },
  {
    id: 16,
    time: "11:00 AM - 12:00 PM",
    title: "PM Coffee Break",
    type: "break"
  },
  {
    id: 17,
    time: "11:00 AM - 11:20 AM",
    title: "Demo Session",
    type: "demo-session",
    image: "/images/sponsors/OrcaSecurity.webp",
    description: "Agentless Cloud Security by Orca Security",
  },
  {
    id: 18,
    time: "11:20 AM - 11:40 AM",
    title: "Demo Session",
    type: "demo-session",
    image: "/images/sponsors/Semperis.webp",
    description: "Active Directory Protection",
  },
  {
    id: 19,
    time: "11:40 AM - 12:00 PM",
    title: "Demo Session",
    type: "demo-session",
    image: "/images/sponsors/LMNTRIX.webp",
    description: "MDR and Active Defense",
  },
  {
    id: 20,
    time: "12:00 PM - 01:00 PM",
    title: "Lunch Break",
    type: "break"
  },
  {
    id: 21,
    time: "01:00 PM - 01:30 PM",
    title: "Sponsor Presentation",
    type: "demo-session",
    image: "/images/sponsors/TelinPro.webp",
    description: "TelinPro",
  },
  
  {
    id: 22,
    time: "01:30 PM - 02:00 PM",
    title: "Session 4",
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
    id: 23,
    time: "02:00 PM - 02:30 PM",
    title: "Session 5",
    type: "session",
    speakers: [
      {
        name: `Dea Saka Kurnia Putra`,
        image: "/images/speakers/Dea-Saka.webp",
        role: `Cybersecurity Expert`,
      }
    ],
    description: "Strengthening Indonesia’s Cyber Resilience: Strategic Policy, Industry Coordination, and Infrastructure Protection in the AI Era",
  },
  {
    id: 24,
    time: "02:30 PM - 03:00 PM",
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
    id: 25,
    time: "03:00 PM - 03:40 PM",
    title: "Session 7",
    type: "session",
    moderator: {
      name: "Raymond Tjahja",
      image: "/images/speakers/Raymond-Tjahja.webp",
    },
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
      }
    ],
    description: "Fireside Chat - Driving Intelligent Transformation: Lessons from Leading Industries",
  },
  {
    id: 26,
    time: "03:40 PM - 04:20 PM",
    title: "Session 8 : Roundtable Discussions",
    type: "roundtable",
    roundtables: [
      {
        title: `Roundtable 1 - "AI Adoption in Large-Scale Enterprises: Strategy, Governance, and Real Business Impact"`,
        speakers: [
          {
            name: `Donny Wu`,
            image: "/images/speakers/Donny-Wu.webp",
            role: `Vice President of Digital Initiatives and Solutions - Sinarmas Land`,
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
      },
      {
        title: `Roundtable 3 - "Leveraging Generative AI to Personalize Customer Experience in Life Sciences and Healthcare"`,
        speakers: [
          {
            name: `Widianty`,
            image: "/images/speakers/Widianty.jpeg",
            role: `Head of Tech - PT Kalbe Farma, Tbk`,
          }
        ]
      }
    ]
  }
];
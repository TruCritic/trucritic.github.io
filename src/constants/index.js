import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitIcon5,
    benefitIcon6,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    github,
    yourlogo,
    trucritic,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Concepts",
      url: "#concepts",
    },
    {
      id: "2",
      title: "Why TruCritic",
      url: "#why trucritic",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "Document",
      url: "#document",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Install",
      url: "#install",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Interactive Food Maps",
      text: "Discover hidden gems and popular eateries through an interactive map.",
      backgroundUrl: "assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: trucritic,
    },
    {
      id: "1",
      title: "Receipts Validation",
      text: "Users can only review a restaurant if they have a valid receipt, ensuring the authenticity of reviews.",
      backgroundUrl: "assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: trucritic,
      light: true,
    },
    {
      id: "2",
      title: "Connect with Fellow Foodies",
      text: "Friend other users, exchange or trade coupons, and share your culinary discoveries. Build your foodie network and community within TruCritic.",
      backgroundUrl: "assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: trucritic,
    },
    {
      id: "3",
      title: "Authentic Feedback, Instantly",
      text: "Post and read reviews in real-time. Experience the latest dining trends and opinions as they happen.",
      backgroundUrl: "assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: trucritic,
      light: true,
    },
    {
      id: "4",
      title: "Tailored to Your Taste",
      text: "Get recommendations based on your preferences and past reviews. We track what you love, guiding you to your next great meal.",
      backgroundUrl: "assets/benefits/card-5.svg",
      iconUrl: benefitIcon5,
      imageUrl: trucritic,
    },
    {
      id: "5",
      title: "Earn as You Explore",
      text: "Participate in exciting quests and challenges. Earn points, badges, and that showcase your status and achievements in the TruCritiverse.",
      backgroundUrl: "assets/benefits/card-6.svg",
      iconUrl: benefitIcon6,
      imageUrl: trucritic,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "https://discord.gg/J6V2cfyf",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "https://twitter.com/TruCritic_xyz",
    },
    {
      id: "2",
      title: "Github",
      iconUrl: github,
      url: "https://github.com/TruCritic",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    // {
    //   id: "4",
    //   title: "Facebook",
    //   iconUrl: facebook,
    //   url: "#",
    // },
    
  ];
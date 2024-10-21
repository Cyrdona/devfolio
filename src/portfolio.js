/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pierre Behanzin",
  title: "Salut, moi c'est Pierre",
  subTitle: emoji(
    "🚀 En tant que développeur Front-End, expert en support informatique et réseau, je m'intéresse à divers domaines tels que le développement, l'IoT et la mise en place de solutions informatiques. Dynamique et engagé, j'apprécie le travail d'équipe car il représente pour moi une opportunité constante de partager des connaissances et d'apprendre des autres."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wUn8T96jfWq3Ajz9JA3ThtmCvXxLwV8k/view?usp=sharing", // Set to empty to hide the button

  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/cyrdona",
  linkedin: "https://www.linkedin.com/in/behanzinpierrecyr/",
  gmail: "pierrecyriaquedona@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/pierrecyrbhn",
  whatsapp: "https://wa.me/22961355916",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais ", 

  subTitle: "UN DEVELOPPEUR AMOUREUX DE LA TECH QUI VEUT EXPLORER TOUTES LES TECHNOLOGIES",
  skills: [
    emoji("⚡ Développer des interfaces utilisateur hautement interactives pour vos applications web et mobiles."),
    emoji("⚡ Applications Web , ERP & CRM Open Source "),
    emoji("⚡ Solutions Applicatives Open Source: NextCloud, GitHub, Frappe-Erpnext, OBS studio, GLPI, Dolibarr.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Sql-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Cpanel",
      fontAwesomeClassname: "fab fa-cpanel"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Windows 11",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Microsoft Word",
      fontAwesomeClassname: "far fa-file-word"
    },
    {
      skillName: "Microsoft Excel",
      fontAwesomeClassname: "far fa-file-excel"
    },
    {
      skillName: "Microsoft PowerPoint",
      fontAwesomeClassname: "far fa-file-powerpoint"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut CERCO BENIN",
      logo: require("./assets/images/cercologo.png"),
      subHeader: "Licence en Informatique de Gestion",
      duration: "Septembre 2017 - Juillet 2020",
      desc: "THEME: Conception d'un feu intelligent favorisant la libre circulation des piétons en zone de forte affluence : cas de la Haie-Vive",   
    },
    {
      schoolName: "OpenClassRoom",
      logo: require("./assets/images/openclassrooms.png"),
      subHeader: "Certification en ligne",
      // duration: "September 2013 - April 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: [],
      descBullets: [
        "Apprenez à programmer en Python Certificat de réussite en Montez un serveur de fichiers sous Linux",
        "Certificat de réussite en Montez un serveur de fichiers sous linux"
      ]

    },
    {
      schoolName: "Udemy",
      logo: require("./assets/images/udemylogo.png"),
      subHeader: "Certification en ligne",
      // duration: "September 2013 - April 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Certificat sur Conception de bases de données et Langage SQL"],
      descBullets: ["Certificat sur la Formation Git et GitHub: de Débutant à Confirmé"]
    },
    {
      schoolName: "Coursera",
      logo: require("./assets/images/courseralogo.png"),
      subHeader: "Certification en ligne",
      // duration: "September 2013 - April 2017",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "System Administration and IT Infrastructure Services",
        "Google IT Support Professional Certificate",
        "Agile with Atlassian Jira"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "WordPress",
      progressPercentage: "90%"
    },
    {
      Stack: "Laravel",
      progressPercentage: "50%"
    },
    {
      Stack: "Frontend Mobile",
      progressPercentage: "80%"
    },
    {
      Stack: "Maintenance Informatique",
      progressPercentage: "99%"
    },
    {
      Stack: "Odoo",
      progressPercentage: "60%"
    }
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Assistant de Formateur",
      company: "Ministère de l'Agriculture de la Production Animale et Halieutique de TOGO",
      companylogo: require("./assets/images/tg.jpg"),
      date: "11 au 29 Décembre 2019",
      desc: "Projet Telefood à Adéta au TOGO.",
      descBullets: [
        "Formation des producteurs locaux sur la mise en place d’un business plans",
        "Suivie des coopératives pour la mise en place d’organigramme hiérarchique afin de bien structurer les coopératives",
        "Conception de Logo, Slogan pour les Coopérative",
        "Formation sur le marketing"
      ]
    },
    {
      
      role: "Stage Professionnel",
      company: "Tribunal de Commerce de Cotonou",
      companylogo: require("./assets/images/tcc.png"),
      date: "22 Octobre 2020 à 22 Mars 2021",
      desc: "Se fut ma tout première insertion dans la vie professionnel hors cadre universitaire.",
      descBullets: [
        "Maintenance des Ordinateurs",
        "Maintenance des Scanneur et Impriment",
        "Support réseau",
        "Mise à jour des fiches de procès"
      ]
    },
    {
      role: "Stage Professionnel",
      company: "Banque BIIC",
      companylogo: require("./assets/images/bi.png"),
      date: "22 Mars 2021 à 29 Avril 2022",
      desc: ".",
      descBullets: [
        "Installation des logiciels métiers (Utilitaire de la Banque)",
        "Mise en réseau des ordinateurs, des imprimantes et scanneur",
        "Maintenance hardware et software",
        "Installation et configuration de MONEYGRAM Support Réseau Niveau 1",
        "Support Helpdesk",
        "Assistance a distances des utilisateurs",
        "Installation des Scanneur Cheque",
        "Installation et personnalisation de GLPI (Gestionnaire Libre de Parc Informatique) sur Ubuntu Server",
      ]
    },
    {
      role: "Consultant Developpeur Freelance",
      company: "CBOX Sarl",
      companylogo: require("./assets/images/favicon..png"),
      date: "Depuis Aout 2022 jusqu'aujourd'hui",
      desc: "Projet : Étude du déploiement d’un Réseau LAN et conception d'App Web ",
      descBullets: [
      "Survey",
      "Rédaction du rapport technique",
      "Proposition d’offre technique",
      "Initiation interconnexion LAN",
      "Mise en place des câbles, étiquetage, pose des prises informatiques",
      "Installation des machines",
      "Installation de la baie informatique et du server",
      "Installation de camera",
        
      ]
    }, 
    {
      role: "Technicien Informatique",
      company: "ECOWAS/CEDEAO",
      companylogo: require("./assets/images/ecowas.png"),
      date: "En Aout 2024 ",
      desc: "Evernement : Retraite des représentants résidents et permanent de la CEDEAO  ",
      descBullets: [
      "Technicien Informatique",
      "Bureautique",
      "Secrétariat ",
      "Protocole ",
      ]
    }, 
    {
      role: "Assistant CSP",
      company: "Ministère de l’Environnement, du Développement Durable et de la Transition Écologique",
      companylogo: require("./assets/images/mineddte.jpg"),
      date: "Depuis Septembre 2024 ",
      desc: "Programme : Rapport sur l’état d ‘avancement de la transition climatique en Côte d’Ivoire ",
      descBullets: [
      "Technicien Informatique",
      "Bureautique",
      "Membre de l’Équipe d ‘appui du Secrétaire Exécutif ",
      ]
    },
    
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Gros Projets",
  subtitle: "J'ai eu à travaillé sur des ERP & CRM",
  projects: [
    {
      image: require("./assets/images/dolibarrlogo.png"),
      projectName: "Dolibarr customiser pour de CBOX Sarl",
      projectDesc: "ERP Open Source pour gerer le personnel , les factures , les clients, les fournisseurs",
      footerLink: [
        {
          name: "Visitez le  Site web",
          url: "https://gestion.cbox.bj/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/githublogo.png"),
      projectName: "Mes projets de developpement",
      projectDesc: "Ensembles des projets web complet",
      footerLink: [
        {
          name: "Visitez le  Site web",
          url: "https://github.com/cyrdona/"
        }
      ]
    },
    {
      image: require("./assets/images/laravellogo.png"),
      projectName: "Framework Laravel",
      // footerLink: [
      //   {
      //     name: "Visitez le  Site web",
      //     url: "http:///"
      //   }
      // ]
    }, {
      image: require("./assets/images/odoo.png"),
      projectName: "Odoo",
    
    },
    {
      image: require("./assets/images/excel.png"),
      projectName: "Excel Avancé",
      projectDesc: "Utilisation des macros , PowerBi, pour la conception de fichier excel toujours plus dynamique",
      // footerLink: [
      //   {
      //     name: "Visitez le  Site web",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Réalisations et Certifications 🏆 "),
  subtitle:
    "Réalisations, Certifications, et quelques trucs sympas que j'ai faits !",

  achievementsCards: [
    {
      title: "Openclassrooms",
      subtitle:
        "J'ai eu quelques certifications sur OpenclassRooms",
      image: require("./assets/images/opc.jpg"),
      imageAlt: "Openclassroom",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/103yCHJmPb_4yk6zQ1MqjFMcCuBYPutR-/view?usp=sharing"
        },
  
      ]
    },

    {
      title: "SmartCheking",
      subtitle:
        "Je suis entrain de creer une application mobile de controle des entrer et sortie",
      image: require("./assets/images/smartcheking.png"),
      imageAlt: "SmartCheking",
      footerLink: [
        {
          name: "Quelque capture",
          url: "https://drive.google.com/file/d/1M29S54cAOiLf-VK6CiKcODkzzg5hheVo/view?usp=drive_link"
        },
  
      ]
    }, 
    {
      title: "IKARAN",
      subtitle:
        "Plateforme d'e-learning et de transcription en langue local",
      image: require("./assets/images/3.png"),
      imageAlt: "IKARAN",
      footerLink: [
        {
          name: "Quelque capture",
          url: "https://drive.google.com/file/d/1oCf5AfclZpaUyynL45QcrIo7yvSVsoXC/view?usp=sharing",
          url: "https://drive.google.com/file/d/1naTfxnaF_eI6VbRofbMMmcwu1qBcnaqb/view?usp=drive_link"
        },
  
      ]
    },
    {
      title: "ChatBot",
      subtitle:
        "J ai creer un chat bot",
      image: require("./assets/images/bot.png"),
      imageAlt: "ChatBot",
      footerLink: [
        {
          name: "Lien du ChatBot",
          url: "https://mediafiles.botpress.cloud/e325fda8-9aaf-4434-b528-66ab7ecdd333/webchat/bot.html"
        },
  
      ]
    },
    {
      title: "Excel ",
      subtitle:
        "J ai creer quelque application avec excel",
      image: require("./assets/images/téléchargement.png"),
      imageAlt: "excel",
      footerLink: [
        {
          name: "Gestion de Stock",
          url: "https://docs.google.com/spreadsheets/d/1-0fr1TPEbyO3KPeVKLh6_8t42IeSjHuI/edit?usp=drive_link&ouid=110007211230501464278&rtpof=true&sd=true"
        },
        {
          name: "Gestion de facture",
          url: "https://docs.google.com/spreadsheets/d/1-GFWzjeUnQLe-j0zMc5w16SueEw0w5PL/edit?usp=drive_link&ouid=110007211230501464278&rtpof=true&sd=true"
        },
  
      ]
    },
    
   {
      title: "Wordpress",
      subtitle: "J'ai concu des sites à l'aide du CMS Wordpress",
      image: require("./assets/images/wp.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Final Project",
          // url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  // displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  // blogs: [
  //   {
  //     // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
  //     title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
  //     description:
  //       "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
  //   },
  //   {
  //     // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
  //     title: "Why REACT is The Best?",
  //     description:
  //       "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  // title: "Discussions",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

  // talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     // slides_url: "https://bit.ly/saadpasta-slides",
  //     // event_url: "https://www.facebook.com/events/2339906106275053/"
  //   }
  // ],
  // display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  // title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // // Please Provide with Your Podcast embeded Link
  // podcast: [
  //   "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  // ],
  // display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-Moi ☎️"),
  subtitle:
    "Discuter d'un projet ou simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "+225 0720121218",
  email_address: "pierrecyriaquedona@gmail.com",
  email_address: "behanzinpierrecyriaque@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "@BehanzinPierre1", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};

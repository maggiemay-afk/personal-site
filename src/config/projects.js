import globe from "../images/globe.png"
import ambiance from "../images/ambiance.jpg"
import wowTrivia from "../images/wow-trivia.png"
import tiTacToeBlue from "../images/ticTacToeBlue.jpg"


export const projects = [

  {
    name: "Soundtrack Guessing",
    activeLink: true,
    link: "https://wow-soundtrack-guesser.web.app/",
    subtitle: "In progress",
    image: globe,
    imageAlt: "Image of a globe",
    description: "Use an interactive map to guess where the soundtrack is used in-game, in World of Warcraft.",
    techStack: "TypeScript, JavaScript (React), CSS, HTML.",
    otherTech: "React Image Mapper.",
    altLink: "https://github.com/hermanator608/wow-soundtrack-guesser",
    altLinkDesc: "See my progress on GitHub"
  },
  {
    name: "Ambiance.dev",
    activeLink: true,
    link: "https://ambiance.dev/",
    subtitle: "In progress: Capstone Project, Spring 2024.",
    image: ambiance,
    imageAlt: "Image of Headphones",
    description: "Updates to Ambiance.dev including: Initialize Firestore database, create administrative UI, enable authentication, add API routes, and more.",
    techStack: "TypeScript, JavaScript (React), CSS, HTML.",
    otherTech: "React Router.",
    altLink: "https://github.com/hermanator608/ambiance",
    altLinkDesc: "See my progress on GitHub"
  },
  {
    name: "Mount Trivia",
    subtitle: false,
    activeLink: true,
    link: "http://www.wow-mount-quiz.com/",
    image: wowTrivia,
    imageAlt: "World of Warcraft Logo",
    description: "Play a game of mount trivia, inspired by the popular RPG, World of Warcraft.",
    techStack: "TypeScript, Node.js, JavaScript (React), CSS, HTML.",
    otherTech: "Blizzard API, OpenAI API.",
    altLink: "https://github.com/maggiemay-afk/warcraftApp",
    altLinkDesc: "See the code on GitHub"
  },
  {
    name: "Tic Tac Toe",
    subtitle: false,
    activeLink: true,
    link: "/game",
    image: tiTacToeBlue,
    imageAlt: "tic tac toe board",
    description: "Play a game of tic tac toe!",
    techStack: "JavaScript (React), CSS, HTML.",
    otherTech: false,
    altLink: false,
    altLinkDesc: false
  }

]
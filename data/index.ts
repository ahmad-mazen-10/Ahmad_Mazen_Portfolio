import {
  hangman_game,
  memory_game,
  quiz_app,
  speech_text,
  test_speed,
  todo_app,
  fetch_repos,
  crud,
  dashboard_CAT,
} from "@/assets/index";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  // {
  //   id: 1,
  //   title: "I prioritize client collaboration, fostering open communication ",
  //   description: "",
  //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "justify-end",
  //   img: "/b1.svg",
  //   spareImg: "",
  // },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    img: hangman_game,
    title: "Hangman Game",
    desc: "Game with JS depend on the correct answer",
    linkDemo: "https://hangman-game-three-beta.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Hangman-Game",
  },
  {
    id: 2,
    img: memory_game,
    title: "Memory Game",
    desc: "Game with JS depend on memorize the opened cards",
    linkDemo: "https://memory-game-tau-pink.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Memory-Game",
  },
  {
    id: 3,
    img: quiz_app,
    title: "Quiz Application",
    desc: "Application with JS contain some question",
    linkDemo: "https://github.com/ahmad-mazen-10/Quiz-App",
    linkRepo: "https://quiz-app-coral-omega.vercel.app/",
  },
  {
    id: 4,
    img: speech_text,
    title: "Speech Text",
    desc: "Application with JS you can text any thing and it can speech with voice",
    linkDemo: "https://speech-text-tau.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Speech-Text",
  },
  {
    id: 5,
    img: test_speed,
    title: "Test Speed",
    desc: "Application with JS can test speed writing on keyboard",
    linkDemo: "https://typing-speed-test-app-eight.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Typing-Speed-Test-App",
  },
  {
    id: 6,
    img: todo_app,
    title: "To Do Application",
    desc: "Application with JS you can control your tasks on it",
    linkDemo: "https://to-do-app-iota-smoky.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/To-Do-App",
  },
  {
    id: 7,
    img: fetch_repos,
    title: "Fetch Repos",
    desc: "Application with JS you can input any github-username to fetch his repos",
    linkDemo: "https://fetch-repos-seven.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/Fetch-Repos",
  },
  {
    id: 8,
    img: crud,
    title: "CRUD System Operation",
    desc: "System store you can Create, Retrieve, Update, Delete any products",
    linkDemo: "https://cruds-gules.vercel.app/",
    linkRepo: "https://github.com/ahmad-mazen-10/CRUDS",
  },
  {
    id: 9,
    img: dashboard_CAT,
    title: "Dashboard CAT (Private) ",
    desc: "Dashboard Specialist to CAT_Reloaded to HRs can manage task's new member and Interview date",
    linkDemo: "https://www.linkedin.com/in/ahmadmazen060/details/experience/",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "MEAN Engineer Intern NTI",
    desc: "Assisted in the development of a web-based platform using MongoDB, Express, Angular, Node.Js ,enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    view:"https://www.linkedin.com/in/ahmadmazen060/details/experience/2506983939/multiple-media-viewer/?profileId=ACoAADvoktUBU79xvD2V-6yEi7vrOm59cXFK6ho&treasuryMediaId=1746248812744&type=IMAGE"
  },
  {
    id: 2,
    title: "Web Deveploment Intern NTI",
    desc: "Designed and developed Web app",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    view:"https://www.linkedin.com/in/ahmadmazen060/details/experience/2467633611/multiple-media-viewer/?profileId=ACoAADvoktUBU79xvD2V-6yEi7vrOm59cXFK6ho&treasuryMediaId=1725314076634&type=IMAGE"
  },
  {
    id: 3,
    title: "Supervisor Front-end at CAT_Reloaded",
    desc: "Leading the tasks and mentoring junior developers",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    view:""
  },
  {
    id: 4,
    title: "Techical Support at Catalyst1.0",
    desc: "Expalin and Practice  Git & GitHub topic in workshop ",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    view:"https://www.linkedin.com/feed/update/urn:li:activity:7214975463679524866/?originalSubdomain=ae"
  },
  {
    id: 5,
    title: "Front-end Developer at CAT_Reloaded",
    desc: "Execute the tasks web weekly .",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    view:"https://www.linkedin.com/feed/update/urn:li:activity:7214975463679524866/?originalSubdomain=ae"
  },
  {
    id: 5,
    title: "Compatitor at internal Hackathon CAT_Reloaded",
    desc: "Leading the team throughout the compitition with all stages",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    view:"https://www.linkedin.com/feed/update/urn:li:activity:7238989364578406401/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BGa8rJd9xQWimh7681yKgEQ%3D%3D"
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ahmad-mazen-10",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ahmadmazen060",
  },
  {
    id: 2,
    img: "/codewars.svg",
    link: "https://www.codewars.com/users/ahmad_mazen",
  },
];

export const mainProject = () => {
    return [
      {
        id: "1",
        name: "Watch E-Commerce",
        githubLink: "https://github.com/sanil011/watch-store",
        pic: "/watch.png",
        hostedLink: "https://watch-store-sand.vercel.app/",
        about:
          "An E-commerce app for watch. Users can filter the watch according to brand, price, strap and colour. Users can also add watches to their wishlists.",
        techStack: ["Next.js", "MUI", "Redux"],
      },
      {
        id: "2",
        name: "Code Share",
        githubLink: "https://github.com/sanil011/code-share",
        pic: "/codeboard.png",
        hostedLink: "https://code-share-ny9d.onrender.com",
        techStack: [
          "Reactjs",
          "ContextApi",
        //   "Tailwindcss",
          "Expressjs",
          "Socket.io",
        ],
        about:
          "A code editor in which by sharing the roomId you can write a code that your friend can also see in real time. There is also a doubt section where you can ask your doubt and chat with other memebers.",
      },
      {
        id: "3",
        name: "Sketch Board",
        githubLink: "https://github.com/sanil011/SketchBoard",
        pic: '/newSketch.png',
        hostedLink: "https://sketch-board-two.vercel.app/",
        techStack: ["Vite", "React", "Typescript", "Css"],
        about:
          "Express your creativity by sketching anything on the canvas.Save and download your artistic creations.Utilize the zoom functionality for a closer look.Enjoy the panning feature, offering the illusion of an infinite canvas.Take advantage of the Undo and Redo features for added convenience.",
      },
    ];
}

export const otherProjects = () => {
  return [
    {
      id: "1",
      title: "Tic Tac Toe",
      github: "https://github.com/sanil011/crafts",
      link: "https://crafts-jade.vercel.app/",
      tech: ["React", "Tailwindcss"],
      description:
        "Create a versatile TicTacToe game with pause/resume, a disabled initial restart button, and real-time status updates. Add a history feature for seamless backward and forward navigation during gameplay.",
    },
    {
      id: "2",
      title: "Calender Application",
      github: "https://github.com/sanil011/calender",
      link: "https://calender-99b907.netlify.app/",
      description:
        "Calender Application in which you can signup and login.Adding meeting , List of your all meeting,Delete a meeting,Update a specific meeting.",
      tech: ["React", "Firebase", "Redux"],
    },
    {
      id: "3",
      title: "Estate",
      github: "https://github.com/sanil011/Estates",
      link: "https://estates-teal.vercel.app/",
      description:
        "Fully responsive hotel booking website that i made from scratch using react,tailwind.See the hotel according to search and book them. See the amenities that give by the hotel. We can also give ratings to hotels and see the rating given by past customers.",
      tech: ["React", "Tailwind", "Redux", "MUI"],
    },
    {
      id: "4",
      title: "Sheets",
      github: "https://github.com/sanil011/Estates",
      link: "https://sanil011.github.io/ExcelClone/",
      description:"This tool offers a comprehensive range of functionalities, including isolated cell text formatting for precise customization. It enables seamless cell-to-cell relationships via formulas, ensuring that changes in one cell automatically update dependent cells, with warnings for cyclic relationships.",
      tech: ["Javascript","CSS","HTML"],
    },
  ];
}

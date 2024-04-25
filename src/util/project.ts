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
        pic: '/sketch.png',
        hostedLink: "https://sketch-board-two.vercel.app/",
        techStack: ["Vite", "React", "Typescript", "Css"],
        about:
          "Express your creativity by sketching anything on the canvas.Save and download your artistic creations.Utilize the zoom functionality for a closer look.Enjoy the panning feature, offering the illusion of an infinite canvas.Take advantage of the Undo and Redo features for added convenience.",
      },
    ];
}

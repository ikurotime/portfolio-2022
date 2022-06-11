import { Arrow3 } from "../Common/Arrow";
import ProjectComponent from "../Common/ProjectComponent";

export default function ProjectSection() {
  const projects = [
    {
      title: "Discord Bot",
      techStack: "JavaScript, NodeJS, Express, Firebase, Discord.js",
      description: "A Discord bot that can be used to manage the server. It can be used to add/remove roles, set/unset the nickname, and kick/ban users.",
      github: "https://github.com/ikurotime/gary-bot",
      image: "DiscordImage",
      link: "https://discord.com/api/oauth2/authorize?client_id=849605392027353108&permissions=8&scope=bot",
    },
    {
      title: "GeoWeather",
      techStack: "React, TailwindCSS, Context API, OpenWeatherMap API",
      description: "A weather app that displays the current weather in a given location. It can be used to display the weather in a given location.",
      github: "https://github.com/ikurotime/GeoWeather",
      image: "GeoWeather",
      link: "https://geoweather.davidhuertas.dev",
    },
    {
      title: "2021 Portfolio",
      techStack: "React, Three.js, TailwindCSS, motion, Context API",
      description: "A portfolio website that displays my projects and skills.",
      github: "https://github.com/ikurotime/dh-homepage",
      image: "2021Portfolio",
      link: "https://2021.davidhuertas.dev",
    },
    {
      title: "This Portfolio",
      techStack: "React, TailwindCSS, Context API",
      description: "This portfolio website. You can see the code here.",
      github: "https://github.com/ikurotime/portfolio-2022",
      image: "Portfolio",
      link: "https://davidhuertas.dev",
    },
    {
      title: "Alejandro Balea's Portfolio",
      techStack: "React, TailwindCSS, Firebase",
      description: "A portfolio website for Alejandro Balea, Game Developer. It has a customization feature that allows the user to change the style of the website. (Work in progress)",
      image: "AlejandroBalea",
      link: "https://portfolio-balea.vercel.app",
    }

  ];

  return (
    <>
      <h2 id="projects"  className='my-10 text-4xl sm:text-5xl font-bold border-b-8 border-solid border-[#e63946] w-fit mx-auto'>PROJECTS</h2>
    <section  className="grid items-center w-full min-h-screen grid-cols-1 grid-rows-5 gap-6 px-5 mb-16 sm:px-10 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 sm:mt-0">
        {projects.map((project) => (
        <ProjectComponent 
        key={project.title}
        title={project.title} 
        description={project.description} 
        techStack={project.techStack} 
        link={project.link}
        github={project.github} 
        img={project.image}/>
        ))
        }       
      </section>
    </>
  )
}
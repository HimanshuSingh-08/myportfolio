import React from "react";
import natours from "../assets/portfolio/natours.png";
import workout from "../assets/portfolio/workout.png";
import bankist from "../assets/portfolio/bankist.png";
import reactexpense from "../assets/portfolio/reactexpense.png";
import productdeck from "../assets/portfolio/productdeck.png";
import reactchat from "../assets/portfolio/reactchat.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: natours,
      demoLink: 'https://github.com/HimanshuSingh-08/natours-app',
      codeLink: 'https://github.com/HimanshuSingh-08/natours-app',
    },
    {
      id: 2,
      src: workout,
      demoLink: 'https://himanshusingh-08.github.io/WorkoutTrackerProject/',
      codeLink: 'https://github.com/HimanshuSingh-08/WorkoutTrackerProject',
    },
    {
      id: 3,
      src: bankist,
      demoLink: 'https://luminous-alpaca-76b474.netlify.app',
      codeLink: 'https://github.com/HimanshuSingh-08/BankistApp',
    },
    {
      id: 4,
      src: reactexpense,
      demoLink: 'https://himanshusingh-08.github.io/ReactExpenseTracker/',
      codeLink: 'https://github.com/HimanshuSingh-08/ReactExpenseTracker',
    } ,
    {
      id: 5,
      src: productdeck,
      demoLink: 'https://himanshusingh-08.github.io/ProductDeck-Website-/',
      codeLink: 'https://github.com/HimanshuSingh-08/ProductDeck-Website-',
    }
    ,{
      id: 6,
      src: reactchat,
      demoLink: 'https://github.com/HimanshuSingh-08/WebSockets',
      codeLink: 'https://github.com/HimanshuSingh-08/WebSockets',
    }
    // Add more portfolio items with respective demo and code links
  ];

  const handleDemoClick = (demoLink) => {
    window.location.href = demoLink;
  };

  const handleCodeClick = (codeLink) => {
    window.location.href = codeLink;
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-1 py-3 m-1 duration-200 hover:scale-105"
                  onClick={(id) => {
                    console.log(id);
                    if(id === 1){
                      alert('In deployment')
                    }
                    handleDemoClick(demoLink)
                  }}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-1 py-3 m-1 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Portfolio;

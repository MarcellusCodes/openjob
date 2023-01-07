import { PrimaryText, Heading, SecondaryBtn } from "~/components";
import { AnalyzeJobForm } from "~/components/form";
import {
  TextRecognition,
  StatusChange,
  Writing,
  MailForward,
  ChevronRight,
  FileDescription,
  NewSection,
} from "tabler-icons-react";
import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <header className="py-10 md:py-20 relative px-4 sm:px-0">
      <div className="container mx-auto flex flex-col items-center space-y-6 text-center">
        <h1 className="primary-heading pb-2">
          AI to analyze, write job applications & more
        </h1>
        <PrimaryText>
          Enhance everything you do by using the latest from OpenAI to solve
          <br />
          hiring and application processes in minutes.
        </PrimaryText>
        <Link
          to="/job-posting"
          className="px-10 py-2 bg-gradient-to-r from-tertiary to-quinary text-white text-md sm:text-lg rounded-md hover:bg-gradient-to-l"
        >
          Get Started
        </Link>
        <div className="my-2" />
        <div className="w-full z-20">
          <div className="shadow-xl bg-white relative border-2 border-gray-200 rounded-md flex flex-col lg:flex-row w-full lg:w-[80%] mx-auto mb-6">
            <div className="w-full lg:w-1/2 bg-white border-b-2 lg:border-r-2 border-gray-200 p-6 flex flex-col items-start">
              <Heading
                title="Analyze Job"
                icon={
                  <TextRecognition size={48} strokeWidth={2} color={"black"} />
                }
                caption="Explain the job posting including skills fit & more"
              />
              <AnalyzeJobForm />
            </div>
            <div className="w-full lg:w-1/2 bg-white p-6 flex flex-col items-start">
              <Heading
                title="Summary Job"
                icon={
                  <StatusChange size={48} strokeWidth={2} color={"black"} />
                }
                caption="We got the following infos:"
              />
              <ul className="mt-4 space-y-3">
                <li className="pb-2 border-b border-gray-200 w-full flex items-start space-x-2">
                  <div className="p-2 bg-gray-300 grid place-items-center rounded-full">
                    <ChevronRight size={16} strokeWidth={2} color={"black"} />
                  </div>
                  <p className="text-left">
                    This job is about web development, you will need experience
                    talking to customers and knowledge in web technologies like
                    html, css, javascript.
                  </p>
                </li>
                <li className="pb-2 border-b border-gray-200 w-full flex items-start space-x-2">
                  <div className="p-2 bg-gray-300 grid place-items-center rounded-full">
                    <ChevronRight size={16} strokeWidth={2} color={"black"} />
                  </div>
                  <p className="text-left">It was posted 18 days ago.</p>
                </li>
                <li className="pb-2 border-b border-gray-200 w-full flex items-start space-x-2">
                  <div className="p-2 bg-gray-300 grid place-items-center rounded-full">
                    <ChevronRight size={16} strokeWidth={2} color={"black"} />
                  </div>
                  <p className="text-left">
                    Your skills fit most of the required technologies.
                  </p>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row items-start gap-2 mt-6">
                <SecondaryBtn
                  icon={<Writing size={16} strokeWidth={2} color={"#764ba2"} />}
                  title="Generate Application"
                />
                <a href="https://indeed.com" className="primary-btn">
                  <MailForward size={16} strokeWidth={2} color={"white"} />
                  <span>Apply for job</span>
                </a>
              </div>
            </div>
          </div>
          <ul className="mx-auto flex flex-row items-center w-full lg:w-[80%] space-x-4 pb-2 overflow-x-auto snap-x snap-mandatory">
            <li className="flex-shrink-0">
              <button className="flex flex-row items-center px-4 py-[6px] space-x-2 rounded-md bg-white duration-300">
                <TextRecognition size={16} strokeWidth={2} color={"#764ba2"} />
                <span className="text-secondary font-semibold">
                  Analyze Job
                </span>
              </button>
            </li>
            <li className="flex-shrink-0">
              <button className="flex flex-row items-center px-4 py-[6px] space-x-2 rounded-md bg-gray-300 duration-300">
                <FileDescription size={16} strokeWidth={2} color={"#764ba2"} />
                <span className="text-secondary font-semibold">
                  Analyze Resumee
                </span>
              </button>
            </li>
            <li className="flex-shrink-0">
              <button className="flex flex-row items-center px-4 py-[6px] space-x-2 rounded-md bg-gray-300 duration-300">
                <NewSection size={16} strokeWidth={2} color={"#764ba2"} />
                <span className="text-secondary font-semibold">
                  And more...
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        className="absolute top-[5%] -right-6 w-32 h-32 md:w-56 md:h-56 opacity-40"
      >
        <g shape-rendering="crispEdges" stroke-linejoin="round" fill="#6e45e2">
          <polygon points="800,0 600,200 600,0"></polygon>
          <polygon points="600,0 600,200 400,0"></polygon>
          <polygon points="500,300 500,200 600,300"></polygon>
          <polygon points="500,200 400,300 400,200"></polygon>
          <polygon points="400,300 500,400 400,400"></polygon>
          <polygon points="500,400 600,400 600,300"></polygon>
          <polygon points="600,200 600,400 800,400"></polygon>
          <polygon points="400,0 200,0 200,200"></polygon>
          <polygon points="0,200 200,200 0,0"></polygon>
          <polygon points="200,400 0,400 0,200"></polygon>
          <polygon points="400,200 300,200 300,300"></polygon>
          <polygon points="300,200 200,300 300,300"></polygon>
          <polygon points="200,300 300,300 300,400"></polygon>
          <polygon points="300,400 300,300 400,300"></polygon>
          <polygon points="300,500 300,400 400,400"></polygon>
          <polygon points="300,400 200,400 300,500"></polygon>
          <polygon points="300,600 200,500 200,600"></polygon>
          <polygon points="400,600 300,500 400,500"></polygon>
          <polygon points="200,600 0,600 200,400"></polygon>
          <polygon points="200,800 200,600 0,600"></polygon>
          <polygon points="400,800 200,600 200,800"></polygon>
          <polygon points="800,600 800,400 600,400"></polygon>
          <polygon points="600,400 400,400 400,600"></polygon>
          <polygon points="600,600 400,600 600,800"></polygon>
          <polygon points="800,800 600,800 800,600"></polygon>
        </g>
        <g
          fill="hsl(220, 62%, 45%)"
          stroke-width="3"
          stroke="hsl(220, 43%, 13%)"
        ></g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
        className="absolute top-[20%] md:top-[58%] -left-6 w-32 h-32 md:w-56 md:h-56 opacity-40 z-10"
      >
        <g shape-rendering="crispEdges" stroke-linejoin="round" fill="#4bbf49">
          <polygon points="600,200 800,0 800,200"></polygon>
          <polygon points="600,200 400,0 600,0"></polygon>
          <polygon points="600,200 600,300 500,300"></polygon>
          <polygon points="500,300 500,200 400,200"></polygon>
          <polygon points="500,300 500,400 400,400"></polygon>
          <polygon points="600,300 500,300 600,400"></polygon>
          <polygon points="800,200 600,400 800,400"></polygon>
          <polygon points="400,200 400,0 200,200"></polygon>
          <polygon points="200,0 0,200 0,0"></polygon>
          <polygon points="200,400 200,200 0,400"></polygon>
          <polygon points="400,400 200,400 400,200"></polygon>
          <polygon points="300,400 400,400 300,500"></polygon>
          <polygon points="200,400 300,400 300,500"></polygon>
          <polygon points="200,600 300,500 300,600"></polygon>
          <polygon points="400,500 400,600 300,600"></polygon>
          <polygon points="200,400 0,400 200,600"></polygon>
          <polygon points="200,600 0,800 0,600"></polygon>
          <polygon points="400,800 200,800 400,600"></polygon>
          <polygon points="800,600 600,400 600,600"></polygon>
          <polygon points="600,400 500,500 600,500"></polygon>
          <polygon points="400,500 400,400 500,500"></polygon>
          <polygon points="500,600 500,500 400,500"></polygon>
          <polygon points="500,500 500,600 600,500"></polygon>
          <polygon points="600,800 600,600 400,800"></polygon>
          <polygon points="800,600 800,800 600,800"></polygon>
        </g>
        <g
          fill="hsl(220, 62%, 45%)"
          stroke-width="3"
          stroke="hsl(220, 43%, 13%)"
        ></g>
      </svg>
    </header>
  );
};

export default Header;

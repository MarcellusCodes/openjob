import { NavLink, Link } from "@remix-run/react";
import { UserPlus, Menu2 } from "tabler-icons-react";
import { activeNav, navItems } from "~/constants";

const Navbar = () => {
  return (
    <nav className="border border-b-1">
      <div className="container mx-auto flex flex-row items-center justify-between lg:justify-around py-2 sm:px-0 px-4">
        <Link className="flex flex-row items-center space-x-2" to="/dashboard">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            className="w-10 h-10"
          >
            <defs>
              <filter
                id="a"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="17 8"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  result="blur"
                />
              </filter>
              <filter
                id="b"
                x="-100%"
                y="-100%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="10 17"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="SourceGraphic"
                  result="blur"
                />
              </filter>
            </defs>
            <g strokeWidth={16} stroke="#764ba2" fill="none">
              <path
                d="M374.982 39.166a50.039 50.039 0 0 1 50.037.003l274.963 158.75A50.034 50.034 0 0 1 725 241.25v317.5a50.041 50.041 0 0 1-25.018 43.334l-274.963 158.75a50.039 50.039 0 0 1-50.037-.003l-274.964-158.75A50.034 50.034 0 0 1 75 558.75v-317.5a50.041 50.041 0 0 1 25.018-43.334l274.964-158.75Z"
                filter="url(#a)"
              />
              <path
                d="M386.982 39.166a50.039 50.039 0 0 1 50.037.003l274.963 158.75A50.034 50.034 0 0 1 737 241.25v317.5a50.041 50.041 0 0 1-25.018 43.334l-274.963 158.75a50.039 50.039 0 0 1-50.037-.003l-274.964-158.75A50.034 50.034 0 0 1 87 558.75v-317.5a50.041 50.041 0 0 1 25.018-43.334l274.964-158.75Z"
                filter="url(#b)"
                opacity={0.25}
              />
              <path
                d="M362.982 39.166a50.039 50.039 0 0 1 50.037.003l274.963 158.75A50.034 50.034 0 0 1 713 241.25v317.5a50.041 50.041 0 0 1-25.018 43.334l-274.963 158.75a50.039 50.039 0 0 1-50.037-.003L88.018 602.081A50.034 50.034 0 0 1 63 558.75v-317.5a50.041 50.041 0 0 1 25.018-43.334l274.964-158.75Z"
                filter="url(#b)"
                opacity={0.25}
              />
              <path d="M374.982 39.166a50.039 50.039 0 0 1 50.037.003l274.963 158.75A50.034 50.034 0 0 1 725 241.25v317.5a50.041 50.041 0 0 1-25.018 43.334l-274.963 158.75a50.039 50.039 0 0 1-50.037-.003l-274.964-158.75A50.034 50.034 0 0 1 75 558.75v-317.5a50.041 50.041 0 0 1 25.018-43.334l274.964-158.75Z" />
            </g>
          </svg>
          <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-[#667eea] to-[#764ba2]">
            OpenJob
          </span>
        </Link>

        <ul className=" flex-row items-center space-x-10 text-gray-500 font-semibold text-sm md:flex hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.href}`}
              className={({ isActive }) =>
                isActive ? activeNav : "hover:text-[#4BBF49]"
              }
            >
              {item.title}
            </NavLink>
          ))}
          <li>
            <NavLink
              className="flex flex-row items-center px-4 py-1 space-x-2 rounded-md bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white hover:bg-gradient-to-tl duration-300"
              to="/sign-up"
            >
              <UserPlus size={16} strokeWidth={2} color={"white"} />
              <span>Free Signup</span>
            </NavLink>
          </li>
        </ul>
        <button className="md:hidden block">
          <Menu2 size={24} strokeWidth={2} color={"#525252"} />
        </button>
        <div className="hidden lg:block"></div>
      </div>
    </nav>
  );
};

export default Navbar;

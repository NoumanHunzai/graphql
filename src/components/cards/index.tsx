import React, { useEffect, useState } from "react";
import Avatar from "../avatar";
import logo from "../../assets/avatar.jpg";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface CardProps {
  id: string;
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ id, title, body }) => {
  const [isMobile, setIsMobile] = useState(false);
  const truncatedId = isMobile ? id.slice(0, 10) + "..." : id;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="mb-32 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left sm:w-full w-full p-4 border border-gray-500 rounded-md bg-gray-900">
      <div className="flex justify-between mb-2 items-center">
        <div className="flex gap-2 items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Avatar src={logo} alt="Vercel Logo" />
          </div>

          <p className="font-semibold">{truncatedId}</p>
        </div>
        <div className="activeBtn">
          <button className="btn rounded-full py-2 px-6 bg-green-500 hover:bg-green-600 ">
            Active
          </button>
        </div>
      </div>
      <div>
        <p className="text-2xl font-semibold mb-4">{title}</p>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Card;

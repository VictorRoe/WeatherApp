import { Github, Instagram, Linkedin } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-[#FF5E71] p-8 backdrop-blur-md py-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#FFF8F0] font-semibold">
          &copy; {new Date().getFullYear()} VictorRoe
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/VictorRoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFF8F0] hover:text-[#FFF8F0]/80"
          >
            <Github size={30} />
          </a>
          <a
            href="https://instagram.com/victorroe_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFF8F0] hover:text-[#FFF8F0]/80"
          >
            <Instagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/victorrangelromero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFF8F0] hover:text-[#FFF8F0]/80"
          >
            <Linkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

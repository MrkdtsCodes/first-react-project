import NavComponent from "./NavComponent";
import MainSectioncomponent from "./MainSectioncomponents"; 
import { LinkedinIcon, GithubIcon, MailIcon, ResumeIcon } from './Icons/Icon.jsx';

  
function MainSection() {

  const socialIcons = [
    { id: 1, icon: <LinkedinIcon />, link: 'https://linkedin.com' },
    { id: 2, icon: <GithubIcon />, link: 'https://github.com' },
    { id: 3, icon: <MailIcon />, link: 'mailto:your@email.com' },
    { id: 4, icon: <ResumeIcon />, link: '/resume.pdf' }
  ];

  return (
    <div className="border border-orange-500 p-6 flex flex-col gap-10 md:w-full h-screen ">
      <NavComponent />
      <div className="flex-1 border border-black-500 flex  flex-col justify-center">
        <MainSectioncomponent 

        Image = "/Mark.jpeg"
        alt = "Mark Datus"
        Greeting = "I'm Mark Andrie Datus, And I Enjoy"
        MainHeading = "Building interactive Systems"
        SubHeading = "Aspiring Full-Stack Developer"
        icons = {socialIcons}
        />
      </div>
    </div>
  );
}

export default MainSection;

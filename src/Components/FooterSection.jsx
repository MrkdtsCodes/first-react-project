import { LinkedinIcon, GithubIcon, MailIcon, ResumeIcon } from './Icons/Icon.jsx';

function Footer(){
    const socialIcons = [
    { id: 1, icon: <LinkedinIcon />, link: 'https://linkedin.com' },
    { id: 2, icon: <GithubIcon />, link: 'https://github.com' },
    { id: 3, icon: <MailIcon />, link: 'mailto:your@email.com' },
    { id: 4, icon: <ResumeIcon />, link: '/resume.pdf' }
  ];

    return(

        <footer className="flex flex-col border border-black p-10 gap-4 bg-white items-center justify-center">

            <div className="flex flex-col border border-black">
                <span className='flex flex-row gap-4' >
                    {socialIcons.map((items)=>
                <a
                key={items.id}
                href={items.link}
                className=""
                >
                {items.icon}
                </a>
                
                )} 
                </span>
            </div> 
            {/* icons dito */}

            <div className="border border-black">
                <p>Crafted with Love by Datus, Mark Andrie D</p>
            </div>

        </footer>





    );
}

export default Footer

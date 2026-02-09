import  {LinkedinIcon, GithubIcon, MailIcon, ResumeIcon}  from './Icons/Icon.jsx';



function PictureText(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center items-center">

            <div className="border border-red-500 p-25 text-center ">
                image
            </div>

            <div className="flex flex-col text-center border border-blue-500 p-2 gap-4 items-center md:items-start">
                <span className="text-xs md:text-sm">I'm Mark Andrie Datus, And I Enjoy</span>
                <span className="text-lg md:text-3xl">Building interactive Systems</span>
                <span className="text-base md:text-lg">Aspiring Full-Stack Developer</span>

                <div className='flex flex-row gap-5'>
                    <span className='p-2 rounded-sm bg-blue-500 hover:scale-110 transition-transform'>
                        <LinkedinIcon className="bg-red text-[#0077b5]" />
                        
                    </span>
                    <span className='p-2 rounded-full bg-gray-500 hover:scale-110 transition-transform'>
                        <GithubIcon/>
                    </span>
                    <span className='p-2 rounded-sm hover:scale-110 transition-transform'>
                        <MailIcon/>
                    </span>
                    <span className='p-2 rounded-md hover:scale-110 transition-transform'>
                        <ResumeIcon/>
                    </span>
                </div>
            </div>
        </div>

    );
}

export default PictureText 
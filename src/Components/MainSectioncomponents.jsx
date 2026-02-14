import '../Styles/PictureText.css';



const MainSectioncomponent = ({Image, Alt ,Greeting, MainHeading, SubHeading, icons}) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center items-center">

            <div className="picture-container border border-red-500 flex justify-center p-4">
                <img 
                    src={Image}
                    alt={Alt} 
                    className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg object-contain" 
                />
            </div>

             <div className="flex flex-col text-center border border-blue-500 p-2 gap-4 items-center md:items-start">

                 <div className="flex flex-col text-center border border-blue-500 p-2 gap-4 items-center md:items-start">
                     <span className="text-xs md:text-sm">{Greeting}</span>
                     <span className="text-xs md:text-4xl font-bold">{MainHeading}</span>
                     <span className="text-xs md:text-sm">{SubHeading}</span>
                </div>

                <div className='flex flex-col border border-blackl gap-5'>
                    <span className='flex flex-row gap-5'>
                       {icons.map((item)=>
                        <a
                            key={item.id}
                            href={item.link}
                            className=""
                        >
                          {item.icon} 
                        </a>
                    )}                   
                    </span>
                </div>
            </div>
        </div>


    );
}

export default MainSectioncomponent
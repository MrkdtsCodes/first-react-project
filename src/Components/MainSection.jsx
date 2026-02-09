import NavComponent from "./NavComponent";
import PictureText from "./PictureText";

function MainSection(){

    return(

        
        <div className="border border-orange-500 p-6 flex flex-col gap-10 md:w-full h-screen ">
            <NavComponent/>
            <div className="flex-1 border border-black-500 flex  flex-col justify-center">
                <PictureText/>
            </div>
        </div>
        

        
    );
}

export default MainSection

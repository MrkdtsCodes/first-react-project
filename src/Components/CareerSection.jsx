import CareerCards from "./CareerCards"

function CareerSection(){
    return(

        <>
        <section className="bg-white border border-blue-500 p-6 flex flex-col gap-10">
            <h2 className="text-center ">Career</h2>
            <h2>Let's Dive</h2>
            
            <div className="">
                <CareerCards/>
            </div>
            
        
        </section>
        </>
    );
}

export default CareerSection


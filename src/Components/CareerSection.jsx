import CareerComponent from "./CareerComponent"

const CareerSection = () => {

    const Job = [
        {id:1, Todo:"Built responsive websites"},
        {id:2, Todo:"Collaborated with designers"}
    ]
    return(
        <section className="bg-white border border-blue-500 p-6 flex flex-col gap-10">
            <h2 className="text-center ">Career</h2>
            <h2>Let's Dive</h2>
            
            <div className="">
                <CareerComponent 
                    Company="Google"
                    Role="Frontend Developer"
                    Date="2024-2025"
                    Job={[
                        {id:1, Todo:"Built responsive websites"},
                        {id:2, Todo:"Collaborated with designers"},
                        {id:2, Todo:"Collaborated with designers"}
                    ]}
                    JobImages={[
                        "./Tux.jpeg"
                    ]}
                    
                />

               
            </div>
            
        
        </section>
       
    );
}

export default CareerSection


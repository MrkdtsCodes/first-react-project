
const CareerComponent = ({Company, Role, Date, Job, JobImages}) =>{

    return(
         <article className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-gray-200 rounded-lg">
            <div className="flex flex-col gap-4">
                <header className="flex flex-col">
                    <h3 className="text-xl font-bold uppercase">{Company}</h3>

                    <p className="font-semibold text-blue-600">{Role}</p>

                    <time dateTime="2024-02-16" className="text-sm text-gray-500">
                    {Date}
                    </time>
                </header>

                <div className="text-gray-700">
                    <ul className="list-disc list-inside">
                        {Job.map((Job) => 
                        <li key={Job.id}>{Job.Todo}</li>
                        )}
                        
                       
                    
                    </ul>
                </div>
            </div>

            <figure className="border border-red-500 flex items-center justify-center p-10 rounded bg-gray-50">
                <img 
                    src={JobImages} 
                    alt={`${Company} JobImages`} 
                    className="max-w-34"
                />
            </figure>
    </article>
    );
};

export default CareerComponent
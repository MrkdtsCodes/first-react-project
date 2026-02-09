function CareerCards() {
    return (
       
        <article className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-gray-200 rounded-lg">
            
            
            <div className="flex flex-col gap-4">
                
               
                <header className="flex flex-col">
                    
                    
                    <h3 className="text-xl font-bold uppercase">LHOOPA INC.</h3>
                    
                    <p className="font-semibold text-blue-600">Web Dev</p>
                    
                    
                    <time dateTime="2024-02-16" className="text-sm text-gray-500">
                        Feb 16 - Present
                    </time>
                </header>

               
                <div className="text-gray-700">
                    <ul className="list-disc list-inside">
                        <li>Gumawa ng websites</li>
                        <li>Designed user interfaces</li>
                        <li>Fixed styling bugs</li>
                    </ul>
                </div>
            </div>
            
          
            <figure className="border border-red-500 flex items-center justify-center p-10 rounded bg-gray-50">
                
                <img 
                    src="/path-to-image.jpg" 
                    alt="Screenshot of work done at Lhoopa Inc" 
                    className=""
                />
               
            </figure>

        </article>
    );
}

export default CareerCards;


function NavComponent (){
    return(
        <nav className="flex flex-row justify-between border border-red-500 p-4 g-10">
            <div className="">
                Mark Andrie Datus.
            </div>
            <div className="MOdesContainer">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-moon-icon lucide-moon"
                    >
                    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
                </svg>
            </div>
        </nav>
    );
}

export default NavComponent 
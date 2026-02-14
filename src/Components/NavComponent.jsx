
import ThemeToggle from "./ThemeToggle";


function NavComponent (){
    return(
        <nav className="flex flex-row justify-between border border-red-500 p-4 g-10">
            <div className="font-bold">
                Mark Andrie Datus.
            </div>
            <div className="">
                {/* 2. Use the component here (replaces the old SVG) */}
                <ThemeToggle />
            </div>
        </nav>
    );
}

export default NavComponent 
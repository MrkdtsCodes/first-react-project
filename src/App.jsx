
import MainSection from "./Components/MainSection";
import CareerSection from "./Components/CareerSection";
import SkillSection from "./Components/SkillSection";


function App() {
  
  return(
    <>
    <div className="grid grid-cols-1">
     <section> <MainSection/> </section>
      <section><CareerSection/></section>
      <section><SkillSection/></section>
    </div>
    </>
  );


}

export default App;



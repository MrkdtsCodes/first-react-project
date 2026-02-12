
import MainSection from "./Components/MainSection";
import CareerSection from "./Components/CareerSection";
import SkillSection from "./Components/SkillSection";
import Footer from "./Components/FooterSection";


function App() {
  
  return(
    <>
    <div className="grid grid-cols-1">
     <section> <MainSection/> </section>
      <section><CareerSection/></section>
      <section><SkillSection/></section>
      <section><Footer/></section>
    </div>
    </>
  );


}

export default App;



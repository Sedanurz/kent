import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Indoor from "./Indoor";
import About from "./About";
import Main from "./Main";
import Contact from "./Contacts";
import Referance from "./Referance";
import Outdoor from "./Outdoor";
import Mobilled from "./Mobilled";
import ClpScreen from "./ClpScreen";
import WhatsAppSection from "./WhatsAppSection";
import Phone from "./Phone";
import SSS from "./SSS";
import Product from "./Product";
import ProductIndoor from "./ProductIndoor";
import ProductOutdoor from "./ProductOutdoor";
import ProductStadyum from "./ProductStadyum";

function App() {
return (
<div className="App">
<Routes>
<Route path="/" element={ <Main/> } />
<Route path="/Main" element={ <Main/> } />
<Route path="/Projects" element={ <Projects/> } />
<Route path="/Indoor" element={ <Indoor/> } />
<Route path="/About" element={ <About/> } />
<Route path="/Contacts" element={ <Contact/> } />
<Route path="/Referance" element={ <Referance/> } />
<Route path="/Outdoor" element={ <Outdoor/> } />
<Route path="/Mobilled" element={ <Mobilled/> } />
<Route path="/ClpScreen" element={ <ClpScreen/> } />
<Route path="/SSS" element={ <SSS/> } />
<Route path="/Product" element={ <Product/> } />
<Route path="/ProductIndoor" element={ <ProductIndoor/> } />
<Route path="/ProductOutdoor" element={ <ProductOutdoor/> } />
<Route path="/ProductStadyum" element={ <ProductStadyum/> } />
</Routes>
<WhatsAppSection />
<Phone />
</div>
);
}
export default App
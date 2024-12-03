import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { About } from "./layout/sections/about/About";
import { Service } from "./layout/sections/service/Service";
import { Contact } from "./layout/sections/contact/Contact";
import { Footer } from "./layout/footer/Footer";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Service />
      <Contact />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;

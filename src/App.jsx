import Herosection from "./pages/Herosection/Herosection"
import styles from "./App.module.css"; 
import Offer from "./pages/Offer/Offer";
import Services from "./pages/Service/Services";
import Download from "./pages/Download/Download";
import Portfolio from "./pages/Portfolio/Portfolio";
import Buttons from "./pages/Buttons/Buttons";
import Footer from "./pages/Footer/Footer";

function App() {

  return (
    <>
        <div className={styles.container}>
            <Herosection />
            <Offer />
            <Services />
            <Download />
            <Portfolio />
            <Buttons />
            <Footer />
        </div>
    </>
  )
}

export default App

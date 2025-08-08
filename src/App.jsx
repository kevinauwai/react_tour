import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <>
        {/* <!-- navbar --> */}
    <Navbar  />
    {/* <!-- hero --> */}
    <Hero/>
      {/* <!-- aboutus --> */}
   <About/>
    {/* <!-- services --> */}
    <Services />
    {/* <!-- tour --> */}
    <Tours/>
    {/* <!-- footer --> */}
     <Footer/>
    </>
  )
}

export default App

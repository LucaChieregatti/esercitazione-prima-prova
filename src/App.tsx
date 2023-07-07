import {
  ChakraProvider,
} from "@chakra-ui/react"
import Homepage from "./components/homepage"
import Navbar from "./navbar/navbar"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Istituzione from "./components/istituzione"
import Museo from "./components/museo"
import Did from "./components/didattica"
import Amichae from "./components/amichae"
import orariecosti from "./components/orariecosti"
import Footer from "./components/footer"

export const App = () => (
  <div className="app">
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/homepage' Component={Homepage} />
          <Route path='/istituzione' Component={Istituzione} />
          <Route path='/museo' Component={Museo} />
          <Route path='/didattica' Component={Did} />
          <Route path='/amichae' Component={Amichae} />
          <Route path='/orariecosti' Component={orariecosti} />
        </Routes>
      </Router>
      <Footer/>
    </ChakraProvider>
  </div>
)

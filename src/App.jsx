import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>

      <Router>
        
        <Navbar/>

        <Routes>
          <Route path='/'/>
          <Route path='about' element={<main>
            <section>
              <h2>AboutPage</h2>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod sed provident illo voluptatem cum exercitationem laborum nesciunt quaerat eveniet. Architecto, ullam neque. Quas nostrum at, laudantium est necessitatibus consequatur.</p>
            </section>
        </main>}/>
          <Route path='*' element={"404"}/>
        </Routes>

        <Footer/>

      </Router>

    </>
  )
}

export default App

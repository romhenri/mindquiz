import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import AboutPage from './pages/AboutPage'
import Quiz from './components/Quiz'
import Question from './components/Question'

function App() {
  return (
    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='quiz'>
            <Route index element={<QuizPage/>}/>

            <Route path='general1' 
              element={<Quiz title="General 1" data="general1"/>}/>
            <Route path='general2' 
              element={<Quiz title="General 2" data="general2"/>}/>
            <Route path='programming1' 
              element={<Quiz title="Programming 1" data="programming1"/>}/>
            <Route path='programming2' 
              element={<Quiz title="Programming 2" data="programming2"/>}/>
          
            <Route path='*' element={<QuizPage/>}>

            </Route>
          </Route>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='*' element={"404"}/>
        </Routes>
        <Footer/>

      </Router>

    </>
  )
}

export default App
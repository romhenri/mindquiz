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
    <><Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='quiz'>
          <Route index element={<QuizPage/>}/>

          <Route path='general1' 
            element={<Quiz title="General 1" data="general1"/>}/>
          <Route path='general2' 
            element={<Quiz title="General 2" data="general2"/>}/>
          <Route path='general3' 
            element={<Quiz title="General 3" data="general3"/>}/>
          <Route path='history1' 
            element={<Quiz title="History 1" data="history1"/>}/>
          <Route path='programming1' 
            element={<Quiz title="Programming 1" data="programming1"/>}/>
          <Route path='programming2' 
            element={<Quiz title="Programming 2" data="programming2"/>}/>
          <Route path='javascript1' 
            element={<Quiz title="JavaScript 1" data="javascript1"/>}/>
          <Route path='javascript2' 
            element={<Quiz title="JavaScript 2" data="javascript2"/>}/>
          <Route path='javascript3' 
            element={<Quiz title="JavaScript 3" data="javascript3"/>}/>
          <Route path='web1'
            element={<Quiz title="Web 1" data="web1"/>}/>
          <Route path='web2'
            element={<Quiz title="Web 2" data="web2"/>}/>
          <Route path='linux1'
            element={<Quiz title="Linux 1" data="linux1"/>}/>
          <Route path='python1' 
            element={<Quiz title="Python 1" data="python1"/>}/>

          <Route path='*' element={<QuizPage/>}>

          </Route>
        </Route>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='*' element={"404"}/>
      </Routes>
      <Footer/>

    </Router></>
  )
}

export default App
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import Quiz from './components/Quiz'
// Data
import general1 from './data/general1.json';
import general2 from './data/general2.json';
import general3 from './data/general3.json';
import history1 from './data/history1.json';
import wwII from './data/wwII.json';
import programming1 from './data/programming1.json';
import programming2 from './data/programming2.json';
import javascript1 from './data/javascript1.json';
import javascript2 from './data/javascript2.json';
import javascript3 from './data/javascript3.json';
import web1 from './data/web1.json';
import web2 from './data/web2.json';
import linux1 from './data/linux-terminal.json';
import windows1 from './data/windows-terminal.json';
import python1 from './data/python1.json';
import canvas1 from './data/canvas1.json';
import principios_da_contabilidade from './data/principios-da-contabilidade.json'

const quizzes = [
  general1,
  general2,
  general3,
  history1,
  wwII,
  programming1,
  programming2,
  javascript1,
  javascript2,
  javascript3,
  web1,
  web2,
  linux1,
  windows1,
  python1,
  canvas1,
  principios_da_contabilidade
]

function App() {
  return (<>
  <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='quiz'>
          <Route index element={<QuizPage quizzes={quizzes}/>}/>

          <Route path='general1' element={<Quiz data={general1}/>}/>
          <Route path='general2' element={<Quiz data={general2}/>}/>
          <Route path='general3' element={<Quiz data={general3}/>}/>
          <Route path='history1' element={<Quiz data={history1}/>}/>
          <Route path='wwII' element={<Quiz data={wwII}/>}/>
          <Route path='programming1' element={<Quiz data={programming1}/>}/>
          <Route path='programming2' element={<Quiz data={programming2}/>}/>
          <Route path='javascript1' element={<Quiz data={javascript1}/>}/>
          <Route path='javascript2' element={<Quiz data={javascript2}/>}/>
          <Route path='javascript3' element={<Quiz data={javascript3}/>}/>
          <Route path='web1' element={<Quiz data={web1}/>}/>
          <Route path='web2' element={<Quiz data={web2}/>}/>
          <Route path='linux-terminal' element={<Quiz data={linux1}/>}/>
          <Route path='windows-terminal' element={<Quiz data={windows1}/>}/>
          <Route path='python1' element={<Quiz data={python1}/>}/>
          <Route path='canvas1' element={<Quiz data={canvas1}/>}/>
          <Route path='principios-da-contabilidade' element={<Quiz data={principios_da_contabilidade}/>}/>

          <Route path='*' element={<QuizPage quizzes={quizzes}/>}/>
        </Route>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='error' element={<ErrorPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  </>)
}

export default App
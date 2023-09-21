import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic necessitatibus saepe at. Quis veniam rem veritatis voluptatem laudantium reprehenderit temporibus esse magni et quibusdam necessitatibus nihil est debitis dolor, excepturi sapiente maxime ipsa praesentium. Consequuntur, assumenda in temporibus voluptatum neque provident modi beatae. Corporis magnam possimus iste cum consectetur dolorum minus. Soluta quod quia molestias quaerat ut animi facilis optio incidunt accusantium? Ipsam, dignissimos non ducimus maiores quaerat consectetur earum veniam laboriosam expedita a provident commodi laborum sed debitis, possimus placeat vitae porro! Explicabo laboriosam nulla recusandae dolorum ea rem porro debitis distinctio, corporis suscipit sunt maiores placeat culpa deleniti.
            </p>
          } />
          <Route path="*" element={"404"} />
        </Routes>
        <p> footer</p>
      </Router>
    </>
  )
}

export default App

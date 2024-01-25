import {BrowserRouter , Routes , Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Service from "./Pages/Service"
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="service" element={<Service/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
// import React from 'react'
// import Basic from './Events/Basic'
// import Counter from './Hooks/Usestate/Counter'
// import Layout from './Layout'


// export default function App() {
//   return (
//     <div>
//       <Basic/>
//       <Counter/>
//       <Layout/>
//     </div>
//   )
// }
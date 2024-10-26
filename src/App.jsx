import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Feed from "./components/Feed"
import appStore from "./utils/appStore"
import { Provider } from "react-redux"


function App() {

  return (
    <Provider store={appStore}>
    <div>
   
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}> 
          <Route path="/" element={<Feed/>}/> 

            <Route path="/login" element={<Login/>}/> 
            <Route path="/profile" element={<Profile/>}/> 


          
          </Route>
        </Routes>
      
      
      </BrowserRouter>

     
    </div>
    </Provider>

  )
}

export default App

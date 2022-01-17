import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      {/*                    IMPORTANT
          By changing the key on a component we can force it to remount. 
      */}


          <Route path="/" element={ <News key="general"  pageSize={12} country="in" category="general"/>}/>
         
          
          <Route path="technology" element={<News key="technology" pageSize={12} country="in" category="technology"/>}/>
          
       
          <Route path="sports" element={ <News  key="sports" pageSize={12} country="in" category="sports"/>}/>
         
          
          <Route path="science" element={ <News key="science" pageSize={12} country="in" category="science"/>}/>
         
         
          <Route path="health" element={ <News key="health" pageSize={12} country="in" category="health"/>}/>
         
         
          <Route path="entertainment" element={<News key="entertainment" pageSize={12} country="in" category="entertainment"/>}/>
          
        
          <Route path="business" element={ <News key="business" pageSize={12} country="in" category="business"/>}/>
         
         
        </Routes>
        </Router>
   
    </>
     
  );
}

export default App;

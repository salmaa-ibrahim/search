import './App.css'
import MainApp from './component/mainApp/mainApp';
// import { useContext } from "react";
import {createContext, useState} from "react"
export const ThemeContext = createContext(null)
function App() {
  const [theme , setTheme] = useState("light");
  // const passevedValues = useContext(ThemeContext)
  return (
    <div className={theme +"App"}>
              <ThemeContext.Provider value={{theme , setTheme}}>
              <MainApp></MainApp>
              </ThemeContext.Provider>

    </div>
  )
}

export default App

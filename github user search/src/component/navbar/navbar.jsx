import { ThemeContext } from '../../App';
import './navbar.css'
import darkImg from '/images/Path.svg'
import lightImg from '/images/002-sun (1).svg'
import { useContext } from "react";

function Navbar(){
    const theme= useContext(ThemeContext)
    function onHandleChange(event){
        let newValue;
        if(event.target.checked == false){
            newValue ="light"
        } else{
            newValue ="dark"
        }
        theme.setTheme(newValue)
    }
    const passevedValues = useContext(ThemeContext)
    return(
        <div className={passevedValues.theme +"Navbar"}>
            <a href="#">devfinder</a>
            <div className={passevedValues.theme +"Mood"}>
                <div className={passevedValues.theme +"MoodState"} >
                    <input className='check' type="checkbox" onChange={onHandleChange} />
                    <button className={passevedValues.theme +"Dark"}>DARK</button>
                    <button className={passevedValues.theme +"Light"}>LIGHT</button>

                </div>
                <div className="moodImg">
                    <img src={darkImg} alt="" className={passevedValues.theme +"moon"} />
                    <img src={lightImg} alt="" className={passevedValues.theme +"Sun"} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
import './content.css'
// import userImg from "/images/Bitmap.jpg"
import locationIcon from '/images/003-pin.svg'
import urlIcon from '/images/002-url.svg'
import twitterIcon from '/images/004-twitter.svg'
import buldingIcon from '/images/001-office-building.svg'

import { useContext } from "react";
import { ThemeContext } from '../../App'
function Content(prop){
    const passevedValues = useContext(ThemeContext)
    return(
        <div className={passevedValues.theme +"Content"}>
            <div className="user">
                <div className="userTop">
                    <img src={prop.avatar_url} alt="" />
                    <div className="infoTop">
                            <div className='header'>
                                <p className={passevedValues.theme +"Name"}>{prop.name}</p>
                                <a href="#" className='userName'>@{prop.login}</a>
                            </div>
                            <p className={passevedValues.theme +"DateOfJoin"}>Joined 25 Jan 2011{prop.created_at}</p>
                    </div>
                </div>

                <div className='Bio'>
                    <p className={passevedValues.theme +"Bio"}>{prop.bio}</p>
                </div>
            </div>



            <div className="userInfo">
                <div className="infoBotom">
                    <div className={passevedValues.theme +"Interaction"}>
                        <div className="interaction-1">
                            <label className={passevedValues.theme +"Lable"}>Repos</label>
                            <p className={passevedValues.theme +"P"}>6{prop.repos_url}</p>
                        </div>
                        <div className="interaction-1">
                            <label  className={passevedValues.theme +"Lable"}>Followers</label>
                            <p className={passevedValues.theme +"P"}>645{prop.followers}</p>
                        </div>
                        <div className="interaction-1">
                            <label  className={passevedValues.theme +"Lable"}>Following</label>
                            <p  className={passevedValues.theme +"P"}>80{prop.following}</p>
                        </div>
                    </div>

                    <div className="contactInfo">
                        <div className="contactInfo-1">
                            <img src={locationIcon} alt="" />
                            <a className={passevedValues.theme +"Info"}>{prop.location}</a>
                        </div>
                        <div className="contactInfo-1">
                            <img src={twitterIcon} alt="" />
                            <a className={passevedValues.theme +"Info"}>{prop.twitter_username}</a>
                        </div>
                        <div className="contactInfo-1">
                            <img src={urlIcon} alt="" />
                            <a className={passevedValues.theme +"Info"}>{prop.url}</a>
                        </div>
                        <div className="contactInfo-1">
                            <img src={buldingIcon} alt="" />
                            <a className={passevedValues.theme +"Info"}>{prop.subscriptions_url}</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Content
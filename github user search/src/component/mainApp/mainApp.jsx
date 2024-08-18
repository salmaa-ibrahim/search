import './mainApp.css'
import Navbar from '../navbar/navbar'
import SearchBar from '../searchBar/searchBar'
import Content from '../content/content'
import { useEffect, useState } from 'react'


function MainApp(){
  const [arrayOfUsers , setArrayOfUsers] = useState([])

  const fetchData = () => {
    return fetch("https://api.github.com/users")
      .then((res) => res.json())

      .then((d) => setArrayOfUsers(d));
  };

  useEffect(() => {
    fetchData();
  }, []);

  
    return (
        <div className='Github'>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
        {arrayOfUsers.map((item)=>{
          return(
            <>
            <Content
            id={item.id}
            avatar_url={item.avatar_url}
            name={item.login}
            login ={item.login}
            // created_at ={item.created_at}
            // bio ={item.bio}
            // repos_url={item.repos_url}
            // followers ={item.follower_url}
            // following ={item.following_url}
            location={item.location}
            twitter_user={item.twitter_user}
            url={item.url}
            subscriptions_url={item.subscriptions_url}
            >
            </Content>
            </>
          )
        })}        
      </div>
    )
}

export default MainApp
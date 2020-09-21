import React, { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from "./firebase";

function App() {
  const [ reels, setReels] = useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  return (
    <div className="App">
      <h1>These are the Reels</h1>

      <div className="app_top">
        <img
          className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/150px-Instagram_logo_2016.svg.png"
          alt="Instagram Logo"
        />
        <h1>Reels</h1>

      </div>

      <div className="app_videos">
        {reels.map(({ url , likes , shares , channel , song , avatarSrc}) => (
          <VideoCard
            channel = { channel }
            avatarSrc = { avatarSrc }
            song = { song }
            url = { url }
            likes = { likes }
            shares = { shares }
          />
        ))}  
      </div>
    </div>
  );
}

export default App;

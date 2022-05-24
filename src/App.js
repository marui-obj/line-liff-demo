import React, { useState, useEffect } from "react";

const liff = window.liff;
function App(props) {
  const [name, setName] = useState('');
  const [lineId, setLineId] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {
    const loadUserProfile = async() => {
      await liff.init({ liffId: '1657161840-ZQyNbrd9' }).catch(err=>{throw err});
      if (liff.isLoggedIn()) {
        let getProfile = await liff.getProfile();
        setName(getProfile.displayName);
        setLineId(getProfile.userId);
        setPicture(getProfile.pictureUrl)
      } else {
        liff.login();
      }
    }
    loadUserProfile();

  }, []);

  return (
    <div className="App">
      <p>ชื่อ {name}</p>
      <p>Line ID {lineId}</p>
      <img alt='pic' src={picture} />
    </div>
  );
}

export default App;

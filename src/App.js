import React from "react";
import devPic from "./img/pc.jpeg";
import Profile from "./profile/Profile ";
import "./App.css";
function App() {
  const handleName = myName => {
    return alert(myName);
  };
  return (
    <div>
      <Profile
        data={{
          fullName: "Chaieb Jasser",
          bio: "Front-End Dev",
          profession: "student"
        }}
        handleName={handleName}
      >
        <img
          src={devPic}
          style={{
            height: "100vh",
            width: "100%",
            position: "relative",
            backgroundSize: "cover"
          }}
          alt="dev-pic"
        />
      </Profile>
    </div>
  );
}

export default App;

import React from "react";
import PropTypes from "prop-types";
const Profile = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {props.handleName(props.data.fullName)}

      {props.children}
      <p
        style={{
          color: "white",
          position: "absolute",
          textTransform: "uppercase",
          fontFamily: "italic",
          fontSize: 40
        }}
      >
        {`hi my name is ${props.data.fullName} i am a ${props.data.profession} and a ${props.data.bio} `}
      </p>
    </div>
  );
};
Profile.propTypes = {
  data: PropTypes.object,
  handleName: PropTypes.func,
  profession: PropTypes.string,
  fullName: PropTypes.string,
  bio: PropTypes.string
};
export default Profile;

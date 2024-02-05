import { useEffect } from "react";


const User = ({ name, location, designation }) => {



  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>{designation}</h4>
    </div>
  );
};

export default User;
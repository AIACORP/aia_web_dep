import React from "react";

const Team_div = () => {
  return (
    <div className="team_div_main">
      <h1 className="title">Our Team</h1>
      <div className="cards">
        <div className="card">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          </div>
          <div className="text">
            <h1>John Doe</h1>
            <p>CEO</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1638727295415-286409421143?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          </div>
          <div className="text">
            <h1>John Doe</h1>
            <p>CEO</p>
          </div>
        </div>{" "}
        <div className="card">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          </div>
          <div className="text">
            <h1>John Doe</h1>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team_div;

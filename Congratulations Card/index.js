const element = (
  <div className="CongratsContainer">
    <h1 className="mainHeading">Congratulations</h1>
    <div className="CongratsCard">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <h1 className="normalHeading">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
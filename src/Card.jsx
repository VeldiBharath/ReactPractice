import Banana from "./assets/banana.jpg";

function Card() {
  return (
    <>
      <h1>This is Card Component</h1>
      <div className="container">
        <div className="card">
          <img className="cardimg" src={Banana} alt="Banana" />
          <h1 className="cardtitle">Banana</h1>
          <p className="cardtext">This fruit is yellow in color</p>
        </div>

        <div className="card">
          <img className="cardimg" src={Banana} alt="Banana" />
          <h1 className="cardtitle">Banana</h1>
          <p className="cardtext">This fruit is yellow in color</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Card;

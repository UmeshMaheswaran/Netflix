import "./App.css";
import json from "./assets/data.json";

function App() {
  return (
    <>
      {json.map((elem) => {
        console.log(elem);
        return <section className="Titres">{elem.category}</section>;
      })}

      {/* <section className="Title">
        <img src="./src/assets/img/logo.png" alt="" />
      </section> */}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Cars from "./Cars";
import Travel from "./Travel";
import ImageFinder from "../Component/ImageFinder";
import Wildlife from "./WildLife";
import Technology from "./Technology";

export default function App() {
  const [car, setCar] = useState("selectDreamCar");

  const [travel, setTravel] = useState(false);
  const [cars, setCars] = useState(false);
  const [others, setOthers] = useState(false);
  const [wildLife, setWildLife] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [name, setName] = useState(" ");
  const [surName, setSurname] = useState(" ");

  useEffect(() => {
    car === "travel" ? setTravel(true) : setTravel(false);
    car === "cars" ? setCars(true) : setCars(false);
    car === "others" ? setOthers(true) : setOthers(false);
    car === "wildLife" ? setWildLife(true) : setWildLife(false);
    car === "technology" ? setTechnology(true) : setTechnology(false);
  }, [car]);

  const handleOnChange = (e) => {
    setCar(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "selectDreamCar"
      ? (result = "Select the Topic")
      : (result = makeFirstLetterCapital(car));
    return result;
  };

  const handleNameChange = () => {};

  const handleSurnameChange = () => {};

  return (
    <div>
      <input type="text" placeholder="Name" onChange={handleNameChange} />
      <input type="text" placeholder="Surname" onChange={handleSurnameChange} />
      <div>
        <h4>Image Gallary {renderResult()}</h4>
      </div>
      <div>
        <select value={car} onChange={handleOnChange}>
          <option value="travel">Travel</option>
          <option value="cars">Cars</option>
          <option value="wildLife">Wildlife</option>
          <option value="technology">Technology</option>
          <option value="others">Others</option>
        </select>
      </div>

      {travel && <Travel />}
      {cars && <Cars />}
      {wildLife && <Wildlife />}
      {technology && <Technology />}
      {others && <ImageFinder />}
      <footer>
        <h5>
          Author: Avez Anwar
          <br />
          <h5>Image Gallary React App</h5>
        </h5>
      </footer>
    </div>
  );
}

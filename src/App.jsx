import intersect from "just-intersect";
import { useState } from "react";
import data from "./data.json";
function App() {
  console.log(data);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);

  function toggleBrand(e) {
    if (e.target.checked) {
      setBrands((old) => old.concat(e.target.value));
    } else {
      setBrands((old) => old.filter((el) => el !== e.target.value));
    }
  }
  function toggleColor(e) {
    if (e.target.checked) {
      setColors((old) => old.concat(e.target.value));
    } else {
      setColors((old) => old.filter((el) => el !== e.target.value));
    }
  }
  function filterByBrands(data) {
    //we have an array of stuff and want to compoare it to a string
    if (brands.length === 0) {
      return data;
    }
    return data.filter((el) => brands.includes(el.brand));
  }
  function filterByColors(data) {
    //we have an array of stuff and want to compare it to aa array of stuff
    if (colors.length === 0) {
      return data;
    }
    return data.filter((el) => intersect(colors, el.color).length);
  }
  let filtered = [...data];

  filtered = filterByBrands(filtered);
  filtered = filterByColors(filtered);

  return (
    <div className="App">
      <nav>
        <fieldset>
          <legend>Brands</legend>
          Discraft{" "}
          <input
            type="checkbox"
            name="brands"
            onChange={toggleBrand}
            value="Discraft"
          />
          <br />
          Kalle
          <input
            type="checkbox"
            name="brands"
            value="Kalle"
            onChange={toggleBrand}
          />
        </fieldset>
        <fieldset>
          <legend>Colors</legend>
          Pink
          <input
            type="checkbox"
            name="colors"
            value="pink"
            onChange={toggleColor}
          />
          green
          <input
            type="checkbox"
            name="colors"
            value="green"
            onChange={toggleColor}
          />
          yellow
          <input
            type="checkbox"
            name="colors"
            value="yellow"
            onChange={toggleColor}
          />
          purple
          <input
            type="checkbox"
            name="colors"
            value="purple"
            onChange={toggleColor}
          />
        </fieldset>
      </nav>
      <main>
        {filtered.map((el) => {
          return (
            <article>
              <h2>{el.name}</h2>
              <h3>{el.brand}</h3>
              <p>{el.color.join(", ")}</p>
            </article>
          );
        })}
      </main>
    </div>
  );
}
/*
 {
    "_id": "638b04162e3f60020000b715",
    "name": "ESP Scorch",
    "brand": "Discraft",
    "category": "Discs",
    "subcategory": "Distance Drivers",
    "description": "Designed to provide maximum glide with a reliable fade regardless of your skill level. Beginner to Intermediate players will find the Scorch an easy to throw straight flier that will fight to come back, even in the wind, while Advanced and Professionals can expect high-speed turn and a late finish producing amazing distance.",
    "image": ["638b03fd2e3f60020000b70e"],
    "color": ["pink", "green", "yellow", "purple"],
    "speed": 11,
    "fade": 0.5,
    "turn": -2,
    "glide": 6,
    "_created": "2022-12-03T08:08:54.729Z",
    "_changed": "2022-12-05T14:28:51.461Z",
    "_createdby": "pau.fiaschi@gmail.com",
    "_changedby": "pau.fiaschi@gmail.com",
    "_version": 4,
    "price": 160,
    "img": "https://kea.paufiaschi.com/dc-images/escorch_1.png,https://kea.paufiaschi.com/dc-images/escorch_2.png,https://kea.paufiaschi.com/dc-images/escorch_3.png,https://kea.paufiaschi.com/dc-images/escorch_4.png"
  }
*/
export default App;

/*
# Strange

brands [] string

colors [] []

# numeric

price num num
speed num num
glide num num
*/

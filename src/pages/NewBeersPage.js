import NavBar from "../componets/NavBar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeersPage({ beers }) {
  const navigate = useNavigate();
  const [alBeers, setAllBeers] = useState({ beers });
  const [form, setForm] = useState({
    name: "",
    image: "",
    tagline: "",
    contributed_by: "",
    attenuation_level: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ironbeer-api.fly.dev/new", form);
    } catch (error) {
      console.log(error)
    }

    // setForm({
    //   name: "",
    //   image: "",
    //   tagline: "",
    //   contributed_by: "",
    //   attenuation_level: "",
    //   description: "",
    //   first_brewed: "",
    //   brewers_tips: "",
    // })

    navigate("/beers");
  }

  return (
    <div className="allNew">
      <NavBar />
      <form className="form">
        <label>Image:</label>
        <input
          onChange={handleChange}
          type="text"
          name="image"
          value={form.image}
        ></input>
        <label>Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={form.name}
        ></input>
        <label>Tagline:</label>
        <input
          onChange={handleChange}
          type="text"
          name="tagline"
          value={form.tagline}
        ></input>
        <label>Description:</label>
        <input
          onChange={handleChange}
          type="text"
          name="description"
          value={form.description}
        ></input>
        <label>First Brewed:</label>
        <input
          onChange={handleChange}
          type="text"
          name="first_brewed"
          value={form.first_brewed}
        ></input>
        <label>Brewers Tips:</label>
        <input
          onChange={handleChange}
          type="text"
          name="brewers_tips"
          value={form.brewers_tips}
        ></input>
        <label>Attenuation Level:</label>
        <input
          onChange={handleChange}
          type="number"
          name="attenuation_level"
          value={form.attenuation_level}
        ></input>
        <label>Contributed By:</label>
        <input
          onChange={handleChange}
          type="text"
          name="contributed_by"
          value={form.contributed_by}
        ></input>
        <button onClick={handleSubmit}>+</button>
      </form>
    </div>
  );
}

export default NewBeersPage;

import { useState } from "react";
import { districts } from "../assets/locations";
import { LOCATIONS } from "../assets/locations";
import api from "../api";
import { redirect } from "react-router-dom";

function Register() {
  type Division = {
    divcode: string;
    division: string;
  };

  const [divOptions, setDivOptions] = useState<Division[]>(
    LOCATIONS["Colombo"]
  );

  const changedivoptions = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const district = event.target.value;
    let divchoicearray = LOCATIONS[district];
    setDivOptions(divchoicearray);
  };

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [location, setLocation] = useState<string>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api.post("/api/users/", {
        username: username,
        password: password,
        location: location,
      });
      console.log(response); //TODO: delete later
      redirect("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Register</h1>

      <input
        className="form-input"
        type="text"
        placeholder="Username"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />

      <input
        className="form-input"
        type="password"
        placeholder="Password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />

      <select
        name="district"
        id="district"
        className="form-container"
        onChange={changedivoptions}
      >
        {districts.map(
          (district) => (
            <option key={district.discode}>{district.district}</option>
          ) //option value defaults to the innerHTML text
        )}
      </select>

      <select
        name="location"
        id="location"
        className="form-container"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setLocation(e.target.value)
        }
      >
        {divOptions.map((divinfo) => (
          <option key={divinfo.divcode} value={divinfo.divcode}>
            {divinfo.division}
          </option>
        ))}
      </select>
      <button className="form-button" type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;

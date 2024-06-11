import { ChangeEvent, FormEvent, useState } from "react";
import { fetchRecipesByQuery } from "../services/recipes";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setSearchResults }) {
  const [userInput, setUserinput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const searchResponse = await fetchRecipesByQuery(userInput);
      setSearchResults(searchResponse);
      navigate(`/recipes?search=${userInput}`);
    } catch (error) {
      console.log(error);
    } finally {
      setUserinput("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserinput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className=" w-full m-auto py-4">
      <label className="input input-bordered w-2/4 m-auto flex items-center gap-2">
        <input
          onChange={handleChange}
          value={userInput}
          type="text"
          className="grow"
          placeholder="Search for recipes"
          required
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </form>
  );
}

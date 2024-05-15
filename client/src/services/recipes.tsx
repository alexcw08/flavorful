import axios from "axios";

export const fetchRecipesByQuery = async (query: string) => {
  if (query.trim() === "") {
    throw new Error("Invalid search. Try again.");
  }

  try {
    const response = await axios.get(
      `http://localhost:3000/api/recipes/?search=${encodeURI(query)}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching recipe by query.", error);
    throw error;
  }
};

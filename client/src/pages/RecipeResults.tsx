import { Header } from "../components/Header";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

export default function RecipeResults() {
  return (
    <>
      <Header />
      <SearchBar />
      <ResultsList />
    </>
  );
}

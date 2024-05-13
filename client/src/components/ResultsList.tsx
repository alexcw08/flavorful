import ResultItem from "./ResultItem";

export default function ResultsList() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-xl">Results for _____</h1>
      <ResultItem />
      <ResultItem />
      <ResultItem />
      <ResultItem />
    </div>
  );
}

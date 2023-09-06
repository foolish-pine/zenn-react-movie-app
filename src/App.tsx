import "./App.css";
import { Row } from "./Row";
import { requests } from "./request";

function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
    </div>
  );
}

export default App;

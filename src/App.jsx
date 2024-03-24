import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold">Hello</h1>
      <div
        className="radial-progress"
        style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}
        role="progressbar"
      >
        70%
      </div>
      <div
        className="radial-progress"
        style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}
        role="progressbar"
      >
        70%
      </div>
    </>
  );
}

export default App;

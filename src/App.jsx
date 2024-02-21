import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Hank" message="I sell propane and propane accessories. " />
      <Hello name="Dale" message="Pocket Sand Sh-sh-sha" />
      <Hello name="Boomhauer" message="Dang ol' love, man." />
      <Hello
        name="Bill"
        message="At least if you're feeling full, you're feeling something."
      />
    </div>
  );
}

export default App;

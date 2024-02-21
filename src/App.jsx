import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello
        name="Hank"
        message="I sell propane and propane accessories"
        emoji="🤠"
      />
      <Hello name="Dale" message="Pocket Sand Sh-sh-sha" emoji="🪳" />
      <Hello name="Boomhauer" message="Dang ol' love, man" emoji="🏄‍♂️" />
      <Hello
        name="Bill"
        message="At least if you're feeling full, you're feeling something"
        emoji="🪖"
      />
    </div>
  );
}

export default App;

import Hello from "./components/Hello";

function App() {
  const hankPerson = {
    name: "Hank",
    message: "I sell propane and propane accessories",
    emoji: "🤠",
    seatNumbers: [1, 4, 7],
  };

  const dalePerson = {
    name: "Dale",
    message: "Pocket Sand Sh-sh-sha",
    emoji: "🪳",
    seatNumbers: [2, 5, 8],
  };

  const boomhauerPerson = {
    name: "Boomhauer",
    message: "Dang ol' love, man",
    emoji: "🏄‍♂️",
    seatNumbers: [3, 6, 9],
  };

  const billPerson = {
    name: "Bill",
    message: "At least if you're feeling full, you're feeling something",
    emoji: "🪖",
    seatNumbers: [4, 7, 0],
  };

  return (
    <div className="App">
      <Hello person={hankPerson} />
      <Hello person={dalePerson} />
      <Hello person={boomhauerPerson} />
      <Hello person={billPerson} />
    </div>
  );
}

export default App;

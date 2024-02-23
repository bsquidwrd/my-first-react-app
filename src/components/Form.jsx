import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          value={firstName}
        />
      </form>
    </div>
  );
}

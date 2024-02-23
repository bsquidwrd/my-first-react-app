import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "John", lastName: "Smith" });

  return (
    <div>
      <h1>
        Hello {name.firstName} {name.lastName}
      </h1>
      <form>
        <input
          onChange={(event) =>
            setName({ ...name, firstName: event.target.value })
          }
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
          type="text"
          value={name.lastName}
        />
      </form>
    </div>
  );
}

import data from "../data.json";

const Transitions = () => {
  return (
    <div className="container-fluid">
      <h1>Main Transitions</h1>
      <ul>
        {data
          .filter((user) => typeof user.parent === "string" && user.parent.trim() !== "")
          .map((user) => (
            <li key={user.id}>
              <a href={user.sub}>
                <strong>{user.parent} - {user.name}</strong>
              </a>
              : {user.description}
            </li>
          ))}
      </ul>
      <h1>Sub Transitions</h1>
      <ul>
        {data
          .filter((user) => !(typeof user.parent === "string" && user.parent.trim() !== ""))
          .map((user) => (
            <li key={user.id}>
              <a href={user.sub}>
                <strong>{user.name}</strong>
              </a>
              : {user.description}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Transitions;
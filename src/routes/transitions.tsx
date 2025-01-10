import data from "../data.json";

const Transitions = () => {
  return (
    <div>
      <h1>All Transitions</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <a href="/passingHalfGuard">{user.name}</a>: {user.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transitions;
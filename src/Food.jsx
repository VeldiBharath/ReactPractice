function Food() {
  const food1 = "Orange";
  const food2 = "Apple";

  return (
    <>
      <h1>This is a Food Component</h1>
      <ul>
        <li>Banana</li>
        <li>{food1.toUpperCase()}</li>
        <li>{food2}</li>
      </ul>
      <hr />
    </>
  );
}

export default Food;

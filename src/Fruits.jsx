function Fruits() {
  const fruitslist = [
    {
      id: 1,
      name: "Apple",
      calories: 100,
    },
    {
      id: 2,
      name: "Orange",
      calories: 40,
    },
    {
      id: 3,
      name: "Banana",
      calories: 60,
    },

    {
      id: 4,
      name: "Grapes",
      calories: 20,
    },
  ];

  const lists = fruitslist.map((fruit, index) => (
    <li key={index}>
      name : {fruit.name} &nbsp; Calories : {fruit.calories}
    </li>
  ));

  const sortedfruits = fruitslist.sort((a, b) => a.name.localeCompare(b.name));
  const sortedlists = sortedfruits.map((fruit, index) => (
    <li key={index}>
      name : {fruit.name} &nbsp; Calories : {fruit.calories}
    </li>
  ));

  const fruitsSortedWithCalories = fruitslist.sort(
    (a, b) => a.calories - b.calories
  );
  const sortedCalories = fruitsSortedWithCalories.map((fruit, index) => (
    <li key={index}>
      name : {fruit.name} &nbsp; Calories : {fruit.calories}
    </li>
  ));

  const lowCalFruits = fruitslist.filter((fruit) => fruit.calories < 70);
  const lowCalories = lowCalFruits.map((fruit, index) => (
    <li key={index}>
      name : {fruit.name} &nbsp; Calories : {fruit.calories}
    </li>
  ));

  return (
    <>
      <hr />
      <h1>This is Fruits component - Learning Map, Filter, Sort</h1>

      <h4>Displaying List as it is using Map</h4>
      <ol>{lists}</ol>

      <h4>
        Displaying List with sorting names using : fruitslist.sort((a, b) =
        a.name.localeCompare(b.name));
      </h4>
      <ol>{sortedlists}</ol>

      <h4>
        Displaying List with sorting calories using : const
        fruitsSortedWithCalories = fruitslist.sort( (a, b) = a.calories -
        b.calories );
      </h4>
      <ol>{sortedCalories}</ol>

      <h4>
        Displaying List with filtering low calorie fruits using : const
        lowCalFruits = fruitslist.filter((fruit) = fruit.calories lessthan 70);
      </h4>
      <ol>{lowCalories}</ol>

      <hr />
    </>
  );
}

export default Fruits;

import Card from "./Card";
import ColorPicker from "./colorpicker";
import ComponentA from "./componentA";
import DigitalClock from "./DigitalClock";
import Food from "./Food";
import Footer from "./Footer";
import Fruits from "./Fruits";
import Header from "./Header";
import IncDec from "./incdec";
import OnChangeWork from "./onchangework";
import Students from "./Students";
import UpdateArray from "./updatearray";
import UpdateArrayOfObjects from "./updatearrayofobjects";
import UpdateObject from "./updateobject";
import UseEffectHook from "./useeffecthook";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <>
        <h1>This is Props Component - Learning props</h1>
      </>
      <Students name="Mario" age={20} isStudent={true} />
      <Students name="Superman" age={25} isStudent={true} />
      <Students name="Spiderman" age={30} isStudent={true} />
      <Fruits />
      <IncDec />
      <OnChangeWork />
      <ColorPicker />
      <UpdateObject />
      <UpdateArray />
      <UpdateArrayOfObjects />
      <UseEffectHook />
      <DigitalClock />
      <ComponentA />
      <Footer />
    </>
  );
}

export default App;

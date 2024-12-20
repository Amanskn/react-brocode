import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import x, { Card } from "./components/Card";
function App() {
  console.log("App component rendered");
  console.log(x);

  return (
    <>
      <Card name="Aman" age="23" add="skn" booleanValue={true} />
      <Card name="Birendra" />
    </>
  );
}

export default App;

import { RecipiesMap } from "./component/Recipies/RecipiesMap";
import recipies from "./recipies.json";
import { Section } from "./component/Recipies/Container";
import { CgAirplane } from "react-icons/cg";

function App() {
  return (
    <Section>
      <RecipiesMap recipies={recipies} />
      <CgAirplane />
    </Section>
  );
}

export default App;

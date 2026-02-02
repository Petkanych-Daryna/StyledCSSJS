import { RecipiesMap } from "./component/Recipies/RecipiesMap";
import recipies from "./recipies.json";
import paintingDate from "./painting.json";
import { Section } from "./component/Recipies/Container";
import { PaintingList } from "./component/Recipies/PaintingList";
import { CgAirplane } from "react-icons/cg";

function App() {
  return (
    <Section>
      <RecipiesMap recipies={recipies} />
      <PaintingList data={paintingDate} />
      <CgAirplane />
    </Section>
  );
}

export default App;

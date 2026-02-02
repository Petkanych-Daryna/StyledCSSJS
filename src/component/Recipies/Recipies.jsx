import PropTypes from "prop-types";
import { Container, List, Recipe, Diff } from "./Recipies.styled";

export function Recipies({ name, time, servings, calories, difficulty, image }) {
  return (
    <Container>
      <List>
        <Recipe>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>Time: {time} min</p>
          <p>Servings: {servings}</p>
          <p>Calories: {calories}</p>

          <Diff $difficulty={difficulty}>
            Difficulty: {difficulty}
          </Diff>
        </Recipe>
      </List>
    </Container>
  );
}


//1
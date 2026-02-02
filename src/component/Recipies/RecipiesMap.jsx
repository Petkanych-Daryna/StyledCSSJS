import { Recipies } from './Recipies';


export function RecipiesMap({ recipies }) {
  return (
    <ul className="list">
      {recipies.map(rec => (
        <Recipies key={rec.name} {...rec} />
      ))}
    </ul>
  );
}

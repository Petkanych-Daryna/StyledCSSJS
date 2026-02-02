import { PaintingItem } from "./PaintingItem";

export const PaintingList = ({ data = [], Icon }) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {Icon && <Icon />}

          <img src={item.url} alt={item.title} width="480" />

          <h2>{item.title}</h2>

          <p>
            Автор:{" "}
            <a href={item.author.url}>
              {item.author.tag}
            </a>
          </p>

          <p>Ціна: {item.price} грн</p>
          <p>Наявність: {item.quantity}</p>

          <button type="button">Додати в кошик</button>
        </li>
      ))}
    </ul>
  );
};

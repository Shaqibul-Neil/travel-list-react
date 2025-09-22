const Item = ({ item, handleDeleteItems, handleToggleItem }) => {
  const { description, quantity, packed } = item;

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {description} {quantity}
      </span>
      <button onClick={() => handleDeleteItems(item.id)}>❌</button>
    </li>
  );
};

export default Item;

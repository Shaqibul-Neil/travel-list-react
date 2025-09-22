import { useState } from 'react';

const Item = ({ item, handleDeleteItems }) => {
  const { description, quantity, packed } = item;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <input type="checkbox" onChange={handleChange} />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {description} {quantity}
      </span>
      <button onClick={() => handleDeleteItems(item.id)}>❌</button>
    </li>
  );
};

export default Item;

import { useState } from 'react';

const Item = ({ item }) => {
  const { description, quantity, packed } = item;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <input type="checkbox" onChange={handleChange} checked={packed} />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {description} {quantity}
      </span>
    </li>
  );
};

export default Item;

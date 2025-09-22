import { useState } from 'react';
import Item from './Item';
// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: false },
//   { id: 2, description: 'Socks', quantity: 12, packed: true },
// ];

const PackingList = ({
  items,
  handleDeleteItems,
  handleToggleItem,
  handleClearList,
}) => {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === 'packed')
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            key={item.id}
            handleDeleteItems={handleDeleteItems}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      {items.length !== 0 && (
        <div className="actions">
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="input">Sort By Input Order</option>
            <option value="description">Sort By Description</option>
            <option value="packed">Sort By Packed Status</option>
          </select>
          <button onClick={handleClearList}>Clear List</button>
        </div>
      )}
    </div>
  );
};

export default PackingList;

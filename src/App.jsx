import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = item => {
    setItems(items => [...items, item]);
  };
  const handleDeleteItems = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  const handleToggleItem = id => {
    const checkedItems = items.map(item =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(checkedItems);
  };
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItems={handleDeleteItems}
        handleToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

export default App;

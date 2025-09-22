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
  const handleClearList = () => {
    setItems([]);
  };

  const handleToggleItem = id => {
    const checkedItems = items.map(
      item => (item.id === id ? { ...item, packed: !item.packed } : item) //...item মানে item এর সব property আগের মতো থাকবে। শুধু packed property-টা update হবে → !item.packed দিয়ে।  object spreading + property overriding . JavaScript এ object literal এর মধ্যে যদি same key দুইবার define করো, তাহলে শেষেরটা আগেরটাকে override করে। আমরা array বা object mutate করি নাই। সরাসরি আগেরটা change না করে, বরং map + spread operator দিয়ে নতুন object বানাচ্ছি।
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
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

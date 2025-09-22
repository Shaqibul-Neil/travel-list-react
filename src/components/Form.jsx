import { useState } from 'react';

const Form = ({ handleAddItems }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    //console.log(e);

    //if description is empty the form should not be allowed to submit
    if (!description) alert('Please add some items');

    //now using these input values lets create a new obj. needs to be inside this handleSubmit function otherwise on every change a new obj will create. bt in here only when we press Enter or click a new obj will be created
    const newItem = { description, quantity, packed: false, id: Date.now() };
    //console.log(newItem);
    handleAddItems(newItem);
    //after submission go back to original state like emptying the input fields

    setDescription('');
    setQuantity(1);
  };

  // const handleChange = e => {
  //   //console.log(e.target.value);
  //   setDescription(e.target.value);
  // };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
//instead of listening to onSubmit we can also listen for onClick in the button <button onClick={}>Add</button> but then the submit will only work when we click this button and then it would not work for pressing ENTER key as we know pressing ENTER will also submit the form

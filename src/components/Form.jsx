const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="" id="">
        {Array.from({ length: 20 }, (_, index) => index + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>Add</button>
    </form>
  );
};

export default Form;
//instead of listening to onSubmit we can also listen for onClick in the button <button onClick={}>Add</button> but then the submit will only work when we click this button and then it would not work for pressing ENTER key as we know pressing ENTER will also submit the form

const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🧳🧳🧳</em>
      </footer>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentagePackedItems = Math.round((packedItems / numItems) * 100);

  const statsText = () => {
    if (percentagePackedItems === 100) {
      return `You've got everything ready to goooooo.... ✈️✈️✈️`;
    }
    if (percentagePackedItems === 0) {
      return `💼 You've ${numItems} items in your list and You didn't pack anything...Hurry up or you will miss the flight ⌚⌚⌚`;
    }
    return `💼 You've ${numItems} items in your list and you already packed ${packedItems}
        (${percentagePackedItems})% 👀👀👀`;
  };

  return (
    <footer className="stats">
      <em>{statsText()}</em>
    </footer>
  );
};

export default Stats;

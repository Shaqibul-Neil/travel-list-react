const Stats = ({ items }) => {
  const numItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentagePackedItems = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePackedItems === 100
          ? `You've got everything ready to goooooo.... ✈️✈️✈️`
          : `💼 You've ${numItems} items in your list and you already packed ${packedItems}
        (${percentagePackedItems})% 👀`}
      </em>
    </footer>
  );
};

export default Stats;

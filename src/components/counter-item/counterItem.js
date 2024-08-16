import React from 'react';

const CounterItem = ({ counterGenerate }) => {
  return (
    <ul>
      {counterGenerate().map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default CounterItem;

import React from 'react';

export default function Counter() {
  const [number, setNumber] = React.useState(0);

  return (
    <button onClick={() => setNumber(number + 1)}>
      {number}
    </button>
  );
}

import React from 'react';

export default function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <h2>Today is {new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}</h2>
    </>
  );
}

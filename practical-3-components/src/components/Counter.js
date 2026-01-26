import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <button 
          onClick={() => setCount(count - 1)}
          style={{ backgroundColor: '#e53935', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Decrement
        </button>
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</span>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ backgroundColor: '#2e7d32', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
export default Counter;
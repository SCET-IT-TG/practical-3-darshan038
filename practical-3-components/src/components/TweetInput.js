import React, { useState } from 'react';

const TweetInput = () => {
  const [text, setText] = useState("");
  const charLimit = 50;
  const isOverLimit = text.length > charLimit;
  const isButtonDisabled = text.length === 0 || isOverLimit;
  return (
    <div style={{ padding: '20px', maxWidth: '400px', border: '1px solid #ddd' }}>
      <textarea
        placeholder="What's happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', height: '100px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', alignItems: 'center' }}>
        <span style={{ color: isOverLimit ? 'red' : 'black' }}>
          Characters: {text.length}/{charLimit}
        </span>
        
        <button 
          disabled={isButtonDisabled}
          style={{
            backgroundColor: isButtonDisabled ? '#ccc' : '#80d8ff',
            color: 'white',
            padding: '8px 24px',
            border: 'none',
            borderRadius: '20px',
            cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
export default TweetInput;
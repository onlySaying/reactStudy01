// Counter.js

import React from 'react';

function Counter()
{
    const count =1;
    return (
        <div>
          <h1>카운터</h1>
          <p>현재 값: {count}</p>
          <button >증가</button>
          <button >감소</button>
        </div>
      );
}
  

export default Counter;


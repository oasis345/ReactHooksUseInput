import React, { useState } from 'react';
import './App.css';

export const useInput = (initialValue ,validator) => {
  const [value , setValue] = useState(initialValue)
  const onChange = event =>{
    const {
      target:   {value}
  } = event
  let willUpdate = true
  if(typeof validator === "function"){
    willUpdate = validator(value)
  }
  if(willUpdate){
    setValue(value)
  }
}

  return { value ,onChange};
}


const App=()=> {
  // const maxLen = value => value.length <= 10
  const maxLen = value => !value.includes("@")
  const name = useInput("Mr.", maxLen)
  return (
    <div className="App">
      <h1>hello</h1>
      {/* 3점 표기법으로 name안의 내용을 풀어준다 꿀팁! 아래가 같은소스인데 내용이 확 줄게된다. */}
      <input placeholder="name" {...name}/>  
      {/* <input placeholder="name" value={name.value} onChange={name.onChange}/> */}
    </div>
  );
}

export default App;

import { Fragment } from 'react';

function App() {
/*	
  const greeting = "Hi!Tom";	
  const dom = <h1 className="foo">{greeting}</h1>;	
  return dom;
*/
 // return <input type="text" onClick={() => {console.log("I am clicked.")}} />;
 // return <input type="text" onChange={() => {console.log("I am clicked.")}} />;
  return (
    <Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked.")}} />
    </Fragment>	  
  )
}

export default App;

import React from "react";

// class App extends Component {
//
//   render() {
//     return (
//       <>
//         <h1>hello</h1>
//       </>
//     )
//   }
//
// }

const App = () => {
  return (
    <>
      <Cat/>
    </>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;

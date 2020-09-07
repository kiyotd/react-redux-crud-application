import React from "react";

const App = () => {

  const users = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Hanako2" }
  ];

  return (
    <>
      {
        users.map((user, index) => (
          <User key={index} name={user.name} age={user.age}/>
        ))
      }
    </>
  );
};

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old.</div>;
};

User.defaultProps = {
  age: 1
}

export default App;

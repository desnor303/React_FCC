// Change code below this line
// Change code below this line
// Change code below this line
// Change code below this line
// class Mycomponent extends React.Component {
//   constructor(probs) {
//     super(probs);
//   }
//   render() {
//     return (
//       <div>
//       <h1>My First React Component!
//       </h1>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Mycomponent/>,document.getElementById("challenge-node"))
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <h1>My First React Component!</h1>
      </div>
    )
  }
}
ReactDOM.render(<MyComponent/>,document.getElementById("challenge-node"))
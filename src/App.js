import React from "react";
import "./styles.css";
import Key from "./components/Key";
import Screen from "./components/Screen";
import "./App.css";

let row1 = ["(", "CE", ")", "C"];
let row2 = ["1", "2", "3", "+"];
let row3 = ["4", "5", "6", "-"];
let row4 = ["7", "8", "9", "*"];
let row5 = [".", "0", "=", "/"];
// export default function App() {
//   const [Display, setDisplay] = React.useState("");
//   return (
// <div className="App">
//   <table>
//     <tr class="text">Simple Calculator</tr>
//     <tr>
//       <Screen value={Display} />
//     </tr>
//     <tr>
//       {row1.map((element, i) => (
//         <Key
//           value={element}
//           key={i}
//           onChange={(i) => {
//             console.log("hello");
//             setDisplay(Display + i);
//           }}
//         />
//       ))}
//     </tr>
//     <tr>
//       {row2.map((element, i) => (
//         <Key
//           value={element}
//           key={i}
//           onChange={(i) => {
//             console.log("hello");
//             setDisplay(Display + i);
//           }}
//         />
//       ))}
//     </tr>
//     <tr>
//       {row3.map((element, i) => (
//         <Key
//           value={element}
//           key={i}
//           onChange={(i) => {
//             console.log("hello");
//             setDisplay(Display + i);
//           }}
//         />
//       ))}
//     </tr>
//     <tr>
//       {row4.map((element, i) => (
//         <Key
//           value={element}
//           key={i}
//           onChange={(i) => {
//             console.log("hello");
//             setDisplay(Display + i);
//           }}
//         />
//       ))}
//     </tr>
//     <tr>
//       {row5.map((element, i) => (
//         <Key
//           value={element}
//           key={i}
//           onChange={(i) => {
//             console.log("hello");
//             setDisplay(Display + i);
//           }}
//         />
//       ))}
//     </tr>
//   </table>
// </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Display: ""
    };
  }
  handleClick = (i) => {
    if (i === "C") {
      this.clear();
    } else if (i === "=") {
      this.calculate();
    } else if (i === "CE") {
      this.backSpace();
    } else {
      this.setState({ Display: this.state.Display + i });
      // console.log("Hello world" + i + "Display" + this.state.Display);
    }
  };
  render() {
    return (
      <div className="App">
        <table>
          <tr class="text">Simple Calculator</tr>
          <tr>
            <Screen value={this.state.Display} />
          </tr>
          <tr>
            {row1.map((element, i) => (
              <Key value={element} key={i} onChange={this.handleClick} />
            ))}
          </tr>
          <tr>
            {row2.map((element, i) => (
              <Key value={element} key={i} onChange={this.handleClick} />
            ))}
          </tr>
          <tr>
            {row3.map((element, i) => (
              <Key value={element} key={i} onChange={this.handleClick} />
            ))}
          </tr>
          <tr>
            {row4.map((element, i) => (
              <Key value={element} key={i} onChange={this.handleClick} />
            ))}
          </tr>
          <tr>
            {row5.map((element, i) => (
              <Key value={element} key={i} onChange={this.handleClick} />
            ))}
          </tr>
        </table>
      </div>
    );
  }

  clear = () => {
    this.setState({ Display: "" });
  };
  backSpace = () => {
    this.setState({
      result: this.state.Display.slice(0, -1)
    });
  };
  calculate = () => {
    var checkResult = "";
    if (this.state.Display.includes("--")) {
      checkResult = this.state.Display.replace("--", "+");
    } else {
      checkResult = this.state.Display;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        Display: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        Display: "error"
      });
    }
  };
}
export default App;

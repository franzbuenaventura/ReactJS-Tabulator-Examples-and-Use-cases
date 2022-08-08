import React from "react";
import "react-tabulator/lib/styles.css"; // required styles
import "react-tabulator/lib/css/tabulator.min.css"; // theme
import BasicTable from "./examples/BasicTable";

const data = [
  {
    id: 1,
    name: "Oli Bob",
    age: "12",
    color: "red",
    dob: "01/01/1980",
    rating: 5,
    passed: true,
    pets: ["cat", "dog"],
  },
  {
    id: 2,
    name: "Mary May",
    age: "1",
    color: "green",
    dob: "12/05/1989",
    rating: 4,
    passed: true,
    pets: ["cat"],
  },
  {
    id: 5,
    name: "Margret Marmajuke",
    age: "16",
    color: "yellow",
    dob: "07/01/1999",
    rating: 4,
    passed: false,
  },
  {
    id: 6,
    name: "Van Ng",
    age: "37",
    color: "green",
    dob: "06/10/1982",
    rating: 4,
    passed: true,
    pets: ["dog", "fish"],
  },
  {
    id: 7,
    name: "Duc Ng",
    age: "37",
    color: "yellow",
    dob: "10/10/1982",
    rating: 4,
    passed: true,
    pets: ["dog"],
  },
];

const exampleList = [
  {
    id: "basic",
    name: "Basic Table",
  },
  {
    id: "nested",
    name: "Nested Table",
  },
  {
    id: "eta",
    name: "eta",
  },
];

export default class App extends React.Component {
  getExample() {
    const ex = this.state ? this.state.example : "";

    switch (ex) {
      case "basic":
        return <BasicTable data={data} />;
      case "nested":
      default:
        return <BasicTable data={data} />;
    }
  }

  onChangeExample(e) {
    this.setState({ example: e.target.value });
  }

  render() {
    return (
      <div style={{ padding: "5rem" }}>
        <div style={{ paddingBottom: "2rem" }}>
          <label htmlFor="examples" style={{ fontSize: "1rem" }}>
            Choose an example:
          </label>
          <select
            name="examples"
            id="examples"
            style={{ marginLeft: "1rem", fontSize: "1rem" }}
            onChange={(e) => this.onChangeExample(e)}
          >
            {exampleList.map((element, i) => {
              return (
                <option value={element.id} key={i}>
                  {element.name}
                </option>
              );
            })}
          </select>
        </div>
        {this.getExample()}
      </div>
    );
  }
}

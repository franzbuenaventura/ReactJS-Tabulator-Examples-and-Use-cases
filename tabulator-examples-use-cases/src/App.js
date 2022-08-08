import React from "react";
import "react-tabulator/lib/styles.css"; // required styles
import "react-tabulator/lib/css/tabulator.min.css"; // theme
import BasicTable from "./examples/BasicTable";
import NestedTable from "./examples/NestedTable";

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
        return <BasicTable />;
      case "nested":
        return <NestedTable />;
      default:
        return <BasicTable />;
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

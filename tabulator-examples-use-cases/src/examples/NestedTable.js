import { ReactTabulator } from "react-tabulator";

export default function NestedTable(props) {
  const columns = [
    { title: "id", field: "id", width: 150 },
    { title: "Name", field: "name", width: 150 },
    { title: "Age", field: "age", hozAlign: "left" },
  ];

  const data = [
    {
      id: 1,
      name: "Billy Bob",
      age: "12",
      _children: [
        { id: 2, name: "Mary May", age: "1" },
        { id: 3, name: "Christine Lobowski", age: "42" },
        {
          id: 4,
          name: "Brendon Philips",
          age: "125",
          _children: [
            { id: 5, name: "Margret Marmajuke", age: "16" },
            { id: 6, name: "Frank Peoney", age: "12" },
          ],
        },
      ],
    },
    { id: 7, name: "Jenny Jane", age: "1" },
    {
      id: 8,
      name: "Martha Tiddly",
      age: "42",
      _children: [{ id: 9, name: "Frasier Franks", age: "125" }],
    },
    { id: 10, name: "Bobby Green", age: "11" },
  ];

  const config = {
    dataTree: true,
    dataTreeStartExpanded: true,
  };

  return <ReactTabulator columns={columns} data={data} options={config} />;
}

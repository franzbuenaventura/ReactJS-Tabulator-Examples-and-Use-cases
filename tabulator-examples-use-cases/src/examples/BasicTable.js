import { ReactTabulator } from "react-tabulator";

export default function BasicTable(props) {
  const columns = [
    { title: "Name", field: "name", width: 150 },
    { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
    { title: "Favourite Color", field: "color" },
    { title: "Date Of Birth", field: "dob" },
    {
      title: "Rating",
      field: "rating",
      hozAlign: "center",
      formatter: "star",
    },
    {
      title: "Passed?",
      field: "passed",
      hozAlign: "center",
      formatter: "tickCross",
    },
    {
      title: "Custom",
      field: "custom",
      hozAlign: "center",
      editor: "input",
    },
  ];

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

  return <ReactTabulator columns={columns} data={data} />;
}

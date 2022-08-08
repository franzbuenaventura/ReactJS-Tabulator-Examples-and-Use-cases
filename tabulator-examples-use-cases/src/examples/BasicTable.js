import { ReactTabulator } from "react-tabulator";

export default function BasicTable(props) {
  const COLUMNS = [
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

  return <ReactTabulator columns={COLUMNS} data={props.data} />;
}

/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import List from "../currentlist.js/list";
import "./form.css";
import { useParams } from "react-router-dom";
function FormBar() {
  const [data, setdata] = useState([]);
  const [Result, setResult] = useState("");
  const [Items, setItems] = useState([]);
  let { id } = useParams();
  // console.log(Result)
  async function itemlist() {
    const response = await fetch("http://localhost:3000/notes/additems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ discription: Result, user: id }),
    });
    const result = await response.json();
    fetchData();
    // console.log(result.data);
  }
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      headers: { accept: "application/json" },
    });
    const result = await response.json();
    console.log(result);
    setdata(result.notes);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="new">Add new item : </div>
      <input
        type="text"
        onChange={(e) => {
          setResult(e.target.value);
        }}
        name="name"
      />
      <br></br>
      <button className="button" onClick={itemlist}>
        submit
      </button>
      <br></br>
      <List
        fetchData={fetchData}
        data={data}
        items={Items}
        SetItem={setItems}
      />
    </>
  );
}

export default FormBar;

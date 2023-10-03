import React, { useState, useEffect } from "react";
import "./Table.css";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import Paper from "@mui/material/Paper";


function TodoTableJson() {
  const url = "http://localhost:4000/lists";
  const [data, setData] = useState([]);
  
  const defaultMaterialTheme = createTheme(
    {
      typography: {
        fontSize:"10px",
      },
    }
  );

  useEffect(() => {
    getLists();
  }, []);

  const getLists = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  };
  const columns = [
    {
      title: "Item",
      field: "item",
      validate: (rowData) =>
        rowData.name === undefined || rowData.name === "" ? "Required" : true,
    },
  ];
  return (
    <div className="todotable" >
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            title={'Planner'}
            columns={columns}
            data={data}
            options={{ actionsColumnIndex: -1, addRowPosition: "first" }}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  //json-server API call to add a row
                  fetch(url, {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify(newData),
                  })
                    .then((resp) => resp.json())
                    .then((resp) => {
                      getLists();
                      resolve();
                    });
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  //json-server API call to add update a row
                  fetch(url + "/" + oldData.id, {
                    method: "PUT",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify(newData),
                  })
                    .then((resp) => resp.json())
                    .then((resp) => {
                      getLists();
                      resolve();
                    });
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  //json-server API call to delete a row
                  fetch(url + "/" + oldData.id, {
                    method: "DELETE",
                    headers: {
                      "Content-type": "application/json",
                    },
                  })
                    .then((resp) => resp.json())
                    .then((resp) => {
                      getLists();
                      resolve();
                    });
                }),
            }}
          />
        </ThemeProvider>
    </div>
  );
}

export default TodoTableJson;

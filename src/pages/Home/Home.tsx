import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data/people";
import { Person } from "@/models";
import { Checkbox } from "@mui/material";

export type HomeInterface = object;

const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;

  const findPerson = (person: Person) => {};

  const handleChange = (person: Person) => {
    setSelectedPeople(findPerson(person)?);
  };
  const colums = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      sorteable: false,
      flex: 1,
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={!!selectedPeople.find((p) => p.id === params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={People}
      columns={colums} // Asegúrate de que 'columns' esté bien escrito
      disableColumnSelector
      autoHeight
      initialState={{
        pagination: {
          paginationModel: { pageSize: pageSize },
        },
      }}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default Home;

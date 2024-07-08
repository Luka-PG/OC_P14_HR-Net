// colonnes du tableau d'employés formatés pour le react-data-table-component dans "employeeTable"
export const tableColumns = [
    {
        name: "FirstName",
        selector: (row) => row.firstname,
        sortable: true,
        minwidth: "128px"
    },
    {
        name: "LastName",
        selector: (row) => row.lastname,
        sortable: true,
        minwidth: "126px"
    },
    {
        name: "Birth",
        selector: (row) => row.birthdate,
        sortable: true,
        minwidth: "110px"
    },
    {
        name: "Department",
        selector: (row) => row.department,
        sortable: true,
        minwidth: "145px"
    },
    {
        name: "Start Date",
        selector: (row) => row.start,
        sortable: true,
        minwidth: "126px"
    },
    {
        name: "Street",
        selector: (row) => row.street,
        sortable: true,
        minwidth: "179px"
    },
    {
        name: "City",
        selector: (row) => row.city,
        sortable: true,
        minwidth: "120px"
    },
    {
        name: "State",
        selector: (row) => row.state,
        sortable: true,
        minwidth: "90px"
    },
    {
        name: "Zip",
        selector: (row) => row.zip,
        sortable: true,
        minwidth: "80px"
    },
];
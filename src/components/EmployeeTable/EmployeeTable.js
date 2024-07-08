import { useState } from "react";
import { useContext } from "react";

import DataTable from "react-data-table-component";

import { tableColumns } from "../../utils/data/tableColumns";
import { searchEmployees } from "../../utils/format/formatData";
import { EmployeeContext } from "../../utils/context/EmployeeContext";
import Search from "../Search/Search";

import "./_EmployeeTable.css";
import "./_ReactDataTable.css";

// Component pour EmployeeTable

const EmployeeTable = () => {

    const [search, setSearch] = useState("");

    // on utilise le context employé pour accéder au employés enregistrés 
    const { employees } = useContext(EmployeeContext);

    // on utilise les paramètres de "search" et "employees" pour filtrer les données du tableau
    const filteredEployees = searchEmployees(employees, search);

    // mets à jour la recherche avec la valeur rentrée par l'uitlisateur
    const newSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="employee-table">
            <Search
                label="Search"
                onChange={newSearch}
                customStyle="search search-table"
            />
            <DataTable
                columns={tableColumns}
                data={filteredEployees}
                responsive
                striped
                highlightOnHover
                pagination
                theme="solarized"
            />
           
        </div>
    );
};

export default EmployeeTable;
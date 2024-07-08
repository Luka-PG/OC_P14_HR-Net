import { useState, useEffect } from "react";
import { mockEmployees } from "../data/mockEmployees";

//const de gestion de la list des employés 
export const useEmployee = () => {
    const [ employees, setEmployee ] = useState([]);

    // initialise le tableau d'employé avec des employés mockés
    useEffect (() => {
        setEmployee(mockEmployees);
    }, []);

    //ajoute le nouvel employé au tableau déja existant
    const addEmployee = (employee) => {
        const newListEmployees = [...employees];
        newListEmployees.push(employee);
        setEmployee(newListEmployees);
    };

    return {employees, addEmployee};
};
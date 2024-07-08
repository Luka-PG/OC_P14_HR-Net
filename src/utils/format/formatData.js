import { format } from "date-fns";

//formate la date pour être utilisée par le form
export const formatDate = (date) => {
    const reformattedDate = format(new Date(date), "MM-dd-yyyy");
    return reformattedDate;
};

//formate les donnée d'un objet dans un format utilisatble par le form 
export const formatSubmitData = (data) => {
    const formatedData = {
        firstname: data.firstname,
        lastname: data.lastname,
        birthdate: formatDate(data.birthdate),
        street: data.street,
        city: data.city,
        state: data.state.value,
        zip: data.zip,
        start: formatDate(data.start),
        department: data.department.label
    };

    return formatedData;
};

//fonction de recherche des employés dans le tableau
export const searchEmployees = (employees, search) => {

    if (!search) {
        return employees;
    }

    const employeesFiltered = employees.filter((employee) => {
        const employeeValues = [
            employee.firstname.toLowerCase(),
            employee.lastname.toLowerCase(),
            employee.start.toLowerCase(),
            employee.department.toLowerCase(),
            employee.birthdate.toLowerCase(),
            employee.street.toLowerCase(),
            employee.city.toLowerCase(),
            employee.state.toLowerCase(),
            employee.zip.toString(),
        ];

        return employeeValues.some((value) => value.includes(search.toLowerCase()));
    });

    return employeesFiltered;
};
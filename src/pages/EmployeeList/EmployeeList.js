import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";

import "./_EmployeeList.css";

//page employee-list

const EmployeeList = () => {
    return (
        <div className="employee-list">
            <h2 className="employee-list-title">Current Employees</h2>
            <div className="employee-list-content">
                <EmployeeTable />
            </div>
        </div>
    );
};

export default EmployeeList;
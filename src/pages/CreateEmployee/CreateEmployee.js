import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

import "./_CreateEmployee.css";

// page create-employee

const CreateEmployee = () => {
    return (
        <div className="create-employee">
            <h2 className="create-employee-title">Create Employee</h2>
            <div className="create-employee-content">
                <EmployeeForm />
            </div>
        </div>
    );
};

export default CreateEmployee;
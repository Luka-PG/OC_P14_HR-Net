import {  useContext } from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import { formatSubmitData } from "../../utils/format/formatData";
import { EmployeeContext } from "../../utils/context/EmployeeContext";
import { states } from "../../utils/data/states";
import { departments } from "../../utils/data/departments";

import { Modal } from "luka.pg-modal-package-react";

import "./_EmployeeForm.css";
import "./_ReactDatepicker.css";
import "./_ReactSelect.css";

// Component EmployeeForm  

const EmployeeForm = () => {

    const [show, setShow] = useState(false);

    // gestion du formulaire de contact du module react-hook-form
    const { handleSubmit, register, setValue, control, formState: { errors }, reset } = useForm();

    // Use "EmployeeContext" to access "addEmployee" function through the component
    const { addEmployee } = useContext(EmployeeContext);


    // la fonction appelle le context et utilise "addEmployee" pour ajouter un nouvel employé à la table
    const addNewEmployee = (data) => {
        const newEmployee = formatSubmitData(data);
        addEmployee(newEmployee);
        setShow(true);
        reset();
        setValue("state", "");
        setValue("department", "");
    };

    return (
        <div className="employee-form">
            <form className="employee-form-form" onSubmit={handleSubmit(addNewEmployee)}>

                <div className="employee-form-container">

                    <h3 className="employee-form-title">Informations</h3>

                    <div className="employee-form-group">
                        <label htmlFor="firstname" className="employee-form-label">First Name :</label>
                        <input type="text" id="firstname" className={errors.firstname ? "employee-form-input employee-form-input-error" : "employee-form-input"} placeholder="First Name..."
                            {...register( "firstname", { required: true, pattern: /^[\p{L}]{2,25}$/ui } )}
                        />
                        {errors.firstname && (
                            <p className="employee-form-error">Firstname entered is incorrect</p>
                        )}
                    </div>

                    <div className="employee-form-group">
                        <label htmlFor="lastname" className="employee-form-label">Last Name :</label>
                        <input type="text" id="lastname" className={errors.lastname ? "employee-form-input employee-form-input-error" : "employee-form-input"} placeholder="Last Name..."
                            {...register( "lastname", { required: true, pattern: /^[\p{L}]{2,25}$/ui } )}
                        />
                        {errors.lastname && (
                            <p className="employee-form-error">Lastname entered is incorrect</p>
                        )}
                    </div>

                    <div className="employee-form-group">
                        <label htmlFor="birth" className="employee-form-label">Date of birth :</label>
                        <Controller control={control} name="birthdate" 
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    id="birthdate"
                                    className={errors.birthdate ? "employee-form-input employee-form-input-error" : "employee-form-input"}
                                    selected={value}
                                    onChange={onChange}
                                    placeholderText="Choose a date..."
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                            )}
                            rules={{ required: true }}
                        />
                        {errors.birthdate && ( <p className="employee-form-error">Birthdate is required</p> )}
                    </div>
                </div>

                <div className="employee-form-container">

                    <h3 className="employee-form-title">Address</h3>

                    <div className="employee-form-group">
                        <label htmlFor="street" className="employee-form-label">Street :</label>
                        <input type="text" id="street" className={errors.street ? "employee-form-input employee-form-input-error" : "employee-form-input"} placeholder="Street..."
                            {...register( "street", { required: true, pattern: /^[\p{L}\s\d]{2,25}$/ui } )}
                        />
                        {errors.street && (
                            <p className="employee-form-error">Street entered is incorrect</p>
                        )}
                    </div>

                    <div className="employee-form-group">
                        <label htmlFor="city" className="employee-form-label">City :</label>
                        <input type="text" id="city" className={errors.city ? "employee-form-input employee-form-input-error" : "employee-form-input"} placeholder="City..."
                            {...register( "city", { required: true, pattern: /^[\p{L}]{2,25}$/ui } )}
                        />
                        {errors.city && (
                            <p className="employee-form-error">City entered is incorrect</p>
                        )}
                    </div>

                    <div className="employee-form-group">
                        <Controller name="state" control={control}
                            render={({ field: { onChange, value } }) => (
                                <>
                                    <label htmlFor="state" id="state" className="employee-form-label">State :</label>
                                    <Select
                                        options={states}
                                        onChange={onChange}
                                        value={value}
                                        placeholder="Select a state..."
                                        className={errors.state ? "react-select react-select-error" : "react-select"}
                                        classNamePrefix="react-select"
                                        aria-labelledby="state"
                                    />
                                </>
                            )}
                            rules={{ required: true }}
                        />
                        {errors.state && (
                            <p className="employee-form-error">State is required</p>
                        )}
                    </div>

                    <div className="employee-form-group">
                        <label htmlFor="zip" className="employee-form-label">Zip Code :</label>
                        <input type="number" id="zip" className={errors.zip ? "employee-form-input employee-form-input-error" : "employee-form-input"} placeholder="Zip Code..."
                            {...register( "zip", { required: true } )}
                        />

                        {errors.zip && (
                            <p className="employee-form-error">ZIP code is required</p>
                        )}
                    </div>
                </div>

                <div className="employee-form-container">

                    <h3 className="employee-form-title">Work status</h3>

                    <div className="employee-form-group">
                        <label htmlFor="start" className="employee-form-label">Start Date :</label>
                        <Controller control={control} name="start"
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    id="start"
                                    className={errors.start ? "employee-form-input employee-form-input-error" : "employee-form-input"}
                                    selected={value}
                                    onChange={onChange}
                                    placeholderText="Choose a date..."
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                            )}
                            rules={{ required: true }}
                        />
                        {errors.start && (
                            <p className="employee-form-error">Start date is required</p>
                        )}
                    </div>
                    
                    <div className="employee-form-group">
                        <Controller name="department" control={control}
                            render={({ field: { onChange, value } }) => (

                                <>
                                    <label htmlFor="department" id="department" className="employee-form-label">Department :</label>
                                    <Select
                                        options={departments}
                                        onChange={onChange}
                                        value={value}
                                        placeholder="Select a department..."
                                        className={errors.state ? "react-select react-select-error" : "react-select"}
                                        classNamePrefix="react-select"
                                        aria-labelledby="department"
                                    />
                                </>
                            )}
                            rules={{ required: true }}
                        />
                        {errors.department && (
                            <p className="employee-form-error">Department is required</p>
                        )}
                    </div>
                </div>
                <Modal title="The new employee has been added successfully !" onClose={ ()=> setShow(false) }  show={ show } />;
                <button className="btn">Save</button>
            </form>

           


        </div>
    );
};

export default EmployeeForm;


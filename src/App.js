import { Routes, Route } from "react-router-dom";

import { EmployeeContext } from "./utils/context/EmployeeContext";
import { useEmployee } from "./utils/hook/hookEmployee";

import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import Error404 from "./pages/Error404/Error404";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/*The App component returns element that renders Layout component which contains an AppRouter component.*/

const App = () => {
    // Get useEmployee hook for access employee data in context
    const employeeHook = useEmployee();

    return (
        <div className="app">
            {/* Provide the useEmployee hook to the EmployeeContext */}
            <EmployeeContext.Provider value={employeeHook}>
                <Header />
                <Routes>
                    <Route path="/" element={<CreateEmployee />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                    {/* path="*" if the path does not correspond to any route declared above */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
            </EmployeeContext.Provider>
        </div>
    );
};

export default App;

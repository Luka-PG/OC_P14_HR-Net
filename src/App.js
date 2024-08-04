import { Routes, Route } from "react-router-dom";

import { EmployeeContext } from "./utils/context/EmployeeContext";
import { useEmployee } from "./utils/hook/hookEmployee";

import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import Error404 from "./pages/Error404/Error404";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

/* le component "app" est le composant principal de l'application, il contient la structure principale de l'interface utilisateur */

const App = () => {
    // apporte la boucle "useEmployee" pour pouvoir acceder au données des employés dans le context
    const employeeHook = useEmployee();

    return (
        <div className="app">
            {/* fournis la boucle useEmployee au contexte */}
            <EmployeeContext.Provider value={employeeHook}>
                <Header />
                <Routes>
                    <Route path="/" element={<CreateEmployee />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                    {/* path="*" si le chemin ne correspond à aucune des routes déclaré si dessus */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
            </EmployeeContext.Provider>
        </div>
    );
};

export default App;

import LoginPage from "./pages/LoginPage.jsx";
import TaskList from "./components/TaskList.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import react from "react";
import PrivateRoute from "./components/PrivateRoute.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import Logout from "./pages/Logout.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";

const App = () => {
    return (
        <AuthProvider>
            {/*<Router>*/}
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/task/list" element={<PrivateRoute><TaskList/></PrivateRoute>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/dashboard" element={<PrivateRoute><DashboardPage/></PrivateRoute>}/>
            </Routes>
            {/*</Router>*/}
        </AuthProvider>
    );
};

export default App

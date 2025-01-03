import LoginPage from "./pages/LoginPage.jsx";
import TaskList from "./components/TaskList.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import react from "react";
import PrivateRoute from "./components/PrivateRoute.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import Logout from "./pages/Logout.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import {Routes as Route_Path} from "./config.js";

const App = () => {
    return (
        <AuthProvider>
            {/*<Router>*/}
            <Routes>
                <Route path={Route_Path.LOGIN} element={<LoginPage/>}/>
                <Route path={Route_Path.TASK_LIST} element={<PrivateRoute><TaskList/></PrivateRoute>}/>
                <Route path={Route_Path.LOGOUT} element={<Logout/>}/>
                <Route path={Route_Path.SIGNUP} element={<SignupPage/>}/>
                <Route path={Route_Path.DASHBOARD} element={<PrivateRoute><DashboardPage/></PrivateRoute>}/>
            </Routes>
            {/*</Router>*/}
        </AuthProvider>
    );
};

export default App

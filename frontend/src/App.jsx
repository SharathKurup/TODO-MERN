import LoginPage from "./pages/LoginPage.jsx";
import TaskListPage from "./pages/TaskListPage.jsx";
import {Routes, Route} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import Logout from "./pages/Logout.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import {Routes as Route_Path} from "./config.js";
import './assets/styles.css'

const App = () => {
    return (
        <AuthProvider>
            {/*<Router>*/}
            <Routes>
                <Route path={Route_Path.LOGIN} element={<LoginPage/>}/>
                <Route path={Route_Path.TASK_LIST} element={<PrivateRoute><TaskListPage/></PrivateRoute>}/>
                <Route path={Route_Path.LOGOUT} element={<Logout/>}/>
                <Route path={Route_Path.SIGNUP} element={<SignupPage/>}/>
                <Route path={Route_Path.DASHBOARD} element={<PrivateRoute><DashboardPage/></PrivateRoute>}/>
                <Route path={Route_Path.TASK_CREATE} element={<PrivateRoute><TaskPage/></PrivateRoute>}/>
                <Route path={Route_Path.TASK_EDIT} element={<PrivateRoute><TaskPage/></PrivateRoute>}/>
            </Routes>
            {/*</Router>*/}
        </AuthProvider>
    );
};

export default App

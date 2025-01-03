const BASE_URL = "http://localhost:5566";
export const API = {
    LOGIN_URL: `${BASE_URL}/login`,
    SIGN_UP: `${BASE_URL}/api/users/signup`,
};

export const Routes = {
    LOGIN: '/',
    LOGOUT: '/logout',
    SIGNUP: '/signup',
    DASHBOARD: '/dashboard',
    TASK_LIST: '/task/list',
    TASK_CREATE: '/task/create',
    TASK_EDIT: '/task/edit/:id'
};
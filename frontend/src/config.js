const BASE_URL = "http://localhost:5566";
export const API = {
    LOGIN_URL: `${BASE_URL}/login`
};

export const Routes = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    DASHBOARD: '/dashboard',
    TASK_LIST: '/task/list',
    TASK_CREATE: '/task/create',
    TASK_EDIT: '/task/edit/:id'
};
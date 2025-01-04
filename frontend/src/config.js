const BASE_URL = "http://localhost:5566";
export const API = {
    LOGIN_URL: `${BASE_URL}/login`,
    SIGN_UP: `${BASE_URL}/api/users/signup`,
    SUMMARY: `${BASE_URL}/api/tasks/summary`,
    TASKS: `${BASE_URL}/api/tasks`,
};

export const Routes = {
    LOGIN: '/',
    LOGOUT: '/logout',
    SIGNUP: '/signup',
    DASHBOARD: '/dashboard',
    TASK_LIST: '/tasks',
    TASK_CREATE: '/task/create',
    TASK_EDIT: '/task/edit/:id'
};
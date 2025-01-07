const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const API = {
    LOGIN_URL: `${BASE_URL}/login`,
    SIGN_UP: `${BASE_URL}/api/users/signup`,
    SUMMARY: `${BASE_URL}/api/tasks/summary`,
    TASKS: `${BASE_URL}/api/tasks`,
    USERS: `${BASE_URL}/api/users`,
};

export const Routes = {
    LOGIN: '/',
    LOGOUT: '/logout',
    SIGNUP: '/signup',
    DASHBOARD: '/dashboard',
    TASK_LIST: '/tasks',
    TASK_CREATE: '/tasks/create',
    TASK_EDIT: '/tasks/edit/:id'
};
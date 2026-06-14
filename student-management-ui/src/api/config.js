const PRODUCTION_API = 'https://studentmanagement-backend-zihh.onrender.com';
const LOCAL_API = 'http://localhost:8081';

export const API_BASE =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.DEV ? LOCAL_API : PRODUCTION_API);

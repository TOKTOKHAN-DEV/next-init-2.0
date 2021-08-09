if (!process.env.NEXT_PUBLIC_BASE_URL) throw new Error('BASE_URL eviroment variable is required');
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export { BASE_URL };

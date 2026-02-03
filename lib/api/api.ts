// lib/api/api.ts

import axios from "axios";

export const nextServers = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // дозволяє axios працювати з cookie
});

import { io } from 'socket.io-client';

const BASE_API_URL = process.env.VITE_BASE_API_URL ?? '';

export const socket = io(BASE_API_URL, {
  autoConnect: false
});

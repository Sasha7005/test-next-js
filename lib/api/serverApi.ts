// lib/api/serverApi.ts

import { cookies } from "next/headers";
import { nextServers } from "./api";
import { User } from "./clientApi";

export const checkServerSession = async () => {
  // Дістаємо поточні cookie
  const cookieStore = await cookies();
  const res = await nextServers.get("/auth/session", {
    headers: {
      // передаємо кукі далі
      Cookie: cookieStore.toString(),
    },
  });
  // Повертаємо повний респонс, щоб proxy мав доступ до нових cookie
  return res;
};

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServers.get("/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
};

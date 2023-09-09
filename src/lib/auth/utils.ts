import authConfig from "@/lib/auth/auth.config";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const getUserAuth = async () => {
  const session = await getServerSession(authConfig);
  return session;
};

export const checkAuth = async () => {
  const session = await getUserAuth();
  if (!session) redirect("/api/auth/signin");
};

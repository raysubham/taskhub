import Link from "next/link";

import { api } from "@/lib/trpc/api";

const ProtectedPage = async () => {
  const getTrpcServer = await api.getTrpcServer.query();

  return (
    <div>
      <h1>Protected Route</h1>
      <p>{getTrpcServer}</p>
      <Link href="/">Homepage</Link>
    </div>
  );
};

export default ProtectedPage;

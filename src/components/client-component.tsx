"use client";

import { trpc } from "@/lib/trpc/client";

const ClientComponent = () => {
  const getTrpc = trpc.getTrpcClient.useQuery();

  return <div>{getTrpc.data}</div>;
};

export default ClientComponent;

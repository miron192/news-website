"use client";

import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
};

export default Back;

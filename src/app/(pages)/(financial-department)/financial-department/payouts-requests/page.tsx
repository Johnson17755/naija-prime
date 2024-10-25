import React, { Suspense } from "react";
import { PayoutRequest } from "@/components/financial-department/payouts-requests";

const Page = () => {
  return (
    <Suspense fallback={<div>Loadding...</div>}>
      <PayoutRequest />
    </Suspense>
  );
};

export default Page;

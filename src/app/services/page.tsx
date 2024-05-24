import React, { Suspense } from "react";
import ServicesPage from "@/views/services/services";

export default async function About() {
  return (
    <div>
      <Suspense fallback="loading...">
        <ServicesPage />
      </Suspense>
    </div>
  );
}

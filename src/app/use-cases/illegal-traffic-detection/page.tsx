import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "Regulatory Blacklist & Illegal Traffic Monitoring | KYP Risk Intelligence",
  description:
    "Know where websites are banned. Detect unauthorized affiliate redirects, geo-blocking violations, blacklisted domains, and illegal traffic acquisition.",
};

export default function IllegalTrafficDetectionPage() {
  const useCase = useCasesData.find((uc) => uc.slug === "illegal-traffic-detection");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "Website Compliance Screening & Monitoring (WebCompli) | KYP",
  description:
    "Protect merchant portfolios against Mastercard BRAM and Visa VIRP non-compliance fines. Automated content sweeps, illegal goods detection, and checkout analysis.",
};

export default function WebsiteCompliancePage() {
  const useCase = useCasesData.find((uc) => uc.slug === "website-compliance");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

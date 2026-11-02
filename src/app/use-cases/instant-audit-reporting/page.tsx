import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "Instant Audit Ready Reporting (60-Sec Dossiers) | KYP Risk Intelligence",
  description:
    "Turn weeks of regulatory audit preparation into 60-second defensible reports. Cryptographically timestamped compliance dossiers for the FCA, MGA, BaFin, and card schemes.",
};

export default function InstantAuditReportingPage() {
  const useCase = useCasesData.find((uc) => uc.slug === "instant-audit-reporting");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

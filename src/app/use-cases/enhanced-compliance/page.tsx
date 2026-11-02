import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "Enhanced Compliance & EDD Made Simple | KYP Risk Intelligence",
  description:
    "Go deeper on high-risk merchants, complex ownership webs, and politically exposed persons with structured, audit-ready Enhanced Due Diligence (EDD) workflows.",
};

export default function EnhancedCompliancePage() {
  const useCase = useCasesData.find((uc) => uc.slug === "enhanced-compliance");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

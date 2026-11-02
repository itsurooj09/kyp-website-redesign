import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "ESG Monitoring with Agentic AI | KYP Risk Intelligence",
  description:
    "Identify ESG controversies, supply chain sanctions, corporate governance failures, and environmental violations with autonomous agentic research.",
};

export default function EsgAiAlertingPage() {
  const useCase = useCasesData.find((uc) => uc.slug === "esg-ai-alerting");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

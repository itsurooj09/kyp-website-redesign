import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "Portfolio Issuing Monitoring | KYP Risk Intelligence",
  description:
    "Complete visibility for issuing programmes. Monitor transactional velocity, scheme compliance, chargeback spikes, and merchant portfolio risk continuously.",
};

export default function PortfolioIssuingMonitoringPage() {
  const useCase = useCasesData.find((uc) => uc.slug === "portfolio-issuing-monitoring");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

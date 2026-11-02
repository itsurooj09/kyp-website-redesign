import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "Transaction Monitoring & Anomaly Detection | KYP Risk Intelligence",
  description:
    "Detect suspicious payment velocity, volume anomalies, structuring, and fraudulent merchant processing patterns in real-time.",
};

export default function TransactionMonitoringPage() {
  const useCase = useCasesData.find((uc) => uc.slug === "transaction-monitoring");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

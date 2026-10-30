import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "Anti-Money Laundering (AML) Monitoring | KYP",
  description:
    "Detect suspicious activity, prevent financial crime, and stay compliant. KYP brings continuous screening, beneficial ownership tracking, and transaction intelligence into one platform.",
};

export default function AMLUseCasePage() {
  const useCase = useCasesData.find((uc) => uc.slug === "anti-money-laundering");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

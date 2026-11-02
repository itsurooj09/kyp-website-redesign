import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "Automated Policy Continuous Monitoring Rules | KYP Risk Intelligence",
  description:
    "Your rules. Your portfolios. Automated. KYP allows you to configure monitoring rules at portfolio level tailored directly to your firm's compliance risk framework.",
};

export default function AutomatedPolicyRulesPage() {
  const useCase = useCasesData.find((uc) => uc.slug === "automated-policy-rules");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

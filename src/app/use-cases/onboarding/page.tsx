import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useCasesData } from "@/data/useCases";
import UseCaseTemplate from "@/components/use-cases/UseCaseTemplate";

export const metadata: Metadata = {
  title: "AI-Powered Business Onboarding | KYP",
  description:
    "Onboard 10× faster. KYP uses AI to check documents as business partners complete onboarding questionnaires, helping resolve issues before submission.",
};

export default function OnboardingUseCasePage() {
  const useCase = useCasesData.find((uc) => uc.slug === "onboarding");
  if (!useCase) notFound();

  return <UseCaseTemplate useCase={useCase} />;
}

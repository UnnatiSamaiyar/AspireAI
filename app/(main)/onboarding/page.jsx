import { industries } from "@/data/industries";
import React from "react";
import OnboardingForm from "./_components/onboarding-form";
import { getOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const OnboardingPage = async () => {
  //Check if User is already onboarded
  const { isOnboarded } = await getOnboardingStatus();
  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
};

export default OnboardingPage;

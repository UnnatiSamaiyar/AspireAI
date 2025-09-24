"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ATSAnalyzerDialog from "./ats-analyzer";

const HeroSection = () => {
  return (
    <section className="w-full pt-24 md:pt-24 pb-10">
      {/* 👇 Added px-4 sm:px-6 lg:px-8 for responsive horizontal padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left side - Text + Buttons */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold md:text-6xl lg:text-6xl xl:text-6xl gradient-title animate-gradient">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto md:mx-0 max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
            <ATSAnalyzerDialog />
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 hero-image-wrapper">
          <Image
            src="/banner.png"
            width={1280}
            height={500}
            alt="Dashboard Preview"
            className="rounded-lg mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

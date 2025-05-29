"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowBigRightDash, Loader2, RotateCcw } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function ATSAnalyzerDialog() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const router = useRouter();

  const reset = () => {
    setFile(null);
    setScore(null);
    setLoading(false);
  };

  const analyzeResume = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("https://api.affinda.com/v2/resumes", {
        method: "POST",
        headers: {
          Authorization: "Bearer aff_e9aafae187e79ed2a6fb84535f41a1fba03248db",
        },
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Resume analysis failed");

      const skills = data.data?.skills || [];
      const yearsExp = data.data?.totalYearsExperience || 0;

      let calculatedScore = 50;
      if (skills.length > 5) calculatedScore += 20;
      if (yearsExp > 3) calculatedScore += 20;
      if (skills.some((s) => /react|node|mongo|express/i.test(s.name)))
        calculatedScore += 10;

      setScore(Math.min(calculatedScore, 100));
    } catch (err) {
      console.error("ATS Analysis failed", err);
      alert("Failed to analyze resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="px-8 hover:scale-105 transition-transform duration-200"
        >
          Will Your Resume Pass?
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-black/90 backdrop-blur border-white/20 text-white max-w-md w-full rounded-xl shadow-2xl p-6">
        <DialogHeader className="text-center mb-4">
          <DialogTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white animate-gradient">
            {score !== null ? `ATS Score: ${score}/100` : "Resume ATS Analyzer"}
          </DialogTitle>
        </DialogHeader>

        <Card className=" border border-white/10 rounded-xl shadow-inner">
          <CardContent className="flex flex-col items-center p-6 space-y-6">
            {score !== null ? (
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <p className="text-base">
                  {score > 95 ? (
                    <span className="text-green-400">
                      ✅ Your resume is ATS-friendly.
                    </span>
                  ) : (
                    <span className="text-yellow-400">
                      ⚠️ Your resume might need improvements.
                    </span>
                  )}
                </p>
                <Button
                  onClick={() => router.push("/resume")}
                  className="bg-white text-black hover:bg-gray-200 flex items-center gap-2"
                >
                  Build Resume! <ArrowBigRightDash size={16} />
                </Button>
              </div>
            ) : (
              <div className="w-full space-y-8">
                <div className="w-full space-y-8">
                  <div className="w-full flex justify-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      onClick={triggerFileSelect}
                      className={`font-medium ${
                        file
                          ? "bg-white text-black"
                          : "bg-white text-black hover:bg-gray-200"
                      }`}
                    >
                      {file ? "Uploaded!" : "Upload Resume"}
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={analyzeResume}
                  disabled={loading || !file}
                  className="w-full bg-white text-black hover:bg-gray-200 font-medium"
                >
                  {loading ? (
                    <Loader2 className="animate-spin h-5 w-5" />
                  ) : (
                    "Analyze Resume"
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioButton } from "@/components/radio-button";
import { Check } from "lucide-react";
import { useHasActiveSubscription } from "@/features/subscriptions/hooks/use-subscription";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const PricingCards = () => {
  const { hasActiveSubscription, isLoading } = useHasActiveSubscription();
  const [selectedBilling, setSelectedBilling] = useState<
    "monthly" | "annually" | null
  >(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [pendingBilling, setPendingBilling] = useState<
    "monthly" | "annually" | null
  >(null);

  const handleMonthlyChange = (checked: boolean) => {
    if (hasActiveSubscription) {
      toast.error("User is already subscribed");
      return;
    }

    if (checked) {
      setSelectedBilling("monthly");
      setPendingBilling("monthly");
      setShowConfirmDialog(true);
    } else {
      setSelectedBilling(null);
    }
  };

  const handleAnnuallyChange = (checked: boolean) => {
    if (hasActiveSubscription) {
      toast.error("User is already subscribed");
      return;
    }

    if (checked) {
      setSelectedBilling("annually");
      setPendingBilling("annually");
      setShowConfirmDialog(true);
    } else {
      setSelectedBilling(null);
    }
  };

  const handleContinue = () => {
    setShowConfirmDialog(false);
    authClient.checkout({ slug: "pro" });
    setPendingBilling(null);
  };

  const handleCancel = () => {
    setShowConfirmDialog(false);
    setSelectedBilling(null);
    setPendingBilling(null);
  };

  const handleButtonClick = () => {
    if (hasActiveSubscription) {
      toast.error("User is already subscribed");
      return;
    }
    setShowConfirmDialog(true);
  };

  return (
    <>
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Subscription</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you wish to subscribe?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleContinue}
              className="bg-gradient-to-r from-primary to-red-500 text-white hover:opacity-90"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center mb-8 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
            <span className="text-black ">Simple,</span>{" "}
            <span className="text-yellow-500">Transparent</span>{" "}
            <span className="text-black">Pricing</span>
          </h2>
          <h1 className="text-center text-lg text-white mt-6 mb-3 px-2 font-semibold">
            Choose the plan that fits your needs. You may upgrade, downgrade, or
            cancel anytime.
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-center justify-center px-4 sm:px-1 md:px-2 lg:px-4 w-full">
          {/* Card 1 */}
          <Card className="w-full sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[260px] h-[550px] flex flex-col p-0 overflow-hidden border-0 shadow-[8px_0_16px_-4px_rgba(255,255,255,0.8),4px_0_8px_-2px_rgba(255,255,255,0.6)] max-w-[260px]">
            <CardHeader className="bg-yellow-500 h-[200px] flex flex-col items-center justify-between relative py-6 px-0 m-0">
              <div className="flex flex-col items-center">
                <CardTitle className="text-2xl text-center">
                  Free Plan
                </CardTitle>
                <p className="text-xs text-center text-black mt-4 px-2">
                  Ai Transaction, Ai Summary
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-black">$0</p>
                <p className="text-[10px] text-black mt-1">Always Free</p>
              </div>
            </CardHeader>
            <div className="w-[80%] mx-auto border-t border-gray-300 h-px"></div>
            <CardContent className="flex-1 p-4 min-h-0">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">AI Summary</p>
              </div>
            </CardContent>
            <div className="w-[80%] mx-auto border-t border-gray-300 h-px"></div>
            <CardFooter className="justify-center mb-5">
              {hasActiveSubscription ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-red-500 text-white cursor-not-allowed"
                      disabled={hasActiveSubscription || isLoading}
                    >
                      Subscribe
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You are already subscribed</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Button
                  className="w-full bg-gradient-to-r from-primary to-red-500 text-white"
                  onClick={handleButtonClick}
                  disabled={isLoading}
                >
                  Subscribe
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card className="w-full sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[260px] h-[550px] flex flex-col p-0 overflow-hidden border-0 shadow-[8px_0_16px_-4px_rgba(255,255,255,0.8),4px_0_8px_-2px_rgba(255,255,255,0.6)] max-w-[260px]">
            <CardHeader className="bg-yellow-500 h-[200px] flex flex-col items-center justify-between relative py-6 px-0 m-0">
              <div className="flex flex-col items-center">
                <CardTitle className="text-2xl text-center">
                  7 Day Trial
                </CardTitle>
                <p className="text-xs text-center text-black mt-4 px-2">
                  Includes free tier + Ai Summary, Social Posts (6 platforms),
                  Titles, Hashtags
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-black">$24</p>
                {hasActiveSubscription ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 mt-1 cursor-not-allowed">
                        <RadioButton
                          checked={selectedBilling === "monthly"}
                          onCheckedChange={handleMonthlyChange}
                          disabled={hasActiveSubscription || isLoading}
                        />
                        <p className="text-[10px] text-black cursor-not-allowed">
                          Billed monthly
                        </p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>You are already subscribed</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <div className="flex items-center gap-2 mt-1">
                    <RadioButton
                      checked={selectedBilling === "monthly"}
                      onCheckedChange={handleMonthlyChange}
                      disabled={hasActiveSubscription || isLoading}
                    />
                    <p className="text-[10px] text-black">Billed monthly</p>
                  </div>
                )}
              </div>
            </CardHeader>
            <div className="w-[80%] mx-auto border-t border-gray-300 h-px"></div>
            <CardContent className="flex-1 p-4 space-y-2 min-h-0">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">AI Summary</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">Social Ready Posts</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">Podcast Titles</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">Hashtags</p>
              </div>
            </CardContent>
            <div className="w-[80%] mx-auto border-t border-gray-300 h-px"></div>
            <CardFooter className="justify-center mb-5">
              {hasActiveSubscription ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-red-500 text-white cursor-not-allowed"
                      disabled={hasActiveSubscription || isLoading}
                    >
                      Start a 7 day free trial
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You are already subscribed</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Button
                  className="w-full bg-gradient-to-r from-primary to-red-500 text-white"
                  onClick={handleButtonClick}
                  disabled={isLoading}
                >
                  Start a 7 day free trial
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* Card 3 */}
          <Card className="w-full sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[260px] h-[550px] flex flex-col p-0 overflow-hidden border-0 shadow-[8px_0_16px_-4px_rgba(255,255,255,0.8),4px_0_8px_-2px_rgba(255,255,255,0.6)] max-w-[260px]">
            <CardHeader className="bg-yellow-500 h-[200px] flex flex-col items-center justify-between relative py-6 px-0 m-0">
              <div className="flex flex-col items-center">
                <CardTitle className="text-2xl text-center">
                  1 Month Trial
                </CardTitle>
                <p className="text-xs text-center text-black mt-4 px-2">
                  Includes Pro tier + Youtube Timestamps, Key Moments, Speaker
                  Diarization
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-black">$59</p>
                {hasActiveSubscription ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 mt-1 cursor-not-allowed">
                        <RadioButton
                          checked={selectedBilling === "annually"}
                          onCheckedChange={handleAnnuallyChange}
                          disabled={hasActiveSubscription || isLoading}
                        />
                        <p className="text-[10px] text-black cursor-not-allowed">
                          Billed annually
                        </p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>You are already subscribed</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <div className="flex items-center gap-2 mt-1">
                    <RadioButton
                      checked={selectedBilling === "annually"}
                      onCheckedChange={handleAnnuallyChange}
                      disabled={hasActiveSubscription || isLoading}
                    />
                    <p className="text-[10px] text-black">Billed annually</p>
                  </div>
                )}
              </div>
            </CardHeader>
            <div className="w-[80%] mx-auto border-t border-gray-300 h-px"></div>
            <CardContent className="flex-1 p-4 space-y-2 min-h-0 overflow-y-auto">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">AI Summary</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">Social Ready Posts</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">Podcast Titles</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">Hashtags</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">Youtube Timestamps</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">Key Moments</p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-sm">Full Transcript & Speaker recognition</p>
              </div>
            </CardContent>
            <div className="w-[80%] mx-auto border-t border-gray-300 h-px"></div>
            <CardFooter className="justify-center mb-5">
              {hasActiveSubscription ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-red-500 text-white cursor-not-allowed"
                      disabled={hasActiveSubscription || isLoading}
                    >
                      Start 30 day free trial
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>You are already subscribed</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Button
                  className="w-full bg-gradient-to-r from-primary to-red-500 text-white"
                  onClick={handleButtonClick}
                  disabled={isLoading}
                >
                  Start 30 day free trial
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { LifetimeRajbhogSevaForm } from "@/components/forms/lifetime-rajbhog-seva-form";
import { useEazypay } from "@/app/hooks/useEazypay";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LifetimeRajbhogSevaPage() {
  const router = useRouter();
  const {
    performEazypayCheckout: initiatePayment,
    isMutating: isProcessingPayment,
    error: paymentError,
    returnUrl,
  } = useEazypay();

  useEffect(() => {
    if (returnUrl) {
      router.push(returnUrl.paymentUrl);
    }
  }, [returnUrl, router]);

  return (
    <main className="min-h-screen">
      {/* Cover Image */}
      <div className="relative h-[40vh] w-full">
        <Image
          src="/images/jagannath-mahaprasadam.jpg"
          alt="Lord Jagannath Temple"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
      </div>

      <div className="container py-6 md:py-12 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-orange-600">
              Lifetime Jagannath Rajbhog Seva
            </h1>
            <Badge variant="destructive" className="text-lg px-4 py-1">
              Only 365 Spots Available
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join this sacred program to receive the eternal blessings of Lord
            Jagannath's Rajbhog Mahaprasadam for you and your family.
          </p>
        </div>

        {/* Limited Spots Notice */}
        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold text-orange-700">
                Limited Time Sacred Opportunity
              </h3>
              <p className="text-orange-600">
                This divine program is limited to only 365 fortunate devotees
              </p>
              <p className="text-2xl font-bold text-orange-700 mt-4">
                One-time Donation: ₹51,001/-
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {/* Program Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About the Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Be one among the 365 blessed devotees to receive Lord
                  Jagannath's mercy through His prasadam. This lifetime
                  program ensures your eternal connection with the Lord through
                  prasadam seva.
                </p>

                <h3 className="font-semibold text-xl mt-6">Program Benefits</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Rajbhog for your family once a year for lifetime</li>
                  <li>Special darshan privileges during festivals</li>
                  <li>Service opportunity in Lord Jagannath's kitchen</li>
                  <li>Participation in special temple ceremonies</li>
                </ul>

                <div className="bg-orange-50 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-orange-700">
                    Contribution: ₹51,001/- (One-time donation)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Rest of the cards... */}
          </div>

          {/* Registration Form */}
          <div className="space-y-6">
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="pt-6">
                <p className="text-center text-orange-700 font-semibold">
                  Limited to 365 Devotees Only | Current Registration Fee:
                  ₹51,001/-
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>
                  Secure your spot in this eternal service to Lord Jagannath
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LifetimeRajbhogSevaForm
                  onFormSubmit={(data) => {
                    initiatePayment({
                      amount: "51001",
                      email: data.email,
                      name: data.name,
                      phoneNumber: data.phone,
                    });
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

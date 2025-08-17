"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Component() {
  const searchParams = useSearchParams();
  const uniqueRefNumber = searchParams.get("uniqueRefNumber");
  const amount = searchParams.get("amount");
  const transactionDate = searchParams.get("transactionDate");
  const paymentMode = searchParams.get("paymentMode");
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <CheckCircleIcon className="h-16 w-16 text-green-500 dark:text-green-400" />
      <h1 className="text-3xl font-bold mt-2">
        Hare Krishna! Payment Successful
      </h1>

      <div className="pt-2 text-center text-sm">
        <p className="text-gray-600">
          We are deeply grateful for your generous donation. Here are the
          details of your transaction:
        </p>
      </div>
      <Card className="mt-8 w-full max-w-md lg:max-w-xl p-4">
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Amount:</p>
            <p className="text-sm">₹ {amount}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Date:</p>
            <p className="text-sm">
              {transactionDate || new Date().toLocaleDateString("en-IN")}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Payment Method:</p>
            <p className="text-sm">{paymentMode}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Reference Number:</p>
            <p className="text-sm">{uniqueRefNumber}</p>
          </div>
        </CardContent>
        <blockquote className="text-gray-500 italic text-sm mb-8 p-4">
          "In this age of Kali, the holy name of the Lord, the Hare Krishna
          maha-mantra, is the incarnation of Lord Krishna. Simply by chanting
          the holy name, one associates with the Lord directly. Anyone who does
          this is certainly delivered." - Chaitanya Charitamrita, Adi-lila 17.22
        </blockquote>
      </Card>
      <div className="mt-8">
        <Link href="/">
          <Button className="mr-4">Go to Home</Button>
        </Link>
        <Link href="/donation">
          <Button variant="secondary" className="mr-4">
            View Donations
          </Button>
        </Link>
        <Link href="/contact-support">
          <Button variant="secondary">Contact Support</Button>
        </Link>
      </div>
    </main>
  );
}

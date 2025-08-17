"use client";

import { useEazypay } from "@/app/hooks/useEazypay";
import GeneralDonationForm from "@/components/forms/general-donation-form";
import OfflinePayment from "@/components/offline-payment";
import PageHeader from "@/components/page-header";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const GeneralDonationPage = () => {
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
    <main>
      <PageHeader className="bg-orange-50 lg:h-[300px] bg-center relative">
        <Image
          src="/images/lord_jagannath_blessing.svg"
          fill
          className="object-contain object-top"
          alt="lord jagannath idols"
        />
      </PageHeader>
      <section className="my-16">
        <div className="container mx-auto">
          <div className="space-y-4 lg:w-2/3 mx-auto lg:px-8">
            <h1 className="text-center text-purple-600 md:text-4xl ">
              Make a humble donation to Sri Sri Jagannath
            </h1>
            <p className="text-xs md:text-sm text-gray-700 text-center">
              Your contribution will help us in our mission to spread the
              teachings of Lord Krishna and serve the community.
            </p>

            <Card className="bg-yellow-50 p-4 shadow-md">
              <GeneralDonationForm
                onFormSubmit={(data) => {
                  if (!data.amount) return;
                  initiatePayment({
                    amount: data.amount,
                    email: data.email,
                    name: data.name,
                    phoneNumber: data.phone,
                  });
                }}
                isLoading={isProcessingPayment}
              />
            </Card>
          </div>
        </div>
      </section>

      {/* offline payment section */}
      <OfflinePayment className="mt-16" />
    </main>
  );
};

export default GeneralDonationPage;

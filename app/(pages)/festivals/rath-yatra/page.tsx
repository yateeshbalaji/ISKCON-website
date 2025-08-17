'use client';

import useViewport from "@/app/hooks/useViewport";
import PageHeader from "@/components/page-header";
import Image from "next/image";
import { RathYatraCarousel } from "@/components/rath-yatra-carousel";
import RathYatraDonationForm from "@/components/forms/rath-yatra-donation-form";
import { useEazypay } from "@/app/hooks/useEazypay";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import RathYatraRouteMap from "@/components/rath-yatra-route-map";
import OfflinePayment from "@/components/offline-payment";

const rathYatraDate = "27.6.2025";

const RathYatraPage = () => {
  const { isMobile } = useViewport();
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
  const iframeWidth = isMobile ? 300 : 500;
  return (
    <main>
      <PageHeader className="relative lg:h-[600px] bg-slate-100">
        <div className="absolute inset-0 z-0">
          <RathYatraCarousel />
        </div>
        <div className="absolute left-0 bottom-0 w-full p-4 transform -translate-1/2 bg-gradient-to-t from-black to-transparent h-[150px] flex flex-col items-center justify-center gap-4 z-10">
          <h1 className="md:text-4xl font-semibold text-yellow-200">
            Jagannath Rath Yatra
          </h1>
          <button
            onClick={() => {
              document.querySelector('#donation-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
          >
            Contribute to Rath Yatra
          </button>
        </div>
      </PageHeader>

      <article className="container my-16 space-y-8 text-slate-700">
        <h2 className="text-3xl font-bold text-orange-600 mb-8">About Jagannath Rath Yatra</h2>
        <p className="text-orange-600">
          {`The Jagannath Rath Yatra is one of the most ancient and significant festivals celebrated in honor of Lord Jagannath, Lord Balabhadra, and Goddess Subhadra. This grand festival commemorates Lord Jagannath's journey to His birthplace, Gundicha Temple, along with His siblings. The festival symbolizes Krishna's return to Vrindavan and His reunion with the residents who longed for His presence.`}
        </p>

        <p>
          {`During this auspicious festival, the deities of Lord Jagannath, Lord Balabhadra, and Goddess Subhadra are taken out of the temple and placed on three magnificently decorated chariots. These chariots are then pulled through the streets by thousands of devotees, who consider it a great fortune to participate in this divine service.`}
        </p>

        <p>
          {`The Ratha Yatra festival is celebrated with great pomp and grandeur across the world. The procession is accompanied by the enthusiastic chanting of the Holy Names, melodious kirtan, traditional musical instruments, and the distribution of sanctified food (prasadam). This festival offers a unique opportunity for everyone, regardless of caste, creed, or religion, to serve the Lord and receive His blessings.`}
        </p>

        <div className="my-12 p-8 bg-orange-50 rounded-lg">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">Srila Prabhupada on Rath Yatra</h3>
          <blockquote className="italic text-lg">
            {`"This Ratha-yatra festival is very old—at least 5,000 years old—and it is still going on. In India all Hindus, they join the Ratha-yatra festival. Just like in your Western countries the Christmas is observed by everyone, similarly Ratha-yatra festival is observed by all Hindus. They join the procession and go to the temple, and there is distribution of prasadam. It is very gorgeous festival."`}
          </blockquote>
          <p className="mt-4 text-sm">- Srila Prabhupada (Ratha-yatra Lecture, London, July 8, 1974)</p>
        </div>

        {/* <div className="my-12">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">Route Map</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
            <h4 className="font-semibold">Procession Route</h4>
            <RathYatraRouteMap />
            <p className="text-sm text-slate-600">* Route may be subject to change based on local administration's approval</p>
          </div>
        </div> */}
      </article>

      <section className="bg-orange-50 py-16">
        <div className="container space-y-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-8">Rath Yatra at ISKCON Asansol</h2>
          <p className="text-slate-700">
            {`We cordially invite all of you, especially Life members, devotees, and
        well-wishers of ISKCON, to participate in the Jagannath Rath Yatra
        festival at ISKCON Asansol Temple. The festival will take place on
        ${rathYatraDate}, and will include a grand procession of the deities on
        beautifully decorated chariots, followed by a special feast of
        prasadam. The festival promises to be a joyous occasion filled with
        devotion, music, and dance, as we celebrate the divine pastimes of
        Lord Jagannath.`}
          </p>

          <p className="text-slate-700">
            {`We hope to see you all there, and we pray that Lord Jagannath showers
        his blessings upon you and your family.`}
          </p>

          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Event Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-600">Date & Time</h4>
                <p>{rathYatraDate} - Starting from 4:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600">Location</h4>
                <p>Budha Ground</p>
                <p>Asansol, West Bengal</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600">Program Schedule</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>4:00 PM - Rath Yatra Ceremony Begins</li>
                  <li>4:30 PM - Grand Procession Starts</li>
                  <li>6:30 PM - Evening Arati</li>
                  <li>7:00 PM - Prasadam Distribution</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600">Special Attractions</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Beautifully Decorated Chariots</li>
                  <li>Traditional Kirtan & Bhajans</li>
                  <li>Special Prasadam Distribution</li>
                  <li>Cultural Programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="donation-section" className="bg-yellow-50 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-orange-600">Support Rath Yatra Festival</h2>
              <p className="text-slate-700">
                {`Your generous contribution will help us organize a grand celebration and offer sumptuous prasadam to thousands of devotees. By supporting this sacred festival, you become an integral part of Lord Jagannath's divine service.`}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <h3 className="text-xl font-semibold text-orange-600">Online Donation</h3>
                <RathYatraDonationForm
                  className="mt-4"
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
              </div>
            </div>
          </div>

        </div>


      </section>
      <OfflinePayment />


    </main>
  );
};

export default RathYatraPage;

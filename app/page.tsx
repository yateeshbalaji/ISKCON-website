import DonateUs from "@/components/donate-us";
import Activities from "@/components/activities";
import { Metadata } from "next";
import Hero from "@/components/hero";
import Events from "@/components/events";
import YoutubeGallery from "@/components/youtube-gallery";
import Social from "@/components/social";
import EventsAndAnnouncements from "@/components/events-and-announcements";
import { VaishnavEvent } from "@/components/vaishnava-calendar";
import { getCalendarEvents } from "@/lib/calendar.server";
import LifetimeRajbhogSeva from "@/components/lifetime-rajbhog-seva";

export const metadata: Metadata = {
  title: "Iskcon Project | Donate for our ongoing Jagannath Temple in Asansol",
  description:
    "Official website of Iskcon Jagannath Temple Asansol. Donate and help us build our new temple. Join us in our daily worship of the Lord. Become a life member today. Hare Krishna!",
  creator: "ISKCON Asansol",
  keywords:
    "iskcon, asansol, hare krishna, iskcon asansol, iskcon project, donate",
  openGraph: {
    title: "Iskcon Project | Iskcon Jagannath Temple Asansol",
    description:
      "Official website of Iskcon Jagannath Temple Asansol. Donate and help us build our new temple. Join us in our daily worship of the Lord. Become a life member today. Hare Krishna!",
    url: "https://iskconproject.com/",
    type: "website",
    siteName: "ISKCON Project",
    images: [
      {
        url: "/images/lord_radha_krishna.jpg",
        width: 800,
        height: 600,
        alt: "Lord Radha Krishna",
      },
    ],
  },
};

const jsonLD = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ISKCON Asansol",
          alternateName: "ISKCON Project",
          url: "https://iskconproject.com/",
          logo: "https://iskconproject.com/images/logo/iskcon-asansol-logo.svg",
          sameAs: [
            "https://www.facebook.com/ISKCONAsansol/",
            "https://www.instagram.com/iskconasansol/",
            "https://twitter.com/iskconasansol",
            "https://www.youtube.com/channel/UCj3q6W8eJyQ2g2T7mJ5gKjQ",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+919433320314",
              contactType: "temple office",
              contactOption: "TollFree",
              areaServed: "IN",
              availableLanguage: ["en", "hi", "bn"],
            },
          ],
          donation: [
            {
              "@type": "DonateAction",
              name: "Donate Gita for Ram Mandir",
              description: "Contribute and help us distribute Gita",
              image: "https://iskconproject.com/images/ram-mandir.jpg",
              url: "https://iskconproject.com/donation/gita-donation",
              potentialAction: {
                "@type": "DonateAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://iskconproject.com/donation/gita-donation",
                  inLanguage: "en-US",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/IOSPlatform",
                    "http://schema.org/AndroidPlatform",
                  ],
                },
                expectsAcceptanceOf: {
                  "@type": "Offer",
                  name: "Gita Donation",
                  price: "1001",
                  priceCurrency: "INR",
                  eligibleRegion: "IN",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@type": "Organization",
                    name: "ISKCON Asansol",
                    url: "https://iskconproject.com/",
                    logo: "https://iskconproject.com/images/logo/iskcon-asansol-logo.svg",
                  },
                },
              },
            },
            {
              "@type": "DonateAction",
              name: "Welcome to Iskcon Asansol",
              description: "Join us in building our new temple",
              image: "https://iskconproject.com/images/lord_radha_krishna.jpg",
              url: "https://iskconproject.com/donation/projects",
              potentialAction: {
                "@type": "DonateAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://iskconproject.com/donation/projects",
                  inLanguage: "en-US",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/IOSPlatform",
                    "http://schema.org/AndroidPlatform",
                  ],
                },
                expectsAcceptanceOf: {
                  "@type": "Offer",
                  name: "Project Donation",
                  price: "1001",
                  priceCurrency: "INR",
                  eligibleRegion: "IN",
                },
              },
            },
            {
              "@type:": "DonateAction",
              name: "General Donation",
              description: "Donate for the temple",
              image: "https://iskconproject.com/images/lord_radha_krishna.jpg",
              url: "https://iskconproject.com/donation/general-donation",
              potentialAction: {
                "@type": "DonateAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://iskconproject.com/donation/general-donation",
                  inLanguage: "en-US",
                  actionPlatform: [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/IOSPlatform",
                    "http://schema.org/AndroidPlatform",
                  ],
                },
                expectsAcceptanceOf: {
                  "@type": "Offer",
                  name: "General Donation",
                  price: "1001",
                  priceCurrency: "INR",
                  eligibleRegion: "IN",
                },
              },
            },
          ],
        }),
      }}
    />
  );
};
export default async function Home() {
  const calendarEvents = await getCalendarEvents();
  return (
    <main>
      {jsonLD()}
      <Hero/>
      <EventsAndAnnouncements calendarEvents={calendarEvents} />
      <LifetimeRajbhogSeva />
      <DonateUs />
      <Activities />
      <YoutubeGallery />
      <Social />
    </main>
  );
}

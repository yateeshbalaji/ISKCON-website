import OfflinePayment from "@/components/offline-payment";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const bhagwatamClassImages = [
  "/images/bhagwatam-class/bhagwatam-class-1.jpeg",
  "/images/bhagwatam-class/bhagwatam-class-2.jpeg",
  "/images/bhagwatam-class/bhagwatam-class-3.jpeg",
  "/images/bhagwatam-class/bhagwatam-class-4.jpeg",
  "/images/bhagwatam-class/bhagwatam-class-5.jpeg",
];

const BhagwatamClassPage = () => {
  return (
    <main className="">
      <PageHeader className="bg-violet-50 h-[auto] md:h-[auto] py-16 md:px-16 text-center">
        <div className="container">
          <h1 className="text-xl md:text-3xl font-semibold text-gray-600">
            Daily Bhagwatam Class (In Bengali)
          </h1>
          <p className="mt-2 md:max-w-[800px] mx-auto">
            Join us for the daily Srimad Bhagwatam class (8AM - 9AM). The class is conducted
            by our temple devotees and is open for all. The class is a great way
            to learn about the teachings of the Bhagwatam from a renowned
            scholar. You can also join us online for the class.
          </p>

          <div className="py-8 px-8 space-y-4 text-red-700 md:text-xl max-w-2xl mx-auto">
            <p>
              निगमकल्पतरोर्गलितं फलं शुकमुखादमृतद्रवसंयुतम् । पिबत भागवतं
              रसमालयं मुहुरहो रसिका भुवि भावुका: ॥ १.१.३ ॥
            </p>

            <p>
              নিগম-কল্পতরোর্গলিতং ফলং শুক-মুখাদমৃত-দ্রব-সংযুতম্ । পিবত ভাগবতং
              রসমালয়ং মুহুর হো রসিকা ভুবি ভাবুকাঃ ॥ ১.১.৩ ॥
            </p>

            <p className="text-gray-600 text-base">
              nigama-kalpa-taror galitaṁ phalaṁ śuka-mukhād amṛta-drava-saṁyutam
              pibata bhāgavataṁ rasam ālayam muhur aho rasikā bhuvi bhāvukāḥ ॥
              1.1.3
            </p>

            <Link href="/donation/general-donation">
              <Button className="mt-6">
                Make a humble donation
              </Button>
            </Link>
          </div>
        </div>
      </PageHeader>
      <div className="container mx-auto py-16 ">
        <h2 className="text-2xl my-2 text-center font-semibold ">
          Glimpses from our daily Srimad Bhagwatam class
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* images gallery */}

          {bhagwatamClassImages.map((image, index) => (
            <div key={index} className="relative h-64 md:h-80">
              <img
                src={image}
                alt="Bhagwatam class"
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BhagwatamClassPage;

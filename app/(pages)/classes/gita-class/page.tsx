import OfflinePayment from "@/components/offline-payment";
import PageHeader from "@/components/page-header";

const GitaClassPage = () => {
  return (
    <main className="">
      <PageHeader className="bg-violet-50 h-[auto] md:h-[auto] py-16 md:px-16 text-center">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-600">
            Srimad Bhagavad Gita Class
          </h1>
          <p>
            Join us for the daily Bhagavad Gita class. The class is conducted by
            our temple devotees and is open for all. The class is conducted in
            Bengali and is a great way to learn about the teachings of the Gita.
          </p>

          <div className="py-8 px-8 space-y-4 text-red-700 md:text-2xl">
            <p>
              योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो
              भूत्वा समत्वं योग उच्यते।।
            </p>

            <p>
              যোগস্থঃ কুরু কর্মাণি সঙ্গং ত্যক্ত্বা ধনঞ্জয। সিদ্ধ্যসিদ্ধ্যোঃ সমো
              ভূত্বা সমত্বং যোগ উচ্যতে।।
            </p>

            <p className="text-gray-600">
              yogasthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya siddhyasiddhyoḥ
              samo bhūtvā samatvaṁ yoga ucyate।।
            </p>
          </div>
        </div>
      </PageHeader>
      <div className="container mx-auto py-16 ">
        <div className="grid md:grid-cols-4 gap-4 mt-4"></div>

        <div className="py-32">
          <OfflinePayment />
        </div>
      </div>
    </main>
  );
};

export default GitaClassPage;

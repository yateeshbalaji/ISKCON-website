import OfflinePayment from "@/components/offline-payment";
import PageHeader from "@/components/page-header";
import Image from "next/image";

const JagannathSnanaYatraPage = () => {
  return (
    <main>
      <PageHeader className="relative lg:h-[600px] bg-slate-100">
        <Image
          src={"/images/jagannath-dev_snan_yatra.jpg"}
          fill={true}
          alt="Jagannath Snana Yatra"
          className="object-cover object-top"
        />

        <div className="absolute left-0 bottom-0 w-full p-4 transform -translate-1/2 bg-gradient-to-t from-black to-transparent h-[150px] flex items-center justify-center">
          <h1 className="md:text-4xl font-semibold text-yellow-200">
            Jagannath Snana Yatra
          </h1>
        </div>
      </PageHeader>

      <article className="container my-16 space-y-8 text-slate-700">
        <p className="text-orange-600">
          {`Jagannath Snana Yatra is a significant festival celebrated in honor of
        Lord Jagannath, Lord Balabhadra, and Goddess Subhadra. The festival
        marks the bathing ceremony of the deities, which takes place on the
        full moon day of the Jyestha month. The festival is celebrated with
        great enthusiasm and devotion in the Jagannath Temple in Puri, Odisha,
        and other Jagannath temples worldwide.`}
        </p>

        <p>
          {`The Snana Yatra is a bathing festival celebrated on the Purnima (full
        moon day) of the Hindu month of Jyeshtha. It is an important festival
        of the Jagannath devotees. It is the birth day of Lord Jagannath.`}
        </p>

        <p>
          {`The Snana Yatra is considered to be the birthday of Lord Jagannath.
        The deities are bathed with 108 pots of water, which is believed to
        cure them of any ailments they may have. The water used for the
        bathing ceremony is drawn from a sacred well known as the Suna Kua,
        which is located within the temple premises. The water is then
        sanctified with herbs and perfumes before being used to bathe the
        deities.`}
        </p>

        <p>
          {/*  invite devotees */}
          {`We cordially invite all of you, especially Life members, devotees, and
        well-wishers of ISKCON, to participate in the Jagannath Snana Yatra
        festival at ISKCON Asansol Temple. The festival will take place on
        the full moon day of the Jyestha month, and will include a special
        bathing ceremony for the deities, followed by a grand feast of
        prasadam.`}
        </p>

        <p>
          {`We hope to see you all there, and we pray that Lord Jagannath showers
        his blessings upon you and your family.`}
        </p>

        <section>
          <p className="font-semibold">Hare Krishna,</p>
          <p>ISKCON Jagannath Temple, Asansol</p>

          <div></div>
        </section>
      </article>

      <OfflinePayment className="container py-16" />
    </main>
  );
};

export default JagannathSnanaYatraPage;

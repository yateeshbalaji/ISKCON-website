import GitaIcon from "@/components/icons/gita-icon";
import PrasadamIcon from "@/components/icons/prasadam-icon";
import RadhaKrishnaIcon from "@/components/icons/radha-krishna-icon";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activities",
};

const activities = [
  {
    title: "Deity Worship",
    subtitle: "Daily worship of the Lord. Join us",
    icon: <RadhaKrishnaIcon className="w-12 h-12 md:w-32 md:h-32" />,
    link: "/activities/deity-worship",
    className: "bg-orange-100",
  },
  {
    title: "Devotee Prasadam",
    subtitle: "Daily distribution of prasadam for devotees",
    icon: <PrasadamIcon className="w-12 h-12 md:w-32 md:h-32" />,
    link: "/activities/prasadam",
    className: "bg-blue-100",
  },
  {
    title: "Daily Bhagwatam Classes",
    subtitle: "Learn the teachings of Srimad Bhagwatam",
    icon: (
      <Image
        src="/images/bhagwatam.png"
        width={140}
        height={140}
        alt="bhagwatam"
      />
    ),
    link: "/classes/bhagwatam-class",
    className: "bg-teal-100",
  },
  {
    title: "Sunday Spritual Classes",
    subtitle: "Come and join us for spiritual classes",
    icon: <GitaIcon className="w-12 h-12 md:w-32 md:h-32" />,
    link: "/classes/gita-class",
    className: "bg-teal-100",
  },
];

const Activities = () => {
  return (
    <main>
      <div className="py-16 container">
        <h2 className="text-xl md:text-3xl font-semibold text-purple-600">
          Our Activites
        </h2>
        <p className="text-slate-700 mt-2">
          {`Our society, guided by the teachings of our spiritual leader Srila
          Prabhupada, is dedicated to providing individuals with the chance
          to lead a life filled with happiness, robust health, peace of
          mind, and virtuous qualities through God consciousness.`}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {activities.map((activity, index) => (
            <Link
              key={index}
              href={activity.link}
              className="bg-white rounded-md p-4 border text-slate-700 shadow hover:shadow-md "
            >
              <div
                className={cn(
                  "mx-auto w-full text-center p-4 rounded-md flex justify-center",
                  activity.className
                )}
              >
                <span>{activity.icon}</span>
              </div>

              <h4 className="mt-2 font-semibold">{activity.title}</h4>
              <p className="text-xs">{activity.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Activities;

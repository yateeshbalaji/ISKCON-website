"use client";

import CurrencyRupeeIcon from "@/components/icons/currency-rupee-icon";
import HomeIcon from "@/components/icons/home-icon";
import PlusIcon from "@/components/icons/plus-icon";
import SparklesIcon from "@/components/icons/sparkles-icon";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  PopoverArrow,
} from "@/components/ui/popover";
import { CrossIcon, X } from "lucide-react";
import { useRef, useState } from "react";
import FireIcon from "./icons/fire-icon";
import { Button } from "./ui/button";
import useViewport from "@/app/hooks/useViewport";

const moreItems = [
  {
    name: "History",
    href: "/iskcon/history",
  },
  {
    name: "Founder",
    href: "/iskcon/founder",
  },
  {
    name: "Philosophy",
    href: "/iskcon/philosophy",
  },
  {
    name: "Vaishnava Calendar",
    href: "/iskcon/vaishnava-calendar",
  },
  {
    name: "Festivals",
    href: "/festivals",
  },
  {
    name: "Membership",
    href: "/members",
  },
  {
    name: "Learn from Prabhupada",
    href: "/learn-from-prabhupada",
  },
  // {
  //   name: 'Admin',
  //   href: '/admin',
  // }
];

const MobileNav = () => {
  const popoverClose = useRef(null);
  const [showMoreSection, setShowMoreSection] = useState(false);
  const { isMobile } = useViewport();

  const handleShowMore = () => {
    setShowMoreSection(!showMoreSection);
  };
  return (
    <>
      {isMobile ? (
        <nav className="sticky bottom-0 lg:hidden bg-slate-800 text-yellow-200 z-20">
          <div className="flex justify-between items-center py-4 px-8 text-xs font-light">
            <Link
              href="/"
              className="flex justify-center flex-col items-center "
            >
              <HomeIcon className="" />
              <span>Home</span>
            </Link>

            <Link
              href="/activities"
              className="flex justify-center flex-col items-center"
            >
              <SparklesIcon />
              <span>Activities</span>
            </Link>
            <Link
              href="/donation"
              className="flex justify-center flex-col items-center"
            >
              <CurrencyRupeeIcon />
              <span>Donate</span>
            </Link>
            <Link
              href="/festivals"
              className="flex justify-center flex-col items-center"
            >
              <FireIcon />
              <span>Festivals</span>
            </Link>

            <div className="flex justify-center flex-col items-center">
              <Button
                variant={"ghost"}
                className="h-6 hover:bg-transparent hover:text-inherit"
                onClick={handleShowMore}
              >
                <PlusIcon />
              </Button>
              <span>More</span>
            </div>

            <div
              className={
                showMoreSection
                  ? "fixed flex flex-col bottom-0 left-0 w-full bg-slate-800/90 backdrop-blur-sm z-0 justify-center p-4 gap-8 transition-transform duration-300 ease-in-out transform -translate-y-[72px]"
                  : "fixed flex flex-col bottom-0 left-0 w-full bg-slate-800/90 backdrop-blur-sm z-0 justify-center p-4 gap-8 transition-transform duration-300 ease-in-out transform translate-y-full"
              }
            >
              {" "}
              <div className="flex justify-end p-4">
                <button className="text-white w-8 h-8" onClick={handleShowMore}>
                  {/* Your close icon */}
                  <X className="w-8 h-8" />
                </button>
              </div>
              {moreItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className="py-2 px-4 hover:bg-transparent text-2xl"
                  onClick={() => {
                    if (popoverClose.current) {
                      (popoverClose.current as HTMLButtonElement).click();
                    }
                    setShowMoreSection(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default MobileNav;

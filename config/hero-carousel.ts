export type HeroCarouselItem = {
  image: string;
  imageAlt: string;
  topSubtitle: string;
  mainTitle: string;
  bottomSubtitle: string;
  cta?: {
    text: string;
    href: string;
  };
};

export const heroCarouselItems: HeroCarouselItem[] = [
  {
    image: "/images/rath-yatra-new.jpg",
    imageAlt: "Lord Jagannath Blessing",
    topSubtitle: "Celebrate the Divine",
    mainTitle: "Rath Yatra Festival 2025",
    bottomSubtitle: "Join us for a journey of spiritual bliss",
    cta: {
      text: "Contribute Now",
      href: "/festivals/rath-yatra",
    },
  },
  {
    image: "/images/jagannath_deity.jpg",
    imageAlt: "Lord Jagannath Vigraha",
    topSubtitle: "Welcome to",
    mainTitle: "Sri Sri Jagannath Temple, Asansol",
    bottomSubtitle:
      "Founder Acharya: His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda",
    cta: {
      text: "Donate Us",
      href: "/donation/general-donation",
    },
  },
  {
    image: "/images/jagannath-mahaprasadam.jpg",
    imageAlt: "Jagannath Mahaprasadam",
    topSubtitle: "Experience the Divine",
    mainTitle: "Daily Temple Activities",
    bottomSubtitle:
      "Participate in our daily worship and prasadam distribution",
    cta: {
      text: "View Activities",
      href: "/activities",
    },
  },
];

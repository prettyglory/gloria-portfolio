import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gloria Beneth Mbilinyi — Software, AI & IoT Engineer" },
      { name: "description", content: "Portfolio of Gloria Beneth Mbilinyi, a Computer Engineering student building software, AI, RAG, IoT, embedded, networking, and data solutions." },
      { property: "og:title", content: "Gloria Beneth Mbilinyi — Developer Portfolio" },
      { property: "og:description", content: "Explore software, AI/ML, IoT, embedded systems, mobile, and networking projects by Gloria Beneth Mbilinyi." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

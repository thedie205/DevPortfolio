"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { siteConfig } from "@/lib/site-config";

export default function HeroSection() {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="mx-auto mb-48 flex max-w-5xl flex-col items-center px-6 text-center"
    >
      {/* Available */}
      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 16,
          mass: 0.8,
          delay: 0.2
        }}
      >
        <Link
          href={siteConfig.links.contactForm}
          className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-sm transition hover:bg-accent"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>

          <span className="text-sm font-medium">
            Available for work
          </span>
        </Link>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 16,
          mass: 0.8,
          delay: 0.2
        }}
        className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight md:text-7xl"
      >
        I'm a{" "}
        <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
          Creative Frontend
        </span>{" "}
        Developer Crafting Modern Digital Experiences.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 16,
          mass: 0.8,
          delay: 0.2
        }}
        className="text-muted-foreground mt-6 max-w-2xl text-lg"
      >
        I build modern, responsive and high-performance web
        applications using React, Next.js and Tailwind CSS.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 16,
          mass: 0.8,
          delay: 0.2
        }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Button size="lg">
          <Link
            href={siteConfig.links.contactForm}
            className="flex items-center gap-2"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </Button>

        <Button variant="outline" size="lg">
          <a
            href={siteConfig.links.cvPdf}
            download
            className="flex items-center gap-2"
          >
            Download CV
            <Download size={18} />
          </a>
        </Button>

        <Button variant="outline" size="icon">
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
        </Button>

        <Button variant="outline" size="icon">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
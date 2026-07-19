"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { VectorField } from "@/components/sections/VectorField";

/** Full-screen homepage hero with the animated vector field behind it. */
export function Hero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.21, 0.5, 0.3, 1] as const,
          },
        };

  return (
    <section className="bg-grid relative flex min-h-svh items-center overflow-hidden">
      <div aria-hidden="true" className="bg-glow absolute inset-0" />
      <VectorField />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-20 md:px-8">
        <motion.p
          {...enter(0.1)}
          className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog"
        >
          <span aria-hidden="true" className="h-px w-6 bg-signal" />
          Strategic intelligence for frontier technology
        </motion.p>

        <motion.h1
          {...enter(0.25)}
          className="mt-7 max-w-4xl font-serif text-5xl leading-[1.04] text-balance text-paper sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          Technical advantage is only the beginning.
        </motion.h1>

        <motion.p
          {...enter(0.4)}
          className="mt-8 max-w-2xl text-base leading-relaxed text-fog md:text-lg"
        >
          Vector House helps frontier-technology leaders understand their
          market, sharpen their position and turn complex innovation into
          commercial direction.
        </motion.p>

        <motion.div {...enter(0.55)} className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contact">Start a conversation</ButtonLink>
          <ButtonLink href="/services" variant="outline">
            Explore our work
          </ButtonLink>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        {...enter(1)}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-fog/60 to-transparent" />
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { TesseractField } from "@/components/sections/TesseractField";
import { FounderPortrait } from "@/components/sections/FounderPortrait";

/**
 * Homepage hero: the founder front and center beside the message, with
 * the rotating tesseract field behind both.
 */
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
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <div aria-hidden="true" className="bg-glow absolute inset-0" />
      <TesseractField />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pt-28 pb-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24">
        <div>
          <motion.p
            {...enter(0.1)}
            className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-eyebrow text-fog"
          >
            <span aria-hidden="true" className="h-px w-6 bg-signal" />
            Communications · Marketing · Strategy · Intelligence
          </motion.p>

          <motion.h1
            {...enter(0.25)}
            className="mt-7 font-serif text-[2.6rem] leading-[1.05] text-balance text-paper sm:text-6xl lg:text-[4.2rem]"
          >
            Consequential technology needs more than visibility. It needs
            direction.
          </motion.h1>

          <motion.p
            {...enter(0.4)}
            className="mt-7 max-w-xl text-base leading-relaxed text-fog md:text-lg"
          >
            Fourth Axis is the founder-led practice of Cierra Choucair,
            bringing communications, marketing, strategy and intelligence
            together to help ambitious technologies become understood,
            trusted and actionable.
          </motion.p>

          <motion.div {...enter(0.55)} className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Explore the practice
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: {
                  duration: 0.8,
                  delay: 0.45,
                  ease: [0.21, 0.5, 0.3, 1] as const,
                },
              })}
          className="mx-auto w-full max-w-80 sm:max-w-96 lg:max-w-none lg:justify-self-end"
        >
          <FounderPortrait priority className="aspect-6/7 w-full" />
        </motion.div>
      </div>
    </section>
  );
}

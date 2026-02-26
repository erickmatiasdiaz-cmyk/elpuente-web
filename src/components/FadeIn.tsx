"use client";

/*
====================================================
ANIMACIÓN PREMIUM CORPORATIVA
Fade + desplazamiento suave vertical
====================================================
*/

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
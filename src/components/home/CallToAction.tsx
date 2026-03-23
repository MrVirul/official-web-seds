import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-black pb-24 pt-0"
    >
      {/* Hands image - Full width at top, non-overlapping */}
      <motion.div
        className="relative w-full z-0"
        style={{ y: imageY, opacity }}
      >
        {/* White-purple glow behind hands
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] rounded-full blur-[120px] pointer-events-none z-[-1]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(224,182,228,0.2) 60%, transparent 100%)'
          }}
        /> */}
        <img
          src="/cta-hands.png"
          alt="Hands"
          className="w-full h-auto object-cover"
          style={{ mixBlendMode: 'screen' }}
          loading="lazy"
        />
        {/* Subtle fade at the bottom of the image */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"
        />
      </motion.div>

      {/* Content Container - For centered heading and card */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        {/* Heading - Now below the image */}
        <motion.h2
          className="mt-8 mb-16 text-center font-light tracking-wider bg-gradient-to-r from-white to-[#E0B6E4] bg-clip-text text-transparent select-none"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          READY TO EXPLORE SPACE?
        </motion.h2>
      </div>
    </section>
  );
};

export default CallToAction;
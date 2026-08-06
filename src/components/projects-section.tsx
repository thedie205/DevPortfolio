'use client'

import { useSectionInView } from '@/hooks/use-section-in-view'
import { projectsData } from '@/lib/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from './section-heading'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
    animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
      mass: 0.8,
      delay: index * 0.15,
    },
  }),
}

export default function ProjectsSection() {
  const { ref } = useSectionInView('Projects')

  return (
    <section
      ref={ref}
      id="projects"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{                           type: "spring",
          stiffness: 100,
          damping: 16,
          mass: 0.8,
          delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="My Projects"
          content="A collection of projects showcasing my skills in frontend development, modern web technologies, and problem solving."
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((data, index) => (
          <motion.article
            key={data.title}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="group overflow-hidden rounded border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:shadow-xs"
          >
            <Link
              href={data.links.github}
              target="_blank"
              aria-label={data.title}
              className="block overflow-hidden"
            >
              <video
                src={data.video}
                autoPlay
                loop
                muted
                playsInline
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </Link>

            <div className="space-y-4 p-6">
              <div>
                <h3 className="text-2xl font-bold">
                  {data.title}
                </h3>

                <p className="mt-2 text-muted-foreground leading-7">
                  {data.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-border
                      bg-background
                      px-3
                      py-1
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      hover:bg-primary
                      hover:text-primary-foreground
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href={data.links.preview}
                  target="_blank"
                  className="font-medium text-primary transition hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
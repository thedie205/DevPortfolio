'use client'

import { useSectionInView } from '@/hooks/use-section-in-view'
import { experiencesData } from '@/lib/data'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Icons } from './icons'
import SectionHeading from './section-heading'

export default function ExperienceSection() {
  const { ref } = useSectionInView('Experience')

  return (
    <section
      ref={ref}
      id="experience"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="My Journey"
        content="My learning journey, projects, and continuous growth as a Frontend Developer."
      />

      <div className="relative max-w-screen-md">
        {experiencesData.map((data) => (
          <div
            key={data.title}
            className="relative pl-8 [&:not(:last-child)]:pb-10"
          >
            <div className="bg-muted absolute left-0 top-2.5 h-full w-[2px]">
              <div className="border-primary bg-background absolute -left-[5px] top-0 size-3 rounded-full border-2" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                          type: "spring",
          stiffness: 100,
          damping: 16,
          mass: 0.8,
          delay: 0.2
              }}
              viewport={{ once: true }}
              className={cn('space-y-3 opacity-0')}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full border">
                  <Icons.building className="size-5" />
                </div>

                <span className="text-lg font-semibold">
                  {data.company}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-medium">
                  {data.title}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Icons.calendar className="size-4" />
                  <span>{data.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground">
                {data.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
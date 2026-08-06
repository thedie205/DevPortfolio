'use client'

import { useSectionInView } from '@/hooks/use-section-in-view'
import { siteConfig } from '@/lib/site-config'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionHeading from './section-heading'
import Skills from './skills'

export default function AboutSection() {
    const { ref } = useSectionInView('About')

    return (
        <motion.section
            ref={ref}
            id="about"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className=" flex w-full my-10 scroll-mt-28 md:mb-20 flex-col items-center "
        >
            <SectionHeading heading="About Me" />
            <div className="-mt-2 max-w-2xl text-center leading-7">
                <p className="mb-4">
                    I'm a Frontend Developer passionate about building modern, responsive, and
                    user-friendly web applications. I enjoy turning ideas into clean,
                    interactive interfaces and continuously improving my skills by learning new
                    technologies and following best practices.
                </p>

                <p>
                    I'm currently focused on React, Next.js, TypeScript, and Tailwind CSS. I'm
                    always looking for opportunities to grow as a developer, collaborate with
                    others, and work on meaningful projects. If you're interested in working
                    together, feel free to{" "}
                    <Link
                        href={siteConfig.links.contactForm}
                        className="underline-offset-4 hover:underline"
                    >
                        contact me
                    </Link>
                    .
                </p>
            </div>
            <Skills />
        </motion.section>
    )
}

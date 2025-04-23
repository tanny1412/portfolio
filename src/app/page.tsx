 'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import Reveal from '@/components/Reveal';

const projects = [
  {
    title: "NYC Taxi Trip Duration Predictor",
    description: "An End-to-End MLOps Pipeline Built with DVC, MLflow, and FastAPI",
    image: "/nytaxi.jpg",
    link: "https://github.com/tanny1412/nyc-taxi-duration-mlops",
  },
  {
    title: "Criminal Procedure Assistant",
    description: "This repository implements a Criminal Procedure Assistant: a web application that lets you query the Massachusetts Rules of Criminal Procedure using RAG",
    image: "/law.jpg",
    link: "https://github.com/tanny1412/Assignement-7---Capstone-Project-Deploying-Generative-AI-Application",
  },
  {
    title: "Spotify Skip Predictor",
    description: "Predict whether a Spotify track will be skipped using Machine Learning (Random Forest)",
    image: "/spotify.jpg",
    link: "https://github.com/tanny1412/SpotifySkip",
  },
];

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (showContent) {
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [showContent]);

  return (
    <>
      <HeroSection onClick={() => setShowContent(true)} />
      {showContent && (
        <div className="container mx-auto py-12 px-4">
          {/* Introduction Section */}
          <Reveal>
            <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div className="md:order-2">
                <Image
                  src="/tanish.jpg"
                  alt="Tanish Kandivlikar"
                  width={500}
                  height={500}
                  className="rounded-full shadow-lg transition-transform hover:scale-105"
                />
              </div>
              <div className="md:order-1">
                <h1 className="text-4xl font-bold mb-4">Hello, I'm Tanish Kandivlikar</h1>
                <p className="text-lg mb-6">
                  A passionate data scientist with expertise in machine learning, statistical analysis, and data visualization.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://www.linkedin.com/in/tanish14/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="transition-transform hover:scale-105">LinkedIn</Button>
                  </Link>
                  <Link href="https://github.com/tanny1412" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="transition-transform hover:scale-105">GitHub</Button>
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Work Experience Section */}
          <Reveal>
            <section id="experience" className="mb-24">
              <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
              {/* Generative AI Project */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold">Generative AI (Graduate Qualifying Project)</h3>
                <p className="text-gray-600">Findability Sciences · Graduate Qualifying Project · Aug 2024 - Dec 2024 · Remote</p>
                <ul className="list-disc list-inside mt-4 space-y-4">
                  <li>Enhanced a chatbot application by implementing generative AI techniques, including Retrieval-Augmented Generation (RAG) and agentic AI, to deliver precise responses to complex, multi-document queries.</li>
                  <li>Upgraded the RAG pipeline from a basic system to an advanced one by incorporating multiple filtering and reranking processes, significantly boosting the quality and relevance of the answers.</li>
                  <li>Presented the improved chatbot to stakeholders, demonstrating its enhanced ability to address sophisticated questions with clarity and precision, supported by legally signed documents and reliable sources.</li>
                </ul>
              </div>
              {/* Purplle.com Internship */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold">Marketing Intern</h3>
                <p className="text-gray-600">Purplle.com · Internship · Dec 2021 - Mar 2022 · Mumbai, Maharashtra, India · Remote</p>
                <ul className="list-disc list-inside mt-4 space-y-4">
                  <li>Conducted general research and market analysis using innovative quantitative techniques, synthesizing trends to inform strategic marketing decisions with data visualization tools.</li>
                  <li>Created business dashboards to track product performance trends, automating data sheets for a 30% optimization in resource utilization, supporting internal business development needs.</li>
                </ul>
              </div>
            </section>
          </Reveal>

          {/* Project Showcase Section */}
          <Reveal>
            <section id="projects" className="mb-24">
              <h2 className="text-3xl font-bold mb-12">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-48 transition-opacity hover:opacity-90"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Link href={project.link} className="text-teal-500 hover:underline transition-colors hover:text-teal-700">
                        View Project
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Contact Information Section */}
          <Reveal>
            <section id="contact" className="text-center">
              <h2 className="text-3xl font-bold mb-8">Contact</h2>
              <p className="text-lg mb-4">
                Feel free to reach out to me via email or phone, or connect with me on social media.
              </p>
              <p className="text-gray-600 mb-2">
                Work Email: <a href="mailto:tkandivlikar@wpi.edu" className="text-teal-500">tkandivlikar@wpi.edu</a>
              </p>
              <p className="text-gray-600 mb-2">
                Personal Email: <a href="mailto:tanish.kandivlikar1412@gmail.com" className="text-teal-500">tanish.kandivlikar1412@gmail.com</a>
              </p>
              <p className="text-gray-600 mb-4">
                Phone: <a href="tel:+17742533836" className="text-teal-500">+1 774 253 3836</a>
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="https://www.linkedin.com/in/tanish14/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="transition-transform hover:scale-105">LinkedIn</Button>
                </Link>
                <Link href="https://github.com/tanny1412" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="transition-transform hover:scale-105">GitHub</Button>
                </Link>
              </div>
            </section>
          </Reveal>
        </div>
      )}
    </>
  );
}

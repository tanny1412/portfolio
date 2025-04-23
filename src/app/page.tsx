
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    image: "https://picsum.photos/400/300",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    image: "https://picsum.photos/400/300",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    image: "https://picsum.photos/400/300",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Introduction Section */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div className="md:order-2">
          <Image
            src="https://picsum.photos/500/500"
            alt="Your Headshot"
            width={500}
            height={500}
            className="rounded-full shadow-lg transition-transform hover:scale-105"
          />
        </div>
        <div className="md:order-1">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h1>
          <p className="text-lg mb-6">
            A passionate data scientist with expertise in machine learning, statistical analysis, and data visualization.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="transition-transform hover:scale-105">LinkedIn</Button>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="transition-transform hover:scale-105">GitHub</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section id="projects" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Contact Information Section */}
      <section id="contact" className="text-center">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <p className="text-lg mb-4">
          Feel free to reach out to me via email or connect with me on social media.
        </p>
        <p className="text-gray-600 mb-4">
          Email: <a href="mailto:your.email@example.com" className="text-teal-500">your.email@example.com</a>
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="transition-transform hover:scale-105">LinkedIn</Button>
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="transition-transform hover:scale-105">GitHub</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

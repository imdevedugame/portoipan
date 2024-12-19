import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Text Ivan 3D",
    description: "A fully Im Designer project",
    image: "/image/2.jpg?height=200&width=300",
    link: "#"
  },
  {
    title: "Thumnil Amv Imvanz the night we meet",
    description: "A vintage filter old tv Thumbnails",
    image: "/image/4.png?height=200&width=300",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A sleek and modern portfolio website showcasing my skills and projects.",
    image: "/image/3.png?height=200&width=300",
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild><a href={project.link}>View Project</a></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


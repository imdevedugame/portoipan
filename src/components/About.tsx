import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image 
              src="/image/1.jpg?height=400&width=400" 
              alt="Imvanz" 
              width={400} 
              height={400} 
              className="rounded-full"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hello! I'm Imvanz, a web developer with a passion for creating beautiful and functional websites. 
              With years of experience in the field, I specialize in front-end development and have a keen eye for design.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying a good cup of coffee while brainstorming my next big idea.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


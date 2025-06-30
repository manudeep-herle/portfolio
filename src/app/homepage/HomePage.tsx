export default function HomePage() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <section id="about" className="scroll-mt-16">
        <p className="text-lg mb-8">Hi, I am</p>
        <h1 className="text-7xl mb-8 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
          Manudeep Herle
        </h1>
        <p className="text-gray-700 text-lg">
          I'm a software engineer with 5 years of experience, a 3.9 GPA in MSCS,
          and currently a research affiliate at MIT. I love solving complex
          problems by building clean, scalable systems. My areas of expertise
          are Full-stack development, Artificial intelligence, Distributed
          Systems, Cloud architecture and UI/UX design.
        </p>
      </section>

      {/* Skills section */}
      <section id="experience" className="scroll-mt-16">
        <h2 className="text-4xl font-bold mb-2">Skills</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>React</li>
          <li>Node.js.</li>
          <li>Next.js</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-16">
        <h2 className="text-4xl font-bold mb-2">Experience</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            MIT – Built a geospatial dashboard with Angular + Mapbox and led
            secure auth integration for Copin.
          </li>
          <li>
            BETSOL – Led frontend for multi-tenant SaaS portal (React,
            TypeScript), built analytics dashboards for Sling TV.
          </li>
          <li>
            OneOrigin – Built Uber SSO auth frontend, CI/CD pipelines, and
            optimized API performance with Redis.
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-16">
        <h2 className="text-4xl font-bold mb-2">Projects</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>IRON</strong> – A system to verify strict serializability in
            distributed databases (MS thesis).
          </li>
          <li>
            <strong>Raft Protocol</strong> – Built a leader election and log
            replication system in Golang.
          </li>
          <li>
            <strong>SkillBridge</strong> – This portfolio and tracker, built
            with Next.js + Tailwind.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16">
        <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
        <p className="text-gray-700 text-lg">
          Let’s connect! Email me at{" "}
          <a
            href="mailto:manudeep.herle@gmail.com"
            className="text-blue-600 underline"
          >
            manudeep.herle@gmail.com
          </a>{" "}
          or message me on{" "}
          <a
            href="https://www.linkedin.com/in/manudeep-herle"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}

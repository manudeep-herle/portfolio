export default function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
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
      </main>
    </div>
  );
}

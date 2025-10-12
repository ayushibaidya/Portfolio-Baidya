export default function Contact() {
  const email = "ayushibaidya@gmail.com";
  const linkedin = "https://www.linkedin.com/in/ayushi-baidya/";
  const github = "https://github.com/ayushibaidya";

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-licorice relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
      <p className="max-w-2xl text-center text-gray-700 mb-10">
        Best ways to reach me.
      </p>

      <div className="max-w-3xl w-full grid gap-4 md:grid-cols-3">
        <a
          href={`mailto:${email}`}
          className="p-6 rounded-xl shadow-lg border bg-white flex flex-col items-center justify-center text-center hover:shadow-xl transition"
          aria-label="Email Ayushi"
        >
          <div className="text-sm uppercase tracking-wide text-gray-500 mb-1">Email</div>
          <div className="font-medium break-all">{email}</div>
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-6 rounded-xl shadow-lg border bg-white flex flex-col items-center justify-center text-center hover:shadow-xl transition"
          aria-label="Ayushi LinkedIn"
        >
          <div className="text-sm uppercase tracking-wide text-gray-500 mb-1">LinkedIn</div>
          <div className="font-medium">linkedin.com/in/ayushi-baidya</div>
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="p-6 rounded-xl shadow-lg border bg-white flex flex-col items-center justify-center text-center hover:shadow-xl transition"
          aria-label="Ayushi GitHub"
        >
          <div className="text-sm uppercase tracking-wide text-gray-500 mb-1">GitHub</div>
          <div className="font-medium">github.com/ayushibaidya</div>
        </a>
      </div>
    </section>
  );
}

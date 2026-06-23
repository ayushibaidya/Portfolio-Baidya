const contactLinks = [
  {
    label: "Email",
    value: "baidya.ay@northeastern.edu",
    href: "mailto:baidya.ay@northeastern.edu",
    action: "Send email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ayushi-baidya",
    href: "https://www.linkedin.com/in/ayushi-baidya",
    action: "Connect",
  },
  {
    label: "GitHub",
    value: "github.com/ayushibaidya",
    href: "https://github.com/ayushibaidya",
    action: "View code",
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-licorice relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
      <p className="max-w-2xl text-center text-gray-700 mb-10">
        I’m open to Software Engineering Co-op and Intern roles in backend,
        systems, reliability, developer tools, and embedded-adjacent software.
      </p>

      <div className="max-w-5xl w-full grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="p-6 rounded-2xl shadow-lg border border-taupe/45 bg-antiqueWhite/90 backdrop-blur flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition"
            aria-label={`${link.action} ${link.label}`}
          >
            <div>
              <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                {link.label}
              </div>
              <div className="font-medium break-all text-licorice">
                {link.value}
              </div>
            </div>

            <div className="mt-5 text-sm font-semibold text-cherryRose">
              {link.action}
            </div>
          </a>
        ))}
      </div>

      <p className="mt-10 text-center text-gray-600">
        Based in Boston, MA
      </p>
    </section>
  )
}

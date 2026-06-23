const projects = [
  {
    title: "ShelfLife",
    subtitle: "Backend Service / Full-Stack Integration",
    category: "Full Stack",
    status: "Featured",
    summary:
      "Built a Go/Gin service for authenticated settings, web push subscriptions, and real-time notifications in a React/Supabase freshness app.",
    bullets: [
      "Secured versioned API handlers with Supabase JWT validation, per-user Postgres query scoping, and pgx/v5 pooling.",
      "Registered browser and device push subscriptions with idempotent PostgreSQL upserts using ON CONFLICT DO UPDATE.",
      "Delivered real-time notification confirmations through an RWMutex-guarded WebSocket hub with per-user routing.",
      "Automated AWS EC2 deployment with GitHub Actions, Go binary builds, and systemd-managed backend restarts.",
    ],
    tech: [
      "Go",
      "Gin",
      "PostgreSQL",
      "Supabase",
      "JWT",
      "pgx/v5",
      "REST APIs",
      "WebSockets",
      "AWS EC2",
      "GitHub Actions",
    ],
    badgeClass: "bg-dustyRose/20 text-cherryRose border-dustyRose/40",
  },
  {
    title: "EGOS-2K Operating Systems Labs",
    subtitle: "RISC-V OS Labs / QEMU Simulation",
    category: "Systems",
    status: "Course Project",
    summary:
      "Implemented core components in EGOS-2K, a small RISC-V educational OS, using C and QEMU-based simulation.",
    bullets: [
      "Built round-robin and MLFQ schedulers with aging, priority promotion, starvation checks, and wait-time fairness metrics.",
      "Added scheduling metrics for turnaround time, response time, CPU runtime, wait time, boost count, and starvation hits.",
      "Implemented user-level threads, context switching, cooperative scheduling primitives, and IPC message passing.",
      "Worked on syscalls, user/kernel protection, RISC-V PMP, virtual memory layout, inode operations, disk storage, and QEMU debugging.",
    ],
    tech: [
      "C",
      "RISC-V",
      "QEMU",
      "MLFQ",
      "syscalls",
      "PMP",
      "IPC",
      "virtual memory",
      "file system",
      "scheduling metrics",
    ],
    badgeClass: "bg-cinnamonWood/15 text-cinnamonWood border-cinnamonWood/35",
  },
  {
    title: "RTOS-Based Motion-Control Firmware Simulator",
    subtitle: "C Firmware Simulator / FreeRTOS-Ready Architecture",
    category: "Embedded",
    status: "In Progress",
    summary:
      "Built a modular embedded C firmware simulator for a 2-axis motion stage, designed to migrate into FreeRTOS tasks on ARM Cortex-M.",
    bullets: [
      "Built modular C firmware for command parsing, motion control, telemetry reporting, and fault handling.",
      "Added UART-style commands including PING, STATUS, MOVE, STOP, ESTOP, and CLEAR_FAULT.",
      "Simulated X/Y motion with milli-millimeter units, feedrate updates, bounds checking, motion states, and e-stop safety.",
      "Validated behavior with CMake, CTest, and a Python smoke test for boot, commands, telemetry, faults, and recovery.",
    ],
    tech: [
      "C",
      "CMake",
      "CTest",
      "Python",
      "Embedded Systems",
      "FreeRTOS-ready",
      "ARM Cortex-M",
      "UART commands",
      "motion control",
      "fault recovery",
    ],
    badgeClass: "bg-taupe/25 text-licorice border-taupe/45",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-licorice relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
      <p className="max-w-2xl text-center text-gray-700 mb-10">
        Featured technical projects aligned with backend, systems, and embedded-adjacent software.
      </p>

      <div className="max-w-6xl w-full grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-antiqueWhite/90 border border-taupe/45 rounded-2xl shadow-lg p-6 backdrop-blur flex flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm italic text-gray-600">
                  {project.subtitle}
                </p>
              </div>

              <span
                className={`${project.badgeClass} px-3 py-1 rounded-full border text-sm font-medium whitespace-nowrap`}
              >
                {project.category}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              {project.summary}
            </p>

            <ul className="mt-5 space-y-3 text-sm text-licorice/80 flex-1">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-relaxed">
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cinnamonWood"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <p className="text-sm font-semibold text-licorice mb-3">
                {project.status}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/55 text-licorice text-sm border border-taupe/40"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

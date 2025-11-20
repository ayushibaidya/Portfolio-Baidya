export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-licorice relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      {/* 2 by 2 grid holding 4 cards */}
      <div className="max-w-5xl w-full grid gap-8 md:grid-cols-2">
        {/* Project 1: Mini Checkpointing System */}
        <article className="p-6 rounded-xl shadow-lg border bg-white">
          <h3 className="text-2xl font-semibold">
            Mini Checkpointing System — Checkpoint–Restart (CS5600)
          </h3>
          <p className="mt-2 text-sm text-gray-500">Systems • C, Linux</p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              Implemented Linux user-space checkpointing in C: captured{" "}
              <code>ucontext_t</code> (<code>getcontext</code>), parsed{" "}
              <code>/proc/self/maps</code>, and serialized segments with
              page-aligned boundaries and integrity checks; measured image size
              vs. page size and I/O throughput.
            </li>
            <li>
              Wrote a static restart that <code>mmap</code>s with{" "}
              <code>MAP_FIXED</code> and resumes via <code>setcontext()</code>;
              handled guard pages and <code>vdso/vvar</code> relocation; verified
              restore sequence with GDB/<code>perf</code>.
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "C",
              "Linux",
              "mmap",
              "signals",
              "ucontext",
              "/proc/self/maps",
              "GDB",
              "perf",
              "Makefile",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded bg-gray-100 text-gray-800 text-sm border"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        {/* Project 2: 3650 CPU Emulator */}
        <article className="p-6 rounded-xl shadow-lg border bg-white">
          <h3 className="text-2xl font-semibold">3650 CPU Emulator (CS3650)</h3>
          <p className="mt-2 text-sm text-gray-500">
            Systems • C, Emulator Design
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              Implemented the instruction set in <code>emulate.c</code> with a
              fetch–decode–execute loop, register/memory model, condition flags,
              and <code>HALT</code>; coded opcode semantics per the CPU spec.
            </li>
            <li>
              Authored tests in <code>test.c</code> for LOAD/STORE, ALU ops,
              control flow, and stack; generated binaries via{" "}
              <code>asm.py -l</code>, validated with{" "}
              <code>runsim -v/-r</code> and <code>disasm</code>; automated builds
              with Makefile.
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "C",
              "bitwise ops",
              "fetch/decode/execute",
              "asm.py",
              "disasm",
              "runsim",
              "Makefile",
              "Git",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded bg-gray-100 text-gray-800 text-sm border"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        {/* Project 3: User-Space Thread Library */}
        <article className="p-6 rounded-xl shadow-lg border bg-white">
          <h3 className="text-2xl font-semibold">
            User-Space Thread Library (CS5600)
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Systems • C, User-level Threads
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              Implemented a pthread-like user-space threading library (
              <code>qthread</code>) with thread create/join, yield, sleep,
              mutexes, and condition variables using custom TCBs plus ready/sleep
              queues; wrote C tests to validate synchronization and
              join-before-exit semantics.
            </li>
            <li>
              Integrated architecture-specific context switching in{" "}
              <code>switch_sp</code> and built a cooperative scheduler handling
              runnable threads and timer-based wakeups via{" "}
              <code>gettimeofday()</code>, ensuring fair progress across multiple
              worker threads.
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "C",
              "user-level threads",
              "context switch",
              "scheduler",
              "mutexes",
              "cond vars",
              "TCB",
              "queues",
              "timers",
              "Makefile",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded bg-gray-100 text-gray-800 text-sm border"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        {/* Project 4: ShelfLife Backend */}
        <article className="p-6 rounded-xl shadow-lg border bg-white">
          <h3 className="text-2xl font-semibold">
            ShelfLife — Produce Freshness Tracker (Backend)
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Backend • Go, Supabase/Postgres
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>
              Built a Go backend (Gin) with REST APIs for user settings and push
              device registration; enforced per-user data isolation using
              Supabase/Postgres RLS and JWT auth, with versioned{" "}
              <code>/v1</code> routes and env-driven configuration.
            </li>
            <li>
              Made the subscription endpoint idempotent to prevent duplicate
              registrations; tested end-to-end using <code>curl</code> and SQL,
              and standardized DB connectivity with <code>pgxpool</code> and a
              hardened proxy setup.
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Go",
              "Gin",
              "pgx/pgxpool",
              "PostgreSQL",
              "Supabase",
              "RLS",
              "JWT",
              "REST APIs",
              "Web Push",
              "curl",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded bg-gray-100 text-gray-800 text-sm border"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

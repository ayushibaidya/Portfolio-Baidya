const courseworkProjects = [
  {
    title: "Instruction-Set CPU Emulator",
    course: "CS5600 Computer Systems, Lab 1",
    description:
      "Built a C emulator for an educational 16-bit CPU with registers, PC/SP, condition flags, 64 KB memory, and single-instruction execution.",
    bullets: [
      "Implemented instruction decoding for SET, LOAD/STORE, COPY, ALU ops, jumps, CALL/RET, stack operations, IN/OUT, and HALT.",
      "Modeled CPU state transitions including program counter updates, stack pointer behavior, condition flags, direct addressing, and indirect addressing.",
      "Wrote assertion-based C tests for memory access, ALU behavior, control flow, calls, returns, stack behavior, and I/O with all tests passing.",
    ],
    tags: [
      "C",
      "CPU emulator",
      "instruction decoding",
      "fetch-decode-execute",
      "direct addressing",
      "indirect addressing",
      "stack",
      "control flow",
      "assert tests",
      "Makefile",
    ],
  },
  {
    title: "Unix-Style Shell",
    course: "CS5600 Computer Systems, Lab 2",
    description:
      "Built a C shell with command parsing, built-ins, process execution, redirection, pipelines, exit status tracking, and signal behavior.",
    bullets: [
      "Implemented built-ins for cd, pwd, and exit with argument validation, HOME fallback, and stderr error reporting.",
      "Executed external commands with fork, execvp, waitpid, and signal handling so interactive shells ignore SIGINT while child processes use default behavior.",
      "Added input and output redirection with open, dup2, close, and multi-stage pipeline execution using pipe file descriptors.",
      "Tracked command and pipeline exit status for $? expansion and validated behavior with tests covering redirects, bad syntax, pipes, built-ins, and descriptor cleanup.",
    ],
    tags: [
      "C",
      "Unix shell",
      "fork",
      "execvp",
      "waitpid",
      "pipe",
      "dup2",
      "redirection",
      "built-ins",
      "signals",
    ],
  },
  {
    title: "User-Space Thread Library",
    course: "CS5600 Computer Systems, Lab 3",
    description:
      "Implemented a pthread-like user-space threading library in C with cooperative scheduling, stack switching, synchronization, and timed sleeps.",
    bullets: [
      "Built thread creation, yield, exit, and join using thread control blocks, ready queues, heap-allocated stacks, and assembly-backed stack switching.",
      "Implemented cooperative scheduling with runnable, running, blocked, and done states, plus join waiters and return-value propagation.",
      "Added mutexes and condition variables with waiter queues, signal, broadcast, lock handoff, and cond-wait mutex release and reacquire semantics.",
      "Implemented qthread_usleep with wake timestamps, sleeper tracking, due-thread wakeups, and tests for ordering, joins, mutex contention, condvars, and timed sleep.",
    ],
    tags: [
      "C",
      "user threads",
      "context switching",
      "TCB",
      "scheduler",
      "mutexes",
      "condition variables",
      "wait queues",
      "timed sleep",
      "assembly",
    ],
  },
  {
    title: "Read-Only FUSE File System",
    course: "CS5600 Computer Systems, Lab 4",
    description:
      "Implemented a read-only user-space file system over a disk image with inode traversal, directory iteration, and block-based file reads.",
    bullets: [
      "Implemented fs_getattr, fs_readdir, and fs_read for a FUSE-backed file system using custom inode and directory-entry structures.",
      "Built path-to-inode resolution from parsed path components, including nested directory traversal and ENOENT or ENOTDIR error propagation.",
      "Read directory blocks, filtered valid entries, and returned file metadata including mode, inode number, ownership, timestamps, and size.",
      "Handled offset-based reads across 4096-byte disk blocks with memcpy chunking, EOF truncation, and EISDIR protection for directory reads.",
    ],
    tags: [
      "C",
      "FUSE",
      "file system",
      "inodes",
      "directory entries",
      "block I/O",
      "path traversal",
      "offset reads",
      "errno",
      "disk image",
    ],
  },
  {
    title: "MVC Calendar Application",
    course: "CS5010 Programming Design Paradigm",
    description:
      "Built a Java calendar application in a paired project, focusing on the View and Controller layers for GUI, CLI, and headless workflows.",
    bullets: [
      "Implemented controller flow that translated CLI commands and Swing callbacks into model operations using command objects and semantic GUI actions.",
      "Built Swing view components including the main frame, month grid, selected-day event list, and dialogs for creating and editing events.",
      "Supported interactive, headless, and GUI execution modes through shared startup routing and a consistent model-facing controller boundary.",
      "Handled user-facing validation, error messaging, event creation, recurring series forms, edit scopes, and refresh behavior after model mutations.",
    ],
    tags: [
      "Java",
      "MVC",
      "Swing",
      "Controller",
      "View",
      "Command pattern",
      "CLI",
      "headless mode",
      "JUnit",
      "Gradle",
    ],
  },
]

export default function AcademicCoursework() {
  return (
    <section
      id="academic-coursework"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-licorice relative z-10 snap-start snap-always"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">
        Academic Coursework
      </h2>
      <p className="max-w-2xl text-center text-licorice/75 mb-10">
        A space for additional technical coursework projects beyond the featured project list.
      </p>

      <div className="max-w-7xl w-full grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courseworkProjects.map((project, index) => (
          <article
            key={`${project.title}-${index}`}
            className="bg-antiqueWhite/90 border border-dustyRose rounded-2xl shadow-md p-6 backdrop-blur"
          >
            <div className="w-10 h-1 bg-dustyRose rounded-full mb-5" />
            <p className="text-sm font-semibold uppercase tracking-wide text-cinnamonWood">
              {project.course}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-licorice/75">
              {project.description}
            </p>

            {project.bullets && (
              <ul className="mt-5 space-y-2 text-sm text-licorice/75">
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
            )}

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-white/55 text-licorice border border-taupe/45 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

const labs = [
  {
    title: "EGOS-2K Operating Systems Labs",
    description:
      "RISC-V educational OS work in C and QEMU: round-robin and MLFQ scheduling, user-level threads, IPC, syscalls, protection, and file-system operations.",
    tags: "C · RISC-V · QEMU · Scheduling",
  },
  {
    title: "Instruction-Set CPU Emulator",
    description:
      "An educational 16-bit CPU emulator in C with registers, memory, instruction decoding, ALU operations, control flow, and assertion-based tests.",
    tags: "C · CPU architecture · Testing",
  },
  {
    title: "Unix-Style Shell",
    description:
      "A C shell with built-ins, fork/exec process execution, multi-stage pipelines, input/output redirection, signals, and exit-status handling.",
    tags: "C · POSIX · Processes",
  },
  {
    title: "User-Space Thread Library",
    description:
      "Cooperative threads with stack switching, creation and join, mutexes, condition variables, and timed sleeps.",
    tags: "C · Concurrency · Synchronization",
  },
  {
    title: "Read-Only FUSE File System",
    description:
      "A user-space file system over a disk image with inode traversal, directory iteration, offset-based reads, and error propagation.",
    tags: "C · FUSE · File systems",
  },
];

export default function AcademicCoursework() {
  return (
    <details id="academic-coursework" className="coursework-details">
      <summary>
        Explore additional systems coursework <span aria-hidden="true">+</span>
      </summary>
      <div className="labs-grid">
        {labs.map((lab) => (
          <article key={lab.title}>
            <h3>{lab.title}</h3>
            <p>{lab.description}</p>
            <span className="mono">{lab.tags}</span>
          </article>
        ))}
      </div>
    </details>
  );
}

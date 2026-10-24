export const profile = {
  name: "Ayushi Baidya",
  availability:
    "Open to full-time software engineering roles starting in 2027 and internship or co-op opportunities in Spring 2027.",
  email: "baidya.ay@gmail.com",
  github: "https://github.com/ayushibaidya",
  linkedin: "https://www.linkedin.com/in/ayushi-baidya/",
  site: "https://portfolio-baidya.vercel.app",
};

export const projects = [
  {
    slug: "shelflife",
    number: "01",
    name: "ShelfLife",
    subtitle: "Produce freshness tracker",
    category: "Full-stack / Backend",
    status: "Implemented · Team project",
    shortStatus: "Team project",
    description:
      "A produce freshness app with a Go backend for authenticated preferences, persistent data, and real-time confirmations.",
    stack: [
      "Go",
      "Gin",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Supabase JWT",
      "WebSockets",
      "AWS EC2",
      "GitHub Actions",
    ],
    cardStack: ["Go", "React", "TypeScript", "PostgreSQL", "AWS"],
    highlights: [
      "User-scoped settings APIs and idempotent push-subscription writes.",
      "pgx connection pooling and WebSocket notification confirmations.",
      "EC2 deployment workflow with Go builds and systemd restarts.",
    ],
    repo: "https://github.com/Puranjay-del-Mishra/ShelfLife",
    diagram: {
      label: "Implemented backend flow",
      description:
        "React and TypeScript send authenticated requests to the Go and Gin API. The API validates Supabase JWTs, reads and writes PostgreSQL through pgx, and sends WebSocket confirmations to the client.",
      nodes: ["React / TS", "Go / Gin API", "PostgreSQL"],
      annotations: [
        "Supabase JWT",
        "pgx pool · upserts",
        "WebSocket confirmations",
      ],
    },
    problem:
      "Freshness tracking needs notification preferences that stay consistent across sessions and devices. The backend must associate each request with the correct user and handle repeat subscription requests without creating duplicate records.",
    solution:
      "A React and TypeScript client integrates with a Go/Gin service and Supabase. The backend exposes versioned settings and Web Push registration endpoints, persists user-scoped data in PostgreSQL, and provides WebSocket confirmations after settings updates.",
    architecture:
      "Bearer JWTs pass through authentication middleware before reaching /v1 settings and subscription handlers. Queries use the authenticated user ID and a shared pgx connection pool. The WebSocket hub groups clients by user; a GitHub Actions workflow builds the Go service on EC2 and restarts it with systemd.",
    contributions: [
      "Implemented the initial Go settings API and PostgreSQL schema migrations.",
      "Added the Web Push device registration endpoint with repeat-safe subscription upserts.",
      "Expanded backend/frontend test coverage and software development documentation.",
    ],
    collaboration:
      "Public commit history attributes these contributions to my GitHub account. WebSocket wiring and subsequent settings changes also include collaborator contributions; the complete application is team work.",
    decisions: [
      {
        title: "Make repeated writes safe",
        text: "ON CONFLICT updates the existing subscription for a user/endpoint pair, so registering the same device again does not create a duplicate.",
      },
      {
        title: "Keep data scoped to the caller",
        text: "JWT middleware extracts the user identity; settings and subscription handlers use that identity in their database queries.",
      },
      {
        title: "Separate persistence from feedback",
        text: "PostgreSQL stores settings while the user-routed WebSocket hub provides immediate confirmation to connected clients.",
      },
    ],
    testing:
      "The repository includes JWT middleware tests, database pool tests, WebSocket hub tests, and frontend service/component tests. Input checks cover notification times, time zones, day ranges, and required subscription fields.",
    result:
      "Implemented backend endpoints, database migrations, React/TypeScript integration, and an EC2 deployment workflow. Source code and contribution history are linked below.",
    sources: [
      {
        label: "Backend API",
        url: "https://github.com/Puranjay-del-Mishra/ShelfLife/blob/main/backend/cmd/api/main.go",
      },
      {
        label: "Backend contributions",
        url: "https://github.com/Puranjay-del-Mishra/ShelfLife/commits/main/backend/",
      },
      {
        label: "Deployment workflow",
        url: "https://github.com/Puranjay-del-Mishra/ShelfLife/blob/main/.github/workflows/deploy-backend.yml",
      },
    ],
  },
  {
    slug: "device-health",
    number: "02",
    name: "Device Health",
    subtitle: "Predictive maintenance platform",
    category: "Distributed systems / Architecture",
    status: "In development · Architecture documented",
    shortStatus: "In development",
    description:
      "An event-driven telemetry platform design that separates device simulation, durable history, live state, and failure prediction.",
    stack: [
      "C++20",
      "Python",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Docker",
      "FastAPI",
      "Next.js",
    ],
    cardStack: ["C++20", "Python", "Kafka", "PostgreSQL", "Redis"],
    stackLabel: "Planned implementation stack",
    highlights: [
      "Documented telemetry schema, component boundaries, and architecture decisions.",
      "Designed PostgreSQL history and Redis derived-state ownership.",
      "Simulator, ingestion, ML, API, and dashboard implementation remain planned.",
    ],
    repo: "https://github.com/ayushibaidya/Device-Health-Predictive-Maintenance-",
    diagram: {
      label: "Proposed telemetry pipeline · Not yet implemented",
      description:
        "Proposed architecture: a C++ device simulator emits events to Kafka. Telemetry processing validates data and writes PostgreSQL history and Redis live state. Inference, alerting, a FastAPI backend, and a Next.js dashboard are planned downstream components.",
      nodes: ["C++ simulator", "Kafka", "Processing"],
      annotations: [
        "Telemetry events",
        "Telemetry consumer",
        "Planned: inference → alerts → API → dashboard",
      ],
      planned: true,
      branch: "PostgreSQL history · Redis live state",
    },
    problem:
      "Investigating device failures requires both a durable history of telemetry and a timely view of current device state. A useful design must distinguish simulated ground truth, model predictions, and the rules that produce operational alerts.",
    solution:
      "The proposed platform uses a C++20 device simulator, Kafka event transport, and a Python processing layer. PostgreSQL owns historical records; Redis holds derived operational state. Separate inference and alert evaluation components would feed a FastAPI backend and Next.js dashboard.",
    architecture:
      "The documented flow is simulator → Kafka → validation/processing → PostgreSQL and Redis. Validated observations feed inference; an alert evaluator interprets model risk and device conditions. The API composes historical and current views for the dashboard. Every service in this diagram is a design component, not an operational deployment.",
    contributions: [
      "Defined requirements, the telemetry schema, and logical component responsibilities.",
      "Documented architecture decisions for data ownership, asynchronous transport, and simulator ground truth.",
      "Outlined testing, security, and local-first development standards before service implementation.",
    ],
    decisions: [
      {
        title: "Separate durable and derived data",
        text: "PostgreSQL is the proposed system of record. Redis serves reconstructable current state rather than becoming a second source of historical truth.",
      },
      {
        title: "Keep prediction separate from alerting",
        text: "The model supplies a risk signal; a distinct evaluator decides whether that signal warrants an alert. Simulator ground truth remains independent of both.",
      },
      {
        title: "Start locally",
        text: "Docker-based local development is the planned first deployment path. Cloud infrastructure and production deployment are outside the initial phase.",
      },
    ],
    testing:
      "A testing strategy is documented for simulator behavior, schema validation, ingestion, persistence, caching, inference, and integration. Test suites and measured throughput or model performance are not yet implemented or reported.",
    result:
      "The public repository currently contains a README and design documentation, including architecture decision records. No simulator, Kafka consumer, ML pipeline, API, dashboard, or deployment is implemented in the inspected source. The next step is simulator and telemetry-ingestion implementation.",
    sources: [
      {
        label: "Current status",
        url: "https://github.com/ayushibaidya/Device-Health-Predictive-Maintenance-/blob/main/README.md",
      },
      {
        label: "Architecture & responsibilities",
        url: "https://github.com/ayushibaidya/Device-Health-Predictive-Maintenance-/blob/main/docs/architecture.md",
      },
      {
        label: "Testing strategy",
        url: "https://github.com/ayushibaidya/Device-Health-Predictive-Maintenance-/blob/main/docs/testing-strategy.md",
      },
    ],
  },
  {
    slug: "mvc-calendar",
    number: "03",
    name: "MVC Calendar",
    subtitle: "Java scheduling application",
    category: "Object-oriented design / Testing",
    status: "Course project · Paired development",
    shortStatus: "Course project",
    description:
      "A Java calendar with Swing, CLI, and headless workflows built around a shared model and clear controller boundaries.",
    stack: ["Java", "Swing", "MVC", "Gradle", "JUnit"],
    cardStack: ["Java", "Swing", "MVC", "Gradle", "JUnit"],
    highlights: [
      "Shared model boundary across GUI, CLI, and headless modes.",
      "Command objects, recurring-event forms, and explicit edit scopes.",
      "JUnit-based testing and separation of view and controller concerns.",
    ],
    repo: null,
    repoNote:
      "Public source is currently unavailable for the supplied course repository.",
    diagram: {
      label: "Application structure",
      description:
        "Swing views, a command-line interface, and headless input route user actions through controllers into a shared calendar model. Changes are reflected in the views through refresh behavior.",
      nodes: ["GUI / CLI", "Controller", "Calendar model"],
      annotations: [
        "User actions",
        "Command objects",
        "Model changes → view refresh",
      ],
    },
    problem:
      "Supporting desktop interaction and scripted calendar operations can duplicate scheduling logic unless input handling, presentation, and calendar state have clear boundaries.",
    solution:
      "A paired Java coursework project uses Model-View-Controller architecture. Swing callbacks and parsed commands map to model operations through controllers, with shared startup routing for interactive, headless, and GUI execution.",
    architecture:
      "Views handle display and user input. Controllers translate semantic GUI actions and CLI commands into model operations using command objects. The model-facing boundary lets each interface share behavior while view refreshes follow mutations.",
    contributions: [
      "Focused on the View and Controller layers in a paired project.",
      "Built Swing components for the main frame, month grid, selected-day event list, and event dialogs.",
      "Implemented command routing, recurring-series forms, edit scopes, validation messages, and refresh behavior.",
    ],
    collaboration:
      "Contribution scope is retained from the existing portfolio. The course repository is not publicly accessible, so additional model-level capabilities and test results are not independently claimed.",
    decisions: [
      {
        title: "Share behavior across interfaces",
        text: "Controllers connect both Swing actions and CLI commands to a consistent model boundary instead of embedding scheduling rules in each view.",
      },
      {
        title: "Make edits explicit",
        text: "Recurring-series forms and edit scopes make the intended mutation clear before a controller applies it.",
      },
      {
        title: "Keep feedback in the interface",
        text: "Views display validation failures and refresh event lists after model changes, preserving separation of concerns.",
      },
    ],
    testing:
      "The project uses JUnit and Gradle for automated testing. Separating views, controllers, and model operations keeps presentation logic independent of scheduling behavior. Public course source is currently unavailable.",
    result:
      "The existing portfolio documents the Swing, CLI, and headless workflows and my View/Controller contributions. This case study preserves that scope; the course source is available only with appropriate access.",
    sources: [],
  },
  {
    slug: "rtos-motion",
    number: "04",
    name: "RTOS Motion Control",
    subtitle: "Two-axis firmware simulator",
    category: "Systems programming / Reliability",
    status: "In development · Host simulator implemented",
    shortStatus: "Host simulator implemented",
    description:
      "A modular C firmware simulator with two-axis motion, explicit controller states, fault recovery, and host-side validation.",
    stack: ["C", "CMake", "CTest", "FreeRTOS", "Python", "GitHub Actions"],
    cardStack: ["C", "CMake", "CTest", "FreeRTOS", "Python"],
    highlights: [
      "IDLE, MOVING, STOPPED, DONE, and FAULT controller states.",
      "Travel bounds, emergency stop, and explicit fault recovery.",
      "C unit tests, Python smoke tests, and a FreeRTOS POSIX demo.",
    ],
    repo: "https://github.com/ayushibaidya/RTOS-Motion-Firmware-Simulator",
    diagram: {
      label: "Implemented controller state model",
      description:
        "The simulated controller transitions from IDLE to MOVING and DONE. STOP produces STOPPED; emergency stop or an out-of-bounds condition produces FAULT. Clearing the fault enables recovery. No hardware deployment is implied.",
      nodes: ["IDLE", "MOVING", "DONE"],
      annotations: [
        "MOVE command",
        "Target reached",
        "STOP → STOPPED    ·    ESTOP → FAULT",
      ],
    },
    problem:
      "Motion-control logic needs predictable stop, bounds, and recovery behavior. A software simulator allows those rules to be exercised and tested before targeting a physical controller.",
    solution:
      "Modular C components parse commands, update X/Y motion, manage faults, and format telemetry. A host RTOS wrapper supports hardware-free testing, while an optional FreeRTOS POSIX backend exercises real task and scheduler APIs.",
    architecture:
      "Commands enter a task layer with queues, a state mutex, and event flags. Motion, fault, and telemetry modules share explicit state through the RTOS abstraction. The host backend and FreeRTOS POSIX backend expose the same wrapper boundary.",
    contributions: [
      "Developed modular command, motion, fault-handling, and telemetry components for a simulated two-axis stage.",
      "Implemented explicit motion states, travel bounds, emergency-stop handling, and fault recovery.",
      "Added host-side validation and a task-oriented RTOS layer with an optional FreeRTOS POSIX scheduler path.",
    ],
    decisions: [
      {
        title: "Make state transitions inspectable",
        text: "IDLE, MOVING, STOPPED, DONE, and FAULT states make command handling and motion outcomes explicit and testable.",
      },
      {
        title: "Keep a hardware-free regression path",
        text: "The host backend lets parser, motion, fault, and task behavior run through CTest without requiring a microcontroller.",
      },
      {
        title: "Isolate the RTOS boundary",
        text: "A shared wrapper separates application modules from host and FreeRTOS implementations. ARM and hardware integration remain future work.",
      },
    ],
    testing:
      "The repository contains CTest unit suites for the parser, motion, faults, telemetry, RTOS wrapper, and task flow, along with Python smoke tests. GitHub Actions defines host and FreeRTOS build/test paths.",
    result:
      "The host simulator and FreeRTOS POSIX demo are implemented. ARM Cortex-M deployment, QEMU integration, and hardware validation remain future work. An ARM toolchain configuration is present; it is not evidence of a validated hardware deployment.",
    sources: [
      {
        label: "Source & current status",
        url: "https://github.com/ayushibaidya/RTOS-Motion-Firmware-Simulator",
      },
      {
        label: "Motion controller",
        url: "https://github.com/ayushibaidya/RTOS-Motion-Firmware-Simulator/blob/main/firmware/App/motion/motion_controller.c",
      },
      {
        label: "Unit tests",
        url: "https://github.com/ayushibaidya/RTOS-Motion-Firmware-Simulator/tree/main/tests/unit",
      },
    ],
  },
];

export const skillGroups = [
  {
    name: "Languages",
    items: [
      "Java",
      "Python",
      "Go",
      "TypeScript",
      "JavaScript",
      "SQL",
      "C++",
      "C",
    ],
  },
  {
    name: "Backend & Web",
    items: ["REST APIs", "Gin", "React", "Node.js", "JWT", "WebSockets"],
    note: "Planned in Device Health: FastAPI, Next.js",
  },
  {
    name: "Databases & Data Systems",
    items: ["PostgreSQL", "MySQL"],
    note: "Architecture work: Redis, Kafka",
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS",
      "EC2",
      "S3",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Git",
    ],
  },
  {
    name: "Software Engineering & Testing",
    items: [
      "Object-Oriented Programming",
      "MVC",
      "JUnit",
      "CMake",
      "CTest",
      "API Testing",
    ],
  },
];

import { useId } from "react";

export default function ProjectDiagram({ project }) {
  const id = useId();
  const { diagram } = project;
  return (
    <figure
      className={`project-diagram diagram-${project.slug}${diagram.planned ? " diagram-planned" : ""}`}
    >
      <figcaption>
        <span className="diagram-dot" />
        {diagram.label}
      </figcaption>
      <svg
        viewBox="0 0 560 180"
        role="img"
        aria-labelledby={`${id}-title ${id}-desc`}
      >
        <title id={`${id}-title`}>{`${project.name} architecture`}</title>
        <desc id={`${id}-desc`}>{diagram.description}</desc>
        <defs>
          <marker
            id={`${id}-arrow`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
        {[0, 1].map((i) => (
          <g key={i}>
            <path
              className="diagram-line"
              d={`M${158 + i * 180} 75 H${198 + i * 180}`}
              markerEnd={`url(#${id}-arrow)`}
            />
            <text
              className="diagram-annotation"
              x={180 + i * 180}
              y="36"
              textAnchor="middle"
            >
              {diagram.annotations[i]}
            </text>
          </g>
        ))}
        {diagram.nodes.map((node, i) => (
          <g key={node}>
            <rect
              className="diagram-node"
              x={20 + i * 180}
              y="50"
              width="138"
              height="50"
              rx="7"
            />
            <text
              className="diagram-node-label"
              x={89 + i * 180}
              y="80"
              textAnchor="middle"
            >
              {node}
            </text>
          </g>
        ))}
        {project.slug === "device-health" ? (
          <>
            <path
              className="diagram-return"
              d="M449 101v12H280v8"
              fill="none"
            />
            <text
              className="diagram-annotation"
              x="280"
              y="132"
              textAnchor="middle"
            >
              {diagram.branch}
            </text>
          </>
        ) : project.slug === "rtos-motion" ? (
          <path
            className="diagram-return"
            d="M269 101v27m-8-7 8 7 8-7"
            fill="none"
          />
        ) : (
          <path className="diagram-return" d="M449 109v21H89v-21" fill="none" />
        )}
        <text
          className="diagram-annotation"
          x="280"
          y="159"
          textAnchor="middle"
        >
          {diagram.annotations[2]}
        </text>
      </svg>
    </figure>
  );
}

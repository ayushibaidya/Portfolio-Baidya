import { useEffect } from "react";
import { getMetadata } from "../data/metadata.js";
export default function Metadata({ project, notFound }) {
  useEffect(() => {
    const metadata = getMetadata(project, notFound);
    document.title = metadata.title;
    for (const [selector, content] of [
      ['meta[name="description"]', metadata.description],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description],
      ['meta[property="og:url"]', metadata.url],
      ['meta[name="twitter:title"]', metadata.title],
      ['meta[name="twitter:description"]', metadata.description],
    ])
      document.querySelector(selector)?.setAttribute("content", content);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", metadata.url);
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute("content", notFound ? "noindex, follow" : "index, follow");
  }, [project, notFound]);
  return null;
}

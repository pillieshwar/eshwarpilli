import * as React from "react";
import ProjectDetail, { loader } from "./projectDetail";

export { loader };

export default function LiveProjects() {
  return <ProjectDetail live />;
}

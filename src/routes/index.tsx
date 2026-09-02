import { createFileRoute } from "@tanstack/react-router";
import { ArchiveShell } from "@/components/archive-shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ArchiveShell />;
}

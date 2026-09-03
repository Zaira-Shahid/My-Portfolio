import fs from "node:fs";
import path from "node:path";

// Server-only helper: lets a section (e.g. About, Hero) render conditionally
// based on whether an asset like a resume PDF or headshot has actually been
// added to /public, instead of hardcoding an "available" flag that can go
// stale. Drop the file in and it appears automatically.
export function publicFileExists(publicPath: string): boolean {
  const filePath = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  return fs.existsSync(filePath);
}

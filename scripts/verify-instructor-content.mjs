import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const guideDir = join(root, "client/src/content/guides");
const registry = readFileSync(join(root, "client/src/data/instructorContent.ts"), "utf8");
const guideFiles = readdirSync(guideDir).filter((name) => name.endsWith(".md")).sort();
const importedGuides = [...registry.matchAll(/import guide\d+Day\d+ from "@\/content\/guides\/([^?]+)\?raw";/g)].map((match) => match[1]).sort();
const slideCounts = [...registry.matchAll(/slideCount:\s*(\d+)/g)].map((match) => Number(match[1]));

const failures = [];
if (guideFiles.length !== 8) failures.push(`Expected 8 embedded study guides; found ${guideFiles.length}.`);
if (importedGuides.length !== 8) failures.push(`Expected 8 raw guide imports; found ${importedGuides.length}.`);
if (guideFiles.join("|") !== importedGuides.join("|")) failures.push("Embedded guide filenames do not match the raw-import registry.");
if (slideCounts.length !== 8) failures.push(`Expected 8 instructor deck slide counts; found ${slideCounts.length}.`);
for (const count of slideCounts) if (count < 24 || count > 32) failures.push(`Slide count ${count} is outside the required 24–32 range.`);

console.log(JSON.stringify({ guideFiles, importedGuides, slideCounts, compliant: failures.length === 0, failures }, null, 2));
if (failures.length) process.exitCode = 1;

// Worst Superpower — make.fun bounty u-suroto-worst-superpower-461dcdbe
// One line, at most 140 characters: the most useless superpower imaginable.
// The program writes the line to /output/entry.txt and prints it to stdout.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Once a day, I can summon a single raindrop indoors, directly above my own head.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate: /output/entry.txt must hold 1 to 140 characters of UTF-8 text,
// a single line, not only white space. Fail loudly instead of writing junk.
if (
  LINE.length < 1 ||
  LINE.length > 140 ||
  LINE.includes("\n") ||
  LINE.trim().length === 0
) {
  throw new Error(`entry line fails the gate (${LINE.length} characters)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(LINE);

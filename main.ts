// One Line — make.fun bounty entry.
// Writes the single funny line to /output/entry.txt (no trailing newline)
// and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts so the setup earns the twist:
// the speaker orders a second speaker to watch its owner.
const SETUP =
  "My smart speaker heard me say 'I'm fine' in a tone it didn't believe, so it ordered a weighted blanket, ";
const PUNCH = "and a second speaker to watch me.";
const LINE = SETUP + PUNCH;
const LIMIT = 140; // chars, per the bounty brief (gate: 1-140)

function main(): void {
  if (LINE.length < 1 || LINE.length > LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();

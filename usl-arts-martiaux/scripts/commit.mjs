import { execSync, execFileSync } from "node:child_process";
import { createInterface } from "node:readline/promises";

const COMMIT_TYPES = [
  "feat",
  "fix",
  "docs",
  "style",
  "refactor",
  "test",
  "chore",
  "config",
];

function run(command) {
  execSync(command, { stdio: "inherit" });
}

function step1_formatAndLint() {
  console.log("\n> Formatage (prettier)...\n");
  run("npm run format");

  console.log("\n> Lint (eslint)...\n");
  try {
    run("npm run lint -- --max-warnings=0");
  } catch {
    console.error(
      "\nLe lint a échoué (erreurs ou warnings). Corrige le code avant de committer.\n",
    );
    process.exit(1);
  }
}

async function step2_askCommitType(rl) {
  console.log("\nType de commit :");
  COMMIT_TYPES.forEach((type, index) => {
    console.log(`  ${index + 1}) ${type}`);
  });

  const answer = await rl.question(`Ton choix (1-${COMMIT_TYPES.length}) : `);
  const index = Number.parseInt(answer, 10) - 1;

  if (Number.isNaN(index) || index < 0 || index >= COMMIT_TYPES.length) {
    console.error("Choix invalide.");
    process.exit(1);
  }

  return COMMIT_TYPES[index];
}

async function step3_askMessage(rl) {
  const message = await rl.question("Message de commit : ");

  if (!message.trim()) {
    console.error("Le message ne peut pas être vide.");
    process.exit(1);
  }

  return message.trim();
}

function step4_addAndCommit(commitMessage) {
  run("git add -A");

  try {
    // Exit code 0 = aucun changement en attente -> rien a committer.
    execSync("git diff --cached --quiet");
    console.log("\nRien à committer (aucun fichier modifié).\n");
    process.exit(0);
  } catch {
    // Exit code != 0 = il y a des changements indexes, on continue.
  }

  execFileSync("git", ["commit", "-m", commitMessage], { stdio: "inherit" });
  console.log(`\nCommit créé : "${commitMessage}"\n`);
}

async function main() {
  step1_formatAndLint();

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const type = await step2_askCommitType(rl);
  const message = await step3_askMessage(rl);
  rl.close();

  step4_addAndCommit(`${type}: ${message}`);
}

main();

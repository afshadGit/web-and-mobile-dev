import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, resolve } from "node:path";

const root = resolve();
const output = join(root, "public");
const npm = process.platform === "win32" ? "npm.cmd" : "npm";

const staticEntries = [
  "index.html",
  "README.md",
  "Homework Assignments",
  "My Website",
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
];

const apps = [
  "Week 6/22-09-26/my-react-app",
  "Week 6/24-09-26/my-react-app",
  "Week 7/my-react-app-props",
  "Week 7/profile-cards",
  "Week 9/react-bmi-assignment",
];

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

for (const entry of staticEntries) {
  const source = join(root, entry);
  if (existsSync(source)) {
    cpSync(source, join(output, entry), { recursive: true });
  }
}

for (const app of apps) {
  const appPath = join(root, app);
  const base = `/${app.split(/[\\/]/).map(encodeURIComponent).join("/")}/`;

  const commandOptions = {
    cwd: appPath,
    stdio: "inherit",
    shell: process.platform === "win32",
  };

  execFileSync(npm, ["install"], commandOptions);
  execFileSync(npm, ["run", "build", "--", "--base", base], commandOptions);

  cpSync(join(appPath, "dist"), join(output, app), { recursive: true });
}

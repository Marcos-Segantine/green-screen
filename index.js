import fs from "fs";
import { exec } from "child_process";

import { howManyCommits } from "./functions/howManyCommits.js";

const makeChanges = async () => {
  let numCommits = 0;

  await howManyCommits().then((res) => {
    numCommits = res;
  });

  if (!fs.existsSync("message.txt")) {
    fs.writeFileSync("message.txt", "Green Screen");
  }

  for (let count = 0; count < numCommits; count++) {
    fs.truncateSync("message.txt");
    fs.writeFileSync("message.txt", `Green Screen ${count}`);

    await new Promise((resolve) => {
      exec("git add message.txt", () => {
        resolve();
      });
    });

    await new Promise((resolve) => {
      exec("git commit -m 'Green Screen'", () => {
        resolve();
      });
    });

    await new Promise((resolve) => {
      exec("git push origin master", () => {
        resolve();
      });
    });
  }
};

makeChanges();

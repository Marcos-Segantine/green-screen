import fs from "fs";
import { exec } from "child_process";

const makeChanges = async () => {
  if (!fs.existsSync("message.txt")) {
    fs.writeFileSync("message.txt", "Green Screen");
  }

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
};

makeChanges()
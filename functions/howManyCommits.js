import readline from "readline";

export const howManyCommits = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("How many commist you want? \n", (res) => {
      resolve(res);
      
      rl.close();
    });
  });
};

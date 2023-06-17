import getArgs from "minimist";

import Esbuild from "./esbuild.js";

//get type
const getType = () => {
  const args = getArgs(process.argv.slice(2));
  if (args.serve) return "serve";
  return "build";
};

(async () => {
  try {
    const esbuildService = new Esbuild({ type: getType() });
    await esbuildService.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

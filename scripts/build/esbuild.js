import { context, build } from "esbuild";

//Configs
import configs from "./build.config.js";

export default class Esbuild {
  constructor({ type }) {
    this.type = type;
  }

  async start() {
    switch (this.type) {
      case "serve":
        await this._serve();
        break;
      case "build":
        await this._build();
        break;
    }
  }

  async _serve() {
    try {
      let ctx = await context({
        ...configs.esbuildOptions,
        outdir: `servedir/dist`,
      });

      const { host, port } = await ctx.serve({
        servedir: "servedir",
        host: "localhost",
      });

      console.info(`On http://${host}:${port}`);
    } catch (error) {
      throw error;
    }
  }

  async _build() {
    try {
      //Build
      const { errors, warnings, metafile } = await build(
        configs.esbuildOptions
      );

      // ERROR
      if (errors.length) {
        console.table(errors);
        console.error("Build error");
        return;
      }

      // WARNING
      if (warnings.length) {
        console.warn(errors);
        console.error("Build warning");
        return;
      }

      /**SUCCESS */
      console.table(metafile.outputs);
      console.info("Build Done !");
    } catch (error) {
      throw error;
    }
  }
}

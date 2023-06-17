export default {
  esbuildOptions: {
    outdir: "dist",
    entryPoints: ["src/app.js"],

    format: "esm",
    assetNames: "assets/[name]",

    target: ["es2020", "chrome73", "edge79", "firefox63", "safari12"],
    external: ["react"],
    plugins: [],

    bundle: true,
    sourcemap: true,
    splitting: true,
    metafile: true,
    minify: true,
  },
};

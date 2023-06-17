import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const app = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  const host = `http://localhost:${port}`;

  const getCommand = () => {
    const platform = process.platform;
    if (platform === "win32") return "start";
    else if (platform === "linux") return "xdg-open";
    else if (platform === "darwin") return "open";
  };
  exec(`${getCommand()} ${host}`);

  console.log(`Web server started. ${host}`);
});

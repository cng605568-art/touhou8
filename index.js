const { readFile } = require("fs/promises");
const path = require("path");

module.exports = async function handler(req, res) {
  try {
    const html = await readFile(path.join(process.cwd(), "index.html"), "utf8");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send("Unable to serve TH08: " + error.message);
  }
};

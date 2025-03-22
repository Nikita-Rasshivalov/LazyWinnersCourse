const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require('path');
const fs = require('fs').promises;
const prettier = require("prettier");
const App = require('../src/App').default || require('../src/App');
const app = express();
const PORT = process.env.PORT || 3001;

let renderedApp = null;

const renderApp = async () => {
  if (!renderedApp) {
    const indexPath = path.resolve(__dirname, '../../build/index.html');
    const data = await fs.readFile(indexPath, 'utf8');
    const content = ReactDOMServer.renderToString(<App />);

    renderedApp = data.replace('<div id="root"></div>', `<div id="root">${content}</div>`);

    renderedApp = prettier.format(renderedApp, { parser: "html" });
  }
  return renderedApp;
};
app.get('/', async (req, res, next) => {
  try {
    const content = await renderApp();
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.send(content);
  } catch (err) {
    console.error("Ошибка загрузки HTML:", err);
    return next(err);  
  }
});

app.use(express.static(path.join(__dirname, '../../build')));
app.use((err, req, res, next) => {
  res.status(500).send('Ошибка сервера');
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

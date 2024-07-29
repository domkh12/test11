// server.js or ssr.js
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App'; // Adjust the path to your App component
import fs from 'fs';
import path from 'path';

const app = express();

app.use(express.static('build'));

app.get('*', (req, res) => {
  const helmetContext = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  // Read the HTML template
  const indexFile = path.resolve('build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading index.html', err);
      return res.status(500).send('An error occurred');
    }

    // Inject the rendered app and helmet data into the HTML template
    const html = data
      .replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`)
      .replace('</head>', `${helmet.title.toString()}${helmet.priority.toString()}${helmet.meta.toString()}${helmet.link.toString()}${helmet.script.toString()}</head>`);

    return res.send(html);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

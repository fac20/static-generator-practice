exports.render = (data) => {
  return /*html*/ `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>${data.title}</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/about'>About</a></li> 
        </ul>
      </nav>
    </header>
    <main>
      ${data.content}
    </main>
    <footer>
    </footer>
    <script src="scripts.js"></script>
  </body>
  </html>`;
};

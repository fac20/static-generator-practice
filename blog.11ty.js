exports.data = {
  layout: "template",
  title: "Blog",
};

exports.render = (data) => {
  const posts = data.collections.blog;
  let blogsHTML = "";

  posts.forEach((post) => {
    blogsHTML += /*html*/ `
    <li>
        <h2>${post.data.title}</h2>
        <p>${post.template.frontMatter.content}</p>
    </li>`;
  });

  console.log("**blogsHTML**:", blogsHTML);

  return /*html*/ `
        <h1>Blog</h1>
        <ul>
            ${blogsHTML}
        </ul>
    `;
};

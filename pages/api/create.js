import fs from 'fs';

export default function handler(req, res) {
    if(req.method !== "POST") return;
    const { title, body, tags, password } = req.body;
    if(!title||!body||!password) return res.status(200).json({ error: "Required parameters are missing" });
    if(password !== process.env.PASS) return res.status(401).json({ error: "Unauthorized" });
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} | Fletify</title>
        <meta name="keywords" content="${tags}">
        <meta name="description" content="Discover this bloh on blog.fletify.cf">
        <meta name="og:title" content="${title} | Fletify Blog">
        <meta name="og:description" content="Discover this blog on blog.fletify.cf">
        <meta name="og:site_name" content="blog.fletify.cf">
        <meta name="og:image" content="https://media.discordapp.net/attachments/972539143794077696/993904710933303367/20220705_211156.png?width=498&height=498">
        <meta name="image" content="https://media.discordapp.net/attachments/972539143794077696/993904710933303367/20220705_211156.png?width=498&height=498">
        <meta name="og:theme-color" content="#7289da">
        <meta name="theme-color" content="#7289da">
        <meta name="main-color" content="#7289da">
        <link rel="shortcut icon" href="https://media.discordapp.net/attachments/972539143794077696/993904710933303367/20220705_211156.png?width=498&height=498" type="image/x-icon">
        <link rel="stylesheet" href="/styles/blog.css">
    </head>
    <body>
        <main>
           <div class="center">
              <h1>${title}</h1>
              <section>
                 <hr>
                 ${body}
                 <hr>
                 Published: ${new Date().toUTCString()}
                 <hr>
              </section>
           </div>
        </main>
    </body>
    </html>`
    fs.appendFile(`./public/blog/${title}.html`, html, function(err) {
        if(err) return res.status(500).json({ error: "Internal Server Error" });
        else return res.redirect(`/blog/${title}.html`);
    });
  }
  
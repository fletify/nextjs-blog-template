import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin | Blog - Fletify</title>
        <meta name="keywords" content="admin, fletify, blog"/>
        <meta name="description" content=""/>
        <meta name="og:title" content=""/>
        <meta name="og:description" content=""/>
        <meta name="og:site_name" content=""/>
        <meta name="og:image" content=""/>
        <meta name="image" content=""/>
        <meta name="og:theme-color" content="#7289da"/>
        <meta name="theme-color" content="#7289da"/>
        <meta name="main-color" content="#7289da"/>
        <link rel="shortcut icon" href="https://media.discordapp.net/attachments/972539143794077696/993904710933303367/20220705_211156.png?width=498&height=498" type="image/x-icon"/>
      </Head>
      <main>
           <div className="center">
              <h1>Create a New Blog!</h1>
              <section>
                 <hr/>
                    <form action="/api/create" method="post">
                      <input type="text" placeholder="Blog Title" name="title" maxLength="100" required />
                      <input type="text" placeholder="Blog Tags (comma separated)" name="tags" maxLength="50" />
                      <textarea placeholder="Blog Description. You can use HTML." name="body" required></textarea>
                      <input type="password" placeholder="Authentication Password" name="password" required />
                      <button type="submit">Create Blog!</button>
                    </form>
                 <hr/>
              </section>
           </div>
      </main>
    </>
  )
}

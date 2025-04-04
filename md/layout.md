# Why layout.tsx is important:
It wraps every page of your website

It's where the HTML <head> section lives

It’s the best place to set:

```
<title>

<meta name="description">

<meta name="keywords">

<meta property="og:*">

<link rel="canonical">

and more
```


✅ Example Structure of layout.tsx

```
export const metadata: Metadata = {
  title: "Boss | Full-Stack Web Developer",
  description: "Explore the portfolio of Sahasawat Ruenkaew (Boss) based in Chiang Mai.",
  ...
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Boss Sahasawat" />
        <meta name="keywords" content="..." />
        <link rel="canonical" href="https://bossbsynth.com" />
        ...
      </head>
      <body>{children}</body>
    </html>
  );
}
```

✅ By putting these tags here, every page of your site will share the same SEO metadata — perfect for a portfolio, landing page, or single-page app.
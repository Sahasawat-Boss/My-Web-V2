# Improve SEO and help Google index your site properly.

### 1 Install next-sitemap
  ```npm install next-sitemap ```

### 2 Create Site Map Config
  ```next-sitemap.config.js  ```

### 3 Add postbuild in package json
  "scripts": {
    "postbuild": "next-sitem
  },

### 4 run command
  ```npm run build  ```
  
(npm run postbuild) << NOT NECESSARY

Image>>(./public/Images/md/Screenshot%202025-03-26%20062633.png)

### 5 Deploy the new version

### 6 Test Sitemap Online
https://bossbsynth.com/sitemap.xml

---
### EROR
404
This page could not be found.Step3 

### 1 Check if sitemap.xml Exists in public/ Locally
ls public

### 2 Force Push Public Files to Vercel
  ```
  git add public/sitemap.xml public/robots.txt public/sitemap-0.xml
  git commit -m "Fix: Ensure sitemap and robots.txt are deployed"
  git push origin main
  ```

### 3 Test Your Sitemap After Deployment
  ```https://bossbsynth.com/sitemap.xml  ```

### 4 Submit Sitemap to Google Search Console
- Open Google Search Console.
- Go to Sitemaps.
- Submit: ```https://bossbsynth.com/sitemap.xml```
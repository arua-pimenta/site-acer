---
name: "Netlify Deployment & Operations Specialist"
description: "Instructions and templates for Netlify forms, redirects, headers, deploy configurations, and Edge Functions."
---

# Netlify Deployment & Operations Specialist

This skill defines the hosting, continuous integration, forms collection, and traffic routing protocols for the ACER website on the Netlify platform.

## 1. Redirects & Routing (`_redirects`)
For React Single Page Applications (SPAs) using client-side routing, Netlify needs a fallback rule so that refreshing the page on subpaths (like `/transparencia`) doesn't result in a 404 error.

Create a `_redirects` file under the `/public` folder (or verify it exists):
```text
/*    /index.html   200
```
This forces all requests to resolve to `index.html` allowing React Router to handle page paths.

## 2. Forms Integration (Netlify Forms)
For contact and subscription forms, use Netlify's built-in form detection without needing a separate backend server:

```html
<form 
  name="contato-acer" 
  method="POST" 
  data-netlify="true" 
  action="/sucesso"
>
  <input type="hidden" name="form-name" value="contato-acer" />
  
  <div>
    <label htmlFor="name">Nome:</label>
    <input type="text" name="name" id="name" required />
  </div>
  
  <div>
    <label htmlFor="email">E-mail:</label>
    <input type="email" name="email" id="email" required />
  </div>
  
  <button type="submit">Enviar Mensagem</button>
</form>
```

## 3. Custom Headers & Security (`netlify.toml`)
To secure the site and improve SEO/Performance scores:
Add a `netlify.toml` file in the root of the project to set security headers:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "no-referrer-when-downgrade"
    Content-Security-Policy = "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;"
```

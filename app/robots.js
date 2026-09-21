export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portfolio-milo.vercel.app/sitemap.xml",
    host: "https://portfolio-milo.vercel.app",
  };
}

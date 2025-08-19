
export const GET = async () => {
    const baseUrl = 'https://app.icbestlink.com/';
  
    // Define your static pages here
    const pages = [
      { url: '/', lastmod: '2025-08-09' },
      { url: '/about', lastmod: '2025-08-09' },
      { url: '/contact-us', lastmod: '2025-08-09' },
      { url: '/product', lastmod: '2025-08-09' },
      { url: '/services', lastmod: '2025-08-09' },
    ];
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${new URL(page.url, baseUrl)}</loc>
      <lastmod>${page.lastmod}</lastmod>
    </url>`
    )
    .join('')}
  </urlset>`;
  
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  };
  
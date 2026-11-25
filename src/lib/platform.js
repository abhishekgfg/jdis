/**
 * Reads from the counsellor platform for THIS website's organisation (blog posts, page SEO, tracking ids, AI assistant).
 * Defaults are this company's own setup; set VITE_LEADS_API_URL / VITE_LEADS_ORG_SLUG only to point somewhere else (e.g. staging).
 * Every read returns null on failure, so callers fall back to the built-in content and the site never breaks.
 */
export const PLATFORM_API = (import.meta.env.VITE_LEADS_API_URL || 'https://apicounsellor.jdinfotechsolutions.in').replace(/\/+$/, '')
export const PLATFORM_SLUG = import.meta.env.VITE_LEADS_ORG_SLUG || 'jd-infotech'

const cache = new Map()

/** GET <api>/public/<path> with {slug} replaced by the organisation. Cached per page load. */
export function platformGet(path) {
  const url = `${PLATFORM_API}/public${path.replace('{slug}', encodeURIComponent(PLATFORM_SLUG))}`
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url, { signal: AbortSignal.timeout ? AbortSignal.timeout(8000) : undefined })
        .then((r) => (r.ok ? r.json() : null))
        .catch(() => null),
    )
  }
  return cache.get(url)
}

export const getSiteSettings = () => platformGet('/content/{slug}/site')
export const getApiPosts = async (limit = 50) => (await platformGet(`/content/{slug}/posts?limit=${limit}`))?.items ?? []
export const getApiPost = (slug) => platformGet(`/content/{slug}/posts/${encodeURIComponent(slug)}`)

/** Removes scripts, inline handlers and javascript: links from admin-written HTML before it is shown. */
export function safeHtml(html) {
  try {
    const doc = new DOMParser().parseFromString(String(html || ''), 'text/html')
    doc.querySelectorAll('script,iframe,object,embed,style,link,meta').forEach((n) => n.remove())
    doc.body.querySelectorAll('*').forEach((el) => {
      for (const a of [...el.attributes]) {
        if (/^on/i.test(a.name) || (/^(href|src)$/i.test(a.name) && /^\s*javascript:/i.test(a.value))) el.removeAttribute(a.name)
      }
    })
    return doc.body.innerHTML
  } catch {
    return ''
  }
}

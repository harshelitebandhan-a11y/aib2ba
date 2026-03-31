import { useEffect } from 'react'

export function useSEO({ title, description, canonical, og = {} }) {
  useEffect(() => {
    document.title = title
    const set = (sel, attr, val) => {
      let el = document.querySelector(sel)
      if (!el) { el = document.createElement(sel.includes('[name') ? 'meta' : sel.includes('[rel') ? 'link' : 'meta'); document.head.appendChild(el) }
      el.setAttribute(attr, val)
    }
    set('meta[name="description"]', 'content', description)
    const href = canonical || `https://aib2bautomation.com${window.location.pathname}`
    let can = document.querySelector('link[rel="canonical"]')
    if (!can) { can = document.createElement('link'); can.rel = 'canonical'; document.head.appendChild(can) }
    can.href = href
    const og_tags = { 'og:title': og.title||title, 'og:description': og.description||description, 'og:url': href, 'og:image': og.image||'https://aib2bautomation.com/og.jpg', 'twitter:title': og.title||title, 'twitter:description': og.description||description }
    Object.entries(og_tags).forEach(([prop, content]) => {
      const isTwitter = prop.startsWith('twitter:')
      let tag = document.querySelector(`meta[${isTwitter?'name':'property'}="${prop}"]`)
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute(isTwitter?'name':'property', prop); document.head.appendChild(tag) }
      tag.content = content
    })
  }, [title, description, canonical])
}

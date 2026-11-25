import React, { useEffect, useRef, useState } from 'react'
import { Bot, RotateCcw, Send, ShieldCheck, Sparkles, X } from 'lucide-react'
import { PLATFORM_API, PLATFORM_SLUG } from '../lib/platform'

/**
 * AI assistant for the website, answered by the counsellor platform's bot for the "jd-infotech" organisation.
 * Its name, greeting and knowledge are set in the admin. It stays hidden until the organisation has switched the assistant on,
 * so it is safe to ship before that: nothing shows and nothing breaks.
 */
const TOKEN_KEY = 'jd_bot_token'
const QUICK_PROMPTS = ['Website development cost', 'Mobile app development', 'Our services', 'Book a free consultation']
const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
const base = `${PLATFORM_API}/public/${encodeURIComponent(PLATFORM_SLUG)}/bot`

export default function AiChatWidget() {
  const [config, setConfig] = useState(null)
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const token = useRef(null)
  const endRef = useRef(null)

  useEffect(() => {
    try {
      token.current = localStorage.getItem(TOKEN_KEY)
    } catch {
      /* storage blocked: the chat still works, it just starts fresh */
    }
    fetch(`${base}/config`)
      .then((r) => (r.ok ? r.json() : null))
      .then((cfg) => {
        if (cfg && cfg.greeting) {
          setConfig(cfg)
          setMessages([{ role: 'assistant', text: cfg.greeting, time: now() }])
        }
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const add = (role, text) => setMessages((m) => [...m, { role, text, time: now() }])

  async function send(text) {
    const msg = String(text || '').trim()
    if (!msg || loading) return
    add('user', msg)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch(`${base}/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, visitorToken: token.current || undefined }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.visitorToken) {
        token.current = data.visitorToken
        try {
          localStorage.setItem(TOKEN_KEY, data.visitorToken)
        } catch {
          /* ignore */
        }
      }
      add('assistant', data.reply || 'Thanks for reaching out! Our team has been notified and will get back to you shortly.')
    } catch {
      add('assistant', 'Our assistant is offline right now. Please share your name and phone number on the contact page and our team will call you back.')
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    token.current = null
    try {
      localStorage.removeItem(TOKEN_KEY)
    } catch {
      /* ignore */
    }
    setMessages([{ role: 'assistant', text: config?.greeting || 'Hello! How can I help you today?', time: now() }])
  }

  if (!config) return null

  return (
    <>
      {open && <div className="fixed inset-0 z-[60] bg-slate-900/50 sm:hidden" onClick={() => setOpen(false)} aria-hidden="true" />}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Open ${config.name || 'AI assistant'}`}
        className="fixed bottom-5 left-4 z-40 flex items-center gap-2 rounded-full bg-[#061326] px-4 py-3 text-white shadow-xl ring-2 ring-white/20 transition hover:scale-105 active:scale-95 sm:left-6"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <Bot size={19} />
          <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-emerald-400 ring-2 ring-[#061326]" />
        </span>
        <span className="text-xs font-extrabold tracking-wider">JD-AI</span>
      </button>

      {open && (
        <div className="fixed inset-x-3 bottom-3 z-[70] flex h-[520px] max-h-[85vh] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:inset-x-auto sm:bottom-24 sm:left-6 sm:w-[390px]">
          <div className="shrink-0 bg-[#061326] px-4 py-3.5 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/20 bg-white/15">
                  <Bot size={19} />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">{config.name || 'JD Infotech Assistant'}</p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-sky-200">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Online 24/7
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button type="button" onClick={reset} title="Reset conversation" aria-label="Reset chat" className="rounded-xl p-1.5 text-white/80 transition hover:bg-white/15 hover:text-white">
                  <RotateCcw size={15} />
                </button>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="rounded-xl p-1.5 text-white/80 transition hover:bg-white/15 hover:text-white">
                  <X size={18} />
                </button>
              </div>
            </div>
            {config.consentText && (
              <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-black/20 px-2 py-0.5 text-[10px] text-sky-100/90">
                <ShieldCheck size={12} className="shrink-0 text-emerald-300" />
                <span className="truncate">{config.consentText}</span>
              </div>
            )}
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50/70 p-3.5 text-xs">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[12px] leading-relaxed shadow-sm ${
                      m.role === 'user' ? 'rounded-br-sm bg-[#0a96d0] text-white' : 'rounded-bl-sm border border-slate-200 bg-white text-slate-800'
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="px-1 pt-0.5 font-mono text-[9px] text-slate-400">{m.time}</span>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-slate-200 bg-white px-3.5 py-2 text-[11px] text-slate-500 shadow-sm">
                  <Sparkles size={13} className="animate-spin text-[#0a96d0]" />
                  <span>Typing…</span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="flex shrink-0 gap-1.5 overflow-x-auto border-t border-slate-100 bg-white px-2.5 py-1.5">
            {QUICK_PROMPTS.map((p) => (
              <button
                key={p}
                type="button"
                disabled={loading}
                onClick={() => send(p)}
                className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition hover:border-[#0a96d0] hover:text-[#0a96d0]"
              >
                {p}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex shrink-0 items-center gap-2 border-t border-slate-200 bg-white p-2.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about websites, apps, pricing…"
              disabled={loading}
              maxLength={1000}
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0a96d0] focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#0a96d0] text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

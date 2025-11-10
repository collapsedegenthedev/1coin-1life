import { useRef } from "react";
import HeroArt from "./assets/1coin-1comm-1life-ver2.png";

function App() {
  const inputRef = useRef(null);
  const smartContractAddress = "0x1234567890123456789012345678901234567890";

  const navigation = [
    { label: "Meme Mechanics", href: "#mechanics" },
    { label: "Smart Contract", href: "#join" },
    {
      label: "Buy the token ",
      href: "https://pump.fun/",
      target: "_blank",
      variant: "button",
    },
  ];

  const mechanics = [
    {
      tag: "No Promises",
      heading: "Utility? Bro, it’s a meme.",
      body: "We offer zero guarantees except laughs, vibes, and maybe a legendary screenshot. DYOR or YOLO—your call.",
    },
    {
      tag: "No Roadmap",
      heading: "Just vibes, daily chaos.",
      body: "Wake up, post a meme, touch grass, swap a coin, celebrate tiny Ws. Repeat until the next inside joke lands.",
    },
    {
      tag: "Enjoy the Day",
      heading: "GM, GN, keep the timeline entertained.",
      body: "Share the coin, raid the comments, hydrate, and let the community improvise. The plan is there is no plan.",
    },
  ];

  return (
    <div className="min-h-screen bg-coin-dark text-coin-light">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-coin-aurora opacity-90" />
        <div className="relative z-10">
          <header className="border-b border-white/10">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
              <a
                href="#top"
                className="font-display text-2xl font-semibold tracking-tight text-coin-gold"
              >
                1 coin 1 comm 1 narrative 1 life
              </a>
              <div className="hidden items-center gap-6 text-sm md:flex">
                {navigation.map((item) =>
                  item.variant === "button" ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.target}
                      rel={item.rel}
                      className="rounded-full border border-coin-gold/40 px-5 py-2 text-coin-gold transition hover:border-coin-gold hover:bg-coin-gold/15"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-slate-200 transition hover:text-coin-gold"
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </nav>
          </header>

          <main id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-12">
            <section className="relative overflow-hidden rounded-4xl border border-white/15 bg-white/[0.04] px-6 py-14 sm:px-10">
              <div className="absolute inset-y-0 right-0 hidden w-80 translate-x-1/3 rounded-full bg-coin-gold/20 blur-3xl sm:block" />
              <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="max-w-2xl space-y-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-coin-gold/40 bg-black/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-coin-gold">
                    11/11 Narrative Drop
                  </span>
                  <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
                    1 coin 1 comm 1 narrative 1 life
                  </h1>
                  <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                    11/11 - Day to change your life narrative with 1 coin for
                    the community
                  </p>
                </div>
                <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-full">
                  <div className="absolute inset-0 -m-6 rounded-4xl bg-coin-gold/15 blur-3xl" />
                  <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-black/60 p-4 shadow-coin-card">
                    <img
                      src={HeroArt}
                      alt="A visual collage representing 1 coin, 1 community, and 1 life"
                      className="h-full w-full max-h-[420px] rounded-3xl object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="mechanics" className="mt-24">
              <div className="flex flex-col gap-6 text-center">
                <p className="font-display text-xs uppercase tracking-[0.35em] text-coin-gold">
                  Meme Mechanics
                </p>
                <h2 className="font-display text-3xl text-white sm:text-4xl">
                  No promise. No roadmap. Just enjoy the day.
                </h2>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {mechanics.map((item) => (
                  <div
                    key={item.tag}
                    className="rounded-3xl border border-white/10 bg-black/45 p-7 transition hover:border-coin-gold/40 hover:-translate-y-1"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-coin-gold">
                      {item.tag}
                    </span>
                    <h3 className="mt-4 font-display text-xl text-white">
                      {item.heading}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="join" className="mt-24">
              <div className="relative overflow-hidden rounded-4xl border border-coin-gold/30 bg-gradient-to-br from-coin-gold/12 via-transparent to-transparent px-8 py-12">
                <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-coin-gold/40 blur-2xl" />
                <div className="relative space-y-6">
                  <p className="font-display text-xs uppercase tracking-[0.35em] text-coin-gold">
                    Join the Movement
                  </p>
                  <h2 className="font-display text-3xl text-white sm:text-4xl">
                    Smart Contract Address
                  </h2>
                  <form className="flex flex-col gap-4 text-sm sm:flex-row">
                    <input
                      type="text"
                      value={smartContractAddress}
                      readOnly
                      ref={inputRef}
                      className="h-12 w-full rounded-full border border-white/20 bg-black/50 px-5 text-white placeholder:text-slate-500 focus:border-coin-gold focus:outline-none focus:ring-2 focus:ring-coin-gold/40"
                    />
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        if (inputRef.current) {
                          navigator.clipboard.writeText(
                            inputRef.current.value ?? ""
                          );
                        }
                      }}
                      className="flex h-12 items-center justify-center rounded-full bg-coin-gold px-6 text-coin-dark transition hover:-translate-y-0.5 hover:shadow-coin-glow"
                      aria-label="Copy contract address"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M8.25 3A2.25 2.25 0 0 0 6 5.25v9A2.25 2.25 0 0 0 8.25 16.5h7.5A2.25 2.25 0 0 0 18 14.25v-9A2.25 2.25 0 0 0 15.75 3h-7.5ZM7.5 5.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-9Z" />
                        <path d="M4.5 7.5A2.25 2.25 0 0 0 2.25 9.75v9A2.25 2.25 0 0 0 4.5 21h7.5A2.25 2.25 0 0 0 14.25 18.75V18h-1.5v.75a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75H5.25v-1.5H4.5Z" />
                      </svg>
                    </button>
                    <a
                      href="https://pump.fun"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 items-center justify-center rounded-full border border-white/20 bg-black/60 px-6 text-white transition hover:border-coin-gold hover:text-coin-gold"
                      aria-label="View token on Pump.fun (opens in new tab)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M7.5 7.5h9v9" />
                        <path d="M16.5 7.5 7.5 16.5" />
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2.25"
                          ry="2.25"
                        />
                      </svg>
                    </a>
                  </form>
                </div>
              </div>
            </section>
          </main>

          <footer className="border-t border-white/10 bg-black/40">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <p className="font-display text-lg text-coin-gold">
                1 Coin 1 Community 1 Narrative 1 Life
              </p>
              <p>
                © {new Date().getFullYear()} 1 Coin 1 Community 1 Narrative 1
                Life. All stories reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

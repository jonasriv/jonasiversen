import Image from "next/image";

const projects = [
  {
    name: "create.no",
    url: "https://create.no",
    image: "/images/create.png",
    description:
      "Komplett skolewebsite med søkerportal, lærer-portal og elevportal — inkludert chatbot og søke-app.",
    tags: ["Next.js", "Supabase", "KI", "MongoDB"],
  },
  {
    name: "kulturradar.no",
    url: "https://kulturradar.no",
    image: "/images/kulturradar.png",
    description:
      "Oversikt over kulturarrangementer i Innlandet. Aggregerer og presenterer events fra hele regionen.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Postgres", "Supabase"],
  },
  {
    name: "joskaansar.com",
    url: "https://joskaansar.com",
    image: "/images/joskaansar.png",
    description: "Nettside for musiker og psykolog Jo Skaansar.",
    tags: ["Next.js", "Design", "Tailwind"],
  },
];

const services = [
  {
    title: "Fullstack-utvikling",
    description:
      "Komplette webapplikasjoner fra database til grensesnitt — Next.js, Node, Supabase og Postgres.",
  },
  {
    title: "KI-integrasjon",
    description:
      "Chatboter, søk og smarte funksjoner drevet av store språkmodeller — integrert der det faktisk gir verdi.",
  },
  {
    title: "Design",
    description:
      "Rent, funksjonelt design som ser profesjonelt ut uten å overvelde. Ingen maler.",
  },
  {
    title: "Hosting & drift",
    description:
      "Komplett leveranse: domene, e-post, hosting, SSL og løpende web-drift så du slipper å tenke på det.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      {/* Hero */}
      <section className="mb-20">
        <div className="flex flex-row items-start justify-between bg-slate-900 p-0 rounded-sm overflow-hidden mb-4">
          <div className="flex items-center gap-6 ">
            <Image
              src="/images/jonasportrait.webp"
              alt="Jonas Iversen"
              width={100}
              height={100}
              className="rounded-none object-contain shrink-0"
              priority
            />
            <div className="flex flex-col justify-start items-start w-full">
              <h2 className="w-full text-[32px] font-semibold text-zinc-50 leading-none mb-4!">
                Jonas Risløw Iversen
              </h2>
              <p className="text-zinc-400 text-sm leading-0 w-full">
                Lillehammer &middot; Fullstack-utvikler
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg text-zinc-300 leading-relaxed mb-4">
          Jeg bygger nettsider og webapplikasjoner — fra enkle presentasjonssider
          til komplette plattformer med pålogging, databaser og KI-funksjoner.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Jobber særlig mye innen <span className="text-zinc-200">kultur og skole</span>,
          og kjenner godt til behovene i de sektorene. Bakgrunn som lærer i mange
          år og master i filosofi.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          Leverer alt i én pakke: utvikling, design, hosting, e-post og løpende
          drift — så du slipper å forholde deg til mange leverandører.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:jonas@jonasiversen.no"
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            Ta kontakt
          </a>
          <a
            href="https://github.com/jonasriv"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="prosjekter" className="mb-20">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
          Noen Prosjekter
        </h2>
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden transition-colors hover:border-zinc-600"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {p.name}
                  </span>
                  <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors text-sm">
                    ↗
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-800 border border-zinc-700 px-3 py-0.5 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mb-20">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
          Hva jeg leverer
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <h3 className="font-medium text-zinc-100 mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
          Kontakt
        </h2>
        <p className="text-zinc-400 leading-relaxed mb-5">
          Har du noe du vil prate om — stort eller lite? Send meg en e-post.
        </p>
        <a
          href="mailto:jonas@jonasiversen.no"
          className="text-zinc-200 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-400"
        >
          jonas@jonasiversen.no
        </a>
      </section>

      <footer className="mt-20 border-t border-zinc-800 pt-8 text-sm text-zinc-600">
        © {new Date().getFullYear()}&nbsp;Jonas Iversen &middot; Lillehammer
      </footer>
    </main>
  );
}

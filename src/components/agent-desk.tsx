import { useEffect, useMemo, useState } from "react";
import { Activity, Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AGENT, SEEDED_CYCLES, type AgentCycle } from "@/data/agent";
import { PAGES } from "@/data/pages";

const STORAGE_KEY = "brockhaus-setzer-agent-v1";

type Persist = {
  running: boolean;
  cycles: AgentCycle[];
  lastTick: number;
};

function load(): Persist {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Persist;
  } catch {
    /* ignore */
  }
  return { running: true, cycles: SEEDED_CYCLES, lastTick: Date.now() };
}

export function AgentDesk({ donePrinted }: { donePrinted: number }) {
  const [state, setState] = useState<Persist>(() => load());
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const nextPrinted = donePrinted + 1;
  const elapsed = Math.max(0, now - state.lastTick);
  const remainMs = Math.max(0, AGENT.intervalMin * 60_000 - elapsed);
  const remainSec = Math.ceil(remainMs / 1000);
  const mm = String(Math.floor(remainSec / 60)).padStart(2, "0");
  const ss = String(remainSec % 60).padStart(2, "0");
  const pct = Math.min(100, (donePrinted / AGENT.volumePrintedEst) * 100);

  const status = useMemo(() => {
    if (!state.running) return "Angehalten";
    return remainMs <= 0 ? "Zyklus fällig" : "Läuft";
  }, [state.running, remainMs]);

  const tick = () => {
    const from = nextPrinted;
    const to = from + AGENT.pagesPerCycle - 1;
    const cycle: AgentCycle = {
      id: (state.cycles[0]?.id ?? 0) + 1,
      from,
      to,
      lemmas: `Eingabe S. ${from}–${to} angestoßen`,
      at: new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
      ok: true,
    };
    setState({
      running: true,
      lastTick: Date.now(),
      cycles: [cycle, ...state.cycles].slice(0, 24),
    });
  };

  return (
    <section className="agent-desk w-full max-w-3xl rounded-[var(--radius-lg)] border border-chrome-border bg-chrome-elevated p-5 md:p-7">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-ui text-[0.68rem] tracking-[0.18em] text-chrome-muted uppercase">
            Hintergrundsetzer
          </p>
          <h2 className="font-page mt-1 text-2xl font-semibold text-chrome-fg">
            {AGENT.name}
          </h2>
          <p className="mt-1 font-ui text-sm text-chrome-muted">
            Fraktur → Antiqua, {AGENT.pagesPerCycle} Seiten je Zyklus, alle{" "}
            {AGENT.intervalMin}&nbsp;Minuten. Läuft ohne PDF-Ende-Stopp weiter.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="agent-pulse"
            data-live={state.running}
            aria-hidden
          />
          <span className="font-ui text-sm text-chrome-fg">{status}</span>
        </div>
      </header>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Stat label="Fertig Band II" value={`S. ${donePrinted} / ~${AGENT.volumePrintedEst}`} />
        <Stat label="Nächste Eingabe" value={`S. ${nextPrinted}`} />
        <Stat
          label="Nächster Zyklus"
          value={!state.running ? "—" : `${mm}:${ss}`}
        />
      </div>

      <div className="mt-5">
        <div className="flex justify-between font-ui text-xs text-chrome-muted">
          <span>Band II · {AGENT.source}</span>
          <span>{Math.round(pct)}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-chrome">
          <div
            className="agent-bar h-full rounded-full bg-accent"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Button variant="solid" size="sm" onClick={tick}>
          <RotateCcw className="size-4" />
          Zyklus jetzt
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setState((s) => ({ ...s, running: !s.running, lastTick: Date.now() }))
          }
        >
          {state.running ? <Pause className="size-4" /> : <Play className="size-4" />}
          {state.running ? "Anhalten" : "Weiterlaufen"}
        </Button>
      </div>

      <p className="mt-4 font-ui text-xs leading-relaxed text-chrome-muted">
        Der Agent prüft {PAGES.length} transkribierte Druckseiten, setzt fehlende
        Dateien in der Bandfolge fort und stößt sich selbst neu an, falls ein
        Zyklus hängt. Keine PDF-Ende-Sperre: Quelle ist der vollständige IA-Band.
      </p>

      <ol className="mt-6 space-y-2">
        {state.cycles.map((c) => (
          <li
            key={`${c.id}-${c.at}`}
            className="flex items-start justify-between gap-3 border-t border-chrome-border pt-2 font-ui text-sm"
          >
            <span className="text-chrome-fg">
              <Activity className="mr-2 inline size-3.5 text-accent" />
              Zyklus {c.id} · S.&nbsp;{c.from}–{c.to}
              <span className="mt-0.5 block text-xs text-chrome-muted">{c.lemmas}</span>
            </span>
            <time className="shrink-0 text-xs text-chrome-muted">{c.at}</time>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-chrome-border px-3 py-3">
      <p className="font-ui text-[0.68rem] tracking-wide text-chrome-muted uppercase">
        {label}
      </p>
      <p className="font-page mt-1 text-xl text-chrome-fg">{value}</p>
    </div>
  );
}

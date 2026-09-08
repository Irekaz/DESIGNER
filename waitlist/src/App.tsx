import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim().toLowerCase();

    if (!isValidEmail(trimmed)) {
      setStatus("error");
      setMessage("Enter a valid email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT as string | undefined;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: trimmed,
            source: "designer-waitlist",
            drop: "01",
          }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }
      } else {
        const existing = JSON.parse(
          localStorage.getItem("designer-waitlist") ?? "[]",
        ) as string[];
        if (!existing.includes(trimmed)) {
          existing.push(trimmed);
          localStorage.setItem("designer-waitlist", JSON.stringify(existing));
        }
        await new Promise((resolve) => setTimeout(resolve, 450));
      }

      setStatus("success");
      setMessage("You're on the list. Drop 01 opens to waitlist first.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true">
        <div className="wash wash-a" />
        <div className="wash wash-b" />
        <div className="band band-1" />
        <div className="band band-2" />
        <div className="grain" />
      </div>

      <header className="top">
        <p className="drop-mark">Drop 01 — Autumn Loop</p>
      </header>

      <main className="hero">
        <h1 className="brand">DESIGNER</h1>
        <p className="headline">Built for the cool season.</p>
        <p className="support">
          Softshell layers for gravel and shoulder-road rides — limited drops, not always available.
        </p>

        <form className="waitlist" onSubmit={onSubmit} noValidate>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <div className="field">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="Email for early access"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status === "error") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              disabled={status === "loading" || status === "success"}
              required
            />
            <button type="submit" disabled={status === "loading" || status === "success"}>
              {status === "loading"
                ? "Joining…"
                : status === "success"
                  ? "Joined"
                  : "Join waitlist"}
            </button>
          </div>
          <p
            className={`status ${status === "error" ? "is-error" : ""} ${status === "success" ? "is-success" : ""}`}
            role="status"
            aria-live="polite"
          >
            {message || "No restocks. When it’s gone, it’s gone."}
          </p>
        </form>
      </main>

      <footer className="foot">
        <span>Made for the ride — and after.</span>
        <span className="dot" aria-hidden="true" />
        <span>Norway · Portugal · designer.bike</span>
      </footer>
    </div>
  );
}

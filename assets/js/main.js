"use strict";

/* ---------- Sprache ----------
   Deutscher Text steht im HTML, die Übersetzung in data-en.
   Beim Laden wird der deutsche Text gemerkt, damit er nicht doppelt gepflegt wird. */

const META = {
    de: {
        title: "Younesse El Akkaoui | Bewerber Ausbildung Fachinformatiker Systemintegration",
        description: "Portfolio von Younesse El Akkaoui, Bewerber für eine Ausbildung zum Fachinformatiker für Systemintegration: IT-Support, Netzwerktechnik, Labs und Nachweise."
    },
    en: {
        title: "Younesse El Akkaoui | Applicant, IT Specialist for System Integration (Ausbildung)",
        description: "Portfolio of Younesse El Akkaoui, applying for German vocational training as an IT Specialist for System Integration: IT support, networking, labs and credentials."
    }
};

const translatable = [...document.querySelectorAll("[data-en]")];
translatable.forEach(el => { el.dataset.de = el.textContent; });

const labelled = [...document.querySelectorAll("[data-en-label]")];
labelled.forEach(el => { el.dataset.deLabel = el.getAttribute("aria-label"); });

const altTexts = [...document.querySelectorAll("[data-en-alt]")];
altTexts.forEach(el => { el.dataset.deAlt = el.getAttribute("alt"); });

const langButtons = document.querySelectorAll("[data-lang]");
let currentLang = "de";

function readStoredLang() {
    try {
        return localStorage.getItem("portfolio-language");
    } catch (e) {
        return null;
    }
}

function setLanguage(lang, remember) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]').setAttribute("content", META[lang].description);

    translatable.forEach(el => { el.textContent = lang === "en" ? el.dataset.en : el.dataset.de; });
    labelled.forEach(el => { el.setAttribute("aria-label", lang === "en" ? el.dataset.enLabel : el.dataset.deLabel); });
    altTexts.forEach(el => { el.setAttribute("alt", lang === "en" ? el.dataset.enAlt : el.dataset.deAlt); });
    langButtons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    if (remember) {
        try {
            localStorage.setItem("portfolio-language", lang);
        } catch (e) { /* Auswahl gilt dann nur für diesen Besuch */ }
    }
}

langButtons.forEach(b => b.addEventListener("click", () => {
    setLanguage(b.dataset.lang, true);
    resetTerminal();
}));

/* ---------- Terminal ---------- */

const TERMINAL = {
    de: {
        intro: ["Willkommen. Dieses Terminal funktioniert wirklich.", "Tippe einen Befehl oder nutze die Schaltflächen unten."],
        notFound: c => `Befehl nicht gefunden: ${c}. Mit "help" siehst du alle Befehle.`,
        help: [
            "whoami     Wer ich bin",
            "status     Was ich suche",
            "skills     IT-Kenntnisse",
            "labs       Dokumentierte Projekte",
            "certs      Nachweise",
            "contact    Kontaktdaten",
            "clear      Ausgabe leeren"
        ],
        whoami: [
            "Younesse El Akkaoui",
            "Bewerber: Ausbildung Fachinformatiker für Systemintegration",
            "Diplom-Fachtechniker Digitale Infrastruktur, Option Cybersicherheit",
            "Standort: Salé, Marokko. Bereit für den Umzug nach Deutschland."
        ],
        status: [
            { ok: "VERFÜGBAR FÜR EINE AUSBILDUNG" },
            "Vorstellungsgespräch gerne auch per Video."
        ],
        skills: [
            "os        Windows 10/11, Windows Server, Ubuntu, Debian, Kali",
            "net       TCP/IP, DNS, DHCP, Routing, VLAN, OSPF, VPN, Firewalls",
            "itsm      ServiceNow, Incident Management, 1st-Level-Support",
            "virt      VMware Workstation, VirtualBox, GNS3",
            "script    Python, Bash",
            "ai        Claude, Claude Code, ChatGPT"
        ],
        labs: [
            "01  Standortnetz mit VLANs und OSPF (GNS3)",
            "02  Firewall-Lab mit pfSense (VMware)",
            "03  Scan, Härtung, Re-Scan (Kali, Ubuntu)",
            "Details im Abschnitt Projekte."
        ],
        certs: [
            "telc Deutsch B2 (2026)",
            "EF SET English Certificate, C1 (2026)",
            "Google Cybersecurity Certificate (2026)",
            "TryHackMe Pre Security (2026)",
            "Claude Code in action, Claude Academy (2026)"
        ],
        contact: [
            "mail      younesselakkaouics@gmail.com",
            "tel       +212 698 626 603",
            "github    github.com/Y-elakkaoui",
            "linkedin  linkedin.com/in/younesse-el-akkaoui-502486380"
        ]
    },
    en: {
        intro: ["Welcome. This terminal really works.", "Type a command or use the buttons below."],
        notFound: c => `Command not found: ${c}. Type "help" to see all commands.`,
        help: [
            "whoami     Who I am",
            "status     What I am looking for",
            "skills     IT skills",
            "labs       Documented projects",
            "certs      Credentials",
            "contact    Contact details",
            "clear      Clear the output"
        ],
        whoami: [
            "Younesse El Akkaoui",
            "Applicant: vocational training as IT Specialist for System Integration",
            "Technician diploma in Digital Infrastructure, Cybersecurity option",
            "Location: Salé, Morocco. Ready to relocate to Germany."
        ],
        status: [
            { ok: "AVAILABLE FOR VOCATIONAL TRAINING" },
            "Happy to interview by video."
        ],
        skills: [
            "os        Windows 10/11, Windows Server, Ubuntu, Debian, Kali",
            "net       TCP/IP, DNS, DHCP, routing, VLAN, OSPF, VPN, firewalls",
            "itsm      ServiceNow, incident management, 1st-level support",
            "virt      VMware Workstation, VirtualBox, GNS3",
            "script    Python, Bash",
            "ai        Claude, Claude Code, ChatGPT"
        ],
        labs: [
            "01  Multi-site network with VLANs and OSPF (GNS3)",
            "02  Firewall lab with pfSense (VMware)",
            "03  Scan, hardening, re-scan (Kali, Ubuntu)",
            "See the Projects section for details."
        ],
        certs: [
            "telc Deutsch B2 (2026)",
            "EF SET English Certificate, C1 (2026)",
            "Google Cybersecurity Certificate (2026)",
            "TryHackMe Pre Security (2026)",
            "Claude Code in action, Claude Academy (2026)"
        ],
        contact: [
            "mail      younesselakkaouics@gmail.com",
            "phone     +212 698 626 603",
            "github    github.com/Y-elakkaoui",
            "linkedin  linkedin.com/in/younesse-el-akkaoui-502486380"
        ]
    }
};

const COMMANDS = ["help", "whoami", "status", "skills", "labs", "certs", "contact"];
const output = document.getElementById("terminal-output");
const form = document.getElementById("terminal-form");
const input = document.getElementById("terminal-input");

function printLine(text, cls) {
    const line = document.createElement("div");
    if (cls) line.className = cls;
    line.textContent = text;
    output.appendChild(line);
}

function printGap() {
    const gap = document.createElement("div");
    gap.className = "gap";
    output.appendChild(gap);
}

function printBlock(lines) {
    lines.forEach(l => {
        if (typeof l === "string") printLine(l);
        else printLine("✓ " + l.ok, "ok");
    });
}

function run(raw) {
    const command = raw.trim();
    if (!command) return;
    const key = command.toLowerCase();

    if (key === "clear") {
        output.textContent = "";
        return;
    }

    if (output.childElementCount) printGap();
    printLine(command, "cmd");

    const texts = TERMINAL[currentLang];
    if (COMMANDS.includes(key)) printBlock(texts[key]);
    else printLine(texts.notFound(command), "err");

    output.scrollTop = output.scrollHeight;
}

function resetTerminal() {
    output.textContent = "";
    printBlock(TERMINAL[currentLang].intro);
    run("whoami");
    run("status");
    output.scrollTop = 0;
}

form.addEventListener("submit", event => {
    event.preventDefault();
    run(input.value);
    input.value = "";
});

document.querySelectorAll("[data-cmd]").forEach(button => {
    button.addEventListener("click", () => run(button.dataset.cmd));
});

/* ---------- Mobiles Menü ---------- */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navlinks");

function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "✕" : "☰";
}

menuToggle.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.addEventListener("click", event => {
    if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
        setMenu(false);
        menuToggle.focus();
    }
});

/* ---------- Aktiver Abschnitt in der Navigation ---------- */

if ("IntersectionObserver" in window) {
    const links = [...navLinks.querySelectorAll("a")];
    const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(a => {
                if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
                else a.removeAttribute("aria-current");
            });
        });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(a => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target) spy.observe(target);
    });
}

/* ---------- Einblenden: nur was beim Laden noch unter dem Bildschirm liegt ---------- */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion && "IntersectionObserver" in window) {
    const revealer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealer.unobserve(entry.target);
            }
        });
    }, { threshold: .08 });

    document.querySelectorAll("[data-reveal]").forEach(el => {
        if (el.getBoundingClientRect().top > window.innerHeight) {
            el.classList.add("reveal");
            revealer.observe(el);
        }
    });
}

/* ---------- E-Mail kopieren ---------- */

const copyButton = document.getElementById("copy-mail");

copyButton.addEventListener("click", async () => {
    let ok = false;
    try {
        await navigator.clipboard.writeText(copyButton.dataset.copy);
        ok = true;
    } catch (e) { /* Zwischenablage nicht erlaubt */ }

    const de = copyButton.dataset.de;
    const en = copyButton.dataset.en;
    const done = currentLang === "en" ? (ok ? "Copied" : "Failed") : (ok ? "Kopiert" : "Fehler");
    copyButton.textContent = done;
    setTimeout(() => { copyButton.textContent = currentLang === "en" ? en : de; }, 1800);
});

/* ---------- Start ---------- */

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(readStoredLang() === "en" ? "en" : "de", false);
resetTerminal();

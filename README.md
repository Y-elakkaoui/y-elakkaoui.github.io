# Younesse El Akkaoui – IT-Portfolio

Quellcode meines persönlichen Portfolios zur Bewerbung um eine **Ausbildung zum Fachinformatiker für Systemintegration** in Deutschland.

**Live:** [y-elakkaoui.github.io](https://y-elakkaoui.github.io)

## Aufbau

Statische Website für GitHub Pages, ohne Build-Schritt und ohne Frameworks.

```text
index.html            Inhalte auf Deutsch, Übersetzungen in data-en
404.html              Fehlerseite
assets/css/style.css  Design
assets/js/main.js     Sprachumschalter, Terminal, mobiles Menü
assets/fonts/         Inter und JetBrains Mono (selbst gehostet, SIL OFL)
assets/img/           Porträt, Projekt-Screenshots, Favicon
```

## Datenschutz und Sicherheit

- Keine externen Skripte, Schriften oder Bilder, keine Cookies, kein Tracking.
- Eine Content Security Policy erlaubt nur Ressourcen aus diesem Repository.
- Die Sprachauswahl wird lokal im Browser gespeichert (`localStorage`).
- Bewerbungsunterlagen (Lebenslauf, Zeugnisse) liegen bewusst nicht in diesem Repository. Ich sende sie auf Anfrage per E-Mail.

## Lokal ansehen

```bash
python -m http.server 8000
```

Danach `http://localhost:8000` im Browser öffnen.

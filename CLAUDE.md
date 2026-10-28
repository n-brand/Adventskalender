# Adventskalender

Privates Projekt. Veröffentlicht über GitHub Pages: https://n-brand.github.io/Adventskalender/

## Aufbau

- `index.html`: die ganze Seite (HTML, CSS, JS in einer Datei, keine Abhängigkeiten).
- PWA: `manifest.webmanifest`, `sw.js` (Service Worker, Netzwerk zuerst, Cache als Offline-Rückfall; nach dem ersten Besuch läuft alles offline. Bei neuen Dateien die Liste `FILES` und die Version `CACHE` anpassen) und `icons/` (SVG plus PNG 192/512, maskable 512, apple-touch-icon 180). Der Knopf "Als App installieren" erscheint nur, wenn der Browser die Installation anbietet (Chrome/Edge/Android); auf dem iPhone zeigt er die Anleitung "Teilen → Zum Home-Bildschirm".
- Türchen: Das `.door` ist das dunkle Fach, darauf liegt die farbige `.leaf`, die beim Öffnen nach links aufklappt; danach erscheint die Botschaft mit "Teilen" (Teilen-Menü des Systems, sonst Kopieren in die Zwischenablage).
- Ab 25. Dezember (und mit `?vorschau`) zeigt der Knopf "Alle 24 Botschaften" den Rückblick.
- Experiment verschiedene Türchen-Größen: `?groessen` oder Häkchen im Admin-Modus (6 Spalten Desktop, 4 Spalten Handy).
- Datumslogik: vor dem 1. Dezember (Februar bis November) alles zu mit Hinweis "Adventszeit hat noch nicht begonnen"; 1. bis 24. Dezember öffnet sich jedes Türchen ab seinem Datum; 25. Dezember bis 31. Januar sind alle offen. Die Seite prüft das Datum jede Minute neu (Wechsel um Mitternacht ohne Neuladen).
- Testschalter in `index.html`: `const TEST_DATE = null;` liest das echte Datum. Ein Wert wie `"2026-12-03"` setzt ein festes Datum. **Vor dem Veröffentlichen muss er auf `null` stehen.** Bei aktivem Testdatum steht "(Testdatum ...)" in der Statuszeile.
- Admin-Modus: "Nicolas" ins kleine Feld im Footer tippen und Enter drücken (Groß-/Kleinschreibung egal, falscher Code leert das Feld). Dann erscheint ein Datumsfeld, das Vorrang vor `TEST_DATE` und `?datum` hat, und der Button "Admin-Modus verlassen". Kein Schutz, der Code steht im Quelltext; nach dem Neuladen ist der Modus aus. Jeder Eintritt startet einen frischen Testlauf (Datum fest auf heute, wenn Dezember ist, sonst auf den 1. Dezember; alle Türchen unberührt); Admin-Modus, `?vorschau` und `TEST_DATE`/`?datum` schreiben nie ins Cookie. Nach dem Verlassen gilt wieder der echte Stand aus dem Cookie. "Admin-Fortschritt zurücksetzen" leert nur den Testlauf; "Fortschritt zurücksetzen" löscht immer das Cookie.
- Testen per URL: `?datum=2026-11-15` setzt ein Datum, `?vorschau` öffnet alle Türchen.
- Geöffnete Türchen stehen ein Jahr lang im Cookie `adventskalender` (z.B. `1,2,5`). "Fortschritt zurücksetzen" im Footer löscht ihn (mit Rückfrage per zweitem Klick).

## Arbeitsregeln

- Antworten auf Deutsch, kurz. Code-Kommentare auf Englisch.
- Commit und Push nur nach expliziter Rückfrage, jedes Mal einzeln.
- Keine Hinweise auf Claude oder Anthropic in Commits oder Pull Requests (kein `Co-Authored-By`, keine "Generated with"-Zeile).
- Git-Autor ist die private GitHub-Adresse (globale Einstellung), nicht die Firmenadresse.
- Vor jedem Commit: Diff ansehen, auf kaputte Umlaute (U+FFFD) prüfen, keine Geheimnisse oder echten Daten einchecken.

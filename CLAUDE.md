# Adventskalender

Privates Projekt. Veröffentlicht über GitHub Pages: https://n-brand.github.io/Adventskalender/

## Aufbau

- `index.html`: die ganze Seite (HTML, CSS, JS in einer Datei, keine Abhängigkeiten).
- Datumslogik: vor dem 1. Dezember (Februar bis November) alles zu mit Hinweis "Adventszeit hat noch nicht begonnen"; 1. bis 24. Dezember öffnet sich jedes Türchen ab seinem Datum; 25. Dezember bis 31. Januar sind alle offen. Die Seite prüft das Datum jede Minute neu (Wechsel um Mitternacht ohne Neuladen).
- Testschalter in `index.html`: `const TEST_DATE = "2026-12-03";` setzt ein festes Datum. **Vor dem Veröffentlichen auf `null` setzen.** Bei aktivem Testdatum steht "(Testdatum ...)" in der Statuszeile.
- Testen per URL: `?datum=2026-11-15` setzt ein Datum, `?vorschau` öffnet alle Türchen.
- Geöffnete Türchen stehen ein Jahr lang im Cookie `adventskalender` (z.B. `1,2,5`). "Fortschritt zurücksetzen" im Footer löscht ihn (mit Rückfrage per zweitem Klick).

## Arbeitsregeln

- Antworten auf Deutsch, kurz. Code-Kommentare auf Englisch.
- Commit und Push nur nach expliziter Rückfrage, jedes Mal einzeln.
- Keine Hinweise auf Claude oder Anthropic in Commits oder Pull Requests (kein `Co-Authored-By`, keine "Generated with"-Zeile).
- Git-Autor ist die private GitHub-Adresse (globale Einstellung), nicht die Firmenadresse.
- Vor jedem Commit: Diff ansehen, auf kaputte Umlaute (U+FFFD) prüfen, keine Geheimnisse oder echten Daten einchecken.

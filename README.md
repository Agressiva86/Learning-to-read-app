# Sylabowo

Kartki A4 do nauki czytania metodą sylabową. Każde słowo ma kolorowankę i sylaby w osobnych ramkach. Kartkę można pobrać jako PDF albo wydrukować.

W zestawie startowym jest 40 słów z codzienności:

- łatwy — 2 sylaby (mama, woda, kotek…)
- średni — 3–4 sylaby (rodzina, samochód, czekolada…)
- trudny — 5–6 sylab (temperatura, lokomotywa, niezapominajka…)

To zwykła strona w przeglądarce. Własne słowa zostają zapisane na tym urządzeniu.

## Uruchomienie na swoim komputerze

```bash
npm install
npm run dev
```

Strona otwiera się pod adresem http://127.0.0.1:5173

Gotową stronę do wgrania na hosting buduje polecenie `npm run build`. Pliki lądują w katalogu `dist`. Podgląd tej wersji:

```bash
npm run preview
```

```bash
npm test
```

## Adres w internecie

Po złączeniu zmian z gałęzią `main` GitHub Actions publikuje stronę. W repozytorium trzeba raz ustawić źródło: Settings → Pages → Build and deployment → Source: GitHub Actions.

Adres strony to wtedy https://agressiva86.github.io/Learning-to-read-app/

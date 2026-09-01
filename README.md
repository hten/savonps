# Psykologille.fi

Kevyt, staattinen yhden sivun toteutus. Sivusto ei tarvitse paketinhallintaa,
build-vaihetta, tietokantaa tai palvelinpuolen koodia.

## Paikallinen esikatselu

Käynnistä projektikansiossa esimerkiksi:

```sh
python3 -m http.server 8000
```

Avaa sitten <http://localhost:8000>.

## Rakenne

- `index.html` – semanttinen sisältö, metatiedot ja Schema.org JSON-LD
- `styles.css` – ulkoasu ja responsiivisuus
- `script.js` – haitarielementtien Escape-näppäintuki
- `assets/images/` – paikalliset sivu- ja jakokuvat
- `assets/fonts/` – paikallinen Newsreader-muuttujafontti ja SIL OFL -lisenssi
- `favicon.svg`, `apple-touch-icon.png`, `site.webmanifest` – sivustokuvakkeet
- `robots.txt`, `sitemap.xml` – hakukoneiden perustiedostot

Sivuston voi julkaista sellaisenaan millä tahansa staattisia tiedostoja
palvelevalla webhotellilla. Verkkotunnuksen tulee osoittaa julkaisuympäristöön,
ja HTTPS:n on oltava käytössä ennen Squarespace-tilauksen päättämistä.

## Fontti

Alkuperäisten lisensoitujen Freight Text Pro- ja Adobe Caslon Pro -fonttien
tilalla käytetään Newsreader-muuttujafonttia. Sen optinen koko mukauttaa
kirjainmuotoja automaattisesti otsikko- ja leipätekstikokoihin. Fontti hostataan
paikallisesti, joten sivu ei lähetä fonttipyyntöjä Googlelle tai Adobelle.

Newsreader on julkaistu SIL Open Font License 1.1 -lisenssillä. Lisenssiteksti
on tiedostossa `assets/fonts/OFL-Newsreader.txt`.

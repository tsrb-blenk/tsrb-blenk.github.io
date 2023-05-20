# Dev guideliens

## Submittanje koda
Svaki put kad radite na kodu prvo pullajte najnoviji kod sa repozitorija pa tam radite promjene. Ak na starom kodu radite promjene sam cemo undo-at prosli progress. Nemojte pushat direktno u `main` branch nego prvo na `develop` branch. Nakon toga odite na `Pull requests` tab i tamo napravite novi pull request gdje je `base: main` i `compare: develop`. Onda cekajte da je checkiram jel to strga nes postojece. Ak ne onda cu approveat pull request. Ak strga nes u comment na pull request cu vam napisat kaj ne valja pa fixajte to i onda cu approveat. Ak je neki minor tweak budem ja solo.

## Extensions
Iskljucite svaki extension koji mijenja stranicu. Znaci svaki darkmode extension, adblocker ili slicno. Ne morate ga iskljuciti globally nego kod vecine mozete samo za tu stranicu.

## HTML Template 
Kad radite HTML page prvo pasteajte template u datoteku pa tek onda dodajte templateu. Nemojte nista micati iz njega. Template u sebi vec ima linkan `global.css` koji je base CSS za sve stranice. Promijenite `<title>` element da bude u vec zadanom formatu. Znaci samo staviti neki tekst umjesto `{title}`. Onda za trenuntno aktivnu stranicu u nav-baru staviti klasu `active-page`. To dodaje underline ispod toga da oznaci na kojoj smo trenutno stranici. U templateu je to napravljeno za `Home`. Nemojte molim vas jos stranica dodavat jer onda u svim fileovima treba navbar updateat. To recite legendi marjanu. Ti kuso pogotovo ak ces htjet radit login i to mi reci da updateam nav svugdje.
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="authors" content="https://github.com/tsrb-blenk">
        <!-- fonts and icons -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <!-- stylesheets -->
        <link rel="stylesheet" href="/stlyesheets/global.css">
        <!-- scripts -->

        <!-- title -->
        <title>{page-title} | Blenk</title>

    </head>
    <body>
        
        <header>
            <nav>
                <a href=""><h1>BLENK.</h1></a>
                <ul>
                    <li><a href="/index.html" class="active-page">Home</a></li>
                    <li><a href="/events.html">Events</a></li>
                    <li><a href="/portfolio.html">Photo Gallery</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>

        <main style="height: 100vh">
            
        </main>

        <footer>
            <div>
                <h5>
                    <i class="fa-solid fa-school"></i>
                    Technical School Ruđer Bošković, Zagreb
                </h5>
                <h5>
                    <i class="fa-solid fa-location-dot"></i>
                    Getaldićeva ul. 4, 10000, Zagreb
                </h5>
                <h5>
                    <i class="fa-solid fa-envelope"></i>
                    blenktsrb@gmail.com
                </h5>
                <h5>
                    <i class="fa-brands fa-github"></i>
                    <a href="https://github.com/tsrb-blenk/tsrb-blenk.github.io" target="_blank">
                        @tsrb-blenk/tsrb-blenk.github.io
                    </a>
                </h5>
            </div>
            <div>
                <h4>Team Blenk:</h4>
                <div>
                    <ul>
                        <li>Lovro Hrnčić</li>
                        <li>Kristijan Kralj</li>
                        <li>Leon Kušić</li>
                        <li>Noa Čanji</li>
                        <li>Frane Ninić</li>
                        <li>Jan Grdanjski</li>
                    </ul>
                </div>
            </div>
        </footer>

    </body>
    </html>
```

## CSS
CSS template vec se nalazi u `global.css` i on je potreban na svakoj stranici. Njega nikako ne mijenjati, vec ako trebate dodati svoj CSS napravite novu datoteku u `/stylesheets` pa nju linkajte u vas HTML dokument. Template sadrzi color theme odreduje bazni stil cestih elemenata i footera. Kada zelite koristiti neku boju u vasem CSS-u koristite CSS varijable definirane u `global.css`. Ako trebate jos neku boju recite dizajnerima da im fali boja i temporerno stavite neku svoju dok ovi vide kaj ce. Kad pisete CSS daj nemojte radit zmijice od selektora nego ak je potrebno iskoristite klase ili id-eve. Msm oke ak je ono 2-3 selektora za redom al vise pls ne. Izgleda bolje a i lakse nam je ctrl+f.
```css
/* tipa od ovog */
main div ul li a i:hover {
    color: #431244;
}
/* bude samo ovo */
.ikonica:hover {
    color: var(--fg-color-2);
} 
```

## Slike
Kad stavljate slike koristite `<picture>` tag na sljedeci nacin.
```html
<picture>
    <source srcset="/assets/page/slika.webp" type="image/webp">
    <img src="/assets/page/slika.jpeg" alt="">
</picture>
```
Tag `<picture>` radi tako da browseru daje vise opcija koju sliku ce odabrati. Posto je WebP najbolji format za web, njega stavimo prvog pod `srcset` atribut `<source>` elementa. Bitno je i specificirati `type` atribut jer po njemu browser odreduje podrzava li taj format ili ne. Dalje treba dodati fallback ako browser ne podrzava WebP. Kao fallback staviti JPEG kao u primjeru. WebP je podrzan na svim modernim browserima, ali Internet Explorer i malo starije verzije Safari-ja ga ne podrzavaju.<br>
Znaci slike spremate u `/assets/{stranica}/`, a za svaku sliku treba imati i JPEG i WebP. Znaci puknete sliku u Photoshop i resizeate vecu stranicu na 1000ish ili manje. Znaci ako je slika 16:9 width bi maksimalno trebao biti oko 1000. Ako je slika 9:16, onda height treba maksimalno biti oko 1000ish. Jedina iznimka su slike preko cijele stranice al njih tak i tak treba izbjegavat. Kad exportate igrajte se sa quality sliderom da vam filesize bude max 300-400kB po slici. Prosjecne slike mozete dobit i do manje od 100kB bez primjetnih promjena tak da sam rokajte.


## Font i ikone
Za fontove za sad imamo samo `Poppins`, al ak bas zelite nes drugo mozete uzet sa google fonts i importat na svoj page.<br>
Za ikone probajte pronac font awesome.


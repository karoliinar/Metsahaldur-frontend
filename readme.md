# Metsahaldur 
:squirrel: :gun:

(ekraanipilti või eraldi loodud pilti lahendusest.)
(eesmärki ja lühikirjeldust (3-4 lauset, mis probleemi rakendus lahendab);)
Metsahalduri lehestiku eesmärk on muuta metsa haldamine metsahalduri firma jaoks lihtsaks ja veebipõhiseks. Rakendus lihtsustab Metsahaldur OÜ klientide ja ettevõtte vahelist andmevahetust. Veebilehega kaotatakse ära vajadus käsitisi andmete  sisestamiseks ja haldamiseks. Rakendus hõlbustab suuresti metsahalduri töötajate töövoogu. 

Projekt on loodud Tarkvaraarenduse praktika suvetöö raames. 


(kasutatud tehnoloogiaid ja nende versioonid;)

(kasutajate või nimede loetelu, kes projekti panustasid;)
>Digitehnoloogiate Instituut
###Projekti panustasid
Meie tiim: 
>Greg Nesselmann
>Henry Savi
>Karoliina Roots
>Toomas Thetloff
>Veljo Lasn

Tiimiväline abi: 
>Erko Soolmann
>Romil Robtsenkov


selgeid paigaldusjuhiseid;
viidet litsentsile.




#### Metsahaldur

react-scss-webpack boilerplate.

1) Navigeeri varem loodud mets/www kausta
2) `sudo git clone https://SINUKASUTAJANIMI@github.com/vlasn/mets app`
3) cd app && sudo npm install
4) vaata et nginxi confis oleks / locationi all `sendfile off;` - sa ei taha 5 tundi oma elust selle debugimisele raisata nagu Veljo tegi :)

Käsud:

`npm run dev` - käivitab webpack-dev-serveri ja hot-reloadingu - ei vaja virtualboxi käivitamist et ainult visuaali kallal tööd teha.

`npm run build` - development build - kompileerib ja bundleb kogu javascripti & cssi kahte faili, ligipääsetav VM-i kaudu.

`npm run prod` - production build - minify + uglify JS & CSS. vt. ka webpack.config.js-is olevaid minificationi käske.


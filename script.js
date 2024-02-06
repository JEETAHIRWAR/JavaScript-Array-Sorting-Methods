const students = [
    { "id": 1, "first_name": "Chadwick", "last_name": "Ayre", "email": "cayre0@cam.ac.uk", "gender": "Male", "img_src": "https://robohash.org/corporisquiaperiam.png?size=50x50&set=set1", "class": 11, "marks": 18, "passing": false, "city": "Moorreesburg" },
    { "id": 2, "first_name": "Abrahan", "last_name": "Seabrocke", "email": "aseabrocke1@ocn.ne.jp", "gender": "Male", "img_src": "https://robohash.org/autiuredistinctio.png?size=50x50&set=set1", "class": 3, "marks": 27, "passing": true, "city": "Kampong Thom" },
    { "id": 3, "first_name": "Nathanael", "last_name": "Laye", "email": "nlaye2@typepad.com", "gender": "Male", "img_src": "https://robohash.org/dolorumsedut.png?size=50x50&set=set1", "class": 10, "marks": 89, "passing": false, "city": "Niquinohomo" },
    { "id": 4, "first_name": "Luigi", "last_name": "Balcers", "email": "lbalcers3@reverbnation.com", "gender": "Agender", "img_src": "https://robohash.org/eumaliquamest.png?size=50x50&set=set1", "class": 8, "marks": 30, "passing": false, "city": "Nashtā Rūd" },
    { "id": 5, "first_name": "Adam", "last_name": "Gurg", "email": "agurg4@xrea.com", "gender": "Male", "img_src": "https://robohash.org/nemolaborumquis.png?size=50x50&set=set1", "class": 3, "marks": 10, "passing": true, "city": "Sandviken" },
    { "id": 6, "first_name": "Kev", "last_name": "Haitlie", "email": "khaitlie5@booking.com", "gender": "Male", "img_src": "https://robohash.org/nonestnon.png?size=50x50&set=set1", "class": 1, "marks": 59, "passing": true, "city": "Bridgewater" },
    { "id": 7, "first_name": "Reinhard", "last_name": "Royl", "email": "rroyl6@sun.com", "gender": "Male", "img_src": "https://robohash.org/nobisvelquasi.png?size=50x50&set=set1", "class": 4, "marks": 60, "passing": true, "city": "Padangulaktanding" },
    { "id": 8, "first_name": "Nonah", "last_name": "Kilmartin", "email": "nkilmartin7@washington.edu", "gender": "Female", "img_src": "https://robohash.org/eosquodoloremque.png?size=50x50&set=set1", "class": 9, "marks": 4, "passing": false, "city": "Petropavlovsk" },
    { "id": 9, "first_name": "Clo", "last_name": "Falkinder", "email": "cfalkinder8@mysql.com", "gender": "Female", "img_src": "https://robohash.org/velitinaccusantium.png?size=50x50&set=set1", "class": 6, "marks": 9, "passing": false, "city": "Novyy Oskol" },
    { "id": 10, "first_name": "Clyve", "last_name": "Dedney", "email": "cdedney9@europa.eu", "gender": "Male", "img_src": "https://robohash.org/debitisevenietnon.png?size=50x50&set=set1", "class": 12, "marks": 57, "passing": false, "city": "Jagna" },
    { "id": 11, "first_name": "Vincenz", "last_name": "Surphliss", "email": "vsurphlissa@soup.io", "gender": "Male", "img_src": "https://robohash.org/accusantiumnecessitatibusesse.png?size=50x50&set=set1", "class": 4, "marks": 2, "passing": true, "city": "Jingmao" },
    { "id": 12, "first_name": "Helene", "last_name": "Griffitts", "email": "hgriffittsb@umn.edu", "gender": "Female", "img_src": "https://robohash.org/etcumquequi.png?size=50x50&set=set1", "class": 12, "marks": 80, "passing": true, "city": "Fais" },
    { "id": 13, "first_name": "Lydia", "last_name": "Pamphilon", "email": "lpamphilonc@mit.edu", "gender": "Female", "img_src": "https://robohash.org/ametvoluptatemautem.png?size=50x50&set=set1", "class": 5, "marks": 81, "passing": false, "city": "North York" },
    { "id": 14, "first_name": "Dov", "last_name": "Cubbini", "email": "dcubbinid@theguardian.com", "gender": "Genderqueer", "img_src": "https://robohash.org/quisteneturveritatis.png?size=50x50&set=set1", "class": 12, "marks": 25, "passing": true, "city": "Keetmanshoop" },
    { "id": 15, "first_name": "Mimi", "last_name": "Monksfield", "email": "mmonksfielde@mapquest.com", "gender": "Female", "img_src": "https://robohash.org/voluptatibusexplicabout.png?size=50x50&set=set1", "class": 4, "marks": 52, "passing": true, "city": "Placer" },
    { "id": 16, "first_name": "Marguerite", "last_name": "Evanson", "email": "mevansonf@huffingtonpost.com", "gender": "Female", "img_src": "https://robohash.org/voluptatesaliquamodit.png?size=50x50&set=set1", "class": 10, "marks": 96, "passing": true, "city": "La Guacamaya" },
    { "id": 17, "first_name": "Michele", "last_name": "Haresnaip", "email": "mharesnaipg@networkadvertising.org", "gender": "Male", "img_src": "https://robohash.org/quisquamaperiamvel.png?size=50x50&set=set1", "class": 9, "marks": 46, "passing": true, "city": "Tilamuta" },
    { "id": 18, "first_name": "Johnna", "last_name": "Briars", "email": "jbriarsh@behance.net", "gender": "Agender", "img_src": "https://robohash.org/maximecorruptiaspernatur.png?size=50x50&set=set1", "class": 9, "marks": 77, "passing": false, "city": "Cocobeach" },
    { "id": 19, "first_name": "Debee", "last_name": "Bonnier", "email": "dbonnieri@opensource.org", "gender": "Female", "img_src": "https://robohash.org/errordoloreaut.png?size=50x50&set=set1", "class": 2, "marks": 35, "passing": false, "city": "Carolina" },
    { "id": 20, "first_name": "Gunther", "last_name": "Taveriner", "email": "gtaverinerj@google.ca", "gender": "Male", "img_src": "https://robohash.org/mollitiautrerum.png?size=50x50&set=set1", "class": 1, "marks": 72, "passing": true, "city": "Knoxville" },
    { "id": 21, "first_name": "Dominick", "last_name": "Coppock.", "email": "dcoppockk@mlb.com", "gender": "Genderqueer", "img_src": "https://robohash.org/ullaminciduntaut.png?size=50x50&set=set1", "class": 9, "marks": 10, "passing": false, "city": "Magrath" },
    { "id": 22, "first_name": "Harp", "last_name": "Colebrook", "email": "hcolebrookl@gravatar.com", "gender": "Male", "img_src": "https://robohash.org/voluptatumlaboreiste.png?size=50x50&set=set1", "class": 4, "marks": 83, "passing": false, "city": "Juuka" },
    { "id": 23, "first_name": "Carlen", "last_name": "Bakeup", "email": "cbakeupm@craigslist.org", "gender": "Female", "img_src": "https://robohash.org/quasblanditiispossimus.png?size=50x50&set=set1", "class": 2, "marks": 28, "passing": false, "city": "Casal" },
    { "id": 24, "first_name": "Mario", "last_name": "Crambie", "email": "mcrambien@so-net.ne.jp", "gender": "Male", "img_src": "https://robohash.org/exercitationemquiaqui.png?size=50x50&set=set1", "class": 9, "marks": 33, "passing": true, "city": "Linggou" },
    { "id": 25, "first_name": "Maribel", "last_name": "Hindenburg", "email": "mhindenburgo@squarespace.com", "gender": "Female", "img_src": "https://robohash.org/quiaetporro.png?size=50x50&set=set1", "class": 3, "marks": 24, "passing": true, "city": "Zhangfang" },
    { "id": 26, "first_name": "Merilee", "last_name": "Lukock", "email": "mlukockp@rambler.ru", "gender": "Female", "img_src": "https://robohash.org/earumsapientedignissimos.png?size=50x50&set=set1", "class": 6, "marks": 25, "passing": false, "city": "Segezha" },
    { "id": 27, "first_name": "Carroll", "last_name": "Waterfield", "email": "cwaterfieldq@paypal.com", "gender": "Male", "img_src": "https://robohash.org/architectoconsequaturvelit.png?size=50x50&set=set1", "class": 5, "marks": 93, "passing": false, "city": "Bieqiao" },
    { "id": 28, "first_name": "Sandor", "last_name": "Muldoon", "email": "smuldoonr@usda.gov", "gender": "Male", "img_src": "https://robohash.org/auteminciduntdoloremque.png?size=50x50&set=set1", "class": 9, "marks": 52, "passing": true, "city": "Konin" },
    { "id": 29, "first_name": "Hagan", "last_name": "Ghidini", "email": "hghidinis@upenn.edu", "gender": "Male", "img_src": "https://robohash.org/maioresdolorculpa.png?size=50x50&set=set1", "class": 8, "marks": 100, "passing": true, "city": "Loo" },
    { "id": 30, "first_name": "Odetta", "last_name": "McNamara", "email": "omcnamarat@hugedomains.com", "gender": "Genderfluid", "img_src": "https://robohash.org/pariaturteneturqui.png?size=50x50&set=set1", "class": 11, "marks": 48, "passing": false, "city": "Jiangwan" },
    { "id": 31, "first_name": "Rozelle", "last_name": "Meller", "email": "rmelleru@uol.com.br", "gender": "Bigender", "img_src": "https://robohash.org/quaeratrationemolestias.png?size=50x50&set=set1", "class": 6, "marks": 81, "passing": true, "city": "Cabannungan Second" },
    { "id": 32, "first_name": "Burnaby", "last_name": "Hebbron", "email": "bhebbronv@toplist.cz", "gender": "Male", "img_src": "https://robohash.org/veritatisadipiscimaiores.png?size=50x50&set=set1", "class": 10, "marks": 6, "passing": false, "city": "Tudela" },
    { "id": 33, "first_name": "Tommy", "last_name": "Sowley", "email": "tsowleyw@drupal.org", "gender": "Male", "img_src": "https://robohash.org/quiidquidem.png?size=50x50&set=set1", "class": 10, "marks": 42, "passing": true, "city": "Sulkava" },
    { "id": 34, "first_name": "Cristen", "last_name": "Vigietti", "email": "cvigiettix@cnn.com", "gender": "Female", "img_src": "https://robohash.org/eummaximeasperiores.png?size=50x50&set=set1", "class": 6, "marks": 13, "passing": false, "city": "Esch-sur-Alzette" },
    { "id": 35, "first_name": "Kipp", "last_name": "Shipsey", "email": "kshipseyy@wunderground.com", "gender": "Male", "img_src": "https://robohash.org/quasicumqueautem.png?size=50x50&set=set1", "class": 8, "marks": 72, "passing": true, "city": "San Andres" },
    { "id": 36, "first_name": "Willi", "last_name": "Deeprose", "email": "wdeeprosez@youku.com", "gender": "Female", "img_src": "https://robohash.org/quilaborumsunt.png?size=50x50&set=set1", "class": 1, "marks": 50, "passing": false, "city": "Warlubie" },
    { "id": 37, "first_name": "Julita", "last_name": "Coverdale", "email": "jcoverdale10@etsy.com", "gender": "Female", "img_src": "https://robohash.org/velhicest.png?size=50x50&set=set1", "class": 7, "marks": 9, "passing": false, "city": "Narong" },
    { "id": 38, "first_name": "Kippy", "last_name": "Dysart", "email": "kdysart11@springer.com", "gender": "Male", "img_src": "https://robohash.org/praesentiumnemoquas.png?size=50x50&set=set1", "class": 2, "marks": 77, "passing": true, "city": "Linköping" },
    { "id": 39, "first_name": "Xena", "last_name": "Cleen", "email": "xcleen12@usatoday.com", "gender": "Female", "img_src": "https://robohash.org/iurequiaaccusantium.png?size=50x50&set=set1", "class": 11, "marks": 25, "passing": false, "city": "Huangqiao" },
    { "id": 40, "first_name": "Deane", "last_name": "Hallbird", "email": "dhallbird13@reference.com", "gender": "Male", "img_src": "https://robohash.org/totamutlaudantium.png?size=50x50&set=set1", "class": 2, "marks": 99, "passing": false, "city": "Saquarema" },
    { "id": 41, "first_name": "Brigham", "last_name": "Boggish", "email": "bboggish14@xinhuanet.com", "gender": "Male", "img_src": "https://robohash.org/suntitaqueculpa.png?size=50x50&set=set1", "class": 4, "marks": 96, "passing": false, "city": "Fāryāb" },
    { "id": 42, "first_name": "Arliene", "last_name": "Stubbins", "email": "astubbins15@yellowpages.com", "gender": "Female", "img_src": "https://robohash.org/quamaspernaturdelectus.png?size=50x50&set=set1", "class": 6, "marks": 39, "passing": false, "city": "Atlanta" },
    { "id": 43, "first_name": "Keefer", "last_name": "Mensler", "email": "kmensler16@moonfruit.com", "gender": "Male", "img_src": "https://robohash.org/adipiscidoloremquequisquam.png?size=50x50&set=set1", "class": 10, "marks": 9, "passing": false, "city": "Baruunturuun" },
    { "id": 44, "first_name": "De witt", "last_name": "Lethby", "email": "dlethby17@biblegateway.com", "gender": "Male", "img_src": "https://robohash.org/rerumearumomnis.png?size=50x50&set=set1", "class": 5, "marks": 15, "passing": true, "city": "Port Loko" },
    { "id": 45, "first_name": "Karry", "last_name": "Alflat", "email": "kalflat18@eepurl.com", "gender": "Female", "img_src": "https://robohash.org/aliquiddolorquisquam.png?size=50x50&set=set1", "class": 9, "marks": 28, "passing": false, "city": "Morales" },
    { "id": 46, "first_name": "Etan", "last_name": "Wardell", "email": "ewardell19@usgs.gov", "gender": "Male", "img_src": "https://robohash.org/nihilquodqui.png?size=50x50&set=set1", "class": 11, "marks": 26, "passing": false, "city": "Ban Huai Thalaeng" },
    { "id": 47, "first_name": "Corney", "last_name": "Kollaschek", "email": "ckollaschek1a@discuz.net", "gender": "Male", "img_src": "https://robohash.org/eaconsequaturexercitationem.png?size=50x50&set=set1", "class": 3, "marks": 34, "passing": true, "city": "Tomarovka" },
    { "id": 48, "first_name": "Robenia", "last_name": "Scain", "email": "rscain1b@yelp.com", "gender": "Female", "img_src": "https://robohash.org/dolorfugalaborum.png?size=50x50&set=set1", "class": 4, "marks": 30, "passing": true, "city": "Châteaurenard" },
    { "id": 49, "first_name": "Marj", "last_name": "Cheltnam", "email": "mcheltnam1c@wunderground.com", "gender": "Female", "img_src": "https://robohash.org/quidemodiosed.png?size=50x50&set=set1", "class": 2, "marks": 7, "passing": false, "city": "Molde" },
    { "id": 50, "first_name": "Graham", "last_name": "Lethem", "email": "glethem1d@hp.com", "gender": "Bigender", "img_src": "https://robohash.org/estnequeipsa.png?size=50x50&set=set1", "class": 4, "marks": 10, "passing": true, "city": "Remas" },
    { "id": 51, "first_name": "Mathew", "last_name": "Sadry", "email": "msadry1e@alexa.com", "gender": "Male", "img_src": "https://robohash.org/eosipsatenetur.png?size=50x50&set=set1", "class": 2, "marks": 88, "passing": true, "city": "Ntoum" },
    { "id": 52, "first_name": "Alberta", "last_name": "D'Alessio", "email": "adalessio1f@dagondesign.com", "gender": "Polygender", "img_src": "https://robohash.org/etsintlaborum.png?size=50x50&set=set1", "class": 2, "marks": 82, "passing": true, "city": "Ganhe" },
    { "id": 53, "first_name": "Reube", "last_name": "Brabyn", "email": "rbrabyn1g@jugem.jp", "gender": "Male", "img_src": "https://robohash.org/mollitiainoptio.png?size=50x50&set=set1", "class": 10, "marks": 71, "passing": true, "city": "Pore" },
    { "id": 54, "first_name": "Rab", "last_name": "Cluney", "email": "rcluney1h@slate.com", "gender": "Male", "img_src": "https://robohash.org/necessitatibusutquasi.png?size=50x50&set=set1", "class": 6, "marks": 59, "passing": false, "city": "Kudanding" },
    { "id": 55, "first_name": "Honey", "last_name": "Frissell", "email": "hfrissell1i@senate.gov", "gender": "Female", "img_src": "https://robohash.org/aliquamdolorumfacilis.png?size=50x50&set=set1", "class": 2, "marks": 82, "passing": true, "city": "Wangba" },
    { "id": 56, "first_name": "Leda", "last_name": "Jehan", "email": "ljehan1j@feedburner.com", "gender": "Female", "img_src": "https://robohash.org/estearumpraesentium.png?size=50x50&set=set1", "class": 5, "marks": 13, "passing": false, "city": "Munde" },
    { "id": 57, "first_name": "Whitby", "last_name": "Grogono", "email": "wgrogono1k@paypal.com", "gender": "Male", "img_src": "https://robohash.org/eumautquia.png?size=50x50&set=set1", "class": 4, "marks": 44, "passing": true, "city": "Girona" },
    { "id": 58, "first_name": "Amalea", "last_name": "Sainz", "email": "asainz1l@miitbeian.gov.cn", "gender": "Female", "img_src": "https://robohash.org/pariaturrepellenduseum.png?size=50x50&set=set1", "class": 2, "marks": 58, "passing": true, "city": "Tejar" },
    { "id": 59, "first_name": "Abbe", "last_name": "Guerner", "email": "aguerner1m@4shared.com", "gender": "Male", "img_src": "https://robohash.org/etsedtotam.png?size=50x50&set=set1", "class": 8, "marks": 71, "passing": false, "city": "Wutumeiren" },
    { "id": 60, "first_name": "Sholom", "last_name": "Pouck", "email": "spouck1n@house.gov", "gender": "Male", "img_src": "https://robohash.org/incumquelaudantium.png?size=50x50&set=set1", "class": 9, "marks": 68, "passing": true, "city": "Ngancar" },
    { "id": 61, "first_name": "Flor", "last_name": "Queenborough", "email": "fqueenborough1o@fc2.com", "gender": "Female", "img_src": "https://robohash.org/consequaturblanditiispossimus.png?size=50x50&set=set1", "class": 6, "marks": 77, "passing": true, "city": "Umeå" },
    { "id": 62, "first_name": "Rupert", "last_name": "Brien", "email": "rbrien1p@princeton.edu", "gender": "Male", "img_src": "https://robohash.org/totamarchitectoqui.png?size=50x50&set=set1", "class": 3, "marks": 62, "passing": false, "city": "Kandangan" },
    { "id": 63, "first_name": "Loralee", "last_name": "Petrasch", "email": "lpetrasch1q@uol.com.br", "gender": "Polygender", "img_src": "https://robohash.org/minimaearumcum.png?size=50x50&set=set1", "class": 4, "marks": 43, "passing": false, "city": "Kelaniya" },
    { "id": 64, "first_name": "Christoffer", "last_name": "Stain", "email": "cstain1r@vk.com", "gender": "Male", "img_src": "https://robohash.org/estvoluptatemamet.png?size=50x50&set=set1", "class": 8, "marks": 77, "passing": true, "city": "Selasari" },
    { "id": 65, "first_name": "Iver", "last_name": "Feldmark", "email": "ifeldmark1s@cpanel.net", "gender": "Male", "img_src": "https://robohash.org/fugiatautemveniam.png?size=50x50&set=set1", "class": 4, "marks": 99, "passing": true, "city": "Kurayyimah" },
    { "id": 66, "first_name": "Mikol", "last_name": "Doherty", "email": "mdoherty1t@ning.com", "gender": "Male", "img_src": "https://robohash.org/inciduntveniamdistinctio.png?size=50x50&set=set1", "class": 4, "marks": 3, "passing": false, "city": "Phultala" },
    { "id": 67, "first_name": "Alysia", "last_name": "Dudhill", "email": "adudhill1u@oracle.com", "gender": "Genderfluid", "img_src": "https://robohash.org/voluptatemconsequaturdolores.png?size=50x50&set=set1", "class": 12, "marks": 21, "passing": false, "city": "Zhanxu" },
    { "id": 68, "first_name": "Silvio", "last_name": "Yegoshin", "email": "syegoshin1v@github.io", "gender": "Male", "img_src": "https://robohash.org/istequiavel.png?size=50x50&set=set1", "class": 5, "marks": 38, "passing": true, "city": "Lukulu" },
    { "id": 69, "first_name": "Darbie", "last_name": "Starkey", "email": "dstarkey1w@cbc.ca", "gender": "Female", "img_src": "https://robohash.org/voluptatemtemporasapiente.png?size=50x50&set=set1", "class": 3, "marks": 52, "passing": false, "city": "Regueiro" },
    { "id": 70, "first_name": "Sophi", "last_name": "Fucher", "email": "sfucher1x@wikia.com", "gender": "Female", "img_src": "https://robohash.org/enimsedillo.png?size=50x50&set=set1", "class": 12, "marks": 31, "passing": true, "city": "Mahanoro" },
    { "id": 71, "first_name": "Warner", "last_name": "Dirkin", "email": "wdirkin1y@nydailynews.com", "gender": "Male", "img_src": "https://robohash.org/eligendiquiadoloremque.png?size=50x50&set=set1", "class": 6, "marks": 56, "passing": false, "city": "Žandov" },
    { "id": 72, "first_name": "Randal", "last_name": "Salmons", "email": "rsalmons1z@cargocollective.com", "gender": "Male", "img_src": "https://robohash.org/praesentiumvoluptasmaiores.png?size=50x50&set=set1", "class": 12, "marks": 5, "passing": true, "city": "Al Qāmishlī" },
    { "id": 73, "first_name": "Ogden", "last_name": "Rowthorne", "email": "orowthorne20@state.tx.us", "gender": "Male", "img_src": "https://robohash.org/doloresillumat.png?size=50x50&set=set1", "class": 3, "marks": 12, "passing": false, "city": "Sanbao" },
    { "id": 74, "first_name": "Adelaide", "last_name": "Brewster", "email": "abrewster21@phpbb.com", "gender": "Female", "img_src": "https://robohash.org/dolorquidoloremque.png?size=50x50&set=set1", "class": 5, "marks": 82, "passing": true, "city": "Concepción de Ataco" },
    { "id": 75, "first_name": "Maximilian", "last_name": "Beresfore", "email": "mberesfore22@ox.ac.uk", "gender": "Male", "img_src": "https://robohash.org/essenihilvoluptate.png?size=50x50&set=set1", "class": 1, "marks": 51, "passing": true, "city": "Topola" },
    { "id": 76, "first_name": "Gill", "last_name": "Doneld", "email": "gdoneld23@cnn.com", "gender": "Male", "img_src": "https://robohash.org/repudiandaeverocumque.png?size=50x50&set=set1", "class": 9, "marks": 35, "passing": true, "city": "Bilqās" },
    { "id": 77, "first_name": "Garrick", "last_name": "Ferreo", "email": "gferreo24@fastcompany.com", "gender": "Male", "img_src": "https://robohash.org/enimexercitationemlaudantium.png?size=50x50&set=set1", "class": 8, "marks": 87, "passing": true, "city": "Ise" },
    { "id": 78, "first_name": "Bartel", "last_name": "Lugard", "email": "blugard25@typepad.com", "gender": "Male", "img_src": "https://robohash.org/atqueconsequaturvel.png?size=50x50&set=set1", "class": 12, "marks": 37, "passing": false, "city": "Oslo" },
    { "id": 79, "first_name": "Herve", "last_name": "Beller", "email": "hbeller26@geocities.com", "gender": "Male", "img_src": "https://robohash.org/quodnonnesciunt.png?size=50x50&set=set1", "class": 1, "marks": 70, "passing": false, "city": "Nakasongola" },
    { "id": 80, "first_name": "Janenna", "last_name": "Pallesen", "email": "jpallesen27@shinystat.com", "gender": "Female", "img_src": "https://robohash.org/omnisquasivoluptas.png?size=50x50&set=set1", "class": 3, "marks": 68, "passing": true, "city": "Budënnovsk" },
    { "id": 81, "first_name": "Karly", "last_name": "Belmont", "email": "kbelmont28@booking.com", "gender": "Female", "img_src": "https://robohash.org/temporevelitsint.png?size=50x50&set=set1", "class": 6, "marks": 52, "passing": true, "city": "Sịa" },
    { "id": 82, "first_name": "Yanaton", "last_name": "Grasser", "email": "ygrasser29@bravesites.com", "gender": "Male", "img_src": "https://robohash.org/suscipitnisiquia.png?size=50x50&set=set1", "class": 5, "marks": 43, "passing": true, "city": "Tenjolaya" },
    { "id": 83, "first_name": "Giordano", "last_name": "Stanlack", "email": "gstanlack2a@wordpress.org", "gender": "Male", "img_src": "https://robohash.org/modisintaliquid.png?size=50x50&set=set1", "class": 2, "marks": 17, "passing": false, "city": "Kuybyshev" },
    { "id": 84, "first_name": "Vergil", "last_name": "Kelner", "email": "vkelner2b@ihg.com", "gender": "Male", "img_src": "https://robohash.org/etremsuscipit.png?size=50x50&set=set1", "class": 10, "marks": 85, "passing": true, "city": "Извор" },
    { "id": 85, "first_name": "Marjorie", "last_name": "Crimes", "email": "mcrimes2c@lulu.com", "gender": "Female", "img_src": "https://robohash.org/velitinaccusantium.png?size=50x50&set=set1", "class": 10, "marks": 76, "passing": false, "city": "Oklahoma City" },
    { "id": 86, "first_name": "Cullen", "last_name": "Lawlings", "email": "clawlings2d@ow.ly", "gender": "Male", "img_src": "https://robohash.org/autpraesentiumminima.png?size=50x50&set=set1", "class": 9, "marks": 66, "passing": false, "city": "Kazanlŭk" },
    { "id": 87, "first_name": "Shayla", "last_name": "Tuft", "email": "stuft2e@plala.or.jp", "gender": "Polygender", "img_src": "https://robohash.org/delenitiquaeratullam.png?size=50x50&set=set1", "class": 11, "marks": 67, "passing": false, "city": "San Jerónimo" },
    { "id": 88, "first_name": "Martguerita", "last_name": "Seyffert", "email": "mseyffert2f@springer.com", "gender": "Female", "img_src": "https://robohash.org/estessesit.png?size=50x50&set=set1", "class": 12, "marks": 70, "passing": false, "city": "Malec" },
    { "id": 89, "first_name": "Valera", "last_name": "Scullard", "email": "vscullard2g@europa.eu", "gender": "Female", "img_src": "https://robohash.org/quiaexercitationemconsequatur.png?size=50x50&set=set1", "class": 10, "marks": 85, "passing": true, "city": "Umi" },
    { "id": 90, "first_name": "Saleem", "last_name": "Pocklington", "email": "spocklington2h@time.com", "gender": "Male", "img_src": "https://robohash.org/vitaeadest.png?size=50x50&set=set1", "class": 9, "marks": 79, "passing": false, "city": "Santa Rosa de Aguán" },
    { "id": 91, "first_name": "Vincenz", "last_name": "Mangeney", "email": "vmangeney2i@studiopress.com", "gender": "Non-binary", "img_src": "https://robohash.org/utquiut.png?size=50x50&set=set1", "class": 2, "marks": 15, "passing": true, "city": "Podu" },
    { "id": 92, "first_name": "Hildy", "last_name": "Skrzynski", "email": "hskrzynski2j@1und1.de", "gender": "Female", "img_src": "https://robohash.org/quononesse.png?size=50x50&set=set1", "class": 10, "marks": 93, "passing": true, "city": "Monkey Hill" },
    { "id": 93, "first_name": "Devan", "last_name": "Cuer", "email": "dcuer2k@jigsy.com", "gender": "Female", "img_src": "https://robohash.org/animiprovidentsed.png?size=50x50&set=set1", "class": 5, "marks": 71, "passing": false, "city": "New Kingston" },
    { "id": 94, "first_name": "Samuele", "last_name": "Woodward", "email": "swoodward2l@prweb.com", "gender": "Male", "img_src": "https://robohash.org/eumaenim.png?size=50x50&set=set1", "class": 1, "marks": 51, "passing": true, "city": "Bangued" },
    { "id": 95, "first_name": "Skell", "last_name": "Oxby", "email": "soxby2m@1688.com", "gender": "Male", "img_src": "https://robohash.org/etnumquamvoluptates.png?size=50x50&set=set1", "class": 10, "marks": 53, "passing": false, "city": "Oslo" },
    { "id": 96, "first_name": "Doria", "last_name": "Labbe", "email": "dlabbe2n@sun.com", "gender": "Female", "img_src": "https://robohash.org/similiquevoluptateconsequuntur.png?size=50x50&set=set1", "class": 7, "marks": 95, "passing": false, "city": "Guchang" },
    { "id": 97, "first_name": "Livy", "last_name": "MacCleay", "email": "lmaccleay2o@bravesites.com", "gender": "Female", "img_src": "https://robohash.org/remdoloreset.png?size=50x50&set=set1", "class": 6, "marks": 50, "passing": true, "city": "Alexandria" },
    { "id": 98, "first_name": "Drugi", "last_name": "Bordone", "email": "dbordone2p@slate.com", "gender": "Male", "img_src": "https://robohash.org/autminimanulla.png?size=50x50&set=set1", "class": 4, "marks": 63, "passing": true, "city": "Senekal" },
    { "id": 99, "first_name": "Gordon", "last_name": "Vieyra", "email": "gvieyra2q@geocities.com", "gender": "Male", "img_src": "https://robohash.org/nullaeumaut.png?size=50x50&set=set1", "class": 11, "marks": 59, "passing": false, "city": "Nīkshahr" },
    { "id": 100, "first_name": "Zoe", "last_name": "Moorhead", "email": "zmoorhead2r@sfgate.com", "gender": "Female", "img_src": "https://robohash.org/fugiatcorporisdeleniti.png?size=50x50&set=set1", "class": 8, "marks": 43, "passing": true, "city": "Makin Village" }
];

window.onload = function () {
    displayStudents(students);
};

function displayStudents(studentArray) {
    const tableBody = document.getElementById("studentsTable").getElementsByTagName('tbody')[0];
    tableBody.innerHTML = "";
    studentArray.forEach(student => {
        const status = student.passing ? "Passing" : "Failed";
        const row = `<tr>
                        <td>${student.id}</td>
                        <td><img src="${student.img_src}" alt="Student Image">${student.first_name} ${student.last_name}</td>
                        <td>${student.gender}</td>
                        <td>${student.class}</td>
                        <td>${student.marks}</td>
                        <td>${student.email}</td>
                        <td>${status}</td>
                     </tr>`;
        tableBody.innerHTML += row;
    });
}

function Search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.first_name.toLowerCase().includes(input) ||
        student.last_name.toLowerCase().includes(input) ||
        student.email.toLowerCase().includes(input)
    );
    displayStudents(filteredStudents);
}

function sortByNameAsc() {
    const sortedStudents = [...students].sort((a, b) => `${a.first_name} ${a.last_name}`.localeCompare(`${b.first_name} ${b.last_name}`));
    displayStudents(sortedStudents);
}

function sortByNameDesc() {
    const sortedStudents = [...students].sort((a, b) => `${b.first_name} ${b.last_name}`.localeCompare(`${a.first_name} ${a.last_name}`));
    displayStudents(sortedStudents);
}

function sortByMarks() {
    const sortedStudents = [...students].sort((a, b) => a.marks - b.marks);
    displayStudents(sortedStudents);
}

function sortByPassing() {
    const passingStudents = students.filter(student => student.passing);
    displayStudents(passingStudents);
}

function sortByClass() {
    const sortedStudents = [...students].sort((a, b) => a.class - b.class);
    displayStudents(sortedStudents);
}

function sortByGender() {
    const maleStudents = students.filter(student => student.gender === "Male");
    const femaleStudents = students.filter(student => student.gender === "Female");


    displayStudents(maleStudents);
    displayStudents(femaleStudents);
}


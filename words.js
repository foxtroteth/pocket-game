// Word pairs: [wordA, wordB, category]. Each game picks one pair from the
// selected category (or any category when random); the two words go to
// civilians and spies at random. Both lists use single-word entries from the
// same category that are clearly different rather than close synonyms.
window.WORD_CATEGORIES = [
  { id: `places`, en: `Places`, idName: `Tempat` },
  { id: `things`, en: `Things`, idName: `Benda` },
  { id: `food`, en: `Food & drink`, idName: `Makanan` },
  { id: `animals`, en: `Animals`, idName: `Hewan` },
  { id: `people`, en: `Jobs & people`, idName: `Orang` },
  { id: `activities`, en: `Activities`, idName: `Aktivitas` },
  { id: `transport`, en: `Transport`, idName: `Transportasi` },
  { id: `nature`, en: `Nature`, idName: `Alam` },
  { id: `clothing`, en: `Clothing`, idName: `Pakaian` },
  { id: `fun`, en: `Fun`, idName: `Hiburan` },
];

window.WORD_PAIRS = (() => {
  const en = [];
  const id = [];
  const add = (list, cat, pairs) => pairs.forEach(p => list.push([p[0], p[1], cat]));

  add(en, `places`, [
    [`Beach`, `Pool`], [`Hotel`, `Hospital`], [`Cinema`, `Opera`], [`Library`, `Bookstore`],
    [`Pyramid`, `Castle`], [`Kitchen`, `Bathroom`], [`Bank`, `ATM`], [`Gym`, `Stadium`],
    [`Zoo`, `Aquarium`], [`Airport`, `Harbor`], [`Mall`, `Market`], [`Church`, `Mosque`],
    [`Park`, `Garden`], [`Elevator`, `Escalator`], [`Cafe`, `Restaurant`], [`School`, `Factory`],
    [`Museum`, `Theater`], [`Nightclub`, `Karaoke`], [`Farm`, `Vineyard`], [`Prison`, `Courtroom`],
    [`Lighthouse`, `Watchtower`], [`Casino`, `Arcade`], [`Cabin`, `Hostel`],
  ]);
  add(en, `things`, [
    [`Chair`, `Sofa`], [`Pen`, `Marker`], [`Toothbrush`, `Comb`], [`Laptop`, `Tablet`],
    [`Pillow`, `Blanket`], [`Teapot`, `Toaster`], [`Phone`, `Radio`], [`Candle`, `Lamp`],
    [`Map`, `GPS`], [`Umbrella`, `Raincoat`], [`Soap`, `Shampoo`], [`Window`, `Door`],
    [`Hammer`, `Screwdriver`], [`Bucket`, `Mop`], [`Knife`, `Scissors`], [`Watch`, `Calendar`],
    [`Fan`, `Heater`], [`Camera`, `Telescope`], [`Nail`, `Bolt`], [`Jar`, `Can`],
    [`Broom`, `Vacuum`], [`Rope`, `Chain`], [`Spoon`, `Fork`], [`Piano`, `Flute`],
    [`Guitar`, `Violin`], [`Book`, `Newspaper`],
  ]);
  add(en, `food`, [
    [`Coffee`, `Tea`], [`Burger`, `Sandwich`], [`Apple`, `Pear`], [`Bread`, `Cake`], [`Pizza`, `Pasta`],
    [`Milk`, `Yogurt`], [`Rice`, `Noodles`], [`Sundae`, `Popsicle`], [`Chocolate`, `Cookie`],
    [`Egg`, `Chicken`], [`Mango`, `Papaya`], [`Pancake`, `Waffle`], [`Honey`, `Jam`],
    [`Watermelon`, `Pineapple`], [`Sushi`, `Ramen`], [`Orange`, `Lemon`], [`Pepper`, `Chili`],
    [`Cheese`, `Butter`], [`Lemonade`, `Soda`], [`Popcorn`, `Pretzel`],
  ]);
  add(en, `animals`, [
    [`Lion`, `Tiger`], [`Shark`, `Dolphin`], [`Bee`, `Ant`], [`Penguin`, `Seal`],
    [`Hamster`, `Rabbit`], [`Snake`, `Frog`], [`Horse`, `Camel`], [`Cow`, `Goat`],
    [`Owl`, `Eagle`], [`Whale`, `Elephant`], [`Crab`, `Octopus`], [`Spider`, `Scorpion`],
    [`Duck`, `Swan`], [`Wolf`, `Bear`], [`Parrot`, `Peacock`], [`Turtle`, `Snail`],
    [`Giraffe`, `Zebra`], [`Pig`, `Deer`], [`Bat`, `Squirrel`], [`Cat`, `Dog`], [`Butterfly`, `Beetle`],
  ]);
  add(en, `people`, [
    [`Doctor`, `Nurse`], [`Teacher`, `Student`], [`Police`, `Soldier`], [`Dentist`, `Barber`],
    [`Bride`, `Groom`], [`Chef`, `Butcher`], [`Pilot`, `Steward`],
    [`Waiter`, `Bartender`], [`Lawyer`, `Judge`], [`Farmer`, `Fisherman`], [`Singer`, `Dancer`],
    [`Actor`, `Model`], [`Firefighter`, `Lifeguard`], [`Photographer`, `Journalist`],
    [`Astronaut`, `Diver`], [`Priest`, `Monk`], [`Plumber`, `Electrician`], [`Tailor`, `Hairdresser`],
    [`President`, `Mayor`], [`Celebrity`, `Politician`], [`Uncle`, `Aunt`], [`Neighbor`, `Landlord`],
  ]);
  add(en, `activities`, [
    [`Football`, `Basketball`], [`Skiing`, `Surfing`], [`Gym`, `Jogging`], [`Chess`, `Checkers`],
    [`Fishing`, `Hunting`], [`Painting`, `Sculpting`], [`Reading`, `Writing`], [`Swimming`, `Diving`],
    [`Boxing`, `Wrestling`], [`Tennis`, `Badminton`], [`Golf`, `Bowling`], [`Camping`, `Hiking`],
    [`Knitting`, `Pottery`], [`Cooking`, `Baking`], [`Dancing`, `Gymnastics`], [`Cards`, `Puzzles`],
    [`Photography`, `Filming`], [`Yoga`, `Climbing`], [`Gardening`, `Foraging`], [`Running`, `Cycling`],
    [`Kiss`, `Hug`],
  ]);
  add(en, `transport`, [
    [`Train`, `Bus`], [`Car`, `Motorbike`], [`Airplane`, `Helicopter`], [`Bicycle`, `Scooter`],
    [`Boat`, `Ship`], [`Submarine`, `Speedboat`], [`Taxi`, `Limousine`], [`Truck`, `Wagon`],
    [`Tram`, `Subway`], [`Rocket`, `Satellite`], [`Ferry`, `Yacht`], [`Jeep`, `Tractor`],
    [`Rickshaw`, `Tricycle`], [`Skateboard`, `Segway`], [`Canoe`, `Raft`],
    [`Drone`, `Glider`], [`Carriage`, `Sleigh`], [`Ambulance`, `Hearse`],
    [`Van`, `Trolley`], [`Kayak`, `Surfboard`], [`Blimp`, `Parachute`],
  ]);
  add(en, `nature`, [
    [`Sun`, `Moon`], [`Rain`, `Snow`], [`River`, `Lake`], [`Mountain`, `Volcano`],
    [`Desert`, `Jungle`], [`Fire`, `Lightning`], [`Rose`, `Tulip`], [`Fog`, `Smoke`],
    [`Rainbow`, `Sunset`], [`Hill`, `Cliff`], [`Forest`, `Meadow`], [`Storm`, `Blizzard`],
    [`Thunder`, `Earthquake`], [`Star`, `Comet`], [`Cave`, `Tunnel`], [`Waterfall`, `Fountain`],
    [`Tree`, `Bush`], [`Sand`, `Mud`], [`Island`, `Peninsula`], [`Wave`, `Tide`], [`Ice`, `Hail`],
  ]);
  add(en, `clothing`, [
    [`Shirt`, `Jacket`], [`Sock`, `Shoe`], [`Lipstick`, `Mascara`], [`Anklet`, `Bracelet`],
    [`Tattoo`, `Piercing`], [`Dress`, `Skirt`], [`Gloves`, `Leggings`], [`Glasses`, `Visor`],
    [`Scarf`, `Tie`], [`Belt`, `Suspenders`], [`Boots`, `Sandals`], [`Jeans`, `Shorts`],
    [`Ring`, `Necklace`], [`Sweater`, `Blouse`], [`Swimsuit`, `Underwear`], [`Pajamas`, `Bathrobe`],
    [`Helmet`, `Cap`], [`Slippers`, `Sneakers`], [`Crown`, `Veil`], [`Backpack`, `Briefcase`],
  ]);
  add(en, `fun`, [
    [`Wedding`, `Birthday`], [`Facebook`, `Instagram`], [`Netflix`, `YouTube`], [`Ghost`, `Zombie`],
    [`Vampire`, `Werewolf`], [`Superman`, `Batman`], [`Pirate`, `Ninja`], [`Clown`, `Magician`],
    [`Rapunzel`, `Cinderella`], [`Snowman`, `Reindeer`], [`Christmas`, `Easter`],
    [`Halloween`, `Thanksgiving`], [`TikTok`, `Snapchat`], [`Google`, `Amazon`], [`Microsoft`, `Apple`],
    [`McDonald's`, `KFC`], [`Sprite`, `Pepsi`], [`Disney`, `Warner`], [`Barbie`, `Godzilla`],
    [`Tarzan`, `Aladdin`], [`Hulk`, `Thor`], [`Fireworks`, `Confetti`], [`Carnival`, `Parade`],
    [`Fortnite`, `Minecraft`],
  ]);

  add(id, `places`, [
    [`Pasar`, `Mal`], [`Bioskop`, `Opera`], [`Kafe`, `Warung`], [`Sekolah`, `Laboratorium`],
    [`Masjid`, `Gereja`], [`Museum`, `Teater`], [`Dapur`, `Gudang`], [`Bandara`, `Stasiun`],
    [`Rumah`, `Apartemen`], [`Kantor`, `Pabrik`], [`Taman`, `Lapangan`], [`Klinik`, `Apotek`],
    [`Terminal`, `Pelabuhan`], [`Toko`, `Bengkel`], [`Perpustakaan`, `Auditorium`],
    [`Hotel`, `Kontrakan`], [`Penjara`, `Istana`],
  ]);
  add(id, `things`, [
    [`Meja`, `Kursi`], [`Pulpen`, `Spidol`], [`Bantal`, `Sprei`], [`Lilin`, `Lampu`],
    [`Jendela`, `Pintu`], [`Sapu`, `Pel`], [`Palu`, `Obeng`], [`Ember`, `Cerek`],
    [`Pisau`, `Gunting`], [`Dompet`, `Tas`], [`Kulkas`, `Lemari`], [`Kompor`, `Oven`],
    [`Kipas`, `Setrika`], [`Teko`, `Cangkir`], [`Piring`, `Mangkuk`], [`Kertas`, `Kardus`],
    [`Rak`, `Laci`], [`Selimut`, `Kasur`], [`Sendok`, `Garpu`], [`Sabun`, `Sampo`],
    [`Sikat`, `Sisir`], [`Jam`, `Kalender`], [`Gelas`, `Botol`], [`Televisi`, `Radio`],
    [`Laptop`, `Tablet`], [`Kunci`, `Gembok`], [`Obor`, `Senter`], [`Sofa`, `Karpet`],
  ]);
  add(id, `food`, [
    [`Nasi`, `Kentang`], [`Bakso`, `Soto`], [`Sate`, `Gulai`], [`Rendang`, `Opor`],
    [`Tempe`, `Tahu`], [`Kerupuk`, `Kacang`], [`Sambal`, `Kecap`], [`Garam`, `Gula`],
    [`Durian`, `Nangka`], [`Mangga`, `Pepaya`], [`Salak`, `Rambutan`], [`Pisang`, `Apel`],
    [`Roti`, `Kue`], [`Susu`, `Yoghurt`], [`Kopi`, `Teh`], [`Sirup`, `Jus`],
    [`Telur`, `Ayam`], [`Madu`, `Selai`], [`Cokelat`, `Permen`], [`Keju`, `Mentega`],
    [`Semangka`, `Nanas`], [`Jeruk`, `Anggur`], [`Martabak`, `Piza`],
  ]);
  add(id, `animals`, [
    [`Kucing`, `Anjing`], [`Singa`, `Harimau`], [`Hiu`, `Paus`], [`Lebah`, `Kumbang`],
    [`Kelinci`, `Hamster`], [`Ular`, `Kadal`], [`Ayam`, `Bebek`], [`Sapi`, `Kambing`],
    [`Kuda`, `Gajah`], [`Monyet`, `Kancil`], [`Cicak`, `Katak`], [`Ngengat`, `Capung`],
    [`Buaya`, `Komodo`], [`Pinguin`, `Beruang`], [`Merpati`, `Elang`], [`Cumi`, `Kerang`],
    [`Kepiting`, `Udang`], [`Tikus`, `Landak`], [`Ikan`, `Penyu`], [`Badak`, `Zebra`],
  ]);
  add(id, `people`, [
    [`Dokter`, `Perawat`], [`Guru`, `Murid`], [`Polisi`, `Tentara`], [`Pilot`, `Pramugari`],
    [`Petani`, `Nelayan`], [`Koki`, `Pelayan`], [`Bidan`, `Apoteker`], [`Penyanyi`, `Penari`],
    [`Aktor`, `Model`], [`Pengacara`, `Hakim`], [`Satpam`, `Kurir`], [`Pelaut`, `Penyelam`],
    [`Sopir`, `Masinis`], [`Pengantin`, `Penghulu`], [`Paman`, `Bibi`], [`Kakak`, `Adik`],
    [`Sepupu`, `Tetangga`], [`Wartawan`, `Fotografer`], [`Mahasiswa`, `Dosen`], [`Atlet`, `Pelatih`],
  ]);
  add(id, `activities`, [
    [`Futsal`, `Voli`], [`Renang`, `Selam`], [`Lari`, `Bersepeda`], [`Mancing`, `Berburu`],
    [`Nyanyi`, `Menonton`], [`Baca`, `Nulis`], [`Melukis`, `Menari`], [`Layangan`, `Kelereng`],
    [`Silat`, `Karate`], [`Yoga`, `Panjat`], [`Berkebun`, `Memasak`], [`Memanah`, `Berkuda`],
    [`Mendaki`, `Berkemah`], [`Catur`, `Kartu`], [`Belanja`, `Berwisata`], [`Mengobrol`, `Bercanda`],
    [`Menjahit`, `Memanggang`],
  ]);
  add(id, `transport`, [
    [`Kereta`, `Bus`], [`Mobil`, `Motor`], [`Pesawat`, `Helikopter`], [`Kapal`, `Perahu`],
    [`Angkot`, `Bajaj`], [`Becak`, `Delman`], [`Truk`, `Traktor`], [`Sepeda`, `Skuter`],
    [`Ambulans`, `Damkar`], [`Taksi`, `Ojek`], [`Feri`, `Sampan`], [`Kano`, `Rakit`],
    [`Roket`, `Kapsul`], [`Balon`, `Parasut`], [`Trem`, `Monorel`],
  ]);
  add(id, `nature`, [
    [`Matahari`, `Bulan`], [`Hujan`, `Salju`], [`Gunung`, `Lembah`], [`Sungai`, `Danau`],
    [`Gurun`, `Hutan`], [`Laut`, `Pantai`], [`Pulau`, `Rawa`], [`Kabut`, `Embun`],
    [`Petir`, `Badai`], [`Banjir`, `Kemarau`], [`Gempa`, `Tsunami`], [`Awan`, `Meteor`],
    [`Bintang`, `Senja`], [`Pasir`, `Lumpur`], [`Pelangi`, `Gerhana`], [`Batu`, `Gua`],
    [`Api`, `Debu`], [`Jurang`, `Bukit`],
  ]);
  add(id, `clothing`, [
    [`Sandal`, `Sepatu`], [`Kemeja`, `Jas`], [`Celana`, `Rok`], [`Topi`, `Jilbab`],
    [`Batik`, `Kebaya`], [`Hijab`, `Sarung`], [`Jam`, `Gelang`], [`Cincin`, `Kalung`],
    [`Tato`, `Tindik`], [`Kacamata`, `Masker`], [`Bando`, `Kancing`], [`Dasi`, `Sabuk`],
    [`Anting`, `Mahkota`], [`Daster`, `Sweater`], [`Kaos`, `Jaket`], [`Rompi`, `Mantel`],
  ]);
  add(id, `fun`, [
    [`Lebaran`, `Natal`], [`Imlek`, `Nyepi`], [`Pocong`, `Kuntilanak`], [`Tuyul`, `Genderuwo`],
    [`Wayang`, `Barongsai`], [`Badut`, `Pesulap`], [`Pernikahan`, `Pesta`], [`Instagram`, `TikTok`],
    [`Shopee`, `Tokopedia`], [`Sinetron`, `Film`], [`Doraemon`, `Naruto`], [`Spiderman`, `Batman`],
    [`Konser`, `Pameran`], [`Mercon`, `Lampion`], [`Komedi`, `Drama`], [`Sirkus`, `Pantomim`],
    [`Dangdut`, `Keroncong`], [`Angklung`, `Gamelan`], [`Gitar`, `Biola`], [`Buku`, `Koran`],
    [`Mudik`, `Liburan`],
  ]);

  return { en, id };
})();

const items = [
  {
    id: 0,
    name: "Tea Paper Cup",
    price: 46,
    image:
      "https://s3-alpha-sig.figma.com/img/a528/ad19/533048000dfb97b86f3d362c5162dad9?Expires=1698624000&Signature=Xdrtr07Gc6Ygai0bWUUNKJ6SEsjfdvkoVjW381jGA99xzgj4Es8KRQ9Xm3eZrl7EIln9fiEOTiua3pyueB2TIlXHIl7pbfdSuIEgoNbOT6tdlBdgl2rwZZvVfw8RKvONX~PINZl5UUf8eY0aiplV9nI11k0spKYYfLRyKURppOn2248SXAzIVlKVOE2FVYPt~2K4iJK~2xgo4zFKZhygkwdC~dfVH~2s84YYHRvTpekDRYrW99OUmhvjgauAVlYdUmtESNMC4b21lN8AASssqTHgbc9cnPkmEptCaTtDLz70zXUP~IJjVa5fck09yJbAFR4n-J1JCFI~DVu5clQxSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 1,
    name: "Coco Cup",
    price: 51,
    image:
      "https://www.figma.com/file/3ZbL0GGef8688jlTXQUw8A/image/247c840644eafd609167ff07284bea436b8acb63",
  },
  {
    id: 2,
    name: "Paper Pouch",
    price: 59,
    image:
      "https://s3-alpha-sig.figma.com/img/4953/13fa/131332be9c55995b86f3632240680432?Expires=1698624000&Signature=f-EAt9R3ovpdArbBMFyEoE~6ypOegSx7PwbxmUhuCJ~yDNPrwMQAM64AO4leud9OWumNgM1ga22mb~5TVUrEZ3k73mpIfhvgtfxL9VnAFIzKLkLO88URhugt0ZUsHb7H8AKKGzv~DcztTry9TgNBZz1Zvfml~JA9z8YaNu0cjIhX0Y0YnxqQVnycaJspKq3TLzCoHCcsPkxlP9U10dP2Lql~BQMnzZTPHV878JJVPKLYVcLSlHk4IRcBcvuHepkz-ovDtRnSqHNwSvKvnILUELnw1XnicRTKCF3qRPpXxXBgKQSd796TXv0wZQcafwBjFuEseDGVcsHmvjPM6UdsGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    name: "Coffee Cup",
    price: 51,
    image:
      "https://s3-alpha-sig.figma.com/img/a18d/0176/c9b9a231b9885a4fe22a6387ed35e495?Expires=1698624000&Signature=oaDFA3F1LtLTD~giZLzV9mmlo~-TkybN7rO3ZbeUf1HrUeg5DalvRSXVSk9Zaqg6if7rhhBWfqHg24slNr4M290lOSTfSkdLq6lVw8xwtAi2uwpTbbC7Or5x8zepisek7Q6D3mLL~XOIiaBxzYPUW30oWCuG1WS8afCBYRM8T-9dRdA7iaIxIMKfczSVWQod4nZ1P5hyiuLW3NDBhgk69S2uOLXIcOezXICi2d0SyRFQ~JZ0jYiViR~TCp-18jyZwCalVnR67ATzt22aYvaWX1Zv~aYzYONfIYl~TA6FC4LPPbo7Uikk~yA5TRNBQxhYmJaPwKUeLdE1G4oZ9ukVzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 4,
    name: "Tea Paper Cup",
    price: 46,
    image:
      "https://s3-alpha-sig.figma.com/img/a528/ad19/533048000dfb97b86f3d362c5162dad9?Expires=1698624000&Signature=Xdrtr07Gc6Ygai0bWUUNKJ6SEsjfdvkoVjW381jGA99xzgj4Es8KRQ9Xm3eZrl7EIln9fiEOTiua3pyueB2TIlXHIl7pbfdSuIEgoNbOT6tdlBdgl2rwZZvVfw8RKvONX~PINZl5UUf8eY0aiplV9nI11k0spKYYfLRyKURppOn2248SXAzIVlKVOE2FVYPt~2K4iJK~2xgo4zFKZhygkwdC~dfVH~2s84YYHRvTpekDRYrW99OUmhvjgauAVlYdUmtESNMC4b21lN8AASssqTHgbc9cnPkmEptCaTtDLz70zXUP~IJjVa5fck09yJbAFR4n-J1JCFI~DVu5clQxSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 5,
    name: "Coco Cup",
    price: 51,
    image:
      "https://www.figma.com/file/3ZbL0GGef8688jlTXQUw8A/image/247c840644eafd609167ff07284bea436b8acb63",
  },
  {
    id: 6,
    name: "Paper Pouch",
    price: 59,
    image:
      "https://s3-alpha-sig.figma.com/img/4953/13fa/131332be9c55995b86f3632240680432?Expires=1698624000&Signature=f-EAt9R3ovpdArbBMFyEoE~6ypOegSx7PwbxmUhuCJ~yDNPrwMQAM64AO4leud9OWumNgM1ga22mb~5TVUrEZ3k73mpIfhvgtfxL9VnAFIzKLkLO88URhugt0ZUsHb7H8AKKGzv~DcztTry9TgNBZz1Zvfml~JA9z8YaNu0cjIhX0Y0YnxqQVnycaJspKq3TLzCoHCcsPkxlP9U10dP2Lql~BQMnzZTPHV878JJVPKLYVcLSlHk4IRcBcvuHepkz-ovDtRnSqHNwSvKvnILUELnw1XnicRTKCF3qRPpXxXBgKQSd796TXv0wZQcafwBjFuEseDGVcsHmvjPM6UdsGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 7,
    name: "Coffee Cup",
    price: 51,
    image:
      "https://s3-alpha-sig.figma.com/img/a18d/0176/c9b9a231b9885a4fe22a6387ed35e495?Expires=1698624000&Signature=oaDFA3F1LtLTD~giZLzV9mmlo~-TkybN7rO3ZbeUf1HrUeg5DalvRSXVSk9Zaqg6if7rhhBWfqHg24slNr4M290lOSTfSkdLq6lVw8xwtAi2uwpTbbC7Or5x8zepisek7Q6D3mLL~XOIiaBxzYPUW30oWCuG1WS8afCBYRM8T-9dRdA7iaIxIMKfczSVWQod4nZ1P5hyiuLW3NDBhgk69S2uOLXIcOezXICi2d0SyRFQ~JZ0jYiViR~TCp-18jyZwCalVnR67ATzt22aYvaWX1Zv~aYzYONfIYl~TA6FC4LPPbo7Uikk~yA5TRNBQxhYmJaPwKUeLdE1G4oZ9ukVzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 8,
    name: "Tea Paper Cup",
    price: 46,
    image:
      "https://s3-alpha-sig.figma.com/img/a528/ad19/533048000dfb97b86f3d362c5162dad9?Expires=1698624000&Signature=Xdrtr07Gc6Ygai0bWUUNKJ6SEsjfdvkoVjW381jGA99xzgj4Es8KRQ9Xm3eZrl7EIln9fiEOTiua3pyueB2TIlXHIl7pbfdSuIEgoNbOT6tdlBdgl2rwZZvVfw8RKvONX~PINZl5UUf8eY0aiplV9nI11k0spKYYfLRyKURppOn2248SXAzIVlKVOE2FVYPt~2K4iJK~2xgo4zFKZhygkwdC~dfVH~2s84YYHRvTpekDRYrW99OUmhvjgauAVlYdUmtESNMC4b21lN8AASssqTHgbc9cnPkmEptCaTtDLz70zXUP~IJjVa5fck09yJbAFR4n-J1JCFI~DVu5clQxSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 9,
    name: "Coffee Cup",
    price: 51,
    image:
      "https://s3-alpha-sig.figma.com/img/a18d/0176/c9b9a231b9885a4fe22a6387ed35e495?Expires=1698624000&Signature=oaDFA3F1LtLTD~giZLzV9mmlo~-TkybN7rO3ZbeUf1HrUeg5DalvRSXVSk9Zaqg6if7rhhBWfqHg24slNr4M290lOSTfSkdLq6lVw8xwtAi2uwpTbbC7Or5x8zepisek7Q6D3mLL~XOIiaBxzYPUW30oWCuG1WS8afCBYRM8T-9dRdA7iaIxIMKfczSVWQod4nZ1P5hyiuLW3NDBhgk69S2uOLXIcOezXICi2d0SyRFQ~JZ0jYiViR~TCp-18jyZwCalVnR67ATzt22aYvaWX1Zv~aYzYONfIYl~TA6FC4LPPbo7Uikk~yA5TRNBQxhYmJaPwKUeLdE1G4oZ9ukVzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export default items;

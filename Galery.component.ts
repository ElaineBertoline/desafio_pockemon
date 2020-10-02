import { Component, OnInit } from '@angular/core';
const pokemon = require('pokemontcgsdk')

// Get all cards
pokemon.card.all()
.on('data', function (card) {
  console.log(card.name)
});

// Filter Cards
pokemon.card.all({ supertype: 'pokemon', types: 'dragon|fire|flying', hp: 'gt100' })
.on('data', function (card) {
    console.log(card.name)
});

// Get cards on a specific page / pageSize
pokemon.card.where({ page: 50, pageSize: 500})
.then(cards => {
    console.log(cards[0].name)
})



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private imagesPath = 'http://localhost:4200/assets/img/';
  private images = [
    'robbin.png',
'incrediblew.png',
'arrow.png',
'flash.png',
'america.png',
'spider.png',
'wonderwoman.png',
'cat.png'
  ];

  constructor() { }

  ngOnInit() {
  }

}

{  
    "cards":[  
    {
      "id": "base5-20",
      "name": "Dark Blastoise",
      "nationalPokedexNumber": 9,
      "imageUrl": "https://images.pokemontcg.io/base5/20.png",
      "imageUrlHiRes": "https://images.pokemontcg.io/base5/20_hires.png",
      "types": [
          "Water"
      ],
      "supertype": "Pokémon",
      "subtype": "Stage 2",
      "evolvesFrom": "Wartortle",
      "hp": "70",
      "retreatCost": [
        "Colorless",
        "Colorless"
      ],
      "number": "20",
      "artist": "Mitsuhiro Arita",
      "rarity": "Rare",
      "series": "Base",
      "set": "Team Rocket",
      "setCode": "base5",
      "attacks": [
        {
          "cost": [
            "Water",
            "Water"
          ],
          "name": "Hydrocannon",
          "text": "Does 30 damage plus 20 more damage for each Energy attached to Dark Blastoise but not used to pay for this attack. You can't add more than 40 damage in this way.",
          "damage": "30+",
          "convertedEnergyCost": 2
        },
        {
          "cost": [
            "Colorless",
            "Colorless",
            "Water"
          ],
          "name": "Rocket Tackle",
          "text": "Dark Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Dark Blastoise during your opponent's next turn. (Any other effects of attacks still happen.)",
          "damage": "40",
          "convertedEnergyCost": 3
        }
      ],
      "weaknesses": [
        {
          "type": "Lightning",
          "value": "×2"
        }
      ]
    },
    { ... },
    { ... }
    ]
    }
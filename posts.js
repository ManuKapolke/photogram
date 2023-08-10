let posts = [
    {
        "author": "lauramüller",
        "profilepic": "img/profiles/zoe-fernandez--zqoE7jnQgw-unsplash_100.jpg",
        "location": "Berlin, Deutschland",
        "image": "img/berlin-gb858f3b12_640.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 123,
        "text": "Eine schöne Aussicht und ein gutes Buch - perfekter Sonntagnachmittag ☀️📖",
        "comments": [
            {
                "author": "janewagner",
                "text": "Welches Buch liest du denn gerade? 😊"
            },
            {
                "author": "maxschulz",
                "text": "Berlin hat so viele tolle Aussichtspunkte! Wo bist du denn genau?"
            }
        ],
        "hoursAgo": 2
    }
    ,
    {
        "author": "lukasmeier",
        "profilepic": "img/profiles/ben-den-engelsen-YUu9UAcOKZ4-unsplash_100.jpg",
        "location": "München, Deutschland",
        "image": "img/munich-ge5213d343_640.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 56,
        "text": "Frühlingsgefühle! 🌷🌞",
        "comments": [
            {
                "author": "annafrank",
                "text": "Ich liebe den Frühling! Was hast du heute vor?"
            },
            {
                "author": "petermueller",
                "text": "Die Sonne macht wirklich gute Laune! Genieß den Tag 😊"
            }
        ],
        "hoursAgo": 3
    }
    ,
    {
        "author": "juliaheinrich",
        "profilepic": "img/profiles/michael-dam-mEZ3PoFGs_k-unsplash_100.jpg",
        "location": "Hamburg, Deutschland",
        "image": "img/blackberries-g0bb1f0462_640.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 347,
        "text": "Ein leckeres Frühstück und eine Tasse Kaffee - perfekter Start in den Tag! ☕️🥐",
        "comments": [
            {
                "author": "lukasschmidt",
                "text": "Wo gibt es denn das beste Frühstück in Hamburg? 😋"
            },
            {
                "author": "sophiabauer",
                "text": "Da kann ich nur zustimmen! Guten Appetit 😊"
            }
        ],
        "hoursAgo": 6
    }
    ,
    {
        "author": "timkoch",
        "profilepic": "img/profiles/podpros-GEnCnYhA1J4-unsplash_100.jpg",
        "location": "Frankfurt am Main, Deutschland",
        "image": "img/leidersbach-g0e74a089e_640.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 12,
        "text": "Einfach mal raus aus der Stadt und in der Natur entspannen 🌳🌿",
        "comments": [
            {
                "author": "katharinabaum",
                "text": "Wo genau bist du denn? Sieht richtig idyllisch aus!"
            },
            {
                "author": "peterweber",
                "text": "Ich muss auch mal wieder raus aus der Stadt! Viel Spaß dabei 😊"
            }
        ],
        "hoursAgo": 6
    }
    ,
    {
        "author": "johndoe",
        "profilepic": "img/profiles/ayo-ogunseinde-sibVwORYqs0-unsplash_100.jpg",
        "location": "Central Park",
        "image": "img/architecture-g5058fc8ca_640.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 405,
        "text": "Enjoying a beautiful day in the park! 🌳☀️",
        "comments": [
            {
                "author": "janedoe",
                "text": "Looks like a great day for a picnic! 🧺🍓"
            },
            {
                "author": "bobsmith",
                "text": "I wish I could be there too! 😍"
            }
        ],
        "hoursAgo": 12
    }
    ,
    {
        "author": "sallyjones",
        "profilepic": "img/profiles/edward-cisneros-_H6wpor9mjs-unsplash_100.jpg",
        "location": "Los Angeles, California",
        "image": "img/kimberly-fowler-phwMf3V6Bu8-unsplash.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 1043,
        "text": "Just checked out the new exhibit at the Getty Museum! 🎨🖼️",
        "comments": [
            {
                "author": "peterbrown",
                "text": "I've been meaning to go there! How was it?"
            },
            {
                "author": "katewilliams",
                "text": "Love the Getty! Which exhibit did you see?"
            }
        ],
        "hoursAgo": 14
    }
    ,
    {
        "author": "annasmith",
        "profilepic": "img/profiles/christopher-campbell-rDEOVtE7vOs-unsplash_100.jpg",
        "location": "Miami Beach",
        "image": "img/juja-han-Z8-6EI2tYtw-unsplash.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 896,
        "text": "Feeling the sand between my toes! 🌴🏖️",
        "comments": [
            {
                "author": "amandasmith",
                "text": "Wish I could join you! Looks beautiful 😍"
            },
            {
                "author": "davidbrown",
                "text": "I'm so jealous! I need a vacation too 🙃"
            }
        ],
        "hoursAgo": 16
    }
    ,
    {
        "author": "emilywhite",
        "profilepic": "img/profiles/matheus-ferrero-W7b3eDUb_2I-unsplash_100.jpg",
        "location": "New York, New York",
        "image": "img/city-g8aae04c7a_640.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 88,
        "text": "Exploring the city 🗽",
        "comments": [
            {
                "author": "jasonkim",
                "text": "Well shot! Did you go up there?"
            },
            {
                "author": "rachelwu",
                "text": "Looks like a perfect day to stroll around the city!"
            }
        ],
        "hoursAgo": 21
    }
    ,
    {
        "author": "taylorjohnson",
        "profilepic": "img/profiles/luis-villasmil-hh3ViD0r0Rc-unsplash_100.jpg",
        "location": "Sydney, Australia",
        "image": "img/liam-pozz-HZvGtncWvyQ-unsplash.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 603,
        "text": "Witnessed the most amazing sunrise today! 🌅🌊",
        "comments": [
            {
                "author": "liamsmith",
                "text": "What a stunning view! 😍"
            },
            {
                "author": "gracewilson",
                "text": "I've always wanted to see a sunrise in Australia. Maybe someday!"
            }
        ],
        "hoursAgo": 21
    }
    ,
    {
        "author": "sarahlee",
        "profilepic": "img/profiles/toa-heftiba-O3ymvT7Wf9U-unsplash_100.jpg",
        "location": "San Francisco, California",
        "image": "img/jarritos-mexican-soda-PfQIG063sVQ-unsplash.jpg",
        "isMarked": false,
        "isLiked": false,
        "likes": 14109,
        "text": "Enjoying a beautiful day in Golden Gate Park 🌳☀️",
        "comments": [
            {
                "author": "mikebrown",
                "text": "Golden Gate Park is one of my favorite spots in the city! 😍"
            },
            {
                "author": "johndoe",
                "text": "Looks like the perfect place for a picnic! 🧺🍓"
            }
        ],
        "hoursAgo": 23
    }
]
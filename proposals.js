const SHOWN_PROPOSALS = 5;

let proposals = [
    {
        "name": "lauramueller",
        "profilepic": "img/profiles/zoe-fernandez--zqoE7jnQgw-unsplash_100.jpg",
        "info": "Folgt dir",
        "isFollowed": true
    },
    {
        "name": "johndoe",
        "profilepic": "img/profiles/ayo-ogunseinde-sibVwORYqs0-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "annasmith",
        "profilepic": "img/profiles/christopher-campbell-rDEOVtE7vOs-unsplash_100.jpg",
        "info": "johndoe folgt ihr",
        "isFollowed": true
    },
    {
        "name": "lukasmeier",
        "profilepic": "img/profiles/ben-den-engelsen-YUu9UAcOKZ4-unsplash_100.jpg",
        "info": "Folgt dir",
        "isFollowed": true
    },
    {
        "name": "paulawagner",
        "profilepic": "img/profiles/ben-den-engelsen-zNWlX5Sw9a4-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "juliaheinrich",
        "profilepic": "img/profiles/michael-dam-mEZ3PoFGs_k-unsplash_100.jpg",
        "info": "Folgt dir",
        "isFollowed": false
    },
    {
        "name": "emilywhite",
        "profilepic": "img/profiles/matheus-ferrero-W7b3eDUb_2I-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "sarahjohnson",
        "profilepic": "img/profiles/gian-cescon-00ByEXKcSkA-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "timkoch",
        "profilepic": "img/profiles/podpros-GEnCnYhA1J4-unsplash_100.jpg",
        "info": "Folgt dir",
        "isFollowed": true
    },
    {
        "name": "janedoe",
        "profilepic": "img/profiles/david-todd-mccarty-VGLImIsgs9A-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "stefanmeier",
        "profilepic": "img/profiles/arya-dubey-8eYI8qcEFxI-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "albertmueller",
        "profilepic": "img/profiles/ashton-bingham-EQFtEzJGERg-unsplash_100.jpg",
        "info": "Folgt dir",
        "isFollowed": true
    },
    {
        "name": "sallyjones",
        "profilepic": "img/profiles/edward-cisneros-_H6wpor9mjs-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "frankpeterson",
        "profilepic": "img/profiles/foto-sushi-6anudmpILw4-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "marieburger",
        "profilepic": "img/profiles/guillaume-bolduc-SGzbP-t1vlg-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "lisa89",
        "profilepic": "img/profiles/sarah-brown-tTdC88_6a_I-unsplash_100.jpg",
        "info": "Folgt dir",
        "isFollowed": true
    },
    {
        "name": "taylorjohnson",
        "profilepic": "img/profiles/luis-villasmil-hh3ViD0r0Rc-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "lukasmeyer",
        "profilepic": "img/profiles/john-arano-CmsCvGqpbKU-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": true
    },
    {
        "name": "katharinabauer",
        "profilepic": "img/profiles/rachel-mcdermott-0fN7Fxv1eWA-unsplash_100.jpg",
        "info": "Folgt dir",
        "isFollowed": false
    },
    {
        "name": "timothybrown",
        "profilepic": "img/profiles/james-timothy-Kh3aTWwMH1I-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": true
    },
    {
        "name": "sarahlee",
        "profilepic": "img/profiles/toa-heftiba-O3ymvT7Wf9U-unsplash_100.jpg",
        "info": "johndoe folgt ihr",
        "isFollowed": false
    },
    {
        "name": "jennyhouse",
        "profilepic": "img/profiles/vladislav-todorov-joINR2EKnvY-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "philippbaumann",
        "profilepic": "img/profiles/charlesdeluvio-K4mSJ7kc0As-unsplash_100.jpg",
        "info": "Folgt dir",
        "isFollowed": true
    },
    {
        "name": "sophiaklein",
        "profilepic": "img/profiles/charlesdeluvio-Mv9hjnEUHR4-unsplash_100.jpg",
        "info": "philippbaumann folgt ihr",
        "isFollowed": false
    },
    {
        "name": "josephgonzalez",
        "profilepic": "img/profiles/joseph-gonzalez-iFgRcqHznqg-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "sarahmueller",
        "profilepic": "img/profiles/tamara-bellis-oj2nLF70ya4-unsplash_100.jpg",
        "info": "sabrinahaas folgt ihr",
        "isFollowed": true
    },
    {
        "name": "thomaskoletic",
        "profilepic": "img/profiles/jurica-koletic-7YVZYZeITc8-unsplash_100.jpg",
        "info": "Folgt dir",
        "isFollowed": true
    },
    {
        "name": "lisafranke",
        "profilepic": "img/profiles/tamara-bellis-W12Uk0spCOA-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "stefaniebauer",
        "profilepic": "img/profiles/vince-veras-AJIqZDAUD7A-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    },
    {
        "name": "matthiasweber",
        "profilepic": "img/profiles/warren-wong-VVEwJJRRHgk-unsplash_100.jpg",
        "info": "Vorschlag für dich",
        "isFollowed": false
    }
]
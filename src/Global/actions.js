import {
  CHANGE_ACTIVATE,
  CHANGE_DEACTIVATE,
  CHANGE_DESTROY,
  CHANGE_INVENTORY_ADD,
  CHECK_ACTIVE,
  CHECK_DESTROYED,
  CHECK_DISABLED,
  CHECK_INVENTORY,
  CHECK_NOT_DESTROYED,
  CHECK_NOT_IN_INVENTORY,
} from './constants'

// TODO: Comment Actions.

const actions = {
  go: {
    7: [
      {
        conditions: [
          {
            object: 2,
            check: CHECK_NOT_DESTROYED,
          },
          {
            object: 7,
            check: CHECK_DISABLED,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [],
        description: ['Das Fenster ist verschlossen.'],
      },
      {
        conditions: [
          {
            object: 2,
            check: CHECK_DESTROYED,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [
          {
            scene: 'strand1',
          },
        ],
        description: [
          'Ich steige aus dem Fenster und stehe in Laboe am Strand!',
        ],
      },
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand1',
          },
        ],
        changes: [
          {
            scene: 'naziraum',
          },
        ],
        description: ['Ich steige wieder in den Raum hinein.'],
      },
    ],

    8: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand1',
          },
        ],
        changes: [
          {
            object: 2,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: [
          'Ich möchte mich lieber nicht unbewaffnet der Gruppe nähern. Ich brauche ein Ablenkungsmannöver.',
        ],
      },
    ],

    9: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand1',
          },
        ],
        changes: [],
        description: [
          'Ich möchte mich lieber nicht unbewaffnet der Gruppe nähern. Ich brauche ein Ablenkungsmannöver.',
        ],
      },
    ],

    10: [
      {
        conditions: [
          {
            object: 12,
            check: CHECK_NOT_IN_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand1',
          },
        ],
        changes: [
          {
            scene: 'strand2',
          },
        ],
        description: [
          'Ich springe über eine Mauer, die den Gehweg vom Sandstrand trennt. An der Mauer lehnen mehrere Dudes in Neoprenanzügen neben Surfbrettern mit Sylt-Wappen-Aufdruck.',
          'Verstrahlt stolper ich über einen Sonnensprössling mit blondgefärbter Pinselfrise und Sportsonnenbrille.',
          'Er dreht sich nach mir um und sagt: "Chrisoph?? Christoph Lobas? Was machst du denn hier?! Wie schön dich zu sehen!!! Wie gehts dir? Was machst du so? Bist du noch in Paderborn? Hab dich lang nich mehr im Resi gesehen.."',
          'Ich entgegne ein verdutztes "Ähhhm jein...?" In diesem Augenblick wird mir langsam klar um wen es sich handelt. Mir fällt nur der Name nicht ein, aber ich werde das Gefühl nicht los, dass seine Facebook Bilder nur Likes von ein und der selben Person haben.',
          'Unbeeindruckt setze ich meinen Weg fort. Vor mir erblicke ich den einzig leeren Strandkorb im sichtbaren Umkreis.',
          'Er ist rot und die Polster rot-weiß gestreift. Ich muss sofort an Pommes denken.',
          'Nur sechs - Nein! Eleven! - Krabbenlängen vom Korb entfernt spüre ich einen Windzug von rechts und sehe einen verschwommenen blonden Blitz an mir vorbei huschen.',
        ],
      },
      {
        conditions: [
          {
            object: 12,
            check: CHECK_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand1',
          },
        ],
        changes: [],
        description: ['Zu der Amazonin gehe ich lieber nicht zurück.'],
      },
    ],

    13: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand2',
          },
        ],
        changes: [
          {
            scene: 'strand1',
          },
        ],
        description: [
          'Ich gehe zurück auf den Weg vorm Haus. Dirk folgt mir fast unauffällig bis zum Strandende.',
        ],
      },
      {
        conditions: [
          {
            object: 18,
            check: CHECK_DESTROYED,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand2',
          },
        ],
        changes: [
          {
            scene: 'strand1',
          },
        ],
        description: ['Ich gehe zurück auf den Weg vorm Haus.'],
      },
      {
        conditions: [
          {
            object: 12,
            check: CHECK_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand1',
          },
        ],
        changes: [],
        description: ['Zu der Amazonin gehe ich lieber nicht zurück.'],
      },
    ],

    28: [
      {
        conditions: [
          {
            object: 25,
            check: CHECK_NOT_DESTROYED,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [],
        description: [
          'Die Tür ist fest verschlossen. Wie komme ich nur hier raus?',
        ],
      },
      {
        conditions: [
          {
            object: 25,
            check: CHECK_DESTROYED,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [
          {
            scene: 'wohnzimmer',
          },
        ],
        description: ['Ich gehe durch die Kellertür und eine Treppe hoch.'],
      },
    ],

    33: [
      {
        conditions: [
          {
            object: 33,
            check: CHECK_DISABLED,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'wohnzimmer',
          },
        ],
        changes: [],
        description: [
          'Ich möchte nicht in die Küche gehen ohne zu wissen was mich da erwartet.',
        ],
      },
      {
        conditions: [
          {
            object: 33,
            check: CHECK_ACTIVE,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'wohnzimmer',
          },
        ],
        changes: [
          {
            scene: 'kueche1',
          },
        ],
        description: [
          'Ich gehe durch die Tür in die Küche beim betreten grinsen mich zwei Lauchgestalten schief an.',
        ],
      },
      {
        conditions: [
          {
            object: 33,
            check: CHECK_ACTIVE,
          },
          {
            object: 38,
            check: CHECK_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'wohnzimmer',
          },
        ],
        changes: [
          {
            scene: 'kueche2',
          },
        ],
        description: ['Ich gehe durch die Tür in die Küche.'],
      },
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'kueche1',
          },
        ],
        changes: [
          {
            scene: 'wohnzimmer',
          },
        ],
        description: ['Ich gehe durch die Tür ins Wohnzimmer.'],
      },
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'kueche2',
          },
        ],
        changes: [
          {
            scene: 'wohnzimmer',
          },
        ],
        description: ['Ich gehe durch die Tür ins Wohnzimmer.'],
      },
    ],

    39: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'wohnzimmer',
          },
        ],
        changes: [
          {
            scene: 'vorratskeller',
          },
        ],
        description: ['Ich gehe die Treppe runter...'],
      },
    ],
  },

  take: {
    2: [
      {
        conditions: [
          {
            object: 2,
            check: CHECK_ACTIVE,
          },
          {
            object: 2,
            check: CHECK_NOT_IN_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [
          {
            object: 2,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Jetzt bin ich stolzer Besitzer eines Bretts.'],
      },
    ],

    3: [
      {
        conditions: [
          {
            object: 3,
            check: CHECK_ACTIVE,
          },
          {
            object: 3,
            check: CHECK_NOT_IN_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [
          {
            object: 3,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Etwas feucht und löchrig... Gefällt mir irgendwie.'],
      },
    ],

    4: [
      {
        conditions: [
          {
            object: 4,
            check: CHECK_ACTIVE,
          },
          {
            object: 4,
            check: CHECK_NOT_IN_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [
          {
            object: 4,
            change: CHANGE_INVENTORY_ADD,
          },
          {
            object: 5,
            change: CHANGE_ACTIVATE,
          },
          {
            object: 7,
            change: CHANGE_ACTIVATE,
          },
        ],
        description: [
          'Keine Ahnung wozu ich die je benutzen werde. Aber na gut. Hinter den "Vorhängen" liegt eine Whiskyflasche auf der Fensterbank.',
        ],
      },
    ],

    5: [
      {
        conditions: [
          {
            object: 5,
            check: CHECK_ACTIVE,
          },
          {
            object: 5,
            check: CHECK_NOT_IN_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [
          {
            object: 5,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Whisky kann man immer gebrauchen!'],
      },
    ],

    12: [
      {
        conditions: [
          {
            object: 12,
            check: CHECK_ACTIVE,
          },
          {
            object: 12,
            check: CHECK_NOT_IN_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand2',
          },
        ],
        changes: [
          {
            object: 12,
            change: CHANGE_INVENTORY_ADD,
          },
          {
            scene: 'strand1',
          },
        ],
        description: [
          'Gerade als ich das rettende Feuer an mich nehme, erscheint die 2,11m große holländische Amazonenmutter des Kindes und flucht wütend auf ihrer Muttersprache.',
          '"Klootzak bischt du Jonge! Du Fotze!"',
          'Ich ergreife geistesgegenwärtig die Flucht nach hinten zurück zu der Promenade.',
        ],
      },
    ],

    15: [
      {
        conditions: [
          {
            object: 15,
            check: CHECK_ACTIVE,
          },
          {
            object: 15,
            check: CHECK_NOT_IN_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand2',
          },
        ],
        changes: [
          {
            object: 15,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: [
          'Typisch britisch deutsche Sonnencreme 50. Sehr weiß, sehr dick.',
        ],
      },
    ],

    19: [
      {
        conditions: [
          {
            object: 19,
            check: CHECK_ACTIVE,
          },
          {
            object: 19,
            check: CHECK_NOT_IN_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'strand2',
          },
        ],
        changes: [
          {
            object: 19,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Jetzt fehlen mir nur noch weiße Tennissocken.'],
      },
    ],

    24: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [
          {
            object: 24,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Ich packe die matschige Banane in meine Tasche.'],
      },
    ],

    25: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [
          {
            object: 25,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: [
          'Ich habe zwar keine Nudeln... aber vielleicht kann man Ketchup ja auch für was anderes gebrauchen.',
        ],
      },
    ],

    26: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [
          {
            object: 26,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Ich nehme mir ein paar Zwiebeln.'],
      },
    ],

    27: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [
          {
            object: 27,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Ich nehme mir sämtliche Kartoffeln.'],
      },
    ],

    29: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [
          {
            object: 29,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: [
          'Ein metallenes Teeei findet sich jetzt in meinem Besitz.',
        ],
      },
    ],

    34: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'wohnzimmer',
          },
        ],
        changes: [
          {
            object: 34,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Biergläser sind immer praktisch.'],
      },
    ],

    36: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [
          {
            object: 36,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Damit wächst meine Muschelsammlung auf 2.'],
      },
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'wohnzimmer',
          },
        ],
        changes: [
          {
            object: 36,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Damit wächst meine Muschelsammlung auf 2.'],
      },
    ],

    37: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'wohnzimmer',
          },
        ],
        changes: [
          {
            object: 37,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Etwas alt, aber bestimmt spannend.'],
      },
    ],

    40: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'kueche1',
          },
        ],
        changes: [
          {
            object: 40,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Ich packe die Milchtüte ein.'],
      },
    ],

    41: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'kueche1',
          },
        ],
        changes: [
          {
            object: 41,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Ich packe die Milchtüte ein.'],
      },
    ],
  },

  thumbUp: [
    {
      conditions: [
        {
          object: 50,
          check: CHECK_INVENTORY,
        },
        {
          chapter: 1,
        },
        {
          place: 'kneipenterror',
        },
        {
          scene: 'bushaltestelle2',
        },
      ],
      changes: [
        {
          place: 'fahrt',
        },
        {
          scene: 'kielpb',
        },
      ],
      description: [
        'Ich halte den Daumen raus... es bleibt ein Renault Clio mit getönten Scheiben stehen...',
        '...',
        '......',
        '.........',
        '............',
        '...............',
        'Ende von Kapitel 1. Stay tuned.',
      ],
    },
  ],

  use: {
    0: [
      {
        conditions: [
          {
            object: 0,
            check: CHECK_INVENTORY,
          },
        ],
        changes: [],
        description: ['Und wie genau soll ich die anmachen?'],
      },
    ],

    1: [
      {
        conditions: [
          {
            object: 1,
            check: CHECK_ACTIVE,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [
          {
            object: 1,
            change: CHANGE_DESTROY,
          },
          {
            object: 2,
            change: CHANGE_ACTIVATE,
          },
          {
            object: 3,
            change: CHANGE_ACTIVATE,
          },
        ],
        description: [
          'Ich setze mich aufs Bett. Dabei zebricht es und sowohl das Laken als auch das Brett liegen auf dem Boden.',
        ],
      },
    ],

    5: [
      {
        conditions: [
          {
            object: 5,
            check: CHECK_ACTIVE,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [],
        description: [
          'Ernsthaft(i)? Ich hab mir vor fünf Minuten versprochen nie wieder zu trinken.',
        ],
      },
    ],

    7: [
      {
        conditions: [
          {
            object: 7,
            check: CHECK_ACTIVE,
          },
          {
            object: 2,
            check: CHECK_DESTROYED,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [
          {
            scene: 'strand1',
          },
        ],
        description: [
          'Ich steige aus dem Fenster und stehe in Laboe am Strand!',
        ],
      },
      {
        conditions: [
          {
            object: 7,
            check: CHECK_ACTIVE,
          },
          {
            chapter: 1,
          },
          {
            place: 'laboe',
          },
          {
            scene: 'naziraum',
          },
        ],
        changes: [],
        description: [
          'Es ist verschlossen. Meine Kraft reicht nicht aus um es zu öffnen.',
        ],
      },
    ],

    12: [
      {
        conditions: [
          {
            object: 12,
            check: CHECK_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'dunkelkammer',
          },
        ],
        changes: [
          {
            scene: 'vorratskeller',
          },
        ],
        description: ['Es werde Licht!'],
      },
    ],

    24: [
      {
        conditions: [
          {
            object: 24,
            check: CHECK_INVENTORY,
          },
          {
            chapter: 1,
          },
        ],
        changes: [
          {
            object: 23,
            change: CHANGE_INVENTORY_ADD,
          },
          {
            object: 24,
            change: CHANGE_DESTROY,
          },
        ],
        description: [
          'Ich esse die Banane mit 2 Bissen. Die Schale behalte ich erstma.',
        ],
      },
    ],

    28: [
      {
        conditions: [
          {
            object: 25,
            check: CHECK_NOT_DESTROYED,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [],
        description: ['Ich kann die Tür nicht öffnen.'],
      },
      {
        conditions: [
          {
            object: 25,
            check: CHECK_DESTROYED,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            scene: 'vorratskeller',
          },
        ],
        changes: [
          {
            scene: 'wohnzimmer',
          },
        ],
        description: ['Ich gehe durch die Kellertür und eine Treppe hoch.'],
      },
    ],

    41: [
      {
        conditions: [
          {
            object: 41,
            check: CHECK_INVENTORY,
          },
        ],
        changes: [
          {
            object: 41,
            change: CHANGE_DESTROY,
          },
          {
            object: 42,
            change: CHANGE_INVENTORY_ADD,
          },
        ],
        description: ['Grummel...'],
      },
    ],

    43: [
      {
        conditions: [
          {
            object: 42,
            check: CHECK_NOT_IN_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            chapter: 'kueche1',
          },
        ],
        changes: [],
        description: ['Ich kann grad nicht...'],
      },
      {
        conditions: [
          {
            object: 42,
            check: CHECK_INVENTORY,
          },
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            chapter: 'kueche1',
          },
        ],
        changes: [],
        description: ['Was soll ich auf der Toilette machen?'],
      },
    ],

    44: [
      {
        conditions: [
          {
            chapter: 1,
          },
          {
            place: 'kneipenterror',
          },
          {
            chapter: 'kueche1',
          },
        ],
        changes: [],
        description: [
          '"Hey!! Lass die Finger davon..."',
          'So lange die beiden hier aufpassen kann ich die wohl nicht benutzen.',
        ],
      },
    ],
  },

  useWith: {
    0: {
      12: [
        {
          conditions: [
            {
              object: 0,
              check: CHECK_INVENTORY,
            },
            {
              object: 12,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'bushaltestelle1',
            },
          ],
          changes: [
            {
              object: 50,
              change: CHANGE_INVENTORY_ADD,
            },
            {
              scene: 'bushaltestelle2',
            },
          ],
          description: [
            'Lässig drehe ich mir ne Kippe, stecke sie an und als ich gerade das erste mal ziehen will taucht der Bus auf.',
            'Die Gruppe hungriger und heißer Proleten stürmt bei Gelächter und Geprotze in den Bus.',
            'Sie rufen mich: "Hey Hosenlo(s)batz... komm ran hier!"',
            'Ich steige zu ihnen ein.',
            'Kurz bevor die Türen schließen überlege ich es mir anders: Ich springe elegant aus dem Bus und stürze dabei auf den Kaktus. Es bleiben ein paar Stacheln in meiner Hand stecken.',
            'Der Bus fährt ab, ich packe die Stacheln vorsichtig ein und bin jetzt alleine.',
          ],
        },
        {
          conditions: [
            {
              object: 0,
              check: CHECK_INVENTORY,
            },
            {
              object: 12,
              check: CHECK_INVENTORY,
            },
          ],
          changes: [],
          description: ['Ich will grad nicht rauchen...'],
        },
      ],
    },

    2: {
      7: [
        {
          conditions: [
            {
              object: 2,
              check: CHECK_INVENTORY,
            },
            {
              object: 7,
              check: CHECK_DISABLED,
            },
            {
              chapter: 1,
            },
            {
              place: 'laboe',
            },
            {
              scene: 'naziraum',
            },
          ],
          changes: [],
          description: ['Das Fenster wird von einer Hakenkreuzflagge verdeckt.'],
        },
        {
          conditions: [
            {
              object: 2,
              check: CHECK_INVENTORY,
            },
            {
              object: 7,
              check: CHECK_ACTIVE,
            },
            {
              chapter: 1,
            },
            {
              place: 'laboe',
            },
            {
              scene: 'naziraum',
            },
          ],
          changes: [
            {
              object: 2,
              change: CHANGE_DESTROY,
            },
          ],
          description: [
            'Ich setze das Brett am Fenster an und...',
            '......',
            '.........',
            'schaffe es ganz knapp das Fenster aufzuhebeln, das Brett ist dabei zerbrochen.',
          ],
        },
      ],
    },

    3: {
      5: [
        {
          conditions: [
            {
              object: 3,
              check: CHECK_INVENTORY,
            },
            {
              object: 5,
              check: CHECK_INVENTORY,
            },
          ],
          changes: [],
          description: ['Das Laken ist dafür zu feucht.'],
        },
      ],

      11: [
        {
          conditions: [
            {
              object: 3,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'laboe',
            },
            {
              scene: 'strand2',
            },
          ],
          changes: [
            {
              object: 3,
              change: CHANGE_DESTROY,
            },
            {
              object: 14,
              change: CHANGE_ACTIVATE,
            },
            {
              object: 15,
              change: CHANGE_ACTIVATE,
            },
          ],
          description: [
            'Du reichst dem Skat-Trio dein Laken und sie breiten sich direkt darauf aus.',
            '"Achtzen"',
            '- "Yo!"',
            '- "Zwanzig?"',
            '- "Yep?"',
            '- "Zwo?!"',
            '- "Jab."',
            '- "Null?"',
            '- "Weg."',
            '- "Ich auch.."',
            '- "Na dann spielen wa Kreuz... Du hast. Achja... Kerl ohne Hose... du kannst dich gerne anner Kühlbox bedienen."',
          ],
        },
      ],
    },

    4: {
      5: [
        {
          conditions: [
            {
              object: 4,
              check: CHECK_INVENTORY,
            },
            {
              object: 5,
              check: CHECK_INVENTORY,
            },
          ],
          changes: [
            {
              object: 6,
              change: CHANGE_INVENTORY_ADD,
            },
            {
              object: 4,
              change: CHANGE_DESTROY,
            },
            {
              object: 5,
              change: CHANGE_DESTROY,
            },
          ],
          description: [
            'Ich habe ein Stück der Flagge abgerissen und in die Flasche gestopft. Ein Stück hängt noch aus der Flasche raus!',
          ],
        },
      ],
    },

    6: {
      12: [
        {
          conditions: [
            {
              object: 6,
              check: CHECK_INVENTORY,
            },
            {
              object: 12,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'laboe',
            },
            {
              scene: 'strand1',
            },
          ],
          changes: [
            {
              object: 6,
              change: CHANGE_DESTROY,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'dunkelkammer',
            },
          ],
          description: [
            `Scheiss auf Ablenkungsmannöver. Durch jahrelange Flunkyballerfahrung gelingt es mir mitten in die Gruppe zu werfen.Hätte ich jetzt ein volles Bier würd ich bis die alle wieder stehen locker austrinken können! Beim vorbeigehen erkenne ich auf den brennenden Kutten das Emblem der Laboer Blue Brothers. Ich entgegne Ihnen euphorisch: "Jetzt ist Laboe fällig"`,
            'Nach weiteren 200m packt mich eine Gruppe von hinten und stülpt mir einen Sack über den Kopf.',
          ],
        },
      ],
    },

    15: {
      18: [
        {
          conditions: [
            {
              object: 15,
              check: CHECK_INVENTORY,
            },
            {
              object: 18,
              check: CHECK_ACTIVE,
            },
            {
              chapter: 1,
            },
            {
              place: 'laboe',
            },
            {
              scene: 'strand2',
            },
          ],
          changes: [
            {
              object: 15,
              change: CHANGE_DESTROY,
            },
            {
              object: 18,
              change: CHANGE_DESTROY,
            },
            {
              object: 19,
              change: CHANGE_ACTIVATE,
            },
          ],
          description: [
            'Voller Misgunst biete ich Dirk die Sonnencreme in Verbindung mit meinen helfenden Händen an. Er akzeptiert kommentarlos schmunzelnd das Angebot und dreht mir seinen blassen Rücken zu.',
            'Ich kann es mir nicht nehmen lassen und zeichne mit Sonnencreme unauffällig die Umrisse eines männl. Phallus auf seinen Rücken.',
            'Er verlässt immerhin sofort den Strandkorb und legt sich zurück in die Sonne. Dabei hat er seine badelatschen liegen gelassen.',
          ],
        },
      ],
    },

    17: {
      19: [
        {
          conditions: [
            {
              object: 19,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'laboe',
            },
            {
              scene: 'strand2',
            },
          ],
          changes: [
            {
              object: 16,
              change: CHANGE_DESTROY,
            },
            {
              object: 17,
              change: CHANGE_DESTROY,
            },
            {
              object: 19,
              change: CHANGE_DESTROY,
            },
            {
              object: 12,
              change: CHANGE_ACTIVATE,
            },
          ],
          description: [
            'Typisch Deutsch schmeiße ich die Badelatschen auf das stolze Werk des jungen Künstlers. Dabei stürzt auch das Haus mit dem Feuerzeug-Schornstein ein.',
            'Das Kind rennt heulschreiend von dannen.',
          ],
        },
      ],
    },

    23: {
      28: [
        {
          conditions: [
            {
              object: 23,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'vorratskeller',
            },
          ],
          changes: [
            {
              object: 23,
              change: CHANGE_DESTROY,
            },
          ],
          description: [
            'Ich platziere die Bananenschale vor der verschlossenen Tür.',
          ],
        },
      ],
    },

    25: {
      28: [
        {
          conditions: [
            {
              object: 23,
              check: CHECK_DESTROYED,
            },
            {
              object: 25,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'vorratskeller',
            },
          ],
          changes: [
            {
              object: 25,
              change: CHANGE_DESTROY,
            },
            {
              object: 30,
              change: CHANGE_ACTIVATE,
            },
          ],
          description: [
            'Ich schütte den Ketchup unter dem Türspalt hindurch, so dass er in den Flur fließt und gehe dann an die andere Ecke des Raumes.',
            'Dass zieht die Aufmerksamkeit der Wache auf mich. In langsamen Schritten kommt der wankende Durchschnitts-Kieler auf die Tür zu.',
            '"Hallo ist alles Ok???"',
            'Ich stelle mich tot.',
            '"Halloooo?? Scheiße der blutet."',
            'Die Wache schließt die Tür auf und stürmt in die Zelle rutscht dabei auf der Bananenschale aus, stößt sich an der Heinzketchupflasche den Kopf und liegt bewusstlos auf dem Boden.',
          ],
        },
      ],
    },

    33: {
      34: [
        {
          conditions: [
            {
              object: 34,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'wohnzimmer',
            },
          ],
          changes: [
            {
              object: 33,
              change: CHANGE_ACTIVATE,
            },
          ],
          description: [
            'Ich kann das Gespräch jetzt verstehen:',
            '"Dieser Junge ohne Hose ist wirklich ein tapferes Kerlchen. Wie er die Blue Brothers fertig gemacht hat, ist der Hammer.',
            'Und bei uns Kneipenterroristen passt er perfekt rein. Hoffentlich besteht er unser Aufnahmeritual...',
            'Dann gibt es eine Menge Holsten für alle. Später kommen auch die Destroyers."',
            '- "Aber wollen wir wirklich nen neuen direkt zu uns lassen? Ich find der sollte erstmal bei den Destroyers auch anfangen und so. ',
            'Sone Freundschaft sag ich dir... die muss man auch erstma begießen und pflegen machen."',
            '- "Na warten wir erstma ab und hoffen das Cheffe Herr Fugbaum ma einfängt. Dann können wir über sowas alles ja mal bereden tun."',
          ],
        },
      ],
    },

    26: {
      44: [
        {
          conditions: [
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'kueche1',
            },
          ],
          changes: [],
          description: [
            '"Hey!! Lass die Finger davon..."',
            'So lange die beiden hier aufpassen kann ich die wohl nicht benutzen.',
          ],
        },
        {
          conditions: [
            {
              object: 26,
              check: CHECK_INVENTORY,
            },
            {
              object: 27,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'kueche2',
            },
          ],
          changes: [
            {
              object: 26,
              change: CHANGE_DEACTIVATE,
            },
          ],
          description: ['Ich werfe die Zwiebeln in die Pfanne.'],
        },
        {
          conditions: [
            {
              object: 26,
              check: CHECK_INVENTORY,
            },
            {
              object: 27,
              check: CHECK_DESTROYED,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'kueche2',
            },
          ],
          changes: [
            {
              object: 26,
              change: CHANGE_DESTROY,
            },
            {
              object: 45,
              change: CHANGE_INVENTORY_ADD,
            },
          ],
          description: [
            'Ich werfe die Zwiebeln zu den Kartoffeln in die Pfanne und warte...',
            'Nach einer kurzen weile werden daraus lecker Bratkartoffeln.',
          ],
        },
      ],
    },

    27: {
      44: [
        {
          conditions: [
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'kueche1',
            },
          ],
          changes: [],
          description: [
            '"Hey!! Lass die Finger davon..."',
            'So lange die beiden hier aufpassen kann ich die wohl nicht benutzen.',
          ],
        },
        {
          conditions: [
            {
              object: 26,
              check: CHECK_DISABLED,
            },
            {
              object: 27,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'kueche2',
            },
          ],
          changes: [
            {
              object: 26,
              change: CHANGE_ACTIVATE,
            },
          ],
          description: [
            'Ich werfe die Kartoffeln zu den Zwiebeln...',
            'Jetzt sind die Zwiebeln verbrannt und die Kartoffeln noch nicht gar. Ich haue alles zusammen umweltbewusst in den Mülleimer.',
          ],
        },
        {
          conditions: [
            {
              object: 26,
              check: CHECK_ACTIVE,
            },
            {
              object: 27,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'kueche2',
            },
          ],
          changes: [
            {
              object: 27,
              change: CHANGE_DESTROY,
            },
          ],
          description: ['Ich werfe die Kartoffeln in die Pfanne.'],
        },
      ],
    },

    31: {
      34: [
        {
          conditions: [
            {
              object: 31,
              check: CHECK_NOT_DESTROYED,
            },
            {
              object: 34,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'wohnzimmer',
            },
          ],
          changes: [],
          description: [
            'Die is einfach zu schnell für mich... Die is aaaarsch schnell...',
          ],
        },
      ],

      45: [
        {
          conditions: [
            {
              object: 45,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'wohnzimmer',
            },
          ],
          changes: [
            {
              object: 31,
              change: CHANGE_DESTROY,
            },
            {
              object: 45,
              change: CHANGE_DESTROY,
            },
            {
              object: 46,
              change: CHANGE_INVENTORY_ADD,
            },
            {
              object: 47,
              change: CHANGE_INVENTORY_ADD,
            },
            {
              scene: 'bushaltestelle1',
            },
          ],
          description: [
            'Ich werfe die Bratkartoffeln Herrn Fugbaum zum fressen hin. In einer irren Geschwindigkeit verdrückt die Spinne das köstliche Gericht.',
            'Sie läuft aber jetzt deutlich langsamer und entspannter. Sie ist nicht mehr hungrig.',
            'Der Chef der Kieler Kneipenterroristen fängt Herrn Fugbaum mit links und wirft sie gekonnt ins Terrarium.',
            'Danach kommt er zu mir und bedankt sich:',
            '"Hosenlo(s)batz... wie soll ich dir das je verdanken... Herr Fugbaum war so aaarsch schnell. Ohne deine Bratkartoffeln hätten wir es nicht mehr zeitig nach Laboe geschafft..',
            'Du hast damit unser Aufnahmeritual neu definiert und bist jetzt ein volles Mitglied der Kneipenterroristen."',
            'Er gibt mir eine Kutte der Kneipenterroristen. In diesem Moment erreichen auch die Destroyers die Party. ',
            'Jemand wirft mir lässig ein Holsten zu und wir brechen in Richtung Bushaltestelle auf.',
          ],
        },
      ],
    },

    34: {
      40: [
        {
          conditions: [
            {
              object: 34,
              check: CHECK_INVENTORY,
            },
            {
              object: 40,
              check: CHECK_INVENTORY,
            },
          ],
          changes: [
            {
              object: 34,
              change: CHANGE_DESTROY,
            },
            {
              object: 40,
              change: CHANGE_DESTROY,
            },
            {
              object: 41,
              change: CHANGE_INVENTORY_ADD,
            },
          ],
          description: [
            'Die Milch passt perfekt in das Glas. Die leere Tüte werfe ich umweltbewusst auf den Boden.',
          ],
        },
      ],
    },

    42: {
      43: [
        {
          conditions: [
            {
              object: 42,
              check: CHECK_INVENTORY,
            },
            {
              chapter: 1,
            },
            {
              place: 'kneipenterror',
            },
            {
              scene: 'kueche1',
            },
          ],
          changes: [
            {
              object: 38,
              change: CHANGE_INVENTORY_ADD,
            },
            {
              object: 42,
              change: CHANGE_DESTROY,
            },
            {
              scene: 'kueche2',
            },
          ],
          description: [
            'Ich stürme aufs Klo und werde jeglichen flüssigen, stinkenden Ballast los. Danach sitze ich noch eine Weile rum und bewunderst mein Stolzes Geschäft.',
            'Dabei entdecke ich einen Kaktus, der auf der Waschmaschine steht. Als Andenken nimmst stecke ich ihn ein.',
            'In der Küche ist ein Stöhnen und Gepolter als würde eine Horde Kneipenterroristen raus stürmen. Dabei stoßen sie noch ein "Son oller Stinker!" aus.',
          ],
        },
      ],
    },
  },
}

export default actions

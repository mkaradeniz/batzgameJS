import { STATUS_ACTIVE, STATUS_DISABLED } from './constants'

const objects = {
  // Default Items

  0: {
    default: true,
    name: 'kippen',
    description: ['Lecker Kippchen!'],
    id: 0,
    status: STATUS_ACTIVE,
    chapter: 1,
    place: 'laboe',
    scene: 'naziraum',
  },

  // laboe.naziraum

  1: {
    name: 'bett',
    chapter: 1,
    default: false,
    description: [
      'Ein Bett kann man das eigentlich nicht nennen.',
      'Es ist eher ein Brett auf dem halbherzig ein kaputtes Laken gespannt wurde.',
    ],
    id: 1,
    place: 'laboe',
    scene: 'naziraum',
    status: STATUS_ACTIVE,
  },

  2: {
    name: 'brett',
    chapter: 1,
    default: false,
    description: ['Das muss mir vom Kopf gefallen sein.'],
    id: 2,
    inventoriable: true,
    place: 'laboe',
    scene: 'naziraum',
    status: STATUS_DISABLED,
  },

  3: {
    name: 'laken',
    chapter: 1,
    default: false,
    description: [
      'Vom Geruch und den Löchern her wahrscheinlich "Made in Switzerland"',
    ],
    id: 3,
    inventoriable: true,
    place: 'laboe',
    scene: 'naziraum',
    status: STATUS_DISABLED,
  },

  4: {
    name: 'hakenkreuzflagge',
    chapter: 1,
    default: false,
    description: [
      'Wo zum Teufel bin ich hier gelandet? Die Flagge hängt vor einem Fenster und riecht nach Rauch.',
    ],
    id: 4,
    inventoriable: true,
    place: 'laboe',
    scene: 'naziraum',
    status: STATUS_ACTIVE,
  },

  5: {
    name: 'whiskyflasche',
    chapter: 1,
    default: false,
    description: ['Eine halbvolle Whiskyflasche.'],
    id: 5,
    inventoriable: true,
    place: 'laboe',
    scene: 'naziraum',
    status: STATUS_DISABLED,
  },

  6: {
    name: 'molotovcocktail',
    chapter: 1,
    default: false,
    description: ['Anzünden und werfen. Wie in GTA.'],
    id: 6,
    inventoriable: true,
    place: 'laboe',
    scene: 'naziraum',
    status: STATUS_DISABLED,
  },

  7: {
    name: 'fenster',
    chapter: 1,
    default: false,
    description: [
      'Jetzt wo nichts mehr im Weg steht bin ich mir sicher, dass ich in Laboe bin.',
    ],
    id: 7,
    place: 'laboe',
    scene: 'naziraum',
    status: STATUS_DISABLED,
  },

  // laboe.strand1

  8: {
    name: 'links',
    chapter: 1,
    default: false,
    description: [
      'Links von mir steht eine Gruppe Skinheads mit einheitlichen Westen an.',
    ],
    id: 8,
    place: 'laboe',
    scene: 'strand1',
    status: STATUS_ACTIVE,
  },

  9: {
    name: 'skinheads',
    chapter: 1,
    default: false,
    description: [
      'Links von mir steht eine Gruppe Skinheads mit einheitlichen Westen an.',
    ],
    id: 9,
    place: 'laboe',
    scene: 'strand1',
    status: STATUS_ACTIVE,
  },

  10: {
    name: 'strand',
    chapter: 1,
    default: false,
    description: ['Da gehts zum Strand.'],
    id: 10,
    place: 'laboe',
    scene: 'strand1',
    status: STATUS_ACTIVE,
  },

  // laboe.strand2

  11: {
    name: 'touristen',
    chapter: 1,
    default: false,
    description: [
      'Ich höre zu wie die drei in eine Diskussion vertieft sind:',
      '"Mensch Sören...',
      'Ich hab an alles gedacht... das Bier is im Kühler.',
      'Ich schlepp hier das Teil bis hier hin und so...',
      'Und du vergisst die Hälfte."',
      '- "Ja wirklich ey. Alles ham wa da. Karten, Bier, Strand, Meer, Bock, aber der Sand is so heiß kannste dich ohne Decke ganich mit reinsetzen, nej?"',
      '- "Jungs... Hebbert, Hansen es tut mir ja auch viel leid und so nej.',
      'Aber das war nun auch echt kein Absicht...',
      'Was mache wa nen nu?"',
    ],
    id: 11,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_ACTIVE,
  },

  12: {
    name: 'feuerzeug',
    chapter: 1,
    default: false,
    description: ['Es funktioniert noch!'],
    id: 12,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_DISABLED,
  },

  13: {
    name: 'zurück',
    chapter: 1,
    default: false,
    description: ['Der Weg zurück.'],
    id: 13,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_ACTIVE,
  },

  14: {
    name: 'kühlbox',
    chapter: 1,
    default: false,
    description: [
      'Eine alte vergilbte Kühlbox. Ihre Wände sind mit nicht mehr ganz so kühlen Grafenwalder Dosen gefüttert. Zwischen all dem Bier blitzt eine Tube 50er Sonnencreme auf.',
    ],
    id: 14,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_ACTIVE,
  },

  15: {
    name: 'sonnencreme',
    chapter: 1,
    default: false,
    description: [
      'Typisch britisch deutsche Sonnencreme 50. Sehr weiß, sehr dick.',
    ],
    id: 15,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_DISABLED,
  },

  16: {
    name: 'kind',
    chapter: 1,
    default: false,
    description: [
      'Dummes, kleines, nerviges, spielendes, holländisches Kind...',
      'Lässt mich bestimmt auch nich mitspielen... Sandburg... Typisch.',
    ],
    id: 16,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_ACTIVE,
  },

  17: {
    name: 'sandburg',
    chapter: 1,
    default: false,
    description: [
      'Die Sandburg ähnelt dem antiken Amsterdam.',
      'Das Kind hat als Schornstein ein gelbes Feuerzeug verwendet.',
    ],
    id: 17,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_ACTIVE,
  },

  18: {
    name: 'dirk',
    chapter: 1,
    default: false,
    description: [
      '"Mensch Lobas du sagst ja garnichts...',
      'Wie gehts dir denn nun. Ich hätte sonst auch ne spannende Geschichte über die letzte Wennigstedter Windsurf Competition auf Sylt."',
      'Ich machs wie seine Profilbilder: Kein Kommentar.',
      '"Naja.. is auch ganz schön heiß heute... Ich verbrenne in der Sonne... würd ja lieber noch was brutzeln"',
      'Ich denke ich sollte Dirk ganz eigennützig gegen die Sonne schützen.',
    ],
    id: 18,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_ACTIVE,
  },

  19: {
    name: 'badelatschen',
    chapter: 1,
    default: false,
    description: ['Gute alte Addiletten.'],
    id: 19,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_DISABLED,
  },

  20: {
    name: 'strandkorb',
    chapter: 1,
    default: false,
    description: ['Ein Pommes-Schranke farbener Strandkorb.'],
    id: 20,
    place: 'laboe',
    scene: 'strand2',
    status: STATUS_ACTIVE,
  },

  // kneipenterror.vorratskeller

  21: {
    name: 'obstkorb',
    chapter: 1,
    default: false,
    description: ['Bis auf eine Banane nur vergammeltes Obst.'],
    id: 21,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_ACTIVE,
  },

  22: {
    name: 'regal',
    chapter: 1,
    default: false,
    description: [
      'Mal sehen... hier gibt es Ketchup, einen Sack Kartoffeln, Zwiebeln und ein Teeei.',
    ],
    id: 22,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_ACTIVE,
  },

  23: {
    name: 'bananenschale',
    chapter: 1,
    default: false,
    description: ['Rutschig und Vegan.', 'Eine gute Kombination.'],
    id: 23,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_DISABLED,
  },

  24: {
    name: 'banane',
    chapter: 1,
    default: false,
    description: ['Legga.'],
    id: 24,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_ACTIVE,
  },

  25: {
    name: 'ketchup',
    chapter: 1,
    default: false,
    description: ['Sogar der gute Heinz.'],
    id: 25,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_ACTIVE,
  },

  26: {
    name: 'zwiebeln',
    chapter: 1,
    default: false,
    description: ['Zum heulen.'],
    id: 26,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_ACTIVE,
  },

  27: {
    name: 'kartoffeln',
    chapter: 1,
    default: false,
    description: ['Kartoffeln.', 'Ungefähr sackvoll viele.'],
    id: 27,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_ACTIVE,
  },

  28: {
    name: 'tür',
    chapter: 1,
    default: false,
    description: [
      'Eine verschlossene Tür.',
      'Unten ist ein Spalt durch den man sehen kann.',
      'Dort erkenne ich, dass jemand mit Fokuhila und 90er Bart Wache steht.',
    ],
    id: 28,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_ACTIVE,
  },

  29: {
    name: 'teeei',
    chapter: 1,
    default: false,
    description: ['Mehr Aroma als mit Teebeutel!'],
    id: 29,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_ACTIVE,
  },

  30: {
    name: 'wache',
    chapter: 1,
    default: false,
    description: [
      'Ich durchsuchse die bewusstlose Wache. Ein geriffelter Gegenstand, der Meeresgeräusche macht ist in seiner Brusttasche.',
    ],
    id: 30,
    place: 'kneipenterror',
    scene: 'vorratskeller',
    status: STATUS_DISABLED,
  },

  // kneipenterror.wohnzimmer

  31: {
    name: 'vogelspinne',
    chapter: 1,
    default: false,
    description: [
      'Sie kommt mir vertraut vor.',
      '......',
      '.........',
      'Das ist doch Herr Fugbaum!',
      'Die is aaarsch schnell grad... Aber warum?',
    ],
    id: 31,
    place: 'kneipenterror',
    scene: 'wohnzimmer',
    status: STATUS_ACTIVE,
  },

  32: {
    name: 'kochplatte',
    chapter: 1,
    default: false,
    description: [
      'Eine alte Kochplatte der Schalter klemmt. Daneben steht ein Glas.',
    ],
    id: 32,
    place: 'kneipenterror',
    scene: 'wohnzimmer',
    status: STATUS_ACTIVE,
  },

  33: {
    name: 'küchentür',
    chapter: 1,
    default: false,
    description: [
      'Ich höre leise Stimmen durch die Tür...',
      'Kann aber nicht genau verstehen, was gesagt wird.',
    ],
    id: 33,
    place: 'kneipenterror',
    scene: 'wohnzimmer',
    status: STATUS_ACTIVE,
  },

  34: {
    name: 'glas',
    chapter: 1,
    default: false,
    description: ['Ein klebriges Bierglas.'],
    id: 34,
    place: 'kneipenterror',
    scene: 'wohnzimmer',
    status: STATUS_ACTIVE,
  },

  35: {
    name: 'fliesentisch',
    chapter: 1,
    default: false,
    description: [
      'Neben einer Kieler Tageszeitung liegt eine wunderschöne Muschel.',
    ],
    id: 35,
    place: 'kneipenterror',
    scene: 'wohnzimmer',
    status: STATUS_ACTIVE,
  },

  36: {
    name: 'muschel',
    chapter: 1,
    default: false,
    description: [
      'Als Muschellaie einfach zu identifizieren:',
      'Eine Canarium labiatum. Perfekt für meine Muschelsammlung.',
    ],
    id: 36,
    place: 'kneipenterror',
    scene: 'wohnzimmer',
    status: STATUS_ACTIVE,
  },

  37: {
    name: 'tageszeitung',
    chapter: 1,
    default: false,
    description: ['Eine Tageszeitung vom 21.01.1989.'],
    id: 37,
    place: 'kneipenterror',
    scene: 'wohnzimmer',
    status: STATUS_ACTIVE,
  },

  38: {
    name: 'kaktus',
    chapter: 1,
    default: false,
    description: ['Ein kleiner grüner Kaktus.'],
    id: 38,
    place: 'kneipenterror',
    scene: 'wohnzimmer',
    status: STATUS_DISABLED,
  },

  39: {
    name: 'treppe',
    chapter: 1,
    default: false,
    description: ['Die Treppe zurück in die Vorratskammer.'],
    id: 39,
    place: 'kneipenterror',
    scene: 'wohnzimmer',
    status: STATUS_ACTIVE,
  },

  // kneipenterror.kueche1

  40: {
    name: 'milch',
    chapter: 1,
    default: false,
    description: ['Eine Tüte Milch, 3.5% Fett.'],
    id: 40,
    place: 'kneipenterror',
    scene: 'kueche1',
    status: STATUS_ACTIVE,
  },

  41: {
    name: 'milchglas',
    chapter: 1,
    default: false,
    description: ['Ein Glas voller Milch, 3.5% Fett.'],
    id: 41,
    place: 'kneipenterror',
    scene: 'kueche1',
    status: STATUS_DISABLED,
  },

  42: {
    name: 'darmballast',
    chapter: 1,
    default: false,
    description: ['Wahrscheinlich dünn und doch sehr belastend.'],
    id: 42,
    place: 'kneipenterror',
    scene: 'kueche1',
    status: STATUS_DISABLED,
  },

  43: {
    name: 'klo',
    chapter: 1,
    default: false,
    description: ['N Klo ne.'],
    id: 43,
    place: 'kneipenterror',
    scene: 'kueche1',
    status: STATUS_ACTIVE,
  },

  44: {
    name: 'pfanne',
    chapter: 1,
    default: false,
    description: ['Die Pfanne scheint schon heiß zu sein.'],
    id: 44,
    place: 'kneipenterror',
    scene: 'kueche1',
    status: STATUS_ACTIVE,
  },

  45: {
    name: 'bratkartoffeln',
    chapter: 1,
    default: false,
    description: ['Lecker Bratkartoffeln.', 'Aber ich hab keinen Hunger.'],
    id: 45,
    place: 'kneipenterror',
    scene: 'kueche1',
    status: STATUS_DISABLED,
  },

  46: {
    name: 'kutte',
    chapter: 1,
    default: false,
    description: ['Eine gut gepflegte Kutte der Kieler Kneipenterroristen.'],
    id: 46,
    place: 'kneipenterror',
    scene: 'kueche1',
    status: STATUS_DISABLED,
  },

  47: {
    name: 'holsten',
    chapter: 1,
    default: false,
    description: ['Holsten knallt am dollsten!'],
    id: 47,
    place: 'kneipenterror',
    scene: 'kueche1',
    status: STATUS_DISABLED,
  },

  // kneipenterror.bushaltestelle1

  48: {
    name: 'fahrplan',
    chapter: 1,
    default: false,
    description: ['Der nächste Bus nach Laboe kommt in 7 Minuten.'],
    id: 48,
    place: 'kneipenterror',
    scene: 'bushaltestelle1',
    status: STATUS_ACTIVE,
  },

  49: {
    name: 'bank',
    chapter: 1,
    default: false,
    description: [
      'Mit Silber-Edding geschrieben steht:',
      '"Wer das liest ist Lobatz."',
      'Es fehlen alle Bretter der Rückenlehne.',
    ],
    id: 49,
    place: 'kneipenterror',
    scene: 'bushaltestelle1',
    status: STATUS_ACTIVE,
  },

  // kneipenterror.bushaltestelle2

  50: {
    name: 'stacheln',
    chapter: 1,
    default: false,
    description: ['Achtung stachlig.', 'Etwas blut von mir klebt noch dran.'],
    id: 50,
    place: 'kneipenterror',
    scene: 'bushaltestelle2',
    status: STATUS_DISABLED,
  },
}

export default objects

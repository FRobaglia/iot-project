import {getStorage} from './utils'

export const apiURL = "https://ec2-3-133-134-22.us-east-2.compute.amazonaws.com:3000/"

export function getMinMaxValues(card) {
  const sorted = [...card].sort(function (a, b) {
    return a.value - b.value
  })

  return {
    min: sorted[0].value,
    max: sorted[sorted.length - 1].value
  }
}

const cardsStaticData = [
  {
    id: 'temperature',
    iconName: 'temperature',
    title: "Température de l'air",
    optimalMinValue: getStorage('temperature').min, 
    optimalMaxValue: getStorage('temperature').max,
    dropdown: false,
    off: getStorage('temperature').off, 
    sign: "°C",
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "la température"
      }, 
      content: [
        "Rabattre les panneaux de protection en bois autour de la serre en cas de fort ensoleillement afin de protéger la serre d’une hausse des température.", 
        "Activer le système d’aération de la serre, aussi efficace pour le contrôle de l’humidité au sein de celle-ci.", 
        "Activer les lampes à éclairage LED qui participent à l’augmentation de la température en cas de forte baisse de celle-ci."
      ]
    }
  },
  {
    id: 'humidity/menthe',
    iconName: 'humidity-ground',
    title: "Humidité du sol",
    optimalMinValue: getStorage('humidity/air').min, 
    optimalMaxValue: getStorage('humidity/air').max,
    dropdown: [{endpoint: 'humidity/menthe'}, {endpoint: 'humidity/tomate'}, {endpoint: 'humidity/basilic'}, {endpoint: 'humidity/poivron'}],
    off: getStorage('humidity/menthe').off,
    sign: "%",
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "l'humidité du sol"
      }, 
      content: [
        "Fermer totalement les tunnels pendant la nuit et assurer une bonne étanchéité des abris-serre.", 
        "Ouvrir tôt le matin afin d’éliminer l’excès d’humidité.", 
        "Fermer un peu plus tôt l’après midi pour emmagasiner la chaleur et ce afin de garder une température proche de l’optimum pendant la nuit."
      ]
    }
  },
  {
    id: "luminosity",
    iconName: "luminosity",
    title: "Luminosité",
    optimalMinValue: getStorage('luminosity').min, 
    optimalMaxValue: getStorage('luminosity').max,
    sign: "lux",
    dropdown: false,
    off: getStorage('luminosity').off, 
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "la luminosité"
      }, 
      content: [
        "Possibilité d’utiliser un vernis spécifique pulvérisé sur les vitres en extérieur qui laisse passer les rayons lumineux actifs dans la photosynthèse mais réduit significativement l’entrée des infrarouges courts.", 
        "Activer les lampes à éclairage LED en cas d’absence de luminosité prolongée.", 
        "Utiliser une toile d’ombrage en cas de trop forte luminosité, responsable de l’augementation de la température dans la serre. "
      ]
    }
  },
  {
    id: "humidity/air",
    iconName: "humidity-air",
    title: "Humidité de l'air",
    optimalMinValue: getStorage('humidity/menthe').min, 
    optimalMaxValue: getStorage('humidity/menthe').max,
    sign: "%",
    dropdown: false,
    off: getStorage('humidity/air').off, 
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "l’humidité de l’air"
      }, 
      content: [
        "Activer le brumisateur en cas de sècheresse de l’air trop prononcée. Le système d’humidification créera un brouillard frais bénéfique aux plantes.", 
        "Faire circuler l’air de manière naturelle ou forcée : 1. ouverture de la serre afin d’y faire rentrer l’air 2. activation des ventilations entre l’extérieur et l’intérieur afin de renouveler l’air présent dans la serre."
      ]
    }
  },
]

export default cardsStaticData
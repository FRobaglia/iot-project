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
    off: false, 
    sign: "°C",
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "l’hygrométrie"
      }, 
      content: [
        "Fermer totalement les tunnels pendant la nuit et assurer <strong>une bonne étanchéité</strong> des abris-serre.", 
        "<strong>Ouvrir</strong> tôt le matin afin d’éliminer l’excès d’humidité.", 
        "<strong>Fermer un peu plus tôt</strong> l’après midi pour emmagasiner la chaleur et ce afin de garder une température proche de l’optimum pendant la nuit."
      ]
    }
  },
  {
    id: 'humidity/menthe',
    iconName: 'humidity-ground',
    title: "Humidité du sol",
    optimalMinValue: getStorage('humidity/air').min, 
    optimalMaxValue: getStorage('humidity/air').max, 
    dropdown: false,
    off: true,
    sign: "%",
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "la température"
      }, 
      content: [
        "Rabattre les panneaux de protection en bois.", 
        "Activer le système d’aération de la serre", 
        "<strong>Fermer un peu plus tôt</strong> l’après midi pour emmagasiner la chaleur et ce afin de garder une température proche de l’optimum pendant la nuit."
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
    dropdown: ["Capteur 1","Capteur 2","Capteur 3","Capteur 4","Capteur 5"],
    off: false, 
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "la luminosité"
      }, 
      content: [
        "Fermer totalement les tunnels pendant la nuit et assurer <strong>une bonne étanchéité</strong> des abris-serre.", 
        "<strong>Ouvrir</strong> tôt le matin afin d’éliminer l’excès d’humidité.", 
        "<strong>Fermer un peu plus tôt</strong> l’après midi pour emmagasiner la chaleur et ce afin de garder une température proche de l’optimum pendant la nuit."
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
    dropdown: ["Capteur 1","Capteur 2","Capteur 3","Capteur 4","Capteur 5"],
    off: false, 
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "l’humidité du sol"
      }, 
      content: [
        "Fermer totalement les tunnels pendant la nuit et assurer <strong>une bonne étanchéité</strong> des abris-serre.", 
        "<strong>Ouvrir</strong> tôt le matin afin d’éliminer l’excès d’humidité.", 
        "<strong>Fermer un peu plus tôt</strong> l’après midi pour emmagasiner la chaleur et ce afin de garder une température proche de l’optimum pendant la nuit."
      ]
    }
  },
]

export default cardsStaticData
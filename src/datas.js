export const datas = [
  {
    title: "Température de l'air",
    currentValue: 21,  
    optimalMinValue: 15, 
    optimalMaxValue: 27, 
    dayMinValue: 17, 
    dayMaxValue: 23,
    sign: "°C",
    dropdown: false,
    off: false, 
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
    title: "Humidité du sol",
    currentValue: 38,  
    optimalMinValue: 20, 
    optimalMaxValue: 45, 
    dayMinValue: 18, 
    dayMaxValue: 30,
    sign: "%",
    dropdown: false,
    off: true,
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
    title: "Luminosité",
    currentValue: 38,  
    optimalMinValue: 20, 
    optimalMaxValue: 45, 
    dayMinValue: 18, 
    dayMaxValue: 30,
    sign: "lx",
    dropdown: ["Capteur 1","Capteur 2","Capteur 3","Capteur 4","Capteur 5"],
    off: false, 
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
]

export default datas;
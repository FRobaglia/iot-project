export const datas = [
  {
    id: 1,
    title: "Température de l'air",
    currentValue: 21,  
    optimalMinValue: 15, 
    optimalMaxValue: 27, 
    dayMinValue: 17, 
    dayMaxValue: 23,
    sign: "°C",
    dropdown: false,
    off: false
  },
  {
    id: 2,
    title: "Humidité du sol",
    currentValue: 38,  
    optimalMinValue: 20, 
    optimalMaxValue: 45, 
    dayMinValue: 18, 
    dayMaxValue: 30,
    sign: "%",
    dropdown: false,
    off: true
  },
  {
    id: 3,
    title: "Luminosité",
    currentValue: 38,  
    optimalMinValue: 20, 
    optimalMaxValue: 45, 
    dayMinValue: 18, 
    dayMaxValue: 30,
    sign: "lx",
    dropdown: ["Capteur 1","Capteur 2","Capteur 3","Capteur 4","Capteur 5"],
    off: false
  },
]

export default datas;
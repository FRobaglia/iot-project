import {apiURL, getMinMaxValues} from './cardsData';

export async function getCardData(card) {
  return await fetch(`${apiURL}${card.id}`)
  .then(response => response.json())
  .then((cardData) => {
    const data = cardData.data
    const latestValue = data[data.length - 1].value
    const minMaxValues = getMinMaxValues(data)
    let fullCard = {
      ...card,
      currentValue: Math.round(latestValue),
      dayMinValue: Math.round(minMaxValues.min),
      dayMaxValue: Math.round(minMaxValues.max),
      sign: cardData.unit
    }
    return fullCard
  });
}
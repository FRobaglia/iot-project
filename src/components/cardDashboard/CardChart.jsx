function invlerp(a, b, v) {
  return ( v - a ) / ( b - a )
}

function clamp(n, min, max){
  return Math.max(min, Math.min(n, max))
}

/***** COMPONENTS *****/
const CardChart = ({optimalMinValue, optimalMaxValue, currentValue}) =>  {
  
  let path = 'sprite-sheet.svg#card-arrow';

  const style = {
    left: `${clamp(invlerp(optimalMinValue, optimalMaxValue, currentValue) * 100, 0, 100)}%`
  }

  return (
    <div className="cardChart">
      <div className="cardChart__arrow" style={style}>
        <svg>
          <use xlinkHref={ path }/>
        </svg>
      </div>
    </div>
  ); 
}

export default CardChart;
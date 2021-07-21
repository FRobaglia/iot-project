function invlerp(a, b, v) {
  return ( v - a ) / ( b - a )
}

function clamp(n, min, max){
  return Math.max(min, Math.min(n, max))
}

/***** COMPONENTS *****/
const CardChart = ({optimalMinValue, optimalMaxValue, currentValue}) =>  {

  const style = {
    width: clamp(invlerp(optimalMinValue, optimalMaxValue, currentValue) * 100, 0, 100)
  }

  return (
    <div class="cardChart">
      <div className="cardChart__arrow" style={style}>
      </div>
    </div>
  ); 
}

export default CardChart;
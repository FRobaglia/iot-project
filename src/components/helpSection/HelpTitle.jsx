const HelpTitle = ({ title }) =>  {
  
  return (
    <h2 className="helpSection__title">
      { title.firstContent }<br/><span className="colored">{ title.secondContent }</span>
    </h2>
  ); 
}

export default HelpTitle;
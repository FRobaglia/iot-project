const HelpTitle = ({ title }) =>  {
  
  return (
    <h2 className="helpSection__title">
      { title.firstContent } <span className="colored">{ title.secondContent }</span>
    </h2>
  ); 
}

export default HelpTitle;
const HelpContent = ({ content }) =>  {
  
  return (
    <article className="helpSection__content">
      { content.map(( p ) => {       
        return(
          <p dangerouslySetInnerHTML={{ __html: p }}></p> // In order to insert <strong> tags 
        ); 
      }) }
    </article>
  ); 
}

export default HelpContent;
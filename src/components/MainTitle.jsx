const MainTitle = ({ pageId, title, subtitle }) =>  {
  return (
    <div className={ 'main__title main__title--' + pageId }>
      <h1>{ title }</h1>
      <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
    </div>
  ); 
}

export default MainTitle;
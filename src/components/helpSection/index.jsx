/***** COMPONENTS *****/
import HelpTitle from './HelpTitle';
import HelpContent from './HelpContent';

const HelpSection = ({ title, content }) =>  {
  
  return (
    <section className="helpSection">
      <HelpTitle title={ title }></HelpTitle>
      <HelpContent content={ content }></HelpContent>
    </section>
  ); 
}

export default HelpSection;
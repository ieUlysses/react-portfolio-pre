
import './Card.css';
import Headshot from "../media/Headshot.svg"

function Card() {
  return (
    <section className="wrapper">

      <div className="introCard">
        
        <img className="introImage"src={Headshot} alt="hello?" />

        <h3 className="introText">
          Velit id velit veniam eiusmod voluptate quis do. Amet et voluptate est proident cupidatat cupidatat. In reprehenderit ut id deserunt enim aliqua aliquip enim. Cupidatat nisi incididunt qui ea mollit in.
          
          </h3>
      </div>
    </section>
  );
}

export default Card;

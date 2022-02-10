import { Link } from "react-router-dom";

function CustomLink(props) {
  return ( <Link className="c-navigation__link" {...props} /> );
}

export default CustomLink;
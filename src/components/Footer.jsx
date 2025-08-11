import PageLinks from "./PageLinks"
import SocialLink from "./SocialLink"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-menu">
            <PageLinks className="menu-list"/>
        </div>
        <SocialLink className="footer-icon-menu"/>
        <p className="copyright">
            Copyright &copy;&nbsp; <span id="date">{new Date().getFullYear()}</span>&nbsp; All Rights Reserved
        </p>
     </footer>
  )
}

export default Footer
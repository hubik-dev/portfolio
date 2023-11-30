import FooterLogo from "./FooterLogo/FooterLogo";
import FooterEmail from "./FooterEmail/FooterEmail";
import SocialsList from "./SocialsList/SocialsList";

const FooterTop = () => {
  return (
    <div className="row align-items-center gy-3 gy-sm-0">
      <FooterLogo />
      <FooterEmail />
      <SocialsList />
    </div>
  );
};

export default FooterTop;

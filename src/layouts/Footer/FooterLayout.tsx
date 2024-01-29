import FooterLeft from "./FooterLeft";
import FooterMiddle from "./FooterMiddle";
import FooterRight from "./FooterRight";

export interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

const FooterLayout = ({ className, children }: FooterProps) => {
  return (
    <div id={className} className="flex flex-row h-5 border-t border-primary">
      <FooterLeft>Footer Left</FooterLeft>
      <FooterMiddle>
        Footer Middle
        {children}
      </FooterMiddle>
      <FooterRight>Footer Right</FooterRight>
    </div>
  );
};

export default FooterLayout;

import { FooterProps } from "./FooterLayout";

const FooterRight = ({ className, children }: FooterProps) => {
  return (
    <div id={className} className="bg-border h-full select-none">
      {children}
    </div>
  );
};

export default FooterRight;

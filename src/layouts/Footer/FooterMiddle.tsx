import { FooterProps } from "./FooterLayout";

const FooterMiddle = ({ className, children }: FooterProps) => {
  return (
    <div
      id={className}
      className="flex-1 bg-border h-full text-center select-none"
    >
      {children}
    </div>
  );
};

export default FooterMiddle;

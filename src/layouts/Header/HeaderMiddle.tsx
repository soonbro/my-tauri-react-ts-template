import { HeaderProps } from "./HeaderLayout";

const HeaderMiddle = ({ className, children }: HeaderProps) => {
  return (
    <div
      id={className}
      className="flex-1 bg-card h-full text-center select-none"
    >
      {children}
    </div>
  );
};

export default HeaderMiddle;

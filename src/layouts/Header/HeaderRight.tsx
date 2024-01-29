import { HeaderProps } from "./HeaderLayout";

const HeaderRight = ({ className, children }: HeaderProps) => {
  return (
    <div
      id={className}
      className="flex flex-row items-center h-full bg-card select-none"
    >
      {children}
    </div>
  );
};

export default HeaderRight;

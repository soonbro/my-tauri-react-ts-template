interface TitlebarProbs {
  children?: React.ReactNode;
}

const Titlebar = ({ children }: TitlebarProbs) => {
  return (
    <>
      <>{children}</>
    </>
  );
};

export default Titlebar;

import { useEffect, useState } from "react";
import MainList from "../MainList";
import Mark from "../Mark";
import * as S from "./styles";

const Header = () => {
  const [toggleButtom, setToggleButtom] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const isMobile = windowSize <= 768;

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setToggleButtom(!toggleButtom);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Header>
      <S.Content>
        <Mark />
        {isMobile ? (
          <>
            {toggleButtom ? (
              <>
                <MainList onItemClick={handleClick} />
                <S.IoCloseCustom fontSize={32} onClick={handleClick} />
              </>
            ) : (
              <S.FaBarsStaggeredCustom fontSize={24} onClick={handleClick} />
            )}
          </>
        ) : (
          <>
            <MainList onItemClick={handleClick} />
          </>
        )}
      </S.Content>
    </S.Header>
  );
};

export default Header;

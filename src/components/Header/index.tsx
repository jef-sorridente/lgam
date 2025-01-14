import { useEffect, useState } from "react";
import MainList from "../MainList";
import Mark from "../Mark";
import * as S from "./styles";

const Header = () => {
  const [toggleButtom, setToggleButtom] = useState(false);
  const [toggleButtomMobile, setToggleButtomMobile] = useState<boolean>(false);
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

  useEffect(() => {
    if (toggleButtomMobile) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [toggleButtomMobile]);

  return (
    <S.Header>
      <S.Content>
        <Mark />
        {isMobile ? (
          <>
            {toggleButtom ? (
              <>
                <MainList onItemClick={handleClick} />
                <S.IoCloseCustom fontSize={32} onClick={() => {
                  handleClick();
                  setToggleButtomMobile(false);
                }} />
              </>
            ) : (
              <S.FaBarsStaggeredCustom
                fontSize={24}
                onClick={() => {
                  handleClick();
                  setToggleButtomMobile(true);
                }}
              />
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

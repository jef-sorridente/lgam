import { useEffect, useState } from "react";
import MainList from "../../components/MainList";
import Mark from "../../components/Mark";
import * as S from "./styles";

import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [toggleButtom, setToggleButtom] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize <= 768;

  const handleClick = () => {
    if (isMobile) {
      setToggleButtom(!toggleButtom);
    }
  };

  return (
    <S.Header>
      <S.Content>
        <Mark />
        {isMobile ? (
          <>
            {toggleButtom ? (
              <>
                <MainList />
                <S.IoCloseCustom fontSize={32} onClick={handleClick} />
              </>
            ) : (
              <FaBarsStaggered fontSize={24} onClick={handleClick} />
            )}
          </>
        ) : (
          <>
            <MainList />
          </>
        )}
      </S.Content>
    </S.Header>
  );
};

export default Navbar;

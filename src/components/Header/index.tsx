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
    setToggleButtomMobile(false);
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
                <S.IoCloseCustom
                  fontSize={32}
                  onClick={() => {
                    handleClick();
                    setToggleButtomMobile(false);
                  }}
                />
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
        <S.Social>
          <div className="redes">
            <a
              href="https://www.facebook.com/l.g.a.m.2025?mibextid=JRoKGi"
              target="_blank"
              title="facebook"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM15.4592 14.615V22.2317H12.3078V14.6153H10.7333V11.9905H12.3078V10.4146C12.3078 8.2733 13.1968 7 15.7227 7H17.8255V9.62507H16.5111C15.5279 9.62507 15.4628 9.99188 15.4628 10.6765L15.4592 11.9902H17.8404L17.5618 14.615H15.4592Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/liga_gaucha_de_artes_marciais?igsh=dTEyYm5rcjl2cGxp"
              target="_blank"
              title="instagram"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM10.9219 6.57844C11.7184 6.5422 11.9729 6.53333 14.0007 6.53333H13.9984C16.0268 6.53333 16.2804 6.5422 17.0768 6.57844C17.8717 6.61485 18.4146 6.74069 18.8906 6.92534C19.3822 7.11589 19.7975 7.37101 20.2129 7.78635C20.6282 8.20137 20.8833 8.61796 21.0747 9.10905C21.2582 9.58381 21.3842 10.1264 21.4216 10.9213C21.4573 11.7177 21.4667 11.9722 21.4667 14.0001C21.4667 16.0279 21.4573 16.2818 21.4216 17.0782C21.3842 17.8728 21.2582 18.4156 21.0747 18.8905C20.8833 19.3814 20.6282 19.798 20.2129 20.213C19.798 20.6284 19.382 20.8841 18.8911 21.0748C18.416 21.2595 17.8728 21.3853 17.0779 21.4217C16.2815 21.458 16.0278 21.4668 13.9998 21.4668C11.9721 21.4668 11.7177 21.458 10.9213 21.4217C10.1265 21.3853 9.58381 21.2595 9.10874 21.0748C8.61796 20.8841 8.20137 20.6284 7.7865 20.213C7.37132 19.798 7.11621 19.3814 6.92534 18.8903C6.74085 18.4156 6.615 17.873 6.57844 17.0781C6.54236 16.2816 6.53333 16.0279 6.53333 14.0001C6.53333 11.9722 6.54267 11.7176 6.57829 10.9211C6.61407 10.1265 6.74007 9.58381 6.92518 9.10889C7.11652 8.61796 7.37163 8.20137 7.78697 7.78635C8.20199 7.37116 8.61858 7.11605 9.10967 6.92534C9.58443 6.74069 10.127 6.61485 10.9219 6.57844Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3307 7.87894C13.4608 7.87874 13.6007 7.8788 13.7517 7.87887L14.0006 7.87894C15.9942 7.87894 16.2305 7.8861 17.0178 7.92188C17.7458 7.95516 18.1409 8.07681 18.4041 8.17901C18.7525 8.31435 19.001 8.47613 19.2621 8.73746C19.5235 8.9988 19.6853 9.24769 19.8209 9.59614C19.9231 9.85903 20.0449 10.2541 20.078 10.9822C20.1138 11.7693 20.1216 12.0057 20.1216 13.9984C20.1216 15.9911 20.1138 16.2275 20.078 17.0147C20.0447 17.7427 19.9231 18.1378 19.8209 18.4007C19.6856 18.7491 19.5235 18.9972 19.2621 19.2584C19.0008 19.5198 18.7527 19.6815 18.4041 19.8169C18.1412 19.9195 17.7458 20.0409 17.0178 20.0742C16.2306 20.1099 15.9942 20.1177 14.0006 20.1177C12.0068 20.1177 11.7705 20.1099 10.9834 20.0742C10.2554 20.0406 9.86026 19.9189 9.5969 19.8167C9.24845 19.6814 8.99956 19.5196 8.73823 19.2583C8.47689 18.9969 8.31511 18.7487 8.17946 18.4001C8.07726 18.1372 7.95546 17.742 7.92233 17.014C7.88655 16.2269 7.87939 15.9905 7.87939 13.9965C7.87939 12.0026 7.88655 11.7674 7.92233 10.9803C7.95562 10.2523 8.07726 9.85716 8.17946 9.59396C8.3148 9.24551 8.47689 8.99662 8.73823 8.73528C8.99956 8.47395 9.24845 8.31217 9.5969 8.17652C9.8601 8.07386 10.2554 7.95252 10.9834 7.91908C11.6722 7.88796 11.9391 7.87863 13.3307 7.87708V7.87894ZM17.9863 9.11873C17.4916 9.11873 17.0902 9.5196 17.0902 10.0144C17.0902 10.5091 17.4916 10.9104 17.9863 10.9104C18.4809 10.9104 18.8823 10.5091 18.8823 10.0144C18.8823 9.51976 18.4809 9.11842 17.9863 9.11842V9.11873ZM10.1661 14.0001C10.1661 11.8826 11.8829 10.1657 14.0004 10.1656C16.118 10.1656 17.8344 11.8825 17.8344 14.0001C17.8344 16.1177 16.1182 17.8338 14.0006 17.8338C11.883 17.8338 10.1661 16.1177 10.1661 14.0001Z"
                  fill="white"
                />
                <path
                  d="M14.0006 11.5111C15.3751 11.5111 16.4895 12.6254 16.4895 14C16.4895 15.3745 15.3751 16.4889 14.0006 16.4889C12.626 16.4889 11.5117 15.3745 11.5117 14C11.5117 12.6254 12.626 11.5111 14.0006 11.5111Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </S.Social>
      </S.Content>
    </S.Header>
  );
};

export default Header;

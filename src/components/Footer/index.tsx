import MainList from "../MainList";
import { FooterContainer, FooterTop, List, FooterBottom } from "./styles";
import icon from "../../assets/images/lgam.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer id="contato">
      <FooterTop>
        <List>
          <img className="logo" src={icon} alt="Logo LGAM" />
          <p>Nossas redes sociais</p>
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
        </List>
        <List>
          <p>
            <strong>Localização</strong>
          </p>
          <p>
            Rua Bartolomeu de Gusmão, n° 1411, <br /> Canudos Novo Hamburgo - RS
          </p>
          <a
            href="https://maps.app.goo.gl/XP9w4mmwCg1fc4TT9"
            target="_blank"
            title="Como chegar"
            className="arrow"
          >
            <strong>Como chegar</strong>
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9L12 9V7L0 7L0 9Z"
                fill="#121212"
              />
            </svg>
          </a>
        </List>
        <List className="d-mobilde-none">
          <p className="institucional">
            <strong>Institucional</strong>
          </p>
          <MainList />
        </List>
        <List id="contato">
          <p>
            <strong>Contatos</strong>
          </p>
          <p className="social">
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
                d="M14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28ZM14.1951 13.2143C15.3414 13.2143 20.9151 10.08 20.9151 10.08L20.924 9.52C20.924 8.90176 20.4223 8.4 19.8023 8.4H8.58779C7.96843 8.4 7.46667 8.90176 7.46667 9.52V10.019C7.46667 10.019 13.1014 13.2143 14.1951 13.2143ZM7.47563 11.76C7.47507 11.76 13.1014 14.7543 14.1951 14.7543C15.394 14.7543 20.9151 11.76 20.9151 11.76L20.924 18.48C20.924 19.0982 20.4223 19.6 19.8023 19.6H8.58779C7.96899 19.6 7.46667 19.0982 7.46667 18.48L7.47563 11.76Z"
                fill="white"
              />
            </svg>
            contato@lgam.com.br
          </p>
          <a
            href="https://wa.me/5551995467409"
            target="_blank"
            title="whatsApp"
            className="social"
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
                d="M0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14ZM22.7862 13.4642C22.7844 18.0532 19.0514 21.7871 14.4615 21.789H14.458C13.0647 21.7885 11.6957 21.4389 10.4798 20.7757L6.06667 21.9333L7.24769 17.6195C6.51918 16.357 6.13584 14.9249 6.13646 13.4576C6.13829 8.86765 9.87281 5.13333 14.4614 5.13333C16.6884 5.13429 18.7786 6.00125 20.3503 7.57482C21.922 9.14831 22.7871 11.2399 22.7862 13.4642Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.06542 19.9556L10.6842 19.2686L10.9369 19.4186C11.9992 20.049 13.217 20.3826 14.4586 20.383H14.4614C18.2751 20.383 21.3791 17.279 21.3806 13.4637C21.3813 11.6149 20.6623 9.87647 19.3559 8.56858C18.0496 7.26069 16.3123 6.54007 14.4642 6.53943C10.6475 6.53943 7.54351 9.64315 7.54199 13.4581C7.54146 14.7656 7.90727 16.0388 8.5999 17.1405L8.76442 17.4023L8.06542 19.9556ZM18.3705 15.2565C18.5156 15.3267 18.6136 15.374 18.6554 15.4438C18.7074 15.5306 18.7074 15.947 18.5342 16.433C18.3608 16.9189 17.5298 17.3623 17.1301 17.422C16.7717 17.4756 16.3182 17.498 15.8199 17.3396C15.5178 17.2438 15.1304 17.1158 14.6341 16.9014C12.6841 16.0594 11.3662 14.1694 11.1172 13.8122C11.0997 13.7872 11.0875 13.7697 11.0807 13.7606L11.079 13.7583C10.969 13.6115 10.2314 12.6273 10.2314 11.6088C10.2314 10.6506 10.702 10.1484 10.9187 9.91727C10.9335 9.90143 10.9471 9.88686 10.9594 9.87351C11.15 9.66526 11.3754 9.6132 11.5141 9.6132C11.6527 9.6132 11.7915 9.61448 11.9127 9.62057C11.9277 9.62132 11.9432 9.62123 11.9593 9.62113C12.0805 9.62042 12.2317 9.61953 12.3807 9.97763C12.4381 10.1154 12.522 10.3197 12.6105 10.5352C12.7895 10.971 12.9873 11.4525 13.0221 11.5221C13.0741 11.6263 13.1087 11.7477 13.0394 11.8866C13.029 11.9074 13.0194 11.927 13.0102 11.9458C12.9581 12.0521 12.9198 12.1303 12.8314 12.2335C12.7967 12.2741 12.7607 12.3179 12.7248 12.3616C12.6533 12.4488 12.5817 12.5359 12.5194 12.598C12.4153 12.7017 12.3069 12.8142 12.4282 13.0225C12.5495 13.2307 12.967 13.9119 13.5854 14.4635C14.2501 15.0564 14.8278 15.307 15.1207 15.434C15.1778 15.4588 15.2242 15.4789 15.2581 15.4959C15.4661 15.6 15.5874 15.5826 15.7088 15.4438C15.8301 15.305 16.2288 14.8364 16.3674 14.6282C16.506 14.42 16.6448 14.4547 16.8354 14.5241C17.0261 14.5936 18.0488 15.0967 18.2568 15.2009C18.2974 15.2212 18.3354 15.2395 18.3705 15.2565Z"
                fill="white"
              />
            </svg>
            +55 (51) 9 9546-7409
          </a>
          <a
            href="https://wa.me/5551995467409"
            target="_blank"
            title="whatsApp"
            className="social"
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
                d="M14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0ZM9.79286 7C9.83429 7.03286 9.86714 7.03286 9.9 7.02857C10.07 7.01429 10.2157 7.05572 10.31 7.21143C10.3267 7.23844 10.3433 7.26545 10.36 7.29246C10.5549 7.60837 10.7502 7.92484 10.9357 8.24859C11.0701 8.48267 11.1982 8.72055 11.3265 8.95866C11.4206 9.13327 11.5148 9.30801 11.6115 9.48147C11.6489 9.55178 11.6957 9.618 11.7425 9.68424C11.7689 9.72164 11.7953 9.75904 11.82 9.79719C11.8797 9.89204 11.9367 9.98946 11.9924 10.0846L12.0015 10.1001C12.1215 10.3272 12.1158 10.5558 11.9372 10.7372C11.7492 10.9294 11.5472 11.1115 11.3455 11.2932C11.2744 11.3573 11.2033 11.4213 11.1329 11.4858C11.0453 11.5661 10.9565 11.6452 10.8677 11.7242C10.7276 11.8489 10.5875 11.9735 10.4529 12.1029C10.2814 12.2687 10.2372 12.4758 10.3529 12.6944C10.3636 12.7144 10.3743 12.7345 10.385 12.7546C10.5528 13.0688 10.7203 13.3826 10.9043 13.6901C11.63 14.9001 12.5572 15.9287 13.7286 16.7216C14.1801 17.0287 14.6501 17.3102 15.1244 17.5788C15.5715 17.8316 15.7458 17.7888 16.093 17.4016C16.2763 17.198 16.456 16.9925 16.6359 16.7868C16.7728 16.6302 16.9098 16.4735 17.0487 16.3173C17.1258 16.2302 17.2187 16.153 17.3087 16.0787C17.4916 15.9244 17.6916 15.9073 17.9016 16.013C17.9147 16.0194 17.9281 16.0257 17.9415 16.032C17.9878 16.0537 18.0346 16.0756 18.0744 16.1044C18.4469 16.3709 18.8489 16.5851 19.2502 16.7989C19.4492 16.9049 19.648 17.0108 19.843 17.123C20.0441 17.2386 20.2417 17.3593 20.4388 17.4798C20.5511 17.5485 20.6633 17.617 20.7759 17.6845C20.943 17.783 21.0102 17.9273 20.9988 18.1259C20.9673 18.6845 20.8745 19.2331 20.5502 19.7045C20.4145 19.9002 20.2216 20.0716 20.0273 20.2102C19.4887 20.5874 18.8873 20.8202 18.2473 20.9631C17.6658 21.0931 17.0858 21.0459 16.5287 20.8717C15.453 20.5402 14.3929 20.1602 13.4172 19.5845C12.5315 19.0602 11.7257 18.4273 10.98 17.7202C10.0357 16.8216 9.19285 15.8416 8.51141 14.7258C8.06711 14.0015 7.74997 13.2215 7.46282 12.4258C7.28853 11.9458 7.1171 11.4701 7.03995 10.9615C6.95138 10.3858 7.01281 9.83148 7.1971 9.28575C7.36282 8.79289 7.56996 8.32145 7.88282 7.90002C8.12854 7.57287 8.43569 7.33286 8.83284 7.22572C9.05724 7.16635 9.28306 7.11548 9.5088 7.06464C9.60353 7.0433 9.69826 7.02196 9.79286 7Z"
                fill="white"
              />
            </svg>
            +55 (51) 9 9546-7409
          </a>
        </List>
      </FooterTop>
      <FooterBottom>
        <p>COPYRIGHT&copy;LGAM {year} - Todos os direitos reservados</p>
        <h4>
          Desenvolvido por:
          <a
            href="https://www.linkedin.com/in/jeferson-soares-dev/"
            target="_blank"
            title="Jeferson Soares Dev"
          >
            <strong>Jeferson Soares</strong>
          </a>
        </h4>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

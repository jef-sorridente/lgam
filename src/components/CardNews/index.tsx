import { Card } from "./styles";
import image from "../../assets/images/Home/image_card_test.webp";

const CardNews = () => (
  <Card>
    <div className="container-img">
      <img src={image} alt="Novidades" />
      <span></span>
    </div>
    <p>
      <strong>08/01/2025</strong>
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      sodales vulputate eros, et sagittis erat maximus.
    </p>
    <a href="#" title="Ler mais">
      <strong>Ler mais</strong>
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
  </Card>
);

export default CardNews;

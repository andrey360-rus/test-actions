import React from "react";
import backgroundImage1 from "../../img/meditation.jpg";
import backgroundImage2 from "../../img/home2.jpg";
import backgroundImage3 from "../../img/home3.jpg";
import backgroundImage4 from "../../img/comments.jpg";
import { COMMENTS_ROUTE, STICKERS_ROUTE } from "../../app/routing/config";
import { ButtonLink, ContentContainer, StyledCarousel } from "./styles.tsx";

const Home: React.FC = () => (
  <StyledCarousel autoplay>
    <ContentContainer background={backgroundImage1}>
      <h3>Welcome to the MindfulLife app!</h3>
    </ContentContainer>
    <ContentContainer background={backgroundImage2}>
      <h3>Meditation Practices</h3>
    </ContentContainer>
    <ContentContainer background={backgroundImage3}>
      <h3>
        Sticker Table
        <ButtonLink data-testid={"link-to-stickers"} to={STICKERS_ROUTE} type="primary">
          Go over
        </ButtonLink>
      </h3>
    </ContentContainer>
    <ContentContainer background={backgroundImage4}>
      <h3>
        User comments
        <ButtonLink data-testid={"link-to-comments"} to={COMMENTS_ROUTE} type="primary">
          Go over
        </ButtonLink>
      </h3>
    </ContentContainer>
  </StyledCarousel>
);

export default Home;

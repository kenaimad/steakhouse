import * as s from './Banner.styled';

const Banner = (props) => {
  return (
    <s.BannerStyled>
      <s.Description>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        {props.icons && (
          <s.IconsContainer>
            {props.icons.map((icon) => (
              <a href="/#"><img key={icon} src={icon} alt="Shop icon" /></a>
            ))}
          </s.IconsContainer>
        )}
        <s.StyledButton>Zamów online</s.StyledButton>
      </s.Description>
      <s.backgroundImage src={props.background} />
    </s.BannerStyled>
  );
};

export default Banner;

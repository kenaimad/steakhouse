import * as s from './BannersSection.styled';
import Banner from './components/Banner';
import HighlightedText from '../../../../utils/HighlightedText/HighlightedText';
import appStoreIcon from './components/icons/app_store.svg';
import googleStoreIcon from './components/icons/google_play.svg';
import huaweiStoreIcon from './components/icons/huawei.svg';
import background1 from './components/icons/background1.png';
import background2 from './components/icons/background2.png';


const BannersSection = () => {
  const iconsArray = [appStoreIcon, googleStoreIcon, huaweiStoreIcon];
  return (
    <s.BannerSectionStyled>
      <Banner
        title="Zestaw dla 3 osób"
        description={
          <>
            Razem smakuje lepiej! Zamów zestaw obiadowy dla 3 osób już od{' '}
            <HighlightedText background="black" text=" 39zł" />
          </>
        }
        icons={[]}
        background={background1}
      />
      <Banner
        title="UberEats"
        description={
          <>
            Zamawiaj w aplikacji{' '}
            <HighlightedText background="#920303" text=" 10% taniej." /> Pobierz
            aplikację UberEats już dziś.
          </>
        }
        icons={iconsArray}
        background={background2}
      />
    </s.BannerSectionStyled>
  );
};

export default BannersSection;
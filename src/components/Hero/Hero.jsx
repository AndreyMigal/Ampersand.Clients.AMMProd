import { useStyles } from './Hero.styles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'utils/i18next';
import Modal from 'components/Modal/Modal';
// import Marquee from "react-easy-marquee";

function Hero() {
    const s = useStyles();
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    }

    return (
        <div className={s.root}>
            <div className={s.eclipseTwo}></div>
            <div className={s.elipse}></div>

            <header className={s.mobileTitleContainer}>
                <h1 className={s.name}>{t('title.name')}</h1>
                <p className={s.title}>{t('title.title')}</p> 
            </header>

            <div className={s.desctopTitle} aria-hidden="true">
                {t('title.name')} {t('title.title')}
            </div>

            <h2 className={s.subTitle}>{t('title.subTitle')}</h2>

            <button className={s.modalBtn} onClick={handleOpenModal}>
                {t('title.mainBtn')}
            </button>

            {/* <div className={s.ribbonContainer}>
    <Marquee className={s.blackRibbon} duration={25000} background="#000" reverse height="30px">
      <span className={s.blackRibbonText}>
       {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')}&nbsp;
      </span>
    </Marquee>
    <Marquee className={s.whiteRibbon} duration={25000} background="#fff" height="30px">
      <span className={s.whiteRibbonText}>
        {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')} {t('title.ribbonAd')}&nbsp;
      </span>
    </Marquee> 
  </div> */}

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>

    );
}

export default Hero;

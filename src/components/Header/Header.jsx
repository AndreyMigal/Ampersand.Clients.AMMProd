import { useStyles } from './Header.styles';
import { ReactComponent as Logo } from 'assets/icons/logoIcon.svg';
import { ReactComponent as Menu } from 'assets/icons/menuIcon.svg';
import { ReactComponent as ArrowRightUp } from 'assets/icons/arrowRightUpIcon.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/closeIcon.svg';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import 'utils/i18next';
import Modal from 'components/Modal/Modal';

function Header() {
  const s = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {t, i18n} = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <div className={s.root} id='start'>
      <a href='#root' aria-label='link to the top of the page'>
        <Logo className={s.logo} />
      </a>
      <button className={s.menuBtn} onClick={handleOpenMenu} aria-label='menu'>
        <Menu/>
      </button>
      <CSSTransition
        in={isMenuOpen}
        unmountOnExit
        timeout={250}
        classNames='menu'
      >
        <div className={classNames(s.mobileMenu)}> 
          <ul className={s.menuList}>
            <li className={s.menuItem}><a href='#aboutUs' onClick={() => handleLinkClick()}>{t("header.aboutUs")}</a></li>
            <li className={s.menuItem}><a href='#priceCalculator' onClick={() => handleLinkClick()}>{t("header.priceCalculator")}</a></li>
            <li className={s.menuItem}><a href='#caseStudies' onClick={() => handleLinkClick()}>{t("header.caseStudies")}</a></li>
            <li className={s.menuItem}><a href='#conacts' onClick={() => handleLinkClick()}>{t("header.conacts")}</a></li>
          </ul>
          <button className={s.contactBtn} onClick={() => setIsModalOpen(true)}>
            {t("header.contactUs")}<ArrowRightUp />
          </button>
          <div className={s.btnContainer}>
            <button onClick={() => handleChangeLanguage('ua')} className={s.langBtn}>UA</button>
            <div className={s.separator}></div>
            <button onClick={() => handleChangeLanguage('en')} className={s.langBtn}>EN</button>
          </div>
          <button className={s.closeBtn} onClick={handleCloseMenu}>
            <CloseIcon/>
          </button>
        </div>
      </CSSTransition>
      <div className={s.desctopMenu}>
        <ul className={s.desctopMenuList}>
          <li className={s.desctopMenuItem}><a href='#aboutUs' onClick={() => handleLinkClick()}>{t("header.aboutUs")}</a></li>
          <li className={s.desctopMenuItem}><a href='#priceCalculator' onClick={() => handleLinkClick()}>{t("header.priceCalculator")}</a></li>
          <li className={s.desctopMenuItem}><a href='#caseStudies' onClick={() => handleLinkClick()}>{t("header.caseStudies")}</a></li>
          <li className={s.desctopMenuItem}><a href='#conacts' onClick={() => handleLinkClick()}>{t("header.conacts")}</a></li>
        </ul>
        <div className={s.btnContainer}>
          <button onClick={() => handleChangeLanguage('ua')} className={s.langBtn}>UA</button>
          <div className={s.separator}></div>
          <button onClick={() => handleChangeLanguage('en')} className={s.langBtn}>EN</button>
        </div>
        <button className={s.contactBtn} onClick={handleOpenModal}>
          {t("header.contactUs")}<ArrowRightUp />
        </button>
      </div>
      
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Header;


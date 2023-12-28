import { useStyles } from './Footer.styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from 'assets/icons/logoIcon.svg';
import { ReactComponent as BehanceIcon } from 'assets/icons/behanceIcon.svg';
import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedinIcon.svg';
import { ReactComponent as YoutubeIcon } from 'assets/icons/youtubeIcon.svg';
import { ReactComponent as VimeoIcon } from 'assets/icons/vimeoIcon.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebookIcon.svg';
import { ReactComponent as InstagramIcon } from 'assets/icons/instagramIcon.svg';
import { ReactComponent as CluutchIcon } from 'assets/icons/clutchIcon.svg';
import { tel, email } from 'helpers/constants'

import 'utils/i18next';

 


function Footer() {
  const s = useStyles();
  const { t } = useTranslation();

  return (
    <div className={s.root} id='conacts'>
      <div className={s.separator}></div>
      <a href='#root' className={s.logoIcon} aria-label='link to the top of the page'><Logo /></a>
      <div className={s.adressContainer}>
        <p className={s.contacts}>{email}</p>
        <p className={s.contacts}>{tel}</p>
      </div>
      <ul className={s.socialmediaList}>
        <li><a href='https://www.behance.net/ammprod1/projects' target='_blank' rel="noreferrer" aria-label='link to the behance'><BehanceIcon className={s.icon} /></a></li>
        <li><a href='https://www.linkedin.com/company/amm-production1/ ' target='_blank' rel="noreferrer" aria-label='link to the linkedin'><LinkedinIcon className={s.icon} /></a></li>
        <li><a href='https://www.youtube.com/channel/UCDpiH6JPPe3-FBqhRZG-96g' target='_blank' rel="noreferrer" aria-label='link to the youtube'><YoutubeIcon className={s.icon} /></a></li>
        <li><a href='https://vimeo.com/user83807441' target='_blank' rel="noreferrer" aria-label='link to the vimeo'><VimeoIcon /></a></li>
        <li><a href='https://www.facebook.com/AMMProd1' target='_blank' rel="noreferrer" aria-label='link to the facebook'><FacebookIcon className={s.icon} /></a></li>
        <li><a href='https://www.instagram.com/amm.prod1/' target='_blank' rel="noreferrer" aria-label='link to the instagram'><InstagramIcon className={s.icon} /></a></li>
        <li className={s.newIconContainer}><a href='https://clutch.co/profile/amm#summary' target='_blank' rel="noreferrer" aria-label='link to the instagram'><CluutchIcon className={s.newIcon} /></a></li>
      </ul>
      <p className={s.rights}>{t('footer.rights')}</p>
    </div>
  );
}
 
export default Footer;
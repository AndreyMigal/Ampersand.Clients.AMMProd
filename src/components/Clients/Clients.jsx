import { useStyles } from './Clients.styles';
import { useTranslation } from 'react-i18next';
import client1 from 'assets/images/client1.jpg';
import client2 from 'assets/images/client2.jpg';
import client3 from 'assets/images/client3.jpg';
import client4 from 'assets/images/client4.jpg';
import client5 from 'assets/images/client5.jpg';
import client6 from 'assets/images/client6.jpg';
import client7 from 'assets/images/client7.jpg';
import client8 from 'assets/images/client8.jpg';
import clutch from 'assets/images/clutch.png';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import 'utils/i18next';

 


function Clients() {
  const s = useStyles();
  const { t } = useTranslation();

  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isTitlelShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    if (isTitleVisible) {
      setIsTitleShown(true)
    }
  }, [isTitleVisible])

  return (
    <div className={s.root}>
      <h2 className={classNames(s.title, {[s.titleAnimation]: isTitlelShown})} ref={titleRef}>{t('clients.title')}</h2>
      <ul className={s.clientsCardList}>
        <li className={classNames(s.clientOne, {[s.firstRowAnimation]: setIsTitleShown})}><img className={s.clientsImg} src={client1} alt="client_image-1"></img></li>
        <li className={classNames(s.clientTwo, {[s.firstRowAnimation]: setIsTitleShown})}><img className={s.clientsImg} src={client2} alt="client_image-2"></img></li>
        <li className={classNames(s.clientThree, {[s.firstRowAnimation]: setIsTitleShown})}><img className={s.clientsImg} src={client3} alt="client_image-3"></img></li>
        <li className={classNames(s.clientFour, {[s.firstRowAnimation]: setIsTitleShown})}><img className={s.clientsImg} src={client4} alt="client_image-4"></img></li>
        <li className={classNames(s.clientFive, {[s.secondRowAnimation]: setIsTitleShown})}><img className={s.clientsImg} src={client5} alt="client_image-5"></img></li>
        <li className={classNames(s.clientSix, {[s.secondRowAnimation]: setIsTitleShown})}><img className={s.clientsImg} src={client6} alt="client_image-6"></img></li>
        <li className={classNames(s.clientSeven, {[s.secondRowAnimation]: setIsTitleShown})}><img className={s.clientsImg} src={client7} alt="client_image-7"></img></li>
        <li className={classNames(s.clientEight, {[s.secondRowAnimation]: setIsTitleShown})}><img className={s.clientsImg} src={client8} alt="client_image-8"></img></li>
      </ul>
      <p className={classNames(s.clutch, {[s.clutchAnimation]: isTitlelShown})}>{t('clients.clutch')}</p>
      <a href='https://clutch.co/profile/amm#summary' target='_blank' rel="noreferrer" className={classNames(s.clutchLink, {[s.clutchAnimation]: isTitlelShown})}>
        <img src={clutch} alt="clutch_link"></img>
      </a>
    </div>
  );
}
 
export default Clients;
import { useState, useEffect } from 'react';
import { useStyles } from './WorkProcess.styles';
import { useTranslation } from 'react-i18next';
import imageOne from 'assets/images/01.png'
import imageTwo from 'assets/images/02.png'
import imageThree from 'assets/images/03.png'
import imageFour from 'assets/images/04.png'
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import 'utils/i18next';

 


function WorkProcess() {
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
    <h2 className={classNames(s.title, {[s.titleAnimation]: isTitlelShown})} ref={titleRef}>{t('workProcess.title')}</h2>
      <div className={s.cardsContainer}>
        <div className={classNames(s.cardsItem, {[s.cardOneAnimation]: isTitlelShown})}>
          <img src={imageOne} alt='number one' className={s.cardsNumberImg}/>
          <div className={s.desctopImgPlaceholder}></div>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>{t('workProcess.first.title')}</h3>
            <p className={s.cardsListItem}>{t('workProcess.first.firstItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.first.secondItem')}</p>
          </div>
        </div>
        <div className={classNames(s.cardsItem, {[s.cardTwoAnimation]: isTitlelShown})}>
          <img src={imageTwo} alt='number two' className={s.cardsNumberImg}/>
          <div className={s.desctopImgPlaceholderTwo}></div>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>{t('workProcess.second.title')}</h3>
            <p className={s.cardsListItem}>{t('workProcess.second.firstItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.second.secondItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.second.thirdItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.second.fifthItem')}</p>
          </div>
        </div>
        <div className={classNames(s.cardsItem, {[s.cardThreeAnimation]: isTitlelShown})}>
          <img src={imageThree} alt='number three' className={s.cardsNumberImg}/>
          <div className={s.desctopImgPlaceholderThree}></div>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>{t('workProcess.someTitles.one')}</h3>
            <p className={s.cardsListItem}>{t('workProcess.third.firstItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.third.secondItem')}</p>
          </div>
        </div>
        <div className={classNames(s.cardsItem, {[s.cardFourAnimation]: isTitlelShown})}>
          <img src={imageFour} alt='number four' className={s.cardsNumberImg}/>
          <div className={s.desctopImgPlaceholderFour}></div>
          <div className={s.cardsList}>
            <h3 className={s.cardsItemTitle}>{t('workProcess.someTitles.two')}</h3>
            <p className={s.cardsListItem}>{t('workProcess.fourth.firstItem')}</p>
            <p className={s.cardsListItem}>{t('workProcess.fourth.secondItem')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
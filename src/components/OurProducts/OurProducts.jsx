import { useState, useEffect } from 'react';
import { useStyles } from './OurProducts.styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as StarIcon } from 'assets/icons/starIcon.svg';
import studioImg from 'assets/images/studio.png'
import studioDescImg from 'assets/images/studioDesc.jpg'
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import 'utils/i18next';

function OurProducts() {
  const s = useStyles();
  const { t } = useTranslation();
  const { ref: blockRef, inView: isBlockVisible } = useInView();
  const [isBlockShown, setIsBlockShown] = useState(false);

  useEffect(() => {
    if (isBlockVisible) {
      setIsBlockShown(true)
    }
  }, [isBlockVisible])

  return (
    <div className={s.root}>
      <h2 className={classNames(s.title, { [s.titleAnimation]: isBlockShown })} ref={blockRef}>{t('products.title')}</h2>
      <div className={s.cardsContainer}>
        <div className={classNames(s.card, { [s.firstCardAnimation]: isBlockShown })}>
          <img src={studioDescImg} alt='studio foto' className={s.desctopFoto}></img>
        </div>
        <div className={s.mobilePlaseholder}></div>
        <div className={classNames(s.card, { [s.secondaCardAnimation]: isBlockShown })}>
          <h3 className={s.cardTitle}><span className={s.line}>/</span>{t('products.firstCard.title')}</h3>
          <ul className={s.carlList}>
            <li className={s.listItem}><StarIcon />{t('products.firstCard.firstItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.firstCard.secondItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.firstCard.thirdItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.firstCard.fourthItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.firstCard.fifthItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.firstCard.sixthItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.firstCard.seventhItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.firstCard.eightItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.firstCard.ninthItem')}</li>
          </ul>
        </div>
        <div className={classNames(s.card, { [s.thirdCardAnimation]: isBlockShown })}>
          <h3 className={s.cardTitle}><span className={s.line}>/</span>{t('products.secondCard.title')}</h3>
          <ul className={s.carlList}>
            <li className={s.listItem}><StarIcon />{t('products.secondCard.firstItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.secondCard.secondItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.secondCard.thirdItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.secondCard.fourthItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.secondCard.fifthItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.secondCard.sixthItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.secondCard.seventhItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.secondCard.eightItem')}</li>
          </ul>
        </div>
        <div className={classNames(s.card, { [s.fourCardAnimation]: isBlockShown })}>
          <h3 className={s.cardTitle}><span className={s.line}>/</span>{t('products.thirdCard.title')}</h3>
          <ul className={s.carlList}>
            <li className={s.listItem}><StarIcon />{t('products.thirdCard.firstItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.thirdCard.secondItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.thirdCard.thirdItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.thirdCard.fourthItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.thirdCard.fifthItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.thirdCard.sixthItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.thirdCard.seventhItem')}</li>
            <li className={s.listItem}><StarIcon />{t('products.thirdCard.eightItem')}</li>
          </ul>
        </div>
        <div className={s.mobilePlaseholder}></div>
      </div>
      <img src={studioImg} alt='studio foto' className={s.studioFoto}></img>
    </div>
  );
}

export default OurProducts;


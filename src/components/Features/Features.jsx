import { useState, useEffect } from 'react';
import { useStyles } from './Features.styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as TransferIcon } from 'assets/icons/transferIcon.svg';
import { ReactComponent as FundsIcon } from 'assets/icons/fundsIcon.svg';
import { ReactComponent as UsersIcon } from 'assets/icons/usersIcon.svg';
import { ReactComponent as MovieIcon } from 'assets/icons/movieIcon.svg';
import { ReactComponent as MusculeIcon } from 'assets/icons/muscleIcon.svg';
import { ReactComponent as RocketIcon } from 'assets/icons/rocketIcon.svg';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import 'utils/i18next';

function Features() {
  const s = useStyles();
  const { t } = useTranslation();
  const { ref: labelRef, inView: isLabelVisible } = useInView();
  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isLabelShown, setIsLabelShown] = useState(false);
  const [isTitlelShown, setIsTitleShown] = useState(false);

  useEffect(() => {
    if (isLabelVisible) {
      setIsLabelShown(true)
    }
    if (isTitleVisible) {
      setIsTitleShown(true)
    }
    
  }, [isLabelVisible, isTitleVisible])
  
  return (
    <div className={s.root}>
      <h2 className={classNames(s.title, {[s.titleAnimation]: isTitlelShown})} ref={titleRef}>{t('ourFeatures.title')}</h2>
      <div className={classNames(s.label, {[s.labelAnimation]: isLabelShown})} ref={labelRef}>{t('ourFeatures.label')}</div>
      <p className={classNames(s.describe, {[s.describeAnimation]: isLabelShown})}>{t('ourFeatures.subTitle')}</p>
      <ul className={s.featuresList}>
        <li className={classNames(s.featuresItem, s.firstCard, { [s.featuresItemFirstAnimation]: isLabelShown })}>
          <div className={s.featuresIconContainer}>
            <TransferIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.firstItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.firstItem.descriptions')}</p>
          </div>
        </li>
        <li className={classNames(s.featuresItem, s.secondCard, {[s.featuresItemFirstAnimation]: isLabelShown})}>
          <div className={s.featuresIconContainer}>
            <FundsIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.secondItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.secondItem.descriptions')}</p>
          </div>
        </li>
        <li className={classNames(s.featuresItem, s.thirdCard, {[s.featuresItemFirstAnimation]: isLabelShown})}>
          <div className={s.featuresIconContainer}>
            <UsersIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.thirdItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.thirdItem.descriptions')}</p>
          </div>
        </li>
        <li className={classNames(s.featuresItem, s.fourthCard, {[s.featuresItemSecondAnimation]: isLabelShown})}>
          <div className={s.featuresIconContainer}>
            <MovieIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.fourthItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.fourthItem.descriptions')}</p>
          </div>
        </li>
        <li className={classNames(s.featuresItem, s.fifthCard, {[s.featuresItemSecondAnimation]: isLabelShown})}>
          <div className={s.featuresIconContainer}>
            <MusculeIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.fifthItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.fifthItem.descriptions')}</p>
          </div>
        </li>
        <li className={classNames(s.featuresItem, s.sixthCard, {[s.featuresItemSecondAnimation]: isLabelShown})}>
          <div className={s.featuresIconContainer}>
            <RocketIcon/>
          </div>
          <div>
            <h3 className={s.featureTitle}>{t('ourFeatures.cards.sixthItem.title')}</h3>
            <p className={s.featureDescription}>{t('ourFeatures.cards.sixthItem.descriptions')}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Features;


import { useState, useEffect } from 'react';
import { useStyles } from './WhoAreWe.styles';
import { useTranslation } from 'react-i18next';
import { ReactComponent as StarIcon } from 'assets/icons/starIcon.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/playIcon.svg';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import 'utils/i18next';

function WhoAreWe() {
  const s = useStyles();
  const { t } = useTranslation();
  const [isVideoClicked, setIsVideoClicked] = useState(false)
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
    <div className={s.root} id='aboutUs'>
      <div className={s.desctopContainer}>
        <div className={s.leftBlock}>
          <div className={s.labelContainer}>
            <div className={classNames(s.label, { [s.labelAnimation]: isLabelShown })} ref={labelRef}>{t('whoWeAre.label')}</div>
          </div>
        </div>
        <div className={s.rightBlock}>
          <div className={classNames(s.title, { [s.titleAnimation]: isTitlelShown })} ref={titleRef}>
            {t('whoWeAre.title')}
            <div>{t('whoWeAre.description')}</div>
          </div>
          <ul className={s.reasonList}>
            <li className={s.reasonItem}><StarIcon className={s.starIcon} />{t('whoWeAre.reasonList.firstItem')}</li>
            <li className={s.reasonItem}><StarIcon className={s.starIcon} />{t('whoWeAre.reasonList.secondItem')}</li>
            <li className={s.reasonItem}><StarIcon className={s.starIcon} />{t('whoWeAre.reasonList.thirdItem')}</li>
            <li className={s.reasonItem}><StarIcon className={s.starIcon} />{t('whoWeAre.reasonList.fourthItem')}</li>
            <li className={s.reasonItem}><StarIcon className={s.starIcon} />{t('whoWeAre.reasonList.fifthItem')}</li>
          </ul>
        </div>
      </div>
      <div className={s.video} onClick={() => setIsVideoClicked(true)}>
        {isVideoClicked ?
          <iframe src='https://www.youtube.com/embed/eeRd0drLd6Y?si=Q3HhcFJsvhorD3yZ' className={s.preview} width={320} height={190} title='video' allowFullScreen></iframe>
          :
          <img className={s.preview} src='https://i3.ytimg.com/vi/eeRd0drLd6Y/maxresdefault.jpg' alt='video_preview' />
        }
        {!isVideoClicked && <button type='button' className={s.videoBtn} aria-label='play'><PlayIcon /></button>}
      </div>
    </div>
  );
}

export default WhoAreWe;
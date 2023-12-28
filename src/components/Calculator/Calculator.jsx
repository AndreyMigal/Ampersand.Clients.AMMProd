import { useStyles } from './Calculator.styles';
import { useTranslation } from 'react-i18next';
import Select from 'react-select'
import 'utils/i18next';
import { useState, useEffect,useRef } from 'react';
import {useDurationOptions} from './hooks/useDurationOptions';
import { subTypeOfContentConst } from './constants/subTypeOfContent';
import get from 'lodash/get';
import { useTypeOfContentOptions } from './hooks/useTypeOfContentOptions';
import { useImportantOptions } from './hooks/useImportantOptions';
import { customStyles } from 'styles/customStyles';
import Modal from 'components/Modal/Modal';
import { useInView } from 'react-intersection-observer';
import calculatorPhoto from 'assets/images/calculatorPhoto.jpg'
import classNames from 'classnames';
import {Option} from './components/Options'


function Calculator() {
  const s = useStyles();
  const { t } = useTranslation();
  const durationOptions = useDurationOptions();
  const importantOptions = useImportantOptions();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {videoSelectOptions, animationSelectOptions} = useTypeOfContentOptions();
  const [typeOfContent, setTypeOfContent] = useState('video');
  const [subTypeOfContent, setSubTypeOfContent] = useState(null);
  const [price, setPrice] = useState(0);
  const [factors, setFactors] = useState([]);
  const [finalPrice, setFinalprice] = useState(0)
  const [isCalculated, setIsCalculated] = useState(false);
  const { ref: descriptionRef, inView: isDescriptionVisible } = useInView();
  const { ref: titleRef, inView: isTitleVisible } = useInView();
  const [isTitleShown, setIsTitleShown] = useState(false);
  const [isDescriptionlShown, setIsDescriptionShown] = useState(false);
  const ref = useRef();

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }

   useEffect(() => {
    if (isDescriptionVisible) {
      setIsDescriptionShown(true)
    }
    if (isTitleVisible) {
      setIsTitleShown(true)
    }
    
  }, [isDescriptionVisible, isTitleVisible])

  useEffect(() => {
    if (subTypeOfContent === subTypeOfContentConst.tiktokVideo) {
      setPrice({value: 1000, label: null})
    }
    setFinalprice(factors.reduce((acc, factor) => {
      acc += (Number(factor.value.slice(0, 3)) * price) - price
      return acc
    }, price))
  }, [subTypeOfContent, price, factors])

  const handleContentTypeClick = (e) => {
    setTypeOfContent(e.target.value);
    setSubTypeOfContent(null);
    setFactors([]);
    setIsCalculated(false);
    setPrice({ value: 0, label: null });
  }

  const handleSubTypeOfContentChange = (e) => {
    setSubTypeOfContent(e.value);
    setFactors([]);
    setIsCalculated(false);
    setPrice({ value: 0, label: null });
  }

  const handleCalculatedIfValid = () => {
    if (subTypeOfContent === subTypeOfContentConst.tiktokVideo) {
      if (subTypeOfContent && finalPrice !== 0) {
          setIsCalculated(true);
          window.scrollBy({left: 0,  top: 200, behavior: 'smooth'})
      } else {
        return
        }
    } else {
      if (subTypeOfContent && price !== 0 && finalPrice !== 0) {
        setIsCalculated(true);
        window.scrollBy({left: 0,  top: 200, behavior: 'smooth'})
      } else {
        return
      }
    } 
  }
  
  return (
    <div className={s.root} id='priceCalculator'>
      <h2 className={classNames(s.title, {[s.titleAnimation]: isTitleShown})} ref={titleRef}>{t('calculator.title')}</h2>
      <p className={classNames(s.description, {[s.descriptionAnimation]: isDescriptionlShown})} ref={descriptionRef}>{t('calculator.subTitle')}</p>
      <div className={s.formContainer}>
        <form className={s.calculatorForm}>
          <div className={s.radioContainer}>
            <label className={s.radioLabel}>
              {t('calculator.video')}
              <input defaultChecked={typeOfContent==='video'} type='radio' name='contentType' value='video' className={s.typeOfContent} onClick={(e) => handleContentTypeClick(e)} />
              <span className={s.checkmark}></span>
              <p className={s.checkmarkInner}></p>
            </label>
            <label className={s.radioLabel}>
              {t('calculator.animation')}
              <input defaultChecked={typeOfContent==='animation'} type='radio' name='contentType' value='animation' className={s.typeOfContent} onClick={(e) => handleContentTypeClick(e)}/>
              <span className={s.checkmark}></span>
              <p className={s.checkmarkInner}></p>
            </label>
          </div>
          <div className={s.formTitle}>{t('calculator.form')}</div>
          {typeOfContent === 'video' &&
            <Select isSearchable={false} styles={customStyles} options={videoSelectOptions} placeholder={t('calculator.formPlaceholderType')} onChange={(e)=> handleSubTypeOfContentChange(e)}/>
          }
          {typeOfContent === 'animation' &&
            <Select isSearchable={false} styles={customStyles} options={animationSelectOptions} placeholder={t('calculator.formPlaceholderType')} onChange={(e)=> handleSubTypeOfContentChange(e)}/>
          }
          {subTypeOfContent && subTypeOfContent !== subTypeOfContentConst.tiktokVideo &&
            <>
              <div className={s.formTitle}>{t('calculator.duration')}</div>
              <Select isSearchable={false} styles={customStyles} ref={ref} options={get(durationOptions, subTypeOfContent )} placeholder={t('calculator.formPlaceholderDuration')} value={price.value} onChange={(e) => setPrice(e.value)} />
            </>   
          }
          {subTypeOfContent && price.value !== 0 &&
            <>
              <div className={s.formTitle}>{t('calculator.options')}</div>
              <Select
                isSearchable={false}
                styles={customStyles}
                options={get(importantOptions, subTypeOfContent)}
                isMulti
                hideSelectedOptions={false}
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                placeholder={t('calculator.formPlaceholderOptions')}
                value={factors}
                onChange={(e) => setFactors(e)}
                components={{ Option }}
              />
            </>
          }
          {price !== 0 &&
            <button className={s.submitBtn} type='button' onClick={handleCalculatedIfValid}>
              {t('calculator.btn')}
            </button>
          }
        </form>
        <img src={calculatorPhoto} alt='mobile phone' className={classNames(s.calculatorImg, {[s.calculatorImgAnimation]: isDescriptionlShown })}></img>
        {isCalculated && <div className={s.calculatedBlock}>
          <div className={s.finalPrice}>$ {finalPrice > 1000 ? Math.round(finalPrice / 100) * 100 : Math.round(finalPrice / 10) * 10}</div>
          <div className={s.disclaimerTitle}>{t('calculator.disclaimerTitle')}</div>
          <div className={s.videoOptionsContainer}>
            <p>
              <span className={s.videoOptionsTitle}>{t('calculator.type')}:</span>
              <span className={s.videoOptionsValue}>{typeOfContent}</span>
            </p>
            <p>
              <span className={s.videoOptionsTitle}>{t('calculator.form')}:</span>
              <span className={s.videoOptionsValue}>{t(`calculator.${typeOfContent === 'video' ? 'videoOption' : 'animationOption'}.${subTypeOfContent}`)}</span>
            </p>
            <p>
              <span className={s.videoOptionsTitle}>{t('calculator.duration')}:</span>
              <span className={s.videoOptionsValue}>{price.label}</span>
            </p>
            <p>
              <span className={s.videoOptionsTitle}>{t('calculator.options')}:</span>
              <span className={s.optionsValues}>{factors.map((factor, i) => <span key={i}>{factor.label}</span>)}</span>
            </p>
          </div>
          <div className={s.finalpriceContainer}>
            <div className={s.finalPriceWrapper}>
              <div className={s.finalPriceDesctop}>$ {finalPrice > 1000 ? Math.round(finalPrice / 100) * 100 : Math.round(finalPrice / 10) * 10}</div>
              <div className={s.disclaimerTitleDesctop}>{t('calculator.disclaimerTitle')}</div>
            </div>
            <div className={s.videoDisclaimer}>{t('calculator.disclaimer')}</div>
            <button className={s.modalBtn} onClick={handleModalOpen}>
              {t('title.mainBtn')}
            </button>
          </div>
        </div>}
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default Calculator;
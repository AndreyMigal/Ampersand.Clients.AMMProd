import { useStyles } from './Modal.styles';
import { ReactComponent as CloseIcon } from 'assets/icons/closeIcon.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/phoneIcon.svg';
import pigImg from 'assets/images/pigImg.png';
import foxImg from 'assets/images/foxImg.png';
import pigImgDesc from 'assets/images/pigImgDesc.png';
import foxImgDesc from 'assets/images/foxImgDesc.png';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import 'utils/i18next';
import { tel } from 'helpers/constants';
import { useEffect } from 'react';

function Modal({isModalOpen, setIsModalOpen}) {
  const s = useStyles();
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmited, setIsSubmited] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const myForm = useRef()

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsDirty(true);
      if (isNameValid && isPhoneValid) {
          const formData = {
              fullname: name,
              phone: phone,
              email: email
          };
          const encoded = encodeURI('https://api.ampersand-it.com/public/contactus/amm/amm.prod1@gmail.com');
          fetch(encoded, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Client-Id": "amm_prod_client",
                  "Client-Secret": "vsKxWYBjifROzMDc1Y2zDEua3vmOkNIUptYf0bdI"
              },
              body: JSON.stringify(formData)
          })
              .then(response => {
                  if (response.ok) {
                      console.log("Form successfully submitted");
                      setIsSubmited(true);
                      setIsDirty(false);
                  } else {
                      throw new Error('Ошибка при отправке данных на сервер');
                  }
              })
              .catch((error) => alert(error));
      }
  }

  useEffect(() => {
    name.length > 2 ? setIsNameValid(true) : setIsNameValid(false);
    email.length > 5 && email.includes('@') ?  setIsEmailValid(true) :  setIsEmailValid(false);
    phone.toString().length >= 10 && phone.toString().length <= 13 ? setIsPhoneValid(true) : setIsPhoneValid(false);
  }, [name, email, phone])
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmited(false);
    setName('');
    setPhone('');
    setEmail('');
    setIsNameValid(false);
    setIsPhoneValid(false);
    setIsEmailValid(false);
    setIsDirty(false);
    document.body.style.overflow = 'auto';
  }
 
  return (
    <>
      {isModalOpen &&
        <div className={s.backdrop} onClick={() => handleCloseModal()}></div>
      }
      <CSSTransition
        in={isModalOpen}
        unmountOnExit
        timeout={250}
        classNames='modal'
      >
        <div className={classNames(s.contactsModal, {[s.successModal]: isSubmited})}>
          {isSubmited ?
            <div className={s.successfullForm}>
              <h2 className={s.successTitle}>{t("contactModal.successTitle")}</h2>
              <p className={s.successDescription}>{t("contactModal.description")}</p>
              <p className={s.phoneContainer}><PhoneIcon className={s.phoneIcon} />{tel}</p>
              <p className={s.successRequest}>{t("contactModal.request")}</p>
              <img src={foxImg} className={s.foxLogo} alt='fox mascot'/>
              <img src={foxImgDesc} className={s.foxLogoDesc} alt='fox mascot'/>
            </div>
            :
            <div className={s.modalContainer}>
              <img src={pigImg} className={s.pigLogo} alt='pig mascot'/>
              <img src={pigImgDesc} className={s.pigLogoDesc} alt='pig mascot'/>
              <h2 className={s.modalTitle}>{t("contactModal.title")}</h2>
              <form className={s.contactForm} name="modalForm" method="POST" ref={myForm}>
                <input type='hidden' name='form-name' value='modalForm'/>
                <label className={classNames({[s.errorState]: !isNameValid && isDirty})}>
                  <span>{ t("contactModal.name") }</span>
                  <input required type="text" autoComplete="off" className={s.contactInput} placeholder={t('contactModal.namePlaceholder')} name='name' value={name} onChange={(e) => setName(e.target.value)} />
                  {!isNameValid && isDirty && <span className={s.error}>{t("error")}</span>}
                </label>
                <label className={classNames({[s.errorState]: !isPhoneValid && isDirty})}>
                  <span>{ t("contactModal.phoneNumber") }</span>
                  <input required type="number" autoComplete="off" className={s.contactInput} name='phone' placeholder='+380' value={phone} onChange={(e) => setPhone(e.target.value)} />
                  {!isPhoneValid && isDirty && <span className={s.error}>{t("error")}</span>}
                </label>
                <label className={classNames({[s.errorState]: !isEmailValid && isDirty})}>
                  <span>{ t("contactModal.email") }</span>
                  <input required type="email" autoComplete="off" className={s.contactInput} placeholder={t('contactModal.emailPlaceholder')} name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  {!isEmailValid && isDirty && <span className={s.error}>{t("error")}</span>}
                </label>
                <button className={s.submitBtn} type='button' onClick={(e) => handleSubmitClick(e)}>
                  {t("contactModal.btn")}
                </button>
              </form>
            </div>
          }
          <button className={s.modalCloseBtn} onClick={()=> handleCloseModal()}>
            <CloseIcon/>
          </button>
        </div>
      </CSSTransition>
    </>
  );
}

export default Modal;


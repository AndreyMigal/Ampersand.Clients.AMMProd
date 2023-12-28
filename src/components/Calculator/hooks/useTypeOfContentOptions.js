import { useTranslation } from 'react-i18next';
import { subTypeOfContentConst } from '../constants/subTypeOfContent';


export function useTypeOfContentOptions()  {
  const { t } = useTranslation();

  const videoSelectOptions = [
    { value: subTypeOfContentConst.imageVideo, label: t('calculator.videoOption.imageVideo') },
    { value: subTypeOfContentConst.advertisingVideo, label: t('calculator.videoOption.advertisingVideo') },
    { value: subTypeOfContentConst.interviewsVideo, label: t('calculator.videoOption.interviewsVideo') },
    { value: subTypeOfContentConst.youtubeVideo, label: t('calculator.videoOption.youtubeVideo') },
    { value: subTypeOfContentConst.tiktokVideo, label: t('calculator.videoOption.tiktokVideo') },
  ];

  const animationSelectOptions = [
    { value: subTypeOfContentConst.vector2dAnimation, label: t('calculator.animationOption.vector2dAnimation') },
    { value: subTypeOfContentConst.perframe2dAnimation, label: t('calculator.animationOption.perframe2dAnimation') },
    { value: subTypeOfContentConst.photorealistic3dAnimation, label: t('calculator.animationOption.photorealistic3dAnimation') },
    { value: subTypeOfContentConst.cartoon3dAnimation, label: t('calculator.animationOption.cartoon3dAnimation') },
    { value: subTypeOfContentConst.motion2dAnimation, label: t('calculator.animationOption.motion2dAnimation') },
    { value: subTypeOfContentConst.motion3dAnimation, label: t('calculator.animationOption.motion3dAnimation') },
  ];


  return {videoSelectOptions, animationSelectOptions}
}
import { useTranslation } from 'react-i18next';


export function useDurationOptions()  {
  const { t } = useTranslation();

 
  const imageVideodurationOptions = [
    {value: 650, label: '30s-60s'},
    {value: 750, label: '60s-150s'},
    {value: 1000, label: '150s-180s'},
    {value: 1200, label: '>180s'},
  ];

  const marketVideoDurationOptios = [
    {value: 2000, label: '20s-30s'},
    {value: 3000, label: '30s-40s'},
    {value: 4000, label: '40s-50s'},
    {value: 5000, label: '50s-60s'}
  ];

  const interviewVideoDurationOptions = [
    {value: 270, label: '30s-180s'},
    {value: 450, label: '180s-20m'},
    {value: 550, label: '20m-40m'},
    {value: 680, label: '40m-1h'},
    {value: 800, label: '>1h'},
  ];

  const vector2dAnimationDurationOptions = [
    {value: 500, label: '10s-20s'},
    {value: 750, label: '20s-30s'},
    {value: 1000, label: '30s-40s'},
    {value: 1250, label: '40s-50s'},
    {value: 1500, label: '50s-60s'},
    {value: 1800, label: '60s-150s'},
    {value: 2200, label: '150s-180s'},
  ];

  const perframe2dAnimationDurationOptions = [
    {value: 1300, label: '10s-20s'},
    {value: 1700, label: '20s-30s'},
    {value: 2000, label: '30s-40s'},
    {value: 2400, label: '40s-50s'},
    {value: 2800, label: '50s-60s'},
    {value: 3200, label: '60s-150s'},
    {value: 4400, label: '150s-180s'},
  ];
  
  const photorealistick3dAnimationDurationOptions = [
    {value: 3000, label: '10s-20s'},
    {value: 3500, label: '20s-30s'},
    {value: 4000, label: '30s-40s'},
    {value: 4500, label: '40s-50s'},
    {value: 5000, label: '50s-60s'},
  ];

  const cartoon3dAnimationDurationOptions = [
    {value: 1500, label: '10s-20s'},
    {value: 2000, label: '20s-30s'},
    {value: 2500, label: '30s-40s'},
    {value: 3000, label: '40s-50s'},
    {value: 3500, label: '50s-60s'},
  ];

  const moution2dAnimationDurationOptions = [
    {value: 400, label: '10s-20s'},
    {value: 500, label: '20s-30s'},
    {value: 600, label: '30s-40s'},
    {value: 700, label: '40s-50s'},
    {value: 850, label: '50s-60s'},
  ];

  const moution3dAnimationDurationOptions = [
    {value: 1000, label: '10s-20s'},
    {value: 1200, label: '20s-30s'},
    {value: 1400, label: '30s-40s'},
    {value: 1600, label: '40s-50s'},
    {value: 1800, label: '50s-60s'},
  ];

  const youtubeVideoDurationOptions = [
    {value: 800, label: `4 ${t('calculator.video')}`},
    {value: 1200, label: `6 ${t('calculator.video')}`},
    {value: 1400, label: `8 ${t('calculator.video')}`},
  ]

  return {
    youtubeVideo: youtubeVideoDurationOptions,
    motion3dAnimation: moution3dAnimationDurationOptions,
    motion2dAnimation: moution2dAnimationDurationOptions,
    cartoon3dAnimation: cartoon3dAnimationDurationOptions,
    photorealistic3dAnimation: photorealistick3dAnimationDurationOptions,
    perframe2dAnimation: perframe2dAnimationDurationOptions,
    vector2dAnimation: vector2dAnimationDurationOptions,
    imageVideo: imageVideodurationOptions, 
    advertisingVideo: marketVideoDurationOptios, 
    interviewsVideo: interviewVideoDurationOptions,
  }
};
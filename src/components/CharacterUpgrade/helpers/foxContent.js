import foxOld from '../assets/fox/Foxi_Vector_old-01.svg';
import foxOldHelmetBack from '../assets/fox/FV_old_HELMET_back._1ai-01.svg';
import foxOldHelmetFront from '../assets/fox/FV_old_HELMET_Front-01_fixed.svg';
import foxOldBody from '../assets/fox/FV_old_Body-01.svg';
import foxOldArmLeft from '../assets/fox/FV_old_ARM_Left-01.svg';
import foxOldArmRight from '../assets/fox/FV_old_ARM_Right-01.svg';
import foxOldForearmLeft from '../assets/fox/FV_old_ForearmARM_Left-01.svg';
import foxOldForearmRight from '../assets/fox/FV_old_ForeARM_Right-01.svg';
import foxOldLegLeft from '../assets/fox/FV_old_LEG_Left-01.svg';
import foxOldLegRight from '../assets/fox/FV_old_LEG_Right-01.svg';

import foxNew from '../assets/fox/Foxi_Vector_new-01.svg';
import foxNewHelmetBack from '../assets/fox/FV_new_Helmet_Face_Back_1-01.svg';
import foxNewHelmetFront from '../assets/fox/FV_new_Helmet_Face_front-01.svg';
import foxNewBody from '../assets/fox/FV_new_Body-01.svg';
import foxNewArmLeft from '../assets/fox/FV_new_Arm_Left-01.svg';
import foxNewArmRight from '../assets/fox/FV_new_Arm_Right-01.svg';
import foxNewForearmLeft from '../assets/fox/FV_new_ForeArm_Left-01.svg';
import foxNewForearmRight from '../assets/fox/FV_new_ForeArm_Right-01.svg';
import foxNewLegLeft from '../assets/fox/FV_new_LEG_Left-01.svg';
import foxNewLegRight from '../assets/fox/FV_new_LEG_Right-01.svg';

class FoxPart {
	constructor(type, imgs, text = '', number = 0) {
		this.type = type
		this.imgs = imgs
		this.text = text
		this.number = number
	}
}

export default {
	oldItems: [
		new FoxPart('base', [foxOld]),
		new FoxPart('helmet', [foxOldHelmetFront, foxOldHelmetBack]),
		new FoxPart('body', [foxOldBody]),
		new FoxPart('armRight', [foxOldArmRight]),
		new FoxPart('armLeft', [foxOldArmLeft]),
		new FoxPart('forearmRight', [foxOldForearmRight]),
		new FoxPart('forearmLeft', [foxOldForearmLeft]),
		new FoxPart('legRight', [foxOldLegRight]),
		new FoxPart('legLeft', [foxOldLegLeft])
	],
	newFoxBase: new FoxPart('base', [foxNew]),
	newItems: [
		new FoxPart('helmet', [foxNewHelmetFront, foxNewHelmetBack],
			"Аналізуємо відео тренди",
			Math.floor(Math.random() * 10000)),
		new FoxPart('body', [foxNewBody],
			"Адаптуємо під різні формати",
			Math.floor(Math.random() * 10000)),
		new FoxPart('armRight', [foxNewArmRight],
			"Аналізуємо результат відео після створення разом  з вами",
			Math.floor(Math.random() * 10000)),
		new FoxPart('armLeft', [foxNewArmLeft],
			"Підбираємо певні інструменти для досягнення бізнес цілей",
			Math.floor(Math.random() * 10000)),
		new FoxPart('forearmRight', [foxNewForearmRight],
			"Вигадуємо власні відео світи",
			Math.floor(Math.random() * 10000)),
		new FoxPart('forearmLeft', [foxNewForearmLeft],
			"Формуємо індивідуальний продукт та рішення",
			Math.floor(Math.random() * 10000)),
		new FoxPart('legRight', [foxNewLegRight],
			"Підтримуємо клієнта на кожному етапі та після і до початку співпраці",
			Math.floor(Math.random() * 10000)),
		new FoxPart('legLeft', [foxNewLegLeft],
			"Закриваємо питання по створенню контенту комплексно",
			Math.floor(Math.random() * 10000))
	],
	initialPhrase: "Це відео і воно гарне :`)",
	finalePhrase: "Це не просто відео, це інструмент, який має мету досягти результату!",
	fillerPhrases: ["Вау!", "Отакої!", "Нічого собі!", "А що, так можна було?!", "Ого!", "Неймовірно!", "Дивовижно!"]
}
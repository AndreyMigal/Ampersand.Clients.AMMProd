import "./CharacterUpgrade.scss"
import Checkbox from './components/Checkbox/Checkbox';
import Item from "./components/Item/Item";
import { useEffect, useState } from "react";
import foxContent from "./helpers/foxContent";
import { LinearProgress } from "@mui/material";
import { SCREEN_WIDTH } from "helpers/breakpoints";
import ItemThumb from "./components/ItemThumb/ItemThumb";
import { useTranslation } from "react-i18next";
import 'utils/i18next';



function CharacterUpgrade() {
	const { t } = useTranslation()

	const [equipedItems, setEquipedItems] = useState(foxContent.oldItems)
	const [appliedItems, setAppliedItems] = useState([])
	const [bubbleMessage, setBubbleMessage] = useState(t(foxContent.initialPhrase))
	const [agencyUpgraded, setAgencyUpgraded] = useState(false)

	// Actions

	function start() {
		setEquipedItems(foxContent.oldItems)
		setAppliedItems([])
		setBubbleMessage(t(foxContent.initialPhrase))
		setAgencyUpgraded(false)
	}

	function finish() {
		setEquipedItems([foxContent.newFoxBase, ...foxContent.newItems])
		setBubbleMessage(t(foxContent.finalePhrase))
		setAppliedItems(foxContent.newItems.map(el => el.type))
		setAgencyUpgraded(true)
	}

	function applyItem(item) {
		if (appliedItems.includes(item.type)) {
			if (appliedItems.length >= foxContent.newItems.length) setAgencyUpgraded(false)
			setEquipedItems(equipedItems.map(el => el.type === item.type ? foxContent.oldItems.find(oldItem => oldItem.type === item.type) : el))
			setAppliedItems(appliedItems.filter(el => el !== item.type))
			setBubbleMessage('')
		}
		else {
			if (appliedItems.length + 1 >= foxContent.newItems.length) finish()
			else {
				setEquipedItems(equipedItems.map(el => el.type === item.type ? item : el))
				setAppliedItems([...appliedItems, item.type])
				setBubbleMessage(t(foxContent.fillerPhrases[Math.floor(Math.random() * foxContent.fillerPhrases.length)]))
			}
		}
	}

	// Checkboxes

	function handleCheckboxOnChange(e) {
		if (e.target.checked) {
			if (agencyUpgraded) start()
			else finish()
		}
	}

	// Responsive features

	const [isMobile, setIsMobile] = useState(window.innerWidth < SCREEN_WIDTH.DESKTOP)

	useEffect(() => {
		function handleResize() {
			setIsMobile(window.innerWidth < SCREEN_WIDTH.DESKTOP)
		}

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const [activeItem, setActiveItem] = useState(foxContent.newItems[0])

	function handleButtonOnCLick(item) {
		applyItem(item)
		const itemIndex = foxContent.newItems.findIndex(el => el.type === item.type)
		if (
			itemIndex + 1 < foxContent.newItems.length &&
			!appliedItems.includes(item.type)
		) setActiveItem(foxContent.newItems[itemIndex + 1])
	}

	// Layout

	return (
		<div className={'character-upgrade'}>

			<div className="header">
				<div className="checkbox-wrapper">
					<Checkbox checked={!agencyUpgraded} onChange={handleCheckboxOnChange}>{t('characterUpgrade.agency')} 1.0</Checkbox>
				</div>
				<LinearProgress
					variant="determinate"
					value={100 / foxContent.newItems.length * appliedItems.length} />
				<div className="checkbox-wrapper">
					<Checkbox checked={agencyUpgraded} onChange={handleCheckboxOnChange}>{t('characterUpgrade.agency')} 2.0</Checkbox>
				</div>
			</div>

			<div className="body">
				<div className="items">
					{foxContent.newItems.filter((item, i) => i % 2 === 0).map((item, i) => (
						isMobile ?
							<ItemThumb
								className={item.type === activeItem.type ? 'active' : ''}
								key={i}
								item={item}
								applied={appliedItems.includes(item.type)}
								onClick={() => setActiveItem(item)}
							/> :
							<Item
								key={i}
								item={item}
								applied={appliedItems.includes(item.type)}
								onClick={() => applyItem(item)}
							/>
					))}
				</div>

				<div className="character-container">
					{equipedItems.map(item => item.imgs.map((img, i) => (
						<img
							key={item.type + i}
							src={img}
							className={item.type + (i ? ' back' : '')}
							alt="Fox"
							draggable={false}
						/>
					)))}

					{bubbleMessage && <div className="bubble">
						{bubbleMessage}
					</div>}
				</div>

				<div className="items">
					{foxContent.newItems.filter((item, i) => i % 2 !== 0).map((item, i) => (
						isMobile ?
							<ItemThumb
								className={item.type === activeItem.type ? 'active' : ''}
								key={i}
								item={item}
								applied={appliedItems.includes(item.type)}
								onClick={() => setActiveItem(item)}
							/> :
							<Item
								key={i}
								item={item}
								applied={appliedItems.includes(item.type)}
								onClick={() => applyItem(item)}
							/>
					))}
				</div>
			</div>

			{isMobile && (
				<Item
					item={activeItem}
					applied={appliedItems.includes(activeItem.type)}
					action={() => handleButtonOnCLick(activeItem)}
				/>
			)}
		</div>
	);
}

export default CharacterUpgrade;
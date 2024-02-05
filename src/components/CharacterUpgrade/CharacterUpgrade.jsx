import "./CharacterUpgrade.scss"
import Checkbox from './components/Checkbox/Checkbox';
import Item from "./components/Item/Item";
import { useEffect, useState } from "react";
import foxContent from "./helpers/foxContent";
import { LinearProgress } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';


function CharacterUpgrade() {
	const [equipedItems, setEquipedItems] = useState(foxContent.oldItems)
	const [appliedItems, setAppliedItems] = useState([])
	const [bubbleMessage, setBubbleMessage] = useState(foxContent.initialPhrase)
	const [agencyUpgraded, setAgencyUpgraded] = useState(false)

	// Actions

	function start() {
		setEquipedItems(foxContent.oldItems)
		setAppliedItems([])
		setBubbleMessage(foxContent.initialPhrase)
		setAgencyUpgraded(false)
	}

	function finish() {
		setEquipedItems([foxContent.newFoxBase, ...foxContent.newItems])
		setBubbleMessage(foxContent.finalePhrase)
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
				setBubbleMessage(foxContent.fillerPhrases[Math.floor(Math.random() * foxContent.fillerPhrases.length)])
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

	// Layout

	return (
		<div className={'character-upgrade'}>
			<div className="header">
				<div className="checkbox-wrapper">
					<Checkbox checked={!agencyUpgraded} onChange={handleCheckboxOnChange}>Агенція 1.0</Checkbox>
				</div>
				<LinearProgress
					variant="determinate"
					value={100 / foxContent.newItems.length * appliedItems.length} />
				<div className="checkbox-wrapper">
					<Checkbox checked={agencyUpgraded} onChange={handleCheckboxOnChange}>Агенція 2.0</Checkbox>
				</div>
			</div>

			<div className="body">
				<div className="items">
					{foxContent.newItems.filter((item, i) => i % 2 === 0).map((item, i) => (
						<Item key={i} item={item} applied={appliedItems.includes(item.type)} onClick={() => applyItem(item)} />
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
						<Item key={i} item={item} applied={appliedItems.includes(item.type)} onClick={() => applyItem(item)} />
					))}
				</div>
			</div>
		</div>
	);
}

export default CharacterUpgrade;
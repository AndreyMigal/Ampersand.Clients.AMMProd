export default function useCharacterUpgrade() {
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

	return {
		equipedItems,
		setEquipedItems,
	}
}
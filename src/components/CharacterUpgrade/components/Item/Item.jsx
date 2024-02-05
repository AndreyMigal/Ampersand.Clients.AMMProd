import './Item.scss'
import Button from '../Button/Button'

export default function Item({ item, applied, ...props }) {
	const classList = ["item"]
	if (applied) classList.push("applied")

	return (
		<div className={classList.join(" ")} {...props}>
			<div className="item-img obtained">
				{item.imgs.map((img, i) => (
					<img className={item.type + (i ? ' back' : '')} src={img} alt="Icon" draggable={false} />
				))}
			</div>
			<div className="item-details">
				<h6>{'Upgrade #' + item.number}</h6>
				<p>{item.text}</p>
			</div>
			{/* <Button>Застосувати</Button> */}
		</div>
	)
}
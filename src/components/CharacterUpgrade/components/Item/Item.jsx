import './Item.scss'
import Button from '../Button/Button'
import ItemThumb from '../ItemThumb/ItemThumb'

export default function Item({ item, applied, action, ...props }) {
	const classList = ["item"]
	if (applied) classList.push("applied")

	return (
		<div className={classList.join(" ")} {...props}>
			<ItemThumb item={item} />
			<div className="item-details">
				<h6>{'Upgrade #' + item.number}</h6>
				<p>{item.text}</p>
				{action && (<Button onClick={action}>{applied ? 'Застосовано' : 'Застосувати'}</Button>)}
			</div>
		</div>
	)
}
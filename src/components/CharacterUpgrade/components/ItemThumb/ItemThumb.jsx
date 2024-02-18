import './ItemThumb.scss'

export default function ItemThumb({ item, className, applied, ...props }) {
	const classList = ['item-thumb']
	if (className) classList.push(className)
	if (applied) classList.push('applied')

	return (
		<div className={classList.join(' ')} {...props}>
			{item.imgs.map((img, i) => (
				<img key={i} className={item.type + (i ? ' back' : '')} src={img} alt="Icon" draggable={false} />
			))}
		</div>
	)
}
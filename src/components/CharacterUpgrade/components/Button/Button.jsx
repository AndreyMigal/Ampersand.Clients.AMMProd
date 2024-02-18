import React from 'react';
import './Button.scss'

const Button = (props) => {
	const fullClassName = 'button' +
		(props.primary ? ' primary' : '') +
		(props.secondary ? ' secondary' : '') +
		(props.tertiary ? ' tertiary' : '') +
		(props.xl ? ' xl' : '') +
		(props.l ? ' l' : '') +
		(props.m ? ' m' : '') +
		(props.s ? ' s' : '') +
		(props.xs ? ' xs' : '') +
		(props.className ? ' ' + props.className : '')

	// Shit
	// const parsedChildren = props.children.map((child) => typeof child == 'string' ? (<span>{child}</span>) : child)

	return (
		<button className={fullClassName} onClick={props.onClick}>{props.children}</button>
	);
};

export default Button;
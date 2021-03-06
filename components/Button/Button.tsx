import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
// import cn from 'classnames';

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
	const cn = require('classnames');
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{children}
		</button >
	);
};
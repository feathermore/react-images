import PropTypes from 'prop-types';
import React from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import defaults from '../theme';
import deepMerge from '../utils/deepMerge';
import Icon from './Icon';

function Header ({
	customControls,
	onClose,
	onRotate,
	showCloseButton,
	showRotateButton,
	closeButtonTitle,
	rotateButtonTitle,
	...props,
}, {
	theme,
}) {
	const classes = StyleSheet.create(deepMerge(defaultStyles, theme));

	return (
		<div className={css(classes.header)} {...props}>
			{customControls ? customControls : <span />}
			{!!showRotateButton && (
				<button
					title={rotateButtonTitle}
					className={css(classes.rotate)}
					onClick={onRotate}
				>
				<Icon fill={!!theme.rotate && theme.rotate.fill || defaults.rotate.fill} type="rotate" />
				</button>
			)}
			{!!showCloseButton && (
				<button
					title={closeButtonTitle}
					className={css(classes.close)}
					onClick={onClose}
				>
					<Icon fill={!!theme.close && theme.close.fill || defaults.close.fill} type="close" />
				</button>
			)}
		</div>
	);
}

Header.propTypes = {
	customControls: PropTypes.array,
	onClose: PropTypes.func.isRequired,
	onRotate: PropTypes.func.isRequired,
	showCloseButton: PropTypes.bool,
	showRotateButton: PropTypes.bool
};
Header.contextTypes = {
	theme: PropTypes.object.isRequired,
};

const defaultStyles = {
	header: {
		display: 'flex',
		justifyContent: 'flex-end',
		height: defaults.header.height,
		width: '100%',
		position: 'fixed',
		top: 0,
		right: '10px',
		zIndex: '99'
	},
	close: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'relative',
		top: 0,
		verticalAlign: 'bottom',

		// increase hit area
		height: 40,
		marginRight: -10,
		padding: 10,
		width: 40,
	},
	rotate: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'relative',
		top: 0,
		verticalAlign: 'bottom',

		// increase hit area
		height: 40,
		marginRight: -10,
		padding: 10,
		width: 40,
	}
};

export default Header;

/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import CheckboxControl from '@woocommerce/base-components/checkbox-control';

/**
 * Internal dependencies
 */
import './style.scss';

const CheckoutTermsAndConditions = ( { disabled, onChange, value } ) => {
	const [ withTermsAndConditions, setWithTermsAndConditions ] = useState( false );

	return (
		<div className="wc-block-checkout__add-term-and-conditions">
			<CheckboxControl
				disabled={ disabled }
				label={ __(
					'I accept these terms',
					'woo-gutenberg-products-block'
				) }
				checked={ withTermsAndConditions }
				onChange={ ( isChecked ) => {
					setWithTermsAndConditions( isChecked );
				} }
			/>
			<p>Terms and conditions</p>
		</div>
	);
};

export default CheckoutTermsAndConditions;

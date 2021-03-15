/**
 * External dependencies
 */
import Form from '@woocommerce/base-components/form';
import { useCheckoutContext } from '@woocommerce/base-context';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import AddressStep from './address-step';
import OrderNotesStep from './order-notes-step';
import TermsAndConditionsStep from './terms-and-conditions-step';
import PaymentMethodStep from './payment-method-step';
import ShippingOptionsStep from './shipping-options-step';
import './style.scss';

const CheckoutForm = ({
	requireCompanyField,
	requirePhoneField,
	showApartmentField,
	showCompanyField,
	showOrderNotes,
	showTermsAndConditions,
	showPhoneField,
	allowCreateAccount,
}) => {
	const { onSubmit } = useCheckoutContext();

	return (
		<Form className="wc-block-checkout__form" onSubmit={onSubmit}>
			<AddressStep
				requireCompanyField={requireCompanyField}
				requirePhoneField={requirePhoneField}
				showApartmentField={showApartmentField}
				showCompanyField={showCompanyField}
				showPhoneField={showPhoneField}
				allowCreateAccount={allowCreateAccount}
			/>
			<ShippingOptionsStep />
			<PaymentMethodStep />
			{ showTermsAndConditions && <TermsAndConditionsStep />}
			{ showOrderNotes && <OrderNotesStep />}
		</Form>
	);
};

CheckoutForm.propTypes = {
	requireCompanyField: PropTypes.bool.isRequired,
	requirePhoneField: PropTypes.bool.isRequired,
	showApartmentField: PropTypes.bool.isRequired,
	showCompanyField: PropTypes.bool.isRequired,
	showOrderNotes: PropTypes.bool.isRequired,
	showTermsAndConditions: PropTypes.bool.isRequired,
	showPhoneField: PropTypes.bool.isRequired,
	allowCreateAccount: PropTypes.bool.isRequired,
};

export default CheckoutForm;

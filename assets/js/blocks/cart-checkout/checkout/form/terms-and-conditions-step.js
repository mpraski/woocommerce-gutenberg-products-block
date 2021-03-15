/**
 * External dependencies
 */
 import { __ } from '@wordpress/i18n';
 import { FormStep } from '@woocommerce/base-components/cart-checkout';
 import {
     useCheckoutContext
 } from '@woocommerce/base-context';
 
 /**
  * Internal dependencies
  */
 import CheckoutTermsAndConditions from './terms-and-conditions';
 
 const TermsAndConditionsStep = () => {
     const {
         isProcessing: checkoutIsProcessing,
         termsAndConditions,
         dispatchActions,
     } = useCheckoutContext();
     const { setTermsAndConditions } = dispatchActions;
 
     return (
         <FormStep
             id="terms-and-conditions"
             showStepNumber={ false }
             className="wc-block-checkout__terms-and-conditions"
             disabled={ checkoutIsProcessing }
         >
             <CheckoutTermsAndConditions
                 disabled={ checkoutIsProcessing }
                 onChange={ setTermsAndConditions }
                 value={ termsAndConditions }
             />
         </FormStep>
     );
 };
 
 export default TermsAndConditionsStep;
 
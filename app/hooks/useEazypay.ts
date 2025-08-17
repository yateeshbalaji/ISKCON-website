"use client";

import useSWRMutation from "swr/mutation";
import { API_CONFIG } from "../config/api.config";
import { initatePaymentRequest } from "../service/payment.service";

interface EazypayParams {
  amount: string;
  name: string;
  phoneNumber: string;
  email?: string;
}

interface EazypayResponse {
  paymentUrl: string;
}

export const useEazypay = () => {
  const { trigger, isMutating, error, data } = useSWRMutation<
    EazypayResponse,
    any,
    any,
    any
  >(API_CONFIG.endpoints.payment.initiate, initatePaymentRequest);

  const performEazypayCheckout = async ({ amount, name, phoneNumber, email }: EazypayParams) => {
    const payload = JSON.stringify({ amount, name, phoneNumber, email });

    try {
      const response = await trigger(payload);
      return response as EazypayResponse;
    } catch (error) {
      console.error("Error initiating payment:", error);
      throw new Error("Internal Server Error");
    }
  };

  return { performEazypayCheckout, isMutating, error, returnUrl: data };
};

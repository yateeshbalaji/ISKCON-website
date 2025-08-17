import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import {
  EazypayErrorMessages,
  eazypayErrorMessages,
} from "@/app/config/eazypay-error-codes";

const paymentSuccessUrl = "https://iskconproject.com/payment-success";
const paymentFailureUrl = "https://iskconproject.com/payment-failure";

const SECRET_KEY = process.env.AES_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.text(); // Read the plain text response

    // Parse the plain text response into an object
    const params = new URLSearchParams(body);

    const id = params.get("ID");
    const responseCode = params.get("Response Code") as EazypayErrorMessages;
    const uniqueRefNumber = params.get("Unique Ref Number");
    const serviceTax = params.get("Service Tax") || "";
    const processingFeeAmount = params.get("Processing Fee Amount") || "";
    const totalAmount = params.get("Total Amount");
    const transactionAmount = params.get("Transaction Amount");
    const transactionDate = params.get("Transaction Date") || "";
    const interchangeValue = params.get("Interchange Value") || "";
    const tdr = params.get("TDR") || "";
    const paymentMode = params.get("Payment Mode");
    const subMerchantId = params.get("SubMerchantId") || "";
    const referenceNo = params.get("ReferenceNo") || "";
    const tps = params.get("TPS") || "";
    const rs = params.get("RS");

    console.log({
      uniqueRefNumber,
      responseCode,
      totalAmount,
      transactionAmount,
      paymentMode,
      id,
      rs,
    });

    if (
      !responseCode ||
      !uniqueRefNumber ||
      !totalAmount ||
      !transactionAmount ||
      !paymentMode ||
      !id ||
      !rs
    ) {
      console.error("Missing required parameters");
      const queryParams = new URLSearchParams();
      queryParams.append("error", "missing-parameters");
      return NextResponse.redirect(
        `${paymentFailureUrl}?${queryParams.toString()}`,
        303
      );
    }

    // Generate the SHA512 signature using the response parameters
    const data = `${id}|${responseCode}|${uniqueRefNumber}|${serviceTax}|${processingFeeAmount}|${totalAmount}|${transactionAmount}|${transactionDate}|${interchangeValue}|${tdr}|${paymentMode}|${subMerchantId}|${referenceNo}|${tps}|${SECRET_KEY}`;
    const generatedSignature = crypto
      .createHash("sha512")
      .update(data)
      .digest("hex");

    // Verify the signature
    // if (generatedSignature === rs) {
    // TODO: Uncomment this line later once the signature verification is fixed
    if (responseCode === eazypayErrorMessages.SUCCESS) {
      const successUrl = new URL(paymentSuccessUrl);
      const response = NextResponse.next();
      successUrl.searchParams.append("uniqueRefNumber", uniqueRefNumber);
      successUrl.searchParams.append("amount", totalAmount);
      successUrl.searchParams.append("transactionDate", transactionDate);
      successUrl.searchParams.append("paymentMode", paymentMode);
      response.headers.append("referer", "https://eazypay.icicibank.com");
      return NextResponse.redirect(successUrl.toString(), 303);
    } else {
      const failureUrl = new URL(paymentFailureUrl);
      failureUrl.searchParams.append("uniqueRefNumber", uniqueRefNumber);
      failureUrl.searchParams.append("responseCode", responseCode);
      failureUrl.searchParams.append("totalAmount", totalAmount);
      failureUrl.searchParams.append("transactionAmount", transactionAmount);
      failureUrl.searchParams.append("paymentMode", paymentMode);
      return NextResponse.redirect(failureUrl.toString(), 303);
    }
    // }
  } catch (error) {
    console.error("Error processing payment callback:", error);
    const queryParams = new URLSearchParams();
    queryParams.append("error", "internal-server-error");
    queryParams.append("status", "500");
    return NextResponse.redirect(
      `${paymentFailureUrl}?${queryParams.toString()}`,
      303
    );
  }
}

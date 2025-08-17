import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

const AES_KEY = process.env.AES_KEY || ""; // AES encryption key from env
const MERCHANT_ID = process.env.MERCHANT_ID || ""; // Merchant ID from env
const SUB_MERCHANT_ID = process.env.SUB_MERCHANT_ID || ""; // Sub merchant ID from env
const PAY_MODE = process.env.PAY_MODE || "9"; // Pay mode from env

export const encryptData = (data: string): string => {
  const cipher = crypto.createCipheriv("aes-128-ecb", AES_KEY, null);
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
};

export const generateEncryptedPaymentUrl = (
  params: Record<string, string>
): string => {
  const baseUrl = "https://eazypay.icicibank.com/EazyPG";
  const encryptedParams = Object.entries(params).map(([key, value]) => {
    const encryptedValue = encryptData(value);
    return `${key}=${encryptedValue}`;
  });

  return `${baseUrl}?${encryptedParams.join("&")}`;
};

export const generateUnencryptedPaymentUrl = (
  params: Record<string, string>
): string => {
  const baseUrl = "https://eazypay.icicibank.com/EazyPG";
  const encryptedParams = Object.entries(params).map(([key, value]) => {
    return `${encodeURIComponent(key)}=${value}`;
  });

  return `${baseUrl}?${encryptedParams.join("&")}`;
};

export const generateEazypayPaymentUrl = (amount: string, name: string, phoneNumber: string, email?: string): string => {
  const optionalFields = email || 'projectiskcon@gmail.com';
  const transactionAmount = amount;
  const subMerchantId = SUB_MERCHANT_ID;
  const payMode = PAY_MODE;
  const referenceNo = `${'ISK_ASN'}_${uuidv4()}`;
  const mandatoryFields = `${referenceNo}|${SUB_MERCHANT_ID}|${amount}|${name}|${phoneNumber}`;
  const returnUrl = "https://iskconproject.com/api/payment/callback";

  const nonEncryptedPayload = `merchantid=${MERCHANT_ID}&mandatory fields=${mandatoryFields}&optional fields=${optionalFields}&returnurl=${returnUrl}&Reference No=${referenceNo}&submerchantid=${subMerchantId}&transaction amount=${transactionAmount}&paymode=${payMode}`;

  console.log("Non Encrypted Payload:", nonEncryptedPayload);
  const encryptedPayload = `merchantid=${MERCHANT_ID}&mandatory fields=${encryptData(
    mandatoryFields
  )}&optional fields=${encryptData(optionalFields)}&returnurl=${encryptData(
    returnUrl
  )}&Reference No=${encryptData(referenceNo)}&submerchantid=${encryptData(
    subMerchantId
  )}&transaction amount=${encryptData(
    String(transactionAmount)
  )}&paymode=${encryptData(String(payMode))}`;

  return `https://eazypay.icicibank.com/EazyPG?${encryptedPayload}`;
};

export const verifySignature = (data: string, signature: string): boolean => {
  const hash = crypto.createHash("sha512").update(data).digest("hex");
  return hash === signature;
};

/**
 * Cross Switch / PayLekker requires a form POST with payload + signature.
 * GET redirects with query params fail for merchants in "none proxy" mode.
 */
export function submitPayLekkerForm(paymentUrl: string) {
  const url = new URL(paymentUrl);
  const payload = url.searchParams.get("payload");
  const signature = url.searchParams.get("signature");

  if (!payload || !signature) {
    throw new Error("Invalid PayLekker payment URL — missing payload or signature.");
  }

  const form = document.createElement("form");
  form.method = "POST";
  form.action = `${url.origin}${url.pathname}`;

  const payloadInput = document.createElement("input");
  payloadInput.type = "hidden";
  payloadInput.name = "payload";
  payloadInput.value = payload;
  form.appendChild(payloadInput);

  const signatureInput = document.createElement("input");
  signatureInput.type = "hidden";
  signatureInput.name = "signature";
  signatureInput.value = signature;
  form.appendChild(signatureInput);

  document.body.appendChild(form);
  form.submit();
}
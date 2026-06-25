import type { Express } from "express";

const PAGE_STYLE = `
  :root { --navy: #0F2A44; --gold: #C8A951; --green: #16A34A; --bg: #F9FAFB; }
  * { box-sizing: border-box; }
  body { margin: 0; font-family: system-ui, -apple-system, sans-serif; background: var(--bg); color: #111; }
  header { background: var(--navy); color: #fff; padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
  header a { color: #fff; text-decoration: none; font-weight: 600; }
  nav a { color: rgba(255,255,255,.85); margin-left: 1rem; text-decoration: none; font-size: .95rem; }
  nav a:hover { color: #fff; }
  main { max-width: 1100px; margin: 0 auto; padding: 1.5rem; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
  .card { background: #fff; border: 1px solid #e5e7eb; border-radius: .75rem; overflow: hidden; display: flex; flex-direction: column; }
  .card img { width: 100%; height: 160px; object-fit: cover; background: #e5e7eb; }
  .card .body { padding: 1rem; flex: 1; display: flex; flex-direction: column; gap: .5rem; }
  .price { color: var(--navy); font-weight: 700; }
  button, .btn { background: var(--green); color: #fff; border: 0; border-radius: .5rem; padding: .6rem 1rem; cursor: pointer; font-weight: 600; }
  button.secondary { background: #fff; color: var(--navy); border: 1px solid #d1d5db; }
  button:disabled { opacity: .6; cursor: not-allowed; }
  .panel { background: #fff; border: 1px solid #e5e7eb; border-radius: .75rem; padding: 1.25rem; margin-bottom: 1rem; }
  .muted { color: #6b7280; font-size: .9rem; }
  .error { color: #b91c1c; font-size: .9rem; }
  .success { color: #15803d; font-size: .9rem; }
  input, select { width: 100%; padding: .65rem .75rem; border: 1px solid #d1d5db; border-radius: .5rem; margin: .35rem 0 .75rem; }
  .cart-item { display: flex; justify-content: space-between; gap: 1rem; padding: .75rem 0; border-bottom: 1px solid #f3f4f6; }
  .badge { display: inline-block; background: rgba(200,169,81,.15); color: var(--navy); padding: .2rem .5rem; border-radius: 999px; font-size: .75rem; }
`;

function pageShell(title: string, body: string, script: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Fortsiphi</title>
  <style>${PAGE_STYLE}</style>
</head>
<body>
  <header>
    <a href="/">Fortsiphi</a>
    <nav>
      <a href="/">Home</a>
      <a href="/shop">Shop</a>
      <a href="/portal">Customer Portal</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>
  <main>${body}</main>
  <script>${script}</script>
</body>
</html>`;
}

const SHOP_BODY = `
  <h1>Shop</h1>
  <p class="muted">Secure checkout powered by PayLekker via Lekker Network.</p>
  <div id="status" class="muted"></div>
  <div id="products" class="grid"></div>
  <div class="panel" style="margin-top:1.5rem">
    <h2>Cart</h2>
    <div id="cart"></div>
    <p id="cart-total" class="price"></p>
    <label>Your name</label>
    <input id="customer-name" placeholder="Full name" />
    <label>Email or mobile</label>
    <input id="customer-contact" placeholder="you@example.com or +27..." />
    <button id="checkout-btn">Proceed to payment</button>
    <p id="checkout-error" class="error"></p>
  </div>
`;

const SHOP_SCRIPT = `
const cartKey = "fortsiphi_cart";
function getCart(){ try { return JSON.parse(localStorage.getItem(cartKey)||"[]"); } catch { return []; } }
function saveCart(c){ localStorage.setItem(cartKey, JSON.stringify(c)); renderCart(); }
function addToCart(p){
  const cart = getCart();
  const i = cart.findIndex(x => x.productId === p.id);
  if (i >= 0) cart[i].qty += 1; else cart.push({ productId: p.id, name: p.name, priceInCents: p.priceInCents, priceFormatted: p.priceFormatted, imageUrl: p.imageUrl, qty: 1 });
  saveCart(cart);
}
function renderCart(){
  const cart = getCart();
  const el = document.getElementById("cart");
  const totalEl = document.getElementById("cart-total");
  if (!cart.length) { el.innerHTML = "<p class='muted'>Your cart is empty.</p>"; totalEl.textContent = ""; return; }
  let total = 0;
  el.innerHTML = cart.map(item => {
    total += item.priceInCents * item.qty;
    return '<div class="cart-item"><div><strong>'+item.name+'</strong><div class="muted">'+item.priceFormatted+' × '+item.qty+'</div></div><button class="secondary" data-id="'+item.productId+'">Remove</button></div>';
  }).join("");
  totalEl.textContent = "Total: R" + (total/100).toFixed(2);
  el.querySelectorAll("button[data-id]").forEach(btn => btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-id");
    saveCart(getCart().filter(x => x.productId !== id));
  }));
}
async function loadProducts(){
  const status = document.getElementById("status");
  const grid = document.getElementById("products");
  status.textContent = "Loading products...";
  try {
    const res = await fetch("/api/feed?published=true");
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Could not load products");
    const products = data.products || [];
    if (!products.length) { status.textContent = "No products published yet."; return; }
    status.textContent = "";
    grid.innerHTML = products.map(p => '<article class="card">'+(p.imageUrl?'<img src="'+p.imageUrl+'" alt="">':'<div style="height:160px;background:#e5e7eb"></div>')+'<div class="body"><span class="badge">'+(p.itemType||"product")+'</span><h3 style="margin:.25rem 0">'+p.name+'</h3><p class="muted">'+(p.subtitle||"")+'</p><p class="price">'+p.priceFormatted+'</p><button data-product="'+encodeURIComponent(JSON.stringify({id:p.id,name:p.name,priceInCents:p.priceInCents,priceFormatted:p.priceFormatted,imageUrl:p.imageUrl}))+'">Add to cart</button></div></article>').join("");
    grid.querySelectorAll("button[data-product]").forEach(btn => btn.addEventListener("click", () => addToCart(JSON.parse(decodeURIComponent(btn.getAttribute("data-product"))))));
  } catch (e) {
    status.innerHTML = '<span class="error">'+e.message+'</span>';
  }
}
document.getElementById("checkout-btn").addEventListener("click", async () => {
  const cart = getCart();
  const err = document.getElementById("checkout-error");
  const name = document.getElementById("customer-name").value.trim();
  const contact = document.getElementById("customer-contact").value.trim();
  err.textContent = "";
  if (!cart.length) { err.textContent = "Your cart is empty."; return; }
  if (!name) { err.textContent = "Please enter your name."; return; }
  if (!contact) { err.textContent = "Please enter your email or mobile number."; return; }
  const btn = document.getElementById("checkout-btn");
  btn.disabled = true; btn.textContent = "Redirecting...";
  try {
    const isEmail = contact.includes("@");
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart.map(i => ({ name: i.name, quantity: i.qty, priceInCents: i.priceInCents })),
        customer: { name, email: isEmail ? contact : undefined, phone: !isEmail ? contact : undefined },
        returnUrl: location.origin + "/checkout?payment=success",
        cancelUrl: location.origin + "/checkout?payment=cancelled",
      }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Checkout failed");
    const url = data.paymentUrl || data.checkoutUrl;
    if (!url) throw new Error("No payment URL returned");
    localStorage.removeItem(cartKey);
    location.href = url;
  } catch (e) {
    err.textContent = e.message;
    btn.disabled = false; btn.textContent = "Proceed to payment";
  }
});
renderCart();
loadProducts();
`;

const PORTAL_BODY = `
  <h1>Customer Portal</h1>
  <p class="muted">View your orders and invoices. Sign in with a one-time code.</p>
  <div id="login-panel" class="panel">
    <label>Email or mobile</label>
    <input id="identifier" placeholder="you@example.com or +27..." />
    <label>Channel</label>
    <select id="channel"><option value="email">Email</option><option value="whatsapp">WhatsApp</option></select>
    <button id="request-otp">Send code</button>
    <p id="otp-sent" class="success"></p>
    <label>One-time code</label>
    <input id="otp-code" placeholder="123456" />
    <button id="verify-otp">Sign in</button>
    <p id="portal-error" class="error"></p>
  </div>
  <div id="profile-panel" class="panel" style="display:none">
    <h2 id="profile-name"></h2>
    <p id="profile-contact" class="muted"></p>
    <button id="sign-out" class="secondary">Sign out</button>
    <h3>Orders</h3>
    <div id="orders"></div>
  </div>
`;

const PORTAL_SCRIPT = `
const tokenKey = "fortsiphi_portal_token";
function showProfile(){
  document.getElementById("login-panel").style.display = "none";
  document.getElementById("profile-panel").style.display = "block";
}
function showLogin(){
  document.getElementById("login-panel").style.display = "block";
  document.getElementById("profile-panel").style.display = "none";
}
async function loadProfile(){
  const token = localStorage.getItem(tokenKey);
  if (!token) return showLogin();
  try {
    const res = await fetch("/api/portal/me", { headers: { "X-Portal-Token": token } });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Session expired");
    document.getElementById("profile-name").textContent = data.contact?.name || "Customer";
    document.getElementById("profile-contact").textContent = [data.contact?.email, data.contact?.phone].filter(Boolean).join(" · ");
    const orders = data.orders || [];
    document.getElementById("orders").innerHTML = orders.length
      ? orders.map(o => '<div class="cart-item"><div><strong>'+(o.orderNumber||o.id)+'</strong><div class="muted">'+o.status+' · '+(o.createdAt?new Date(o.createdAt).toLocaleDateString():"")+'</div></div><div class="price">R'+((o.totalCents||0)/100).toFixed(2)+'</div></div>').join("")
      : "<p class='muted'>No orders yet.</p>";
    showProfile();
  } catch {
    localStorage.removeItem(tokenKey);
    showLogin();
  }
}
document.getElementById("request-otp").addEventListener("click", async () => {
  const identifier = document.getElementById("identifier").value.trim();
  const channel = document.getElementById("channel").value;
  const err = document.getElementById("portal-error");
  const sent = document.getElementById("otp-sent");
  err.textContent = ""; sent.textContent = "";
  if (!identifier) { err.textContent = "Enter your email or mobile number."; return; }
  const body = channel === "email" ? { email: identifier, channel } : { phone: identifier, channel };
  try {
    const res = await fetch("/api/portal/request-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Could not send code");
    sent.textContent = "Code sent. Check your " + channel + ".";
  } catch (e) { err.textContent = e.message; }
});
document.getElementById("verify-otp").addEventListener("click", async () => {
  const identifier = document.getElementById("identifier").value.trim();
  const code = document.getElementById("otp-code").value.trim();
  const err = document.getElementById("portal-error");
  err.textContent = "";
  if (!identifier || !code) { err.textContent = "Enter your contact details and code."; return; }
  const body = identifier.includes("@") ? { email: identifier, code } : { phone: identifier, code };
  try {
    const res = await fetch("/api/portal/verify-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Invalid code");
    localStorage.setItem(tokenKey, data.sessionToken);
    loadProfile();
  } catch (e) { err.textContent = e.message; }
});
document.getElementById("sign-out").addEventListener("click", () => {
  localStorage.removeItem(tokenKey);
  showLogin();
});
loadProfile();
`;

function checkoutStatusPage(payment: string | undefined) {
  const isSuccess = payment === "success";
  const isCancelled = payment === "cancelled";
  const body = isSuccess
    ? `<h1>Payment received</h1><p class="success">Thank you. Your payment is being processed. You can track your order in the <a href="/portal">customer portal</a>.</p>`
    : isCancelled
      ? `<h1>Payment cancelled</h1><p class="muted">Your payment was not completed. You can return to the <a href="/shop">shop</a> to try again.</p>`
      : `<h1>Checkout</h1><p class="muted">Browse products in our <a href="/shop">shop</a> or view orders in the <a href="/portal">customer portal</a>.</p>`;
  return pageShell("Checkout", body, "");
}

export function registerLekkerHostedPages(app: Express) {
  app.get("/shop", (_req, res) => {
    res.type("html").send(pageShell("Shop", SHOP_BODY, SHOP_SCRIPT));
  });

  app.get("/portal", (_req, res) => {
    res.type("html").send(pageShell("Customer Portal", PORTAL_BODY, PORTAL_SCRIPT));
  });

  app.get("/checkout", (req, res) => {
    const payment = typeof req.query.payment === "string" ? req.query.payment : undefined;
    res.type("html").send(checkoutStatusPage(payment));
  });
}
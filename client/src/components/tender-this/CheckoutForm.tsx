import { useState } from "react";
import { Loader2, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface CheckoutFormProps {
  productId: string;
  productName: string;
  tier: "early-bird" | "standard";
  disabled?: boolean;
  buttonLabel: string;
  buttonClassName?: string;
  returnPath?: string;
}

export function CheckoutForm({
  productId,
  productName,
  tier,
  disabled = false,
  buttonLabel,
  buttonClassName = "",
  returnPath = "/tender-this",
}: CheckoutFormProps) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!name.trim()) {
      toast({ title: "Name required", description: "Please enter your full name.", variant: "destructive" });
      return;
    }
    if (!email.trim() && !phone.trim()) {
      toast({
        title: "Contact required",
        description: "Please enter your email or mobile number.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const origin = window.location.origin;
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: [{ productId, name: productName, quantity: 1 }],
          customer: {
            name: name.trim(),
            email: email.trim() || undefined,
            phone: phone.trim() || undefined,
          },
          returnUrl: `${origin}${returnPath}?payment=success&tier=${tier}`,
          cancelUrl: `${origin}${returnPath}?payment=cancelled`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Checkout failed");

      const paymentUrl = data.paymentUrl || data.checkoutUrl;
      if (!paymentUrl) throw new Error("No payment URL returned from PayLekker");

      window.location.href = paymentUrl;
    } catch (err) {
      toast({
        title: "Payment could not start",
        description: err instanceof Error ? err.message : "Please try again or contact us on WhatsApp.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 w-full">
      <div>
        <Label htmlFor={`name-${tier}`} className="text-xs text-[#555]">
          Full name *
        </Label>
        <Input
          id={`name-${tier}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className="mt-1 h-11 bg-white"
          disabled={disabled || loading}
        />
      </div>
      <div>
        <Label htmlFor={`email-${tier}`} className="text-xs text-[#555]">
          Email
        </Label>
        <Input
          id={`email-${tier}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-1 h-11 bg-white"
          disabled={disabled || loading}
        />
      </div>
      <div>
        <Label htmlFor={`phone-${tier}`} className="text-xs text-[#555]">
          Mobile (WhatsApp)
        </Label>
        <Input
          id={`phone-${tier}`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+27..."
          className="mt-1 h-11 bg-white"
          disabled={disabled || loading}
        />
      </div>
      <button
        type="button"
        onClick={handleCheckout}
        disabled={disabled || loading}
        className={`w-full py-4 px-6 rounded-lg font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${buttonClassName}`}
        data-testid={`checkout-${tier}`}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Redirecting to PayLekker...
          </span>
        ) : (
          buttonLabel
        )}
      </button>
      <p className="text-[11px] text-[#666] flex items-center justify-center gap-1">
        <Lock className="h-3 w-3" aria-hidden="true" />
        Secure checkout powered by PayLekker
      </p>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { trpc } from "@/lib/trpc";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam",
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function Register() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    state: "",
    acceptedTerms: false,
  });

  const { data: restrictedStates } = trpc.auth.getRestrictedStates.useQuery();
  const registerMutation = trpc.auth.register.useMutation({
    onSuccess: () => {
      toast.success("Registration successful! Welcome to XSNAP Fantasy Cricket!");
      setLocation("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const age = parseInt(formData.age);
    if (isNaN(age) || age < 18) {
      toast.error("You must be at least 18 years old to register");
      return;
    }

    if (!formData.acceptedTerms) {
      toast.error("You must accept the terms and conditions");
      return;
    }

    registerMutation.mutate({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      age,
      state: formData.state,
      acceptedTerms: formData.acceptedTerms,
    });
  };

  const isRestrictedState = restrictedStates?.includes(formData.state);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container max-w-2xl">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
              <p className="text-muted-foreground">
                Join India's premier free-to-play fantasy cricket platform
              </p>
            </div>

            <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Important Requirements:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>You must be 18 years or older</li>
                    <li>Not available in: Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, Sikkim</li>
                    <li>This is a free-to-play platform with no real money involved</li>
                  </ul>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Must be 18 or older"
                  min="18"
                  max="120"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => setFormData({ ...formData, state: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDIAN_STATES.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                {isRestrictedState && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 mt-2">
                    <p className="text-sm text-destructive font-medium">
                      ⚠️ Sorry, this platform is not available in {formData.state}.
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.acceptedTerms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, acceptedTerms: checked as boolean })
                  }
                  required
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                  I confirm that I am 18 years or older and I accept the{" "}
                  <Link href="/terms">
                    <a className="text-primary hover:underline">Terms & Conditions</a>
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full glossy-btn"
                size="lg"
                disabled={registerMutation.isPending || isRestrictedState}
              >
                {registerMutation.isPending ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login">
                  <a className="text-primary hover:underline font-medium">Login here</a>
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

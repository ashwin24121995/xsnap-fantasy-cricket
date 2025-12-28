import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "Demo User",
    email: "demo@example.com",
    state: "Maharashtra",
    age: "25",
  });

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">My Profile</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="state"
                      value={formData.state}
                      disabled
                      className="pl-10 bg-muted"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">State cannot be changed after registration</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="age"
                      value={formData.age}
                      disabled
                      className="pl-10 bg-muted"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Age cannot be changed after registration</p>
                </div>

                <Button onClick={handleSave} className="glossy-btn">
                  Save Changes
                </Button>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Account Stats</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Teams</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Points</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Best Rank</p>
                    <p className="text-2xl font-bold">-</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Account Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Change Password
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Delete Account
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { useTranslation } from "react-i18next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-5xl">
          {/* Hero Section */}
          <div className="mb-12">
            <Badge className="mb-4 text-lg px-6 py-2">Legal</Badge>
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Last Updated: January 3, 2026
            </p>
            <Card className="mt-6 p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  At XSNAP Fantasy Cricket, we are committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use 
                  our Platform.
                </p>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Information We Collect */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Information We Collect</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>When you register, we collect: Name, Email, Age, State, and Password (encrypted).</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Automatically Collected</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Device info, IP address, usage data, cookies for analytics and security.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* How We Use Information */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-600/10 rounded-xl">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Account management, platform functionality, communication, improvements, security, and legal compliance.</p>
              </div>
            </Card>

            {/* Data Security */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-600/10 rounded-xl">
                  <Lock className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold">Data Security</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Industry-standard encryption, password hashing, access controls, and secure infrastructure protect your data.</p>
              </div>
            </Card>

            {/* Your Rights */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-600/10 rounded-xl">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold">Your Privacy Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Access, correct, delete, object, port data, or withdraw consent. Contact support@xsnaplive.com to exercise rights.</p>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <UserCheck className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Contact Us</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <div className="bg-white p-6 rounded-lg space-y-2">
                  <p><strong className="text-foreground">Email:</strong> support@xsnaplive.com</p>
                  <p><strong className="text-foreground">Company:</strong> XSNAP IMAGING PRIVATE LIMITED</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

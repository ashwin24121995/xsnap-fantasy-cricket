import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Blog Post</h1>
          <p>Blog post content will be displayed here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

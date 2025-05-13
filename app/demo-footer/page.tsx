import Footer from '@/components/ui/footer';

export default function DemoFooter() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Footer Demo Page</h1>
        <p className="text-gray-600">Scroll down to see the footer in action.</p>
      </main>
      <Footer />
    </div>
  );
}

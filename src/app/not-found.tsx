import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen text-white pt-28">
        <h2 className="text-6xl text-center">Not Found</h2>
        <p className="text-2xl text-center">
          Could not find requested resource
        </p>
      </div>
    </div>
  );
}

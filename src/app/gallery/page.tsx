import Image from "next/image";
import Link from "next/link";

const GALLERY_ITEMS = [
  {
    src: "/images/new-construction.jpg",
    alt: "New driveway construction",
    category: "Residential",
  },
  {
    src: "/images/services-bg.jpg",
    alt: "Steamroller paving fresh asphalt",
    category: "Commercial",
  },
  {
    src: "/images/railroad.jpg",
    alt: "Railroad crossing paving crew",
    category: "Railroad",
  },
  {
    src: "/images/house.jpg",
    alt: "Completed residential driveway",
    category: "Residential",
  },
  {
    src: "/images/excavation.jpg",
    alt: "Excavation and site preparation",
    category: "Excavation",
  },
  {
    src: "/images/road-construction.jpg",
    alt: "Road construction crew at work",
    category: "Commercial",
  },
  {
    src: "/images/project-7.jpg",
    alt: "Asphalt paving crew laying fresh surface",
    category: "Commercial",
  },
  {
    src: "/images/railroad2.jpg",
    alt: "Completed railroad crossing paving",
    category: "Railroad",
  },
  {
    src: "/images/about-bg.jpg",
    alt: "Worker smoothing fresh asphalt",
    category: "Commercial",
  },
  {
    src: "/images/truck.jpg",
    alt: "Diamond Paving truck on site",
    category: "Equipment",
  },
  {
    src: "/images/paving-stones.jpg",
    alt: "Laying exterior paving stones",
    category: "Residential",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Diamond Paving Inc."
                width={220}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-600 hover:text-blue transition-colors"
              >
                &larr; Back to Home
              </Link>
              <a
                href="https://clienthub.getjobber.com/hubs/5ab88812-35b1-4325-8beb-e7d03e4e7260/public/requests/1179353/new?source=social_media"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex bg-blue hover:bg-blue-dark text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero banner */}
      <section className="relative pt-20">
        <div className="bg-gradient-to-br from-[#1a3a5c] via-[#1e4d7a] to-[#2980C4] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-blue-light font-semibold text-sm uppercase tracking-widest">
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
              Project Gallery
            </h1>
            <p className="max-w-2xl mx-auto text-white/70 text-lg">
              Browse our completed projects. From residential driveways to
              commercial lots and railroad work, every project reflects our
              commitment to quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_ITEMS.map((img) => (
              <div
                key={img.src}
                className="relative break-inside-avoid overflow-hidden rounded-xl group bg-white shadow-sm"
              >
                <div className="relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <span className="inline-block text-xs font-semibold text-blue bg-blue/10 rounded-full px-3 py-1 mb-2">
                    {img.category}
                  </span>
                  <p className="text-dark font-medium text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Your Project?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Get a free, no-obligation quote for your paving project. We serve
            Front Royal, Warren County, and the Shenandoah Valley.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://clienthub.getjobber.com/hubs/5ab88812-35b1-4325-8beb-e7d03e4e7260/public/requests/1179353/new?source=social_media"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue hover:bg-blue-dark text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-blue/25"
            >
              Request a Free Quote
            </a>
            <a
              href="tel:5406356194"
              className="flex items-center gap-3 text-white/80 hover:text-white px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all text-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (540) 635-6194
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-light text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Diamond Paving Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/30 text-sm">
            <span>565 Loop Road, Front Royal, VA</span>
            <a href="tel:5406356194" className="hover:text-blue transition-colors">
              (540) 635-6194
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

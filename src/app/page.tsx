"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Icons (inline SVGs to avoid dependencies) ───────────────────────────────

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronRightIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function DiamondLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path d="M20 2L38 20L20 38L2 20L20 2Z" fill="#2980C4" />
      <path d="M20 8L32 20L20 32L8 20L20 8Z" fill="white" fillOpacity="0.2" />
      <path d="M20 14L26 20L20 26L14 20L20 14Z" fill="white" fillOpacity="0.3" />
    </svg>
  );
}

// ─── Service icons ────────────────────────────────────────────────────────────

function RoadIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function TruckIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function ShieldIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function WrenchIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.3 5.3a2.1 2.1 0 01-2.97-2.97l5.3-5.3m2.97 2.97a3.375 3.375 0 005.043-4.398l-3.66-3.66a.75.75 0 00-.53-.22H9.375a.75.75 0 00-.53.22l-3.66 3.66a3.375 3.375 0 004.398 5.043" />
    </svg>
  );
}

function SnowflakeIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3M3 12l3 3m15-3l-3-3m3 3l-3 3" />
    </svg>
  );
}

function ExcavatorIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M4 20V10l4-4 4 6h4l2-2v10M8 20v-4h4v4" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: RoadIcon,
    title: "Residential Paving",
    image: "/images/house.jpg",
    description:
      "Beautiful, durable driveways and subdivision roads built to last. We handle everything from new installations to complete resurfacing.",
  },
  {
    icon: TruckIcon,
    title: "Commercial Paving",
    image: "/images/new-construction.jpg",
    description:
      "Parking lots, access roads, and commercial surfaces. Professional excavating, grading, basing, and hauling for projects of any scale.",
  },
  {
    icon: ShieldIcon,
    title: "Sealcoating",
    image: "/images/road-construction.jpg",
    description:
      "Protect your investment with professional sealcoating. Extends pavement life, prevents cracking, and restores that rich, dark finish.",
  },
  {
    icon: WrenchIcon,
    title: "Repairs & Patching",
    image: "/images/project-7.jpg",
    description:
      "Asphalt patching, crack filling, and pavement restoration. We fix potholes, crumbling edges, and surface damage quickly and affordably.",
  },
  {
    icon: ExcavatorIcon,
    title: "Excavation & Grading",
    image: "/images/excavation.jpg",
    description:
      "Complete site preparation including excavation, grading, and base work. We ensure a solid foundation for every paving project.",
  },
  {
    icon: SnowflakeIcon,
    title: "Snow Removal",
    image: "/images/truck.jpg",
    description:
      "Keep your property safe and accessible all winter. Reliable commercial and residential snow removal services you can count on.",
  },
];

const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Availability" },
];

const TESTIMONIALS = [
  {
    quote:
      "Diamond Paving did an incredible job on our driveway. The crew was professional, on time, and the finished product looks amazing. Highly recommend!",
    name: "James M.",
    role: "Homeowner, Front Royal",
  },
  {
    quote:
      "We hired Diamond Paving for our commercial parking lot and couldn't be happier. They handled the entire project from excavation to final paving with zero issues.",
    name: "Sarah K.",
    role: "Business Owner, Warren County",
  },
  {
    quote:
      "Travis and his team are true professionals. Fair pricing, quality work, and great communication throughout the project. They've earned a customer for life.",
    name: "Mike R.",
    role: "Property Manager, Shenandoah Valley",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Diamond Paving Inc."
              width={220}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://clienthub.getjobber.com/hubs/5ab88812-35b1-4325-8beb-e7d03e4e7260/public/requests/1179353/new?source=social_media"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue hover:bg-blue-dark text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-600"
            aria-label="Toggle menu"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-blue py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://clienthub.getjobber.com/hubs/5ab88812-35b1-4325-8beb-e7d03e4e7260/public/requests/1179353/new?source=social_media"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue text-white text-center px-6 py-3 rounded-lg text-sm font-semibold mt-2"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/images/project-7.jpg"
        alt="Asphalt paving work"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c]/90 via-[#1e4d7a]/85 to-[#2980C4]/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-blue rounded-full animate-pulse" />
          <span className="text-white/80 text-sm font-medium">
            Serving Front Royal, VA &amp; Surrounding Areas
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Professional
          <span className="block text-blue">Paving Solutions</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-white/70 mt-4">
            Where Quality Counts
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 leading-relaxed">
          From residential driveways to commercial parking lots, Diamond Paving
          Inc. delivers exceptional asphalt paving, sealcoating, and excavation
          services with over 20 years of experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://clienthub.getjobber.com/hubs/5ab88812-35b1-4325-8beb-e7d03e4e7260/public/requests/1179353/new?source=social_media"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue hover:bg-blue-dark text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-blue/25 flex items-center gap-2"
          >
            Get Your Free Quote
            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:5406356194"
            className="flex items-center gap-3 text-white/80 hover:text-white px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 transition-all text-lg"
          >
            <PhoneIcon className="w-5 h-5" />
            (540) 635-6194
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-blue" />
            Licensed &amp; Insured
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-blue" />
            BBB Accredited
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-blue" />
            Free Estimates
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray text-lg">
            Comprehensive paving solutions for residential and commercial
            properties. Every project receives the same commitment to quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 w-12 h-12 bg-blue/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue hover:text-blue-dark font-semibold transition-colors"
          >
            Discuss your project with us
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/travis-diamond.jpg"
                alt="Travis Diamond, CEO of Diamond Paving Inc."
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-blue font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-6">
              Built on Quality, Driven by Results
            </h2>
            <p className="text-gray text-lg leading-relaxed mb-6">
              Led by <strong className="text-dark">Travis Diamond, CEO</strong>,
              Diamond Paving Inc. has been delivering exceptional paving
              solutions to the Front Royal, Virginia area for over two decades.
              We are committed to creating durable and attractive pavements that
              meet our customers&apos; needs and exceed their expectations.
            </p>
            <p className="text-gray text-lg leading-relaxed mb-8">
              Our mission is to deliver top-notch paving solutions that enhance
              residential and commercial spaces. From the initial consultation
              through project completion, we maintain the highest standards of
              quality, communication, and professionalism.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Licensed & Insured",
                "BBB Accredited",
                "Free Estimates",
                "Quality Materials",
                "Expert Crews",
                "On-Time Delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-dark font-medium"
                >
                  <CheckCircleIcon className="w-5 h-5 text-blue flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue hover:bg-blue-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-sm"
            >
              Get In Touch
              <ChevronRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      title: "Industry Experience",
      description:
        "With 20+ years in the paving industry, we bring unmatched expertise to every project, big or small.",
    },
    {
      title: "Certified Professionals",
      description:
        "Our licensed, insured team uses premium materials and proven techniques for results that last.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "We don't cut corners. Every project receives the same dedication to quality and customer satisfaction.",
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden fees, no surprises. Get a detailed free estimate before any work begins.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue font-semibold text-sm uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            The Diamond Difference
          </h2>
          <p className="max-w-2xl mx-auto text-gray text-lg">
            We&apos;re not just paving surfaces &mdash; we&apos;re building lasting
            relationships with every project we complete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="flex gap-6 p-8 bg-gray-light rounded-2xl"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue text-white rounded-xl flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: "/images/new-construction.jpg", alt: "New driveway construction" },
  { src: "/images/house.jpg", alt: "Residential driveway paving" },
  { src: "/images/railroad.jpg", alt: "Railroad work crew" },
  { src: "/images/excavation.jpg", alt: "Excavation site preparation" },
  { src: "/images/road-construction.jpg", alt: "Road construction crew at work" },
  { src: "/images/truck.jpg", alt: "Diamond Paving truck on site" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-4">
            Project Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-gray text-lg">
            See the quality of our work firsthand. From driveways to commercial
            projects, every job gets the Diamond standard.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-xl group ${
                i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-white/50 text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="text-blue font-semibold text-sm uppercase tracking-widest">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mt-3 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray text-lg leading-relaxed mb-10">
              Reach out today for a free estimate on your paving project. We
              serve Front Royal, Warren County, and the greater Shenandoah
              Valley area.
            </p>

            <div className="space-y-6">
              <a
                href="tel:5406356194"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center group-hover:bg-blue group-hover:text-white text-blue transition-colors">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray">Call Us</div>
                  <div className="text-lg font-semibold text-dark">
                    (540) 635-6194
                  </div>
                </div>
              </a>

              <a
                href="mailto:diamondpavinginc@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center group-hover:bg-blue group-hover:text-white text-blue transition-colors">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray">Email Us</div>
                  <div className="text-lg font-semibold text-dark">
                    diamondpavinginc@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue/10 rounded-xl flex items-center justify-center text-blue">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray">Visit Us</div>
                  <div className="text-lg font-semibold text-dark">
                    565 Loop Road, Front Royal, VA
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray mb-3">Follow us on Instagram</p>
              <a
                href="https://instagram.com/dpaving2019"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-dark hover:text-blue font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @dpaving2019
              </a>
            </div>
          </div>

          {/* Quote CTA Card */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DiamondLogo className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">
                Request a Free Quote
              </h3>
              <p className="text-gray leading-relaxed mb-8">
                Tell us about your paving project and we&apos;ll get back to you
                with a detailed, no-obligation estimate. Quick response
                guaranteed.
              </p>
              <a
                href="https://clienthub.getjobber.com/hubs/5ab88812-35b1-4325-8beb-e7d03e4e7260/public/requests/1179353/new?source=social_media"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-blue hover:bg-blue-dark text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-blue/25 w-full justify-center"
              >
                Request Quote Now
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-dark">Fast</div>
                  <div className="text-xs text-gray">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark">Free</div>
                  <div className="text-xs text-gray">Estimates</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-dark">Fair</div>
                  <div className="text-xs text-gray">Pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Diamond Paving Inc."
                width={200}
                height={55}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/50 leading-relaxed max-w-md">
              Professional asphalt paving contractor serving Front Royal,
              Virginia and the Shenandoah Valley. Residential and commercial
              paving, sealcoating, excavation, and snow removal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-blue transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-white/40 hover:text-blue transition-colors text-sm"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Diamond Paving Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-white/30 text-sm">
            <span>565 Loop Road, Front Royal, VA</span>
            <a
              href="tel:5406356194"
              className="hover:text-blue transition-colors"
            >
              (540) 635-6194
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <StatsSection />
      <About />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

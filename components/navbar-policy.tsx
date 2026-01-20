"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect } from "react"

export function ThankNavbar() {
  useEffect(() => {
    // Track conversion when component mounts
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-17491253863/4lSxCPfO_okbEOe0vZRB',
        'value': 1.0,
        'currency': 'INR'
      });
    }
  }, [])

  const handleCallClick = (e: React.MouseEvent) => {
    // Track conversion when phone number is clicked
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-17491253863/4lSxCPfO_okbEOe0vZRB',
        'value': 1.0,
        'currency': 'INR'
      });
    }
  }

  const handleMobileCallClick = (e: React.MouseEvent) => {
    // Track conversion when phone number is clicked on mobile
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-17491253863/4lSxCPfO_okbEOe0vZRB',
        'value': 1.0,
        'currency': 'INR'
      });
    }
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur" style={{fontFamily: "'Outfit', sans-serif"}}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-52 h-12 max-[470px]:w-40 xs:w-48 xs:h-14 sm:w-52 sm:h-16 md:w-56 md:h-16 lg:w-64 lg:h-20">
              <Image
                src="/adgrologo.png"
                alt="SRM Aesthetic Institute Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              asChild 
              variant="outline" 
              className="border-[#d90f12] text-[#d90f12] hover:bg-[#d90f12] hover:text-white text-base px-6 py-2"
              onClick={handleCallClick}
            >
              <Link href="tel:+917436856789">+91 7436856789</Link>
            </Button>
          </div>

          {/* Mobile - Only Call to Action Button */}
          <div className="md:hidden">
            <Button 
              asChild 
              className="bg-[#d90f12] text-white hover:bg-[#b80d0f] text-sm px-5 py-3 h-auto min-h-[44px]"
              onClick={handleMobileCallClick}
            >
              <Link href="tel:+917436856789" className="flex items-center justify-center">
                +91 7436856789
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}
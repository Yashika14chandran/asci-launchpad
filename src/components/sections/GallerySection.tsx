import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GallerySection() {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesPerSlide, setImagesPerSlide] = useState(3)

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImagesPerSlide(1) // Mobile
      } else {
        setImagesPerSlide(3) // Desktop
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Load images
  useEffect(() => {
    const loadedImages = []
    for (let i = 1; i <= 6; i++) {
      loadedImages.push(`/gallery/${i}.jpeg`)
    }
    setImages(loadedImages)
  }, [])

  const totalSlides = Math.ceil(images.length / imagesPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    )
  }

  const visibleImages = images.slice(
    currentSlide * imagesPerSlide,
    currentSlide * imagesPerSlide + imagesPerSlide
  )

  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="container-wide">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-4">
            Gallery
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Inside ASCI Academy
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-elevated p-6 md:p-10 relative htb-glow-border">
            <div className="relative bg-background rounded-xl p-6 overflow-hidden">

              {/* Images Grid */}
              <div
                className={`grid gap-6 transition-all duration-500 ${
                  imagesPerSlide === 1
                    ? "grid-cols-1"
                    : "md:grid-cols-3 grid-cols-1"
                }`}
              >
                {visibleImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-all duration-300"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Arrows */}
              {images.length > imagesPerSlide && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 border border-border p-2 rounded-full hover:border-primary transition"
                  >
                    <ChevronLeft className="text-primary" size={20} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 border border-border p-2 rounded-full hover:border-primary transition"
                  >
                    <ChevronRight className="text-primary" size={20} />
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 h-4 bg-muted rounded-b-xl" />
          </div>

          {/* Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-3 mt-6">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === i
                      ? "bg-primary scale-125"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
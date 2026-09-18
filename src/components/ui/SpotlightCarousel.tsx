'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { SpaceFeature } from '@/data/gallery';

interface SpotlightCarouselProps {
  items: SpaceFeature[];
}

export default function SpotlightCarousel({ items }: SpotlightCarouselProps) {
  const total = items.length;

  // Active index starts strictly at 0 (the first photo)
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [modalDirection, setModalDirection] = useState<'next' | 'prev' | 'fade'>('next');

  // Dynamic responsive dimensions
  const [dims, setDims] = useState({
    activeWidth: 450,
    inactiveWidth: 175,
    gap: 16,
    height: 480,
  });

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const currentDragOffset = useRef(0);
  const didDrag = useRef(false);

  // Modal Touch Handling
  const modalTouchStartX = useRef<number | null>(null);
  const modalTouchEndX = useRef<number | null>(null);

  // Responsive dimension updates
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDims({
          activeWidth: 280,
          inactiveWidth: 85,
          gap: 10,
          height: 380,
        });
      } else if (width < 1024) {
        setDims({
          activeWidth: 360,
          inactiveWidth: 130,
          gap: 14,
          height: 440,
        });
      } else {
        setDims({
          activeWidth: 450,
          inactiveWidth: 175,
          gap: 16,
          height: 480,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, total - 1));
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (targetIndex: number) => {
    setActiveIndex(Math.max(0, Math.min(targetIndex, total - 1)));
  };

  const nextLightbox = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalDirection('next');
    setLightboxIndex((prev) => (prev !== null ? Math.min(prev + 1, total - 1) : 0));
  }, [total]);

  const prevLightbox = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setModalDirection('prev');
    setLightboxIndex((prev) => (prev !== null ? Math.max(prev - 1, 0) : 0));
  }, []);

  const openLightbox = (index: number) => {
    setModalDirection('fade');
    setLightboxIndex(index);
  };

  // Pointer / Mouse / Touch Drag handlers for the rail
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    currentDragOffset.current = 0;
    didDrag.current = false;
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 5) {
      didDrag.current = true;
    }
    currentDragOffset.current = diff;
    setDragOffset(diff);
  };

  const handlePointerUp = () => {
    if (dragStartX.current === null) return;
    const diff = currentDragOffset.current;
    const threshold = dims.inactiveWidth / 2;

    if (diff < -threshold) {
      nextSlide();
    } else if (diff > threshold) {
      prevSlide();
    }

    dragStartX.current = null;
    currentDragOffset.current = 0;
    setDragOffset(0);
    setIsDragging(false);
  };

  // Modal Touch Swipe Handlers
  const handleModalTouchStart = (e: React.TouchEvent) => {
    modalTouchStartX.current = e.touches[0].clientX;
  };

  const handleModalTouchMove = (e: React.TouchEvent) => {
    modalTouchEndX.current = e.touches[0].clientX;
  };

  const handleModalTouchEnd = () => {
    if (!modalTouchStartX.current || !modalTouchEndX.current) return;
    const distance = modalTouchStartX.current - modalTouchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      nextLightbox();
    } else if (distance < -minSwipeDistance) {
      prevLightbox();
    }

    modalTouchStartX.current = null;
    modalTouchEndX.current = null;
  };

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') setLightboxIndex(null);
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        return;
      }
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextLightbox, prevLightbox, nextSlide, prevSlide]);

  // Calculate rail translate X offset so the active card is centered in the screen
  const getTrackTranslateX = () => {
    const cardStep = dims.inactiveWidth + dims.gap;
    const offset = activeIndex * cardStep + dims.activeWidth / 2;
    return -offset + dragOffset;
  };

  return (
    <div className="relative w-full overflow-hidden select-none">
      {/* Sliding Rail Container */}
      <div 
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y flex items-center"
        style={{ height: `${dims.height + 16}px` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Continuous Linear Shingled Track */}
        <div 
          className="relative flex items-center flex-nowrap"
          style={{
            left: '50%',
            transform: `translateX(${getTrackTranslateX()}px)`,
            transition: isDragging ? 'none' : 'transform 600ms cubic-bezier(0.25, 1, 0.5, 1)',
            gap: `${dims.gap}px`,
            height: `${dims.height}px`,
            willChange: 'transform',
          }}
        >
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            const cardWidth = isActive ? dims.activeWidth : dims.inactiveWidth;
            const dist = Math.abs(idx - activeIndex);

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (didDrag.current) return;
                  if (isActive) {
                    openLightbox(idx);
                  } else {
                    goToSlide(idx);
                  }
                }}
                style={{
                  width: `${cardWidth}px`,
                  height: `${dims.height}px`,
                  transition: 'width 600ms cubic-bezier(0.25, 1, 0.5, 1), opacity 500ms ease',
                }}
                className={`relative flex-shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group ${
                  isActive
                    ? 'z-30 opacity-100'
                    : dist === 1
                    ? 'z-20 opacity-60 hover:opacity-90'
                    : 'z-10 opacity-35 hover:opacity-75'
                }`}
                title={isActive ? 'Clique para ampliar' : `Ver ${item.title}`}
              >
                {/* Photo with dynamic object-cover to re-crop rather than stretch */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 450px"
                  priority={isActive}
                  className={`object-cover transition-transform duration-700 ease-out ${
                    isActive ? 'group-hover:scale-105' : 'group-hover:scale-110'
                  }`}
                />

                {/* Shading overlay for side cards */}
                {!isActive && (
                  <div className="absolute inset-0 bg-navy-950/30 hover:bg-transparent transition-colors duration-300" />
                )}

                {/* Center Spotlight Card: Clean Compact Action Button */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-4 text-center items-center pointer-events-none">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(idx);
                      }}
                      className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-navy-950/80 hover:bg-brand-600 text-white text-[11px] sm:text-xs font-semibold backdrop-blur-md border border-white/20 shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                    >
                      <Maximize2 className="w-3 h-3 text-white" />
                      <span>Ampliar Foto</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center space-x-2 mt-6 sm:mt-8">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? 'w-8 bg-brand-600'
                : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Ir para a foto ${idx + 1}`}
          />
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && items[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 select-none animate-fade-in"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleModalTouchStart}
          onTouchMove={handleModalTouchMove}
          onTouchEnd={handleModalTouchEnd}
        >
          {/* Top Bar with Counter & Close Button */}
          <div
            className="w-full max-w-6xl flex items-center justify-between text-white p-2 sm:p-4 z-20 absolute top-0 left-0 right-0 mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xs sm:text-sm font-semibold text-slate-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                {lightboxIndex + 1} / {total}
              </span>
              <span className="text-sm font-medium text-white hidden sm:inline">
                {items[lightboxIndex].title}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border border-white/20 transition-all hover:scale-105 backdrop-blur-md"
              aria-label="Fechar tela cheia"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Main Photo Container */}
          <div
            className="relative w-full flex-1 max-w-6xl max-h-[85vh] sm:max-h-[88vh] flex items-center justify-center my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav Arrows inside Modal */}
            {lightboxIndex > 0 && (
              <button
                onClick={prevLightbox}
                className="absolute left-2 sm:left-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-brand-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-xl active:scale-95"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {lightboxIndex < total - 1 && (
              <button
                onClick={nextLightbox}
                className="absolute right-2 sm:right-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-brand-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-xl active:scale-95"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Photo with Smooth Animated Transition */}
            <div
              key={`${lightboxIndex}-${modalDirection}`}
              className={`relative w-full h-full flex items-center justify-center p-2 sm:p-6 ${
                modalDirection === 'prev'
                  ? 'animate-modal-prev'
                  : modalDirection === 'next'
                  ? 'animate-modal-next'
                  : 'animate-fade-in'
              }`}
            >
              <Image
                src={items[lightboxIndex].image}
                alt={items[lightboxIndex].title}
                fill
                priority
                className="object-contain transition-all duration-300 drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

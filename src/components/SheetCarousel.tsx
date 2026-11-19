import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const PAGE_WIDTH_PX = (210 * 96) / 25.4;

export function SheetCarousel({
  count,
  signature,
  ariaLabel,
  className,
  label,
  getKey,
  renderSlide,
}: {
  count: number;
  signature: string;
  ariaLabel: string;
  className?: string;
  label: (index: number, total: number) => string;
  getKey: (index: number) => string;
  renderSlide: (index: number) => ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(0.4);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; pointerId: number } | null>(null);
  const indexRef = useRef(index);
  indexRef.current = index;
  const safe = Math.min(index, Math.max(count - 1, 0));
  const caption = label(safe, count);

  useEffect(() => {
    setIndex(0);
    setDragX(0);
  }, [signature]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const measure = () => {
      const clip = viewport.querySelector<HTMLElement>(".sheet-carousel-clip");
      const width = clip?.clientWidth || viewport.clientWidth;
      const next = Math.round(Math.min(0.78, Math.max(0.2, width / PAGE_WIDTH_PX)) * 1000) / 1000;
      setScale((current) => (Math.abs(current - next) < 0.002 ? current : next));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [count]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const slide = track?.children[safe] as HTMLElement | undefined;
    if (!viewport || !track || !slide) return;
    const base = slide.offsetLeft + slide.offsetWidth / 2 - viewport.clientWidth / 2;
    track.style.transform = `translate3d(${-base + dragX}px, 0, 0)`;
  }, [safe, dragX, count, scale]);

  function go(next: number) {
    setDragX(0);
    setIndex(Math.min(count - 1, Math.max(0, next)));
  }

  return (
    <div
      className={["sheet-carousel", dragging ? "is-dragging" : "", className].filter(Boolean).join(" ")}
      style={{ "--sheet-scale": String(scale) } as React.CSSProperties}
      role="region"
      aria-roledescription="karuzela"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(indexRef.current - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(indexRef.current + 1);
        }
      }}
    >
      <div
        className="sheet-carousel-viewport"
        ref={viewportRef}
        onPointerDown={(event) => {
          if (count < 2 || event.button !== 0) return;
          drag.current = { x: event.clientX, pointerId: event.pointerId };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current || drag.current.pointerId !== event.pointerId) return;
          const delta = event.clientX - drag.current.x;
          if (!dragging && Math.abs(delta) < 4) return;
          setDragging(true);
          setDragX(delta);
        }}
        onPointerUp={(event) => {
          if (!drag.current || drag.current.pointerId !== event.pointerId) return;
          const delta = event.clientX - drag.current.x;
          drag.current = null;
          setDragging(false);
          const slide = trackRef.current?.children[indexRef.current] as HTMLElement | undefined;
          const width = slide?.offsetWidth || 1;
          let steps = Math.round(-delta / width);
          if (steps === 0 && Math.abs(delta) > 48) steps = delta > 0 ? -1 : 1;
          go(indexRef.current + steps);
        }}
        onPointerCancel={() => {
          drag.current = null;
          setDragging(false);
          setDragX(0);
        }}
      >
        <div className="sheet-carousel-track" ref={trackRef}>
          {Array.from({ length: count }, (_, pageIndex) => (
            <div className={pageIndex === safe ? "sheet-carousel-slide is-active" : "sheet-carousel-slide"} key={getKey(pageIndex)}>
              <div className="sheet-carousel-clip">
                <div className="sheet-frame">
                  <div className="sheet-scale-slot">{renderSlide(pageIndex)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sheet-carousel-controls app-chrome">
        <p className="sheet-carousel-title">{caption}</p>
        {count > 1 ? (
          <div className="sheet-carousel-nav">
            <button type="button" className="slider-nav" onClick={() => go(safe - 1)} disabled={safe === 0} aria-label="Poprzednia kartka">
              <Chevron direction="left" />
            </button>
            <div className="sheet-carousel-dots">
              {Array.from({ length: count }, (_, pageIndex) => (
                <button
                  type="button"
                  key={pageIndex}
                  className={pageIndex === safe ? "is-on" : undefined}
                  aria-label={`Kartka ${pageIndex + 1}`}
                  aria-current={pageIndex === safe ? "true" : undefined}
                  onClick={() => go(pageIndex)}
                />
              ))}
            </div>
            <button type="button" className="slider-nav" onClick={() => go(safe + 1)} disabled={safe === count - 1} aria-label="Następna kartka">
              <Chevron direction="right" />
            </button>
          </div>
        ) : null}
      </div>
      <p className="sr-only" aria-live="polite">{caption}</p>
      <div className="print-sheets">
        {Array.from({ length: count }, (_, pageIndex) => (
          <div className="sheet-frame" key={getKey(pageIndex)}>
            <div className="sheet-scale-slot">{renderSlide(pageIndex)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d={direction === "left" ? "M14.5 6.5 9 12l5.5 5.5" : "M9.5 6.5 15 12l-5.5 5.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

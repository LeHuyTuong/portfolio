import { useCallback, useEffect, useRef, useState } from 'react';
import { ExternalLink } from './Icons';
import { getAssetUrl } from '../utils/assets';

/**
 * Slideshow of real screens captured from a deployed project.
 * Each slide links to the live site — the images are evidence, not decoration.
 *
 * Arrow keys move between slides once the strip has focus; the caption doubles
 * as the live region so screen readers hear the slide change.
 */
const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

const ProjectGallery = ({ slides, href, title }) => {
    const [index, setIndex] = useState(0);
    const total = slides.length;
    const stripRef = useRef(null);
    const videoRefs = useRef({});

    const go = useCallback(
        (delta) => setIndex((i) => (i + delta + total) % total),
        [total]
    );

    useEffect(() => {
        const el = stripRef.current;
        if (!el) return;
        const onKey = (e) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
            else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        };
        el.addEventListener('keydown', onKey);
        return () => el.removeEventListener('keydown', onKey);
    }, [go]);

    // Only the visible slide's clip actually plays — the rest stay paused
    // even though every slide stays mounted for the crossfade.
    useEffect(() => {
        slides.forEach((s, i) => {
            const video = videoRefs.current[s.src];
            if (!video) return;
            if (i === index) video.play().catch(() => {});
            else video.pause();
        });
    }, [index, slides]);

    const slide = slides[index];

    return (
        <div className="project-gallery">
            <div
                className="gallery-stage"
                ref={stripRef}
                tabIndex={0}
                role="group"
                aria-roledescription="carousel"
                aria-label={`${title} screenshots`}
            >
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gallery-frame"
                    aria-label={`Open the live ${title} deployment`}
                >
                    {/* All slides stay mounted so switching never flashes a blank frame */}
                    {slides.map((s, i) => (
                        isVideo(s.src) ? (
                            <video
                                key={s.src}
                                ref={(el) => { videoRefs.current[s.src] = el; }}
                                src={getAssetUrl(s.src)}
                                aria-label={s.alt}
                                muted
                                loop
                                playsInline
                                preload={i === 0 ? 'auto' : 'none'}
                                className={i === index ? 'is-current' : ''}
                                aria-hidden={i !== index}
                            />
                        ) : (
                            <img
                                key={s.src}
                                src={getAssetUrl(s.src)}
                                alt={s.alt}
                                loading={i === 0 ? 'eager' : 'lazy'}
                                className={i === index ? 'is-current' : ''}
                                aria-hidden={i !== index}
                            />
                        )
                    ))}
                    <span className="gallery-cta">
                        Visit live site
                        <ExternalLink size={14} />
                    </span>
                </a>

                {total > 1 && (
                    <>
                        <button
                            type="button"
                            className="gallery-nav prev"
                            onClick={() => go(-1)}
                            aria-label="Previous screenshot"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            className="gallery-nav next"
                            onClick={() => go(1)}
                            aria-label="Next screenshot"
                        >
                            ›
                        </button>
                        <span className="gallery-counter">{index + 1}/{total}</span>
                    </>
                )}
            </div>

            <p className="gallery-caption" aria-live="polite">{slide.caption}</p>

            {total > 1 && (
                <div className="gallery-dots">
                    {slides.map((s, i) => (
                        <button
                            key={s.src}
                            type="button"
                            className={`gallery-dot${i === index ? ' is-active' : ''}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Screenshot ${i + 1}: ${s.caption}`}
                            aria-current={i === index ? 'true' : undefined}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;

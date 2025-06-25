import React, { useEffect, useRef, useState } from 'react';

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setVideoLoaded(true);
      setVideoError(false);
      video.play().catch(e => {
        console.error('Video play failed:', e);
        setVideoError(true);
        setVideoLoaded(false);
      });
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setVideoError(true);
      setVideoLoaded(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Force load the video
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: Array<{x: number, y: number, size: number, opacity: number, speed: number}> = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5,
        opacity: Math.random() * 0.9 + 0.1,
        speed: Math.random() * 0.3 + 0.1
      });
    }

    // Create floating orbs with darker, more subtle colors
    const orbs: Array<{x: number, y: number, size: number, color: string, dx: number, dy: number, opacity: number}> = [];
    const colors = ['#1a1a2e', '#16213e', '#0f3460', '#533483', '#7209b7', '#2d1b69'];
    
    for (let i = 0; i < 15; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 150 + 80,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.15 + 0.05
      });
    }

    const animate = () => {
      // Only animate if video failed to load or isn't loaded yet
      if (videoError || !videoLoaded) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw orbs
        orbs.forEach(orb => {
          orb.x += orb.dx;
          orb.y += orb.dy;

          if (orb.x < -orb.size) orb.x = canvas.width + orb.size;
          if (orb.x > canvas.width + orb.size) orb.x = -orb.size;
          if (orb.y < -orb.size) orb.y = canvas.height + orb.size;
          if (orb.y > canvas.height + orb.size) orb.y = -orb.size;

          const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size);
          gradient.addColorStop(0, `${orb.color}${Math.floor(orb.opacity * 255).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(1, `${orb.color}00`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw stars with subtle twinkling
        stars.forEach(star => {
          star.opacity += (Math.random() - 0.5) * 0.015;
          star.opacity = Math.max(0.1, Math.min(0.8, star.opacity));

          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [videoLoaded, videoError]);

  return (
    <div className="fixed inset-0 w-full h-full -z-20">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ filter: 'brightness(0.7)' }}
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better content readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Fallback: Dark cosmic background similar to video overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black transition-opacity duration-1000 ${
        videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
      }`} />
      
      {/* Canvas overlay for cosmic effects (fallback animation) */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-20' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default CosmicBackground;
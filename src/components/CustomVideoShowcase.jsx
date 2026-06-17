import React from 'react'

const stories = [
  {
    id: 1,
    videoUrl: 'https://res.cloudinary.com/dwyoohdjk/video/upload/q_auto/f_auto/v1781708861/snaptik_7607551914561031444_v3_iqohvs.mp4', // 👈 TikTok Video 1 URL
    title: 'Luxury Basin Customization'
  },
  {
    id: 2,
    videoUrl: 'https://res.cloudinary.com/dwyoohdjk/video/upload/q_auto/f_auto/v1781708861/snaptik_7651559621768908052_v3_s4m3rc.mp4', // 👈 TikTok Video 2 URL
    title: 'Premium Gold Finish Tub'
  },
  {
    id: 3,
    videoUrl: 'https://res.cloudinary.com/dwyoohdjk/video/upload/q_auto/f_auto/v1781709507/snaptik_7620742705651682580_v3_tzhn3b.mp4', // 👈 TikTok Video 3 URL
    title: 'Architectural Bathroom Fitting'
  },
  {
    id: 4,
    videoUrl: 'https://res.cloudinary.com/dwyoohdjk/video/upload/q_auto/f_auto/v1781708864/snaptik_7652368911693860116_v3_ixhkms.mp4', // 👈 TikTok Video 4 URL
    title: 'Showroom Live Display'
  }
]

export default function VideoStoriesSlider() {
  return (
    /* Strictly aligned with your standard section width sequence */
    <section className="py-24 px-6 md:px-12 w-full bg-white">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Minimalist Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-primary" />
              <span className="text-[9px] uppercase tracking-[0.38em] font-semibold text-primary">
                Showroom Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-dark tracking-tight uppercase leading-none">
              Craftsmanship <span className="text-primary font-bold">In Motion</span>
            </h2>
          </div>
          
          <p className="text-[#B85C38] text-xs md:text-sm font-semibold max-w-sm md:text-right leading-relaxed">
            All of these premium designs are proudly manufactured in-house, custom-built according to our customers' specific preferences.
          </p>
        </div>

        {/* 🔥 RESPONSIVE LOCK: Full card layout on mobile (one below another), 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="relative aspect-[9/16] w-full bg-neutral-100 rounded-2xl overflow-hidden shadow-md group border border-neutral-200/10 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Autoplay Silent Video Loop */}
              <video 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={story.videoUrl}
                loop 
                muted 
                autoPlay 
                playsInline
                controls={false}
              />

              {/* High-end minimalist dark gradient layer at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Story Title Tag */}
              <div className="absolute bottom-5 left-5 right-5 z-10 pointer-events-none">
                <p className="text-white text-[11px] font-medium uppercase tracking-widest opacity-90 truncate">
                  {story.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
import { Play, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videoTestimonials = [
    {
        name: "Aline",
        thumbnail: "https://img.youtube.com/vi/FAXPETS3IEo/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/FAXPETS3IEo",
    },
    {
        name: "Marcelo Sobral",
        thumbnail: "https://img.youtube.com/vi/XfPOQUV4low/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/XfPOQUV4low",
    },
    {
        name: "Felipe Braga",
        thumbnail: "https://img.youtube.com/vi/pToh00Cp-8c/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/pToh00Cp-8c",
    },
    {
        name: "Guito",
        thumbnail: "https://img.youtube.com/vi/CfKN-O6sf-E/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/CfKN-O6sf-E",
    },
];

const Testimonials = () => {
    const { ref, isVisible } = useScrollReveal();
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Histórias de <span className="text-gradient-gold">Sucesso</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Veja como nossos alunos transformaram suas carreiras
                    </p>
                </div>

                {/* Video Testimonials Swiper */}
                <div
                    ref={ref}
                    className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1.5}
                        centeredSlides={true}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                                centeredSlides: false,
                            },
                            768: {
                                slidesPerView: 3,
                                centeredSlides: false,
                            },
                            1024: {
                                slidesPerView: 4,
                                centeredSlides: false,
                            },
                        }}
                        className="testimonials-swiper pb-12"
                    >
                        {videoTestimonials.map((video, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer border-[8px] border-foreground/20 bg-foreground/10 shadow-xl hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
                                    onClick={() => setActiveVideo(video.videoUrl)}
                                    style={{ aspectRatio: '9/16' }}
                                >
                                    {/* Phone notch */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/20 rounded-full z-10"></div>

                                    <img
                                        src={video.thumbnail}
                                        alt={`Depoimento de ${video.name}`}
                                        width={270}
                                        height={480}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                        decoding="async"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-center justify-center">
                                        <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="absolute bottom-6 left-4 right-4 text-white text-center">
                                        <p className="font-semibold text-lg">{video.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Video Modal - Phone format */}
                {activeVideo && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setActiveVideo(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-secondary transition-colors"
                            onClick={() => setActiveVideo(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div
                            className="relative w-full max-w-sm rounded-[2.5rem] overflow-hidden border-[8px] border-white/20"
                            style={{ aspectRatio: '9/16' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={activeVideo}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;

import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image: '/images/bioglam/wedding-couple.png',
      likes: '342',
      comments: '28',
      caption: 'Grace in every step, elegance in every moment, and a heart full of forever. 🤍✨ #BridalElegance #WeddingInspiration',
      url: 'https://www.instagram.com/p/DanfOuKj7GF/?stkn=ZXE5M2d0Y2pnZnU3'
    },
    {
      id: 2,
      image: '/images/bioglam/maternity-arch.png',
      likes: '419',
      comments: '35',
      caption: 'Celebrating the glow of new beginnings. #MaternityPhotographyBangalore #BioGlamMoments',
      url: 'https://www.instagram.com/thehouseofweddings.in/'
    },
    {
      id: 3,
      image: '/images/bioglam/wedding-ritual.jpg',
      likes: '584',
      comments: '46',
      caption: 'Akshata showers and pure blessings. Sacred Bengaluru weddings with BioGlam.',
      url: 'https://www.instagram.com/thehouseofweddings.in/'
    },
    {
      id: 4,
      image: '/images/bioglam/prewedding-couple.jpg',
      likes: '390',
      comments: '31',
      caption: 'Sunset dreams at palace gardens. Pre-wedding sessions customized for you.',
      url: 'https://www.instagram.com/thehouseofweddings.in/'
    },
    {
      id: 5,
      image: '/images/bioglam/bridal-portrait.jpg',
      likes: '512',
      comments: '42',
      caption: 'Heritage elegance in every thread. The radiant South Indian bride.',
      url: 'https://www.instagram.com/thehouseofweddings.in/'
    },
    {
      id: 6,
      image: '/images/bioglam/haldi-celebration.jpg',
      likes: '467',
      comments: '39',
      caption: 'Laughter is best served with yellow marigolds & haldi! #FamilyRituals',
      url: 'https://www.instagram.com/thehouseofweddings.in/'
    }
  ];

  return (
    <section className="py-20 bg-charcoal-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Handle & Follow CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-2 font-semibold">
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>FOLLOW THE JOURNEY</span>
            </div>
            
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-warm-white">
              @thehouseofweddings.in
            </h2>
            
            <p className="text-sm text-warm-muted font-light mt-1">
              &ldquo;More stories, moments and behind-the-scenes magic.&rdquo;
            </p>
          </div>

          <a
            href="https://www.instagram.com/thehouseofweddings.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-sm bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-gold-500/20 border border-pink-500/30 text-warm-white hover:border-gold-400 text-xs uppercase tracking-widest font-semibold transition-all group"
          >
            <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <span>Follow on Instagram →</span>
            <ExternalLink className="w-3.5 h-3.5 text-warm-muted" />
          </a>
        </div>

        {/* 6-Column Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url || "https://www.instagram.com/thehouseofweddings.in/"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-sm overflow-hidden bg-charcoal-900 border border-white/5 hover:border-gold-500/40 transition-all"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover overlay with heart & comments count */}
              <div className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <div className="flex items-center space-x-3 text-warm-white text-xs font-semibold mb-2">
                  <span className="flex items-center">
                    <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 mr-1" />
                    {post.likes}
                  </span>
                  <span className="flex items-center">
                    <MessageCircle className="w-3.5 h-3.5 mr-1 text-gold-300" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[10px] text-warm-white/80 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

'use client';
import EmailListForm from '@/components/organisms/EmailListForm';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaClock, FaHeart, FaMailBulk, FaPodcast } from 'react-icons/fa';
import FeaturedTracks from './components/FeaturedTracks';
import LiveEvents from './components/LiveEvents';
import MusicHero from './components/MusicHero';
import MusicNews from './components/MusicNews';
import PlayList from './components/PlayList';
import MostPopularMusic from './components/MostPopularMusic';
import MusicPodcast from './components/MusicPodcast';
import TopArtists from './components/TopArtists';

export default function MusicHomepage() {
   const [currentPlaying, setCurrentPlaying] = useState(null);
   const [email, setEmail] = useState('');
   const [isSubscribed, setIsSubscribed] = useState(false);

   const featuredTracks = [
      {
         id: 1,
         title: 'Midnight Dreams',
         artist: 'Luna Eclipse',
         duration: '3:45',
         plays: '2.4M',
         image: 'https://picsum.photos/300/300?random=1',
      },
      {
         id: 2,
         title: 'Electric Pulse',
         artist: 'Neon Waves',
         duration: '4:12',
         plays: '1.8M',
         image: 'https://picsum.photos/300/300?random=2',
      },
      {
         id: 3,
         title: 'Ocean Breeze',
         artist: 'Coastal Vibes',
         duration: '3:28',
         plays: '3.1M',
         image: 'https://picsum.photos/300/300?random=3',
      },
      {
         id: 4,
         title: 'City Lights',
         artist: 'Urban Soul',
         duration: '2:56',
         plays: '1.5M',
         image: 'https://picsum.photos/300/300?random=4',
      },
   ];

   const topArtists = [
      {
         id: 1,
         name: 'Aurora Sky',
         followers: '5.2M',
         image: 'https://picsum.photos/200/200?random=5',
      },
      {
         id: 2,
         name: 'Bass Drop',
         followers: '3.8M',
         image: 'https://picsum.photos/200/200?random=6',
      },
      {
         id: 3,
         name: 'Melody Storm',
         followers: '4.6M',
         image: 'https://picsum.photos/200/200?random=7',
      },
      {
         id: 4,
         name: 'Echo Chamber',
         followers: '2.9M',
         image: 'https://picsum.photos/200/200?random=8',
      },
   ];

   const genres = [
      {
         name: 'Pop',
         tracks: '2.3M',
         color: 'from-pink-500 to-red-500',
         image: 'https://picsum.photos/300/200?random=9',
      },
      {
         name: 'Rock',
         tracks: '1.8M',
         color: 'from-orange-500 to-yellow-500',
         image: 'https://picsum.photos/300/200?random=10',
      },
      {
         name: 'Hip Hop',
         tracks: '1.5M',
         color: 'from-purple-500 to-indigo-500',
         image: 'https://picsum.photos/300/200?random=11',
      },
      {
         name: 'Electronic',
         tracks: '2.1M',
         color: 'from-blue-500 to-cyan-500',
         image: 'https://picsum.photos/300/200?random=12',
      },
      {
         name: 'Jazz',
         tracks: '890K',
         color: 'from-green-500 to-teal-500',
         image: 'https://picsum.photos/300/200?random=13',
      },
      {
         name: 'Classical',
         tracks: '650K',
         color: 'from-indigo-500 to-purple-500',
         image: 'https://picsum.photos/300/200?random=14',
      },
   ];

   const podcasts = [
      {
         id: 1,
         title: 'Music & Mind',
         host: 'Dr. Sarah Johnson',
         episodes: 45,
         duration: '30-45 min',
         image: 'https://picsum.photos/250/250?random=15',
      },
      {
         id: 2,
         title: 'Behind the Beat',
         host: 'Mike Rodriguez',
         episodes: 67,
         duration: '20-30 min',
         image: 'https://picsum.photos/250/250?random=16',
      },
      {
         id: 3,
         title: 'Artist Stories',
         host: 'Emma Chen',
         episodes: 32,
         duration: '45-60 min',
         image: 'https://picsum.photos/250/250?random=17',
      },
   ];

   const liveEvents = [
      {
         id: 1,
         title: 'Summer Music Festival',
         date: 'July 15, 2025',
         location: 'Central Park, NYC',
         price: '$89',
         image: 'https://picsum.photos/400/250?random=18',
      },
      {
         id: 2,
         title: 'Jazz Night Live',
         date: 'June 22, 2025',
         location: 'Blue Note, Chicago',
         price: '$45',
         image: 'https://picsum.photos/400/250?random=19',
      },
      {
         id: 3,
         title: 'Electronic Beats',
         date: 'August 3, 2025',
         location: 'Warehouse District, LA',
         price: '$65',
         image: 'https://picsum.photos/400/250?random=20',
      },
   ];

   const playlists = [
      {
         id: 1,
         title: 'Chill Vibes',
         tracks: 42,
         duration: '2h 15m',
         listeners: '1.2M',
         image: 'https://picsum.photos/300/300?random=21',
      },
      {
         id: 2,
         title: 'Workout Pump',
         tracks: 35,
         duration: '1h 45m',
         listeners: '890K',
         image: 'https://picsum.photos/300/300?random=22',
      },
      {
         id: 3,
         title: 'Road Trip Hits',
         tracks: 56,
         duration: '3h 20m',
         listeners: '2.1M',
         image: 'https://picsum.photos/300/300?random=23',
      },
      {
         id: 4,
         title: 'Late Night Lounge',
         tracks: 28,
         duration: '1h 55m',
         listeners: '650K',
         image: 'https://picsum.photos/300/300?random=24',
      },
   ];

   const musicNews = [
      {
         id: 1,
         title: "New Album Release: Aurora Sky's 'Stellar Dreams'",
         summary:
            'The acclaimed artist drops her most ambitious project yet...',
         date: '2 hours ago',
         image: 'https://picsum.photos/300/200?random=25',
      },
      {
         id: 2,
         title: 'Grammy Nominations 2025 Announced',
         summary:
            "See which artists made the cut for this year's biggest awards...",
         date: '1 day ago',
         image: 'https://picsum.photos/300/200?random=26',
      },
      {
         id: 3,
         title: 'Streaming Numbers Hit All-Time High',
         summary: 'Music streaming sees unprecedented growth in 2025...',
         date: '3 days ago',
         image: 'https://picsum.photos/300/200?random=27',
      },
   ];

   return (
      <motion.div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
         {/* Hero Section */}
         <MusicHero />

         {/* Featured Music Section */}
         <FeaturedTracks />

         {/* Top Artists Section */}
         <TopArtists />

         {/* Music Genres Section */}
         <MostPopularMusic />

         {/* Trending Playlists Section */}
         <PlayList />

         {/* Podcasts Section */}
         <MusicPodcast />

         {/* Live Events Section */}
         <LiveEvents />

         {/* Music News Section */}
         <MusicNews />

         {/* Newsletter Section */}
         <section
            id="newsletter"
            className="py-20 bg-gradient-to-r from-pink-500/20 to-purple-600/20"
         >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                  <FaMailBulk className="h-16 w-16 text-pink-400 mx-auto mb-8" />
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                     Stay in the{' '}
                     <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Loop
                     </span>
                  </h2>
                  <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                     Get the latest music releases, artist news, and exclusive
                     content delivered straight to your inbox.
                  </p>
                  <div className="flex justify-center">
                     <EmailListForm />
                  </div>

                  <p className="text-white/50 text-sm mt-6">
                     No spam, unsubscribe anytime. Your privacy is important to
                     us.
                  </p>
               </div>
            </div>
         </section>
      </motion.div>
   );
}

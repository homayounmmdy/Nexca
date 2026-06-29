import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { BsPause, BsPlay } from 'react-icons/bs';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

interface MusicPlayerProps {
   url: string;
   title: string;
   artist: string;
   coverImage: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
   url,
   title = 'Unknown Track',
   artist = 'Unknown Artist',
   coverImage = '/static/Image/logo.jpg',
}) => {
   const [isPlaying, setIsPlaying] = useState(false);
   const [currentTime, setCurrentTime] = useState(0);
   const [duration, setDuration] = useState(0);
   const [volume, setVolume] = useState(1);
   const [isMuted, setIsMuted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const audioRef = useRef<HTMLAudioElement>(null);
   const progressRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      const handleLoadStart = () => setIsLoading(true);
      const handleLoadedData = () => setIsLoading(false);
      const handleEnded = () => setIsPlaying(false);

      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('loadeddata', handleLoadedData);
      audio.addEventListener('ended', handleEnded);

      return () => {
         audio.removeEventListener('timeupdate', updateTime);
         audio.removeEventListener('loadedmetadata', updateDuration);
         audio.removeEventListener('loadstart', handleLoadStart);
         audio.removeEventListener('loadeddata', handleLoadedData);
         audio.removeEventListener('ended', handleEnded);
      };
   }, [url]);

   const togglePlay = async () => {
      const audio = audioRef.current;
      if (!audio) return;

      try {
         if (isPlaying) {
            audio.pause();
         } else {
            await audio.play();
         }
         setIsPlaying(!isPlaying);
      } catch (error) {
         console.error('Error playing audio:', error);
      }
   };

   const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      const progressBar = progressRef.current;
      if (!audio || !progressBar) return;

      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const newTime = (clickX / width) * duration;

      audio.currentTime = newTime;
   };

   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      if (audioRef.current) {
         audioRef.current.volume = newVolume;
      }
   };

   const toggleMute = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (isMuted) {
         audio.volume = volume;
         setIsMuted(false);
      } else {
         audio.volume = 0;
         setIsMuted(true);
      }
   };

   const formatTime = (time: number) => {
      if (isNaN(time)) return '0:00';
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
   };

   const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

   return (
      <div className="relative mb-3 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-8 rounded-3xl shadow-2xl w-full mx-auto">
         {/* Animated background effects */}
         <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-cyan-500/10 to-pink-500/10 rounded-full animate-spin-reverse"></div>
         </div>

         {/* Glowing border effect */}
         <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>

         <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 flex-wrap lg:flex-nowrap">
               <div>
                  <div className="relative mb-6">
                     <div className="w-40 sm:w-48 h-40  sm:h-48 mx-auto rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                        <Image
                           src={coverImage}
                           alt={title}
                           width={192}
                           height={192}
                           fetchPriority="high"
                           priority
                           className="w-full h-full object-cover"
                        />
                        {isLoading && (
                           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                           </div>
                        )}
                     </div>

                     {/* Pulsing ring when playing */}
                     {isPlaying && (
                        <div className="absolute inset-0 rounded-2xl border-4 border-blue-400/50 animate-pulse"></div>
                     )}
                  </div>
                  {/* Track Info */}
                  <div className="text-center mb-6">
                     <h3 className="text-xl font-bold text-white mb-1 ">
                        {title}
                     </h3>
                     <p className="text-blue-300 text-sm truncate">{artist}</p>
                  </div>
               </div>
               <div className="w-full">
                  {/* Progress Bar */}
                  <div className="mb-6">
                     <div
                        ref={progressRef}
                        className="relative h-2 bg-white/20 rounded-full cursor-pointer group"
                        onClick={handleProgressClick}
                     >
                        <div
                           className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                           style={{ width: `${progress}% ` }}
                        >
                           <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                     </div>

                     {/* Time Display */}
                     <div className="flex justify-between text-xs text-white/70 mt-2">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                     </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                     <button
                        onClick={togglePlay}
                        disabled={isLoading}
                        className="p-4 cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                        {isLoading ? (
                           <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : isPlaying ? (
                           <BsPause size={24} />
                        ) : (
                           <BsPlay size={24} className="ml-1" />
                        )}
                     </button>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center space-x-3">
                     <button
                        onClick={toggleMute}
                        className="p-2 cursor-pointer rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
                     >
                        {isMuted ? (
                           <FiVolumeX size={16} />
                        ) : (
                           <FiVolume2 size={16} />
                        )}
                     </button>

                     <div className="flex-1">
                        <input
                           type="range"
                           min="0"
                           max="1"
                           step="0.01"
                           value={isMuted ? 0 : volume}
                           onChange={handleVolumeChange}
                           className="w-full h-1 bg-white/20 rounded-full outline-none slider"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Hidden Audio Element */}
         <audio ref={audioRef} src={url} preload="metadata" />

         <style jsx>{`
            @keyframes spin-slow {
               from {
                  transform: rotate(0deg);
               }
               to {
                  transform: rotate(360deg);
               }
            }

            @keyframes spin-reverse {
               from {
                  transform: rotate(360deg);
               }
               to {
                  transform: rotate(0deg);
               }
            }

            .animate-spin-slow {
               animation: spin-slow 20s linear infinite;
            }

            .animate-spin-reverse {
               animation: spin-reverse 15s linear infinite;
            }

            .slider {
               background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
               background-size: ${isMuted ? 0 : volume * 100}% 100%;
               background-repeat: no-repeat;
            }

            .slider::-webkit-slider-thumb {
               appearance: none;
               width: 16px;
               height: 16px;
               border-radius: 50%;
               background: white;
               cursor: pointer;
               box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
               transition: transform 0.2s;
            }

            .slider::-webkit-slider-thumb:hover {
               transform: scale(1.2);
            }

            .slider::-moz-range-thumb {
               width: 16px;
               height: 16px;
               border-radius: 50%;
               background: white;
               cursor: pointer;
               border: none;
               box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
            }
         `}</style>
      </div>
   );
};

export default MusicPlayer;

'use client';
import { Button, Input } from '@/components/atoms';
import { AUTH_KEY } from '@/config/Constants';
import RouteConfig from '@/config/RouteConfig';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Credentials from './components/Credentials';

const Login: React.FC = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [showCredentials, setShowCredentials] = useState(false);
   const [mounted, setMounted] = useState(false);
   const router = useRouter();
   const didNavigateRef = useRef(false);

   // Animation mount effect
   useEffect(() => {
      setMounted(true);
   }, []);

   // Check if the user is already authenticated
   useEffect(() => {
      if (didNavigateRef.current) return;

      const isAuthenticated = localStorage.getItem(AUTH_KEY);
      if (isAuthenticated) {
         toast.success("Welcome back! You're already logged in.", {
            duration: 3000,
         });
         router.push(RouteConfig.admin.base);
         didNavigateRef.current = true;
      }

      return () => {
         didNavigateRef.current = false;
      };
   }, [router]);

   // Handle login submission
   const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      // Simulate loading for smooth UX
      await new Promise((resolve) => setTimeout(resolve, 800));

      const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD || 'a123b456@@';
      const USERNAME = process.env.NEXT_PUBLIC_USERNAME || 'admin';

      if (!PASSWORD || !USERNAME) {
         console.error('Environment variables for login are missing.');
         toast.error('Server error. Please try again later.');
         setIsLoading(false);
         return;
      }

      if (username === USERNAME && password === PASSWORD) {
         toast.success('Welcome to Admin Panel! 🎉', {
            duration: 3000,
         });
         localStorage.setItem(AUTH_KEY, JSON.stringify(true));
         router.push(RouteConfig.admin.base);
      } else {
         toast.error('Invalid credentials. Try the demo login!');
      }
      setIsLoading(false);
   };

   return (
      <>
         <Toaster position="top-center" />

         {/* Main Content */}
         <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-poppins flex items-center justify-center p-4">
            <div
               className={`w-full max-w-md transition-all duration-1000 ease-out transform ${
                  mounted
                     ? 'translate-y-0 opacity-100'
                     : 'translate-y-8 opacity-0'
               }`}
            >
               {/* Admin Credentials Display */}
               {showCredentials && (
                  <Credentials
                     setPassword={setPassword}
                     setUsername={setUsername}
                     showCredentials
                  />
               )}

               {/* Login Card */}
               <div className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                  {/* Header */}
                  <div className="p-8 pb-6">
                     <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-xl animate-pulse-gentle">
                           <svg
                              className="w-8 h-8 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                              />
                           </svg>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
                           Welcome Back
                        </h1>
                        <p className="text-white/70 text-lg">
                           Sign in to your admin panel
                        </p>
                     </div>

                     {/* Quick Access Button */}
                     <div className="mb-6">
                        <Button
                           onClick={() => setShowCredentials(!showCredentials)}
                           className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg font-medium"
                        >
                           {showCredentials ? '🔒 Hide' : '🔓 Show'} Admin
                           Credentials
                        </Button>
                     </div>

                     {/* Login Form */}
                     <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                           <label
                              htmlFor="username"
                              className="block text-white/90 font-medium text-sm"
                           >
                              Username
                           </label>
                           <div className="relative group">
                              <Input
                                 type="text"
                                 name="username"
                                 aria-label="Enter username"
                                 value={username}
                                 onChange={(e) => setUsername(e.target.value)}
                                 className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:bg-white/15 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300 transform group-hover:scale-[1.01]"
                                 placeholder="Enter your username"
                                 required
                              />
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label
                              htmlFor="password"
                              className="block text-white/90 font-medium text-sm"
                           >
                              Password
                           </label>
                           <div className="relative group">
                              <Input
                                 type="password"
                                 name="password"
                                 aria-label="Enter password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:bg-white/15 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300 transform group-hover:scale-[1.01]"
                                 placeholder="Enter your password"
                                 required
                              />
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                           </div>
                        </div>

                        <Button
                           type="submit"
                           disabled={isLoading}
                           className={`w-full py-4 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl ${
                              isLoading ? 'opacity-80 cursor-not-allowed' : ''
                           }`}
                        >
                           {isLoading ? (
                              <div className="flex items-center justify-center gap-2">
                                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                 Signing In...
                              </div>
                           ) : (
                              'Sign In to Admin Panel'
                           )}
                        </Button>
                     </form>
                  </div>

                  {/* Footer */}
                  <div className="px-8 pb-8">
                     <div className="text-center text-sm text-white/60">
                        <p>
                           By signing in, you agree to our{' '}
                           <Link
                              href="/privacy_policy"
                              className="text-white/80 hover:text-white transition-colors duration-200 font-medium underline-offset-4 hover:underline"
                              title="Privacy Policy"
                           >
                              Privacy Policy
                           </Link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <style jsx>{`
            @keyframes float {
               0%,
               100% {
                  transform: translate(0px, 0px) rotate(0deg);
               }
               33% {
                  transform: translate(30px, -30px) rotate(120deg);
               }
               66% {
                  transform: translate(-20px, 20px) rotate(240deg);
               }
            }

            @keyframes float-delayed {
               0%,
               100% {
                  transform: translate(0px, 0px) rotate(0deg);
               }
               33% {
                  transform: translate(-30px, 30px) rotate(-120deg);
               }
               66% {
                  transform: translate(20px, -20px) rotate(-240deg);
               }
            }

            @keyframes float-slow {
               0%,
               100% {
                  transform: translate(0px, 0px) rotate(0deg);
               }
               50% {
                  transform: translate(-20px, -20px) rotate(180deg);
               }
            }

            @keyframes pulse-gentle {
               0%,
               100% {
                  transform: scale(1);
               }
               50% {
                  transform: scale(1.05);
               }
            }

            .animate-float {
               animation: float 20s ease-in-out infinite;
            }

            .animate-float-delayed {
               animation: float-delayed 25s ease-in-out infinite;
            }

            .animate-float-slow {
               animation: float-slow 30s ease-in-out infinite;
            }

            .animate-pulse-gentle {
               animation: pulse-gentle 3s ease-in-out infinite;
            }

            .bg-grid-white\/\[0\.05\] {
               background-image: radial-gradient(
                  circle at 1px 1px,
                  rgba(255, 255, 255, 0.05) 1px,
                  transparent 0
               );
            }

            .bg-grid-16 {
               background-size: 16px 16px;
            }
         `}</style>
      </>
   );
};

export default Login;

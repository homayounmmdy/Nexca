import { Button } from '@/components/atoms';
import toast from 'react-hot-toast';

interface Props {
   showCredentials: boolean;
   setUsername: React.Dispatch<React.SetStateAction<string>>;
   setPassword: React.Dispatch<React.SetStateAction<string>>;
}
const Credentials = ({ setUsername, setPassword, showCredentials }: Props) => {
   const handleDemoLogin = () => {
      const USERNAME = process.env.NEXT_PUBLIC_USERNAME || 'admin';
      const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD || 'a123b456@@';

      setUsername(USERNAME);
      setPassword(PASSWORD);

      toast.success('Demo credentials loaded!', {
         duration: 2000,
      });
   };

   return (
      <div
         className={`mb-6 p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl transition-all duration-500 ${
            showCredentials
               ? 'opacity-100 translate-y-0'
               : 'opacity-0 -translate-y-4'
         }`}
      >
         <div className="text-center">
            <h3 className="text-white font-semibold mb-2 flex items-center justify-center gap-2">
               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
               Admin Access
            </h3>
            <div className="space-y-1 text-sm text-white/80">
               <p>
                  <span className="font-medium">Username:</span> admin
               </p>
               <p>
                  <span className="font-medium">Password:</span> a123b456@@
               </p>
            </div>
            <Button
               onClick={handleDemoLogin}
               className="mt-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xs rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
               Quick Login
            </Button>
         </div>
      </div>
   );
};

export default Credentials;

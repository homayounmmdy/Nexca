import { CgWebsite } from 'react-icons/cg';
import { SlEnergy } from 'react-icons/sl';
import { VscFeedback } from 'react-icons/vsc';
import { FeaturesType } from '../types';

export const FeaturesData: FeaturesType[] = [
   {
      title: 'Full CRUD',
      Icon: SlEnergy,
      description:
         'With Nexca panel you can Create Read Update Delete All your posts, services , ads and more without any coding knowledge',
      gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
      iconColor: 'text-yellow-500',
      delay: 0,
   },
   {
      title: 'FeedBack',
      Icon: VscFeedback,
      description:
         'Inside of your panel and see all the idea and feed back of other people about your website where come from contacts page',
      gradient: 'from-purple-500 via-purple-600 to-indigo-600',
      iconColor: 'text-purple-400',
      delay: 0.1,
   },
   {
      title: 'Services',
      Icon: CgWebsite,
      description:
         'Add Services page for your website from your panel and move you post into that.',
      gradient: 'from-blue-500 via-blue-600 to-blue-700',
      iconColor: 'text-blue-400',
      delay: 0.2,
   },
];

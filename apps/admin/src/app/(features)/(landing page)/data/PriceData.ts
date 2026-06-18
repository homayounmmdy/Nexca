import { PriceDataType } from '../types';

export const PriceData: PriceDataType[] = [
   {
      id: 1,
      titr: 'Starter',
      description:
         'Perfect for individuals getting started with premium features and unlimited access.',
      special: false,
      features: [
         { id: 1, name: 'Unlimited projects', mark: true },
         { id: 2, name: '24/7 Support', mark: true },
         { id: 3, name: 'Advanced analytics', mark: false },
         { id: 4, name: 'Custom integrations', mark: false },
         { id: 5, name: 'Priority support', mark: false },
      ],
   },
   {
      id: 2,
      titr: 'Professional',
      description:
         'Ideal for professionals and small teams who need advanced features and priority support.',
      special: true,
      features: [
         { id: 1, name: 'Everything in Starter', mark: true },
         { id: 2, name: 'Advanced analytics', mark: true },
         { id: 3, name: 'Custom integrations', mark: true },
         { id: 4, name: 'Priority support', mark: true },
         { id: 5, name: 'White-label solution', mark: false },
      ],
   },
   {
      id: 3,
      titr: 'Enterprise',
      description:
         'Comprehensive solution for large organizations with custom needs and dedicated support.',
      special: false,
      features: [
         { id: 1, name: 'Everything in Professional', mark: true },
         { id: 2, name: 'White-label solution', mark: true },
         { id: 3, name: 'Dedicated account manager', mark: true },
         { id: 4, name: 'Custom development', mark: true },
         { id: 5, name: 'SLA guarantee', mark: true },
      ],
   },
];

'use client';
import useGetMapContent from '@/app/(features)/maps/hooks/useGetMapContent';
import { ErrorText, Spinner } from '@/components/atoms';
import { PostItem } from '@/components/posts';
import { MapsCashType } from '@/types/CashTypes';

interface Props {
   key: string;
   provinceID: number;
   countryID?: number;
}

const MapContent = ({ key, provinceID, countryID = 1 }: Props) => {
   const { data, loading } = useGetMapContent(key, -1, countryID, provinceID);

   if (loading) {
      return <Spinner />;
   }
   return (
      <div className="grid md:grid-cols-2 gap-4 my-6">
         {data.length > 0 ? (
            data?.map((content: MapsCashType) => (
               <PostItem
                  post={{
                     ...content,
                     disableLinks: true,
                     disableHoverEffect: true,
                  }}
                  key={content._id}
               />
            ))
         ) : (
            <ErrorText>No Content found for this province.</ErrorText>
         )}
      </div>
   );
};

export default MapContent;

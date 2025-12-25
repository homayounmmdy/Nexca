import { Container } from '@/components/atoms';
import { PostItem } from '@/components/posts';

function TemplatePage() {
   return (
      <>
         <Container className="mt-30">
            <div
               id="main"
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-3 md:gap-5 my-5"
            >
               {templates?.map((template) => (
                  <PostItem
                     post={{ ...template, postFooter: false }}
                     key={template._id}
                  />
               ))}
            </div>
         </Container>
      </>
   );
}

const templates = [
   {
      _id: '1',
      title: 'default',
      description: 'Common Template for list of the templates',
      imgurl: '/static/Image/default_template.png',
      link: '/templates/default',
   },
   {
      _id: '2',
      title: 'AI Hub',
      description: 'Share the latest news about AI',
      imgurl: '/static/Image/ai_hub_template.png',
      link: '/templates/ai-hub',
   },
   {
      _id: '3',
      title: 'Bank News',
      description: 'See News about bank , finance and things like that.',
      imgurl: '/static/Image/bank_news_template.png',
      link: '/templates/bank-news',
   },
   {
      _id: '4',
      title: 'Chronicle',
      description: 'A news agency that share world wide news.',
      imgurl: '/static/Image/chronicle_template.png',
      link: '/templates/chronicle',
   },
   {
      _id: '5',
      title: 'music',
      description: 'Share you latest songs and albums',
      imgurl: '/static/Image/music_template.png',
      link: '/templates/music',
   },
];

export default TemplatePage;

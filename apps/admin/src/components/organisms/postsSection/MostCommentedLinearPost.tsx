'use client';
import { COMMENTS_API_URL, POST_API_URL } from '@/config/apiConstants';
import { ALL_POSTS_QUERY_KEY, COMMENTS_KEY } from '@/config/Constants';
import useFetch from '@/hooks/useFetch';
import { CommentsCashType, PostsCashType } from '@/types/CashTypes';
import LinearPosts from './LinearPosts';

const MostCommentedLinearPost = () => {
   // Fetch all posts
   const postsData = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

   // Fetch all comments
   const commentsData = useFetch(COMMENTS_KEY, COMMENTS_API_URL);

   console.log('comments', commentsData.data);
   // Count comments per post
   const getPostCommentCounts = () => {
      if (!postsData?.data || !commentsData?.data) return [];

      // Create a map of post IDs to comment counts
      const commentCountMap: Record<string, number> = {};

      // Initialize all post counts to 0
      postsData?.data.forEach((post: PostsCashType) => {
         commentCountMap[post._id] = 0;
      });

      // Count comments for each post
      commentsData.data.forEach((comment: CommentsCashType) => {
         // Assuming comment has a postId field - adjust this based on your actual data structure
         if (comment.postId && commentCountMap.hasOwnProperty(comment.postId)) {
            commentCountMap[comment.postId]++;
         }
      });

      // Create array with posts and their comment counts
      return postsData?.data
         .map((post: PostsCashType) => ({
            ...post,
            commentCount: commentCountMap[post._id] || 0,
         }))
         .filter((post: any) => post.commentCount > 0) // Only include posts with comments
         .sort((a: any, b: any) => b.commentCount - a.commentCount) // Sort by comment count (descending)
         .slice(0, 4); // Get top 4
   };

   const mostCommentedPosts = getPostCommentCounts();

   if (!mostCommentedPosts || mostCommentedPosts.length === 0) {
      return <div className="text-gray-500">No posts with comments yet.</div>;
   }

   return (
      <ul className="mb-3 flex flex-col gap-4">
         {mostCommentedPosts.map((post: any) => {
            return <LinearPosts post={post} key={post._id} />;
         })}
      </ul>
   );
};

export default MostCommentedLinearPost;

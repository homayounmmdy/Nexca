import { CommentsCashType } from '@/types/CashTypes';

/**
 * @typedef {Object} Comment
 * @property {string} _id - The unique identifier for the comment.
 * @property {string} postId - The unique identifier of the post this comment belongs to.
 * @property {string} name - The name of the commenter.
 * @property {string} email - The email of the commenter.
 * @property {string} message - The content of the comment.
 * @property {string} createdAt - The timestamp when the comment was created.
 * @property {string} updatedAt - The timestamp when the comment was last updated.
 * @property {number} __v - The version key for the comment (used by MongoDB).
 */

/**
 * A mock array of comments for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to DEV_MODE.
 * Otherwise, the data should be fetched from the database.
 *
 * @type {Comment[]}
 */

const CommentsCash: CommentsCashType[] = [
   {
      _id: '6641b06d0caf3407cd78b61e',
      postId: '6621b06d0caf3407cd78b61e',
      name: 'mosh',
      email: 'mosh@gmail.com',
      message: 'Hello I am mosh',
      createdAt: '2024-05-13T06:17:17.580Z',
      updatedAt: '2024-05-13T06:17:17.580Z',
      __v: 0,
   },
   {
      _id: '6641b06d0caf3407cd78b621',
      postId: '66a1b06d0caf3407cd78b621',
      name: 'homayoun',
      email: 'homayoun763@gmail.com',
      message: 'great article',
      createdAt: '2024-05-13T06:17:17.938Z',
      updatedAt: '2024-05-13T06:17:17.938Z',
      __v: 0,
   },
   {
      _id: '6641b06d0csf3407cd78b621',
      postId: '66a1b06d0caf3407cd78b621',
      name: 'Alex',
      email: 'alex@gmail.com',
      message: 'I agree with it',
      createdAt: '2024-05-13T06:17:17.938Z',
      updatedAt: '2024-05-13T06:17:17.938Z',
      __v: 0,
   },
   {
      _id: '664db351373934f6308928dd',
      postId: '664db351373934f6a08928dd',
      name: 'john',
      email: 'john@gmail.com',
      message: 'Thanks',
      createdAt: '2024-05-21T11:50:48.482Z',
      updatedAt: '2024-05-21T11:50:48.482Z',
      __v: 0,
   },
   {
      _id: '664db351373934f63s8928dd',
      postId: '664db351373932f6a08928dd',
      name: 'Ali',
      email: 'Ali@gmail.com',
      message: 'Amazing feature',
      createdAt: '2024-05-21T11:50:48.482Z',
      updatedAt: '2024-05-21T11:50:48.482Z',
      __v: 0,
   },
   {
      _id: '664db351373934f63s8928ad',
      postId: '664db351373932f6a08928dd',
      name: 'Sara',
      email: 'Sara@gmail.com',
      message: 'I love it',
      createdAt: '2024-05-21T11:50:48.482Z',
      updatedAt: '2024-05-21T11:50:48.482Z',
      __v: 0,
   },
   {
      _id: '664db351373934f63s892aad',
      postId: '665db3513739s2g6a08928dd',
      name: 'Sara',
      email: 'Sara@gmail.com',
      message: 'I love it',
      createdAt: '2024-05-21T11:50:48.482Z',
      updatedAt: '2024-05-21T11:50:48.482Z',
      __v: 0,
   },
   {
      _id: '664ds351373934f63s892aad',
      postId: '665db3513739s2g6a08928dd',
      name: 'Sara',
      email: 'Sara@gmail.com',
      message: 'I love it',
      createdAt: '2024-05-21T11:50:48.482Z',
      updatedAt: '2024-05-21T11:50:48.482Z',
      __v: 0,
   },
   {
      _id: '6a4ds351373934f63s892aad',
      postId: '665db3513739s2g6a08928dd',
      name: 'Sara',
      email: 'Sara@gmail.com',
      message: 'I love it',
      createdAt: '2024-05-21T11:50:48.482Z',
      updatedAt: '2024-05-21T11:50:48.482Z',
      __v: 0,
   },
   {
      _id: '6a4ds351373934f6as892aad',
      postId: '665db3513739s2g6a08928dd',
      name: 'Sara',
      email: 'Sara@gmail.com',
      message: 'I love it',
      createdAt: '2024-05-21T11:50:48.482Z',
      updatedAt: '2024-05-21T11:50:48.482Z',
      __v: 0,
   },
   {
      _id: '664db351373931f6308928dd',
      postId: '665db351373932f6a08928dd',
      name: 'max',
      email: 'max@gmail.com',
      message:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab magni possimus debitis necessitatibus repellat voluptate',
      createdAt: '2024-05-21T11:50:48.482Z',
      updatedAt: '2024-05-21T11:50:48.482Z',
      __v: 0,
   },
];

export default CommentsCash;

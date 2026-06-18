import { ImgAdvCashType } from '@/types/CashTypes';

/**
 * @typedef {Object} ImgAdvCashType
 * @property {string} _id - The unique identifier for the text advertisement.
 * @property {number} advId - The unique identifier for the text advertisement (numeric).
 * @property {string} advName - The name of the advertisement.
 * @property {string} imgURL - The url of image in the advertisement.
 * @property {string} imgAlt - The alt of image in the advertisement.
 * @property {string} body - The content of the advertisement.
 * @property {string} link - The URL link associated with the advertisement.
 * @property {string} createdAt - The timestamp when the advertisement was created.
 * @property {string} updatedAt - The timestamp when the advertisement was last updated.
 * @property {number} __v - The version key for the advertisement (used by MongoDB).
 */

/**
 * A mock array of text advertisements for development purposes.
 * This will only be used if the environment variable `NEXT_PUBLIC_STATUS` is set to DEV_MODE.
 * Otherwise, the data should be fetched from the database.
 *
 * @type {ImgAdvCashType[]}
 */

const TextAdvCash: ImgAdvCashType[] = [
   {
      _id: '664dab349ddca5e2184ff317',
      advId: 1,
      advName: 'First Image Adv',
      imgURL:
         'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ex debitis aliquam cupiditate eligendi. Beatae dignissimos esse quam voluptates odit.',
      link: 'https://nexca.vercel.app/',
      createdAt: '2024-05-22T08:22:12.196Z',
      updatedAt: '2024-05-22T08:22:12.196Z',
      __v: 0,
   },
];

export default TextAdvCash;

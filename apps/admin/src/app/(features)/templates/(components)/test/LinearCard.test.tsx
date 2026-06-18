import React from 'react';
import { render, screen } from '@testing-library/react';
import LinearCard from '../LinearCard';
import { PostsCashType } from '@/types/CashTypes';
import { expect } from 'vitest';

describe('LinearCard component', () => {
   const PostData: PostsCashType = {
      _id: '1',
      title: 'Post Title',
      description: '',
      body: '',
      imgurl: '',
      author: 'Tim',
      services: '2',
      templates: '1',
      section: '1',
      createdAt: '2024-05-22T08:56:49.785Z',
      updatedAt: '2024-05-22T08:56:49.785Z',
      __v: 0,
   };

   it('render with right data', () => {
      render(<LinearCard data={PostData} />);

      // check right data
      expect(screen.getByText(PostData.title)).toBeInTheDocument();
      expect(screen.getByText('Tim')).toBeInTheDocument();

      // check icons
      expect(screen.getByTestId('calender-icon')).toBeInTheDocument();
      expect(screen.getByTestId('user-icon')).toBeInTheDocument();

      // check the formatted date
      expect(screen.getByText('22/05/2024')).toBeInTheDocument();
   });
   it('should render unknown when there is not author', () => {
      const noAuthorData = {
         ...PostData,
         author: '',
      };

      render(<LinearCard data={noAuthorData} />);

      expect(screen.queryByText('Tim')).not.toBeInTheDocument();
      expect(screen.queryByText('unknown')).toBeInTheDocument();
   });
});

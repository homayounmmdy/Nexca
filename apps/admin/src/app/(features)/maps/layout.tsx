import React from 'react';
import { Container } from '@/components/atoms';
import './maps.css';

export default function MapLayout({ children }: { children: React.ReactNode }) {
   return <Container>{children}</Container>;
}

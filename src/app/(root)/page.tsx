// ! Its mandatory to type 'use client' on each page where its needed, it doesnt affect child pages/routes.

import type { Metadata } from 'next';

import { Title } from '@/components/atoms';
import { authService, toastService } from '@/shared/services';
import { NUMBER_ONE, NUMBER_ZERO, NUMBERS } from '@/utils/constants';
import { transformToCapital, transformToLowerCase, transformToNumber } from '@/utils/helpers';

export const metadata: Metadata = {
  title: 'Home Page - My Static App',
  description: 'This is a statically generated page with SEO metadata.'
};

export default function Home() {
  // Test the helpers and constans
  console.log(transformToNumber('1'));
  console.log(transformToCapital('hello'));
  console.log(transformToLowerCase('HELLO'));
  console.log(NUMBER_ZERO, NUMBER_ONE, NUMBERS.TWO, NUMBERS.THREE);
  authService.login();
  toastService.showSuccess('Success message');

  return (
    <section>
      <Title title='Root content' />
    </section>
  );
}

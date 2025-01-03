'use client'; // * Important: This not change render type on Pages
import { ReactNode } from 'react';

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <div>
        <aside>
          <h2>Side Panel</h2>
        </aside>
      </div>
      <div>{children}</div>
    </div>
  );
}

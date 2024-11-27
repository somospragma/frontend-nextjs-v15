'use client';

import { useState } from 'react';

export default function ClientComponent({ initialMessage }: { initialMessage: string }) {
  const [message, setMessage] = useState(initialMessage);

  return (
    <div>
      <h2>Este es un componente del cliente</h2>
      <p>Mensaje inicial: {message}</p>
      <button onClick={() => setMessage('Mensaje actualizado desde el cliente!')}>
        Actualizar mensaje
      </button>
    </div>
  );
}

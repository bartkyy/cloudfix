import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <head>
        <title>Polityka prywatności</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="app/img/favicon1.ico" type="image/x-icon" />
      </head>
      <main style={{ padding: "1rem", fontFamily: "sans-serif" }}>
        <h1>Polityka prywatności</h1>
        <p>
          Niniejsza strona internetowa nie zbiera ani nie przetwarza danych osobowych użytkowników.
        </p>
        <p>
          Możliwy kontakt z administratorem strony odbywa się wyłącznie za pośrednictwem zewnętrznych serwisów, takich jak:
        </p>
        <ul>
          <li>Instagram</li>
          <li>Messenger (Facebook)</li>
          <li>Discord</li>
        </ul>
        <p>
          W przypadku skorzystania z tych kanałów komunikacji, dane osobowe (np. nazwa użytkownika, treść wiadomości)
          mogą być przetwarzane przez odpowiednich dostawców tych usług, zgodnie z ich własnymi politykami prywatności:
        </p>
        <p>
          Meta Platforms (Instagram, Messenger):{' '}
          <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">
            https://www.facebook.com/privacy/policy
          </a>
        </p>
        <p>
          Discord Inc.:{' '}
          <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer">
            https://discord.com/privacy
          </a>
        </p>
        <p>
          Administrator strony nie ma wpływu na zasady przetwarzania danych przez te serwisy i nie ponosi za nie odpowiedzialności.
          Rekomendujemy zapoznanie się z ich politykami prywatności przed nawiązaniem kontaktu.
        </p>
      </main>
    </>
  );
};

export default PrivacyPolicy;

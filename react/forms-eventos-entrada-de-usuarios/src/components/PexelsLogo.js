import React from 'react';

const PexelsLogo = () => {
  return (
    <div>
      {/* target=_blank abre a página em nova aba */}
      <a href="https://www.pexels.com"  rel="noopener noreferrer">
        <img
          width={75}
          src="https://images.pexels.com/lib/api/pexels.png"
          alt="Pexels Logo"
        />
      </a>
    </div>
  );
};

export default PexelsLogo;
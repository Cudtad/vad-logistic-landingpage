import { useEffect } from 'react';

const ZaloChat = () => {
  useEffect(() => {
    const zaloScript = document.createElement('script');
    zaloScript.src = 'https://sp.zalo.me/plugins/sdk.js';
    zaloScript.async = true;

    const zaloDiv = document.createElement('div');
    zaloDiv.className = 'zalo-chat-widget fixed bottom-[15%] right-[8%]'; // Use Tailwind classes for positioning
    zaloDiv.setAttribute('data-oaid', '995551835850275711');
    zaloDiv.setAttribute('data-welcome-message', 'Chào bạn! Chúng tôi có thể giúp gì được cho bạn?');
    zaloDiv.setAttribute('data-autopopup', '30');

    document.body.appendChild(zaloDiv);
    document.body.appendChild(zaloScript);

    // Observer to ensure styles remain consistent
    const applyStyles = () => {
      zaloDiv.style.left = 'auto';
    };

    applyStyles();

    const observer = new MutationObserver(() => {
      applyStyles();
    });

    observer.observe(zaloDiv, { attributes: true, attributeFilter: ['class'] });

    // Add shake effect every 5 seconds
    const intervalId = setInterval(() => {
      zaloDiv.classList.add('animate-shake');
      setTimeout(() => {
        zaloDiv.classList.remove('animate-shake');
      }, 500); // Duration of the shake animation
    }, 25000); // Interval time

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
      document.body.removeChild(zaloDiv);
      document.body.removeChild(zaloScript);
    };
  }, []);

  return null;
};

export default ZaloChat;

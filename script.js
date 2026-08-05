(function lockExpiredDeployment() {
  function blockEvent(event) {
    if (event.target && event.target.closest && event.target.closest('.subscription-wall')) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  function lockPage() {
    document.querySelectorAll('button, input, textarea, select, a').forEach((el) => {
      el.setAttribute('aria-disabled', 'true');
      if ('disabled' in el) el.disabled = true;
      if (el.tagName === 'A') el.removeAttribute('href');
      el.tabIndex = -1;
    });

    ['click', 'submit', 'input', 'change', 'keydown', 'touchstart'].forEach((eventName) => {
      document.addEventListener(eventName, blockEvent, true);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lockPage);
  } else {
    lockPage();
  }
})();

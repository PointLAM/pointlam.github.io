const copyButton = document.querySelector('#copy-citation');
const citation = document.querySelector('#bibtex code');
const copyStatus = document.querySelector('#copy-status');

if (copyButton && citation && copyStatus && navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      copyStatus.textContent = 'BibTeX copied.';
    } catch {
      copyStatus.textContent = 'Copy unavailable. Select and copy the citation below.';
    }
  });
}

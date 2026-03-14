export function splitWords(selector: string): void {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  elements.forEach((element) => {
    const text = element.textContent;
    if (!text) return;

    const words = text.trim().split(/\s+/);

    element.innerHTML = words
      .map((word, index) => {
        return `<span class="word" style="transition-delay: ${index * 120}ms">${word}</span>`;
      })
      .join(" ");
  });
}
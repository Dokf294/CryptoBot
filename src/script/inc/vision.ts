type VisionItem = {
  selector: string;
  addClass?: string | string[];
  removeClass?: string | string[];
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

type VisionOptions = {
  items: VisionItem[];
};

class Vision {
  private observers: IntersectionObserver[] = [];
  private items: VisionItem[];

  constructor(options: VisionOptions) {
    this.items = options.items;
  }

  private normalizeClasses(classes?: string | string[]): string[] {
    if (!classes) return [];

    const list = Array.isArray(classes) ? classes : [classes];

    return list
      .map((item) => item.trim())
      .filter(Boolean);
  }

  public init(): void {
    this.items.forEach((item) => {
      const {
        selector,
        threshold = 0.15,
        rootMargin = "0px 0px -10% 0px",
        once = true,
      } = item;

      const addClass = this.normalizeClasses(item.addClass);
      const removeClass = this.normalizeClasses(item.removeClass);

      const elements = document.querySelectorAll<HTMLElement>(selector);

      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;

            if (entry.isIntersecting) {
              const delay = target.dataset.delay;
              if (delay) {
                target.style.transitionDelay = `${delay}ms`;
              }

              if (removeClass.length) {
                target.classList.remove(...removeClass);
              }

              if (addClass.length) {
                target.classList.add(...addClass);
              }

              if (once) {
                obs.unobserve(target);
              }
            } else if (!once) {
              if (addClass.length) {
                target.classList.remove(...addClass);
              }

              if (removeClass.length) {
                target.classList.add(...removeClass);
              }

              target.style.transitionDelay = "";
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );

      elements.forEach((element) => {
        if (removeClass.length) {
          element.classList.add(...removeClass);
        }

        observer.observe(element);
      });

      this.observers.push(observer);
    });
  }

  public destroy(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

export default Vision;
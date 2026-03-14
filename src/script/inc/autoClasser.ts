type AutoClasserItem = {
  parent?: string;
  tags: string[];
  addClass: string | string[];
  exclude?: string;
};

type AutoClasserOptions = {
  items: AutoClasserItem[];
};

class AutoClasser {
  private items: AutoClasserItem[];

  constructor(options: AutoClasserOptions) {
    this.items = options.items;
  }

  private normalizeClasses(classes: string | string[]): string[] {
    const list = Array.isArray(classes) ? classes : [classes];
    return list.map((item) => item.trim()).filter(Boolean);
  }

  private buildSelector(tags: string[], parent?: string): string {
    if (!parent) return tags.join(", ");

    return tags.map((tag) => `${parent} ${tag}`).join(", ");
  }

  public init(): void {
    this.items.forEach((item) => {
      const classes = this.normalizeClasses(item.addClass);
      const selector = this.buildSelector(item.tags, item.parent);

      const elements = document.querySelectorAll<HTMLElement>(selector);

      if (!elements.length) return;

      elements.forEach((element) => {
        if (item.exclude && element.matches(item.exclude)) return;
        element.classList.add(...classes);
      });
    });
  }
}

export default AutoClasser;
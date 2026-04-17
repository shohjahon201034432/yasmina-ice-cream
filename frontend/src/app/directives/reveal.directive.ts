import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  readonly delay = input<string>('0s');
  readonly origin = input<'bottom' | 'left' | 'right'>('bottom');
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const native = this.element.nativeElement;
    this.renderer.addClass(native, 'reveal-item');
    this.renderer.setStyle(native, '--reveal-delay', this.delay());
    this.renderer.addClass(native, `reveal-${this.origin()}`);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(native, 'is-visible');
            this.observer?.unobserve(native);
          }
        });
      },
      { threshold: 0.16 }
    );

    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

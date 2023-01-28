import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngSi]'
})
export class CondicionalsiDirective implements OnInit {

  @Input('ngSi') show = true

  @Input('ngSiNo') otherTemplate: TemplateRef<any> | null = null

  constructor(private viewContainerRef: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit(): void {
    if (this.show) this.viewContainerRef.createEmbeddedView(this.template)
    else if (this.otherTemplate) this.viewContainerRef.createEmbeddedView(this.otherTemplate)
  }

}

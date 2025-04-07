import { LitElement, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('muza-icon')
export class MuzaIcon extends LitElement {
  @property({ type: String }) iconName: string = '';
  @property({ type: String }) svgStyle: string = '';

  render() {
    const el = document.createElement('icon-' + this.iconName);
    el.setAttribute('style', this.svgStyle);
    return svg`${el}`;
  }
}

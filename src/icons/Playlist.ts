import { LitElement, css, svg } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-playlist')
export class IconPlaylist extends LitElement {
  static styles = css`
    :host {
      text-align: center;
      display: block;
    }
  `;

  render() {
    return svg`<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="17" height="17" fill="white"/>
<path d="M2 4L15 4" stroke="#374151"/>
<path d="M2 7L15 7" stroke="#374151"/>
<path d="M2 10L9 10" stroke="#374151"/>
<path d="M2 13L9 13" stroke="#374151"/>
<path d="M14 11L11 12.7321L11 9.26795L14 11Z" fill="#374151" stroke="#374151"/>
</svg>
`;
  }
}

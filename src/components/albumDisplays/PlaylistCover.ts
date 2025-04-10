import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('playlist-cover')
export class PlaylistCover extends LitElement {
  static styles = css`
    :host {
      icon-playlist {
        margin-right: 10px;
        width: 20px;
        fill: #666;
      }
    }
  `;

  @property({ type: String, attribute: 'image-src' })
  imageSrc = '';

  @property({ type: String })
  title = '';

  @property({ type: String, attribute: 'songs-count' })
  songsCount = '';

  private handleTrackClick() {
    const event = new CustomEvent('playlist-selected', {
      detail: {
        title: this.title,
        songsCount: this.songsCount,
        imageSrc: this.imageSrc,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    const title = `<icon-playlist></icon-playlist> ${this.title}`;

    return html`
      <div @click=${this.handleTrackClick}>
        <album-cover
          image-src="${this.imageSrc}"
          title="${title}"
          sub-title="${this.songsCount} Songs"
        >
        </album-cover>
      </div>
    `;
  }
}

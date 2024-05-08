import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {
	classicThemeIcon,
	darkThemeIcon,
} from './icons';

const themes = [
  {
    name: 'default',
    icon: classicThemeIcon,
  },
  {
    name: 'dark',
    icon: darkThemeIcon,
  }
]

@customElement('theme-switcher')
export class ThemeSwitcher extends LitElement {
	static styles = css`
:host {
  display: block;
  position: absolute;  // Ensures positioning at the footer's bottom right
  right: 20px;         // Right margin for the theme switcher
  bottom: 10px;        // Bottom margin for the theme switcher
}
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  padding: 4px 6px;    // Smaller padding for smaller button
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.7rem;  // Smaller font size
  margin-right: 1px;  // Smaller margin for closer buttons
}
svg {
  width: 20px;        // Smaller icon size
  height: 20px;       // Smaller icon size
}
`;


	// set the _doc element
	private _doc = document.firstElementChild;

	@property({ type: String })
	theme: string | null = null;

	private _getCurrentTheme() {
		// check for a local storage theme first
		const localStorageTheme = localStorage.getItem('theme');
		if (localStorageTheme !== null) {
			this._setTheme(localStorageTheme);
		} else {
    	// Set default theme to dark if the operating system specifies this preference
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				this._setTheme('dark');
			} else{ // Set to default/light theme if no specification, or light theme is specified
				this._setTheme('dark');
			}
    		
    }
	}

  firstUpdated() {
    this._getCurrentTheme();
  }

	private _setTheme(theme) {
		this._doc.setAttribute('data-theme', theme);

    const _heroImage = document.querySelector('#home-hero-image') as HTMLImageElement;
		if (theme === 'dark') {
			_heroImage.src = '/assets/images/home/classic-hero.jpg';
		}
		if (theme === 'dark') {
			_heroImage.src = '/assets/images/home/dark-hero.jpg';
		}
		localStorage.setItem('theme', theme);
		this.theme = theme;
	}

	render() {
    const themeButtons = html`${themes.map((theme) => {
      return html`
      <div class="theme-select__container">
        <button
          @click=${() => this._setTheme(theme.name)}
          ?active=${this.theme === theme.name}
          title=${`Enable ${theme.label} Theme`}
        >
          ${theme.icon}
        </button>
        <p>${theme.label}</p>
        </div>
      `
    })}`

		return html`
			<div class="theme-switcher__container">
				${themeButtons}
			</div>
		`;
	}
}

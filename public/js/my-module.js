import { add } from './add.js';

export class MyModule extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const mode = this.hasAttribute('open') ? 'open' : 'closed';
    this.shadow = this.attachShadow({ mode });
    const div = document.createElement('div');
    div.style.color = 'var(--my-color, red)';
    div.innerText = add(5, 6);
    this.shadow.appendChild(div);
  }
}

customElements.define('my-module', MyModule);

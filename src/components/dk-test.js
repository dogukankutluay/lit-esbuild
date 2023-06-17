import { html, css, LitElement } from "lit";

class MyComponent extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  render() {
    return html` <p>Hello, Lit!</p> `;
  }
}

customElements.define("dk-test", MyComponent);

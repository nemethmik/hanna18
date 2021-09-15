import { html, render, LitElement, TemplateResult } from 'lit';
import { customElement,property } from 'lit/decorators.js';
@customElement('minimal-view')
export class MinimalView extends LitElement {
    @property() name = "Hanna 18"
    override render(): TemplateResult {
        return html`<h1>My View ${this.name}</h1>`;
    }
}
window.addEventListener("load",()=>{
    render(html`<h1>Hello</h1><minimal-view></minimal-view>`,document.getElementById("root"))
})

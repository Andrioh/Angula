import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CreateComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('cub', { static: false }) cub!: ElementRef;

  constructor(private renderer: Renderer2) {}

  onNewList() {
    if (this.cub) {
      const newCubDiv = this.createElement('div', 'Cub');

      const successButton = this.createButton('Success', () => this.toggleDone(newCubDiv));
      const deleteButton = this.createButton('Delete', () => this.deleteElement(newCubDiv));

      const elements = [successButton, this.createInput(), deleteButton];
      elements.forEach(el => this.renderer.appendChild(newCubDiv, el));
      this.renderer.appendChild(this.cub.nativeElement, newCubDiv);
    }
  }

  private createElement(tag: string, className?: string): HTMLElement {
    const element = this.renderer.createElement(tag);
    if (className) this.renderer.addClass(element, className);
    return element;
  }

  private createButton(text: string, onClick: () => void): HTMLElement {
    const button = this.createElement('button');
    this.renderer.listen(button, 'click', onClick);
    this.renderer.appendChild(button, this.renderer.createText(text));
    const buttonDiv = this.createElement('div', 'Button');
    this.renderer.appendChild(buttonDiv, button);
    return buttonDiv;
  }

  private createInput(): HTMLElement {
    const input = this.createElement('input');
    this.renderer.setAttribute(input, 'type', 'text');
    this.renderer.setAttribute(input, 'placeholder', 'Type here');
    this.renderer.setAttribute(input, 'max', '69');
    const textoDiv = this.createElement('div', 'Texto');
    this.renderer.appendChild(textoDiv, input);
    return textoDiv;
  }

  private toggleDone(cubDiv: HTMLElement): void {
    const textDiv = cubDiv.querySelector('.Texto input') as HTMLInputElement;
    if (textDiv) {
      const isDone = textDiv.classList.toggle('done');
      textDiv.style.textDecoration = isDone ? 'line-through' : 'none'; 
    }
  }

  private deleteElement(element: HTMLElement): void {
    this.renderer.removeChild(this.cub.nativeElement, element);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent {

     sections = {
    general: false,
    routing: false,
    crud: false,
    backend: false,
    running: false
  };
  toggleSection(sectionName: string, contentElement: HTMLElement): void {
    // Use type assertion to tell TypeScript this is a valid key
    const section = sectionName as keyof typeof this.sections;
    
    // Toggle the section state
    this.sections[section] = !this.sections[section];
    
    // Dynamically set the max-height based on content
    if (this.sections[section]) {
      contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
    } else {
      contentElement.style.maxHeight = '0';
    }
  }
}

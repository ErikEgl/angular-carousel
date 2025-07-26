import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JupiterDataService } from '../../services/jupiter-data.service';
import { HorizontalStripComponent } from '../horizontal-strip/horizontal-strip.component';
import { FrontPageSection } from '../../models/content.model';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, HorizontalStripComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  frontPageData: FrontPageSection[] = [];
  loading = true;
  error = false;
  errorMessage = '';

  constructor(private dataService: JupiterDataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.error = false;
    
    this.dataService.getFrontPageData().subscribe({
      next: (items) => {
        this.frontPageData = items.filter(item => item.highTimeline !== false);
        this.loading = false;
      },
      error: (err) => {
        this.error = true;
        this.errorMessage = err.message || 'Failed to load content';
        this.loading = false;
      }
    });
  }

  trackBySection(index: number, section: FrontPageSection): string {
    return section.header;
  }
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoType } from '../../models/content.model';


@Component({
  selector: 'app-content-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent {
  @Input() itemData: any;

  sizes: string = `(min-width: 1920px) calc((100vw - 60px - 24px - (7 * (0.3vw + 4px))) / 7),
            ((min-width: 1280px) and (max-width: 1919.99px)) calc((100vw - 60px - 24px - (6 * (0.3vw + 4px))) / 6),
            ((min-width: 960px) and (max-width: 1279.99px)) calc((100vw - 60px - 24px - (4 * (0.3vw + 4px))) / 4),
            ((min-width: 600px) and (max-width: 959.99px)) calc((100vw - 60px - 24px - (3 * (0.3vw + 4px))) / 3),
            (max-width: 599.99px) calc((100vw - 60px - 12px - (2 * (0.3vw + 4px))) / 2)`

  getImageUrl(): string | null {
    const photo = this.itemData?.verticalPhotos?.[0];
    return photo?.photoTypes?.['80']?.url ?? null;
  }

  getSrcSet(): string {
    const photo = this.itemData?.verticalPhotos?.[0];
    if (!photo?.photoTypes) return '';

    const selectedTypes = ['60', '80']
      .map(key => photo.photoTypes[key])
      .filter(pt => pt && typeof pt.url === 'string' && typeof pt.w === 'number') as PhotoType[];

    return selectedTypes
      .map(pt => `${pt.url} ${pt.w}w`)
      .join(', ');
  }
}

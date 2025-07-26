export interface PhotoType {
  type: number;
  w: number;
  h: number;
  url: string;
}

export interface Photo {
  id: number;
  ord?: number;
  type?: number;
  created?: number;
  version?: number;
  format?: string;
  captionEt?: string;
  captionEn?: string;
  captionRu?: string;
  authorEt?: string;
  authorEn?: string;
  authorRu?: string;
  photoTypes: Record<string, PhotoType>;
  photoUrlOriginal?: string;
  photoUrlBase: string;
}

export interface ContentItem {
  id: number;
  heading: string;
  primaryCategoryId?: number;
  type?: string;
  parentContentPath?: string;
  scheduleStart?: number;
  subHeading?: string;
  hasActiveMedia?: boolean;
  rootContentId?: number;
  rootCategoryId?: number;
  canonicalUrl?: string;
  fancyUrl?: string;
  anotherDomainContent?: boolean;
  verticalPhotos: Photo[];
  squarePhotos?: Photo[];
}

export interface FrontPageSection {
  header: string;
  headerUrl: string;
  highTimeline: boolean;
  liveBlock?: boolean;
  manual?: {
    highTimeline?: boolean;
    banner?: boolean;
  };
  data: ContentItem[];
}
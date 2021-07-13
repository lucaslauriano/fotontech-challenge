export interface Book {
  accessInfo: {
    accessViewStatus: string;
    country: string;
    embeddable: false;
    epub: {
      acsTokenLink: string;
      isAvailable: false;
    };
    pdf: {
      acsTokenLink: string;
      isAvailable: false;
    };
    publicDomain: false;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
  };
  etag: string;
  id: string;
  kind: string;
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: false;
  };
  searchInfo: {
    textSnippet: string;
  };
  selfLink: string;
  volumeInfo: {
    allowAnonLogging: false;
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
    industryIdentifiers: { type: string; identifier: string }[];
    infoLink: string;
    language: "pt";
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
      containsEpubBubbles: false;
      containsImageBubbles: false;
    };
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: {
      text: boolean;
      image: boolean;
    };
    title: string;
    subtitle: string;
  };
}

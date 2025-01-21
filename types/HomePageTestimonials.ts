export interface TestimonialData {
  ID: number;
  LOGO: {
    src: string;
  };
  DESCRIPTION: string;
  NAME: string;
  ROLE: string;
  ParagraphOne?: string;
  ParagraphTwo?: string;
  PragraphThree?: string;
  CLIENT_NAME: string;
  AuthorName: string;
  AuthorImage?: {
    src: string;
  };
}

export interface OFFERING_TYPE {
  ID: number;
  HEADING?: string;
  DESCRIPTION: string;
  ACTIVE_IMG: {
    src: string;
    alt: string;
  };
  PASSIVE_IMG: {
    src: string;
    alt: string;
  };
}
export interface OfferingState {
  showTrainingHover: boolean;
  showAuditHover: boolean;
  showExpressMethodologyHover: boolean;
  showE2EAutomationHover: boolean;
  showTraditionalToolHover: boolean;
}

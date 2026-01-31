
export enum Attendance {
  ACCEPT = 'ACCEPT',
  DECLINE = 'DECLINE'
}

export enum Entree {
  CHICKEN = 'Chicken',
  BEEF = 'Beef',
  VEGETARIAN = 'Vegetarian'
}

export interface RSVPData {
  name: string;
  email: string;
  attendance: Attendance | null;
  entree: Entree | null;
  message: string;
}

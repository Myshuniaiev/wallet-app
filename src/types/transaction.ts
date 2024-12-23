export interface ITransaction {
  id: number;
  name: string;
  amount: number;
  date: Date;
  type: "Payment" | "Credit";
  description: string;
  pending: boolean;
  authorizedUser?: string;
}

export interface Researcher {
  walletId: string;
  name: string;
  affiliation: string;
  email: string;
  university: string;
  profession: string;
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  grant: string;
  researcher: string;
  votes: string;
  yay: string;
  nay: string;
  snapshot: string;
  deadline: string;
  queued: boolean;
  executed: boolean;
}

export declare enum ChatStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  ENDED = "ENDED",
}
export type Data = {
  contract?: string;
  amount?: number;
  decimals?: number;
  id?: string;
  role?: string;
  url?: string;
  comparison?: ">" | "<" | ">=" | "<=" | "==" | "!=" | "all" | "any";
};
export declare enum ConditionType {
  PUSH = "PUSH",
  GUILD = "GUILD",
}
export type ConditionBase = {
  type?: ConditionType;
  category?: string;
  subcategory?: string;
  data?: Data;
  access?: boolean;
};
export type Condition = ConditionBase & {
  any?: ConditionBase[];
  all?: ConditionBase[];
};
export interface Rules {
  entry?: {
    conditions: Array<Condition | ConditionBase> | (Condition | ConditionBase);
  };
  chat?: {
    conditions: Array<Condition | ConditionBase> | (Condition | ConditionBase);
  };
}
export interface GroupInfo {
  groupName: string;
  groupImage: string | null;
  groupDescription: string;
  isPublic: boolean;
  groupCreator: string;
  chatId: string;
  scheduleAt?: Date | null;
  scheduleEnd?: Date | null;
  groupType?: string;
  status?: ChatStatus | null;
  rules?: Rules | null;
  meta?: string | null;
  sessionKey: string | null;
  encryptedSecret: string | null;
}

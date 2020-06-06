import { registerEnumType } from "type-graphql";

export enum CommonStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
registerEnumType(CommonStatus, { name: "CommonStatus" });

export enum StatusType {
  DELETED = "DELETED",
  BLOCKED = "BLOCKED",
  ACTIVE = "ACTIVE",
  STOPPED = "STOPPED",
  INACTIVE = "INACTIVE",
}
registerEnumType(StatusType, { name: "StatusType" });

export enum WorkoutType {
  PUSH = "PUSH", //0
  PULL = "PULL", //1
  LEG = "LEG", //2
}
registerEnumType(WorkoutType, { name: "WorkoutType" });

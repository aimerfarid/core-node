import { Field, InterfaceType, InputType } from "type-graphql";
import { PrimaryColumn } from "typeorm";
import { AuditEntity } from "../audit/AuditEntity";

@InterfaceType()
export abstract class BaseEntity extends AuditEntity {
  @PrimaryColumn({
    default: () => "uuid_generate_v1mc()",
    type: "uuid",
    unique: true,
  })
  @Field()
  id: string;
}

@InputType()
export class BaseInput {
  @Field({ nullable: true }) id: string;
  @Field() createdBy: string;
}

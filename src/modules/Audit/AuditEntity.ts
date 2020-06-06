import { Field, InterfaceType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@InterfaceType()
export abstract class AuditEntity extends BaseEntity {
  @CreateDateColumn({ type: "timestamptz" })
  @Field({ nullable: true })
  createdTs: string;

  @Column("uuid", { nullable: true })
  @Field({ nullable: true })
  createdBy: string;

  @UpdateDateColumn({ type: "timestamptz" })
  @Field({ nullable: true })
  modTs: string;

  // UsrId
  @Column("uuid", { nullable: true })
  @Field({ nullable: true })
  modBy: string;
}

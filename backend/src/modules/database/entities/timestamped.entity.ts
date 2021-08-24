import { Entity } from "@mikro-orm/core";

@Entity({ abstract: true })
export abstract class Timestamped {}

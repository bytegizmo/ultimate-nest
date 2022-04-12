import { PrimaryKey, Property } from "@mikro-orm/core";
import { randomUUID } from "crypto";

export abstract class BaseEntity {
	@PrimaryKey({ hidden: true })
	id!: number;

	@Property()
	idx: string = randomUUID();

	@Property()
	isActive = true;

	@Property({ hidden: true })
	isObsolete = false; // deleted status, hidden true removed the property during deserialization

	@Property()
	deletedAt?: Date;

	@Property()
	createdAt = new Date();

	@Property({
		onUpdate: () => new Date(),
		hidden: true,
	})
	updatedAt? = new Date();
}

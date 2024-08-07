import { AbilityBuilder, Ability } from "@casl/ability";

export function defineAbilityFor(user) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role === "admin") {
    can("filter", "Owner");
    can("approve", "Owner");
    can("disable", "Owner");
    can("approve", "Book");
    can("read", "Book");
  } else if (user.role === "owner") {
    can("read", "Book", { userId: user.id });
    can("update", "Book", { userId: user.id });
    can("delete", "Book", { userId: user.id });
    can("Upload", "Book", { userId: user.id });
    can("read", "Rental", { userId: user.id });
    can("update", "Rental", { userId: user.id });
    can("delete", "Rental", { userId: user.id });
    can("create", "Rental");
  } else if (user.role === "customer") {
    can("read", "Book");
    can("read", "Rental", { userId: user.id });
    can("create", "Rental", { userId: user.id });
  }

  return build();
}

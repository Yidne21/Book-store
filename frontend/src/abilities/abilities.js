// src/abilities/abilities.js
import { AbilityBuilder, Ability } from "@casl/ability";

export function defineAbilitiesFor(role) {
  const { can, build } = new AbilityBuilder(Ability);

  if (role === "admin") {
    can("read", "dashboard");
    can("read", "books");
    can("read", "owners");
    can("read", "other");
  } else if (role === "owner") {
    can("read", "ownerDashboard");
    can("read", "bookUpload");
    can("read", "other");
  }
  can("read", "other");
  can("read", "notification");
  can("read", "settings");
  can("read", "loginAs");

  return build();
}

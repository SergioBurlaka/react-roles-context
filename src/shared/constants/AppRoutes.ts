import { Children } from "react";

export const AppRoutes = {
  admin: {
    path: "admin",
    label: "Admin",
  },
  manager: {
    path: "manager",
    label: "Manager",
  },
  superUser: {
    path: "super-user",
    label: "Super user",
  },
  user: {
    path: "user",
    label: "User",
    children: {
      create: {
        path: "create",
        label: "Create user",
      },
    },
  },
};

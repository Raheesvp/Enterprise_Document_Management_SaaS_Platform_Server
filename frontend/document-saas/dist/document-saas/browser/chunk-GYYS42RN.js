import "./chunk-J25FJFZE.js";

// src/app/features/auth/auth.routes.ts
var AUTH_ROUTES = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: () => import("./chunk-4LRUNAPX.js").then((m) => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-WT2AC4Q7.js").then((m) => m.RegisterComponent)
  }
];
export {
  AUTH_ROUTES
};
//# sourceMappingURL=chunk-GYYS42RN.js.map

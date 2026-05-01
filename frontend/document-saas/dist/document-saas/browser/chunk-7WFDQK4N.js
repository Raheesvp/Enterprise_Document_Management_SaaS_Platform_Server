import "./chunk-J25FJFZE.js";

// src/app/features/documents/documents.routes.ts
var DOCUMENT_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-SU34R5HX.js").then((m) => m.DocumentListComponent)
  },
  {
    path: "upload",
    loadComponent: () => import("./chunk-W3L4IAGP.js").then((m) => m.UploadComponent)
  },
  {
    path: ":id",
    loadComponent: () => import("./chunk-XASA6PDR.js").then((m) => m.DocumentDetailComponent)
  }
];
export {
  DOCUMENT_ROUTES
};
//# sourceMappingURL=chunk-7WFDQK4N.js.map

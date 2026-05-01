import {
  HttpClient,
  HttpParams,
  environment
} from "./chunk-C3SPZEV6.js";
import {
  inject,
  ɵɵdefineInjectable
} from "./chunk-VXIHXXTD.js";

// src/app/features/documents/models/document.models.ts
var DocumentStatusLabels = {
  Uploading: "Uploading",
  Processing: "Processing",
  Active: "Active",
  UnderReview: "Under Review",
  Approved: "Approved",
  Rejected: "Rejected",
  Archived: "Archived"
};
var DocumentStatusColors = {
  Uploading: "#94A3B8",
  Processing: "#EA580C",
  Active: "#2563EB",
  UnderReview: "#D97706",
  Approved: "#16A34A",
  Rejected: "#DC2626",
  Archived: "#7C3AED"
};

// src/app/features/documents/services/document.service.ts
var DocumentService = class _DocumentService {
  http = inject(HttpClient);
  base = `${environment.documentUrl}/api/documents`;
  getDocuments(filter) {
    let params = new HttpParams().set("page", filter.page.toString()).set("pageSize", filter.pageSize.toString());
    if (filter.status) {
      params = params.set("status", filter.status);
    }
    if (filter.search) {
      params = params.set("searchTerm", filter.search);
    }
    return this.http.get(this.base, { params });
  }
  getDocument(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  getVersions(documentId) {
    return this.http.get(`${this.base}/${documentId}/versions`);
  }
  archiveDocument(id) {
    return this.http.post(`${this.base}/${id}/archive`, {});
  }
  formatFileSize(bytes) {
    if (!bytes || bytes === 0)
      return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  }
  formatMimeType(mimeType) {
    if (!mimeType)
      return "File";
    const map = {
      "application/pdf": "PDF",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Word",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Excel",
      "image/jpeg": "JPEG",
      "image/png": "PNG",
      "text/plain": "Text"
    };
    return map[mimeType] ?? mimeType.split("/")[1]?.toUpperCase() ?? "File";
  }
  static \u0275fac = function DocumentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocumentService, factory: _DocumentService.\u0275fac, providedIn: "root" });
};

export {
  DocumentStatusLabels,
  DocumentStatusColors,
  DocumentService
};
//# sourceMappingURL=chunk-3CWBQWPG.js.map

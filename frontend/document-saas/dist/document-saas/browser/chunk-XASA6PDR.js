import {
  DocumentService,
  DocumentStatusColors,
  DocumentStatusLabels
} from "./chunk-3CWBQWPG.js";
import {
  MatChipsModule
} from "./chunk-NNFXHKZH.js";
import "./chunk-LCIMRHXP.js";
import "./chunk-XOAVHFRV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-RH5JV5TE.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-XMNIKMB2.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-IBRJDMN5.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-FGR4X3RN.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-TDSMDV2C.js";
import "./chunk-M2AXSFNT.js";
import "./chunk-C3SPZEV6.js";
import {
  CommonModule,
  DatePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VXIHXXTD.js";
import "./chunk-J25FJFZE.js";

// src/app/features/documents/document-detail/document-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DocumentDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 5);
    \u0275\u0275elementEnd();
  }
}
function DocumentDetailComponent_Conditional_6_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1, "No versions available");
    \u0275\u0275elementEnd();
  }
}
function DocumentDetailComponent_Conditional_6_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const version_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" v", version_r1.versionNumber, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 2, version_r1.createdAt, "dd MMM yyyy HH:mm"), " ");
  }
}
function DocumentDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-card", 6)(2, "mat-card-header")(3, "div", 7)(4, "div", 8)(5, "mat-icon");
    \u0275\u0275text(6, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(12, "mat-divider");
    \u0275\u0275elementStart(13, "mat-card-content")(14, "div", 10)(15, "div", 11)(16, "span", 12);
    \u0275\u0275text(17, "File Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 13);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 11)(21, "span", 12);
    \u0275\u0275text(22, "File Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 11)(26, "span", 12);
    \u0275\u0275text(27, "Uploaded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 13);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 11)(32, "span", 12);
    \u0275\u0275text(33, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 13);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "mat-card-actions")(38, "button", 14)(39, "mat-icon");
    \u0275\u0275text(40, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " View Workflow ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "mat-card", 15)(43, "mat-card-header")(44, "h3");
    \u0275\u0275text(45, "Version History");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(46, "mat-divider");
    \u0275\u0275elementStart(47, "mat-card-content");
    \u0275\u0275template(48, DocumentDetailComponent_Conditional_6_Conditional_48_Template, 2, 0, "p", 16);
    \u0275\u0275repeaterCreate(49, DocumentDetailComponent_Conditional_6_For_50_Template, 7, 5, "div", 17, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r1.getTypeColor(ctx_r1.document().mimeType));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.document().title);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getStatusColor(ctx_r1.document().status) + "20")("color", ctx_r1.getStatusColor(ctx_r1.document().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(ctx_r1.document().status), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.docService.formatMimeType(ctx_r1.document().mimeType), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.docService.formatFileSize(ctx_r1.document().fileSizeBytes), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 13, ctx_r1.document().createdAt, "dd MMM yyyy HH:mm"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 16, ctx_r1.document().updatedAt, "dd MMM yyyy HH:mm"), " ");
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r1.versions().length === 0 ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.versions());
  }
}
function DocumentDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Document not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275text(6, " Back to Documents ");
    \u0275\u0275elementEnd()();
  }
}
var DocumentDetailComponent = class _DocumentDetailComponent {
  docService = inject(DocumentService);
  route = inject(ActivatedRoute);
  document = signal(null);
  versions = signal([]);
  isLoading = signal(true);
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (!id) {
      this.isLoading.set(false);
      return;
    }
    this.docService.getDocument(id).subscribe({
      next: (doc) => {
        this.document.set(doc);
        this.isLoading.set(false);
        this.loadVersions(id);
      },
      error: () => {
        this.document.set(null);
        this.isLoading.set(false);
      }
    });
  }
  loadVersions(documentId) {
    this.docService.getVersions(documentId).subscribe({
      next: (versions) => this.versions.set(versions ?? []),
      error: () => this.versions.set([])
    });
  }
  getStatusColor(status) {
    return DocumentStatusColors[status] ?? "#64748B";
  }
  getStatusLabel(status) {
    return DocumentStatusLabels[status] ?? status;
  }
  getTypeColor(mimeType) {
    const colors = {
      "application/pdf": "#DC2626",
      "image/jpeg": "#2563EB",
      "image/png": "#2563EB",
      "text/plain": "#64748B"
    };
    return colors[mimeType] ?? "#7C3AED";
  }
  static \u0275fac = function DocumentDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentDetailComponent, selectors: [["app-document-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 3, consts: [[1, "page-container"], ["mat-button", "", "routerLink", "/documents", 1, "back-btn"], [1, "loading-container"], [1, "detail-layout"], [1, "not-found"], ["diameter", "40"], [1, "main-card"], [1, "doc-header"], [1, "doc-icon"], [1, "status-chip"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/workflow"], [1, "versions-card"], [1, "no-versions"], [1, "version-item"], [1, "version-badge"], [1, "version-info"], [1, "version-date"], ["mat-raised-button", "", "color", "primary", "routerLink", "/documents"]], template: function DocumentDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1)(2, "mat-icon");
      \u0275\u0275text(3, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Back to Documents ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, DocumentDetailComponent_Conditional_5_Template, 2, 0, "div", 2)(6, DocumentDetailComponent_Conditional_6_Template, 51, 19, "div", 3)(7, DocumentDetailComponent_Conditional_7_Template, 7, 0, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.isLoading() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.document() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && !ctx.document() ? 7 : -1);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
    RouterLink,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatDividerModule,
    MatDivider,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatChipsModule
  ], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #64748B;\n  margin-bottom: 16px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 20px;\n}\n.main-card[_ngcontent-%COMP%], \n.versions-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.doc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 8px 0;\n  width: 100%;\n}\n.doc-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  min-width: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.doc-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.doc-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1E293B;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  padding: 16px 0;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #94A3B8;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1E293B;\n  font-weight: 500;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  padding: 8px 16px 16px;\n}\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.versions-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1E293B;\n  margin: 0;\n  padding: 16px;\n}\n.no-versions[_ngcontent-%COMP%] {\n  color: #94A3B8;\n  font-size: 14px;\n  padding: 16px 0;\n  text-align: center;\n}\n.version-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 0;\n  border-bottom: 1px solid #F1F5F9;\n}\n.version-badge[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n  padding: 4px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  min-width: 32px;\n  text-align: center;\n}\n.version-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n}\n.not-found[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px;\n  text-align: center;\n  color: #64748B;\n}\n.not-found[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n@media (max-width: 768px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=document-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentDetailComponent, { className: "DocumentDetailComponent", filePath: "src\\app\\features\\documents\\document-detail\\document-detail.component.ts", lineNumber: 291 });
})();
export {
  DocumentDetailComponent
};
//# sourceMappingURL=chunk-XASA6PDR.js.map

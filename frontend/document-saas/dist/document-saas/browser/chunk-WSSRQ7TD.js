import {
  MatChipsModule
} from "./chunk-NNFXHKZH.js";
import {
  WorkflowStatusColors
} from "./chunk-BSQULKVK.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-57TGYMVY.js";
import "./chunk-LCIMRHXP.js";
import "./chunk-RY4ZUQK5.js";
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
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-FGR4X3RN.js";
import {
  AuthService
} from "./chunk-SIY4PZKL.js";
import {
  RouterLink
} from "./chunk-TDSMDV2C.js";
import "./chunk-M2AXSFNT.js";
import {
  HttpClient,
  environment
} from "./chunk-C3SPZEV6.js";
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-VXIHXXTD.js";
import "./chunk-J25FJFZE.js";

// src/app/features/workflow/workflow-list/workflow-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/workflow", a0];
function WorkflowListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function WorkflowListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-icon", 7);
    \u0275\u0275text(2, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No workflows found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Upload a document to start an approval workflow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8)(8, "mat-icon");
    \u0275\u0275text(9, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Upload Document ");
    \u0275\u0275elementEnd()();
  }
}
function WorkflowListComponent_For_11_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
  if (rf & 2) {
    const stage_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r1.getStageColor(stage_r1.status));
    \u0275\u0275property("matTooltip", stage_r1.stageName + ": " + stage_r1.status);
  }
}
function WorkflowListComponent_For_11_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 18)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Review ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const wf_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, wf_r3.id));
  }
}
function WorkflowListComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 5)(1, "mat-card-header")(2, "div", 9)(3, "div", 10)(4, "mat-icon");
    \u0275\u0275text(5, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "mat-card-content")(12, "div", 13);
    \u0275\u0275repeaterCreate(13, WorkflowListComponent_For_11_For_14_Template, 1, 3, "div", 14, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 16);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-card-actions")(21, "button", 17)(22, "mat-icon");
    \u0275\u0275text(23, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, WorkflowListComponent_For_11_Conditional_25_Template, 4, 3, "button", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wf_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, wf_r3.id));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(wf_r3.documentTitle);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getStatusColor(wf_r3.status) + "20")("color", ctx_r1.getStatusColor(wf_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", wf_r3.status, " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(wf_r3.stages);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" Stage ", wf_r3.currentStageOrder, " of ", wf_r3.stages.length, " \uFFFD ", ctx_r1.getCurrentStageName(wf_r3), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Started: ", \u0275\u0275pipeBind2(19, 13, wf_r3.startedAt, "dd MMM yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, wf_r3.id));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.canApprove(wf_r3) ? 25 : -1);
  }
}
var WorkflowListComponent = class _WorkflowListComponent {
  http = inject(HttpClient);
  authService = inject(AuthService);
  workflows = signal([]);
  isLoading = signal(true);
  ngOnInit() {
    this.loadWorkflows();
  }
  loadWorkflows() {
    this.http.get(`${environment.workflowUrl}/api/workflow/my`).subscribe({
      next: (res) => {
        this.workflows.set(Array.isArray(res) ? res : res.items ?? []);
        this.isLoading.set(false);
      },
      error: () => {
        this.workflows.set([]);
        this.isLoading.set(false);
      }
    });
  }
  getStatusColor(status) {
    return WorkflowStatusColors[status] ?? "#64748B";
  }
  getStageColor(status) {
    const colors = {
      Pending: "#E2E8F0",
      InProgress: "#EA580C",
      Approved: "#16A34A",
      Rejected: "#DC2626",
      Escalated: "#7C3AED"
    };
    return colors[status] ?? "#E2E8F0";
  }
  getCurrentStageName(wf) {
    const stage = wf.stages.find((s) => s.stageOrder === wf.currentStageOrder);
    return stage?.stageName ?? "Complete";
  }
  canApprove(wf) {
    if (wf.status !== "InProgress")
      return false;
    const userId = this.authService.getUserId();
    const stage = wf.stages.find((s) => s.stageOrder === wf.currentStageOrder);
    return stage?.assignedToUserId === userId;
  }
  static \u0275fac = function WorkflowListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkflowListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkflowListComponent, selectors: [["app-workflow-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "loading-container"], [1, "empty-state"], [1, "workflow-grid"], [1, "workflow-card", 3, "routerLink"], ["diameter", "40"], [1, "empty-icon"], ["mat-raised-button", "", "color", "primary", "routerLink", "/documents/upload"], [1, "wf-header"], [1, "wf-icon"], [1, "wf-title-section"], [1, "status-chip"], [1, "stage-progress"], [1, "stage-dot", 3, "background", "matTooltip"], [1, "stage-info"], [1, "date-info"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], [1, "stage-dot", 3, "matTooltip"]], template: function WorkflowListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Workflows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Approval chains for your documents");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(7, WorkflowListComponent_Conditional_7_Template, 2, 0, "div", 2)(8, WorkflowListComponent_Conditional_8_Template, 11, 0, "div", 3);
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275repeaterCreate(10, WorkflowListComponent_For_11_Template, 26, 20, "mat-card", 5, _forTrack0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isLoading() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.workflows().length === 0 ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.workflows());
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
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatChipsModule,
    MatTooltipModule,
    MatTooltip
  ], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n  font-size: 14px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  gap: 12px;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #CBD5E1;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #1E293B;\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.workflow-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n}\n.workflow-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.workflow-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.wf-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 8px 0;\n}\n.wf-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  border-radius: 10px;\n  background: #EFF6FF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.wf-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563EB;\n}\n.wf-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  overflow: hidden;\n}\n.wf-title-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.stage-progress[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.stage-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.stage-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  margin: 0 0 4px;\n}\n.date-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n  margin: 0;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 8px 16px 16px;\n}\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n/*# sourceMappingURL=workflow-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkflowListComponent, { className: "WorkflowListComponent", filePath: "src\\app\\features\\workflow\\workflow-list\\workflow-list.component.ts", lineNumber: 268 });
})();
export {
  WorkflowListComponent
};
//# sourceMappingURL=chunk-WSSRQ7TD.js.map

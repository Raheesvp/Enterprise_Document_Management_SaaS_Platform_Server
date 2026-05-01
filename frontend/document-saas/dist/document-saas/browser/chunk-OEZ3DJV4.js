import {
  MatProgressSpinnerModule
} from "./chunk-RH5JV5TE.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule
} from "./chunk-XMNIKMB2.js";
import {
  MatDividerModule
} from "./chunk-IBRJDMN5.js";
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
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VXIHXXTD.js";
import "./chunk-J25FJFZE.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function DashboardComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 6)(1, "div", 9)(2, "div", 10)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-card-content")(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-card-actions")(13, "button", 12);
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", card_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", card_r1.color + "15");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", card_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r1.icon, " ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", card_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", card_r1.value, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", card_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Go to ", card_r1.title, " ");
  }
}
function DashboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h2");
    \u0275\u0275text(2, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "button", 14)(5, "mat-icon");
    \u0275\u0275text(6, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Upload Document ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 15)(9, "mat-icon");
    \u0275\u0275text(10, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " View Approvals ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 16)(13, "mat-icon");
    \u0275\u0275text(14, "notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Notifications ");
    \u0275\u0275elementEnd()()();
  }
}
function DashboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, " You have read-only access. Contact your admin to request additional permissions. ");
    \u0275\u0275elementEnd()();
  }
}
var DashboardComponent = class _DashboardComponent {
  authService = inject(AuthService);
  http = inject(HttpClient);
  docCount = signal(0);
  workflowCount = signal(0);
  unreadCount = signal(0);
  ngOnInit() {
    this.loadCounts();
  }
  loadCounts() {
    this.http.get(`${environment.documentUrl}/api/documents?page=1&pageSize=1`).subscribe({
      next: (res) => this.docCount.set(res.totalCount ?? 0),
      error: () => this.docCount.set(0)
    });
    this.http.get(`${environment.workflowUrl}/api/workflow/my`).subscribe({
      next: (res) => {
        const list = Array.isArray(res) ? res : [];
        this.workflowCount.set(list.length);
      },
      error: () => this.workflowCount.set(0)
    });
    this.http.get(`${environment.notificationUrl}/api/notifications/unread-count`).subscribe({
      next: (res) => this.unreadCount.set(res.unreadCount ?? 0),
      error: () => this.unreadCount.set(0)
    });
  }
  getVisibleCards() {
    const role = this.authService.currentUser()?.role ?? "";
    return this.allCards.filter((c) => c.roles.includes(role));
  }
  allCards = [
    {
      title: "Documents",
      value: this.docCount(),
      subtitle: "Total documents in your workspace",
      icon: "description",
      color: "#2563EB",
      route: "/documents",
      roles: ["Admin", "Manager", "Viewer"]
    },
    {
      title: "Workflows",
      value: this.workflowCount(),
      subtitle: "Active approval chains",
      icon: "account_tree",
      color: "#7C3AED",
      route: "/workflow",
      roles: ["Admin", "Manager"]
    },
    {
      title: "Unread",
      value: this.unreadCount(),
      subtitle: "Notifications awaiting your attention",
      icon: "notifications",
      color: "#EA580C",
      route: "/notifications",
      roles: ["Admin", "Manager", "Viewer"]
    },
    {
      title: "Upload",
      value: "+",
      subtitle: "Add new documents to workspace",
      icon: "upload_file",
      color: "#16A34A",
      route: "/documents/upload",
      roles: ["Admin", "Manager"]
    }
  ];
  getTimeOfDay() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      return "morning";
    if (hour < 17)
      return "afternoon";
    return "evening";
  }
  getTenantDomain() {
    const email = this.authService.currentUser()?.email ?? "";
    const parts = email.split("@");
    return parts.length > 1 ? parts[1] : "";
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 8, consts: [[1, "dashboard"], [1, "page-header"], [1, "header-badges"], [1, "tenant-badge"], [1, "role-badge"], [1, "stats-grid"], [1, "stat-card", 3, "routerLink"], [1, "quick-actions"], [1, "viewer-info"], [1, "stat-top"], [1, "stat-icon-wrap"], [1, "stat-value"], ["mat-button", ""], [1, "action-grid"], ["mat-raised-button", "", "color", "primary", "routerLink", "/documents/upload"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/workflow"], ["mat-stroked-button", "", "routerLink", "/notifications"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Here is your workspace overview");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 2)(8, "span", 3)(9, "mat-icon");
      \u0275\u0275text(10, "business");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 4);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 5);
      \u0275\u0275repeaterCreate(15, DashboardComponent_For_16_Template, 17, 14, "mat-card", 6, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, DashboardComponent_Conditional_17_Template, 16, 0, "div", 7)(18, DashboardComponent_Conditional_18_Template, 5, 0, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_2_0;
      let tmp_3_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" Good ", ctx.getTimeOfDay(), ", ", (tmp_0_0 = ctx.authService.currentUser()) == null ? null : tmp_0_0.fullName, " ?? ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.getTenantDomain(), " ");
      \u0275\u0275advance();
      \u0275\u0275classMap("role-" + ((tmp_2_0 = ctx.authService.currentUser()) == null ? null : tmp_2_0.role == null ? null : tmp_2_0.role.toLowerCase()));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", (tmp_3_0 = ctx.authService.currentUser()) == null ? null : tmp_3_0.role, " ");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.getVisibleCards());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.authService.isManager() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.authService.isManager() ? 18 : -1);
    }
  }, dependencies: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatIconModule,
    MatIcon,
    MatButtonModule,
    MatButton,
    MatDividerModule,
    MatProgressSpinnerModule
  ], styles: ["\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n  font-size: 14px;\n}\n.header-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.tenant-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: #EFF6FF;\n  color: #2563EB;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.tenant-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.role-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.role-admin[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #D97706;\n}\n.role-manager[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.role-viewer[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  color: #64748B;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n.stat-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 16px 0;\n}\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n}\nmat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1E293B;\n  margin: 12px 0 4px;\n}\nmat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748B;\n  margin: 0;\n}\nmat-card-actions[_ngcontent-%COMP%] {\n  padding: 8px;\n}\nmat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.quick-actions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1E293B;\n  margin: 0 0 16px;\n}\n.action-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.action-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.viewer-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #F1F5F9;\n  border-radius: 10px;\n  padding: 16px;\n  color: #64748B;\n}\n.viewer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 272 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-OEZ3DJV4.js.map

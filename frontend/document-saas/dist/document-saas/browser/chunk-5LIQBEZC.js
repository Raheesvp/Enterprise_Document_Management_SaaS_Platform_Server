import {
  MatChipsModule
} from "./chunk-NNFXHKZH.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-57TGYMVY.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-ZJFEIJFC.js";
import "./chunk-LCIMRHXP.js";
import {
  NotificationService
} from "./chunk-Z77P57F4.js";
import "./chunk-RY4ZUQK5.js";
import "./chunk-XOAVHFRV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-RH5JV5TE.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-XMNIKMB2.js";
import {
  MatDividerModule
} from "./chunk-IBRJDMN5.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-FGR4X3RN.js";
import {
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-VXIHXXTD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J25FJFZE.js";

// src/app/features/notifications/models/notification.models.ts
var NotificationIcons = {
  WorkflowStarted: "account_tree",
  StageAssigned: "assignment_ind",
  StageApproved: "check_circle",
  StageRejected: "cancel",
  WorkflowCompleted: "task_alt",
  WorkflowEscalated: "warning",
  DocumentUploaded: "upload_file",
  DocumentParsed: "document_scanner"
};
var NotificationColors = {
  WorkflowStarted: "#2563EB",
  StageAssigned: "#EA580C",
  StageApproved: "#16A34A",
  StageRejected: "#DC2626",
  WorkflowCompleted: "#16A34A",
  WorkflowEscalated: "#DC2626",
  DocumentUploaded: "#7C3AED",
  DocumentParsed: "#0D9488"
};

// src/app/features/notifications/notifications.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/workflow", a0];
function NotificationsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markAllRead());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mark All Read ");
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-icon", 8);
    \u0275\u0275text(2, "notifications_none");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No notifications yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You will be notified when workflow actions are needed");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_Conditional_10_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
}
function NotificationsComponent_Conditional_10_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_10_For_2_Conditional_16_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const notif_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.markAsRead(notif_r4));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_Conditional_10_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_10_For_2_Conditional_17_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notif_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, notif_r4.referenceId));
  }
}
function NotificationsComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 10);
    \u0275\u0275listener("click", function NotificationsComponent_Conditional_10_For_2_Template_mat_card_click_0_listener() {
      const notif_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onNotificationClick(notif_r4));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14)(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, NotificationsComponent_Conditional_10_For_2_Conditional_9_Template, 1, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 18);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275template(16, NotificationsComponent_Conditional_10_For_2_Conditional_16_Template, 3, 0, "button", 20)(17, NotificationsComponent_Conditional_10_For_2_Conditional_17_Template, 3, 3, "button", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notif_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", notif_r4.status === "Unread");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getColor(notif_r4.type) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getColor(notif_r4.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getIcon(notif_r4.type), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", notif_r4.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(notif_r4.status === "Unread" ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r4.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 13, notif_r4.createdAt, "dd MMM yyyy HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(notif_r4.status === "Unread" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(notif_r4.referenceId && notif_r4.referenceType === "WorkflowInstance" ? 17 : -1);
  }
}
function NotificationsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, NotificationsComponent_Conditional_10_For_2_Template, 18, 16, "mat-card", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.notifications());
  }
}
var NotificationsComponent = class _NotificationsComponent {
  notifService = inject(NotificationService);
  snackBar = inject(MatSnackBar);
  notifications = signal([]);
  isLoading = signal(true);
  unreadCount = signal(0);
  ngOnInit() {
    this.loadNotifications();
  }
  loadNotifications() {
    this.notifService.getNotifications().subscribe({
      next: (items) => {
        const list = Array.isArray(items) ? items : [];
        this.notifications.set(list);
        this.unreadCount.set(list.filter((n) => n.status === "Unread").length);
        this.isLoading.set(false);
      },
      error: () => {
        this.notifications.set([]);
        this.isLoading.set(false);
      }
    });
  }
  markAsRead(notif) {
    this.notifService.markAsRead(notif.id).subscribe({
      next: () => {
        this.notifications.update((items) => items.map((n) => n.id === notif.id ? __spreadProps(__spreadValues({}, n), { status: "Read" }) : n));
        this.unreadCount.update((c) => Math.max(0, c - 1));
      },
      error: () => {
        this.snackBar.open("Failed to mark as read", "Close", { duration: 2e3 });
      }
    });
  }
  markAllRead() {
    const unread = this.notifications().filter((n) => n.status === "Unread");
    unread.forEach((n) => {
      this.notifService.markAsRead(n.id).subscribe();
    });
    this.notifications.update((items) => items.map((n) => __spreadProps(__spreadValues({}, n), { status: "Read" })));
    this.unreadCount.set(0);
    this.snackBar.open("All notifications marked as read", "Close", { duration: 2e3 });
  }
  onNotificationClick(notif) {
    if (notif.status === "Unread") {
      this.markAsRead(notif);
    }
  }
  getIcon(type) {
    return NotificationIcons[type] ?? "notifications";
  }
  getColor(type) {
    return NotificationColors[type] ?? "#64748B";
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 6, consts: [[1, "page-container"], [1, "page-header"], ["mat-stroked-button", ""], [1, "loading-container"], [1, "empty-state"], [1, "notifications-list"], ["mat-stroked-button", "", 3, "click"], ["diameter", "40"], [1, "empty-icon"], [1, "notif-card", 3, "unread"], [1, "notif-card", 3, "click"], [1, "notif-row"], [1, "notif-icon"], [1, "notif-content"], [1, "notif-header"], [1, "notif-title"], [1, "unread-dot"], [1, "notif-message"], [1, "notif-time"], [1, "notif-actions"], ["mat-icon-button", "", "matTooltip", "Mark as read"], ["mat-icon-button", "", "color", "primary", "matTooltip", "View workflow", 3, "routerLink"], ["mat-icon-button", "", "matTooltip", "Mark as read", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "View workflow", 3, "click", "routerLink"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, NotificationsComponent_Conditional_7_Template, 4, 0, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, NotificationsComponent_Conditional_8_Template, 2, 0, "div", 3)(9, NotificationsComponent_Conditional_9_Template, 7, 0, "div", 4)(10, NotificationsComponent_Conditional_10_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2(" ", ctx.unreadCount(), " unread of ", ctx.notifications().length, " total ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.unreadCount() > 0 ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.notifications().length === 0 ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.notifications().length > 0 ? 10 : -1);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
    RouterLink,
    MatCardModule,
    MatCard,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatChipsModule,
    MatTooltipModule,
    MatTooltip,
    MatSnackBarModule
  ], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n  font-size: 14px;\n}\n.page-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  gap: 12px;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #CBD5E1;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #1E293B;\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n}\n.notifications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.notif-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.15s;\n  border-left: 3px solid transparent;\n}\n.notif-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transform: translateX(2px);\n}\n.notif-card.unread[_ngcontent-%COMP%] {\n  border-left-color: #2563EB;\n  background: #FAFBFF;\n}\n.notif-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n}\n.notif-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.notif-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n}\n.notif-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1E293B;\n}\n.unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  min-width: 8px;\n  border-radius: 50%;\n  background: #2563EB;\n}\n.notif-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #475569;\n  margin: 0 0 4px;\n  line-height: 1.4;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94A3B8;\n}\n.notif-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=notifications.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src\\app\\features\\notifications\\notifications.component.ts", lineNumber: 277 });
})();
export {
  NotificationsComponent
};
//# sourceMappingURL=chunk-5LIQBEZC.js.map

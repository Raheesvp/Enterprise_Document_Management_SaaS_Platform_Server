import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatSelect,
  MatSelectModule,
  MatTable,
  MatTableModule
} from "./chunk-2CILMBPC.js";
import {
  MatTooltipModule
} from "./chunk-57TGYMVY.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-BEKE2SOR.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-ZJFEIJFC.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-LCIMRHXP.js";
import "./chunk-RY4ZUQK5.js";
import "./chunk-XOAVHFRV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-RH5JV5TE.js";
import {
  MatCard,
  MatCardContent,
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
  MatIconModule,
  MatOption
} from "./chunk-FGR4X3RN.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-VXIHXXTD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J25FJFZE.js";

// src/app/features/users/user-management.component.ts
function UserManagementComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function UserManagementComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-spinner", 18);
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No users yet. Add your first team member above.");
    \u0275\u0275elementEnd()();
  }
}
function UserManagementComponent_Conditional_54_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Member");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_54_td_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Blocked");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_54_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "div", 29)(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275template(7, UserManagementComponent_Conditional_54_td_3_Conditional_7_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("blocked", !user_r2.isActive);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", !user_r2.isActive ? "#94A3B8" : "#2563EB");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getInitials(user_r2.fullName), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r2.fullName, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!user_r2.isActive ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r2.email, " ");
  }
}
function UserManagementComponent_Conditional_54_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Role");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_54_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("role-" + user_r3.role.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.role, " ");
  }
}
function UserManagementComponent_Conditional_54_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_54_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(user_r4.isActive ? "active" : "inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.isActive ? "Active" : "Blocked", " ");
  }
}
function UserManagementComponent_Conditional_54_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_54_td_12_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_54_td_12_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.blockUser(user_r6));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Block ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r0.isBlocking());
  }
}
function UserManagementComponent_Conditional_54_td_12_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function UserManagementComponent_Conditional_54_td_12_Conditional_1_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r6 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.unblockUser(user_r6));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Unblock ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r0.isBlocking());
  }
}
function UserManagementComponent_Conditional_54_td_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, UserManagementComponent_Conditional_54_td_12_Conditional_1_Conditional_0_Template, 4, 1, "button", 37)(1, UserManagementComponent_Conditional_54_td_12_Conditional_1_Conditional_1_Template, 4, 1, "button", 38);
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(user_r6.isActive ? 0 : 1);
  }
}
function UserManagementComponent_Conditional_54_td_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Owner");
    \u0275\u0275elementEnd();
  }
}
function UserManagementComponent_Conditional_54_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275template(1, UserManagementComponent_Conditional_54_td_12_Conditional_1_Template, 2, 1)(2, UserManagementComponent_Conditional_54_td_12_Conditional_2_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(user_r6.role !== "Admin" ? 1 : 2);
  }
}
function UserManagementComponent_Conditional_54_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 41);
  }
}
function UserManagementComponent_Conditional_54_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 42);
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275classProp("blocked-row", !row_r8.isActive);
  }
}
function UserManagementComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 17);
    \u0275\u0275elementContainerStart(1, 19);
    \u0275\u0275template(2, UserManagementComponent_Conditional_54_th_2_Template, 2, 0, "th", 20)(3, UserManagementComponent_Conditional_54_td_3_Template, 10, 8, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 22);
    \u0275\u0275template(5, UserManagementComponent_Conditional_54_th_5_Template, 2, 0, "th", 20)(6, UserManagementComponent_Conditional_54_td_6_Template, 3, 3, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 23);
    \u0275\u0275template(8, UserManagementComponent_Conditional_54_th_8_Template, 2, 0, "th", 20)(9, UserManagementComponent_Conditional_54_td_9_Template, 3, 3, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 24);
    \u0275\u0275template(11, UserManagementComponent_Conditional_54_th_11_Template, 2, 0, "th", 20)(12, UserManagementComponent_Conditional_54_td_12_Template, 3, 1, "td", 21);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(13, UserManagementComponent_Conditional_54_tr_13_Template, 1, 0, "tr", 25)(14, UserManagementComponent_Conditional_54_tr_14_Template, 1, 2, "tr", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r0.users());
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.cols);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.cols);
  }
}
var UserManagementComponent = class _UserManagementComponent {
  http = inject(HttpClient);
  fb = inject(FormBuilder);
  snackBar = inject(MatSnackBar);
  users = signal([]);
  isLoading = signal(false);
  isAdding = signal(false);
  isBlocking = signal(false);
  errorMessage = signal("");
  cols = ["name", "role", "status", "actions"];
  addUserForm;
  constructor() {
    this.addUserForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      role: ["Viewer", Validators.required]
    });
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.isLoading.set(true);
    this.http.get(`${environment.identityUrl}/api/identity/users`).subscribe({
      next: (users) => {
        this.users.set(Array.isArray(users) ? users : []);
        this.isLoading.set(false);
      },
      error: () => {
        this.users.set([]);
        this.isLoading.set(false);
      }
    });
  }
  onAddUser() {
    if (this.addUserForm.invalid)
      return;
    this.isAdding.set(true);
    this.errorMessage.set("");
    this.http.post(`${environment.identityUrl}/api/identity/users`, this.addUserForm.value).subscribe({
      next: (newUser) => {
        this.users.update((u) => [...u, {
          userId: newUser.userId,
          email: this.addUserForm.value.email,
          fullName: this.addUserForm.value.fullName,
          role: newUser.role,
          isActive: true
        }]);
        this.addUserForm.reset({ role: "Viewer" });
        this.isAdding.set(false);
        this.snackBar.open("User added successfully", "Close", { duration: 3e3 });
      },
      error: (err) => {
        this.isAdding.set(false);
        this.errorMessage.set(err.error?.error ?? "Failed to add user");
      }
    });
  }
  blockUser(user) {
    this.isBlocking.set(true);
    this.http.put(`${environment.identityUrl}/api/identity/users/${user.userId}/block`, {}).subscribe({
      next: () => {
        this.users.update((users) => users.map((u) => u.userId === user.userId ? __spreadProps(__spreadValues({}, u), { isActive: false }) : u));
        this.isBlocking.set(false);
        this.snackBar.open(`${user.fullName} has been blocked`, "Close", { duration: 3e3 });
      },
      error: (err) => {
        this.isBlocking.set(false);
        this.snackBar.open(err.error?.error ?? "Failed to block user", "Close", { duration: 3e3 });
      }
    });
  }
  unblockUser(user) {
    this.isBlocking.set(true);
    this.http.put(`${environment.identityUrl}/api/identity/users/${user.userId}/unblock`, {}).subscribe({
      next: () => {
        this.users.update((users) => users.map((u) => u.userId === user.userId ? __spreadProps(__spreadValues({}, u), { isActive: true }) : u));
        this.isBlocking.set(false);
        this.snackBar.open(`${user.fullName} has been unblocked`, "Close", { duration: 3e3 });
      },
      error: (err) => {
        this.isBlocking.set(false);
        this.snackBar.open(err.error?.error ?? "Failed to unblock user", "Close", { duration: 3e3 });
      }
    });
  }
  getInitials(name) {
    return (name ?? "").split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  }
  static \u0275fac = function UserManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserManagementComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserManagementComponent, selectors: [["app-user-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "form-card"], [1, "user-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "fullName", "placeholder", "John Smith"], ["matSuffix", ""], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "john@company.com"], ["matInput", "", "type", "password", "formControlName", "password"], ["formControlName", "role"], ["value", "Manager"], ["value", "Viewer"], [1, "error-banner"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "users-card"], [1, "loading"], [1, "empty"], ["mat-table", "", 1, "users-table", 3, "dataSource"], ["diameter", "32"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "role"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "blocked-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "user-cell"], [1, "user-avatar"], [1, "user-name"], [1, "blocked-label"], [1, "user-email"], [1, "role-badge"], [1, "status-badge"], [1, "admin-note"], ["mat-stroked-button", "", "color", "warn", 3, "disabled"], ["mat-stroked-button", "", "color", "primary", 3, "disabled"], ["mat-stroked-button", "", "color", "warn", 3, "click", "disabled"], ["mat-stroked-button", "", "color", "primary", 3, "click", "disabled"], ["mat-header-row", ""], ["mat-row", ""]], template: function UserManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "User Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Add and manage users in your organization");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-card", 2)(7, "h2");
      \u0275\u0275text(8, "Add New User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Invite a Manager or Viewer to your organization");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "mat-divider");
      \u0275\u0275elementStart(12, "mat-card-content")(13, "form", 3);
      \u0275\u0275listener("ngSubmit", function UserManagementComponent_Template_form_ngSubmit_13_listener() {
        return ctx.onAddUser();
      });
      \u0275\u0275elementStart(14, "mat-form-field", 4)(15, "mat-label");
      \u0275\u0275text(16, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 5);
      \u0275\u0275elementStart(18, "mat-icon", 6);
      \u0275\u0275text(19, "person");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "mat-form-field", 4)(21, "mat-label");
      \u0275\u0275text(22, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 7);
      \u0275\u0275elementStart(24, "mat-icon", 6);
      \u0275\u0275text(25, "email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "mat-form-field", 4)(27, "mat-label");
      \u0275\u0275text(28, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 8);
      \u0275\u0275elementStart(30, "mat-icon", 6);
      \u0275\u0275text(31, "lock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "mat-form-field", 4)(33, "mat-label");
      \u0275\u0275text(34, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "mat-select", 9)(36, "mat-option", 10);
      \u0275\u0275text(37, " Manager - Upload, approve, reject ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-option", 11);
      \u0275\u0275text(39, " Viewer - Read only ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "mat-icon", 6);
      \u0275\u0275text(41, "admin_panel_settings");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(42, UserManagementComponent_Conditional_42_Template, 4, 1, "div", 12);
      \u0275\u0275elementStart(43, "button", 13)(44, "mat-icon");
      \u0275\u0275text(45, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "mat-card", 14)(48, "h2");
      \u0275\u0275text(49);
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "mat-divider");
      \u0275\u0275elementStart(51, "mat-card-content");
      \u0275\u0275template(52, UserManagementComponent_Conditional_52_Template, 2, 0, "div", 15)(53, UserManagementComponent_Conditional_53_Template, 5, 0, "div", 16)(54, UserManagementComponent_Conditional_54_Template, 15, 3, "table", 17);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("formGroup", ctx.addUserForm);
      \u0275\u0275advance(29);
      \u0275\u0275conditional(ctx.errorMessage() ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isAdding() || ctx.addUserForm.invalid);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isAdding() ? "Adding..." : "Add User", " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Team Members (", ctx.users().length, ")");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isLoading() ? 52 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.users().length === 0 ? 53 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.users().length > 0 ? 54 : -1);
    }
  }, dependencies: [
    CommonModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatTableModule,
    MatTable,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatDividerModule,
    MatDivider,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatTooltipModule
  ], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n  font-size: 14px;\n}\n.form-card[_ngcontent-%COMP%], \n.users-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n.form-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.users-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1E293B;\n  margin: 0;\n  padding: 16px 16px 4px;\n}\n.form-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n  margin: 0;\n  padding: 0 16px 16px;\n}\n.user-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  padding: 16px 0;\n}\n.user-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.user-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: fit-content;\n}\n.error-banner[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #FEF2F2;\n  color: #DC2626;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n}\n.loading[_ngcontent-%COMP%], \n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px;\n  gap: 8px;\n  color: #64748B;\n}\n.empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #CBD5E1;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 0;\n}\n.user-cell.blocked[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  border-radius: 50%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n.user-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  color: #1E293B;\n}\n.user-email[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #94A3B8;\n}\n.blocked-label[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 4px;\n  margin-left: 6px;\n  text-transform: uppercase;\n}\n.role-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.role-admin[_ngcontent-%COMP%] {\n  background: #FEF3C7;\n  color: #D97706;\n}\n.role-manager[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.role-viewer[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  color: #64748B;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.active[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.inactive[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.blocked-row[_ngcontent-%COMP%] {\n  background: #FAFAFA;\n}\ntd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n}\n.admin-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n  font-style: italic;\n}\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748B;\n  text-transform: uppercase;\n}\n@media (max-width: 600px) {\n  .user-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=user-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserManagementComponent, { className: "UserManagementComponent", filePath: "src\\app\\features\\users\\user-management.component.ts", lineNumber: 266 });
})();
export {
  UserManagementComponent
};
//# sourceMappingURL=chunk-X2THRH73.js.map

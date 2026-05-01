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
  MatError,
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
  MatCardModule
} from "./chunk-XMNIKMB2.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-FGR4X3RN.js";
import {
  AuthService
} from "./chunk-SIY4PZKL.js";
import {
  Router,
  RouterLink
} from "./chunk-TDSMDV2C.js";
import "./chunk-M2AXSFNT.js";
import "./chunk-C3SPZEV6.js";
import {
  CommonModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-VXIHXXTD.js";
import "./chunk-J25FJFZE.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Invalid email format");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Subdomain is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon");
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
function LoginComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 22);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Signing in...");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  fb;
  authService;
  router;
  snackBar;
  loginForm;
  isLoading = signal(false);
  hidePassword = signal(true);
  errorMessage = signal("");
  constructor(fb, authService, router, snackBar) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.snackBar = snackBar;
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      subdomain: ["", [Validators.required]]
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/dashboard"]);
    }
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set("");
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.snackBar.open("Welcome back!", "Close", {
          duration: 3e3,
          horizontalPosition: "end",
          verticalPosition: "top"
        });
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.isLoading.set(false);
        if (err.status === 401) {
          this.errorMessage.set("Invalid email, password or subdomain");
        } else if (err.status === 400) {
          this.errorMessage.set("Please check your credentials and try again");
        } else if (err.status === 0) {
          this.errorMessage.set("Cannot connect to server. Please try again.");
        } else {
          this.errorMessage.set("Login failed. Please try again.");
        }
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 10, consts: [[1, "login-container"], [1, "left-panel"], [1, "image-overlay"], [1, "content-wrapper"], [1, "brand-content"], [1, "logo-wrapper"], [1, "logo-icon"], [1, "brand-name"], [1, "right-panel"], [1, "form-container"], [1, "form-header"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "admin@company.com"], ["matSuffix", ""], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "subdomain", "placeholder", "your-company"], [1, "error-banner"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "full-width", "submit-btn", 3, "disabled"], [1, "register-link"], ["routerLink", "/auth/register"], ["diameter", "20"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "mat-icon", 6);
      \u0275\u0275text(7, "description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9, "Document SaaS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "h1");
      \u0275\u0275text(11, "Transform Your Document Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "Experience the future of enterprise document workflows with AI-powered automation and real-time collaboration");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "h2");
      \u0275\u0275text(18, "Welcome back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20, "Sign in to your workspace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "form", 11);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_21_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(22, "mat-form-field", 12)(23, "mat-label");
      \u0275\u0275text(24, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 13);
      \u0275\u0275elementStart(26, "mat-icon", 14);
      \u0275\u0275text(27, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275template(28, LoginComponent_Conditional_28_Template, 2, 0, "mat-error")(29, LoginComponent_Conditional_29_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-form-field", 12)(31, "mat-label");
      \u0275\u0275text(32, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 15);
      \u0275\u0275elementStart(34, "button", 16);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_34_listener() {
        return ctx.hidePassword.set(!ctx.hidePassword());
      });
      \u0275\u0275elementStart(35, "mat-icon");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(37, LoginComponent_Conditional_37_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "mat-form-field", 12)(39, "mat-label");
      \u0275\u0275text(40, "Company Subdomain");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 17);
      \u0275\u0275elementStart(42, "mat-icon", 14);
      \u0275\u0275text(43, "domain");
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, LoginComponent_Conditional_44_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, LoginComponent_Conditional_45_Template, 4, 1, "div", 18);
      \u0275\u0275elementStart(46, "button", 19);
      \u0275\u0275template(47, LoginComponent_Conditional_47_Template, 3, 0)(48, LoginComponent_Conditional_48_Template, 2, 0, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 20)(50, "p");
      \u0275\u0275text(51, "New company? ");
      \u0275\u0275elementStart(52, "a", 21);
      \u0275\u0275text(53, "Register here");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance(21);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("email")) ? 29 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.hidePassword() ? "password" : "text");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.hidePassword() ? "visibility_off" : "visibility", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched) ? 37 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275conditional(((tmp_6_0 = ctx.loginForm.get("subdomain")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.loginForm.get("subdomain")) == null ? null : tmp_6_0.touched) ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 45 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading() || ctx.loginForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 47 : 48);
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
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatSnackBarModule
  ], styles: ["\n\n.login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  background: #ffffff;\n}\n.left-panel[_ngcontent-%COMP%] {\n  flex: 0 0 55%;\n  position: relative;\n  background-image: url(https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n}\n.image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.85) 0%,\n      rgba(37, 99, 235, 0.75) 100%);\n  z-index: 1;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 48px;\n  max-width: 500px;\n  width: 100%;\n}\n.brand-content[_ngcontent-%COMP%] {\n  color: white;\n}\n.logo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 32px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: white;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n.brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 700;\n  margin: 0 0 20px 0;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}\n.brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.6;\n  opacity: 0.95;\n  margin: 0;\n}\n.right-panel[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  padding: 48px;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n}\n.form-header[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 36px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  margin: 0 0 8px 0;\n  color: #1e293b;\n  letter-spacing: -0.5px;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #64748b;\n  margin: 0;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n  .mat-form-field-outline {\n  background-color: #f8fafc;\n  border-radius: 8px;\n}\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #e2e8f0;\n}\n  .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #3b82f6;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: #3b82f6;\n  transition: all 0.3s ease;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2563eb;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  background: #94a3b8;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fef2f2;\n  color: #dc2626;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 14px;\n  margin-bottom: 20px;\n  border-left: 4px solid #dc2626;\n}\n.error-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 28px;\n  padding-top: 20px;\n  border-top: 1px solid #e2e8f0;\n}\n.register-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3b82f6;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .login-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .left-panel[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    min-height: 400px;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n    text-align: center;\n  }\n  .logo-wrapper[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .right-panel[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    padding: 40px 24px;\n  }\n  .form-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .form-header[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .left-panel[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n  }\n  .right-panel[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n  }\n  .brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out 0.2s both;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 425 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-4LRUNAPX.js.map

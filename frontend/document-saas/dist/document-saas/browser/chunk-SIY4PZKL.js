import {
  Router
} from "./chunk-TDSMDV2C.js";
import {
  HttpClient,
  environment
} from "./chunk-C3SPZEV6.js";
import {
  catchError,
  computed,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VXIHXXTD.js";

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  http;
  router;
  _currentUser = signal(null);
  _token = signal(null);
  currentUser = this._currentUser.asReadonly();
  isLoggedIn = computed(() => this._currentUser() !== null);
  isAdmin = computed(() => this._currentUser()?.role === "Admin");
  isManager = computed(() => this._currentUser()?.role === "Manager" || this._currentUser()?.role === "Admin");
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.restoreSession();
  }
  login(request) {
    return this.http.post(`${environment.identityUrl}/api/identity/login`, request).pipe(tap((response) => {
      this.handleAuthResponse(response);
      this.startSignalR();
    }), catchError((error) => {
      console.error("Login failed:", error);
      return throwError(() => error);
    }));
  }
  register(request) {
    return this.http.post(`${environment.identityUrl}/api/identity/register`, request);
  }
  refreshToken() {
    const refreshToken = localStorage.getItem("refreshToken");
    const user = this._currentUser();
    if (!refreshToken || !user) {
      this.logout();
      return throwError(() => new Error("No refresh token"));
    }
    const userId = user.id ?? user.userId;
    return this.http.post(`${environment.identityUrl}/api/identity/refresh`, { userId, token: refreshToken }).pipe(tap((response) => this.handleAuthResponse(response)), catchError((error) => {
      this.logout();
      return throwError(() => error);
    }));
  }
  logout() {
    this.stopSignalR();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("currentUser");
    this._currentUser.set(null);
    this._token.set(null);
    this.router.navigate(["/auth/login"]);
  }
  getToken() {
    return this._token() ?? localStorage.getItem("accessToken");
  }
  getUserId() {
    const user = this._currentUser();
    return user?.id ?? user?.userId ?? "";
  }
  isTokenExpired() {
    const token = this.getToken();
    if (!token)
      return true;
    try {
      const decoded = jwtDecode(token);
      return Date.now() > decoded.exp * 1e3 - 6e4;
    } catch {
      return true;
    }
  }
  handleAuthResponse(response) {
    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("refreshToken", response.refreshToken);
    localStorage.setItem("currentUser", JSON.stringify(response.user));
    this._token.set(response.accessToken);
    this._currentUser.set(response.user);
  }
  restoreSession() {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("currentUser");
    if (token && user) {
      try {
        const decoded = jwtDecode(token);
        const isExpired = Date.now() > decoded.exp * 1e3;
        if (!isExpired) {
          this._token.set(token);
          this._currentUser.set(JSON.parse(user));
          setTimeout(() => this.startSignalR(), 1e3);
        } else {
          this.logout();
        }
      } catch {
        this.logout();
      }
    }
  }
  startSignalR() {
    import("./chunk-CIBBZS4U.js").then(({ SignalRService }) => {
    });
    setTimeout(() => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        window.dispatchEvent(new CustomEvent("auth:login", { detail: token }));
      }
    }, 500);
  }
  stopSignalR() {
    window.dispatchEvent(new CustomEvent("auth:logout"));
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};

export {
  AuthService
};
//# sourceMappingURL=chunk-SIY4PZKL.js.map

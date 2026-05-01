import {
  HttpClient,
  environment
} from "./chunk-C3SPZEV6.js";
import {
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-VXIHXXTD.js";

// src/app/features/notifications/services/notification.service.ts
var NotificationService = class _NotificationService {
  http = inject(HttpClient);
  base = `${environment.notificationUrl}/api/notifications`;
  // Global unread count signal � used by topbar badge
  unreadCount = signal(0);
  getNotifications(page = 1, pageSize = 20) {
    return this.http.get(`${this.base}?page=${page}&pageSize=${pageSize}`);
  }
  getUnreadCount() {
    return this.http.get(`${this.base}/unread-count`).pipe(tap((res) => this.unreadCount.set(res.unreadCount ?? 0)));
  }
  markAsRead(id) {
    return this.http.put(`${this.base}/${id}/read`, {}).pipe(tap(() => {
      const current = this.unreadCount();
      if (current > 0)
        this.unreadCount.set(current - 1);
    }));
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};

export {
  NotificationService
};
//# sourceMappingURL=chunk-Z77P57F4.js.map

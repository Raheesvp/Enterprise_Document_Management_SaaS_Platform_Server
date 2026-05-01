import {
  MatChipsModule
} from "./chunk-NNFXHKZH.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-ZJFEIJFC.js";
import {
  FormsModule
} from "./chunk-LCIMRHXP.js";
import "./chunk-RY4ZUQK5.js";
import "./chunk-XOAVHFRV.js";
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
  MatCommonModule,
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
import {
  environment
} from "./chunk-C3SPZEV6.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  DatePipe,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  ViewEncapsulation$1,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VXIHXXTD.js";
import {
  __spreadValues
} from "./chunk-J25FJFZE.js";

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MatProgressBar = class _MatProgressBar {
  constructor(_elementRef, _ngZone, _changeDetectorRef, _animationMode, defaults) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._isNoopAnimation = false;
    this._defaultColor = "primary";
    this._value = 0;
    this._bufferValue = 0;
    this.animationEnd = new EventEmitter();
    this._mode = "determinate";
    this._transitionendHandler = (event) => {
      if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
        return;
      }
      if (this.mode === "determinate" || this.mode === "buffer") {
        this._ngZone.run(() => this.animationEnd.next({
          value: this.value
        }));
      }
    };
    this._isNoopAnimation = _animationMode === "NoopAnimations";
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress bar. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Buffer value of the progress bar. Defaults to zero. */
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._elementRef.nativeElement.addEventListener("transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._elementRef.nativeElement.removeEventListener("transitionend", this._transitionendHandler);
  }
  /** Gets the transform style that should be applied to the primary bar. */
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  /** Gets the `flex-basis` value that should be applied to the buffer bar. */
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  /** Returns whether the progress bar is indeterminate. */
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  static {
    this.\u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatProgressBar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatProgressBar,
      selectors: [["mat-progress-bar"]],
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
      hostVars: 10,
      hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
          \u0275\u0275classMap("mat-" + ctx.color);
          \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
        }
      },
      inputs: {
        color: "color",
        value: [2, "value", "value", numberAttribute],
        bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
        mode: "mode"
      },
      outputs: {
        animationEnd: "animationEnd"
      },
      exportAs: ["matProgressBar"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      decls: 7,
      vars: 5,
      consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
      template: function MatProgressBar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275element(1, "div", 1);
          \u0275\u0275template(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 3);
          \u0275\u0275element(4, "span", 4);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "div", 5);
          \u0275\u0275element(6, "span", 4);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
        }
      },
      styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height),var(--mdc-linear-progress-active-indicator-height))}.cdk-high-contrast-active .mdc-linear-progress{outline-color:CanvasText}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-app-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.cdk-high-contrast-active .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height),var(--mdc-linear-progress-active-indicator-height))}.cdk-high-contrast-active .mdc-linear-progress{outline-color:CanvasText}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-app-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.cdk-high-contrast-active .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}`]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_PROGRESS_BAR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static {
    this.\u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatProgressBarModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatProgressBarModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/features/documents/upload/upload.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UploadComponent_Conditional_24_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function UploadComponent_Conditional_24_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.startAll());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Upload All ");
    \u0275\u0275elementEnd();
  }
}
function UploadComponent_Conditional_24_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function UploadComponent_Conditional_24_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.pauseAll());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "pause");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pause All ");
    \u0275\u0275elementEnd();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \uFFFD ", f_r7.progress, "% uploaded ");
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \uFFFD Completed ", \u0275\u0275pipeBind2(1, 1, f_r7.completedAt, "HH:mm:ss"), " ");
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \uFFFD ", f_r7.error, " ");
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 23);
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("mode", f_r7.status === "uploading" ? "determinate" : "buffer")("value", f_r7.progress)("color", f_r7.status === "paused" ? "accent" : "primary");
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 24);
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "sync");
    \u0275\u0275elementEnd();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "pause_circle");
    \u0275\u0275elementEnd();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "error");
    \u0275\u0275elementEnd();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "schedule");
    \u0275\u0275elementEnd();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function UploadComponent_Conditional_24_For_13_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const f_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.startUpload(f_r7));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd()();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function UploadComponent_Conditional_24_For_13_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const f_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.pauseUpload(f_r7));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "pause");
    \u0275\u0275elementEnd()();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function UploadComponent_Conditional_24_For_13_Conditional_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const f_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.resumeUpload(f_r7));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "play_arrow");
    \u0275\u0275elementEnd()();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function UploadComponent_Conditional_24_For_13_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const f_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.retryUpload(f_r7));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd()();
  }
}
function UploadComponent_Conditional_24_For_13_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function UploadComponent_Conditional_24_For_13_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const f_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.removeFile(f_r7));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function UploadComponent_Conditional_24_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 15)(1, "div", 18)(2, "div", 19)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20)(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275template(10, UploadComponent_Conditional_24_For_13_Conditional_10_Template, 1, 1)(11, UploadComponent_Conditional_24_For_13_Conditional_11_Template, 2, 4)(12, UploadComponent_Conditional_24_For_13_Conditional_12_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, UploadComponent_Conditional_24_For_13_Conditional_13_Template, 1, 3, "mat-progress-bar", 23)(14, UploadComponent_Conditional_24_For_13_Conditional_14_Template, 1, 0, "mat-progress-bar", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 25);
    \u0275\u0275template(16, UploadComponent_Conditional_24_For_13_Conditional_16_Template, 2, 0, "mat-icon")(17, UploadComponent_Conditional_24_For_13_Conditional_17_Template, 2, 0, "mat-icon")(18, UploadComponent_Conditional_24_For_13_Conditional_18_Template, 2, 0, "mat-icon")(19, UploadComponent_Conditional_24_For_13_Conditional_19_Template, 2, 0, "mat-icon")(20, UploadComponent_Conditional_24_For_13_Conditional_20_Template, 2, 0, "mat-icon");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 26);
    \u0275\u0275template(23, UploadComponent_Conditional_24_For_13_Conditional_23_Template, 3, 0, "button", 27)(24, UploadComponent_Conditional_24_For_13_Conditional_24_Template, 3, 0, "button", 28)(25, UploadComponent_Conditional_24_For_13_Conditional_25_Template, 3, 0, "button", 29)(26, UploadComponent_Conditional_24_For_13_Conditional_26_Template, 3, 0, "button", 30)(27, UploadComponent_Conditional_24_For_13_Conditional_27_Template, 3, 0, "button", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r4.getFileColor(f_r7.file.type) + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r4.getFileColor(f_r7.file.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getFileIcon(f_r7.file.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r7.file.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r4.formatSize(f_r7.file.size), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.status === "uploading" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.status === "complete" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.error ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.status === "uploading" || f_r7.status === "paused" ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.status === "complete" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap("status-" + f_r7.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.status === "uploading" ? 16 : f_r7.status === "complete" ? 17 : f_r7.status === "paused" ? 18 : f_r7.status === "error" ? 19 : 20);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", f_r7.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(f_r7.status === "pending" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.status === "uploading" ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.status === "paused" ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.status === "error" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(f_r7.status !== "uploading" ? 27 : -1);
  }
}
function UploadComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275template(5, UploadComponent_Conditional_24_Conditional_5_Template, 4, 0, "button", 11)(6, UploadComponent_Conditional_24_Conditional_6_Template, 4, 0, "button", 12);
    \u0275\u0275elementStart(7, "button", 13);
    \u0275\u0275listener("click", function UploadComponent_Conditional_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clearCompleted());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "clear_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Clear Done ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275repeaterCreate(12, UploadComponent_Conditional_24_For_13_Template, 28, 21, "mat-card", 15, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Upload Queue (", ctx_r4.files().length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.hasPendingFiles() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.hasUploadingFiles() ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r4.files());
  }
}
var UploadComponent = class _UploadComponent {
  authService = inject(AuthService);
  snackBar = inject(MatSnackBar);
  router = inject(Router);
  files = signal([]);
  isDragOver = signal(false);
  // -- Drag and Drop ---------------------------------------
  onDragOver(event) {
    event.preventDefault();
    this.isDragOver.set(true);
  }
  onDragLeave() {
    this.isDragOver.set(false);
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragOver.set(false);
    const files = event.dataTransfer?.files;
    if (files)
      this.addFiles(Array.from(files));
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files) {
      this.addFiles(Array.from(input.files));
      input.value = "";
    }
  }
  addFiles(files) {
    const newFiles = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
      status: "pending",
      progress: 0
    }));
    this.files.update((existing) => [...existing, ...newFiles]);
  }
  // -- Upload Controls -------------------------------------
  startAll() {
    this.files().filter((f) => f.status === "pending").forEach((f) => this.startUpload(f));
  }
  pauseAll() {
    this.files().filter((f) => f.status === "uploading").forEach((f) => this.pauseUpload(f));
  }
  clearCompleted() {
    this.files.update((files) => files.filter((f) => f.status !== "complete"));
  }
  removeFile(file) {
    if (file.upload) {
      try {
        file.upload.abort();
      } catch {
      }
    }
    this.files.update((files) => files.filter((f) => f.id !== file.id));
  }
  pauseUpload(file) {
    if (file.upload) {
      file.upload.abort();
      this.updateFile(file.id, { status: "paused" });
    }
  }
  resumeUpload(file) {
    if (file.upload) {
      file.upload.start();
      this.updateFile(file.id, { status: "uploading" });
    }
  }
  retryUpload(file) {
    this.updateFile(file.id, {
      status: "pending",
      progress: 0,
      error: void 0,
      upload: void 0
    });
    this.startUpload(this.files().find((f) => f.id === file.id));
  }
  startUpload(file) {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      this.snackBar.open("Not authenticated", "Close", { duration: 3e3 });
      return;
    }
    const chunkSize = 1024 * 1024;
    const totalSize = file.file.size;
    fetch(`${environment.documentUrl}/api/upload/init`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        fileName: file.file.name,
        contentType: file.file.type || "application/octet-stream",
        totalSize
      })
    }).then((res) => res.json()).then((data) => {
      const uploadId = data.uploadId;
      this.updateFile(file.id, {
        uploadId,
        status: "uploading",
        startedAt: /* @__PURE__ */ new Date()
      });
      this.uploadChunks(file, uploadId, token, totalSize, chunkSize);
    }).catch(() => {
      this.updateFile(file.id, {
        status: "error",
        error: "Failed to initialize upload"
      });
    });
  }
  uploadChunks(file, uploadId, token, totalSize, chunkSize) {
    let offset = 0;
    const uploadNextChunk = () => {
      const currentFile = this.files().find((f) => f.id === file.id);
      if (!currentFile || currentFile.status === "paused")
        return;
      const chunk = file.file.slice(offset, offset + chunkSize);
      fetch(`${environment.documentUrl}/api/upload/${uploadId}/chunk?offset=${offset}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          "Authorization": `Bearer ${token}`
        },
        body: chunk
      }).then((res) => {
        if (!res.ok)
          throw new Error(`HTTP ${res.status}`);
        return res.json();
      }).then((data) => {
        offset += chunk.size;
        const progress = Math.round(offset / totalSize * 100);
        this.updateFile(file.id, { progress });
        if (data.status === "Complete" || offset >= totalSize) {
          this.updateFile(file.id, {
            status: "complete",
            progress: 100,
            completedAt: /* @__PURE__ */ new Date()
          });
          this.snackBar.open(`"${file.file.name}" uploaded successfully`, "View", { duration: 4e3 }).onAction().subscribe(() => {
            this.router.navigate(["/documents"]);
          });
        } else {
          uploadNextChunk();
        }
      }).catch(() => {
        this.updateFile(file.id, {
          status: "error",
          error: "Upload failed \uFFFD click retry"
        });
      });
    };
    uploadNextChunk();
  }
  // -- Helpers ---------------------------------------------
  updateFile(id, changes) {
    this.files.update((files) => files.map((f) => f.id === id ? __spreadValues(__spreadValues({}, f), changes) : f));
  }
  hasPendingFiles() {
    return this.files().some((f) => f.status === "pending");
  }
  hasUploadingFiles() {
    return this.files().some((f) => f.status === "uploading");
  }
  formatSize(bytes) {
    if (bytes === 0)
      return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  }
  getFileColor(mimeType) {
    const colors = {
      "application/pdf": "#DC2626",
      "image/jpeg": "#2563EB",
      "image/png": "#2563EB",
      "text/plain": "#64748B",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "#1D4ED8",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "#16A34A"
    };
    return colors[mimeType] ?? "#7C3AED";
  }
  getFileIcon(mimeType) {
    if (mimeType.includes("pdf"))
      return "picture_as_pdf";
    if (mimeType.includes("image"))
      return "image";
    if (mimeType.includes("word"))
      return "description";
    if (mimeType.includes("sheet"))
      return "table_chart";
    return "insert_drive_file";
  }
  ngOnDestroy() {
    this.files().filter((f) => f.status === "uploading").forEach((f) => this.pauseUpload(f));
  }
  static \u0275fac = function UploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UploadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UploadComponent, selectors: [["app-upload"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 3, consts: [["fileInput", ""], [1, "page-container"], [1, "page-header"], ["mat-button", "", "routerLink", "/documents", 1, "back-btn"], [1, "drop-zone", 3, "dragover", "dragleave", "drop", "click"], [1, "drop-icon"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["type", "file", "multiple", "", "hidden", "", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.txt", 3, "change"], [1, "queue-section"], [1, "queue-header"], [1, "queue-actions"], ["mat-raised-button", "", "color", "primary"], ["mat-stroked-button", ""], ["mat-stroked-button", "", "color", "warn", 3, "click"], [1, "file-list"], [1, "file-card"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", 3, "click"], [1, "file-row"], [1, "file-icon"], [1, "file-info"], [1, "file-name"], [1, "file-meta"], [3, "mode", "value", "color"], ["mode", "determinate", "value", "100", "color", "primary"], [1, "status-badge"], [1, "file-actions"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Start upload"], ["mat-icon-button", "", "matTooltip", "Pause upload"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Resume upload"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Retry upload"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Start upload", 3, "click"], ["mat-icon-button", "", "matTooltip", "Pause upload", 3, "click"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Resume upload", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Retry upload", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove", 3, "click"]], template: function UploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3)(3, "mat-icon");
      \u0275\u0275text(4, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Back to Documents ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "h1");
      \u0275\u0275text(8, "Upload Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Upload files with automatic chunking and resume support");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "mat-card", 4);
      \u0275\u0275listener("dragover", function UploadComponent_Template_mat_card_dragover_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragOver($event));
      })("dragleave", function UploadComponent_Template_mat_card_dragleave_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragLeave());
      })("drop", function UploadComponent_Template_mat_card_drop_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      })("click", function UploadComponent_Template_mat_card_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(23);
        return \u0275\u0275resetView(fileInput_r2.click());
      });
      \u0275\u0275elementStart(12, "mat-icon", 5);
      \u0275\u0275text(13, "cloud_upload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h3");
      \u0275\u0275text(15, "Drop files here or click to browse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, "Supports PDF, Word, Excel, images \uFFFD Max 500MB per file");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 6);
      \u0275\u0275listener("click", function UploadComponent_Template_button_click_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        const fileInput_r2 = \u0275\u0275reference(23);
        $event.stopPropagation();
        return \u0275\u0275resetView(fileInput_r2.click());
      });
      \u0275\u0275elementStart(19, "mat-icon");
      \u0275\u0275text(20, "folder_open");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Browse Files ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 7, 0);
      \u0275\u0275listener("change", function UploadComponent_Template_input_change_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFileSelected($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, UploadComponent_Conditional_24_Template, 14, 3, "div", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("drag-over", ctx.isDragOver());
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.files().length > 0 ? 24 : -1);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
    RouterLink,
    FormsModule,
    MatCardModule,
    MatCard,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressBarModule,
    MatProgressBar,
    MatSnackBarModule,
    MatChipsModule,
    MatDividerModule
  ], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #64748B;\n  margin-bottom: 8px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n  font-size: 14px;\n}\n.drop-zone[_ngcontent-%COMP%] {\n  border: 2px dashed #CBD5E1;\n  border-radius: 16px;\n  padding: 48px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.drop-zone[_ngcontent-%COMP%]:hover {\n  border-color: #2563EB;\n  background: #EFF6FF;\n}\n.drop-zone.drag-over[_ngcontent-%COMP%] {\n  border-color: #2563EB;\n  background: #EFF6FF;\n  transform: scale(1.01);\n}\n.drop-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: #CBD5E1;\n}\n.drop-zone[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1E293B;\n  margin: 0;\n}\n.drop-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n  font-size: 13px;\n}\n.drop-zone[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.queue-section[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.queue-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.queue-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1E293B;\n  margin: 0;\n}\n.queue-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.queue-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.file-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.file-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 4px;\n}\n.file-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px;\n}\n.file-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.file-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  overflow: hidden;\n}\n.file-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1E293B;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.file-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 3px 8px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #F1F5F9;\n  color: #64748B;\n}\n.status-uploading[_ngcontent-%COMP%] {\n  background: #EFF6FF;\n  color: #2563EB;\n}\n.status-paused[_ngcontent-%COMP%] {\n  background: #FFF7ED;\n  color: #EA580C;\n}\n.status-complete[_ngcontent-%COMP%] {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n.status-error[_ngcontent-%COMP%] {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n.file-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 4px;\n}\n/*# sourceMappingURL=upload.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UploadComponent, { className: "UploadComponent", filePath: "src\\app\\features\\documents\\upload\\upload.component.ts", lineNumber: 410 });
})();
export {
  UploadComponent
};
//# sourceMappingURL=chunk-W3L4IAGP.js.map

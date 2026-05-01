import {
  DocumentService,
  DocumentStatusColors,
  DocumentStatusLabels
} from "./chunk-3CWBQWPG.js";
import {
  MatChipsModule
} from "./chunk-NNFXHKZH.js";
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
  MatTooltip,
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
  FormsModule,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgModel
} from "./chunk-LCIMRHXP.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-UM66KD6M.js";
import "./chunk-RY4ZUQK5.js";
import {
  animate,
  animateChild,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-XOAVHFRV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-RH5JV5TE.js";
import {
  AnimationCurves,
  AnimationDurations,
  AriaDescriber,
  ENTER,
  FocusMonitor,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatOption,
  SPACE
} from "./chunk-FGR4X3RN.js";
import {
  RouterLink
} from "./chunk-TDSMDV2C.js";
import "./chunk-M2AXSFNT.js";
import "./chunk-C3SPZEV6.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  ReplaySubject,
  SkipSelf,
  Subject,
  ViewEncapsulation$1,
  booleanAttribute,
  debounceTime,
  distinctUntilChanged,
  inject,
  merge,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VXIHXXTD.js";
import "./chunk-J25FJFZE.js";

// node_modules/@angular/material/fesm2022/paginator.mjs
function MatPaginator_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    \u0275\u0275property("value", pageSizeOption_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 16, 0);
    \u0275\u0275listener("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._changePageSize($event.value));
    });
    \u0275\u0275repeaterCreate(3, MatPaginator_Conditional_2_Conditional_3_For_4_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275listener("click", function MatPaginator_Conditional_2_Conditional_3_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const selectRef_r4 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(selectRef_r4.open());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled)("aria-labelledby", ctx_r1._pageSizeLabelId)("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MatPaginator_Conditional_2_Conditional_3_Template, 6, 7, "mat-form-field", 14)(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r1._pageSizeLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1._intl.itemsPerPageLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.firstPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.lastPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._nextButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
var MatPaginatorIntl = class _MatPaginatorIntl {
  constructor() {
    this.changes = new Subject();
    this.itemsPerPageLabel = "Items per page:";
    this.nextPageLabel = "Next page";
    this.previousPageLabel = "Previous page";
    this.firstPageLabel = "First page";
    this.lastPageLabel = "Last page";
    this.getRangeLabel = (page, pageSize, length) => {
      if (length == 0 || pageSize == 0) {
        return `0 of ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
    };
  }
  static {
    this.\u0275fac = function MatPaginatorIntl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatPaginatorIntl)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatPaginatorIntl,
      factory: _MatPaginatorIntl.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
var DEFAULT_PAGE_SIZE = 50;
var MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
var nextUniqueId = 0;
var MatPaginator = class _MatPaginator {
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  /** Number of items to display on a page. By default set to 50. */
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  /** The set of provided page size options to display to the user. */
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map((p) => numberAttribute(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  constructor(_intl, _changeDetectorRef, defaults) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._pageSizeLabelId = `mat-paginator-page-size-label-${nextUniqueId++}`;
    this._isInitialized = false;
    this._initializedStream = new ReplaySubject(1);
    this._pageIndex = 0;
    this._length = 0;
    this._pageSizeOptions = [];
    this.hidePageSize = false;
    this.showFirstLastButtons = false;
    this.selectConfig = {};
    this.disabled = false;
    this.page = new EventEmitter();
    this.initialized = this._initializedStream;
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */
  nextPage() {
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex + 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move back to the previous page if it exists. */
  previousPage() {
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the first page if not already there. */
  firstPage() {
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = 0;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the last page if not already there. */
  lastPage() {
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.getNumberOfPages() - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */
  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.length / this.pageSize);
  }
  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */
  _changePageSize(pageSize) {
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
  static {
    this.\u0275fac = function MatPaginator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatPaginator)(\u0275\u0275directiveInject(MatPaginatorIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatPaginator,
      selectors: [["mat-paginator"]],
      hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
      inputs: {
        color: "color",
        pageIndex: [2, "pageIndex", "pageIndex", numberAttribute],
        length: [2, "length", "length", numberAttribute],
        pageSize: [2, "pageSize", "pageSize", numberAttribute],
        pageSizeOptions: "pageSizeOptions",
        hidePageSize: [2, "hidePageSize", "hidePageSize", booleanAttribute],
        showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", booleanAttribute],
        selectConfig: "selectConfig",
        disabled: [2, "disabled", "disabled", booleanAttribute]
      },
      outputs: {
        page: "page"
      },
      exportAs: ["matPaginator"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      decls: 14,
      vars: 14,
      consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
      template: function MatPaginator_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
          \u0275\u0275template(2, MatPaginator_Conditional_2_Template, 5, 4, "div", 3);
          \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
          \u0275\u0275text(5);
          \u0275\u0275elementEnd();
          \u0275\u0275template(6, MatPaginator_Conditional_6_Template, 3, 5, "button", 6);
          \u0275\u0275elementStart(7, "button", 7);
          \u0275\u0275listener("click", function MatPaginator_Template_button_click_7_listener() {
            return ctx.previousPage();
          });
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(8, "svg", 8);
          \u0275\u0275element(9, "path", 9);
          \u0275\u0275elementEnd()();
          \u0275\u0275namespaceHTML();
          \u0275\u0275elementStart(10, "button", 10);
          \u0275\u0275listener("click", function MatPaginator_Template_button_click_10_listener() {
            return ctx.nextPage();
          });
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(11, "svg", 8);
          \u0275\u0275element(12, "path", 11);
          \u0275\u0275elementEnd()();
          \u0275\u0275template(13, MatPaginator_Conditional_13_Template, 3, 5, "button", 12);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275conditional(!ctx.hidePageSize ? 2 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275textInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showFirstLastButtons ? 6 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
          \u0275\u0275attribute("aria-label", ctx._intl.previousPageLabel);
          \u0275\u0275advance(3);
          \u0275\u0275property("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
          \u0275\u0275attribute("aria-label", ctx._intl.nextPageLabel);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.showFirstLastButtons ? 13 : -1);
        }
      },
      dependencies: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-app-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-app-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-app-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-app-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-app-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-app-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-app-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-app-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginator, [{
    type: Component,
    args: [{
      selector: "mat-paginator",
      exportAs: "matPaginator",
      host: {
        "class": "mat-mdc-paginator",
        "role": "group"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      template: `<div class="mat-mdc-paginator-outer-container">
  <div class="mat-mdc-paginator-container">
    @if (!hidePageSize) {
      <div class="mat-mdc-paginator-page-size">
        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">
          {{_intl.itemsPerPageLabel}}
        </div>

        @if (_displayedPageSizeOptions.length > 1) {
          <mat-form-field
            [appearance]="_formFieldAppearance!"
            [color]="color"
            class="mat-mdc-paginator-page-size-select">
            <mat-select
              #selectRef
              [value]="pageSize"
              [disabled]="disabled"
              [aria-labelledby]="_pageSizeLabelId"
              [panelClass]="selectConfig.panelClass || ''"
              [disableOptionCentering]="selectConfig.disableOptionCentering"
              (selectionChange)="_changePageSize($event.value)"
              hideSingleSelectionIndicator>
              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {
                <mat-option [value]="pageSizeOption">
                  {{pageSizeOption}}
                </mat-option>
              }
            </mat-select>
          <div class="mat-mdc-paginator-touch-target" (click)="selectRef.open()"></div>
          </mat-form-field>
        }

        @if (_displayedPageSizeOptions.length <= 1) {
          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>
        }
      </div>
    }

    <div class="mat-mdc-paginator-range-actions">
      <div class="mat-mdc-paginator-range-label" aria-live="polite">
        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}
      </div>

      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-first"
                (click)="firstPage()"
                [attr.aria-label]="_intl.firstPageLabel"
                [matTooltip]="_intl.firstPageLabel"
                [matTooltipDisabled]="_previousButtonsDisabled()"
                [matTooltipPosition]="'above'"
                [disabled]="_previousButtonsDisabled()">
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
          </svg>
        </button>
      }
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-previous"
              (click)="previousPage()"
              [attr.aria-label]="_intl.previousPageLabel"
              [matTooltip]="_intl.previousPageLabel"
              [matTooltipDisabled]="_previousButtonsDisabled()"
              [matTooltipPosition]="'above'"
              [disabled]="_previousButtonsDisabled()">
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-next"
              (click)="nextPage()"
              [attr.aria-label]="_intl.nextPageLabel"
              [matTooltip]="_intl.nextPageLabel"
              [matTooltipDisabled]="_nextButtonsDisabled()"
              [matTooltipPosition]="'above'"
              [disabled]="_nextButtonsDisabled()">
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-last"
                (click)="lastPage()"
                [attr.aria-label]="_intl.lastPageLabel"
                [matTooltip]="_intl.lastPageLabel"
                [matTooltipDisabled]="_nextButtonsDisabled()"
                [matTooltipPosition]="'above'"
                [disabled]="_nextButtonsDisabled()">
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
          </svg>
        </button>
      }
    </div>
  </div>
</div>
`,
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-app-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-app-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-app-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-app-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-app-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-app-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-app-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-app-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"]
    }]
  }], () => [{
    type: MatPaginatorIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    pageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: Input
    }],
    hidePageSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectConfig: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    page: [{
      type: Output
    }]
  });
})();
var MatPaginatorModule = class _MatPaginatorModule {
  static {
    this.\u0275fac = function MatPaginatorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatPaginatorModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatPaginatorModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MAT_PAGINATOR_INTL_PROVIDER],
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
      exports: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/sort.mjs
var _c0 = ["mat-sort-header", ""];
var _c1 = ["*"];
function MatSortHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("@arrowPosition.start", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_start_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._disableViewStateAnimation = true);
    })("@arrowPosition.done", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_done_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._disableViewStateAnimation = false);
    });
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275element(3, "div", 5)(4, "div", 6)(5, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@arrowOpacity", ctx_r1._getArrowViewState())("@arrowPosition", ctx_r1._getArrowViewState())("@allowChildren", ctx_r1._getArrowDirectionState());
    \u0275\u0275advance(2);
    \u0275\u0275property("@indicator", ctx_r1._getArrowDirectionState());
    \u0275\u0275advance();
    \u0275\u0275property("@leftPointer", ctx_r1._getArrowDirectionState());
    \u0275\u0275advance();
    \u0275\u0275property("@rightPointer", ctx_r1._getArrowDirectionState());
  }
}
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
var MAT_SORT_DEFAULT_OPTIONS = new InjectionToken("MAT_SORT_DEFAULT_OPTIONS");
var MatSort = class _MatSort {
  /** The sort direction of the currently active MatSortable. */
  get direction() {
    return this._direction;
  }
  set direction(direction) {
    if (direction && direction !== "asc" && direction !== "desc" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  constructor(_defaultOptions) {
    this._defaultOptions = _defaultOptions;
    this._initializedStream = new ReplaySubject(1);
    this.sortables = /* @__PURE__ */ new Map();
    this._stateChanges = new Subject();
    this.start = "asc";
    this._direction = "";
    this.disabled = false;
    this.sortChange = new EventEmitter();
    this.initialized = this._initializedStream;
  }
  /**
   * Register function to be used by the contained MatSortables. Adds the MatSortable to the
   * collection of MatSortables.
   */
  register(sortable) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }
      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }
    this.sortables.set(sortable.id, sortable);
  }
  /**
   * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
   * collection of contained MatSortables.
   */
  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }
    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable) {
    if (!sortable) {
      return "";
    }
    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }
  ngOnInit() {
    this._initializedStream.next();
  }
  ngOnChanges() {
    this._stateChanges.next();
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._initializedStream.complete();
  }
  static {
    this.\u0275fac = function MatSort_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSort)(\u0275\u0275directiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatSort,
      selectors: [["", "matSort", ""]],
      hostAttrs: [1, "mat-sort"],
      inputs: {
        active: [0, "matSortActive", "active"],
        start: [0, "matSortStart", "start"],
        direction: [0, "matSortDirection", "direction"],
        disableClear: [2, "matSortDisableClear", "disableClear", booleanAttribute],
        disabled: [2, "matSortDisabled", "disabled", booleanAttribute]
      },
      outputs: {
        sortChange: "matSortChange"
      },
      exportAs: ["matSort"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSort, [{
    type: Directive,
    args: [{
      selector: "[matSort]",
      exportAs: "matSort",
      host: {
        "class": "mat-sort"
      },
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    active: [{
      type: Input,
      args: ["matSortActive"]
    }],
    start: [{
      type: Input,
      args: ["matSortStart"]
    }],
    direction: [{
      type: Input,
      args: ["matSortDirection"]
    }],
    disableClear: [{
      type: Input,
      args: [{
        alias: "matSortDisableClear",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matSortDisabled",
        transform: booleanAttribute
      }]
    }],
    sortChange: [{
      type: Output,
      args: ["matSortChange"]
    }]
  });
})();
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ["asc", "desc"];
  if (start == "desc") {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push("");
  }
  return sortOrder;
}
var SORT_ANIMATION_TRANSITION = AnimationDurations.ENTERING + " " + AnimationCurves.STANDARD_CURVE;
var matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: trigger("indicator", [
    state("active-asc, asc", style({
      transform: "translateY(0px)"
    })),
    // 10px is the height of the sort indicator, minus the width of the pointers
    state("active-desc, desc", style({
      transform: "translateY(10px)"
    })),
    transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))
  ]),
  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: trigger("leftPointer", [state("active-asc, asc", style({
    transform: "rotate(-45deg)"
  })), state("active-desc, desc", style({
    transform: "rotate(45deg)"
  })), transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: trigger("rightPointer", [state("active-asc, asc", style({
    transform: "rotate(45deg)"
  })), state("active-desc, desc", style({
    transform: "rotate(-45deg)"
  })), transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))]),
  /** Animation that controls the arrow opacity. */
  arrowOpacity: trigger("arrowOpacity", [
    state("desc-to-active, asc-to-active, active", style({
      opacity: 1
    })),
    state("desc-to-hint, asc-to-hint, hint", style({
      opacity: 0.54
    })),
    state("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void", style({
      opacity: 0
    })),
    // Transition between all states except for immediate transitions
    transition("* => asc, * => desc, * => active, * => hint, * => void", animate("0ms")),
    transition("* <=> *", animate(SORT_ANIMATION_TRANSITION))
  ]),
  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: trigger("arrowPosition", [
    // Hidden Above => Hint Center
    transition("* => desc-to-hint, * => desc-to-active", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(-25%)"
    }), style({
      transform: "translateY(0)"
    })]))),
    // Hint Center => Hidden Below
    transition("* => hint-to-desc, * => active-to-desc", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(0)"
    }), style({
      transform: "translateY(25%)"
    })]))),
    // Hidden Below => Hint Center
    transition("* => asc-to-hint, * => asc-to-active", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(25%)"
    }), style({
      transform: "translateY(0)"
    })]))),
    // Hint Center => Hidden Above
    transition("* => hint-to-asc, * => active-to-asc", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(0)"
    }), style({
      transform: "translateY(-25%)"
    })]))),
    state("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active", style({
      transform: "translateY(0)"
    })),
    state("hint-to-desc, active-to-desc, desc", style({
      transform: "translateY(-25%)"
    })),
    state("hint-to-asc, active-to-asc, asc", style({
      transform: "translateY(25%)"
    }))
  ]),
  /** Necessary trigger that calls animate on children animations. */
  allowChildren: trigger("allowChildren", [transition("* <=> *", [query("@*", animateChild(), {
    optional: true
  })])])
};
var MatSortHeaderIntl = class _MatSortHeaderIntl {
  constructor() {
    this.changes = new Subject();
  }
  static {
    this.\u0275fac = function MatSortHeaderIntl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSortHeaderIntl)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatSortHeaderIntl,
      factory: _MatSortHeaderIntl.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeaderIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
var MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};
var MatSortHeader = class _MatSortHeader {
  /**
   * Description applied to MatSortHeader's button element with aria-describedby. This text should
   * describe the action that will occur when the user clicks the sort header.
   */
  get sortActionDescription() {
    return this._sortActionDescription;
  }
  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  constructor(_intl, _changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef, _ariaDescriber, defaultOptions) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._sort = _sort;
    this._columnDef = _columnDef;
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    this._showIndicatorHint = false;
    this._viewState = {};
    this._arrowDirection = "";
    this._disableViewStateAnimation = false;
    this.arrowPosition = "after";
    this.disabled = false;
    this._sortActionDescription = "Sort";
    if (!_sort && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }
    this._handleStateChanges();
  }
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }
    this._updateArrowDirection();
    this._setAnimationTransitionState({
      toState: this._isSorted() ? "active" : this._arrowDirection
    });
    this._sort.register(this);
    this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container");
    this._updateSortActionDescription(this._sortActionDescription);
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
      const newState = !!origin;
      if (newState !== this._showIndicatorHint) {
        this._setIndicatorHintVisible(newState);
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._sort.deregister(this);
    this._rerenderSubscription.unsubscribe();
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
    }
  }
  /**
   * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
   * user showing what the active sort will become. If set to false, the arrow will fade away.
   */
  _setIndicatorHintVisible(visible) {
    if (this._isDisabled() && visible) {
      return;
    }
    this._showIndicatorHint = visible;
    if (!this._isSorted()) {
      this._updateArrowDirection();
      if (this._showIndicatorHint) {
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: "hint"
        });
      } else {
        this._setAnimationTransitionState({
          fromState: "hint",
          toState: this._arrowDirection
        });
      }
    }
  }
  /**
   * Sets the animation transition view state for the arrow's position and opacity. If the
   * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
   * no animation appears.
   */
  _setAnimationTransitionState(viewState) {
    this._viewState = viewState || {};
    if (this._disableViewStateAnimation) {
      this._viewState = {
        toState: viewState.toState
      };
    }
  }
  /** Triggers the sort on this sort header and removes the indicator hint. */
  _toggleOnInteraction() {
    this._sort.sort(this);
    if (this._viewState.toState === "hint" || this._viewState.toState === "active") {
      this._disableViewStateAnimation = true;
    }
  }
  _handleClick() {
    if (!this._isDisabled()) {
      this._sort.sort(this);
    }
  }
  _handleKeydown(event) {
    if (!this._isDisabled() && (event.keyCode === SPACE || event.keyCode === ENTER)) {
      event.preventDefault();
      this._toggleOnInteraction();
    }
  }
  /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc");
  }
  /** Returns the animation state for the arrow direction (indicator and pointers). */
  _getArrowDirectionState() {
    return `${this._isSorted() ? "active-" : ""}${this._arrowDirection}`;
  }
  /** Returns the arrow position state (opacity, translation). */
  _getArrowViewState() {
    const fromState = this._viewState.fromState;
    return (fromState ? `${fromState}-to-` : "") + this._viewState.toState;
  }
  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */
  _updateArrowDirection() {
    this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
  }
  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return "none";
    }
    return this._sort.direction == "asc" ? "ascending" : "descending";
  }
  /** Whether the arrow inside the sort header should be rendered. */
  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
  _updateSortActionDescription(newDescription) {
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }
    this._sortActionDescription = newDescription;
  }
  /** Handles changes in the sorting state. */
  _handleStateChanges() {
    this._rerenderSubscription = merge(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
      if (this._isSorted()) {
        this._updateArrowDirection();
        if (this._viewState.toState === "hint" || this._viewState.toState === "active") {
          this._disableViewStateAnimation = true;
        }
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: "active"
        });
        this._showIndicatorHint = false;
      }
      if (!this._isSorted() && this._viewState && this._viewState.toState === "active") {
        this._disableViewStateAnimation = false;
        this._setAnimationTransitionState({
          fromState: "active",
          toState: this._arrowDirection
        });
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function MatSortHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSortHeader)(\u0275\u0275directiveInject(MatSortHeaderIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatSort, 8), \u0275\u0275directiveInject("MAT_SORT_HEADER_COLUMN_DEF", 8), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(AriaDescriber, 8), \u0275\u0275directiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatSortHeader,
      selectors: [["", "mat-sort-header", ""]],
      hostAttrs: [1, "mat-sort-header"],
      hostVars: 3,
      hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatSortHeader_click_HostBindingHandler() {
            return ctx._handleClick();
          })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
            return ctx._setIndicatorHintVisible(true);
          })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
            return ctx._setIndicatorHintVisible(false);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-sort", ctx._getAriaSortAttribute());
          \u0275\u0275classProp("mat-sort-header-disabled", ctx._isDisabled());
        }
      },
      inputs: {
        id: [0, "mat-sort-header", "id"],
        arrowPosition: "arrowPosition",
        start: "start",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        sortActionDescription: "sortActionDescription",
        disableClear: [2, "disableClear", "disableClear", booleanAttribute]
      },
      exportAs: ["matSortHeader"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 7,
      consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
      template: function MatSortHeader_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275projection(2);
          \u0275\u0275elementEnd();
          \u0275\u0275template(3, MatSortHeader_Conditional_3_Template, 6, 6, "div", 2);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275classProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before");
          \u0275\u0275attribute("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx._renderArrow() ? 3 : -1);
        }
      },
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color, var(--mat-app-on-surface));opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
      encapsulation: 2,
      data: {
        animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeader, [{
    type: Component,
    args: [{
      selector: "[mat-sort-header]",
      exportAs: "matSortHeader",
      host: {
        "class": "mat-sort-header",
        "(click)": "_handleClick()",
        "(keydown)": "_handleKeydown($event)",
        "(mouseenter)": "_setIndicatorHintVisible(true)",
        "(mouseleave)": "_setIndicatorHintVisible(false)",
        "[attr.aria-sort]": "_getAriaSortAttribute()",
        "[class.mat-sort-header-disabled]": "_isDisabled()"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      standalone: true,
      template: '<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button\'s `aria-label`\n  will be read out as the user is navigating the table\'s cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class="mat-sort-header-container mat-focus-indicator"\n     [class.mat-sort-header-sorted]="_isSorted()"\n     [class.mat-sort-header-position-before]="arrowPosition === \'before\'"\n     [attr.tabindex]="_isDisabled() ? null : 0"\n     [attr.role]="_isDisabled() ? null : \'button\'">\n\n  <!--\n    TODO(crisbeto): this div isn\'t strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn\'t visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class="mat-sort-header-content">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  @if (_renderArrow()) {\n    <div class="mat-sort-header-arrow"\n        [@arrowOpacity]="_getArrowViewState()"\n        [@arrowPosition]="_getArrowViewState()"\n        [@allowChildren]="_getArrowDirectionState()"\n        (@arrowPosition.start)="_disableViewStateAnimation = true"\n        (@arrowPosition.done)="_disableViewStateAnimation = false">\n      <div class="mat-sort-header-stem"></div>\n      <div class="mat-sort-header-indicator" [@indicator]="_getArrowDirectionState()">\n        <div class="mat-sort-header-pointer-left" [@leftPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-right" [@rightPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-middle"></div>\n      </div>\n    </div>\n  }\n</div>\n',
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color, var(--mat-app-on-surface));opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"]
    }]
  }], () => [{
    type: MatSortHeaderIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: MatSort,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: ["MAT_SORT_HEADER_COLUMN_DEF"]
    }, {
      type: Optional
    }]
  }, {
    type: FocusMonitor
  }, {
    type: ElementRef
  }, {
    type: AriaDescriber,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    id: [{
      type: Input,
      args: ["mat-sort-header"]
    }],
    arrowPosition: [{
      type: Input
    }],
    start: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sortActionDescription: [{
      type: Input
    }],
    disableClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatSortModule = class _MatSortModule {
  static {
    this.\u0275fac = function MatSortModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatSortModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatSortModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MAT_SORT_HEADER_INTL_PROVIDER],
      imports: [MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatSort, MatSortHeader],
      exports: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }], null, null);
})();

// src/app/features/documents/document-list/document-list.component.ts
var _c02 = () => [10, 25, 50];
var _c12 = (a0) => ["/documents", a0];
var _c2 = () => ["/workflow"];
function DocumentListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function DocumentListComponent_Conditional_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "clear");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Clear ");
    \u0275\u0275elementEnd();
  }
}
function DocumentListComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "mat-spinner", 21);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading documents...");
    \u0275\u0275elementEnd()();
  }
}
function DocumentListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon", 22);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No documents found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Upload your first document to get started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3)(8, "mat-icon");
    \u0275\u0275text(9, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Upload Document ");
    \u0275\u0275elementEnd()();
  }
}
function DocumentListComponent_Conditional_37_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Title");
    \u0275\u0275elementEnd();
  }
}
function DocumentListComponent_Conditional_37_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "div", 35)(2, "div", 36)(3, "mat-icon");
    \u0275\u0275text(4, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 37)(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 39);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const doc_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r1.getTypeColor(doc_r4.mimeType));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c12, doc_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.docService.formatMimeType(doc_r4.mimeType), " \uFFFD ", ctx_r1.docService.formatFileSize(doc_r4.fileSizeBytes), " ");
  }
}
function DocumentListComponent_Conditional_37_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function DocumentListComponent_Conditional_37_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getStatusColor(doc_r5.status) + "20")("color", ctx_r1.getStatusColor(doc_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getStatusLabel(doc_r5.status), " ");
  }
}
function DocumentListComponent_Conditional_37_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Uploaded");
    \u0275\u0275elementEnd();
  }
}
function DocumentListComponent_Conditional_37_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, doc_r6.createdAt, "dd MMM yyyy"), " ");
  }
}
function DocumentListComponent_Conditional_37_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 33);
  }
}
function DocumentListComponent_Conditional_37_td_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function DocumentListComponent_Conditional_37_td_13_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const doc_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveDocument(doc_r8));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "archive");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Archive ");
    \u0275\u0275elementEnd();
  }
}
function DocumentListComponent_Conditional_37_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34)(1, "button", 42)(2, "mat-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 0)(6, "button", 43)(7, "mat-icon");
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 43)(11, "mat-icon");
    \u0275\u0275text(12, "account_tree");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " View Workflow ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DocumentListComponent_Conditional_37_td_13_Conditional_14_Template, 4, 0, "button", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r8 = ctx.$implicit;
    const docMenu_r9 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", docMenu_r9);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c12, doc_r8.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c2));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(doc_r8.status !== "Archived" ? 14 : -1);
  }
}
function DocumentListComponent_Conditional_37_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 46);
  }
}
function DocumentListComponent_Conditional_37_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 47);
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c12, row_r10.id));
  }
}
function DocumentListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "table", 23);
    \u0275\u0275elementContainerStart(2, 24);
    \u0275\u0275template(3, DocumentListComponent_Conditional_37_th_3_Template, 2, 0, "th", 25)(4, DocumentListComponent_Conditional_37_td_4_Template, 10, 8, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 27);
    \u0275\u0275template(6, DocumentListComponent_Conditional_37_th_6_Template, 2, 0, "th", 25)(7, DocumentListComponent_Conditional_37_td_7_Template, 3, 5, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 28);
    \u0275\u0275template(9, DocumentListComponent_Conditional_37_th_9_Template, 2, 0, "th", 25)(10, DocumentListComponent_Conditional_37_td_10_Template, 4, 4, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 29);
    \u0275\u0275template(12, DocumentListComponent_Conditional_37_th_12_Template, 1, 0, "th", 25)(13, DocumentListComponent_Conditional_37_td_13_Template, 15, 7, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(14, DocumentListComponent_Conditional_37_tr_14_Template, 1, 0, "tr", 30)(15, DocumentListComponent_Conditional_37_tr_15_Template, 1, 3, "tr", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-paginator", 32);
    \u0275\u0275listener("page", function DocumentListComponent_Conditional_37_Template_mat_paginator_page_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.documents());
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r1.totalCount())("pageSize", ctx_r1.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(7, _c02))("pageIndex", ctx_r1.currentPage() - 1);
  }
}
var DocumentListComponent = class _DocumentListComponent {
  docService = inject(DocumentService);
  snackBar = inject(MatSnackBar);
  displayedColumns = ["title", "status", "createdAt", "actions"];
  documents = signal([]);
  totalCount = signal(0);
  currentPage = signal(1);
  isLoading = signal(false);
  pageSize = 10;
  searchTerm = "";
  selectedStatus = "";
  searchSubject = new Subject();
  ngOnInit() {
    this.searchSubject.pipe(debounceTime(400), distinctUntilChanged()).subscribe(() => {
      this.currentPage.set(1);
      this.loadDocuments();
    });
    this.loadDocuments();
  }
  loadDocuments() {
    this.isLoading.set(true);
    const filter = {
      page: this.currentPage(),
      pageSize: this.pageSize,
      status: this.selectedStatus || void 0,
      search: this.searchTerm || void 0
    };
    this.docService.getDocuments(filter).subscribe({
      next: (response) => {
        this.documents.set(response.items ?? []);
        this.totalCount.set(response.totalCount ?? 0);
        this.isLoading.set(false);
      },
      error: () => {
        this.documents.set([]);
        this.totalCount.set(0);
        this.isLoading.set(false);
      }
    });
  }
  onSearchChange(term) {
    this.searchSubject.next(term);
  }
  onStatusChange(status) {
    this.currentPage.set(1);
    this.loadDocuments();
  }
  onPageChange(event) {
    this.currentPage.set(event.pageIndex + 1);
    this.pageSize = event.pageSize;
    this.loadDocuments();
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedStatus = "";
    this.currentPage.set(1);
    this.loadDocuments();
  }
  archiveDocument(doc) {
    this.docService.archiveDocument(doc.id).subscribe({
      next: () => {
        this.snackBar.open(`"${doc.title}" archived`, "Close", { duration: 3e3 });
        this.loadDocuments();
      },
      error: () => {
        this.snackBar.open("Failed to archive document", "Close", { duration: 3e3 });
      }
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
  static \u0275fac = function DocumentListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentListComponent, selectors: [["app-document-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 6, consts: [["docMenu", "matMenu"], [1, "page-container"], [1, "page-header"], ["mat-raised-button", "", "color", "primary", "routerLink", "/documents/upload"], [1, "filters-row"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Search by title...", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["appearance", "outline", 1, "status-field"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Draft"], ["value", "UnderReview"], ["value", "Approved"], ["value", "Rejected"], ["value", "Archived"], ["mat-stroked-button", ""], [1, "loading-container"], [1, "empty-state"], [1, "table-container"], ["mat-stroked-button", "", 3, "click"], ["diameter", "40"], [1, "empty-icon"], ["mat-table", "", 1, "documents-table", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "table-row", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions", "pageIndex"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "doc-title-cell"], [1, "doc-icon"], [1, "doc-info"], [1, "doc-title", 3, "routerLink"], [1, "doc-type"], [1, "status-chip"], [1, "date-text"], ["mat-icon-button", "", "matTooltip", "Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "table-row", 3, "routerLink"]], template: function DocumentListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1");
      \u0275\u0275text(4, "Documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Manage and track all your documents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3)(8, "mat-icon");
      \u0275\u0275text(9, "upload_file");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Upload Document ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 4)(12, "mat-form-field", 5)(13, "mat-label");
      \u0275\u0275text(14, "Search documents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentListComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DocumentListComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "mat-icon", 7);
      \u0275\u0275text(17, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "mat-form-field", 8)(19, "mat-label");
      \u0275\u0275text(20, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function DocumentListComponent_Template_mat_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedStatus, $event) || (ctx.selectedStatus = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function DocumentListComponent_Template_mat_select_ngModelChange_21_listener($event) {
        return ctx.onStatusChange($event);
      });
      \u0275\u0275elementStart(22, "mat-option", 10);
      \u0275\u0275text(23, "All Statuses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "mat-option", 11);
      \u0275\u0275text(25, "Draft");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-option", 12);
      \u0275\u0275text(27, "Under Review");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-option", 13);
      \u0275\u0275text(29, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-option", 14);
      \u0275\u0275text(31, "Rejected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-option", 15);
      \u0275\u0275text(33, "Archived");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(34, DocumentListComponent_Conditional_34_Template, 4, 0, "button", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, DocumentListComponent_Conditional_35_Template, 4, 0, "div", 17)(36, DocumentListComponent_Conditional_36_Template, 11, 0, "div", 18)(37, DocumentListComponent_Conditional_37_Template, 17, 8, "div", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedStatus);
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.selectedStatus || ctx.searchTerm ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.documents().length === 0 ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isLoading() && ctx.documents().length > 0 ? 37 : -1);
    }
  }, dependencies: [
    CommonModule,
    DatePipe,
    RouterLink,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
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
    MatPaginatorModule,
    MatPaginator,
    MatSortModule,
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
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatTooltipModule,
    MatTooltip,
    MatSnackBarModule
  ], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1E293B;\n  margin: 0 0 4px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n  font-size: 14px;\n}\n.page-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.search-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.status-field[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  gap: 16px;\n  color: #64748B;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px;\n  gap: 12px;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #CBD5E1;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #1E293B;\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748B;\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n.documents-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.doc-title-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n}\n.doc-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.doc-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: white;\n}\n.doc-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.doc-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1E293B;\n  cursor: pointer;\n}\n.doc-title[_ngcontent-%COMP%]:hover {\n  color: #2563EB;\n}\n.doc-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94A3B8;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.date-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748B;\n}\n.table-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748B;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n/*# sourceMappingURL=document-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentListComponent, { className: "DocumentListComponent", filePath: "src\\app\\features\\documents\\document-list\\document-list.component.ts", lineNumber: 389 });
})();
export {
  DocumentListComponent
};
//# sourceMappingURL=chunk-SU34R5HX.js.map

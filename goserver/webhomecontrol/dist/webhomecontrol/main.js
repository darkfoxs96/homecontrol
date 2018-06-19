(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modal_login_user\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal_login_user_label\" aria-hidden=\"true\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modal_login_user_label\">{{ t.T('Login') }}</h5>\n      </div>\n      <div class=\"modal-body\">\n\n        <form action=\"javascript:void(null);\">\n\n          <div class=\"input-group mb-1\">\n            <input id=\"login_password_user\" style=\"max-width: 400px\" type=\"password\" autocomplete=\"password\" class=\"form-control form_luminescence mt-2\" placeholder=\"{{ t.T('Password') }}\">\n          </div>\n\n        </form>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"login()\">{{ t.T('Login') }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form_luminescence:focus {\n  border-color: rgba(18, 55, 96, 0.8);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(26, 79, 137, 0.6);\n  outline: 0 none; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_load_array_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/load-array.service */ "./src/app/services/load-array.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(t, user, loadArray) {
        this.t = t;
        this.user = user;
        this.loadArray = loadArray;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user.getSMTPServer().subscribe(function () { }, function (err) {
            if (err.status == 401) {
                $('#modal_login_user').modal('show');
            }
        });
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        var password = document.getElementById('login_password_user').value;
        this.user.login(password).subscribe(function () {
            _this.loadArray.getStore().load_array();
            $('#modal_login_user').modal('hide');
        }, function (err) {
            alert(err.error);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_load_array_service__WEBPACK_IMPORTED_MODULE_3__["LoadArrayService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _services_command_record_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/command-record.service */ "./src/app/services/command-record.service.ts");
/* harmony import */ var _services_command_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/command.service */ "./src/app/services/command.service.ts");
/* harmony import */ var _services_controlled_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/controlled.service */ "./src/app/services/controlled.service.ts");
/* harmony import */ var _services_use_control_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/use-control.service */ "./src/app/services/use-control.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_sound_parsing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/sound-parsing.service */ "./src/app/services/sound-parsing.service.ts");
/* harmony import */ var _services_bot_messenger_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/bot-messenger.service */ "./src/app/services/bot-messenger.service.ts");
/* harmony import */ var _services_t_p_home_control_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/t-p-home-control.service */ "./src/app/services/t-p-home-control.service.ts");
/* harmony import */ var _services_load_array_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/load-array.service */ "./src/app/services/load-array.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_control_control_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/control/control.component */ "./src/app/components/control/control.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_commands_commands_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/commands/commands.component */ "./src/app/components/commands/commands.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_control_remote_controller_remote_controller_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/control/remote-controller/remote-controller.component */ "./src/app/components/control/remote-controller/remote-controller.component.ts");
/* harmony import */ var _components_settings_settings_home_settings_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/settings/settings-home/settings-home.component */ "./src/app/components/settings/settings-home/settings-home.component.ts");
/* harmony import */ var _components_settings_settings_email_settings_email_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/settings/settings-email/settings-email.component */ "./src/app/components/settings/settings-email/settings-email.component.ts");
/* harmony import */ var _components_settings_settings_interfaces_settings_interfaces_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/settings/settings-interfaces/settings-interfaces.component */ "./src/app/components/settings/settings-interfaces/settings-interfaces.component.ts");
/* harmony import */ var _components_settings_settings_controlleds_settings_controlleds_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/settings/settings-controlleds/settings-controlleds.component */ "./src/app/components/settings/settings-controlleds/settings-controlleds.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Redux


// Services:










// Components:










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"],
                _components_commands_commands_component__WEBPACK_IMPORTED_MODULE_18__["CommandsComponent"],
                _components_control_control_component__WEBPACK_IMPORTED_MODULE_16__["ControlComponent"],
                _components_control_remote_controller_remote_controller_component__WEBPACK_IMPORTED_MODULE_20__["RemoteControllerComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_17__["SettingsComponent"],
                _components_settings_settings_home_settings_home_component__WEBPACK_IMPORTED_MODULE_21__["SettingsHomeComponent"],
                _components_settings_settings_email_settings_email_component__WEBPACK_IMPORTED_MODULE_22__["SettingsEmailComponent"],
                _components_settings_settings_interfaces_settings_interfaces_component__WEBPACK_IMPORTED_MODULE_23__["SettingsInterfacesComponent"],
                _components_settings_settings_controlleds_settings_controlleds_component__WEBPACK_IMPORTED_MODULE_24__["SettingsControlledsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_4__["Reducers"], {}),
            ],
            providers: [
                _services_lang_service__WEBPACK_IMPORTED_MODULE_5__["LangService"],
                _services_command_record_service__WEBPACK_IMPORTED_MODULE_6__["CommandRecordService"],
                _services_command_service__WEBPACK_IMPORTED_MODULE_7__["CommandService"],
                _services_controlled_service__WEBPACK_IMPORTED_MODULE_8__["ControlledService"],
                _services_use_control_service__WEBPACK_IMPORTED_MODULE_9__["UseControlService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _services_sound_parsing_service__WEBPACK_IMPORTED_MODULE_11__["SoundParsingService"],
                _services_bot_messenger_service__WEBPACK_IMPORTED_MODULE_12__["BotMessengerService"],
                _services_t_p_home_control_service__WEBPACK_IMPORTED_MODULE_13__["TPHomeControlService"],
                _services_load_array_service__WEBPACK_IMPORTED_MODULE_14__["LoadArrayService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/commands/commands.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/commands/commands.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-center\"\n     style=\"border-bottom: 1px solid #1b1e21\">\n  <a class=\"nav-item nav-link badge-light\"\n     href=\"javascript:void(null);\">\n    <a aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#modal_add_command\">\n      <a class=\"navbar_visible_text\">{{ t.T('Add command') }} </a>\n      <i class=\"fa fa-plus-square fa-lg\"></i>\n    </a>\n    <span class=\"sr-only\">(current)</span>\n  </a>\n</nav>\n\n<div (window:resize)=\"onResize($event)\"></div>\n\n<div [class.col-10]=\"table_p\"\n     [class.element_center_col]=\"table_p\">\n  <table class=\"table table-hover table-text-size mt-2\"\n         [class.table-sm]=\"table_sm\"\n         >\n    <thead class=\"thead-light\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">{{ t.T('Name') }}</th>\n        <th scope=\"col\">{{ t.T('Command') }}</th>\n        <th scope=\"col\">{{ t.T('Auxiliary command') }}</th>\n        <th scope=\"col\">{{ t.T('Controlled?') }}</th>\n        <th scope=\"col\"> </th>\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let record of listRecord; let i = index\"\n          class=\"table-row\" [class.table-primary]=\"record.is_controlled\" id=\"list_command_row_{{ record.id }}\">\n        <th scope=\"row\">{{ i + 1 }}</th>\n        <td>{{ record.id }}</td>\n        <td>{{ record.command }}</td>\n        <td>{{ record.string_command }}</td>\n        <td>{{ record.controlled }}</td>\n        <td><a href=\"javascript:void(null);\" class=\"table-icon-size\" style=\"color: #1d2124\">\n            <i class=\"fa fa-trash fa-lg\" aria-hidden=\"true\" (click)=\"deleteCommand(record.id)\"></i>\n            </a></td>\n      </tr>\n\n    </tbody>\n  </table>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modal_add_command\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal_add_command_label\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modal_add_command_label\">{{ t.T('Add command') }}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <!-- Example single button -->\n        <div class=\"btn-group mt-1\">\n          <button type=\"button\" id=\"type_command_button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{ t.T('Add command') }}\n          </button>\n          <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\" href=\"javascript:void(null);\" (click)=\"typeCommandControlButton('command', t.T('Add command'))\">{{ t.T('Add command') }}</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(null);\" (click)=\"typeCommandControlButton('callsign', t.T('Add callsign'))\">{{ t.T('Add callsign') }}</a>\n          </div>\n        </div>\n\n        <div *ngIf=\"visibl_add_command\">\n\n          <!-- Example single button -->\n          <div class=\"btn-group mt-2\">\n            <button type=\"button\" id=\"name_interface_for_command\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{ t.T('Controlled') }}\n            </button>\n            <div class=\"dropdown-menu\">\n\n              <a *ngFor=\"let name_inteface of list_inteface\" class=\"dropdown-item\" href=\"javascript:void(null);\"\n                 (click)=\"goSelectInterface(name_inteface)\">{{ name_inteface }}</a>\n\n            </div>\n          </div><br>\n\n          <div class=\"btn-group mt-2\">\n            <button type=\"button\" id=\"select_id_command_button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{ t.T('Command') }}\n            </button>\n            <div class=\"dropdown-menu\">\n\n              <a *ngFor=\"let command of map_command_info[select_interface]\" class=\"dropdown-item\" href=\"javascript:void(null);\"\n                 (click)=\"goSelectCommandID(command.id, command.info_command)\">{{ command.info_command }}</a>\n\n            </div>\n          </div><br>\n\n          <form action=\"javascript:void(null);\" class=\"mt-2\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control form_luminescence\" id=\"add_command_string_input\" name=\"buffer\" placeholder=\"{{ t.T('Text to the command') }}\">\n            </div>\n          </form>\n\n        </div>\n\n        <div *ngIf=\"visibl_add_callsign\">\n          <div class=\"btn-group mt-2\">\n            <button type=\"button\" id=\"select_id_controlled_button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{ t.T('Name') }}\n            </button>\n            <div class=\"dropdown-menu\">\n\n              <a *ngFor=\"let controlled of list_controlled\" class=\"dropdown-item\" href=\"javascript:void(null);\"\n                 (click)=\"goSelectControlledID(controlled.id, controlled.name)\">{{ controlled.name }} id: {{ controlled.id }}</a>\n\n            </div>\n          </div><br>\n          <p class=\"mt-1\">{{ t.T('No more than one word') }}</p>\n        </div>\n\n        <form action=\"javascript:void(null);\" class=\"mt-2\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control form_luminescence\" id=\"add_command_name_input\" name=\"buffer\" placeholder=\"{{ t.T('Command') }}\">\n          </div>\n        </form>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">{{ t.T('Close') }}</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"addCommand()\">{{ t.T('Save') }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/commands/commands.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/commands/commands.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 500px) {\n  .navbar_visible_text {\n    display: none; } }\n\n.navbar_bg_color_use_item {\n  background-color: #e0e6eb; }\n\n@media (max-width: 500px) {\n  .table-text-size {\n    font-size: 10px; }\n  .table-icon-size {\n    font-size: 14px; }\n  .add_command_icon {\n    font-size: 12px; } }\n\n.element_center_col {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.add_command:hover {\n  cursor: pointer; }\n\n.add_command:active {\n  -webkit-transform: scale(0.95, 0.95);\n          transform: scale(0.95, 0.95); }\n\n.form_luminescence:focus {\n  border-color: rgba(18, 55, 96, 0.8);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(26, 79, 137, 0.6);\n  outline: 0 none; }\n"

/***/ }),

/***/ "./src/app/components/commands/commands.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/commands/commands.component.ts ***!
  \***********************************************************/
/*! exports provided: CommandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandsComponent", function() { return CommandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _services_command_record_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/command-record.service */ "./src/app/services/command-record.service.ts");
/* harmony import */ var _services_controlled_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/controlled.service */ "./src/app/services/controlled.service.ts");
/* harmony import */ var _services_load_array_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/load-array.service */ "./src/app/services/load-array.service.ts");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/appActions */ "./src/app/store/actions/appActions.ts");
/* harmony import */ var _models_command_record_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/command-record.model */ "./src/app/models/command-record.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommandsComponent = /** @class */ (function () {
    function CommandsComponent(t, storeArray, commandRecord, controlled) {
        var _this = this;
        this.t = t;
        this.storeArray = storeArray;
        this.commandRecord = commandRecord;
        this.controlled = controlled;
        this.listRecord = [];
        // Add command
        this.visibl_add_command = true;
        this.command_id = 0;
        this.list_inteface = [];
        this.select_interface = '';
        this.map_command_info = (_a = {}, _a[''] = [], _a);
        this.visibl_add_callsign = false;
        this.select_controlled_id = 0;
        // Table
        this.table_sm = false;
        this.table_p = false;
        this.map_command_record = (_b = {}, _b[''] = new _models_command_record_model__WEBPACK_IMPORTED_MODULE_6__["CommandRecord"](), _b);
        this.list_commands = [];
        this.list_controlled = [];
        this.list_command_record = [];
        this.storeArray.getStore().listener_store.subscribe(function (data) {
            if (data.type == _store_actions_appActions__WEBPACK_IMPORTED_MODULE_5__["GO_RELOAD_ARRAY"]) {
                return;
            }
            _this.list_commands = data.list_commands;
            _this.list_controlled = data.list_controlled;
            _this.list_command_record = data.list_command_record;
            _this.createListRecord();
        });
        var _a, _b;
    }
    CommandsComponent.prototype.ngOnInit = function () {
        this.storeArray.getStore().load_array();
        var w = window.innerWidth;
        if (w < 700) {
            this.table_sm = true;
        }
        else {
            this.table_sm = false;
        }
        if (w > 1000) {
            this.table_p = true;
        }
        else {
            this.table_p = false;
        }
    };
    // createListRecord
    CommandsComponent.prototype.createListRecord = function () {
        var _this = this;
        var list_create_record = [];
        this.list_command_record.forEach(function (command_record) {
            _this.map_command_record[command_record.id] = command_record;
        });
        this.list_command_record.forEach(function (command_record) {
            var command = '';
            var string_command = '';
            var controlled = '';
            var is_controlled = false;
            if (command_record.controlled_id == 0) {
                command = _this.getNameCommand(command_record.command);
                string_command = command_record.string_command;
            }
            else {
                controlled = _this.getNameControlled(command_record.controlled_id);
                is_controlled = true;
            }
            list_create_record.push({
                id: command_record.id,
                command: command,
                string_command: string_command,
                controlled: controlled,
                is_controlled: is_controlled,
            });
        });
        this.listRecord = list_create_record;
        //Create list for add command
        this.createListNameInterface();
    };
    CommandsComponent.prototype.getNameCommand = function (command_id) {
        var command_name = 'id: ' + command_id;
        var first_name = command_name;
        this.list_commands.forEach(function (commands) {
            commands.commands.forEach(function (command) {
                if (command.id == command_id) {
                    command_name = command.info_command;
                    return;
                }
            });
            if (first_name != command_name)
                return;
        });
        return command_name;
    };
    CommandsComponent.prototype.getNameControlled = function (controlled_id) {
        var controlled_name = 'id: ' + controlled_id;
        this.list_controlled.forEach(function (controlled) {
            if (controlled.id == controlled_id) {
                controlled_name = controlled.name;
                return;
            }
        });
        return controlled_name;
    };
    CommandsComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 700) {
            this.table_sm = true;
        }
        else {
            this.table_sm = false;
        }
        if (event.target.innerWidth > 1000) {
            this.table_p = true;
        }
        else {
            this.table_p = false;
        }
    };
    CommandsComponent.prototype.deleteCommand = function (command_id) {
        this.commandRecord.deleteCommandRecord(command_id).subscribe(function (data) {
            var element = document.getElementById('list_command_row_' + command_id);
            element.parentNode.removeChild(element);
        }, function (err) {
            alert(err.error);
        });
    };
    // Add command
    CommandsComponent.prototype.createListNameInterface = function () {
        var _this = this;
        var list_create_inteface = [];
        this.list_controlled.forEach(function (controlled) {
            if (controlled.home_control_id != '') {
                list_create_inteface.push(controlled.home_control_id);
            }
        });
        list_create_inteface.push('controlled');
        this.list_commands.forEach(function (commands) {
            _this.map_command_info[commands.name_interface] = commands.commands;
        });
        this.list_inteface = list_create_inteface;
    };
    CommandsComponent.prototype.typeCommandControlButton = function (type, name) {
        switch (type) {
            case 'command':
                this.visibl_add_command = true;
                this.visibl_add_callsign = false;
                break;
            case 'callsign':
                this.visibl_add_command = false;
                this.visibl_add_callsign = true;
                break;
        }
        document.getElementById('type_command_button').innerHTML = name;
    };
    CommandsComponent.prototype.goSelectInterface = function (name) {
        this.select_interface = name;
        document.getElementById('name_interface_for_command').innerHTML = name;
    };
    CommandsComponent.prototype.goSelectCommandID = function (command_id, command_info) {
        this.command_id = command_id;
        document.getElementById('select_id_command_button').innerHTML = command_info;
    };
    CommandsComponent.prototype.goSelectControlledID = function (controlled_id, controlled_name) {
        this.select_controlled_id = controlled_id;
        document.getElementById('select_id_controlled_button').innerHTML = controlled_name;
    };
    CommandsComponent.prototype.addCommand = function () {
        var _this = this;
        var id = document.getElementById('add_command_name_input').value;
        if (id == '') {
            alert(this.t.T('Empty command'));
            return;
        }
        if (this.visibl_add_command) {
            this.commandRecord.addOrUpdateCommandRecord({
                id: id,
                type_record: 2,
                command: this.command_id,
                string_command: document.getElementById('add_command_string_input').value,
                number_of_words: 0,
                controlled_id: 0,
            }).subscribe(function (data) {
                $('#modal_add_command').modal('hide');
                _this.listRecord.push({
                    id: id,
                    command: _this.getNameCommand(_this.command_id),
                    string_command: document.getElementById('add_command_string_input').value,
                    controlled: '',
                    is_controlled: false,
                });
                _this.storeArray.getStore().load_array();
            }, function (err) {
                alert(err.error);
            });
        }
        if (this.visibl_add_callsign) {
            var array_id = id.split(" ");
            if (array_id.length > 1) {
                alert(this.t.T('No more than one word'));
                return;
            }
            this.commandRecord.addOrUpdateCommandRecord({
                id: id,
                type_record: 1,
                command: 0,
                string_command: '',
                number_of_words: 0,
                controlled_id: this.select_controlled_id,
            }).subscribe(function (data) {
                $('#modal_add_command').modal('hide');
                _this.listRecord.push({
                    id: id,
                    command: '',
                    string_command: '',
                    controlled: _this.getNameControlled(_this.select_controlled_id),
                    is_controlled: true,
                });
                _this.storeArray.getStore().load_array();
            }, function (err) {
                alert(err.error);
            });
        }
    };
    CommandsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commands',
            template: __webpack_require__(/*! ./commands.component.html */ "./src/app/components/commands/commands.component.html"),
            styles: [__webpack_require__(/*! ./commands.component.scss */ "./src/app/components/commands/commands.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"],
            _services_load_array_service__WEBPACK_IMPORTED_MODULE_4__["LoadArrayService"],
            _services_command_record_service__WEBPACK_IMPORTED_MODULE_2__["CommandRecordService"],
            _services_controlled_service__WEBPACK_IMPORTED_MODULE_3__["ControlledService"]])
    ], CommandsComponent);
    return CommandsComponent;
}());



/***/ }),

/***/ "./src/app/components/control/control.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/control/control.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".element_center_col {\n  display: block;\n  margin-left: auto;\n  margin-right: auto\n}\n\n.microphone {\n  background-color: white;\n  color: #b9bbbe;\n  outline: none;\n  border: 5px solid black;\n  border-radius: 45px;\n}\n\n.microphone:hover {\n  cursor: pointer;\n}\n\n.active {\n  color: #123760;\n  box-shadow: 0 0 10px #1a4f89;\n  -webkit-transform: scale(1.07, 1.07);\n          transform: scale(1.07, 1.07);\n}\n\n.form_luminescence:focus {\n  border-color: rgba(18, 55, 96, 0.8);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(26, 79, 137, 0.6);\n  outline: 0 none;\n}\n\n@media (max-width: 500px) {\n  .navbar_visible_text {\n    display: none;\n  }\n}\n\n.navbar_bg_color_use_item {\n  background-color: #e0e6eb;\n}\n"

/***/ }),

/***/ "./src/app/components/control/control.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/control/control.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-center\"\n     style=\"border-bottom: 1px solid #1b1e21\">\n  <a class=\"nav-item nav-link badge-light\"\n     href=\"javascript:void(null);\">\n    <a onclick=\"recordingLoadRecording()\">\n      <a class=\"navbar_visible_text\">{{ t.T('Reload microphone') }} </a>\n      <i class=\"fa fa-refresh fa-lg\" aria-hidden=\"true\"></i>\n    </a>\n    <span class=\"sr-only\">(current)</span>\n  </a>\n</nav>\n\n<div class=\"container-fluid mt-3\">\n  <div class=\"row\">\n    <div class=\"col-12 mt-3\">\n      <button onclick=\"recordingGoControl()\" (click)=\"usedMicrophone()\" class=\"element_center_col microphone\"\n      [class.active]=\"use_microphone\">\n        <i class=\"fa fa-microphone fa-5x\" aria-hidden=\"true\" style=\"font-size: 140px\"></i>\n      </button>\n    </div>\n\n    <div class=\"col-12 mt-3 mb-1\">\n      <form action=\"javascript:void(null);\" id=\"recording_use_command_form\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control form_luminescence\" id=\"recording_string_command_input\" name=\"buffer\" placeholder=\"{{ t.T('Text to the command') }}\">\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<app-remote-controller></app-remote-controller>\n"

/***/ }),

/***/ "./src/app/components/control/control.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/control/control.component.ts ***!
  \*********************************************************/
/*! exports provided: ControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlComponent", function() { return ControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/lang.service */ "./src/app/services/lang.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlComponent = /** @class */ (function () {
    function ControlComponent(t) {
        this.t = t;
        this.use_microphone = false;
        this.audio = new Audio();
    }
    ControlComponent.prototype.ngOnInit = function () {
        this.audio.src = "../../../assets/sound/record.mp3";
        this.audio.load();
    };
    ControlComponent.prototype.usedMicrophone = function () {
        var _this = this;
        if (!this.use_microphone) {
            this.audio.play();
            setTimeout(function () {
                _this.use_microphone = !_this.use_microphone;
            }, 300);
        }
        else {
            this.use_microphone = !this.use_microphone;
        }
    };
    ControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control',
            template: __webpack_require__(/*! ./control.component.html */ "./src/app/components/control/control.component.html"),
            styles: [__webpack_require__(/*! ./control.component.css */ "./src/app/components/control/control.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"]])
    ], ControlComponent);
    return ControlComponent;
}());



/***/ }),

/***/ "./src/app/components/control/remote-controller/remote-controller.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/control/remote-controller/remote-controller.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn_remote_controller {\n  min-width: 155px;\n  min-height: 50px;\n  background-color: #5c5d5f;\n  color: #dbdbdb;\n}\n\n.btn_remote_controller:active {\n  -webkit-transform: scale(0.95, 0.95);\n          transform: scale(0.95, 0.95);\n}\n\n@media (max-width: 799px) and (min-width: 453px) {\n  .btn_remote_controller {\n    font-size: 14px;\n    min-width: 150px;\n    min-height: 40px;\n  }\n}\n\n@media (max-width: 452px) {\n  .btn_remote_controller {\n    font-size: 11px;\n    min-width: 120px;\n    min-height: 35px;\n  }\n}\n\n.element_center_col {\n  display: block;\n  margin-left: auto;\n  margin-right: auto\n}\n"

/***/ }),

/***/ "./src/app/components/control/remote-controller/remote-controller.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/control/remote-controller/remote-controller.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light\" id=\"remote_controller_header\"\n     style=\"border-bottom: 1px solid #1b1e21; border-top: 1px solid #1b1e21\">\n  <div class=\"row justify-content-center align-items-center\">\n\n      <div *ngFor=\"let command_list of ListCommand\"\n           class=\"col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 mt-1 mb-1\">\n        <button class=\"btn btn-light btn_remote_controller element_center_col remote_controller_accordion\"\n                data-toggle=\"collapse\" role=\"button\" (click)=\"audio.play(); goScroll();\"\n                aria-expanded=\"false\" name=\"remote_controller_{{ command_list.id_command_record_controlled }}\">\n                {{ command_list.id_command_record_controlled }}</button>\n      </div>\n\n  </div>\n</div>\n\n<div id=\"remote_controller_button\">\n\n  <div *ngFor=\"let command_list of ListCommand\">\n    <div class=\"collapse multi-collapse\" id=\"remote_controller_{{ command_list.id_command_record_controlled }}\" data-parent=\"#remote_controller_button\">\n      <div class=\"card card-body\">\n        <div class=\"container-fluid mt-3\">\n          <div class=\"row justify-content-center align-items-center\">\n\n            <div *ngFor=\"let id_commands of command_list.list_id_command_record\" class=\"col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 mt-1\">\n              <button class=\"btn btn-light btn_remote_controller element_center_col\" (click)=\"goTextCommandToServer($event)\"\n                      name=\"{{ command_list.id_command_record_controlled }} {{ id_commands }}\">\n                      {{ id_commands }}</button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/control/remote-controller/remote-controller.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/control/remote-controller/remote-controller.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RemoteControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteControllerComponent", function() { return RemoteControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_command_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/command.service */ "./src/app/services/command.service.ts");
/* harmony import */ var _services_controlled_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/controlled.service */ "./src/app/services/controlled.service.ts");
/* harmony import */ var _services_command_record_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/command-record.service */ "./src/app/services/command-record.service.ts");
/* harmony import */ var _services_load_array_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/load-array.service */ "./src/app/services/load-array.service.ts");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/actions/appActions */ "./src/app/store/actions/appActions.ts");
/* harmony import */ var _models_controlled_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/controlled.model */ "./src/app/models/controlled.model.ts");
/* harmony import */ var _models_command_record_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/command-record.model */ "./src/app/models/command-record.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RemoteControllerComponent = /** @class */ (function () {
    function RemoteControllerComponent(storeArray, commandService, controlled, commandRecord) {
        var _this = this;
        this.storeArray = storeArray;
        this.commandService = commandService;
        this.controlled = controlled;
        this.commandRecord = commandRecord;
        this.audio = new Audio();
        this.ListCommand = [];
        this.list_commands = [];
        this.list_controlled = [];
        this.list_command_record = [];
        this.storeArray.getStore().listener_store.subscribe(function (data) {
            if (data.type == _store_actions_appActions__WEBPACK_IMPORTED_MODULE_5__["GO_RELOAD_ARRAY"]) {
                return;
            }
            _this.list_commands = data.list_commands;
            _this.list_controlled = data.list_controlled;
            _this.list_command_record = data.list_command_record;
            _this.createListCommand();
        });
        this.audio.src = "../../../assets/sound/click.mp3";
        this.audio.load();
    }
    RemoteControllerComponent.prototype.ngOnInit = function () {
        this.storeArray.getStore().load_array();
    };
    // createListCommand
    RemoteControllerComponent.prototype.createListCommand = function () {
        var _this = this;
        var ListCommand = [];
        this.list_command_record.forEach(function (command_record) {
            if (command_record.controlled_id != 0) {
                ListCommand.push({
                    id_command_record_controlled: command_record.id,
                    list_id_command_record: [],
                });
            }
        });
        var map_controlled = { 0: new _models_controlled_model__WEBPACK_IMPORTED_MODULE_6__["Controlled"]() };
        this.list_controlled.forEach(function (controlled) {
            map_controlled[controlled.id] = controlled;
        });
        var map_command = { '': new _models_command_record_model__WEBPACK_IMPORTED_MODULE_7__["CommandRecord"]() };
        this.list_command_record.forEach(function (command_record) {
            map_command[command_record.id] = command_record;
        });
        this.list_command_record.forEach(function (command_record) {
            if (command_record.controlled_id == 0) {
                if (_this.isCommandForControlled(command_record.command)) {
                    ListCommand.forEach(function (command, index) {
                        var id_thhomecontrol = map_controlled[map_command[command.id_command_record_controlled].controlled_id].home_control_id;
                        if (id_thhomecontrol == '') {
                            if (command_record.id.length > 15) {
                                ListCommand[index].list_id_command_record.push(command_record.id.slice(0, 15));
                            }
                            else {
                                ListCommand[index].list_id_command_record.push(command_record.id);
                            }
                        }
                    });
                }
                else {
                    var nameTPHomeControl_1 = _this.getNameTPHomeControl(command_record.command);
                    ListCommand.forEach(function (command, index) {
                        var name = map_controlled[map_command[command.id_command_record_controlled].controlled_id].home_control_id;
                        if (name == nameTPHomeControl_1) {
                            if (command_record.id.length > 15) {
                                ListCommand[index].list_id_command_record.push(command_record.id.slice(0, 15));
                            }
                            else {
                                ListCommand[index].list_id_command_record.push(command_record.id);
                            }
                        }
                    });
                }
            }
        });
        this.ListCommand = ListCommand;
        // add attribute
        this.setAttribute();
    };
    RemoteControllerComponent.prototype.isCommandForControlled = function (command) {
        var result = false;
        this.list_commands.forEach(function (commands) {
            if (commands.name_interface == 'controlled') {
                if (commands.start_range_id_commands <= command && commands.end_range_id_commands >= command) {
                    result = true;
                    return;
                }
                else {
                    result = false;
                    return;
                }
            }
        });
        return result;
    };
    RemoteControllerComponent.prototype.getNameTPHomeControl = function (command) {
        var name = '';
        this.list_commands.forEach(function (commands) {
            if (commands.start_range_id_commands <= command && commands.end_range_id_commands >= command) {
                name = commands.name_interface;
            }
        });
        return name;
    };
    // Add attribute
    RemoteControllerComponent.prototype.setAttribute = function () {
        var _this = this;
        var status = true;
        var result = document.getElementsByClassName("remote_controller_accordion");
        for (var i = 0; i < this.ListCommand.length; i++) {
            if (result.item(i) === null) {
                status = false;
                break;
            }
            var name_1 = result.item(i).getAttribute('name');
            result.item(i).setAttribute('href', '#' + name_1);
            result.item(i).setAttribute('aria-controls', name_1);
        }
        if (!status) {
            setTimeout(function () {
                _this.setAttribute();
            }, 150);
        }
    };
    // Go string command to server
    RemoteControllerComponent.prototype.goTextCommandToServer = function (button) {
        this.audio.play();
        var buffer = document.getElementById('recording_string_command_input').value;
        document.getElementById('recording_string_command_input').value = "";
        var command = button.target.getAttribute('name');
        this.commandRecord.useText(command, buffer).subscribe(function (data) { }, function (err) {
            alert(err.error);
        });
    };
    RemoteControllerComponent.prototype.goScroll = function () {
        setTimeout(function () {
            window.scrollTo(0, document.getElementById('remote_controller_header').offsetTop);
        }, 350);
    };
    RemoteControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remote-controller',
            template: __webpack_require__(/*! ./remote-controller.component.html */ "./src/app/components/control/remote-controller/remote-controller.component.html"),
            styles: [__webpack_require__(/*! ./remote-controller.component.css */ "./src/app/components/control/remote-controller/remote-controller.component.css")]
        }),
        __metadata("design:paramtypes", [_services_load_array_service__WEBPACK_IMPORTED_MODULE_4__["LoadArrayService"],
            _services_command_service__WEBPACK_IMPORTED_MODULE_1__["CommandService"],
            _services_controlled_service__WEBPACK_IMPORTED_MODULE_2__["ControlledService"],
            _services_command_record_service__WEBPACK_IMPORTED_MODULE_3__["CommandRecordService"]])
    ], RemoteControllerComponent);
    return RemoteControllerComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 500px) {\n  .navbar_visible_text {\n    display: none;\n  }\n}\n\n.navbar_bg_color_use_item {\n  background-color: #e0e6eb;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-center\"\n     style=\"border-bottom: 1px solid #1b1e21\">\n      <a class=\"nav-item nav-link badge-light\" [class.active]=\"visible_control\" [class.navbar_bg_color_use_item]=\"visible_control\"\n         href=\"javascript:void(null);\" (click)=\"visibleControl()\"\n         data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\"\n          href=\"#visible_control_accordion\" aria-controls=\"visible_control_accordion\">\n        <a class=\"navbar_visible_text\">{{ t.T('Control') }} </a>\n        <i class=\"fa fa-microphone fa-lg\" aria-hidden=\"true\"></i>\n        <span class=\"sr-only\">(current)</span>\n      </a>\n\n      <a class=\"nav-item nav-link badge-light\" [class.active]=\"visible_settings\" [class.navbar_bg_color_use_item]=\"visible_settings\"\n         href=\"javascript:void(null);\" (click)=\"visibleSettings()\"\n         data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\"\n         href=\"#visible_settings_accordion\" aria-controls=\"visible_settings_accordion\">\n        <a class=\"navbar_visible_text\">{{ t.T('Settings') }} </a>\n        <i class=\"fa fa-cog fa-lg\" aria-hidden=\"true\"></i>\n        <span class=\"sr-only\">(current)</span>\n      </a>\n\n      <a class=\"nav-item nav-link badge-light\" [class.active]=\"visible_commands\" [class.navbar_bg_color_use_item]=\"visible_commands\"\n         href=\"javascript:void(null);\" (click)=\"visibleCommands()\"\n         data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\"\n         href=\"#visible_commands_accordion\" aria-controls=\"visible_commands_accordion\">\n        <a class=\"navbar_visible_text\">{{ t.T('Commands') }} </a>\n        <i class=\"fa fa-list fa-lg\" aria-hidden=\"true\"></i>\n        <span class=\"sr-only\">(current)</span>\n      </a>\n</nav>\n\n<main>\n\n  <div id=\"navbar_accordion\">\n    <div class=\"collapse multi-collapse show\" id=\"visible_control_accordion\" data-parent=\"#navbar_accordion\">\n      <div class=\"card\">\n            <app-control  *ngIf=\"visible_control\"></app-control>\n      </div>\n    </div>\n\n    <div class=\"collapse multi-collapse\" id=\"visible_settings_accordion\" data-parent=\"#navbar_accordion\">\n      <div class=\"card\">\n            <app-settings *ngIf=\"visible_settings\"></app-settings>\n      </div>\n    </div>\n\n    <div class=\"collapse multi-collapse\" id=\"visible_commands_accordion\" data-parent=\"#navbar_accordion\">\n      <div class=\"card\">\n            <app-commands *ngIf=\"visible_commands\"></app-commands>\n      </div>\n    </div>\n  </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/lang.service */ "./src/app/services/lang.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(t) {
        this.t = t;
        this.visible_control = true;
        this.visible_settings = false;
        this.visible_commands = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.visibleControl = function () {
        this.visible_settings = false;
        this.visible_commands = false;
        this.visible_control = true;
    };
    NavbarComponent.prototype.visibleSettings = function () {
        this.visible_control = false;
        this.visible_commands = false;
        this.visible_settings = true;
    };
    NavbarComponent.prototype.visibleCommands = function () {
        this.visible_control = false;
        this.visible_settings = false;
        this.visible_commands = true;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings-controlleds/settings-controlleds.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/settings/settings-controlleds/settings-controlleds.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 500px) {\n  .navbar_visible_text {\n    display: none;\n  }\n}\n\n.navbar_bg_color_use_item {\n  background-color: #e0e6eb;\n}\n\n@media (max-width: 500px) {\n  .table-text-size {\n    font-size: 10px;\n  }\n  .table-icon-size {\n    font-size: 14px;\n  }\n  .add_command_icon {\n    font-size: 12px;\n  }\n}\n\n.element_center_col {\n  display: block;\n  margin-left: auto;\n  margin-right: auto\n}\n\n.add_command:hover {\n  cursor: pointer;\n}\n\n.add_command:active {\n  -webkit-transform: scale(0.95, 0.95);\n          transform: scale(0.95, 0.95);\n}\n\n.form_luminescence:focus {\n  border-color: rgba(18, 55, 96, 0.8);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(26, 79, 137, 0.6);\n  outline: 0 none; }\n"

/***/ }),

/***/ "./src/app/components/settings/settings-controlleds/settings-controlleds.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/settings/settings-controlleds/settings-controlleds.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-center\"\n     style=\"border-bottom: 1px solid #1b1e21\">\n  <a class=\"nav-item nav-link badge-light\"\n     href=\"javascript:void(null);\"\n     aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#modal_add_controlled\"\n     (click)=\"selectParam(0, '', '', '', 0, '')\">\n    <a>\n      <a class=\"navbar_visible_text\">{{ t.T('Add controlled') }} </a>\n      <i class=\"fa fa-plus-square fa-lg\"></i>\n    </a>\n    <span class=\"sr-only\">(current)</span>\n  </a>\n</nav>\n\n<div (window:resize)=\"onResize($event)\"></div>\n\n<div [class.col-10]=\"table_p\"\n     [class.element_center_col]=\"table_p\">\n  <table class=\"table table-hover table-text-size mt-2\"\n         [class.table-sm]=\"table_sm\"\n  >\n    <thead class=\"thead-light\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">{{ t.T('Name') }}</th>\n      <th scope=\"col\">Host</th>\n      <th scope=\"col\">Port</th>\n      <th scope=\"col\">{{ t.T('Common buffer') }}?</th>\n      <th scope=\"col\">{{ t.T('TPHC') }}?</th>\n      <th scope=\"col\"> </th>\n      <th scope=\"col\"> </th>\n    </tr>\n    </thead>\n    <tbody>\n\n    <tr *ngFor=\"let record of list_controlled; let i = index\"\n        class=\"table-row\" [class.table-primary]=\"record.home_control_id != ''\">\n      <th scope=\"row\">{{ i + 1 }}</th>\n      <td>{{ record.name }}</td>\n      <td>{{ record.host }}</td>\n      <td>{{ record.port }}</td>\n      <td>{{ record.common_buffer == 1 }}</td>\n      <td>{{ record.home_control_id }}</td>\n      <td><a href=\"javascript:void(null);\" class=\"table-icon-size\" style=\"color: #1d2124\"\n             aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#modal_add_controlled\">\n        <i class=\"fa fa-pencil fa-lg\" aria-hidden=\"true\"\n           (click)=\"selectParam(record.id, record.name, record.host, record.port, record.common_buffer, record.home_control_id)\"></i>\n      </a></td>\n      <td><a href=\"javascript:void(null);\" class=\"table-icon-size\" style=\"color: #1d2124\">\n        <i class=\"fa fa-trash fa-lg\" aria-hidden=\"true\" (click)=\"deleteControlled(record.id)\"></i>\n      </a></td>\n    </tr>\n\n    </tbody>\n  </table>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"modal_add_controlled\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal_add_controlled_label\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"modal_add_controlled_label\">{{ t.T('Add controlled') }}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <form action=\"javascript:void(null);\" style=\"border-bottom: 1px solid #d0cdd0\" name=\"form_add_or_edit_controlled\">\n\n          <div class=\"input-group\">\n            <input style=\"max-width: 400px\" type=\"text\" class=\"form-control form_luminescence\" name=\"name\" placeholder=\"{{ t.T('Name') }}\" [value]=\"controlled_name\">\n          </div>\n\n          <div class=\"input-group\">\n            <input style=\"max-width: 400px\" type=\"text\" class=\"form-control form_luminescence mt-2\" name=\"host\" placeholder=\"Host\" [value]=\"controlled_host\">\n          </div>\n\n          <div class=\"input-group\">\n            <input style=\"max-width: 400px\" type=\"text\" class=\"form-control form_luminescence mt-2\" name=\"port\" placeholder=\"Port\" [value]=\"controlled_port\">\n          </div>\n\n          <div class=\"form-check row\">\n            <label class=\"col-5 col-form-label\">{{ t.T('Common buffer') }}:</label>\n            <input *ngIf=\"controlled_common_buffer\"  type=\"checkbox\" class=\"form-check-input mt-2 col-7\" name=\"common_buffer\" checked>\n            <input *ngIf=\"!controlled_common_buffer\" type=\"checkbox\" class=\"form-check-input mt-2 col-7\" name=\"common_buffer\">\n          </div>\n\n          <div class=\"input-group row mb-2 ml-2\">\n            <label class=\"col-3 col-form-label\">{{ t.T('TPHC') }}:</label>\n            <div class=\"btn-group mt-2 col-9\">\n              <button type=\"button\" id=\"select_id_home_control_button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                {{ controlled_home_control_id }}\n              </button>\n              <div class=\"dropdown-menu\">\n\n                <div *ngFor=\"let record of list_t_p_home_control\">\n                  <a *ngIf=\"record.active\" class=\"dropdown-item\" href=\"javascript:void(null);\"\n                     (click)=\"selectHomeControlID(record.name_id)\">{{ record.name_id }}</a>\n                </div>\n\n                  <a class=\"dropdown-item\" href=\"javascript:void(null);\"\n                     (click)=\"selectHomeControlID('')\"></a>\n\n              </div>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">{{ t.T('Close') }}</button>\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"goFormControlled()\">{{ t.T('Save') }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings/settings-controlleds/settings-controlleds.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/settings/settings-controlleds/settings-controlleds.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SettingsControlledsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsControlledsComponent", function() { return SettingsControlledsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_load_array_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/load-array.service */ "./src/app/services/load-array.service.ts");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/appActions */ "./src/app/store/actions/appActions.ts");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _services_controlled_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/controlled.service */ "./src/app/services/controlled.service.ts");
/* harmony import */ var _services_t_p_home_control_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/t-p-home-control.service */ "./src/app/services/t-p-home-control.service.ts");
/* harmony import */ var _services_command_record_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/command-record.service */ "./src/app/services/command-record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsControlledsComponent = /** @class */ (function () {
    function SettingsControlledsComponent(t, storeArray, controlled, homeControl, commandRecord) {
        var _this = this;
        this.t = t;
        this.storeArray = storeArray;
        this.controlled = controlled;
        this.homeControl = homeControl;
        this.commandRecord = commandRecord;
        this.list_controlled = [];
        this.list_command_record = [];
        this.list_t_p_home_control = [];
        //Form controlled:
        this.controlled_id = 0;
        this.controlled_name = '';
        this.controlled_host = '';
        this.controlled_port = '';
        this.controlled_common_buffer = false;
        this.controlled_home_control_id = '';
        this.select_home_control_id = '';
        //Table:
        this.table_sm = false;
        this.table_p = false;
        this.storeArray.getStore().listener_store.subscribe(function (data) {
            if (data.type == _store_actions_appActions__WEBPACK_IMPORTED_MODULE_2__["GO_RELOAD_ARRAY"]) {
                return;
            }
            _this.list_controlled = data.list_controlled;
            _this.list_command_record = data.list_command_record;
        });
    }
    SettingsControlledsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeArray.getStore().load_array();
        this.homeControl.getStatusTPHomeControls().subscribe(function (data) {
            _this.list_t_p_home_control = data;
        }, function (err) {
            alert(err.error);
        });
        var w = window.innerWidth;
        if (w < 700) {
            this.table_sm = true;
        }
        else {
            this.table_sm = false;
        }
        if (w > 1000) {
            this.table_p = true;
        }
        else {
            this.table_p = false;
        }
    };
    SettingsControlledsComponent.prototype.deleteControlled = function (controlled_id) {
        var _this = this;
        this.controlled.deleteControlled(controlled_id).subscribe(function () {
            _this.storeArray.getStore().load_array();
            var array_promise = [];
            _this.list_command_record.forEach(function (record) {
                if (record.controlled_id == controlled_id) {
                    array_promise.push(_this.commandRecord.deleteCommandRecord(record.id).forEach(function () { }));
                }
            });
            Promise.all(array_promise).then(function () {
                _this.storeArray.getStore().load_array();
            });
        }, function (err) {
            alert(err.error);
        });
    };
    SettingsControlledsComponent.prototype.selectParam = function (controlled_id, controlled_name, controlled_host, controlled_port, controlled_common_buffer, controlled_home_control_id) {
        this.controlled_id = controlled_id;
        this.controlled_name = controlled_name;
        this.controlled_host = controlled_host;
        this.controlled_port = controlled_port;
        this.controlled_common_buffer = controlled_common_buffer == 1;
        this.controlled_home_control_id = controlled_home_control_id;
    };
    SettingsControlledsComponent.prototype.selectHomeControlID = function (home_control_id) {
        this.select_home_control_id = home_control_id;
        document.getElementById('select_id_home_control_button').innerHTML = home_control_id;
    };
    SettingsControlledsComponent.prototype.goFormControlled = function () {
        if (this.controlled_id == 0) {
            this.addControlled();
        }
        else {
            this.editControlled();
        }
    };
    SettingsControlledsComponent.prototype.editControlled = function () {
        var _this = this;
        var formData = new FormData(document.forms.namedItem('form_add_or_edit_controlled'));
        var common_buffer = 0;
        try {
            formData.get('common_buffer').slice;
            common_buffer = 1;
        }
        catch (_a) { }
        this.controlled.updateControlled({
            id: this.controlled_id,
            name: formData.get('name').toString(),
            host: formData.get('host').toString(),
            port: formData.get('port').toString(),
            common_buffer: common_buffer,
            home_control_id: this.controlled_home_control_id,
        }).subscribe(function () {
            _this.storeArray.getStore().load_array();
            $('#modal_add_controlled').modal('hide');
        }, function (err) {
            alert(err.error);
        });
    };
    SettingsControlledsComponent.prototype.addControlled = function () {
        var _this = this;
        var formData = new FormData(document.forms.namedItem('form_add_or_edit_controlled'));
        var common_buffer = 0;
        try {
            formData.get('common_buffer').slice;
            common_buffer = 1;
        }
        catch (_a) { }
        this.controlled.addControlled({
            id: 0,
            name: formData.get('name').toString(),
            host: formData.get('host').toString(),
            port: formData.get('port').toString(),
            common_buffer: common_buffer,
            home_control_id: this.controlled_home_control_id,
        }).subscribe(function (data) {
            _this.list_controlled.push({
                id: parseInt(data),
                name: formData.get('name').toString(),
                host: formData.get('host').toString(),
                port: formData.get('port').toString(),
                common_buffer: common_buffer,
                home_control_id: _this.controlled_home_control_id,
            });
            $('#modal_add_controlled').modal('hide');
        }, function (err) {
            alert(err.error);
        });
    };
    SettingsControlledsComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 700) {
            this.table_sm = true;
        }
        else {
            this.table_sm = false;
        }
        if (event.target.innerWidth > 1000) {
            this.table_p = true;
        }
        else {
            this.table_p = false;
        }
    };
    SettingsControlledsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings-controlleds',
            template: __webpack_require__(/*! ./settings-controlleds.component.html */ "./src/app/components/settings/settings-controlleds/settings-controlleds.component.html"),
            styles: [__webpack_require__(/*! ./settings-controlleds.component.css */ "./src/app/components/settings/settings-controlleds/settings-controlleds.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"],
            _services_load_array_service__WEBPACK_IMPORTED_MODULE_1__["LoadArrayService"],
            _services_controlled_service__WEBPACK_IMPORTED_MODULE_4__["ControlledService"],
            _services_t_p_home_control_service__WEBPACK_IMPORTED_MODULE_5__["TPHomeControlService"],
            _services_command_record_service__WEBPACK_IMPORTED_MODULE_6__["CommandRecordService"]])
    ], SettingsControlledsComponent);
    return SettingsControlledsComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings-email/settings-email.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/settings/settings-email/settings-email.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form_luminescence:focus {\n  border-color: rgba(18, 55, 96, 0.8);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(26, 79, 137, 0.6);\n  outline: 0 none;\n}\n"

/***/ }),

/***/ "./src/app/components/settings/settings-email/settings-email.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/settings/settings-email/settings-email.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-4\">\n\n  <p class=\"mt-4\" style=\"font-size: 18px\">{{ t.T('E-mail setup, for password recovery') }}:</p>\n  <form action=\"javascript:void(null);\" (submit)=\"setEmail()\"\n        style=\"border-bottom: 1px solid #d0cdd0\" name=\"form_set_email\">\n    <div class=\"input-group\">\n      <input style=\"max-width: 400px\" type=\"password\" autocomplete=\"password\" class=\"form-control form_luminescence\" name=\"password\" placeholder=\"{{ t.T('Password') }}\">\n    </div>\n    <div class=\"input-group\">\n      <input style=\"max-width: 400px\" type=\"password\" autocomplete=\"password\" class=\"form-control form_luminescence mt-2\" name=\"email_password\" placeholder=\"{{ t.T('Email password') }}\">\n    </div>\n    <div class=\"input-group\">\n      <input style=\"max-width: 400px\" type=\"text\" autocomplete=\"email\" class=\"form-control form_luminescence mt-2\" name=\"email_login\" placeholder=\"{{ t.T('Email login') }}\">\n      <div class=\"input-group-prepend\">\n        <div class=\"btn-group mt-2\">\n          <button type=\"button\" id=\"select_smtp_server\" class=\"btn btn-outline-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          style=\"max-height: 40px\"></button>\n          <div class=\"dropdown-menu\">\n            <a *ngFor=\"let smtp of smtp_list\" class=\"dropdown-item\" href=\"javascript:void(null);\" (click)=\"selectSMTPServer(smtp)\">{{ smtp }}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-secondary mb-1 mt-2\">{{ t.T('Save') }}</button>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings/settings-email/settings-email.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/settings/settings-email/settings-email.component.ts ***!
  \********************************************************************************/
/*! exports provided: SettingsEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEmailComponent", function() { return SettingsEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsEmailComponent = /** @class */ (function () {
    function SettingsEmailComponent(t, user) {
        this.t = t;
        this.user = user;
        this.smtp_list = [];
        this.select_smtp = '';
    }
    SettingsEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.getSMTPServer().subscribe(function (data) {
            _this.smtp_list = data;
            _this.selectSMTPServer(_this.smtp_list[0]);
        }, function (err) {
            alert(err.error);
        });
    };
    SettingsEmailComponent.prototype.selectSMTPServer = function (smtp) {
        this.select_smtp = smtp;
        document.getElementById('select_smtp_server').innerHTML = smtp;
    };
    SettingsEmailComponent.prototype.setEmail = function () {
        var formData = new FormData(document.forms.namedItem('form_set_email'));
        var password = formData.get('password').toString();
        var email_password = formData.get('email_password').toString();
        var email_login = formData.get('email_login').toString();
        if (password == '' ||
            email_password == '' ||
            email_login == '' ||
            this.select_smtp == '') {
            alert(this.t.T('There is an empty field'));
            return;
        }
        this.user.settingsEmail(password, email_login, email_password, this.select_smtp).subscribe(function () {
            alert('Ok');
        }, function (err) {
            alert(err.error);
        });
    };
    SettingsEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings-email',
            template: __webpack_require__(/*! ./settings-email.component.html */ "./src/app/components/settings/settings-email/settings-email.component.html"),
            styles: [__webpack_require__(/*! ./settings-email.component.css */ "./src/app/components/settings/settings-email/settings-email.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SettingsEmailComponent);
    return SettingsEmailComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings-home/settings-home.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/settings/settings-home/settings-home.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form_luminescence:focus {\n  border-color: rgba(18, 55, 96, 0.8);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(26, 79, 137, 0.6);\n  outline: 0 none;\n}\n"

/***/ }),

/***/ "./src/app/components/settings/settings-home/settings-home.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/settings/settings-home/settings-home.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-4\">\n\n  <p class=\"mt-4\" style=\"font-size: 18px\">{{ t.T('Language') }}:</p>\n  <div class=\"btn-group mb-1\">\n    <button type=\"button\" id=\"select_use_lang\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      {{ t.getLang() }}\n    </button>\n    <div class=\"dropdown-menu\">\n      <a *ngFor=\"let lang of t.list_lang\" class=\"dropdown-item\" href=\"javascript:void(null);\" (click)=\"setLang(lang)\">{{ lang }}</a>\n    </div>\n  </div>\n  <div style=\"border-bottom: 1px solid #d0cdd0\"></div>\n\n  <p class=\"mt-4\" style=\"font-size: 18px\">{{ t.T('Set sample rate') }}:</p>\n  <form action=\"javascript:void(null);\" (submit)=\"setSampleRate()\"\n        style=\"border-bottom: 1px solid #d0cdd0\">\n    <div class=\"form-group\">\n      <input style=\"max-width: 400px\" type=\"number\" class=\"form-control form_luminescence\" id=\"recording_used_sample_rate\" value=\"{{ getSampleRate() }}\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-secondary mb-1\">{{ t.T('Save') }}</button>\n  </form>\n\n  <p class=\"mt-4\" style=\"font-size: 18px\">{{ t.T('New password') }}:</p>\n  <form action=\"javascript:void(null);\" (submit)=\"newPassword()\" name=\"form_new_password_create\"\n        style=\"border-bottom: 1px solid #d0cdd0\">\n    <div class=\"form-group\">\n      <input style=\"max-width: 400px\" type=\"password\" autocomplete=\"password\" class=\"form-control form_luminescence\" name=\"old_password\" placeholder=\"{{ t.T('Old password') }}\">\n      <input style=\"max-width: 400px\" type=\"password\" autocomplete=\"password\" class=\"form-control form_luminescence mt-2\" name=\"new_password\" placeholder=\"{{ t.T('New password') }}\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-secondary mb-1\">{{ t.T('Save') }}</button>\n  </form>\n\n  <p class=\"mt-4\" style=\"font-size: 18px\">{{ t.T('Logout') }}:</p>\n  <button type=\"button\" class=\"btn btn-secondary mb-1\" (click)=\"logout()\">{{ t.T('Logout') }}</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings/settings-home/settings-home.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/settings/settings-home/settings-home.component.ts ***!
  \******************************************************************************/
/*! exports provided: SettingsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsHomeComponent", function() { return SettingsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsHomeComponent = /** @class */ (function () {
    function SettingsHomeComponent(t, user) {
        this.t = t;
        this.user = user;
    }
    SettingsHomeComponent.prototype.ngOnInit = function () {
    };
    SettingsHomeComponent.prototype.setLang = function (lang) {
        var err = this.t.setLang(lang);
        if (err) {
            alert(err.message);
            return;
        }
        document.getElementById('select_use_lang').innerHTML = lang;
    };
    SettingsHomeComponent.prototype.setSampleRate = function () {
        var sample_rate = document.getElementById('recording_used_sample_rate').value;
        var err = recordingSetSampleRate(parseInt(sample_rate));
        if (err) {
            alert(err.message);
            return;
        }
    };
    SettingsHomeComponent.prototype.getSampleRate = function () {
        return recordingGetSampleRate();
    };
    SettingsHomeComponent.prototype.newPassword = function () {
        var formData = new FormData(document.forms.namedItem('form_new_password_create'));
        var old_password = formData.get('old_password').toString();
        var new_password = formData.get('new_password').toString();
        this.user.passwordNew(old_password, new_password).subscribe(function () {
            alert('Ok');
        }, function (err) {
            alert(err.error);
        });
    };
    SettingsHomeComponent.prototype.logout = function () {
        this.user.logout().subscribe(function () {
            location.reload();
        }, function (err) {
            alert(err.error);
        });
    };
    SettingsHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings-home',
            template: __webpack_require__(/*! ./settings-home.component.html */ "./src/app/components/settings/settings-home/settings-home.component.html"),
            styles: [__webpack_require__(/*! ./settings-home.component.css */ "./src/app/components/settings/settings-home/settings-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SettingsHomeComponent);
    return SettingsHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings-interfaces/settings-interfaces.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/settings/settings-interfaces/settings-interfaces.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form_luminescence:focus {\n  border-color: rgba(18, 55, 96, 0.8);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(26, 79, 137, 0.6);\n  outline: 0 none;\n}\n"

/***/ }),

/***/ "./src/app/components/settings/settings-interfaces/settings-interfaces.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/settings/settings-interfaces/settings-interfaces.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-center\"\n     style=\"border-bottom: 1px solid #1b1e21\">\n  <div class=\"btn-group\">\n    <button type=\"button\" id=\"select_type_interface_button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n            style=\"max-height: 40px\">Sound parsing</button>\n    <div class=\"dropdown-menu\">\n\n      <a class=\"ml-1\" href=\"javascript:void(null);\" (click)=\"selectTypeInterface('Sound parsing')\">Sound parsing</a><br>\n      <a class=\"ml-1\" href=\"javascript:void(null);\" (click)=\"selectTypeInterface('TP home control')\">TP home control</a><br>\n      <a class=\"ml-1\" href=\"javascript:void(null);\" (click)=\"selectTypeInterface('Bot messenger')\">Bot messenger</a>\n\n    </div>\n  </div>:\n\n  <div class=\"btn-group ml-2\">\n    <button type=\"button\" id=\"select_name_interface_button\" class=\"btn btn-outline-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n            style=\"max-height: 40px\">Sound parsing</button>\n    <div class=\"dropdown-menu\">\n\n      <div *ngFor=\"let interface_status of map_interface[select_type_interface]\">\n        <a *ngIf=\"interface_status.active\" class=\"ml-1\" href=\"javascript:void(null);\" (click)=\"selectNameInterface(interface_status.name_id)\">{{ interface_status.name_id }}</a><br>\n      </div>\n\n    </div>\n  </div>\n</nav>\n\n<form class=\"ml-4 mt-2\" action=\"javascript:void(null);\" (submit)=\"setSettings()\"\n      style=\"border-bottom: 1px solid #d0cdd0\" name=\"form_settings_interface\">\n\n  <div *ngFor=\"let settings of list_field_settings\">\n\n    <div [ngSwitch]=\"settings[1]\">\n\n      <ng-template ngSwitchCase=\"string\">\n        <div class=\"form-group\">\n          <label>{{ settings[0] }}:</label>\n          <input type=\"text\" class=\"form-control mt-2\" name=\"{{ settings[0] }}\" value=\"{{ settings[2] }}\" style=\"max-width: 400px\">\n        </div>\n      </ng-template>\n\n      <ng-template ngSwitchCase=\"int\">\n        <div class=\"form-group\">\n          <label>{{ settings[0] }}:</label>\n          <input type=\"number\" class=\"form-control mt-2\" name=\"{{ settings[0] }}\" value=\"{{ settings[2] }}\" style=\"max-width: 400px\">\n        </div>\n      </ng-template>\n\n      <ng-template ngSwitchCase=\"bool\">\n        <div class=\"form-group\">\n          <label>{{ settings[0] }}:</label>\n          <input *ngIf=\"settings[2] == 'true'\" type=\"checkbox\" class=\"form-control mt-2\" name=\"{{ settings[0] }}\" style=\"max-width: 400px\" checked>\n          <input *ngIf=\"settings[2] != 'true'\" type=\"checkbox\" class=\"form-control mt-2\" name=\"{{ settings[0] }}\" style=\"max-width: 400px\">\n        </div>\n      </ng-template>\n\n      <ng-template ngSwitchCase=\"url\">\n        <a href=\"{{ settings[2] }}\">{{ settings[0] }}</a><br>\n        <br>\n      </ng-template>\n\n      <ng-template ngSwitchCase=\"list\">\n        <div class=\"form-group\">\n          <label>{{ settings[0] }}:</label>\n          <select class=\"form-control\" name=\"{{ settings[0] }}\" value=\"{{ settings[2] }}\" style=\"max-width: 400px\">\n\n            <option *ngFor=\"let settings_value of settings.slice(3, settings.length - 1)\" value=\"{{ settings_value }}\">{{ settings_value }}</option>\n\n          </select>\n        </div>\n      </ng-template>\n\n    </div>\n\n\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-secondary mb-1 mt-2\">{{ t.T('Save') }}</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/settings/settings-interfaces/settings-interfaces.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/settings/settings-interfaces/settings-interfaces.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SettingsInterfacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsInterfacesComponent", function() { return SettingsInterfacesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/lang.service */ "./src/app/services/lang.service.ts");
/* harmony import */ var _services_sound_parsing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/sound-parsing.service */ "./src/app/services/sound-parsing.service.ts");
/* harmony import */ var _services_t_p_home_control_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/t-p-home-control.service */ "./src/app/services/t-p-home-control.service.ts");
/* harmony import */ var _services_bot_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/bot-messenger.service */ "./src/app/services/bot-messenger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsInterfacesComponent = /** @class */ (function () {
    function SettingsInterfacesComponent(t, soundParsing, tpHomeControl, botMessenger) {
        this.t = t;
        this.soundParsing = soundParsing;
        this.tpHomeControl = tpHomeControl;
        this.botMessenger = botMessenger;
        // Interface
        this.select_type_interface = '';
        this.select_name_interface = '';
        this.map_interface = (_a = {}, _a[''] = [], _a);
        // Settings
        this.list_field_settings = [[]];
        var _a;
    }
    SettingsInterfacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list_sound_interface = [];
        var list_control_interface = [];
        var list_bot_interface = [];
        Promise.all([
            this.soundParsing.getStatusSoundParsings().forEach(function (data) {
                list_sound_interface = data;
            }),
            this.tpHomeControl.getStatusTPHomeControls().forEach(function (data) {
                list_control_interface = data;
            }),
            this.botMessenger.getStatusBotMessengers().forEach(function (data) {
                list_bot_interface = data;
            }),
        ]).then(function () {
            _this.createMap(list_sound_interface, list_control_interface, list_bot_interface);
        });
    };
    SettingsInterfacesComponent.prototype.createMap = function (list_sound_interface, list_control_interface, list_bot_interface) {
        this.map_interface['Sound parsing'] = list_sound_interface;
        this.map_interface['TP home control'] = list_control_interface;
        this.map_interface['Bot messenger'] = list_bot_interface;
        this.selectTypeInterface('Sound parsing');
        this.loadSettings();
    };
    SettingsInterfacesComponent.prototype.setSettings = function () {
        if (this.select_name_interface == '') {
            return;
        }
        var formData = new FormData(document.forms.namedItem('form_settings_interface'));
        var settings = {};
        formData.forEach(function (value, key) {
            settings[key] = value;
        });
        switch (this.select_type_interface) {
            case 'Sound parsing':
                this.soundParsing.setSettings(this.select_name_interface, settings).subscribe(function () {
                    alert('Ok');
                }, function (err) {
                    alert(err.error);
                });
                break;
            case 'TP home control':
                this.tpHomeControl.setSettings(this.select_name_interface, settings).subscribe(function () {
                    alert('Ok');
                }, function (err) {
                    alert(err.error);
                });
                break;
            case 'Bot messenger':
                this.botMessenger.setSettings(this.select_name_interface, settings).subscribe(function () {
                    alert('Ok');
                }, function (err) {
                    alert(err.error);
                });
                break;
            default:
                alert('error: type interface not found');
                break;
        }
    };
    SettingsInterfacesComponent.prototype.loadSettings = function () {
        var _this = this;
        if (this.select_name_interface == '') {
            this.list_field_settings = [];
            return;
        }
        switch (this.select_type_interface) {
            case 'Sound parsing':
                this.soundParsing.getSettings(this.select_name_interface).subscribe(function (data) {
                    _this.list_field_settings = data;
                }, function (err) {
                    alert(err.error);
                });
                break;
            case 'TP home control':
                this.tpHomeControl.getSettings(this.select_name_interface).subscribe(function (data) {
                    _this.list_field_settings = data;
                }, function (err) {
                    alert(err.error);
                });
                break;
            case 'Bot messenger':
                this.botMessenger.getSettings(this.select_name_interface).subscribe(function (data) {
                    _this.list_field_settings = data;
                }, function (err) {
                    alert(err.error);
                });
                break;
            default:
                alert('error: type interface not found');
                break;
        }
    };
    SettingsInterfacesComponent.prototype.selectTypeInterface = function (type_interface) {
        this.select_type_interface = type_interface;
        document.getElementById('select_type_interface_button').innerHTML = type_interface;
        this.selectNameInterface(this.map_interface[type_interface] ? this.map_interface['Sound parsing'][0].name_id : '');
    };
    SettingsInterfacesComponent.prototype.selectNameInterface = function (name_iterface) {
        this.select_name_interface = name_iterface;
        document.getElementById('select_name_interface_button').innerHTML = name_iterface;
        this.loadSettings();
    };
    SettingsInterfacesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings-interfaces',
            template: __webpack_require__(/*! ./settings-interfaces.component.html */ "./src/app/components/settings/settings-interfaces/settings-interfaces.component.html"),
            styles: [__webpack_require__(/*! ./settings-interfaces.component.css */ "./src/app/components/settings/settings-interfaces/settings-interfaces.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"],
            _services_sound_parsing_service__WEBPACK_IMPORTED_MODULE_2__["SoundParsingService"],
            _services_t_p_home_control_service__WEBPACK_IMPORTED_MODULE_3__["TPHomeControlService"],
            _services_bot_messenger_service__WEBPACK_IMPORTED_MODULE_4__["BotMessengerService"]])
    ], SettingsInterfacesComponent);
    return SettingsInterfacesComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 500px) {\n  .navbar_visible_text {\n    display: none;\n  }\n}\n\n.navbar_bg_color_use_item {\n  background-color: #e0e6eb;\n}\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-center\"\n     style=\"border-bottom: 1px solid #1b1e21\">\n  <a class=\"nav-item nav-link badge-light\" [class.active]=\"visible_home\" [class.navbar_bg_color_use_item]=\"visible_home\"\n     href=\"javascript:void(null);\" (click)=\"visibleHome()\">\n    <a class=\"navbar_visible_text\">{{ t.T('Main') }} </a>\n    <i class=\"fa fa-user fa-lg\" aria-hidden=\"true\"></i>\n    <span class=\"sr-only\">(current)</span>\n  </a>\n\n  <a class=\"nav-item nav-link badge-light\" [class.active]=\"visible_email\" [class.navbar_bg_color_use_item]=\"visible_email\"\n     href=\"javascript:void(null);\" (click)=\"visibleEmail()\">\n    <a class=\"navbar_visible_text\">{{ t.T('Email') }} </a>\n    <i class=\"fa fa-envelope fa-lg\" aria-hidden=\"true\"></i>\n    <span class=\"sr-only\">(current)</span>\n  </a>\n\n  <a class=\"nav-item nav-link badge-light\" [class.active]=\"visible_controlleds\" [class.navbar_bg_color_use_item]=\"visible_controlleds\"\n     href=\"javascript:void(null);\" (click)=\"visibleControlleds()\">\n    <a class=\"navbar_visible_text\">{{ t.T('Controlled') }} </a>\n    <i class=\"fa fa-american-sign-language-interpreting fa-lg\" aria-hidden=\"true\"></i>\n    <span class=\"sr-only\">(current)</span>\n  </a>\n\n  <a class=\"nav-item nav-link badge-light\" [class.active]=\"visible_interfaces\" [class.navbar_bg_color_use_item]=\"visible_interfaces\"\n     href=\"javascript:void(null);\" (click)=\"visibleInterfaces()\">\n    <a class=\"navbar_visible_text\">{{ t.T('Interfaces') }} </a>\n    <i class=\"fa fa-plug fa-lg\" aria-hidden=\"true\"></i>\n    <span class=\"sr-only\">(current)</span>\n  </a>\n</nav>\n\n<app-settings-home        *ngIf=\"visible_home\"></app-settings-home>\n<app-settings-email       *ngIf=\"visible_email\"></app-settings-email>\n<app-settings-interfaces  *ngIf=\"visible_interfaces\"></app-settings-interfaces>\n<app-settings-controlleds *ngIf=\"visible_controlleds\"></app-settings-controlleds>\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/lang.service */ "./src/app/services/lang.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(t) {
        this.t = t;
        // Visible components
        this.visible_home = true;
        this.visible_email = false;
        this.visible_controlleds = false;
        this.visible_interfaces = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    // Visible components
    SettingsComponent.prototype.visibleHome = function () {
        this.visible_home = true;
        this.visible_email = false;
        this.visible_controlleds = false;
        this.visible_interfaces = false;
    };
    SettingsComponent.prototype.visibleEmail = function () {
        this.visible_home = false;
        this.visible_email = true;
        this.visible_controlleds = false;
        this.visible_interfaces = false;
    };
    SettingsComponent.prototype.visibleControlleds = function () {
        this.visible_home = false;
        this.visible_email = false;
        this.visible_controlleds = true;
        this.visible_interfaces = false;
    };
    SettingsComponent.prototype.visibleInterfaces = function () {
        this.visible_home = false;
        this.visible_email = false;
        this.visible_controlleds = false;
        this.visible_interfaces = true;
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lang_service__WEBPACK_IMPORTED_MODULE_1__["LangService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/models/command-record.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/command-record.model.ts ***!
  \************************************************/
/*! exports provided: CommandRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandRecord", function() { return CommandRecord; });
var CommandRecord = /** @class */ (function () {
    function CommandRecord() {
        this.id = '';
        this.type_record = 0;
        this.command = -1;
        this.string_command = '';
        this.number_of_words = 0;
        this.controlled_id = 0;
    }
    return CommandRecord;
}());



/***/ }),

/***/ "./src/app/models/controlled.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/controlled.model.ts ***!
  \********************************************/
/*! exports provided: Controlled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controlled", function() { return Controlled; });
var Controlled = /** @class */ (function () {
    function Controlled() {
        this.id = 0;
        this.name = '';
        this.host = '';
        this.port = '';
        this.common_buffer = -1;
        this.home_control_id = '';
    }
    return Controlled;
}());



/***/ }),

/***/ "./src/app/services/bot-messenger.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/bot-messenger.service.ts ***!
  \***************************************************/
/*! exports provided: BotMessengerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotMessengerService", function() { return BotMessengerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BotMessengerService = /** @class */ (function () {
    function BotMessengerService(httpClient) {
        this.httpClient = httpClient;
    }
    // getSettings:
    /*
        Example:
    ["namefield","typefild","value"],
    ["key","string",""],
    ["uuid","string","fdgdgme-sdfsw-asdsa"],
    ["parse","bool","false"], //will return from the client "parse": false
    ["id","int","1990"], //will return from the client "id": 1990
    ["fieldListName","list","value","en","sp","ru"],
    ["lang","list","ru","en","sp","ru"], //will return from the client "lang": "ru" //first field to up
    ["create key google","url","https://google.com"]
  
        Options:
    https://github.com/darkfoxs96/homecontrol#to-all-interfaces
    */
    BotMessengerService.prototype.getSettings = function (bot_messenger_id) {
        return this.httpClient.get('/api/botmessenger/settings/' + bot_messenger_id);
    };
    // TODO: settings!
    BotMessengerService.prototype.setSettings = function (bot_messenger_id, settings) {
        return this.httpClient.post('/api/botmessenger/settings/' + bot_messenger_id, settings);
    };
    BotMessengerService.prototype.getStatusBotMessengers = function () {
        return this.httpClient.get('/api/botmessenger');
    };
    // getBotMessenger return: field 'message', 'bool_message'
    BotMessengerService.prototype.getStatusBotMessenger = function (bot_messenger_id) {
        return this.httpClient.get('/api/botmessenger/' + bot_messenger_id);
    };
    BotMessengerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BotMessengerService);
    return BotMessengerService;
}());



/***/ }),

/***/ "./src/app/services/command-record.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/command-record.service.ts ***!
  \****************************************************/
/*! exports provided: CommandRecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandRecordService", function() { return CommandRecordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommandRecordService = /** @class */ (function () {
    function CommandRecordService(httpClient) {
        this.httpClient = httpClient;
    }
    CommandRecordService.prototype.getCommandRecords = function () {
        return this.httpClient.get('/api/command/record');
    };
    // id == command record
    CommandRecordService.prototype.getCommandRecord = function (id) {
        return this.httpClient.get('/api/command/record/' + id);
    };
    CommandRecordService.prototype.addOrUpdateCommandRecord = function (command_record) {
        return this.httpClient.post('/api/command/record/' + command_record.id, {
            type_record: command_record.type_record,
            command: command_record.command,
            string_command: command_record.string_command,
            number_of_words: command_record.number_of_words,
            controlled_id: command_record.controlled_id
        });
    };
    // id == command record
    CommandRecordService.prototype.deleteCommandRecord = function (id) {
        return this.httpClient.delete('/api/command/record/' + id);
    };
    CommandRecordService.prototype.useText = function (command, buffer) {
        return this.httpClient.post('/api/command/used/text', {
            buffer: buffer,
            command: command
        });
    };
    // TODO: settings !
    // sound - byte[]
    CommandRecordService.prototype.useSound = function (sound, stringCommand) {
        return this.httpClient.post('/api/command/used/sound', sound);
    };
    CommandRecordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommandRecordService);
    return CommandRecordService;
}());



/***/ }),

/***/ "./src/app/services/command.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/command.service.ts ***!
  \*********************************************/
/*! exports provided: CommandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandService", function() { return CommandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommandService = /** @class */ (function () {
    function CommandService(httpClient) {
        this.httpClient = httpClient;
    }
    CommandService.prototype.getCommands = function () {
        return this.httpClient.get('/api/commands');
    };
    CommandService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommandService);
    return CommandService;
}());



/***/ }),

/***/ "./src/app/services/controlled.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/controlled.service.ts ***!
  \************************************************/
/*! exports provided: ControlledService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlledService", function() { return ControlledService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlledService = /** @class */ (function () {
    function ControlledService(httpClient) {
        this.httpClient = httpClient;
    }
    ControlledService.prototype.getControlled = function (id) {
        return this.httpClient.get('/api/controlled/' + id);
    };
    ControlledService.prototype.getControlleds = function () {
        return this.httpClient.get('/api/controlled');
    };
    // addControlled return: new id `Controlled`. string parse to number
    ControlledService.prototype.addControlled = function (controlled) {
        return this.httpClient.post('/api/controlled', {
            common_buffer: controlled.common_buffer,
            home_control_id: controlled.home_control_id,
            host: controlled.host,
            name: controlled.name,
            port: controlled.port
        });
    };
    ControlledService.prototype.updateControlled = function (controlled) {
        return this.httpClient.put('/api/controlled/' + controlled.id, {
            common_buffer: controlled.common_buffer,
            home_control_id: controlled.home_control_id,
            host: controlled.host,
            name: controlled.name,
            port: controlled.port
        });
    };
    ControlledService.prototype.deleteControlled = function (id) {
        return this.httpClient.delete('/api/controlled/' + id);
    };
    ControlledService.prototype.getControlledsInfo = function () {
        return this.httpClient.get('/api/controlled/info');
    };
    ControlledService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ControlledService);
    return ControlledService;
}());



/***/ }),

/***/ "./src/app/services/lang.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/lang.service.ts ***!
  \******************************************/
/*! exports provided: LangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangService", function() { return LangService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LangService = /** @class */ (function () {
    function LangService() {
        this.list_lang = listLang;
        this.lang = lang;
        this.words_map = (_a = {},
            _a['ru-RU'] = (_b = {},
                _b['Control'] = 'Управление',
                _b['Settings'] = 'Настройки',
                _b['Commands'] = 'Команды',
                _b['Reload microphone'] = 'Перезагрузить микрофон',
                _b['Text to the command'] = 'Текст к команде(buffer)',
                _b['Auxiliary command'] = 'Вспомогател. команда',
                _b['Name'] = 'Название',
                _b['Command'] = 'Команда',
                _b['Controlled?'] = 'Контролиру.?',
                _b['Close'] = 'Отмена',
                _b['Add command'] = 'Добавить команду',
                _b['Save'] = 'Сохранить',
                _b['Add callsign'] = 'Добавить позывной',
                _b['Controlled'] = 'Контролиру.',
                _b['No more than one word'] = 'Не больше одного слова',
                _b['Empty command'] = 'Введите комманду',
                _b['Main'] = 'Глав.',
                _b['Interfaces'] = 'Интерф.',
                _b['Email'] = 'Email',
                _b['Error: your language not found'] = 'Ошибка: ваш язык не найден',
                _b['Language'] = 'Язык',
                _b['Set sample rate'] = 'Установить sample rate',
                _b['New password'] = 'Новый пароль',
                _b['Old password'] = 'Старый пароль',
                _b['Logout'] = 'Выход',
                _b['There is an empty field'] = 'Есть пустое поле',
                _b['E-mail setup, for password recovery'] = 'Настройки электронной почты, для восстановления пароля',
                _b['Password'] = 'Пароль',
                _b['Email password'] = 'Пароль от email',
                _b['Email login'] = 'Логин от email',
                _b['TPHC'] = 'ССКД',
                _b['Common buffer'] = 'Общ. buffer обмена',
                _b['Add controlled'] = 'Добавить контролируемого',
                _b['Login'] = 'Вход',
                _b),
            _a['en-US'] = (_c = {},
                _c['Control'] = 'Control',
                _c['Settings'] = 'Settings',
                _c['Commands'] = 'Commands',
                _c['Reload microphone'] = 'Reload microphone',
                _c['Text to the command'] = 'Text to the command(buffer)',
                _c['Auxiliary command'] = 'Auxiliary command',
                _c['Name'] = 'Name',
                _c['Command'] = 'Command',
                _c['Controlled?'] = 'Controlled?',
                _c['Close'] = 'Close',
                _c['Add command'] = 'Add command',
                _c['Save'] = 'Save',
                _c['Add callsign'] = 'Add callsign',
                _c['Controlled'] = 'Controlled',
                _c['No more than one word'] = 'No more than one word',
                _c['Empty command'] = 'Empty command',
                _c['Main'] = 'Main',
                _c['Interfaces'] = 'Interfaces',
                _c['Email'] = 'Email',
                _c['Error: your language not found'] = 'Error: your language not found',
                _c['Language'] = 'Language',
                _c['Set sample rate'] = 'Set sample rate',
                _c['New password'] = 'New password',
                _c['Old password'] = 'Old password',
                _c['Logout'] = 'Logout',
                _c['There is an empty field'] = 'There is an empty field',
                _c['E-mail setup, for password recovery'] = 'E-mail setup, for password recovery',
                _c['Password'] = 'Password',
                _c['Email password'] = 'Email password',
                _c['Email login'] = 'Email login',
                _c['TPHC'] = 'TPHC',
                _c['Common buffer'] = 'Common buffer',
                _c['Add controlled'] = 'Add controlled',
                _c['Login'] = 'Login',
                _c),
            _a);
        var _a, _b, _c;
    }
    LangService.prototype.T = function (word) {
        var return_words = this.words_map[this.lang][word];
        if (return_words) {
            return return_words;
        }
        else {
            return '';
        }
    };
    LangService.prototype.setLang = function (lang_use) {
        if (isLang(lang_use)) {
            this.lang = lang_use;
            localStorage.setItem('lang_use', lang_use);
            return null;
        }
        {
            return new Error(this.T('Error: your language not found'));
        }
    };
    LangService.prototype.getLang = function () {
        return this.lang;
    };
    LangService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LangService);
    return LangService;
}());

var listLang = ['en-US', 'ru-RU'];
var localStorageLang = localStorage.getItem('lang_use');
var lang = 'en-US';
if (localStorageLang && localStorageLang != '' && isLang(localStorageLang)) {
    lang = localStorageLang;
}
if (localStorageLang == '') {
    localStorage.setItem('lang_use', 'en-US');
}
function isLang(lang) {
    var result = false;
    listLang.forEach(function (value) {
        if (lang == value) {
            result = true;
        }
    });
    return result;
}


/***/ }),

/***/ "./src/app/services/load-array.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/load-array.service.ts ***!
  \************************************************/
/*! exports provided: LoadArrayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadArrayService", function() { return LoadArrayService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_appActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions/appActions */ "./src/app/store/actions/appActions.ts");
/* harmony import */ var _command_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command.service */ "./src/app/services/command.service.ts");
/* harmony import */ var _controlled_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controlled.service */ "./src/app/services/controlled.service.ts");
/* harmony import */ var _command_record_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./command-record.service */ "./src/app/services/command-record.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoadArrayService = /** @class */ (function () {
    function LoadArrayService(store, commandService, controlled, commandRecord) {
        var _this = this;
        this.store = store;
        this.commandService = commandService;
        this.controlled = controlled;
        this.commandRecord = commandRecord;
        this.store.select('appReducer').subscribe(function (data) {
            if (data.type == _store_actions_appActions__WEBPACK_IMPORTED_MODULE_2__["GO_RELOAD_ARRAY"]) {
                _this.loadArray();
            }
        });
    }
    LoadArrayService.prototype.loadArray = function () {
        var _this = this;
        var list_controlled = [];
        var list_commands = [];
        var list_command_record = [];
        Promise.all([
            this.commandRecord.getCommandRecords().forEach(function (data) {
                list_command_record = data;
            }),
            this.controlled.getControlleds().forEach(function (data) {
                list_controlled = data;
            }),
            this.commandService.getCommands().forEach(function (data) {
                list_commands = data;
            }),
        ]).then(function () {
            _this.store.dispatch({
                type: _store_actions_appActions__WEBPACK_IMPORTED_MODULE_2__["RELOAD_ARRAY"],
                list_controlled: list_controlled,
                list_commands: list_commands,
                list_command_record: list_command_record,
            });
        });
    };
    LoadArrayService.prototype.getStore = function () {
        var _this = this;
        return {
            listener_store: this.store.select('appReducer'),
            load_array: function () {
                _this.store.dispatch({
                    type: _store_actions_appActions__WEBPACK_IMPORTED_MODULE_2__["GO_RELOAD_ARRAY"],
                    list_controlled: [],
                    list_commands: [],
                    list_command_record: [],
                });
            }
        };
    };
    LoadArrayService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _command_service__WEBPACK_IMPORTED_MODULE_3__["CommandService"],
            _controlled_service__WEBPACK_IMPORTED_MODULE_4__["ControlledService"],
            _command_record_service__WEBPACK_IMPORTED_MODULE_5__["CommandRecordService"]])
    ], LoadArrayService);
    return LoadArrayService;
}());



/***/ }),

/***/ "./src/app/services/sound-parsing.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/sound-parsing.service.ts ***!
  \***************************************************/
/*! exports provided: SoundParsingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundParsingService", function() { return SoundParsingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SoundParsingService = /** @class */ (function () {
    function SoundParsingService(httpClient) {
        this.httpClient = httpClient;
    }
    // getNameUse return: field 'message'
    SoundParsingService.prototype.getNameUse = function () {
        return this.httpClient.get('/api/soundparsing/used');
    };
    SoundParsingService.prototype.setNameUse = function (sound_parsing_id) {
        return this.httpClient.post('/api/soundparsing/used', sound_parsing_id);
    };
    // getSettings:
    /*
        Example:
    ["namefield","typefild","value"],
    ["key","string",""],
    ["uuid","string","fdgdgme-sdfsw-asdsa"],
    ["parse","bool","false"], //will return from the client "parse": false
    ["id","int","1990"], //will return from the client "id": 1990
    ["field_list_name","list","value","en","sp","ru"],
    ["lang","list","ru","en","sp","ru"], //will return from the client "lang": "ru" //first field to up
    ["create key google","url","https://google.com"]
  
        Options:
    https://github.com/darkfoxs96/homecontrol#to-all-interfaces
    */
    SoundParsingService.prototype.getSettings = function (sound_parsing_id) {
        return this.httpClient.get('/api/soundparsing/settings/' + sound_parsing_id);
    };
    // TODO: settings!
    SoundParsingService.prototype.setSettings = function (sound_parsing_id, settings) {
        return this.httpClient.post('/api/soundparsing/settings/' + sound_parsing_id, settings);
    };
    SoundParsingService.prototype.getStatusSoundParsings = function () {
        return this.httpClient.get('/api/soundparsing');
    };
    // getSoundParsing return: field 'message', 'bool_message'
    SoundParsingService.prototype.getStatusSoundParsing = function (sound_parsing_id) {
        return this.httpClient.get('/api/soundparsing/' + sound_parsing_id);
    };
    SoundParsingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SoundParsingService);
    return SoundParsingService;
}());



/***/ }),

/***/ "./src/app/services/t-p-home-control.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/t-p-home-control.service.ts ***!
  \******************************************************/
/*! exports provided: TPHomeControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPHomeControlService", function() { return TPHomeControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TPHomeControlService = /** @class */ (function () {
    function TPHomeControlService(httpClient) {
        this.httpClient = httpClient;
    }
    // getSettings:
    /*
        Example:
    ["namefield","typefild","value"],
    ["key","string",""],
    ["uuid","string","fdgdgme-sdfsw-asdsa"],
    ["parse","bool","false"], //will return from the client "parse": false
    ["id","int","1990"], //will return from the client "id": 1990
    ["fieldListName","list","value","en","sp","ru"],
    ["lang","list","ru","en","sp","ru"], //will return from the client "lang": "ru" //first field to up
    ["create key google","url","https://google.com"]
  
        Options:
    https://github.com/darkfoxs96/homecontrol#to-all-interfaces
    */
    TPHomeControlService.prototype.getSettings = function (t_p_home_control_id) {
        return this.httpClient.get('/api/tphomecontrol/settings/' + t_p_home_control_id);
    };
    // TODO: settings!
    TPHomeControlService.prototype.setSettings = function (t_p_home_control_id, settings) {
        return this.httpClient.post('/api/tphomecontrol/settings/' + t_p_home_control_id, settings);
    };
    // getObjects return: [["objectID", "info object"], ["objectID", "info object"], ["", ""]...]
    TPHomeControlService.prototype.getObjects = function (t_p_home_control_id) {
        return this.httpClient.get('/api/tphomecontrol/objects/' + t_p_home_control_id);
    };
    TPHomeControlService.prototype.getStatusTPHomeControls = function () {
        return this.httpClient.get('/api/tphomecontrol');
    };
    // getStatusTPHomeControl return: field 'message', 'bool_message'
    TPHomeControlService.prototype.getStatusTPHomeControl = function (t_p_home_control_id) {
        return this.httpClient.get('/api/tphomecontrol/' + t_p_home_control_id);
    };
    TPHomeControlService.prototype.getCommands = function (t_p_home_control_id) {
        return this.httpClient.get('/api/tphomecontrol/commands/' + t_p_home_control_id);
    };
    TPHomeControlService.prototype.getInfoTPHomeControls = function () {
        return this.httpClient.get('/api/tphomecontrol/info');
    };
    // getInfoTPHomeControlString return: all info...
    TPHomeControlService.prototype.getInfoTPHomeControlString = function (t_p_home_control_id) {
        return this.httpClient.get('/api/tphomecontrol/info/' + t_p_home_control_id + '?type=string');
    };
    // getInfoTPHomeControlStrings return: ["info", "info", "info", "info"...]
    TPHomeControlService.prototype.getInfoTPHomeControlStrings = function (t_p_home_control_id) {
        return this.httpClient.get('/api/tphomecontrol/info/' + t_p_home_control_id + '?type=json');
    };
    TPHomeControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        // TPHomeControlService third party home control system
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TPHomeControlService);
    return TPHomeControlService;
}());



/***/ }),

/***/ "./src/app/services/use-control.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/use-control.service.ts ***!
  \*************************************************/
/*! exports provided: UseControlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseControlService", function() { return UseControlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UseControlService = /** @class */ (function () {
    function UseControlService(httpClient) {
        this.httpClient = httpClient;
    }
    // getReportUnauthorizedUse return: field 'bool_message'
    UseControlService.prototype.getReportUnauthorizedUse = function () {
        return this.httpClient.get('/api/usecontrol/reportunauthorizeduse');
    };
    UseControlService.prototype.setReportUnauthorizedUse = function (report_unauthorized_use) {
        return this.httpClient.post('/api/usecontrol/reportunauthorizeduse', '' + report_unauthorized_use);
    };
    // getDetectedTime return: field 'int_message' format second
    UseControlService.prototype.getDetectedTime = function () {
        return this.httpClient.get('/api/usecontrol/detectedtime');
    };
    // setDetectedTime format second
    UseControlService.prototype.setDetectedTime = function (detected_time) {
        return this.httpClient.post('/api/usecontrol/detectedtime', '' + detected_time);
    };
    // getLog return: field 'message'
    UseControlService.prototype.getLog = function () {
        return this.httpClient.get('/api/usecontrol/log');
    };
    // getLastTime return: field 'int_message' format second
    UseControlService.prototype.getLastTime = function () {
        return this.httpClient.get('/api/usecontrol/lasttime');
    };
    UseControlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UseControlService);
    return UseControlService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    UserService.prototype.login = function (password) {
        return this.httpClient.post('/api/login', {
            password: password
        });
    };
    UserService.prototype.logout = function () {
        return this.httpClient.get('/api/user/logout');
    };
    UserService.prototype.passwordNew = function (old_password, new_password) {
        return this.httpClient.post('/api/user/password/new', {
            new_password: new_password,
            old_password: old_password
        });
    };
    // passwordRecovery by password_email. Message with a new password to client email address
    UserService.prototype.passwordRecovery = function (password_email) {
        return this.httpClient.post('/api/user/password/recovery', {
            password_email: password_email
        });
    };
    // getSMTPServer Array SMTP-servers that support the server 'HomeControl'
    UserService.prototype.getSMTPServer = function () {
        return this.httpClient.get('/api/user/email/smtpserver');
    };
    UserService.prototype.settingsEmail = function (password, login_email, password_email, smtp_server) {
        return this.httpClient.post('/api/user/email', {
            password: password,
            login_email: login_email,
            password_email: password_email,
            smtp_server: smtp_server,
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/store/actions/appActions.ts":
/*!*********************************************!*\
  !*** ./src/app/store/actions/appActions.ts ***!
  \*********************************************/
/*! exports provided: RELOAD_ARRAY, GO_RELOAD_ARRAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELOAD_ARRAY", function() { return RELOAD_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO_RELOAD_ARRAY", function() { return GO_RELOAD_ARRAY; });
var RELOAD_ARRAY = 'RELOAD_ARRAY';
var GO_RELOAD_ARRAY = 'GO_RELOAD_ARRAY';


/***/ }),

/***/ "./src/app/store/reducers/appReducer.ts":
/*!**********************************************!*\
  !*** ./src/app/store/reducers/appReducer.ts ***!
  \**********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_appActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/appActions */ "./src/app/store/actions/appActions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initalSate = {
    type: {},
    list_controlled: [],
    list_commands: [],
    list_command_record: [],
};
function reducer(state, action) {
    if (state === void 0) { state = initalSate; }
    switch (action.type) {
        case _actions_appActions__WEBPACK_IMPORTED_MODULE_0__["RELOAD_ARRAY"]:
            return __assign({}, state, { type: action.type, list_controlled: action.list_controlled, list_commands: action.list_commands, list_command_record: action.list_command_record });
        case _actions_appActions__WEBPACK_IMPORTED_MODULE_0__["GO_RELOAD_ARRAY"]:
            return __assign({}, state, { type: action.type, list_controlled: state.list_controlled, list_commands: state.list_commands, list_command_record: state.list_command_record });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: Reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reducers", function() { return Reducers; });
/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appReducer */ "./src/app/store/reducers/appReducer.ts");

var Reducers = {
    appReducer: _appReducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/peterkorotkiy/go/src/homecontrol/goserver/webhomecontrol/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
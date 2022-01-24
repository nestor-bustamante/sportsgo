"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var crypto_js_1 = require("crypto-js");
require("./Register.scss");
var Footer_1 = require("../../components/Footer/Footer");
var sportsgo_logo_alt_svg_1 = require("../../assets/img/sportsgo-logo-alt.svg");
var Register = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var _l = react_hook_form_1.useForm({ shouldUnregister: true }), register = _l.register, handleSubmit = _l.handleSubmit, setError = _l.setError, errors = _l.formState.errors;
    var _m = react_1.useState({
        name: '',
        lastname: '',
        email: '',
        emailConf: '',
        pass: '',
        passConf: ''
    }), datos = _m[0], setDatos = _m[1];
    var handleInputChange = function (ev) {
        var _a;
        setDatos(__assign(__assign({}, datos), (_a = {}, _a[ev.target.name] = ev.target.value, _a)));
        return ev;
    };
    var createCrypto = function (name, data) {
        var _a;
        var cipher = crypto_js_1["default"].SHA3(data, { outputLength: 512 });
        setDatos(__assign(__assign({}, datos), (_a = {}, _a[name] = cipher.toString(), _a)));
    };
    var onSubmit = function (data, e) {
        createCrypto('pass', data.pass);
        handleFormSubmit(e);
        e.preventDefault();
    };
    var handleFormSubmit = function (ev) {
        ev.preventDefault();
    };
    var validEmail = function (value, target) {
        if (target.type === 'email') {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                target.classList.add("error");
            }
            else {
                target.classList.remove("error");
            }
        }
    };
    return (React.createElement(react_1.Fragment, null,
        React.createElement("div", { className: "sportsgo-wrapper height-full-vh" },
            React.createElement("div", { className: "row height-full-percentage" },
                React.createElement("div", { className: "col col-6 display-flex align-center" },
                    React.createElement("div", { className: "row width-full" },
                        React.createElement("div", { className: "col col-8 margin-center" },
                            React.createElement("h6", null, "Registrarse"),
                            React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col col-6" },
                                        React.createElement("fieldset", null,
                                            React.createElement("label", { htmlFor: "name" },
                                                React.createElement("legend", null, "Nombre"),
                                                React.createElement("input", __assign({}, register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'Ingrese un nombre'
                                                    },
                                                    minLength: 1
                                                }), { type: "text", placeholder: "Ej. Juan", name: "name", id: "name", className: errors.name && errors.name.message ? 'error' : '', value: datos.name, onChange: function (e) {
                                                        handleInputChange(e);
                                                        setError("name", {
                                                            type: "required"
                                                        });
                                                    } }))),
                                            React.createElement("span", { className: "form-error" }, (_a = errors === null || errors === void 0 ? void 0 : errors.name) === null || _a === void 0 ? void 0 : _a.message))),
                                    React.createElement("div", { className: "col col-6" },
                                        React.createElement("fieldset", null,
                                            React.createElement("label", { htmlFor: "lastname" },
                                                React.createElement("legend", null, "Apellido"),
                                                React.createElement("input", __assign({}, register("lastname", {
                                                    required: {
                                                        value: true,
                                                        message: 'Ingrese un apellido'
                                                    },
                                                    minLength: 1
                                                }), { type: "text", placeholder: "Ej. P\u00E9rez", name: "lastname", id: "lastname", value: datos.lastname, className: errors.lastname && errors.lastname.message ? 'error' : '', onChange: function (e) {
                                                        handleInputChange(e);
                                                        setError("lastname", {
                                                            type: "required"
                                                        });
                                                    } }))),
                                            React.createElement("span", { className: "form-error" }, (_b = errors === null || errors === void 0 ? void 0 : errors.lastname) === null || _b === void 0 ? void 0 : _b.message))),
                                    React.createElement("div", { className: "col col-6" },
                                        React.createElement("fieldset", null,
                                            React.createElement("label", { htmlFor: "email" },
                                                React.createElement("legend", null, "Correo"),
                                                React.createElement("input", __assign({}, register("email", {
                                                    required: {
                                                        value: true,
                                                        message: 'Ingrese un correo'
                                                    }
                                                }), { type: "email", placeholder: "Ej. hola@mundo.cl", name: "email", id: "email", value: datos.email, className: errors.email && errors.email.message ? 'error' : '', onChange: function (e) {
                                                        handleInputChange(e);
                                                        validEmail(e.target.value, e.target);
                                                        setError("email", {
                                                            type: "required"
                                                        });
                                                    } }))),
                                            React.createElement("span", { className: "form-error" }, (_c = errors === null || errors === void 0 ? void 0 : errors.email) === null || _c === void 0 ? void 0 :
                                                _c.message,
                                                " "))),
                                    React.createElement("div", { className: "col col-6" },
                                        React.createElement("fieldset", null,
                                            React.createElement("label", { htmlFor: "emailConf" },
                                                React.createElement("legend", null, "Confirma Correo"),
                                                React.createElement("input", __assign({}, register("emailConf", {
                                                    required: {
                                                        value: true,
                                                        message: 'Confirme el correo'
                                                    },
                                                    validate: {
                                                        compare: function (value) { return value === datos.email; }
                                                    }
                                                }), { type: "email", placeholder: "Ej. hola@mundo.cl", name: "emailConf", id: "emailConf", value: datos.emailConf, className: (errors.emailConf && errors.emailConf.message) || (((_d = errors.emailConf) === null || _d === void 0 ? void 0 : _d.type) === "compare") ? 'error' : '', onChange: function (e) {
                                                        handleInputChange(e);
                                                        validEmail(e.target.value, e.target);
                                                        setError("emailConf", {
                                                            type: "required"
                                                        });
                                                    } }))),
                                            React.createElement("span", { className: "form-error" }, (_e = errors === null || errors === void 0 ? void 0 : errors.emailConf) === null || _e === void 0 ? void 0 : _e.message),
                                            ((_f = errors.emailConf) === null || _f === void 0 ? void 0 : _f.type) === "compare" && React.createElement("span", { className: "form-error" }, "El correo no coincide"))),
                                    React.createElement("div", { className: "col col-6" },
                                        React.createElement("fieldset", null,
                                            React.createElement("label", { htmlFor: "pass" },
                                                React.createElement("legend", null, "Contrase\u00F1a"),
                                                React.createElement("input", __assign({}, register("pass", {
                                                    required: {
                                                        value: true,
                                                        message: 'ingrese una contraseña'
                                                    },
                                                    minLength: 6
                                                }), { type: "password", name: "pass", id: "pass", className: errors.pass && errors.pass.message ? 'error' : '', onChange: function (e) {
                                                        handleInputChange(e);
                                                        setError("pass", {
                                                            type: "required"
                                                        });
                                                    } }))),
                                            React.createElement("span", { className: "form-error" }, (_g = errors === null || errors === void 0 ? void 0 : errors.pass) === null || _g === void 0 ? void 0 : _g.message))),
                                    React.createElement("div", { className: "col col-6" },
                                        React.createElement("fieldset", null,
                                            React.createElement("label", { htmlFor: "passConf" },
                                                React.createElement("legend", null, "Confirma Contrase\u00F1a"),
                                                React.createElement("input", __assign({}, register("passConf", {
                                                    required: {
                                                        value: true,
                                                        message: 'Confirme contraseña'
                                                    },
                                                    minLength: 6,
                                                    validate: {
                                                        compare: function (value) { return value === datos.pass; }
                                                    }
                                                }), { type: "password", name: "passConf", id: "passConf", className: (errors.passConf && errors.passConf.message) || (((_h = errors.passConf) === null || _h === void 0 ? void 0 : _h.type) === "compare") ? 'error' : '', onChange: function (e) {
                                                        handleInputChange(e);
                                                        setError("passConf", {
                                                            type: "required",
                                                            message: "Las contraseñas deben coincidir"
                                                        });
                                                    } }))),
                                            React.createElement("span", { className: "form-error" }, (_j = errors === null || errors === void 0 ? void 0 : errors.passConf) === null || _j === void 0 ? void 0 : _j.message),
                                            ((_k = errors.passConf) === null || _k === void 0 ? void 0 : _k.type) === "compare" && React.createElement("span", { className: "form-error" }, "La contrase\u00F1a no coincide")))),
                                React.createElement("fieldset", null,
                                    React.createElement("button", { type: "submit", className: "primary" }, "Ingresar")))))),
                React.createElement("div", { className: "col col-6 display-flex align-center resp-none" },
                    React.createElement("div", { className: "logo-center" },
                        React.createElement("img", { src: sportsgo_logo_alt_svg_1["default"], alt: "sportsgo.tv" }))))),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = Register;

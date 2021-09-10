"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
var decorators_1 = require("./decorators");
/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 *
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The function "onInitialize" is called immediately after the constructor is called.
 * The functions "onStart" and "onUpdate" are called automatically.
 */
var MyScript = /** @class */ (function (_super) {
    __extends(MyScript, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function MyScript() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    MyScript.prototype.onInitialize = function () {
        // ...
        console.log("Init");
        this.position.y = 0;
    };
    /**
     * Called on the scene starts.
     */
    MyScript.prototype.onStart = function () {
        var _this = this;
        //alert(this.faceMur);
        this._scene.onKeyboardObservable.add(function (kbInfo) {
            switch (kbInfo.type) {
                case core_1.KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case "z":
                        case "Z":
                            _this.position.x -= 2;
                            if (_this.intersectsMesh(_this.faceMur, true)) {
                                //     //alert("Yess ")
                                _this.lightMur.position = _this.getAbsolutePosition();
                                var ip = _this.getAbsolutePosition();
                                var colorball = _this.material;
                                colorball.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                                console.log(_this.material);
                                //     //let circle = MeshBuilder.CreateIcoSphere("circle", {},this._scene)
                                //     //circle.position = this.tab.getAbsolutePosition();
                                var TabColor = _this.tab.material;
                                TabColor.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                                //     //console.log(this.faceMur.getAbsolutePosition());
                                //     //console.log(this.getAbsolutePosition());
                            }
                            // else {
                            // }
                            if (_this.intersectsMesh(_this.OX1, true)) {
                                var OX1Color = _this.OX1.material;
                                OX1Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                            }
                            if (_this.intersectsMesh(_this.OX2, true)) {
                                var OX2Color = _this.OX2.material;
                                OX2Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                            }
                            if (_this.intersectsMesh(_this.OX3, true)) {
                                var OX3Color = _this.OX3.material;
                                OX3Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                            }
                            if (_this.intersectsMesh(_this.OX4, true)) {
                                var OX4Color = _this.OX4.material;
                                OX4Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                            }
                            if (_this.intersectsMesh(_this.OX5, true)) {
                                var OX5Color = _this.OX5.material;
                                OX5Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                            }
                            if (_this.intersectsMesh(_this.OX6, true)) {
                                var OX6Color = _this.OX6.material;
                                OX6Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                            }
                            if (_this.intersectsMesh(_this.OX7, true)) {
                                var OX7Color = _this.OX7.material;
                                OX7Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                            }
                            if (_this.intersectsMesh(_this.OX8, true)) {
                                var OX8Color = _this.OX8.material;
                                OX8Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                            }
                            if (_this.intersectsMesh(_this.OX9, true)) {
                                var OX9Color = _this.OX9.material;
                                OX9Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
                            }
                            break;
                        case "s":
                        case "S":
                            _this.position.x += 2;
                            break;
                        case "h":
                        case "H":
                            _this.position.y += 2;
                            break;
                        case "b":
                        case "B":
                            _this.position.y -= 2;
                            break;
                        case "q":
                        case "Q":
                            _this.position.z -= 2;
                            break;
                        case "d":
                        case "D":
                            _this.position.z += 2;
                            break;
                        case "p":
                        case "P":
                            _this.physicsImpostor = new core_1.PhysicsImpostor(_this, core_1.PhysicsImpostor.MeshImpostor, { mass: 1, friction: 0.5, restitution: 0.5 }, _this._scene);
                            _this.physicsImpostor.applyImpulse(_this.right.scale(-25), _this.getAbsolutePosition());
                            break;
                        case "m":
                        case "M":
                            _this.physicsImpostor = new core_1.PhysicsImpostor(_this, core_1.PhysicsImpostor.MeshImpostor, { mass: 1, friction: 0.5, restitution: 0.5 }, _this._scene);
                            _this.physicsImpostor.applyImpulse(_this.right.scale(25), _this.getAbsolutePosition());
                            break;
                    }
                    break;
            }
        });
        // ...
    };
    /**
     * Called each frame.
     */
    MyScript.prototype.onUpdate = function () {
        if (this.intersectsMesh(this.faceMur, true)) {
            this.lightMur.position = this.getAbsolutePosition();
            var ip = this.getAbsolutePosition();
            var colorball = this.material;
            colorball.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
            console.log(this.material);
            var TabColor = this.tab.material;
            TabColor.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        if (this.intersectsMesh(this.OX1, true)) {
            var OX1Color = this.OX1.material;
            OX1Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        if (this.intersectsMesh(this.OX2, true)) {
            var OX2Color = this.OX2.material;
            OX2Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        if (this.intersectsMesh(this.OX3, true)) {
            var OX3Color = this.OX3.material;
            OX3Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        if (this.intersectsMesh(this.OX4, true)) {
            var OX4Color = this.OX4.material;
            OX4Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        if (this.intersectsMesh(this.OX5, true)) {
            var OX5Color = this.OX5.material;
            OX5Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        if (this.intersectsMesh(this.OX6, true)) {
            var OX6Color = this.OX6.material;
            OX6Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        if (this.intersectsMesh(this.OX7, true)) {
            var OX7Color = this.OX7.material;
            OX7Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        if (this.intersectsMesh(this.OX8, true)) {
            var OX8Color = this.OX8.material;
            OX8Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        if (this.intersectsMesh(this.OX9, true)) {
            var OX9Color = this.OX9.material;
            OX9Color.emissiveColor = new core_1.Color3(Math.random(), Math.random(), Math.random());
        }
        // ...
    };
    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    MyScript.prototype.onMessage = function (name, data, sender) {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    };
    __decorate([
        decorators_1.fromScene("ballLight")
    ], MyScript.prototype, "lightMur", void 0);
    __decorate([
        decorators_1.fromScene("faceMur")
    ], MyScript.prototype, "faceMur", void 0);
    __decorate([
        decorators_1.fromScene("tab")
    ], MyScript.prototype, "tab", void 0);
    __decorate([
        decorators_1.fromScene("OX1")
    ], MyScript.prototype, "OX1", void 0);
    __decorate([
        decorators_1.fromScene("OX2")
    ], MyScript.prototype, "OX2", void 0);
    __decorate([
        decorators_1.fromScene("OX3")
    ], MyScript.prototype, "OX3", void 0);
    __decorate([
        decorators_1.fromScene("OX4")
    ], MyScript.prototype, "OX4", void 0);
    __decorate([
        decorators_1.fromScene("OX5")
    ], MyScript.prototype, "OX5", void 0);
    __decorate([
        decorators_1.fromScene("OX6")
    ], MyScript.prototype, "OX6", void 0);
    __decorate([
        decorators_1.fromScene("OX7")
    ], MyScript.prototype, "OX7", void 0);
    __decorate([
        decorators_1.fromScene("OX8")
    ], MyScript.prototype, "OX8", void 0);
    __decorate([
        decorators_1.fromScene("OX9")
    ], MyScript.prototype, "OX9", void 0);
    return MyScript;
}(core_1.Mesh));
exports.default = MyScript;
//# sourceMappingURL=ball.js.map
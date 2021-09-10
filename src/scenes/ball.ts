import { Color3, KeyboardEventTypes, Mesh, MeshBuilder, Node, PhysicsImpostor, PointLight, Scene, StandardMaterial } from "@babylonjs/core";
import { fromScene } from "./decorators";

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
export default class MyScript extends Mesh {


    @fromScene("ballLight")
    private lightMur: PointLight;

    @fromScene("faceMur")
    private faceMur: Mesh;

    @fromScene("tab")
    private tab: Mesh;

    @fromScene("OX1")
    private OX1: Mesh;

    @fromScene("OX2")
    private OX2: Mesh;

    @fromScene("OX3")
    private OX3: Mesh;

    @fromScene("OX4")
    private OX4: Mesh;

    @fromScene("OX5")
    private OX5: Mesh;

    @fromScene("OX6")
    private OX6: Mesh;

    @fromScene("OX7")
    private OX7: Mesh;

    @fromScene("OX8")
    private OX8: Mesh;

    @fromScene("OX9")
    private OX9: Mesh;

    
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    
    protected constructor() { 
    }

    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    public onInitialize(): void {
        // ...
        console.log("Init");
        this.position.y=0;

    }

    /**
     * Called on the scene starts.
     */
    public onStart(): void {
        //alert(this.faceMur);
        this._scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case "z":
                        case "Z":

                            this.position.x -= 2;
                            
                             if (this.intersectsMesh(this.faceMur,true)) {
                            //     //alert("Yess ")
                             this.lightMur.position = this.getAbsolutePosition();
                             let ip = this.getAbsolutePosition();
                             let colorball = this.material as StandardMaterial
                            colorball.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                console.log(this.material);
                            //     //let circle = MeshBuilder.CreateIcoSphere("circle", {},this._scene)
                                
                            //     //circle.position = this.tab.getAbsolutePosition();

                             let TabColor = this.tab.material as StandardMaterial;
                                 TabColor.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                                
                                
                                
                            //     //console.log(this.faceMur.getAbsolutePosition());
                            //     //console.log(this.getAbsolutePosition());

                             }
                            // else {

                            // }

                            if (this.intersectsMesh(this.OX1,true)) {
                                let OX1Color = this.OX1.material as StandardMaterial;
                                OX1Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                            }

                            if (this.intersectsMesh(this.OX2,true)) {
                                let OX2Color = this.OX2.material as StandardMaterial;
                                OX2Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                            }

                            if (this.intersectsMesh(this.OX3,true)) {
                                let OX3Color = this.OX3.material as StandardMaterial;
                                OX3Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                            }

                            if (this.intersectsMesh(this.OX4,true)) {
                                let OX4Color = this.OX4.material as StandardMaterial;
                                OX4Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                            }

                            if (this.intersectsMesh(this.OX5,true)) {
                                let OX5Color = this.OX5.material as StandardMaterial;
                                OX5Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                            }

                            if (this.intersectsMesh(this.OX6,true)) {
                                let OX6Color = this.OX6.material as StandardMaterial;
                                OX6Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                            }

                            if (this.intersectsMesh(this.OX7,true)) {
                                let OX7Color = this.OX7.material as StandardMaterial;
                                OX7Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                            }

                            if (this.intersectsMesh(this.OX8,true)) {
                                let OX8Color = this.OX8.material as StandardMaterial;
                                OX8Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                            }

                            if (this.intersectsMesh(this.OX9,true)) {
                                let OX9Color = this.OX9.material as StandardMaterial;
                                OX9Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
                                
                            }

                            
                            
                        break
                        case "s":
                        case "S":
                            this.position.x += 2;
                            
                        break
                        case "h":
                        case "H":
                            this.position.y += 2;
                        break
                        case "b":
                        case "B":
                            this.position.y -= 2;
                        break
                        case "q":
                        case "Q":
                        this.position.z -= 2;
                        break
                            case "d":
                            case "D":
                            this.position.z += 2;
                        break
                        case "p":
                            case "P":
                                this.physicsImpostor = new PhysicsImpostor(this,PhysicsImpostor.MeshImpostor,{mass:1,friction:0.5,restitution:0.5},this._scene);
                                this.physicsImpostor.applyImpulse(this.right.scale(-25),this.getAbsolutePosition());
    
                        break

                        case "m":
                            case "M":
                                this.physicsImpostor = new PhysicsImpostor(this,PhysicsImpostor.MeshImpostor,{mass:1,friction:0.5,restitution:0.5},this._scene);
                                this.physicsImpostor.applyImpulse(this.right.scale(25),this.getAbsolutePosition());
                                
                        break
                    }
                break;
            }
        });
        
        // ...
        
    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        
        if (this.intersectsMesh(this.faceMur,true)) {
                                    
            this.lightMur.position = this.getAbsolutePosition();
            let ip = this.getAbsolutePosition();
            let colorball = this.material as StandardMaterial
           colorball.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               console.log(this.material);
       
            let TabColor = this.tab.material as StandardMaterial;
                TabColor.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())

            }

           if (this.intersectsMesh(this.OX1,true)) {
               let OX1Color = this.OX1.material as StandardMaterial;
               OX1Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               
           }

           if (this.intersectsMesh(this.OX2,true)) {
               let OX2Color = this.OX2.material as StandardMaterial;
               OX2Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               
           }

           if (this.intersectsMesh(this.OX3,true)) {
               let OX3Color = this.OX3.material as StandardMaterial;
               OX3Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               
           }

           if (this.intersectsMesh(this.OX4,true)) {
               let OX4Color = this.OX4.material as StandardMaterial;
               OX4Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               
           }

           if (this.intersectsMesh(this.OX5,true)) {
               let OX5Color = this.OX5.material as StandardMaterial;
               OX5Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               
           }

           if (this.intersectsMesh(this.OX6,true)) {
               let OX6Color = this.OX6.material as StandardMaterial;
               OX6Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               
           }

           if (this.intersectsMesh(this.OX7,true)) {
               let OX7Color = this.OX7.material as StandardMaterial;
               OX7Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               
           }

           if (this.intersectsMesh(this.OX8,true)) {
               let OX8Color = this.OX8.material as StandardMaterial;
               OX8Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               
           }

           if (this.intersectsMesh(this.OX9,true)) {
               let OX9Color = this.OX9.material as StandardMaterial;
               OX9Color.emissiveColor = new Color3(Math.random(),Math.random(),Math.random())
               
           }
        // ...
    }

    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    public onMessage(name: string, data: any, sender: any): void {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    }

    

    
}

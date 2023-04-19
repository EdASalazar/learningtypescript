"use strict";
// abstract class is only a blueprint
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation 
        return 8;
    }
}
// const ed = new TakePhoto("test", "Test")
// class Instagram extends TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number 
//     ){
//       super(cameraMode, filter)
//     }
//     getSepia(): void {
//       console.log("Sepia")
//     }
// }
// const es = new Instagram("test", "test", 3)
// es.getReelTime()

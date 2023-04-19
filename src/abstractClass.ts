// abstract class is only a blueprint


abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}

  abstract getSepia(): void
  getReelTime(): number {
    // some complex calculation 
    return 8
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
import {
  PoseLandmarker,
  FilesetResolver,
  DrawingUtils
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/vision_bundle.mjs";

window.PoseLandmarker = PoseLandmarker;
window.FilesetResolver = FilesetResolver;
window.DrawingUtils    = DrawingUtils; 
window._mpReady = true;
window.dispatchEvent(new Event("mpReady"));
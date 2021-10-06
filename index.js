const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

ffmpeg('./videos/video1.mp4')
  .audioFilter('silencedetect=n=-10dB:d=0.1')
  .output('silenciadou.mp4')
  .run();

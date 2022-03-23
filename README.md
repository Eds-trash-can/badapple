# Brasil video player

A thing to sends you video files to brazil (like air drop)

(converts video file to braille)

## usage:

0. DEPENDENCIES!

   1. `npm i` (inside the downloaded folder)

   2. `sudo apt install graphicsmagick ffmpeg` (used to work with video & braille things)

1. Aquire video
   whatever youtube downloader or yt-dlp or sth idk

2. Check for a good threshold:

   1. `sh test.sh /path/to/video`

   2. `sh testplay.sh`

   3. Whichever number looks best is your new threshold!

3. Convert entire video: `node convert.js /path/to/video <fps> <number> /path/to/output` (this is gonna take a while)

4. Play or convert to script: 

  - playing: `node play.js /path/to/previous/output`

  - converting to shell scirpt: `node script.js /path/to/previous/output <echo or wall> /path/to/file.sh` 

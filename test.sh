#! /bin/sh
if [ $# -eq 0 ]
then
	echo "no arguments!"
	echo "usage: sh test.sh /path/to/video"
	exit
fi

echo using file $1
echo getting first 5 seconds of supplied video
ffmpeg -ss 00:00:00 -to 00:00:05 -i $1 -c copy ./clip.mkv
echo 5 second clip file ./clip.mkv

# doing every threshhold from 25 to 40
for i in $(seq 25 40);
do
	echo th $i of 40
	node convert.js ./clip.mkv 2 $i ./files/$i.json
done

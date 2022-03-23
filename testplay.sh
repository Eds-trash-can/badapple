#! /bin/sh

echo playing back examples:

for i in $(seq 25 40);
do
	echo this was $(echo $i-1 | bc)
	echo now playing $i \<- the '"number"'
	sleep 2
	node play.js ./files/$i.json
done

echo this was 40 \<- the '"number"'

#!/bin/sh

if [ $# != 1 ] ; then

    echo "usage: $0 iconfont.svg(your svg file name)  "
    exit
fi
#初始化字体
cp -f src/icon/iconfont.js node_modules/react-native-vector-icons/
cp -f src/icon/iconfont.ttf node_modules/react-native-vector-icons/Fonts/
#初始化swiper
cp -f src/swiper/index.js node_modules/react-native-swiper/src/

#OutputFile path,you can customize your path
OutputFileName=`echo node_modules/react-native-vector-icons/glyphmaps/iconfont.json`

mapper=` awk '{ if($0 ~ /glyph-name/) print $0;  if($0 ~ /unicode/)  print $0"|split|" }'  $1| tr '[:upper:]' '[:lower:]'| awk '{print $0}'  RS='\='| tr "\n\"&#;" " "| awk  '{ if ($1!="split"&&$1!=""){ printf ("\""$3"\":"); printf ($5","); print "\r " }}' RS="|split|" | sed "s/-/_/g"`

if [ -f "$OutputFileName" ];then
rm $OutputFileName
fi
echo "{" >> $OutputFileName
echo $mapper >> $OutputFileName
echo "}" >> $OutputFileName

#usage:
# ./iconfont_mapper.sh svg_file_path
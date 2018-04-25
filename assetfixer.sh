#!/bin/bash

if [[ $# -eq 0 ]]; then
    echo "$(basename $0) page_name upload_folder_hash"
    echo -e "\t * page_name ./pages/page_name.vue file neve."
    echo -e "\t\t Ezt fogjuk hasznalni ./assets/page_name-ben is, ahova a fileokat toltjuk le majd."
    echo -e "\t\t pl elofizetes"
    echo -e "\t * upload_folder_hash a peddellus altal, a content pagehez generalt hash"
    echo -e "\t\t pl f105f123"
    echo -e "example ./assetfixer.sh elofizetes f105f123"
    exit 0
fi

echo $1 $2

# megcsinaljuk a mappat neki
mkdir -p assets/$1

# .vue page-bol kiemeljuk a megfelelo img url-eket, amiket utana letoltheto linkke alakitunk, majd letoltunk az assets ala
cat ./pages/$1.vue | grep -o -e "img/$2/[^\"]*" | xargs -I% echo 'http://app.netacademia.hu/%' | xargs wget -P ./assets/$1
# ha tobbszor is hasznalunk a html-ben egy assetet akkor tobbszor letoltottuk, amit .szam-al jelol a wget. Ezeket toroljuk.
find ./assets/$1 -name "*.[0-9]" -delete

# fileban helyben bkp nelkul kicsereljuk a hivatkozasokat
sed -i '' "s/img\/$2/\~\/assets\/$1/g" ./pages/$1.vue


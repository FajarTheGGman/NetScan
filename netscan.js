// jangan di recode yak :) 
// cape gw buat nya 
// Copyright© 2019 by Fajar Firdaus
var req = require('request');
var cmd = require('prompt');
var warna = require('colors');
var file = require('fs');

console.log(" +----------------+")
console.log(" |     =====      |")
console.log(" |                |")
console.log(" |F:\> NetScan     |")
console.log(" |                |")
console.log(" +----------------+")
console.log(warna.rainbow("       NetScan"));

console.log("")
console.log(warna.rainbow("[====================]"));
console.log(warna.gray.underline("Coder : Fajar Firdaus"));
console.log(warna.gray.underline("FB : Fajar Firdaus / Ace.of.spades729"));
console.log(warna.gray.underline("IG : fajar_firdaus_7"));
console.log(warna.gray.underline("YT : iTech7372"));
console.log(warna.rainbow("[====================]"));
console.log("")
console.log("")
console.log("[=====Command Help=====]")
console.log("-rev (reverse ip)")
console.log("-lacak (lacak ip website)")
console.log("-header (cek header website)")
console.log("-tcp (scan tcp port)")
console.log("-subnet (subnet calculator)")
console.log("-dns (scan dns website)")
console.log("-revdns (reverse dns)")
console.log("-who (infogathering website)")
console.log("[=====Command Help=====]")
console.log("")

cmd.get(['Cmd', 'Masukan_input'], function(error,result){
if (result.Cmd == rev){
    console.log(rev)
}else if (result.Cmd == lacak){
    console.log(lacak)
}else if (result.Cmd == header){
    console.log(header)
}else if (result.Cmd == tcp){
    console.log(tcp)
}else if (result.Cmd == subnet){
    console.log(subnet)
}else if (result.Cmd == dnslook){
    console.log(dnslook)
}else if (result.Cmd == revdns){
    console.log(revdns)
}else if (result.Cmd == who){
    console.log(who)
}
var rev = req("https://api.hackertarget.com/reverseiplookup/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var lacak = req("https://api.hackertarget.com/geoip/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var header = req("https://api.hackertarget.com/httpheaders/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var tcp = req("https://api.hackertarget.com/nmap/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var subnet = req("https://api.hackertarget.com/subnetcalc/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var dnslook = req("https://api.hackertarget.com/dnslookup/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var revdns = req("https://api.hackertarget.com/reversedns/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body);
});

var who = req("https://api.hackertarget.com/whois/?q=" + result.Masukan_input, function(error, response, body){
    console.log(body)
});
});
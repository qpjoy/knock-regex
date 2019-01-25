# kncok regex


> `1.` match separate word(\b)
```
/\b(ok(ay)?|sure|y(es)?)\b/i
```
> `2.` not return groups(?:)
```
'1 Reindeer Lane, North Pole, AK 99705'.match(/^(\d+\s[\w\s]+(?:street|lane)),\s([\w\s]+),\s(\w{2})\s(\d{5})$/i);
```
> `3.` match multiple lines(/mig)
```
`King penguin
Emperor penguin
Wandering albatross
Arctic Tern
Narwhal
Rockhopper Penguin
Weddell seal`.match(/^\w+\spenguin|albatross|tern$/mig);
```
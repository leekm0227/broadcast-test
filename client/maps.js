/*

MAP SYMBOLS:
♀ : player spawn point
= : brick
c : cliff
g : tall grass
G : gravestone/tombstone
h : hen/chicken
k : kitty
p : path/cobblestone
r : rock
^ : roof shingles
t : small tree
T : big tree
+ : dead tree
w : water
0 : door to current world level 0
1 : door to current world level 1
2 : door to current world level 2
3 : door to current world level 3
4 : door to current world level 4
5 : door to current world level 5
6 : door to current world level 6
7 : door to current world level 7
8 : door to current world level 8
9 : door to current world level 9
① : warp to world 1-0

*/
let maps = [
  [  // begin world 0
    {
      showTitleScreen: true,
      bgImage: "grass", //either "grass", "sand", "cave"
      map: ["tttttttttttttttttttt",
        "t                TTt",
        "t                TTt",
        "t   tt             t",
        "t   tt    cc       t",
        "t         cc       t",
        "t         cc       t",
        "t         cc       t",
        "t                  t",
        "t  g               t",
        "t  gg              t",
        "t  gg       www ww t",
        "t  gg       ww  ww t",
        "t  gg       ww wwp t",
        "t           ww wwp t",
        "t           ww ppp t",
        "t       ^^^ ww ppp t",
        "t       ===        t",
        "t       ===        t",
        "tttttttttttttttttttt"]
    }
  ]
];
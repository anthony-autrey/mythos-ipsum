/*
   Combo of Gailic and Romanian

   Romanian:
      Lots of ae ea u a



*/




let startWithVowelProbabilityPercentage = 75;
let useConsonantPrefixProbabilityPercentage = 30;
let useConsonantSuffixProbabilityPercentage = 50;

let consonants = {
   b: {
      weight: 5,
      beginning: [{ grapheme: `b`, weight: 10 }],
      middle: [
         { grapheme: `b`, weight: 10 },
      ],
      end: [
         { grapheme: ``, weight: 1 },
      ]
   },
   d: {
      weight: 7,
      beginning: [{ grapheme: `d`, weight: 1 }],
      middle: [
         { grapheme: `d`, weight: 1 },
      ],
      end: [
         { grapheme: `d`, weight: 3 },
         { grapheme: `ed`, weight: 10 },
         { grapheme: `ds`, weight: 3 }, // postvocalic cluster
         { grapheme: `eds`, weight: 10 } // postvocalic cluster
      ]
   },
   f: {
      weight: 10,
      beginning: [
         { grapheme: `f`, weight: 10 },
         { grapheme: `fh`, weight: 5 },
      ],
      middle: [
         { grapheme: `f`, weight: 10 },
         { grapheme: `fh`, weight: 2 },
         { grapheme: `lf`, weight: 4 }
      ],
      end: [
         { grapheme: `f`, weight: 10 },
         { grapheme: `lf`, weight: 40 },
         { grapheme: `fs`, weight: 8 }, // postvocalic cluster
         { grapheme: `lfs`, weight: 10 }, // postvocalic cluster
         { grapheme: `ft`, weight: 2 } // postvocalic cluster
      ]
   },
   g: {
      weight: 3,
      beginning: [
         { grapheme: ``, weight: 1 },
      ],
      middle: [
         { grapheme: `g`, weight: 10 },
      ],
      end: [
         { grapheme: `g`, weight: 10 },
         { grapheme: `ged`, weight: 3 }, // postvocalic cluster
         { grapheme: `gs`, weight: 5 }, // postvocalic cluster
      ]
   },
   h: {
      weight: 15,
      beginning: [
         { grapheme: `h`, weight: 1 },
      ],
      middle: [{ grapheme: `h`, weight: 1 }],
      end: [{ grapheme: ``, weight: 0 }]
   },
   j: {
      weight: 0,
      beginning: [
         { grapheme: `j`, weight: 10 },
         { grapheme: `ge`, weight: 10 },
         { grapheme: `g`, weight: 10 },
         { grapheme: `di`, weight: 10 }
      ],
      middle: [
         { grapheme: `j`, weight: 10 },
         { grapheme: `ge`, weight: 10 },
         { grapheme: `g`, weight: 10 },
         { grapheme: `dge`, weight: 10 },
         { grapheme: `di`, weight: 10 },
         { grapheme: `gg`, weight: 10 }
      ],
      end: [
         { grapheme: `j`, weight: 10 },
         { grapheme: `ge`, weight: 10 },
         { grapheme: `dge`, weight: 10 },
         { grapheme: `ged`, weight: 10 }, // postvocalic cluster
         { grapheme: `dged`, weight: 10 }, // postvocalic cluster
         { grapheme: `ges`, weight: 10 }, // postvocalic cluster
         { grapheme: `dges`, weight: 10 } // postvocalic cluster
      ]
   },
   k: {
      weight: 6,
      beginning: [
         { grapheme: `c`, weight: 10 },
         { grapheme: `sc`, weight: 1 }, // prevocalic cluster
      ],
      middle: [
         { grapheme: `c`, weight: 10 },
         { grapheme: `cc`, weight: 3 },
         { grapheme: `sc`, weight: 5 }, // prevocalic cluster
      ],
      end: [
         { grapheme: `c`, weight: 5 },
         { grapheme: `sc`, weight: 10 }, // prevocalic cluster
      ]
   },
   l: {
      weight: 15,
      beginning: [
         { grapheme: `l`, weight: 10 },
         { grapheme: `ll`, weight: 5 },
         { grapheme: `sl`, weight: 2 }, // prevocalic cluster
         { grapheme: `cl`, weight: 2 }, // prevocalic cluster
         { grapheme: `fl`, weight: 4 }, // prevocalic cluster
         { grapheme: `bl`, weight: 2 }, // prevocalic cluster
      ],
      middle: [
         { grapheme: `l`, weight: 10 },
         { grapheme: `ll`, weight: 6 },
         { grapheme: `sl`, weight: 2 }, // prevocalic cluster
         { grapheme: `cl`, weight: 2 }, // prevocalic cluster
         { grapheme: `fl`, weight: 2 }, // prevocalic cluster
         { grapheme: `gl`, weight: 1 }, // prevocalic cluster
         { grapheme: `pl`, weight: 2 } // prevocalic cluster
      ],
      end: [
         { grapheme: `l`, weight: 100 },
         { grapheme: `le`, weight: 100 },
         { grapheme: `ll`, weight: 10 },
         { grapheme: `sle`, weight: 50 }, // prevocalic cluster
         { grapheme: `ld`, weight: 50 }, // postvocalic cluster
         { grapheme: `lf`, weight: 100 }, // postvocalic cluster
         { grapheme: `lg`, weight: 5 }, // postvocalic cluster
         { grapheme: `lgs`, weight: 5 }, // postvocalic cluster
         { grapheme: `lged`, weight: 1 }, // postvocalic cluster
         { grapheme: `lge`, weight: 1 }, // postvocalic cluster
         { grapheme: `ldge`, weight: 1 }, // postvocalic cluster
         { grapheme: `lged`, weight: 5 }, // postvocalic cluster
         { grapheme: `ldged`, weight: 1 }, // postvocalic cluster
         { grapheme: `ldges`, weight: 1 }, // postvocalic cluster
         { grapheme: `lges`, weight: 1 }, // postvocalic cluster
         { grapheme: `lsc`, weight: 5 }, // postvocalic cluster
         { grapheme: `lm`, weight: 10 }, // postvocalic cluster
         { grapheme: `lmn`, weight: 30 }, // postvocalic cluster
         { grapheme: `ln`, weight: 40 }, // postvocalic cluster
         { grapheme: `lp`, weight: 10 }, // postvocalic cluster
         { grapheme: `ls`, weight: 10 }, // postvocalic cluster
         { grapheme: `lst`, weight: 10 }, // postvocalic cluster
         { grapheme: `lce`, weight: 10 }, // postvocalic cluster
         { grapheme: `lse`, weight: 10 }, // postvocalic cluster
         { grapheme: `lt`, weight: 10 }, // postvocalic cluster
         { grapheme: `lst`, weight: 10 }, // postvocalic cluster
         { grapheme: `lssed`, weight: 1 }, // postvocalic cluster
         { grapheme: `lve`, weight: 10 }, // postvocalic cluster
         { grapheme: `lsh`, weight: 10 }, // postvocalic cluster
         { grapheme: `lth`, weight: 10 } // postvocalic cluster
      ]
   },
   m: {
      weight: 12,
      beginning: [
         { grapheme: `m`, weight: 1 },
      ],
      middle: [
         { grapheme: `m`, weight: 10 },
         { grapheme: `mn`, weight: 5 },
         { grapheme: `lm`, weight: 12 },
         { grapheme: `sm`, weight: 5 } // prevocalic cluster
      ],
      end: [
         { grapheme: `m`, weight: 10 },
         { grapheme: `mn`, weight: 5 },
         { grapheme: `lm`, weight: 12 },
         { grapheme: `sm`, weight: 5 }, // prevocalic cluster
         { grapheme: `ms`, weight: 3 }, // postvocalic cluster
         { grapheme: `mns`, weight: 3 }, // postvocalic cluster
         { grapheme: `lms`, weight: 3 }, // postvocalic cluster
      ]
   },
   n: {
      weight: 15,
      beginning: [
         { grapheme: `n`, weight: 1 },
      ],
      middle: [
         { grapheme: `n`, weight: 10 },
         { grapheme: `sn`, weight: 5 } // prevocalic cluster
      ],
      end: [
         { grapheme: `n`, weight: 10 },
         { grapheme: `nd`, weight: 2 }, // postvocalic cluster
         { grapheme: `nds`, weight: 1 }, // postvocalic cluster
         { grapheme: `ned`, weight: 1 }, // postvocalic cluster
         { grapheme: `ns`, weight: 2 }, // postvocalic cluster
         { grapheme: `nt`, weight: 2 }, // postvocalic cluster
         { grapheme: `nts`, weight: 1 }, // postvocalic cluster
         { grapheme: `nth`, weight: 3 }, // postvocalic cluster
         { grapheme: `nths`, weight: 1 } // postvocalic cluster
      ]
   },
   p: {
      weight: 2,
      beginning: [
         { grapheme: `sp`, weight: 10 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `p`, weight: 5 },
         { grapheme: `sp`, weight: 10 } // prevocalic cluster
      ],
      end: [
         { grapheme: ``, weight: 1 }, // postvocalic cluster
      ]
   },
   r: {
      weight: 15,
      beginning: [
         { grapheme: `r`, weight: 10 },
         { grapheme: `rh`, weight: 1 },
         { grapheme: `tr`, weight: 2 }, // prevocalic cluster,
         { grapheme: `dr`, weight: 10 }, // prevocalic cluster,
         { grapheme: `fr`, weight: 10 }, // prevocalic cluster,
         { grapheme: `cr`, weight: 10 }, // prevocalic cluster,
         { grapheme: `pr`, weight: 10 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `r`, weight: 10 },
         { grapheme: `rh`, weight: 1 },
         { grapheme: `tr`, weight: 2 }, // prevocalic cluster
         { grapheme: `dr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `fr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `br`, weight: 5 }, // prevocalic cluster,
         { grapheme: `gr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `cr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `pr`, weight: 5 } // prevocalic cluster
      ],
      end: [
         { grapheme: `r`, weight: 500 },
         { grapheme: `rh`, weight: 10 },
         { grapheme: `rd`, weight: 10 }, // postvocalic cluster
         { grapheme: `red`, weight: 10 }, // postvocalic cluster
         { grapheme: `rds`, weight: 10 }, // postvocalic cluster
         { grapheme: `rf`, weight: 10 }, // postvocalic cluster
         { grapheme: `rlf`, weight: 200 }, // postvocalic cluster
         { grapheme: `rft`, weight: 10 }, // postvocalic cluster
         { grapheme: `rfs`, weight: 10 }, // postvocalic cluster
         { grapheme: `rg`, weight: 10 }, // postvocalic cluster
         { grapheme: `rged`, weight: 10 }, // postvocalic cluster
         { grapheme: `rgs`, weight: 10 }, // postvocalic cluster
         { grapheme: `rge`, weight: 10 }, // postvocalic cluster
         { grapheme: `rdge`, weight: 10 }, // postvocalic cluster
         { grapheme: `rged`, weight: 10 }, // postvocalic cluster
         { grapheme: `rdged`, weight: 10 }, // postvocalic cluster
         { grapheme: `rges`, weight: 10 }, // postvocalic cluster
         { grapheme: `rdges`, weight: 10 }, // postvocalic cluster
         { grapheme: `rc`, weight: 10 }, // postvocalic cluster
         { grapheme: `rsc`, weight: 10 }, // postvocalic cluster
         { grapheme: `rl`, weight: 10 }, // postvocalic cluster
         { grapheme: `rle`, weight: 10 }, // postvocalic cluster
         { grapheme: `rld`, weight: 10 }, // postvocalic cluster
         { grapheme: `rm`, weight: 10 }, // postvocalic cluster
         { grapheme: `rn`, weight: 10 }, // postvocalic cluster
         { grapheme: `rns`, weight: 10 }, // postvocalic cluster
         { grapheme: `rms`, weight: 10 }, // postvocalic cluster
         { grapheme: `rnt`, weight: 10 }, // postvocalic cluster
         { grapheme: `rs`, weight: 10 }, // postvocalic cluster
         { grapheme: `rd`, weight: 10 }, // postvocalic cluster
         { grapheme: `red`, weight: 10 }, // postvocalic cluster
         { grapheme: `rf`, weight: 10 }, // postvocalic cluster
         { grapheme: `rlf`, weight: 10 }, // postvocalic cluster
         { grapheme: `rft`, weight: 10 }, // postvocalic cluster
         { grapheme: `rfs`, weight: 10 }, // postvocalic cluster
         { grapheme: `rg`, weight: 10 }, // postvocalic cluster
         { grapheme: `rgs`, weight: 10 }, // postvocalic cluster
         { grapheme: `rge`, weight: 10 }, // postvocalic cluster
         { grapheme: `rc`, weight: 10 }, // postvocalic cluster
         { grapheme: `rsc`, weight: 10 }, // postvocalic cluster
         { grapheme: `rl`, weight: 10 }, // postvocalic cluster
         { grapheme: `rle`, weight: 10 }, // postvocalic cluster
         { grapheme: `rld`, weight: 10 }, // postvocalic cluster
         { grapheme: `rm`, weight: 10 }, // postvocalic cluster
         { grapheme: `rn`, weight: 10 }, // postvocalic cluster
         { grapheme: `rns`, weight: 10 }, // postvocalic cluster
         { grapheme: `rms`, weight: 10 }, // postvocalic cluster
         { grapheme: `rnt`, weight: 10 }, // postvocalic cluster
         { grapheme: `rp`, weight: 10 }, // postvocalic cluster
         { grapheme: `rps`, weight: 10 }, // postvocalic cluster
         { grapheme: `rst`, weight: 10 }, // postvocalic cluster
         { grapheme: `rce`, weight: 10 }, // postvocalic cluster
         { grapheme: `rse`, weight: 10 }, // postvocalic cluster
         { grapheme: `rt`, weight: 10 }, // postvocalic cluster
         { grapheme: `rve`, weight: 10 }, // postvocalic cluster
         { grapheme: `rves`, weight: 10 }, // postvocalic cluster
         { grapheme: `rsh`, weight: 10 }, // postvocalic cluster
         { grapheme: `rth`, weight: 10 } // postvocalic cluster
      ]
   },
   s: {
      weight: 15,
      beginning: [
         { grapheme: `s`, weight: 10 },
         { grapheme: `sc`, weight: 2 },
         { grapheme: `st`, weight: 2 },
         { grapheme: `ce`, weight: 2 },
         { grapheme: `se`, weight: 2 }
      ],
      middle: [
         { grapheme: `s`, weight: 10 },
         { grapheme: `sc`, weight: 2 },
         { grapheme: `ps`, weight: 2 },
         { grapheme: `st`, weight: 2 },
         { grapheme: `ce`, weight: 2 },
         { grapheme: `se`, weight: 2 }
      ],
      end: [
         { grapheme: `s`, weight: 50 },
         { grapheme: `ce`, weight: 2 },
         { grapheme: `se`, weight: 10 },
         { grapheme: `sed`, weight: 2 }, // postvocalic cluster
         { grapheme: `ced`, weight: 2 }, // postvocalic cluster
         { grapheme: `st`, weight: 1 } // postvocalic cluster
      ]
   },
   t: {
      weight: 7,
      beginning: [
         { grapheme: `t`, weight: 10 },
         { grapheme: `th`, weight: 2 },
         { grapheme: `st`, weight: 1 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `t`, weight: 10 },
         { grapheme: `th`, weight: 1 },
         { grapheme: `st`, weight: 10 } // prevocalic cluster
      ],
      end: [
         { grapheme: `th`, weight: 5 },
         { grapheme: `t`, weight: 10 },
         { grapheme: `st`, weight: 1 }, // prevocalic cluster
         { grapheme: `ssed`, weight: 1 } // prevocalic cluster
      ]
   },
   v: {
      weight: 10,
      beginning: [{ grapheme: `v`, weight: 1 }],
      middle: [
         { grapheme: `v`, weight: 1 },
      ],
      end: [
         { grapheme: `v`, weight: 10 },
         { grapheme: `ve`, weight: 5 },
         { grapheme: `f`, weight: 20 }
      ]
   },
   w: {
      weight: 0,
      beginning: [
         { grapheme: `w`, weight: 10 },
         { grapheme: `wh`, weight: 10 },
         { grapheme: `ou`, weight: 10 },
         { grapheme: `sw`, weight: 10 }, // prevocalic cluster
         { grapheme: `dw`, weight: 10 }, // prevocalic cluster
         { grapheme: `tw`, weight: 10 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `w`, weight: 10 },
         { grapheme: `wh`, weight: 10 },
         { grapheme: `sw`, weight: 10 }, // prevocalic cluster
         { grapheme: `dw`, weight: 10 }, // prevocalic cluster
         { grapheme: `tw`, weight: 10 } // prevocalic cluster
      ],
      end: [{ grapheme: `w`, weight: 10 }]
   },
   z: {
      weight: 0,
      beginning: [
         { grapheme: `z`, weight: 10 },
         { grapheme: `x`, weight: 10 }
      ],
      middle: [
         { grapheme: `z`, weight: 10 },
         { grapheme: `zz`, weight: 10 },
         { grapheme: `s`, weight: 10 },
         { grapheme: `ss`, weight: 10 },
         { grapheme: `x`, weight: 10 }
      ],
      end: [
         { grapheme: `z`, weight: 10 },
         { grapheme: `zz`, weight: 10 },
         { grapheme: `ze`, weight: 10 }
      ]
   },
   ch: {
      weight: 0,
      beginning: [{ grapheme: `ch`, weight: 10 }],
      middle: [
         { grapheme: `ch`, weight: 10 },
         { grapheme: `tch`, weight: 10 },
         { grapheme: `tu`, weight: 10 },
         { grapheme: `ti`, weight: 10 },
         { grapheme: `te`, weight: 10 }
      ],
      end: [
         { grapheme: `ch`, weight: 10 },
         { grapheme: `tch`, weight: 10 }
      ]
   },
   sh: {
      weight: 3,
      beginning: [
         { grapheme: `sh`, weight: 10 },
      ],
      middle: [
         { grapheme: `sh`, weight: 10 },
         { grapheme: `sci`, weight: 5 },
         { grapheme: `ti`, weight: 5 }
      ],
      end: [
         { grapheme: `sh`, weight: 10 },
      ]
   },
   th: {
      weight: 6,
      beginning: [{ grapheme: `th`, weight: 10 }],
      middle: [{ grapheme: `th`, weight: 10 }],
      end: [{ grapheme: `th`, weight: 10 }]
   },
   ng: {
      weight: 0,
      beginning: [{ grapheme: `n`, weight: 10 }],
      middle: [
         { grapheme: `ng`, weight: 10 },
         { grapheme: `n`, weight: 10 },
         { grapheme: `ngue`, weight: 10 }
      ],
      end: [
         { grapheme: `ng`, weight: 10 },
         { grapheme: `ngue`, weight: 10 }
      ]
   },
   y: {
      weight: 0,
      beginning: [
         { grapheme: `y`, weight: 10 },
         { grapheme: `j`, weight: 10 }
      ],
      middle: [
         { grapheme: `y`, weight: 10 },
         { grapheme: `j`, weight: 10 },
         { grapheme: `io`, weight: 10 }
      ],
      end: [{ grapheme: `y`, weight: 10 }]
   }
};

let vowels = {
   a: {
      weight: 15,
      beginning: [
         { grapheme: `a`, weight: 10 },
         { grapheme: `ai`, weight: 2 },
         { grapheme: `au`, weight: 4 }
      ],
      middle: [
         { grapheme: `a`, weight: 10 },
         { grapheme: `ai`, weight: 3 },
         { grapheme: `au`, weight: 5 }
      ],
      end: [{ grapheme: ``, weight: 10 }]
   },
   ay: {
      weight: 12,
      beginning: [
         { grapheme: `ae`, weight: 8 },
         { grapheme: `ai`, weight: 4 },
         { grapheme: `aigh`, weight: 2 },
      ],
      middle: [
         { grapheme: `ae`, weight: 10 },
         { grapheme: `ai`, weight: 5 },
         { grapheme: `aigh`, weight: 4 },
         { grapheme: `ei`, weight: 2 },
         { grapheme: `ea`, weight: 3 },
      ],
      end: [
         { grapheme: `ae`, weight: 1 },
      ]
   },
   e: {
      weight: 15,
      beginning: [
         { grapheme: `æ`, weight: 6 },
         { grapheme: `e`, weight: 10 },
      ],
      middle: [
         { grapheme: `æ`, weight: 8 },
         { grapheme: `e`, weight: 10 },
         { grapheme: `ẹ`, weight: 30 },
         { grapheme: `ea`, weight: 4 },
         { grapheme: `ae`, weight: 6 },
      ],
      end: [
         { grapheme: `ae`, weight: 10 },
         { grapheme: `ê`, weight: 10 },
      ]
   },
   ee: {
      weight: 4,
      beginning: [
         { grapheme: `y`, weight: 1 },
      ],
      middle: [
         { grapheme: `e`, weight: 5 },
         { grapheme: `oe`, weight: 10 },
         { grapheme: `ie`, weight: 4 },
         { grapheme: `ei`, weight: 3 },
      ],
      end: [
         { grapheme: `ey`, weight: 3 },
         { grapheme: `i`, weight: 8 },
         { grapheme: `ei`, weight: 5 }
      ]
   },
   i: {
      weight: 10,
      beginning: [
         { grapheme: `i`, weight: 10 },
         { grapheme: `y`, weight: 1 }
      ],
      middle: [
         { grapheme: `i`, weight: 4 },
         { grapheme: `â`, weight: 10 }
      ],
      end: [
         { grapheme: `e`, weight: 10 },
         { grapheme: `â`, weight: 2 },
         { grapheme: `ie`, weight: 10 }
      ]
   },
   eye: {
      weight: 8,
      beginning: [
         { grapheme: `is`, weight: 7 },
         { grapheme: `í`, weight: 10 },
         { grapheme: `ai`, weight: 4 },
      ],
      middle: [
         { grapheme: `ae`, weight: 10 },
         { grapheme: `ie`, weight: 5 },
         { grapheme: `ye`, weight: 5 },
         { grapheme: `ai`, weight: 8 },
      ],
      end: [
         { grapheme: `ie`, weight: 5 },
         { grapheme: `ae`, weight: 10 }
      ]
   },
   ah: {
      weight: 20,
      beginning: [
         { grapheme: `à`, weight: 1 },
      ],
      middle: [
         { grapheme: `à`, weight: 10 },
         { grapheme: `a`, weight: 10 },
         { grapheme: `au`, weight: 2 },
      ],
      end: [
         { grapheme: `a`, weight: 10 },
         { grapheme: `au`, weight: 5 },
      ]
   },
   oh: {
      weight: 10,
      beginning: [
         { grapheme: `o`, weight: 1 },
      ],
      middle: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `oe`, weight: 2 },
      ],
      end: [
         { grapheme: `o`, weight: 13 },
         { grapheme: `oa`, weight: 10 },
      ]
   },
   oo: {
      weight: 0,
      beginning: [
         { grapheme: `oo`, weight: 10 },
         { grapheme: `u`, weight: 10 },
         { grapheme: `ou`, weight: 10 }
      ],
      middle: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `oo`, weight: 10 },
         { grapheme: `u`, weight: 10 },
         { grapheme: `ou`, weight: 10 }
      ],
      end: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `oo`, weight: 10 },
         { grapheme: `u`, weight: 10 },
         { grapheme: `ou`, weight: 10 }
      ]
   },
   uh: {
      weight: 0,
      beginning: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `u`, weight: 10 },
         { grapheme: `ou`, weight: 10 }
      ],
      middle: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `oo`, weight: 10 },
         { grapheme: `u`, weight: 10 },
         { grapheme: `ou`, weight: 10 }
      ],
      end: [{ grapheme: `uh`, weight: 10 }]
   },
   ew: {
      weight: 0,
      beginning: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `oo`, weight: 10 },
         { grapheme: `ew`, weight: 10 },
         { grapheme: `ue`, weight: 10 },
         { grapheme: `oe`, weight: 10 },
         { grapheme: `ough`, weight: 10 },
         { grapheme: `ou`, weight: 10 }
      ],
      middle: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `oo`, weight: 10 },
         { grapheme: `ew`, weight: 10 },
         { grapheme: `ue`, weight: 10 },
         { grapheme: `oe`, weight: 10 },
         { grapheme: `ough`, weight: 10 },
         { grapheme: `ui`, weight: 10 },
         { grapheme: `ou`, weight: 10 }
      ],
      end: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `oo`, weight: 10 },
         { grapheme: `ew`, weight: 10 },
         { grapheme: `ue`, weight: 10 },
         { grapheme: `oe`, weight: 10 },
         { grapheme: `ough`, weight: 10 },
         { grapheme: `ui`, weight: 10 },
         { grapheme: `ou`, weight: 10 }
      ]
   },
   oy: {
      weight: 1,
      beginning: [
         { grapheme: `oi`, weight: 10 },
         { grapheme: `oy`, weight: 10 }
      ],
      middle: [
         { grapheme: `oi`, weight: 10 },
         { grapheme: `oy`, weight: 10 }
      ],
      end: [
         { grapheme: `oi`, weight: 10 },
         { grapheme: `oy`, weight: 10 },
         { grapheme: `uoy`, weight: 10 }
      ]
   },
   ow: {
      weight: 4,
      beginning: [
         { grapheme: `au`, weight: 10 },
      ],
      middle: [
         { grapheme: `au`, weight: 10 },
         { grapheme: `ou`, weight: 5 },
      ],
      end: [
         { grapheme: ``, weight: 1 },
      ]
   },
   ae: {
      weight: 5,
      beginning: [
         { grapheme: ``, weight: 1 },
      ],
      middle: [
         { grapheme: `a`, weight: 10 },
         { grapheme: `er`, weight: 4 },
         { grapheme: `ar`, weight: 4 },
      ],
      end: [
         { grapheme: `a`, weight: 2 },
         { grapheme: `ă`, weight: 10 },
      ]
   },
   air: {
      weight: 15,
      beginning: [
         
         { grapheme: `aer`, weight: 10 },
         { grapheme: `ere`, weight: 5 },
      ],
      middle: [
         { grapheme: `are`, weight: 5 },
         { grapheme: `aer`, weight: 10 },
         { grapheme: `ere`, weight: 10 },
      ],
      end: [
         { grapheme: `aer`, weight: 10 },
         { grapheme: `ere`, weight: 10 },
         { grapheme: `eir`, weight: 2 },
      ]
   },
   ur: {
      weight: 0,
      beginning: [
         { grapheme: `ir`, weight: 10 },
         { grapheme: `er`, weight: 10 },
         { grapheme: `ur`, weight: 10 },
         { grapheme: `ear`, weight: 10 },
         { grapheme: `or`, weight: 10 },
         { grapheme: `our`, weight: 10 },
         { grapheme: `yr`, weight: 10 }
      ],
      middle: [
         { grapheme: `ir`, weight: 10 },
         { grapheme: `er`, weight: 10 },
         { grapheme: `ur`, weight: 10 },
         { grapheme: `ear`, weight: 10 },
         { grapheme: `or`, weight: 10 },
         { grapheme: `our`, weight: 10 },
         { grapheme: `yr`, weight: 10 }
      ],
      end: [
         { grapheme: `ir`, weight: 10 },
         { grapheme: `er`, weight: 10 },
         { grapheme: `ur`, weight: 10 },
         { grapheme: `ear`, weight: 10 },
         { grapheme: `or`, weight: 10 },
         { grapheme: `our`, weight: 10 },
         { grapheme: `yr`, weight: 10 }
      ]
   },
   aw_or: {
      weight: 7,
      beginning: [
         { grapheme: `à`, weight: 10 },
      ],
      middle: [
         { grapheme: `à`, weight: 10 },
         { grapheme: `ar`, weight: 1 },
      ],
      end: [
         { grapheme: ``, weight: 1 }
      ]
   },
   eer: {
      weight: 2,
      beginning: [
         { grapheme: `yr`, weight: 1 },
      ],
      middle: [
         { grapheme: `ir`, weight: 10 },
         { grapheme: `oer`, weight: 1 }
      ],
      end: [
         { grapheme: `ir`, weight: 10 },
      ]
   },
   ewer: {
      weight: 5,
      beginning: [
         { grapheme: ``, weight: 1 },
      ],
      middle: [
         { grapheme: `ũr`, weight: 1 },
      ],
      end: [
         { grapheme: `ũr`, weight: 1 },
      ]
   },
   el: {
      weight: 20,
      beginning: [{ grapheme: `el`, weight: 10 }],
      middle: [{ grapheme: `el`, weight: 10 }],
      end: [
         { grapheme: `el`, weight: 10 },
         { grapheme: `le`, weight: 10 }
      ]
   },
   apostrophe: {
      weight: 0,
      beginning: [{ grapheme: ``, weight: 10 }],
      middle: [{ grapheme: `'`, weight: 10 }],
      end: [{ grapheme: ``, weight: 10 }]
   }
};

let vowelPhonemeArray = getWeightedVowelPhonemeArray();
let consonantPhonemeArray = getWeightedConsonantPhonemeArray();

function getWeightedVowelPhonemeArray() {
   let weightedVowelPhonemeArray = [];
   Object.keys(vowels).forEach(vowelKey => {
      let weight = vowels[vowelKey].weight;
      for (let i = 0; i < weight; i++) {
         weightedVowelPhonemeArray.push(vowelKey);
      }
   });

   return weightedVowelPhonemeArray;
}

function getWeightedConsonantPhonemeArray() {
   let weightedPhonemeArray = [];
   Object.keys(consonants).forEach(consonantKey => {
      let weight = consonants[consonantKey].weight;
      for (let i = 0; i < weight; i++) {
         weightedPhonemeArray.push(consonantKey);
      }
   });

   return weightedPhonemeArray;
}

function getWeightedVowelGraphemeArray(vowelPhoneme, type) {
   let weightedGraphemeArray = [];
   let graphemeOptions = vowelPhoneme[type];
   graphemeOptions.forEach(option => {
      let weight = option.weight;
      for (let i = 0; i < weight; i++) {
         weightedGraphemeArray.push(option.grapheme);
      }
   });

   return weightedGraphemeArray;
}

function getWeightedConsonantGraphemeArray(consonantPhoneme, type) {
   let weightedGraphemeArray = [];
   let graphemeOptions = consonantPhoneme[type];
   graphemeOptions.forEach(option => {
      let weight = option.weight;
      for (let i = 0; i < weight; i++) {
         weightedGraphemeArray.push(option.grapheme);
      }
   });

   return weightedGraphemeArray;
}

function getRandomVowel(type) {
   let vowel = ``;

   while (!vowel) {
      let vowelLength = vowelPhonemeArray.length;
      let randomVowelKey = vowelPhonemeArray[getRandomInt(0, vowelLength - 1)];
      let vowelPhoneme = vowels[randomVowelKey];

      let firstVowelOptions = getWeightedVowelGraphemeArray(vowelPhoneme, type);
      vowel = firstVowelOptions[getRandomInt(0, firstVowelOptions.length - 1)];
   }

   return vowel;
}

function getRandomPrefix() {
   let prefix = ``;

   while (!prefix) {
      let consonantLength = consonantPhonemeArray.length;
      let randomConsonantKey = consonantPhonemeArray[getRandomInt(0, consonantLength - 1)];
      let prefixPhoneme = consonants[randomConsonantKey];
      let prefixOptions = getWeightedConsonantGraphemeArray(prefixPhoneme, `beginning`);
      prefix = prefixOptions[getRandomInt(0, prefixOptions.length - 1)];
   }

   return prefix;
}

function getRandomSuffix() {
   let suffix = ``;

   while (!suffix) {
      let consonantLength = consonantPhonemeArray.length;
      let randomConsonantKey = consonantPhonemeArray[getRandomInt(0, consonantLength - 1)];
      let suffixPhoneme = consonants[randomConsonantKey];
      let suffixOptions = getWeightedConsonantGraphemeArray(suffixPhoneme, `end`);
      suffix = suffixOptions[getRandomInt(0, suffixOptions.length - 1)];
   }

   return suffix;
}

function capitalizeWord(word) {
   return word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
}

function getRandomName(lengthModifier) {
   return capitalizeWord(getRandomWord(lengthModifier));
}

function getRandomUUID(wordLength = 5) {
   let uuid = ``;
   for (let i = 0; i < wordLength; i++) uuid += getRandomWord(getRandomInt(0,2)) + `-`;
   return uuid.slice(0, uuid.length - 1);
}

function getRandomParagraph() {
   let paragraphLength = getRandomInt(20, 30);
   let paragraph = ``;
   for (let i = 0; i < paragraphLength; i++) {
      paragraph += `${getRandomSentence()} `;
   }
   return paragraph;
}

function getRandomSentence() {
   let sentenceLength = getRandomInt(3, 10);
   let sentence = getRandomName();
   for (let i = 0; i < sentenceLength; i++) {
      let comma = ``;
      if (getRandomInt(1, 100) > 90 && i != sentenceLength - 1) comma = `,`;
      sentence += ` ${getRandomWord()}${comma}`;
   }
   return `${sentence}.`;
}

function getRandomWord(lengthModifier = 0) {
   let syllableLength = getWordLength() + lengthModifier;

   let usingPrefix = getRandomInt(1, 100) > startWithVowelProbabilityPercentage;
   let usingSuffix = getRandomInt(1, 100) < useConsonantSuffixProbabilityPercentage;
   if (!usingPrefix && !usingSuffix) {
      let random = getRandomInt(1, 100) > startWithVowelProbabilityPercentage;
      if (random) usingPrefix = true;
      else usingSuffix = true;
   }

   let vowelType = `middle`;
   if (!usingPrefix) vowelType = `beginning`;
   if (!usingSuffix && syllableLength - 1 <= 1) vowelType = `end`;
   let firstVowel = getRandomVowel(vowelType);

   let prefix = ``;
   let suffix = ``;
   if (usingPrefix) prefix = getRandomPrefix();
   if (usingSuffix) suffix = getRandomSuffix();

   let word = `${prefix}${firstVowel}${suffix}`;

   for (let i = 0; i < syllableLength - 1; i++) {
      usingPrefix = getRandomInt(1, 100) < useConsonantPrefixProbabilityPercentage;
      if (!usingSuffix) usingPrefix = true;
      usingSuffix = getRandomInt(1, 100) < useConsonantSuffixProbabilityPercentage;
      prefix = ``;
      suffix = ``;
      if (usingPrefix) prefix = getRandomPrefix();
      if (usingSuffix) suffix = getRandomSuffix();

      if (i == syllableLength - 2 && !usingSuffix) vowelType = `end`;
      else vowelType = `middle`;
      let vowel = getRandomVowel(vowelType);
      let newSyllable = `${prefix}${vowel}${suffix}`;
      word += newSyllable;
   }

   return word;
}

function getWordLength() {
   let rand = Math.round(Math.random() * 10);
   let trans = Math.pow(rand - 4.8, 2.5) * 0.01 + 1.14;
   let rounded = Math.round(trans);

   return rounded;
}

function getRandomInt(min, max) {
   let rand = Math.random() * (max - min) + min;
   let rounded = Math.round(rand);
   return rounded;
}

module.exports = {
    getRandomName,
    getRandomParagraph,
    getRandomSentence,
    getRandomUUID
}
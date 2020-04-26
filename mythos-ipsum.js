let startWithVowelProbabilityPercentage = 50;
let useConsonantPrefixProbabilityPercentage = 50;
let useConsonantSuffixProbabilityPercentage = 50;

let consonants = {
   b: {
      weight: 5,
      beginning: [{ grapheme: `b`, weight: 1 }],
      middle: [
         { grapheme: `b`, weight: 30 },
         { grapheme: `bb`, weight: 1 }
      ],
      end: [
         { grapheme: `b`, weight: 100 },
         { grapheme: `bb`, weight: 5 },
         { grapheme: `bs`, weight: 70 }, // postvocalic cluster
         { grapheme: `bbs`, weight: 1 }, // postvocalic cluster
         { grapheme: `bz`, weight: 1 }, // postvocalic cluster
         { grapheme: `bbz`, weight: 1 } // postvocalic cluster
      ]
   },
   d: {
      weight: 9,
      beginning: [{ grapheme: `d`, weight: 1 }],
      middle: [
         { grapheme: `d`, weight: 20 },
         { grapheme: `dd`, weight: 1 }
      ],
      end: [
         { grapheme: `d`, weight: 20 },
         { grapheme: `dd`, weight: 5 },
         { grapheme: `ed`, weight: 10 },
         { grapheme: `ds`, weight: 10 }, // postvocalic cluster
         { grapheme: `dds`, weight: 1 }, // postvocalic cluster
         { grapheme: `eds`, weight: 10 } // postvocalic cluster
      ]
   },
   f: {
      weight: 8,
      beginning: [
         { grapheme: `f`, weight: 20 },
         { grapheme: `ph`, weight: 1 }
      ],
      middle: [
         { grapheme: `f`, weight: 30 },
         { grapheme: `ff`, weight: 3 },
         { grapheme: `ph`, weight: 1 },
         { grapheme: `gh`, weight: 1 },
         { grapheme: `lf`, weight: 1 }
      ],
      end: [
         { grapheme: `f`, weight: 30 },
         { grapheme: `ff`, weight: 5 },
         { grapheme: `ph`, weight: 1 },
         { grapheme: `gh`, weight: 1 },
         { grapheme: `lf`, weight: 1 },
         { grapheme: `ft`, weight: 1 },
         { grapheme: `fk`, weight: 5 }, // postvocalic cluster
         { grapheme: `fs`, weight: 5 }, // postvocalic cluster
         { grapheme: `ffs`, weight: 1 }, // postvocalic cluster
         { grapheme: `phs`, weight: 1 }, // postvocalic cluster
         { grapheme: `ghs`, weight: 1 }, // postvocalic cluster
         { grapheme: `lfs`, weight: 5 }, // postvocalic cluster
         { grapheme: `ft`, weight: 5 } // postvocalic cluster
      ]
   },
   g: {
      weight: 5,
      beginning: [
         { grapheme: `g`, weight: 100 },
         { grapheme: `gh`, weight: 5 },
         { grapheme: `gu`, weight: 1 },
         { grapheme: `gue`, weight: 1 }
      ],
      middle: [
         { grapheme: `g`, weight: 100 },
         { grapheme: `gg`, weight: 1 },
         { grapheme: `gh`, weight: 10 },
         { grapheme: `gu`, weight: 1 },
         { grapheme: `gue`, weight: 1 }
      ],
      end: [
         { grapheme: `g`, weight: 50 },
         { grapheme: `gg`, weight: 1 },
         { grapheme: `gue`, weight: 1 },
         { grapheme: `ged`, weight: 10 }, // postvocalic cluster
         { grapheme: `gued`, weight: 1 }, // postvocalic cluster
         { grapheme: `gged`, weight: 1 }, // postvocalic cluster
         { grapheme: `gs`, weight: 10 }, // postvocalic cluster
         { grapheme: `ggs`, weight: 1 }, // postvocalic cluster
         { grapheme: `gues`, weight: 1 }, // postvocalic cluster
         { grapheme: `gz`, weight: 1 }, // postvocalic cluster
         { grapheme: `ggz`, weight: 1 }, // postvocalic cluster
         { grapheme: `guez`, weight: 1 } // postvocalic cluster
      ]
   },
   h: {
      weight: 10,
      beginning: [
         { grapheme: `h`, weight: 20 },
         { grapheme: `wh`, weight: 1 }
      ],
      middle: [{ grapheme: `h`, weight: 1 }],
      end: [{ grapheme: `h`, weight: 1 }]
   },
   j: {
      weight: 1,
      beginning: [
         { grapheme: `j`, weight: 1 },
         { grapheme: `ge`, weight: 1 },
         { grapheme: `g`, weight: 10 },
         { grapheme: `di`, weight: 1 }
      ],
      middle: [
         { grapheme: `j`, weight: 1 },
         { grapheme: `ge`, weight: 10 },
         { grapheme: `g`, weight: 10 },
         { grapheme: `dge`, weight: 10 },
         { grapheme: `di`, weight: 1 },
         { grapheme: `gg`, weight: 1 }
      ],
      end: [
         { grapheme: `j`, weight: 1 },
         { grapheme: `ge`, weight: 10 },
         { grapheme: `dge`, weight: 10 },
         { grapheme: `ged`, weight: 10 }, // postvocalic cluster
         { grapheme: `dged`, weight: 5 }, // postvocalic cluster
         { grapheme: `ges`, weight: 5 }, // postvocalic cluster
         { grapheme: `dges`, weight: 5 } // postvocalic cluster
      ]
   },
   k: {
      weight: 8,
      beginning: [
         { grapheme: `c`, weight: 20 },
         { grapheme: `k`, weight: 10 },
         { grapheme: `qu`, weight: 1 },
         { grapheme: `sc`, weight: 5 }, // prevocalic cluster
         { grapheme: `sk`, weight: 5 }, // prevocalic cluster
         { grapheme: `squ`, weight: 1 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `c`, weight: 50 },
         { grapheme: `k`, weight: 10 },
         { grapheme: `ch`, weight: 5 },
         { grapheme: `cc`, weight: 3 },
         { grapheme: `lk`, weight: 1 },
         { grapheme: `qu`, weight: 1 },
         { grapheme: `ck`, weight: 1 },
         { grapheme: `x`, weight: 1 },
         { grapheme: `sc`, weight: 5 }, // prevocalic cluster
         { grapheme: `sk`, weight: 5 }, // prevocalic cluster
         { grapheme: `squ`, weight: 5 } // prevocalic cluster
      ],
      end: [
         { grapheme: `c`, weight: 1 },
         { grapheme: `k`, weight: 50 },
         { grapheme: `ch`, weight: 10 },
         { grapheme: `lk`, weight: 20 },
         { grapheme: `que`, weight: 1 },
         { grapheme: `ck`, weight: 40 },
         { grapheme: `x`, weight: 1 },
         { grapheme: `sc`, weight: 6 }, // prevocalic cluster
         { grapheme: `sk`, weight: 10 }, // prevocalic cluster
         { grapheme: `sque`, weight: 1 } // prevocalic cluster
      ]
   },
   l: {
      weight: 20,
      beginning: [
         { grapheme: `l`, weight: 50 },
         { grapheme: `ll`, weight: 1 },
         { grapheme: `sl`, weight: 10 }, // prevocalic cluster
         { grapheme: `kl`, weight: 1 }, // prevocalic cluster
         { grapheme: `cl`, weight: 20 }, // prevocalic cluster
         { grapheme: `chl`, weight: 1 }, // prevocalic cluster
         { grapheme: `fl`, weight: 5 }, // prevocalic cluster
         { grapheme: `bl`, weight: 5 }, // prevocalic cluster
         { grapheme: `gl`, weight: 5 }, // prevocalic cluster
         { grapheme: `pl`, weight: 5 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `l`, weight: 10 },
         { grapheme: `ll`, weight: 1 },
         { grapheme: `sl`, weight: 1 }, // prevocalic cluster
         { grapheme: `kl`, weight: 1 }, // prevocalic cluster
         { grapheme: `cl`, weight: 1 }, // prevocalic cluster
         { grapheme: `chl`, weight: 1 }, // prevocalic cluster
         { grapheme: `fl`, weight: 1 }, // prevocalic cluster
         { grapheme: `bl`, weight: 1 }, // prevocalic cluster
         { grapheme: `gl`, weight: 1 }, // prevocalic cluster
         { grapheme: `pl`, weight: 1 } // prevocalic cluster
      ],
      end: [
         { grapheme: `l`, weight: 100 },
         { grapheme: `le`, weight: 100 },
         { grapheme: `ll`, weight: 1 },
         { grapheme: `sle`, weight: 5 }, // prevocalic cluster
         { grapheme: `lb`, weight: 5 }, // postvocalic cluster
         { grapheme: `ld`, weight: 5 }, // postvocalic cluster
         { grapheme: `lf`, weight: 5 }, // postvocalic cluster
         { grapheme: `lg`, weight: 5 }, // postvocalic cluster
         { grapheme: `lgs`, weight: 3 }, // postvocalic cluster
         { grapheme: `lgue`, weight: 1 }, // postvocalic cluster
         { grapheme: `lged`, weight: 1 }, // postvocalic cluster
         { grapheme: `lge`, weight: 3 }, // postvocalic cluster
         { grapheme: `ldge`, weight: 1 }, // postvocalic cluster
         { grapheme: `lgg`, weight: 1 }, // postvocalic cluster
         { grapheme: `lged`, weight: 1 }, // postvocalic cluster
         { grapheme: `ldged`, weight: 1 }, // postvocalic cluster
         { grapheme: `ldges`, weight: 1 }, // postvocalic cluster
         { grapheme: `lges`, weight: 1 }, // postvocalic cluster
         { grapheme: `lk`, weight: 3 }, // postvocalic cluster
         { grapheme: `lch`, weight: 3 }, // postvocalic cluster
         { grapheme: `lque`, weight: 1 }, // postvocalic cluster
         { grapheme: `lck`, weight: 1 }, // postvocalic cluster
         { grapheme: `lx`, weight: 1 }, // postvocalic cluster
         { grapheme: `lsc`, weight: 1 }, // postvocalic cluster
         { grapheme: `lsk`, weight: 1 }, // postvocalic cluster
         { grapheme: `lsque`, weight: 1 }, // postvocalic cluster
         { grapheme: `lm`, weight: 3 }, // postvocalic cluster
         { grapheme: `lmn`, weight: 3 }, // postvocalic cluster
         { grapheme: `ln`, weight: 3 }, // postvocalic cluster
         { grapheme: `lp`, weight: 3 }, // postvocalic cluster
         { grapheme: `ls`, weight: 3 }, // postvocalic cluster
         { grapheme: `lst`, weight: 3 }, // postvocalic cluster
         { grapheme: `lce`, weight: 3 }, // postvocalic cluster
         { grapheme: `lse`, weight: 3 }, // postvocalic cluster
         { grapheme: `lt`, weight: 3 }, // postvocalic cluster
         { grapheme: `lst`, weight: 1 }, // postvocalic cluster
         { grapheme: `lssed`, weight: 1 }, // postvocalic cluster
         { grapheme: `lve`, weight: 1 }, // postvocalic cluster
         { grapheme: `lz`, weight: 1 }, // postvocalic cluster
         { grapheme: `lze`, weight: 1 }, // postvocalic cluster
         { grapheme: `lch`, weight: 1 }, // postvocalic cluster
         { grapheme: `ltch`, weight: 1 }, // postvocalic cluster
         { grapheme: `lsh`, weight: 1 }, // postvocalic cluster
         { grapheme: `lche`, weight: 3 }, // postvocalic cluster
         { grapheme: `lth`, weight: 3 } // postvocalic cluster
      ]
   },
   m: {
      weight: 10,
      beginning: [
         { grapheme: `m`, weight: 10 },
         { grapheme: `sm`, weight: 5 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `m`, weight: 5 },
         { grapheme: `mm`, weight: 1 },
         { grapheme: `mb`, weight: 1 },
         { grapheme: `mn`, weight: 1 },
         { grapheme: `lm`, weight: 1 },
         { grapheme: `sm`, weight: 1 } // prevocalic cluster
      ],
      end: [
         { grapheme: `m`, weight: 10 },
         { grapheme: `mm`, weight: 1 },
         { grapheme: `mb`, weight: 1 },
         { grapheme: `mn`, weight: 1 },
         { grapheme: `lm`, weight: 5 },
         { grapheme: `sm`, weight: 5 }, // prevocalic cluster
         { grapheme: `mp`, weight: 5 }, // postvocalic cluster
         { grapheme: `ms`, weight: 5 }, // postvocalic cluster
         { grapheme: `mms`, weight: 1 }, // postvocalic cluster
         { grapheme: `mbs`, weight: 1 }, // postvocalic cluster
         { grapheme: `mns`, weight: 1 }, // postvocalic cluster
         { grapheme: `lms`, weight: 1 }, // postvocalic cluster
         { grapheme: `mps`, weight: 1 } // postvocalic cluster
      ]
   },
   n: {
      weight: 20,
      beginning: [
         { grapheme: `n`, weight: 50 },
         { grapheme: `kn`, weight: 1 },
         { grapheme: `gn`, weight: 1 },
         { grapheme: `pn`, weight: 1 },
         { grapheme: `sn`, weight: 1 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `n`, weight: 50 },
         { grapheme: `nn`, weight: 3 },
         { grapheme: `kn`, weight: 1 },
         { grapheme: `gn`, weight: 1 },
         { grapheme: `pn`, weight: 1 },
         { grapheme: `sn`, weight: 1 } // prevocalic cluster
      ],
      end: [
         { grapheme: `n`, weight: 50 },
         { grapheme: `nn`, weight: 1 },
         { grapheme: `gn`, weight: 1 },
         { grapheme: `nd`, weight: 10 }, // postvocalic cluster
         { grapheme: `nds`, weight: 1 }, // postvocalic cluster
         { grapheme: `ned`, weight: 1 }, // postvocalic cluster
         { grapheme: `nk`, weight: 1 }, // postvocalic cluster
         { grapheme: `nque`, weight: 1 }, // postvocalic cluster
         { grapheme: `ns`, weight: 5 }, // postvocalic cluster
         { grapheme: `nns`, weight: 1 }, // postvocalic cluster
         { grapheme: `gns`, weight: 1 }, // postvocalic cluster
         { grapheme: `nks`, weight: 5 }, // postvocalic cluster
         { grapheme: `nques`, weight: 1 }, // postvocalic cluster
         { grapheme: `nt`, weight: 5 }, // postvocalic cluster
         { grapheme: `nts`, weight: 3 }, // postvocalic cluster
         { grapheme: `nch`, weight: 3 }, // postvocalic cluster
         { grapheme: `ntch`, weight: 1 }, // postvocalic cluster
         { grapheme: `nth`, weight: 3 }, // postvocalic cluster
         { grapheme: `nths`, weight: 1 } // postvocalic cluster
      ]
   },
   p: {
      weight: 3,
      beginning: [
         { grapheme: `p`, weight: 10 },
         { grapheme: `sp`, weight: 1 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `p`, weight: 10 },
         { grapheme: `pp`, weight: 1 },
         { grapheme: `sp`, weight: 1 } // prevocalic cluster
      ],
      end: [
         { grapheme: `p`, weight: 10 },
         { grapheme: `pp`, weight: 1 },
         { grapheme: `sp`, weight: 5 }, // prevocalic cluster
         { grapheme: `ps`, weight: 5 }, // postvocalic cluster
         { grapheme: `pt`, weight: 5 } // postvocalic cluster
      ]
   },
   r: {
      weight: 20,
      beginning: [
         { grapheme: `r`, weight: 50 },
         { grapheme: `wr`, weight: 1 },
         { grapheme: `rh`, weight: 3 },
         { grapheme: `tr`, weight: 10 }, // prevocalic cluster,
         { grapheme: `dr`, weight: 10 }, // prevocalic cluster,
         { grapheme: `fr`, weight: 10 }, // prevocalic cluster,
         { grapheme: `br`, weight: 10 }, // prevocalic cluster,
         { grapheme: `gr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `kr`, weight: 2 }, // prevocalic cluster,
         { grapheme: `cr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `chr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `pr`, weight: 5 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `r`, weight: 100 },
         { grapheme: `rr`, weight: 2 },
         { grapheme: `wr`, weight: 1 },
         { grapheme: `rh`, weight: 2 },
         { grapheme: `tr`, weight: 5 }, // prevocalic cluster
         { grapheme: `dr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `fr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `br`, weight: 5 }, // prevocalic cluster,
         { grapheme: `gr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `kr`, weight: 1 }, // prevocalic cluster,
         { grapheme: `cr`, weight: 5 }, // prevocalic cluster,
         { grapheme: `chr`, weight: 2 }, // prevocalic cluster,
         { grapheme: `pr`, weight: 5 } // prevocalic cluster
      ],
      end: [
         { grapheme: `r`, weight: 60 },
         { grapheme: `rr`, weight: 2 },
         { grapheme: `rh`, weight: 1 },
         { grapheme: `rb`, weight: 5 }, // postvocalic cluster
         { grapheme: `rbs`, weight: 5 }, // postvocalic cluster
         { grapheme: `rd`, weight: 5 }, // postvocalic cluster
         { grapheme: `red`, weight: 5 }, // postvocalic cluster
         { grapheme: `rds`, weight: 5 }, // postvocalic cluster
         { grapheme: `rf`, weight: 2 }, // postvocalic cluster
         { grapheme: `rph`, weight: 1 }, // postvocalic cluster
         { grapheme: `rlf`, weight: 3 }, // postvocalic cluster
         { grapheme: `rlph`, weight: 1 }, // postvocalic cluster
         { grapheme: `rft`, weight: 3 }, // postvocalic cluster
         { grapheme: `rfk`, weight: 1 }, // postvocalic cluster
         { grapheme: `rfs`, weight: 3 }, // postvocalic cluster
         { grapheme: `rphs`, weight: 1 }, // postvocalic cluster
         { grapheme: `rg`, weight: 5 }, // postvocalic cluster
         { grapheme: `rgue`, weight: 1 }, // postvocalic cluster
         { grapheme: `rged`, weight: 1 }, // postvocalic cluster
         { grapheme: `rgued`, weight: 1 }, // postvocalic cluster
         { grapheme: `rgged`, weight: 1 }, // postvocalic cluster
         { grapheme: `rgs`, weight: 1 }, // postvocalic cluster
         { grapheme: `rgues`, weight: 1 }, // postvocalic cluster
         { grapheme: `rge`, weight: 1 }, // postvocalic cluster
         { grapheme: `rdge`, weight: 1 }, // postvocalic cluster
         { grapheme: `rged`, weight: 1 }, // postvocalic cluster
         { grapheme: `rdged`, weight: 1 }, // postvocalic cluster
         { grapheme: `rges`, weight: 1 }, // postvocalic cluster
         { grapheme: `rdges`, weight: 1 }, // postvocalic cluster
         { grapheme: `rc`, weight: 5 }, // postvocalic cluster
         { grapheme: `rk`, weight: 5 }, // postvocalic cluster
         { grapheme: `rch`, weight: 1 }, // postvocalic cluster
         { grapheme: `rque`, weight: 1 }, // postvocalic cluster
         { grapheme: `rck`, weight: 1 }, // postvocalic cluster
         { grapheme: `rsc`, weight: 1 }, // postvocalic cluster
         { grapheme: `rsk`, weight: 1 }, // postvocalic cluster
         { grapheme: `rsque`, weight: 1 }, // postvocalic cluster
         { grapheme: `rl`, weight: 5 }, // postvocalic cluster
         { grapheme: `rle`, weight: 1 }, // postvocalic cluster
         { grapheme: `rld`, weight: 1 }, // postvocalic cluster
         { grapheme: `rm`, weight: 1 }, // postvocalic cluster
         { grapheme: `rn`, weight: 5 }, // postvocalic cluster
         { grapheme: `rns`, weight: 1 }, // postvocalic cluster
         { grapheme: `rms`, weight: 1 }, // postvocalic cluster
         { grapheme: `rnt`, weight: 1 }, // postvocalic cluster
         { grapheme: `rch`, weight: 1 }, // postvocalic cluster
         { grapheme: `rtch`, weight: 1 }, // postvocalic cluster
         { grapheme: `rp`, weight: 5 }, // postvocalic cluster
         { grapheme: `rps`, weight: 1 }, // postvocalic cluster
         { grapheme: `rs`, weight: 5 }, // postvocalic cluster
         { grapheme: `rrs`, weight: 1 }, // postvocalic cluster
         { grapheme: `rbs`, weight: 1 }, // postvocalic cluster
         { grapheme: `rd`, weight: 5 }, // postvocalic cluster
         { grapheme: `red`, weight: 1 }, // postvocalic cluster
         { grapheme: `rds`, weight: 1 }, // postvocalic cluster
         { grapheme: `rf`, weight: 5 }, // postvocalic cluster
         { grapheme: `rph`, weight: 1 }, // postvocalic cluster
         { grapheme: `rlf`, weight: 1 }, // postvocalic cluster
         { grapheme: `rlph`, weight: 1 }, // postvocalic cluster
         { grapheme: `rft`, weight: 1 }, // postvocalic cluster
         { grapheme: `rfk`, weight: 1 }, // postvocalic cluster
         { grapheme: `rfs`, weight: 1 }, // postvocalic cluster
         { grapheme: `rphs`, weight: 1 }, // postvocalic cluster
         { grapheme: `rg`, weight: 5 }, // postvocalic cluster
         { grapheme: `rgue`, weight: 1 }, // postvocalic cluster
         { grapheme: `rged`, weight: 1 }, // postvocalic cluster
         { grapheme: `rgued`, weight: 1 }, // postvocalic cluster
         { grapheme: `rgged`, weight: 1 }, // postvocalic cluster
         { grapheme: `rgs`, weight: 1 }, // postvocalic cluster
         { grapheme: `rgues`, weight: 1 }, // postvocalic cluster
         { grapheme: `rge`, weight: 3 }, // postvocalic cluster
         { grapheme: `rdge`, weight: 1 }, // postvocalic cluster
         { grapheme: `rged`, weight: 1 }, // postvocalic cluster
         { grapheme: `rdged`, weight: 1 }, // postvocalic cluster
         { grapheme: `rges`, weight: 1 }, // postvocalic cluster
         { grapheme: `rdges`, weight: 1 }, // postvocalic cluster
         { grapheme: `rc`, weight: 5 }, // postvocalic cluster
         { grapheme: `rk`, weight: 1 }, // postvocalic cluster
         { grapheme: `rch`, weight: 1 }, // postvocalic cluster
         { grapheme: `rque`, weight: 1 }, // postvocalic cluster
         { grapheme: `rck`, weight: 1 }, // postvocalic cluster
         { grapheme: `rsc`, weight: 1 }, // postvocalic cluster
         { grapheme: `rsk`, weight: 1 }, // postvocalic cluster
         { grapheme: `rsque`, weight: 1 }, // postvocalic cluster
         { grapheme: `rl`, weight: 5 }, // postvocalic cluster
         { grapheme: `rle`, weight: 1 }, // postvocalic cluster
         { grapheme: `rld`, weight: 1 }, // postvocalic cluster
         { grapheme: `rm`, weight: 5 }, // postvocalic cluster
         { grapheme: `rn`, weight: 5 }, // postvocalic cluster
         { grapheme: `rns`, weight: 1 }, // postvocalic cluster
         { grapheme: `rms`, weight: 1 }, // postvocalic cluster
         { grapheme: `rnt`, weight: 1 }, // postvocalic cluster
         { grapheme: `rch`, weight: 1 }, // postvocalic cluster
         { grapheme: `rtch`, weight: 1 }, // postvocalic cluster
         { grapheme: `rp`, weight: 5 }, // postvocalic cluster
         { grapheme: `rps`, weight: 1 }, // postvocalic cluster
         { grapheme: `rst`, weight: 1 }, // postvocalic cluster
         { grapheme: `rce`, weight: 1 }, // postvocalic cluster
         { grapheme: `rse`, weight: 1 }, // postvocalic cluster
         { grapheme: `rt`, weight: 5 }, // postvocalic cluster
         { grapheme: `rve`, weight: 1 }, // postvocalic cluster
         { grapheme: `rves`, weight: 1 }, // postvocalic cluster
         { grapheme: `rz`, weight: 1 }, // postvocalic cluster
         { grapheme: `rze`, weight: 1 }, // postvocalic cluster
         { grapheme: `rch`, weight: 1 }, // postvocalic cluster
         { grapheme: `rtch`, weight: 1 }, // postvocalic cluster
         { grapheme: `rsh`, weight: 1 }, // postvocalic cluster
         { grapheme: `rch`, weight: 1 }, // postvocalic cluster
         { grapheme: `rth`, weight: 1 } // postvocalic cluster
      ]
   },
   s: {
      weight: 25,
      beginning: [
         { grapheme: `s`, weight: 150 },
         { grapheme: `c`, weight: 50 },
         { grapheme: `sc`, weight: 5 },
         { grapheme: `ps`, weight: 1 },
         { grapheme: `st`, weight: 50 },
         { grapheme: `ce`, weight: 1 },
         { grapheme: `se`, weight: 1 }
      ],
      middle: [
         { grapheme: `s`, weight: 50 },
         { grapheme: `ss`, weight: 1 },
         { grapheme: `c`, weight: 1 },
         { grapheme: `sc`, weight: 1 },
         { grapheme: `ps`, weight: 1 },
         { grapheme: `st`, weight: 1 },
         { grapheme: `ce`, weight: 1 },
         { grapheme: `se`, weight: 1 }
      ],
      end: [
         { grapheme: `s`, weight: 50 },
         { grapheme: `ss`, weight: 20 },
         { grapheme: `st`, weight: 20 },
         { grapheme: `ce`, weight: 10 },
         { grapheme: `se`, weight: 10 },
         { grapheme: `sed`, weight: 5 }, // postvocalic cluster
         { grapheme: `ssed`, weight: 1 }, // postvocalic cluster
         { grapheme: `ced`, weight: 5 }, // postvocalic cluster
         { grapheme: `sk`, weight: 1 }, // postvocalic cluster
         { grapheme: `ssk`, weight: 1 }, // postvocalic cluster
         { grapheme: `sp`, weight: 5 }, // postvocalic cluster
         { grapheme: `st`, weight: 5 } // postvocalic cluster
      ]
   },
   t: {
      weight: 30,
      beginning: [
         { grapheme: `t`, weight: 10 },
         { grapheme: `th`, weight: 1 },
         { grapheme: `st`, weight: 5 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `t`, weight: 50 },
         { grapheme: `tt`, weight: 1 },
         { grapheme: `st`, weight: 50 } // prevocalic cluster
      ],
      end: [
         { grapheme: `t`, weight: 20 },
         { grapheme: `tt`, weight: 1 },
         { grapheme: `ed`, weight: 10 },
         { grapheme: `st`, weight: 10 }, // prevocalic cluster
         { grapheme: `ssed`, weight: 5 } // prevocalic cluster
      ]
   },
   v: {
      weight: 5,
      beginning: [{ grapheme: `v`, weight: 10 }],
      middle: [
         { grapheme: `v`, weight: 10 },
         { grapheme: `ph`, weight: 1 }
      ],
      end: [
         { grapheme: `v`, weight: 10 },
         { grapheme: `ve`, weight: 1 },
         { grapheme: `f`, weight: 1 }
      ]
   },
   w: {
      weight: 3,
      beginning: [
         { grapheme: `w`, weight: 30 },
         { grapheme: `wh`, weight: 10 },
         { grapheme: `ou`, weight: 1 },
         { grapheme: `sw`, weight: 10 }, // prevocalic cluster
         { grapheme: `dw`, weight: 5 }, // prevocalic cluster
         { grapheme: `tw`, weight: 15 } // prevocalic cluster
      ],
      middle: [
         { grapheme: `w`, weight: 100 },
         { grapheme: `wh`, weight: 1 },
         { grapheme: `sw`, weight: 1 }, // prevocalic cluster
         { grapheme: `dw`, weight: 1 }, // prevocalic cluster
         { grapheme: `tw`, weight: 1 } // prevocalic cluster
      ],
      end: [{ grapheme: `w`, weight: 1 }]
   },
   z: {
      weight: 1,
      beginning: [
         { grapheme: `z`, weight: 10 },
         { grapheme: `x`, weight: 1 }
      ],
      middle: [
         { grapheme: `z`, weight: 1 },
         { grapheme: `zz`, weight: 1 },
         { grapheme: `s`, weight: 1 },
         { grapheme: `ss`, weight: 1 },
         { grapheme: `x`, weight: 1 }
      ],
      end: [
         { grapheme: `z`, weight: 10 },
         { grapheme: `zz`, weight: 1 },
         { grapheme: `ze`, weight: 50 }
      ]
   },
   ch: {
      weight: 5,
      beginning: [{ grapheme: `ch`, weight: 1 }],
      middle: [
         { grapheme: `ch`, weight: 1 },
         { grapheme: `tch`, weight: 1 },
         { grapheme: `tu`, weight: 1 },
         { grapheme: `ti`, weight: 1 },
         { grapheme: `te`, weight: 1 }
      ],
      end: [
         { grapheme: `ch`, weight: 10 },
         { grapheme: `tch`, weight: 1 }
      ]
   },
   sh: {
      weight: 5,
      beginning: [
         { grapheme: `sh`, weight: 10 },
         { grapheme: `ch`, weight: 1 }
      ],
      middle: [
         { grapheme: `sh`, weight: 1 },
         { grapheme: `ce`, weight: 1 },
         { grapheme: `s`, weight: 1 },
         { grapheme: `ci`, weight: 1 },
         { grapheme: `si`, weight: 1 },
         { grapheme: `ch`, weight: 1 },
         { grapheme: `sci`, weight: 1 },
         { grapheme: `ti`, weight: 1 }
      ],
      end: [
         { grapheme: `sh`, weight: 20 },
         { grapheme: `che`, weight: 1 }
      ]
   },
   th: {
      weight: 10,
      beginning: [{ grapheme: `th`, weight: 1 }],
      middle: [{ grapheme: `th`, weight: 1 }],
      end: [{ grapheme: `th`, weight: 1 }]
   },
   ng: {
      weight: 1,
      beginning: [{ grapheme: `n`, weight: 1 }],
      middle: [
         { grapheme: `ng`, weight: 1 },
         { grapheme: `n`, weight: 1 },
         { grapheme: `ngue`, weight: 1 }
      ],
      end: [
         { grapheme: `ng`, weight: 20 },
         { grapheme: `ngue`, weight: 1 }
      ]
   },
   y: {
      weight: 1,
      beginning: [
         { grapheme: `y`, weight: 30 },
         { grapheme: `j`, weight: 1 }
      ],
      middle: [
         { grapheme: `y`, weight: 1 },
         { grapheme: `j`, weight: 1 },
         { grapheme: `io`, weight: 1 }
      ],
      end: [{ grapheme: `y`, weight: 1 }]
   }
};

let vowels = {
   a: {
      weight: 50,
      beginning: [
         { grapheme: `a`, weight: 10 },
         { grapheme: `ai`, weight: 1 },
         { grapheme: `au`, weight: 1 }
      ],
      middle: [
         { grapheme: `a`, weight: 10 },
         { grapheme: `ai`, weight: 1 },
         { grapheme: `au`, weight: 1 }
      ],
      end: [{ grapheme: ``, weight: 1 }]
   },
   ay: {
      weight: 10,
      beginning: [
         { grapheme: `a`, weight: 160 },
         { grapheme: `ai`, weight: 50 },
         { grapheme: `eigh`, weight: 1 },
         { grapheme: `aigh`, weight: 1 },
         { grapheme: `ay`, weight: 1 },
         { grapheme: `er`, weight: 1 },
         { grapheme: `et`, weight: 1 },
         { grapheme: `ei`, weight: 20 },
         { grapheme: `ea`, weight: 1 },
         { grapheme: `ey`, weight: 1 }
      ],
      middle: [
         { grapheme: `a`, weight: 130 },
         { grapheme: `ai`, weight: 1 },
         { grapheme: `eigh`, weight: 1 },
         { grapheme: `aigh`, weight: 1 },
         { grapheme: `ay`, weight: 1 },
         { grapheme: `er`, weight: 1 },
         { grapheme: `et`, weight: 1 },
         { grapheme: `ei`, weight: 1 },
         { grapheme: `au`, weight: 1 },
         { grapheme: `ea`, weight: 1 },
         { grapheme: `ey`, weight: 1 }
      ],
      end: [
         { grapheme: `eigh`, weight: 1 },
         { grapheme: `aigh`, weight: 1 },
         { grapheme: `ay`, weight: 10 },
         { grapheme: `er`, weight: 1 },
         { grapheme: `et`, weight: 1 },
         { grapheme: `ey`, weight: 1 }
      ]
   },
   e: {
      weight: 50,
      beginning: [
         { grapheme: `e`, weight: 410 },
         { grapheme: `ie`, weight: 1 },
         { grapheme: `ae`, weight: 1 },
         { grapheme: `eh`, weight: 1 }
      ],
      middle: [
         { grapheme: `e`, weight: 410 },
         { grapheme: `ea`, weight: 1 },
         { grapheme: `u`, weight: 1 },
         { grapheme: `ie`, weight: 1 },
         { grapheme: `ai`, weight: 1 },
         { grapheme: `a`, weight: 1 },
         { grapheme: `eo`, weight: 1 },
         { grapheme: `ae`, weight: 1 },
         { grapheme: `eh`, weight: 1 }
      ],
      end: [
         { grapheme: `ae`, weight: 10 },
         { grapheme: `eh`, weight: 1 }
      ]
   },
   ee: {
      weight: 10,
      beginning: [
         { grapheme: `e`, weight: 100 },
         { grapheme: `ea`, weight: 10 },
         { grapheme: `y`, weight: 1 },
         { grapheme: `ie`, weight: 1 },
         { grapheme: `i`, weight: 1 },
         { grapheme: `ei`, weight: 1 }
      ],
      middle: [
         { grapheme: `e`, weight: 100 },
         { grapheme: `ee`, weight: 20 },
         { grapheme: `ea`, weight: 1 },
         { grapheme: `y`, weight: 1 },
         { grapheme: `ey`, weight: 1 },
         { grapheme: `oe`, weight: 1 },
         { grapheme: `ie`, weight: 1 },
         { grapheme: `i`, weight: 1 },
         { grapheme: `ei`, weight: 1 },
         { grapheme: `eo`, weight: 1 },
         { grapheme: `ay`, weight: 1 }
      ],
      end: [
         { grapheme: `ee`, weight: 1 },
         { grapheme: `ea`, weight: 10 },
         { grapheme: `y`, weight: 100 },
         { grapheme: `ey`, weight: 1 },
         { grapheme: `ie`, weight: 10 },
         { grapheme: `i`, weight: 100 },
         { grapheme: `ei`, weight: 1 }
      ]
   },
   i: {
      weight: 30,
      beginning: [{ grapheme: `i`, weight: 1 }],
      middle: [
         { grapheme: `i`, weight: 100 },
         { grapheme: `e`, weight: 1 },
         { grapheme: `o`, weight: 1 },
         { grapheme: `u`, weight: 1 },
         { grapheme: `ui`, weight: 1 },
         { grapheme: `y`, weight: 1 },
         { grapheme: `ie`, weight: 1 }
      ],
      end: [
         { grapheme: `e`, weight: 1 },
         { grapheme: `ie`, weight: 10 }
      ]
   },
   eye: {
      weight: 20,
      beginning: [
         { grapheme: `i`, weight: 50 },
         { grapheme: `igh`, weight: 1 },
         { grapheme: `ie`, weight: 1 },
         { grapheme: `uy`, weight: 1 },
         { grapheme: `ai`, weight: 1 },
         { grapheme: `is`, weight: 1 },
         { grapheme: `eigh`, weight: 1 }
      ],
      middle: [
         { grapheme: `i`, weight: 50 },
         { grapheme: `y`, weight: 1 },
         { grapheme: `igh`, weight: 1 },
         { grapheme: `ie`, weight: 1 },
         { grapheme: `uy`, weight: 1 },
         { grapheme: `ye`, weight: 1 },
         { grapheme: `ai`, weight: 1 },
         { grapheme: `is`, weight: 1 },
         { grapheme: `eigh`, weight: 1 }
      ],
      end: [
         { grapheme: `igh`, weight: 10 },
         { grapheme: `ie`, weight: 1 },
         { grapheme: `uy`, weight: 10 },
         { grapheme: `ye`, weight: 1 },
         { grapheme: `y`, weight: 30 },
         { grapheme: `ai`, weight: 30 }
      ]
   },
   ah: {
      weight: 20,
      beginning: [
         { grapheme: `a`, weight: 50 },
         { grapheme: `ho`, weight: 1 },
         { grapheme: `au`, weight: 1 },
         { grapheme: `aw`, weight: 1 },
         { grapheme: `ough`, weight: 1 }
      ],
      middle: [
         { grapheme: `a`, weight: 50 },
         { grapheme: `au`, weight: 1 },
         { grapheme: `aw`, weight: 1 },
         { grapheme: `ough`, weight: 1 }
      ],
      end: [
         { grapheme: `a`, weight: 50 },
         { grapheme: `au`, weight: 1 },
         { grapheme: `aw`, weight: 1 },
         { grapheme: `ough`, weight: 1 }
      ]
   },
   oh: {
      weight: 10,
      beginning: [
         { grapheme: `o`, weight: 50 },
         { grapheme: `oa`, weight: 1 },
         { grapheme: `oe`, weight: 1 },
         { grapheme: `ow`, weight: 1 },
         { grapheme: `ough`, weight: 1 },
         { grapheme: `eau`, weight: 1 },
         { grapheme: `ew`, weight: 1 }
      ],
      middle: [
         { grapheme: `o`, weight: 50 },
         { grapheme: `oa`, weight: 1 },
         { grapheme: `oe`, weight: 1 },
         { grapheme: `ow`, weight: 1 },
         { grapheme: `ough`, weight: 1 },
         { grapheme: `eau`, weight: 1 },
         { grapheme: `oo`, weight: 1 },
         { grapheme: `ew`, weight: 1 }
      ],
      end: [
         { grapheme: `o`, weight: 50 },
         { grapheme: `oa`, weight: 1 },
         { grapheme: `oe`, weight: 10 },
         { grapheme: `ow`, weight: 1 },
         { grapheme: `ough`, weight: 1 },
         { grapheme: `eau`, weight: 10 },
         { grapheme: `oo`, weight: 1 },
         { grapheme: `oh`, weight: 10 },
         { grapheme: `ew`, weight: 1 }
      ]
   },
   oo: {
      weight: 10,
      beginning: [
         { grapheme: `oo`, weight: 1 },
         { grapheme: `u`, weight: 150 },
         { grapheme: `ou`, weight: 5 }
      ],
      middle: [
         { grapheme: `o`, weight: 1 },
         { grapheme: `oo`, weight: 1 },
         { grapheme: `u`, weight: 150 },
         { grapheme: `ou`, weight: 5 }
      ],
      end: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `oo`, weight: 1 },
         { grapheme: `u`, weight: 50 },
         { grapheme: `ou`, weight: 10 }
      ]
   },
   uh: {
      weight: 10,
      beginning: [
         { grapheme: `o`, weight: 10 },
         { grapheme: `u`, weight: 50 },
         { grapheme: `ou`, weight: 1 }
      ],
      middle: [
         { grapheme: `o`, weight: 1 },
         { grapheme: `oo`, weight: 1 },
         { grapheme: `u`, weight: 50 },
         { grapheme: `ou`, weight: 1 }
      ],
      end: [{ grapheme: `uh`, weight: 1 }]
   },
   ew: {
      weight: 10,
      beginning: [
         { grapheme: `o`, weight: 1 },
         { grapheme: `oo`, weight: 1 },
         { grapheme: `ew`, weight: 10 },
         { grapheme: `ue`, weight: 1 },
         { grapheme: `oe`, weight: 1 },
         { grapheme: `ough`, weight: 1 },
         { grapheme: `ou`, weight: 10 }
      ],
      middle: [
         { grapheme: `o`, weight: 1 },
         { grapheme: `oo`, weight: 1 },
         { grapheme: `ew`, weight: 10 },
         { grapheme: `ue`, weight: 1 },
         { grapheme: `oe`, weight: 1 },
         { grapheme: `ough`, weight: 1 },
         { grapheme: `ui`, weight: 1 },
         { grapheme: `ou`, weight: 10 }
      ],
      end: [
         { grapheme: `o`, weight: 1 },
         { grapheme: `oo`, weight: 1 },
         { grapheme: `ew`, weight: 10 },
         { grapheme: `ue`, weight: 1 },
         { grapheme: `oe`, weight: 1 },
         { grapheme: `ough`, weight: 1 },
         { grapheme: `ui`, weight: 1 },
         { grapheme: `ou`, weight: 10 }
      ]
   },
   oy: {
      weight: 1,
      beginning: [
         { grapheme: `oi`, weight: 1 },
         { grapheme: `oy`, weight: 5 }
      ],
      middle: [
         { grapheme: `oi`, weight: 10 },
         { grapheme: `oy`, weight: 1 }
      ],
      end: [
         { grapheme: `oi`, weight: 1 },
         { grapheme: `oy`, weight: 20 },
         { grapheme: `uoy`, weight: 1 }
      ]
   },
   ow: {
      weight: 3,
      beginning: [
         { grapheme: `ow`, weight: 10 },
         { grapheme: `ou`, weight: 5 },
         { grapheme: `ough`, weight: 1 }
      ],
      middle: [
         { grapheme: `ow`, weight: 10 },
         { grapheme: `ou`, weight: 5 },
         { grapheme: `ough`, weight: 1 }
      ],
      end: [
         { grapheme: `ow`, weight: 10 },
         { grapheme: `ou`, weight: 5 },
         { grapheme: `ough`, weight: 1 }
      ]
   },
   ae: {
      weight: 30,
      beginning: [
         { grapheme: `a`, weight: 10 },
         { grapheme: `er`, weight: 1 },
         { grapheme: `i`, weight: 10 },
         { grapheme: `ar`, weight: 1 },
         { grapheme: `our`, weight: 1 },
         { grapheme: `ur`, weight: 1 }
      ],
      middle: [
         { grapheme: `a`, weight: 10 },
         { grapheme: `er`, weight: 1 },
         { grapheme: `i`, weight: 10 },
         { grapheme: `ar`, weight: 1 },
         { grapheme: `our`, weight: 1 },
         { grapheme: `ur`, weight: 1 }
      ],
      end: [
         { grapheme: `a`, weight: 10 },
         { grapheme: `er`, weight: 1 },
         { grapheme: `i`, weight: 10 },
         { grapheme: `ar`, weight: 1 },
         { grapheme: `our`, weight: 1 },
         { grapheme: `ur`, weight: 1 }
      ]
   },
   air: {
      weight: 25,
      beginning: [
         { grapheme: `air`, weight: 20 },
         { grapheme: `are`, weight: 10 },
         { grapheme: `ear`, weight: 1 },
         { grapheme: `ere`, weight: 1 },
         { grapheme: `eir`, weight: 20 },
         { grapheme: `ayer`, weight: 1 }
      ],
      middle: [
         { grapheme: `air`, weight: 20 },
         { grapheme: `are`, weight: 10 },
         { grapheme: `ear`, weight: 1 },
         { grapheme: `ere`, weight: 1 },
         { grapheme: `eir`, weight: 20 },
         { grapheme: `ayer`, weight: 1 }
      ],
      end: [
         { grapheme: `air`, weight: 10 },
         { grapheme: `are`, weight: 1 },
         { grapheme: `ear`, weight: 1 },
         { grapheme: `ere`, weight: 20 },
         { grapheme: `eir`, weight: 20 },
         { grapheme: `ayer`, weight: 1 }
      ]
   },
   ur: {
      weight: 10,
      beginning: [
         { grapheme: `ir`, weight: 1 },
         { grapheme: `er`, weight: 20 },
         { grapheme: `ur`, weight: 10 },
         { grapheme: `ear`, weight: 1 },
         { grapheme: `or`, weight: 1 },
         { grapheme: `our`, weight: 1 },
         { grapheme: `yr`, weight: 1 }
      ],
      middle: [
         { grapheme: `ir`, weight: 1 },
         { grapheme: `er`, weight: 20 },
         { grapheme: `ur`, weight: 10 },
         { grapheme: `ear`, weight: 1 },
         { grapheme: `or`, weight: 1 },
         { grapheme: `our`, weight: 1 },
         { grapheme: `yr`, weight: 1 }
      ],
      end: [
         { grapheme: `ir`, weight: 1 },
         { grapheme: `er`, weight: 20 },
         { grapheme: `ur`, weight: 10 },
         { grapheme: `ear`, weight: 1 },
         { grapheme: `or`, weight: 1 },
         { grapheme: `our`, weight: 1 },
         { grapheme: `yr`, weight: 1 }
      ]
   },
   aw_or: {
      weight: 10,
      beginning: [
         { grapheme: `aw`, weight: 10 },
         { grapheme: `a`, weight: 1 },
         { grapheme: `or`, weight: 20 },
         { grapheme: `oor`, weight: 1 },
         { grapheme: `ore`, weight: 1 },
         { grapheme: `oar`, weight: 1 },
         { grapheme: `our`, weight: 1 },
         { grapheme: `augh`, weight: 1 },
         { grapheme: `ar`, weight: 1 },
         { grapheme: `ough`, weight: 1 },
         { grapheme: `au`, weight: 20 }
      ],
      middle: [
         { grapheme: `aw`, weight: 10 },
         { grapheme: `a`, weight: 1 },
         { grapheme: `or`, weight: 20 },
         { grapheme: `oor`, weight: 1 },
         { grapheme: `ore`, weight: 1 },
         { grapheme: `oar`, weight: 1 },
         { grapheme: `our`, weight: 1 },
         { grapheme: `augh`, weight: 1 },
         { grapheme: `ar`, weight: 1 },
         { grapheme: `ough`, weight: 1 },
         { grapheme: `au`, weight: 20 }
      ],
      end: [
         { grapheme: `aw`, weight: 10 },
         { grapheme: `a`, weight: 1 },
         { grapheme: `or`, weight: 20 },
         { grapheme: `oor`, weight: 1 },
         { grapheme: `ore`, weight: 1 },
         { grapheme: `oar`, weight: 1 },
         { grapheme: `our`, weight: 1 },
         { grapheme: `augh`, weight: 1 },
         { grapheme: `ar`, weight: 1 },
         { grapheme: `ough`, weight: 1 },
         { grapheme: `au`, weight: 20 }
      ]
   },
   eer: {
      weight: 5,
      beginning: [
         { grapheme: `ear`, weight: 1 },
         { grapheme: `eer`, weight: 1 },
         { grapheme: `ere`, weight: 1 },
         { grapheme: `ier`, weight: 1 }
      ],
      middle: [
         { grapheme: `ear`, weight: 1 },
         { grapheme: `eer`, weight: 1 },
         { grapheme: `ere`, weight: 1 },
         { grapheme: `ier`, weight: 1 }
      ],
      end: [
         { grapheme: `ear`, weight: 1 },
         { grapheme: `eer`, weight: 1 },
         { grapheme: `ere`, weight: 1 },
         { grapheme: `ier`, weight: 1 }
      ]
   },
   ewer: {
      weight: 5,
      beginning: [
         { grapheme: `ure`, weight: 10 },
         { grapheme: `our`, weight: 1 }
      ],
      middle: [
         { grapheme: `ure`, weight: 10 },
         { grapheme: `our`, weight: 1 }
      ],
      end: [
         { grapheme: `ure`, weight: 10 },
         { grapheme: `our`, weight: 1 }
      ]
   },
   el: {
      weight: 7,
      beginning: [{ grapheme: `el`, weight: 1 }],
      middle: [{ grapheme: `el`, weight: 5 }],
      end: [
         { grapheme: `el`, weight: 1 },
         { grapheme: `le`, weight: 5 }
      ]
   },
   apostrophe: {
      weight: 1,
      beginning: [{ grapheme: ``, weight: 1 }],
      middle: [{ grapheme: `'`, weight: 1 }],
      end: [{ grapheme: ``, weight: 1 }]
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
   for (let i = 0; i < wordLength; i++) uuid += getRandomName(3) + `-`;
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
   let trans = Math.pow(rand - 4.8, 3) * 0.01 + 1.5;
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
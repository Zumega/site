// TODO: imoji SVGs
const IMOJI_REPLACE = '<img src="./img/imojis/#$1" alt="$1" title="$1"/>';

export const REGEX = {
  b: {
    pattern: /\[b\](.+)\[\/b\]/gim,
    replace: '<strong>$1</strong>'
  },
  link: {
    pattern: /\[link \((.+)\)\](.+)\[\/link\]/gim,
    replace: '<a href="$1" target="_blank">$2</a>'
  },
  br: {
    pattern: /\[br\]/gim,
    replace: '<br />'
  },
  q: {
    pattern: /\[q\](.+)\[\/q\]/gim,
    replace: '<q>$1</q>'
  },
  color: {
    pattern: /\[color:(.+)\](.+)\[\/color\]/gim,
    replace: '<span style="color:$1;">$2</span>'
  },
  smilie: {
    pattern: /\[(smilie)\]/gim,
    replace: IMOJI_REPLACE
  },
  happie: {
    pattern: /\[(happie)\]/gim,
    replace: IMOJI_REPLACE
  },
  winkie: {
    pattern: /\[(winkie)\]/gim,
    replace: IMOJI_REPLACE
  },
  gnome: {
    pattern: /\[(gnome)\]/gim,
    replace: IMOJI_REPLACE
  }
};

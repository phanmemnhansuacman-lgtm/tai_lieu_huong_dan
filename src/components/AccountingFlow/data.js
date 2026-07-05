export const nodes = [
  {
    id: "ct",
    text: "CHỨNG TỪ",
    row: 0,
    col: 1,
  },

  {
    id: "sq",
    text: "SỔ QUỸ",
    row: 1,
    col: 0,
  },

  {
    id: "nkdb",
    text: "NHẬT KÝ\nĐẶC BIỆT",
    row: 2,
    col: 0,
  },

  {
    id: "nkc",
    text: "NHẬT KÝ\nCHUNG",
    row: 1,
    col: 1,
  },

  {
    id: "socai",
    text: "SỔ CÁI",
    row: 2,
    col: 1,
  },

  {
    id: "cdps",
    text: "CÂN ĐỐI\nPHÁT SINH",
    row: 3,
    col: 1,
  },

  {
    id: "bctc",
    text: "BÁO CÁO\nTÀI CHÍNH",
    row: 4,
    col: 1,
  },

  {
    id: "bcthue",
    text: "BÁO CÁO\nTHUẾ",
    row: 0,
    col: 2,
  },

  {
    id: "ctiet",
    text: "SỔ THẺ\nCHI TIẾT",
    row: 1,
    col: 2,
  },

  {
    id: "tonghop",
    text: "BẢNG\nTỔNG HỢP",
    row: 2,
    col: 2,
  },
];
export const step1 = [
  ["ct", "sq"],
  ["ct", "nkc"],
  ["ct", "ctiet"],

  ["sq", "nkdb"],

  ["nkdb", "socai"],

  ["nkc", "socai"],

  ["ctiet", "socai"],
];

export const step2 = [
  ["ct", "bcthue"],

  ["socai", "cdps"],

  ["cdps", "bctc"],

  ["ctiet", "tonghop"],

  ["tonghop", "bctc"],
];

export const step3 = [
  ["socai", "tonghop"],
];
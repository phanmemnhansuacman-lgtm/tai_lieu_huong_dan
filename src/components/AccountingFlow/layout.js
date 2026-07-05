// ==============================================
// Layout Engine
// Tự động tính vị trí node trên lưới
// ==============================================

export const GRID = {

  // Khoảng cách từ mép trái
  startX: 120,

  // Khoảng cách từ trên xuống
  startY: 100,

  // Khoảng cách giữa các cột
  colGap: 330,

  // Khoảng cách giữa các hàng
  rowGap: 140,

  // Kích thước mặc định của node
  nodeWidth: 180,

  nodeHeight: 70,

};


// ==============================================
// Layout 1 node
// ==============================================

export function layoutNode(node) {

  const width = node.width ?? GRID.nodeWidth;
  const height = node.height ?? GRID.nodeHeight;

  const x = GRID.startX + node.col * GRID.colGap;
  const y = GRID.startY + node.row * GRID.rowGap;

  return {

    ...node,

    width,

    height,

    x,

    y,

    // =============================
    // Điểm kết nối
    // =============================

    top: {
      x: x + width / 2,
      y
    },

    bottom: {
      x: x + width / 2,
      y: y + height
    },

    left: {
      x,
      y: y + height / 2
    },

    right: {
      x: x + width,
      y: y + height / 2
    },

    center: {
      x: x + width / 2,
      y: y + height / 2
    }

  };

}


// ==============================================
// Layout toàn bộ nodes
// ==============================================

export function layoutNodes(nodes) {

  return nodes.map(layoutNode);

}


// ==============================================
// Lấy node theo id
// ==============================================

export function createNodeMap(nodes) {

  return Object.fromEntries(

    nodes.map(node => [node.id, node])

  );

}
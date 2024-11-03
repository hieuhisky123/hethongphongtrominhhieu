export const nav = [
  {
    text: "Trang chủ",
    path: "/",
  },
  {
    text: "Xem Phòng",
    path: "/product",
  },

  {
    text: "Thiết Kế",
    path: "/pricing",
  },

  {
    text: "Liên Hệ",
    path: "/contact",
  },
  {
    text: "Giới Thiệu",
    path: "/about",
  },
];
export const list = [
  {
    id: 1,
    name: "103TT Cộng Hòa, Phường 4, Tân Bình, TP.HCM",
    price: "3,900,000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Thang máy", "Máy giặt chung", "Ở được 3-4 người"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",

    reviews: 12, // Add a field for customer reviews
    sku: "103", // Add a field for SKU
    tags: ["Máy lạnh", "Tủ đồ", "Kệ Bếp"], // Add tags
    images: [
      "../images/list/103.1.jpg", // Main image
      "../images/list/103.2.jpg", // Thumbnail image
      "../images/list/103.3.jpg", // Thumbnail image
    ],
    cover: "../images/list/103.4.jpg",
    relatedImages: [
      "../images/list/103.5.jpg", // Related image 1
      "../images/list/103.1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 2,
    name: "206TT Cộng Hòa, Phường 4, Tân Bình, TP.HCM",
    price: "4.500.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Thang máy", "Máy giặt chung", "Ở được 3-4 người"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",

    reviews: 5, // Add a field for customer reviews
    sku: "206", // Add a field for SKU
    tags: ["Máy lạnh", "Tủ lạnh", "Giường", "Tủ đồ", "Kệ bếp"], // Add tags
    images: [
      "../images/list/206.1.jpg", // Main image
      "../images/list/206.2.jpg", // Thumbnail image
      "../images/list/206.6.jpg", // Thumbnail image
    ],
    cover: "../images/list/206.4.jpg",
    relatedImages: [
      "../images/list/206.3.jpg", // Related image 1
      "../images/list/206.5.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 3,
    name: "vip203TT Cộng Hòa, Phường 4, Tân Bình, TP.HCM",
    price: "7.500.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Thang máy", "Máy giặt chung", "Ở được 3-4 người"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 12, // Add a field for customer reviews
    sku: "Vip203", // Add a field for SKU
    tags: [
      "1PN",
      "2WC",
      "Máy lạnh",
      "Giường, nệm",
      "Tủ đồ",
      "Bàn ghế",
      "Máy giặt riêng",
      "Sofa",
    ], // Add tags
    images: [
      "../images/list/vip203.1.jpg", // Main image
      "../images/list/vip203.2.jpg", // Thumbnail image
      "../images/list/vip203.3.jpg", // Thumbnail image
    ],
    cover: "../images/list/vip203.4.jpg",
    relatedImages: [
      "../images/list/vip203.5.jpg", // Related image 1
      "../images/list/vip203.6.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 4,
    name: "401TT Bạch Đằng, Phường 2, Tân Bình, TP.HCM",
    price: "5.000.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: [
      "Tối đa 4 người - 2 xe",
      "Thang máy",
      "Máy giặt chung",
      "Cửa vân tay",
    ], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 3, // Add a field for customer reviews
    sku: "401", // Add a field for SKU
    tags: ["Gác", "Máy lạnh", "Kệ bếp", "Ban công"], // Add tags
    images: [
      "../images/list/401.1.jpg", // Main image
      "../images/list/401.2.jpg", // Thumbnail image
      "../images/list/401.3.jpg", // Thumbnail image
    ],
    cover: "../images/list/401.6.jpg",
    relatedImages: [
      "../images/list/401.4.jpg", // Related image 1
      "../images/list/401.5.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 5,
    name: "203TT Bạch Đằng, Phường 2, Tân Bình, TP.HCM",
    price: "4.000.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: [
      "Tối đa 4 người - 2 xe",
      "Thang máy",
      "Máy giặt chung",
      "Cửa vân tay",
    ], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 8, // Add a field for customer reviews
    sku: "203", // Add a field for SKU
    tags: ["Gác", "Máy lạnh", "Kệ bếp"], // Add tags
    images: [
      "../images/list/203.1.jpg", // Main image
      "../images/list/203.2.jpg", // Thumbnail image
      "../images/list/203.3.jpg", // Thumbnail image
    ],
    cover: "../images/list/203.4.jpg",
    relatedImages: [
      "../images/list/203.5.jpg", // Related image 1
      "../images/list/203.6.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 6,
    name: "505TT Bạch Đằng, Phường 2, Tân Bình, TP.HCM",
    price: "4.200.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: [
      "Tối đa 4 người - 2 xe",
      "Thang máy",
      "Máy giặt chung",
      "Cửa vân tay",
    ], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 6, // Add a field for customer reviews
    sku: "505", // Add a field for SKU
    tags: ["Gác", "Máy lạnh", "Kệ bếp"], // Add tags
    images: [
      "../images/list/505.1.jpg", // Main image
      "../images/list/505.2.jpg", // Thumbnail image
      "../images/list/505.3.jpg", // Thumbnail image
    ],
    cover: "../images/list/505.4.jpg",
    relatedImages: [
      "../images/list/505.5.jpg", // Related image 1
      "../images/list/505.1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 7,
    name: "403TT Nguyễn Chánh Sắt, Tân Bình, TP.HCM",
    price: "3.800.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Thang bộ", "Máy giặt chung"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 10, // Add a field for customer reviews
    sku: "403", // Add a field for SKU
    tags: ["Gác", "Kệ bếp", "Máy lạnh"], // Add tags
    images: [
      "../images/list/403ncs.1.jpg", // Main image
      "../images/list/403ncs.4.jpg", // Thumbnail image
      "../images/list/403ncs.3.jpg", // Thumbnail image
    ],
    cover: "../images/list/403ncs.2.jpg",
    relatedImages: [
      "../images/list/403ncs.5.jpg", // Related image 1
      "../images/list/403ncs.1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 8,
    name: "G03TT D52, Phường 12, Tân Bình, TP.HCM",
    price: "3.600.000",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Tối đa 4 người - 1 xe", "Máy giặt chung", "Thang bộ"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 13, // Add a field for customer reviews
    sku: "G03", // Add a field for SKU
    tags: ["Gác", "Máy lạnh", "Tủ đồ", "Kệ bếp", "Máy nước nóng"], // Add tags
    images: [
      "../images/list/G03.1.jpg", // Main image
      "../images/list/G03.2.jpg", // Thumbnail image
      "../images/list/G03.3.jpg", // Thumbnail image
    ],
    cover: "../images/list/G03.4.jpg",
    relatedImages: [
      "../images/list/G03.5.jpg", // Related image 1
      "../images/list/G03.1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },

  {
    id: 10,
    name: "103TT D52, Phường 12, Tân Bình, TP.HCM",
    price: "3.500.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Tối đa 4 người - 1 xe", "Máy giặt chung", "Thang bộ"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 4, // Add a field for customer reviews
    sku: "103", // Add a field for SKU
    tags: ["Gác", "Máy lạnh", "Kệ bếp", "Tủ đồ"], // Add tags
    images: [
      "../images/list/103D52.1.jpg", // Main image
      "../images/list/103D52.2.jpg", // Thumbnail image
      "../images/list/103D52.3.jpg", // Thumbnail image
    ],
    cover: "../images/list/103D52.4.jpg",
    relatedImages: [
      "../images/list/103D52.5.jpg", // Related image 1
      "../images/list/103D52.1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 11,
    name: "202TT D52, Phường 12, Tân Bình, TP.HCM",
    price: "3.600.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Tối đa 4 người - 1 xe", "Máy giặt chung", "Thang bộ"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 3, // Add a field for customer reviews
    sku: "202", // Add a field for SKU
    tags: ["Gác", "Máy lạnh", "Kệ bếp", "Tủ đồ"], // Add tags
    images: [
      "../images/list/202.1.jpg", // Main image
      "../images/list/202.2.jpg",
      "../images/list/202.5.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/202.3.jpg",
    relatedImages: [
      "../images/list/202.4.jpg", // Related image 1
      "../images/list/202.1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 12,
    name: "201TT Nguyễn Quang Bích, Phường 13, Tân Bình, TP.HCM",
    price: "3.700.000",
    category: "Tân Bình",
    material: "Leather",
    utilities: [
      "Tối đa 4 người - 2 xe",
      "Máy giặt chung",
      "Thang bộ",
      "Cửa vân tay",
    ], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 6, // Add a field for customer reviews
    sku: "201", // Add a field for SKU
    tags: ["Gác", "Kệ bếp"], // Add tags
    images: [
      "../images/list/201.1.jpg", // Main image
      "../images/list/201.2.jpg",
      "../images/list/201.3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/201.4.jpg",
    relatedImages: [
      "../images/list/201.5.jpg", // Related image 1
      "../images/list/201.6.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },

  {
    id: 13,
    name: "205TT Thân Nhân Trung, Phường 13, Tân Bình, TP.HCM",
    price: "3.700.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Tối đa 4 người - 2 xe", "Máy giặt chung", "Thang máy"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 10, // Add a field for customer reviews
    sku: "205", // Add a field for SKU
    tags: ["Gác", "Kệ bếp", "Máy lạnh"], // Add tags
    images: [
      "../images/list/205.1.jpg", // Main image
      "../images/list/205.2.jpg",
      "../images/list/205.4.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/205.3.jpg",
    relatedImages: [
      "../images/list/205.5.jpg", // Related image 1
      "../images/list/205.6.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 14,
    name: "201TT Thân Nhân Trung, Phường 13, Tân Bình, TP.HCM",
    price: "5.500.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Máy giặt chung", "Thang máy"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 9, // Add a field for customer reviews
    sku: "201", // Add a field for SKU
    tags: [
      "1 Phòng ngủ",
      "Kệ bếp",
      "Máy lạnh",
      "Quạt",
      "Tủ lạnh",
      "Giường,nệm",
      "Tủ đồ",
    ], // Add tags
    images: [
      "../images/list/201TNT.1.jpg", // Main image
      "../images/list/201TNT.2.jpg",
      "../images/list/201TNT.3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/201TNT.4.jpg",
    relatedImages: [
      "../images/list/201TNT.5.jpg", // Related image 1
      "../images/list/201TNT.6.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 15,
    name: "305TT Thân Nhân Trung, Phường 13, Tân Bình, TP.HCM",
    price: "3.400.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Máy giặt chung", "Thang máy"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 9, // Add a field for customer reviews
    sku: "305", // Add a field for SKU
    tags: ["Gác", "Kệ bếp"], // Add tags
    images: [
      "../images/list/305.1.jpg", // Main image
      "../images/list/305.2.jpg",
      "../images/list/305.3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/305.4.jpg",
    relatedImages: [
      "../images/list/305.5.jpg", // Related image 1
      "../images/list/305.6.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 16,
    name: "307TT Thân Nhân Trung, Phường 13, Tân Bình, TP.HCM",
    price: "3.400.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Máy giặt chung", "Thang máy"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 9, // Add a field for customer reviews
    sku: "307", // Add a field for SKU
    tags: ["Gác", "Kệ bếp"], // Add tags
    images: [
      "../images/list/305.6.jpg", // Main image
      "../images/list/305.5.jpg",
      "../images/list/305.4.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/305.3.jpg",
    relatedImages: [
      "../images/list/305.2.jpg", // Related image 1
      "../images/list/305.1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 17,
    name: "02-03-04-05MC Lê Đức Thọ, Phường 13, Gò Vấp, TP.HCM",
    price: "4.000.000 vnđ",
    category: "Gò Vấp",
    material: "Leather",
    utilities: ["Máy giặt chung", "Thang máy", "Cổng vân tay"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Gò Vấp, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 12, // Add a field for customer reviews
    sku: "102,103,104,105", // Add a field for SKU
    tags: ["Gác", "Máy lạnh", "Nệm", "Quạt", "Tủ bếp"], // Add tags
    images: [
      "../images/list/1340.1.jpg", // Main image
      "../images/list/1340.2.jpg",
      "../images/list/1340.3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/1340.4.jpg",
    relatedImages: [
      "../images/list/1340.5.jpg", // Related image 1
      "../images/list/1340.6.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 18,
    name: "8MC Dương Quảng Hàm, Phường 6, Gò Vấp, TP.HCM",
    price: "3.800.000 vnđ",
    category: "Gò Vấp",
    material: "Leather",
    utilities: ["Miễn phí giặt xấy"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Gò Vấp, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 14, // Add a field for customer reviews
    sku: "8", // Add a field for SKU
    tags: ["Gác", "Kệ bếp"], // Add tags
    images: [
      "../images/list/8.1.jpg", // Main image
      "../images/list/8.2.jpg",
      "../images/list/8.3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/8.4.jpg",
    relatedImages: [
      "../images/list/8.5.jpg", // Related image 1
      "../images/list/8.6.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 19,
    name: "30MC Dương Quảng Hàm, Phường 6, Gò Vấp, TP.HCM",
    price: "4.100.000 vnđ",
    category: "Gò Vấp",
    material: "Leather",
    utilities: ["Miễn phí giặt xấy"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Gò Vấp, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 14, // Add a field for customer reviews
    sku: "30", // Add a field for SKU
    tags: ["Gác lớn", "Quạt", "Bàn"], // Add tags
    images: [
      "../images/list/30.1.jpg", // Main image
      "../images/list/30.2.jpg",
      "../images/list/30.3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/30.4.jpg",
    relatedImages: [
      "../images/list/30.5.jpg", // Related image 1
      "../images/list/30.7.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },

  {
    id: 21,
    name: "14MC Dương Quảng Hàm, Phường 6, Gò Vấp, TP.HCM",
    price: "3.400.000 vnđ",
    category: "Gò Vấp",
    material: "Leather",
    utilities: ["Giặt xấy 100k/12 lần"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Gò Vấp, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 14, // Add a field for customer reviews
    sku: "14", // Add a field for SKU
    tags: ["Không gác"], // Add tags
    images: [
      "../images/list/14.1.jpg", // Main image
      "../images/list/14.2.jpg",
      "../images/list/14.3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/14.4.jpg",
    relatedImages: [
      "../images/list/14.5.jpg", // Related image 1
      "../images/list/14.1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 22,
    name: "36MC Dương Quảng Hàm, Phường 6, Gò Vấp, TP.HCM",
    price: "4.200.000 vnđ",
    category: "Gò Vấp",
    material: "Leather",
    utilities: ["Giặt xấy 100k/12 lần"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Gò Vấp, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 14, // Add a field for customer reviews
    sku: "36", // Add a field for SKU
    tags: ["Gác", "Cửa sổ"], // Add tags
    images: [
      "../images/list/36.1.jpg", // Main image
      "../images/list/36.2.jpg",
      "../images/list/36.7.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/36.4.jpg",
    relatedImages: [
      "../images/list/36.5.jpg", // Related image 1
      "../images/list/36.6.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 23,
    name: "301AM Cộng Hoà, Phường 12, Quận Tân Bình, TP.HCM",
    price: "5.800.000 vnđ",
    category: "Tân Bình",
    material: "Leather",
    utilities: ["Ban công"], // Update to color codes
    shortDescription:
      "Nằm trong khu vực Tân Bình, bạn sẽ dễ dàng tiếp cận các dịch vụ tiện ích như siêu thị, quán ăn, quán cà phê và các phương tiện giao thông công cộng.",
    longDescription:
      "Không gian sạch sẽ: Phòng được vệ sinh thường xuyên, đảm bảo môi trường sống luôn trong lành.\n" +
      "- Ánh sáng tự nhiên: Các cửa sổ lớn giúp đón nắng và gió, mang lại cảm giác dễ chịu.\n" +
      "- Giờ giấc tự do: Bạn hoàn toàn yên tâm về thời gian sinh hoạt của mình, không bị ràng buộc.",
    reviews: 9, // Add a field for customer reviews
    sku: "301", // Add a field for SKU
    tags: ["Full nội thất"], // Add tags
    images: [
      "../images/list/301.6.jpg", // Main image
      "../images/list/301.5.jpg",
      "../images/list/301.3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/301.4.jpg",
    relatedImages: [
      "../images/list/301.2.jpg", // Related image 1
      "../images/list/301.1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 24,
    name: "Eight Horses Painting",
    price: "600$",
    category: "Quận 3",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "The Eight Horses painting is a revered symbol of good fortune and prosperity in East Asian culture. Depicting eight powerful horses galloping energetically, this artwork embodies the dynamic spirit of success and progress. The number eight is considered highly auspicious, representing wealth and ambition.",
    longDescription:
      "In East Asian culture, horses are seen as symbols of strength, endurance, and freedom. They are revered for their speed and grace, qualities that translate into symbolic meanings related to personal and professional success. The  painting specifically features eight horses, which amplifies the symbolism due to the auspicious nature of the number eight. In Chinese culture, the number eight is considered extremely lucky because its pronunciation is similar to the word for wealth and prosperity . As a result, the painting is believed to attract good fortune, financial success, and positive energy. The dynamic portrayal of the horses in the painting conveys a sense of movement and vitality. Each horse is typically depicted in mid-gallop, suggesting a relentless pursuit of goals and ambitions. This imagery resonates deeply with the values of perseverance and achievement, making it a powerful symbol for anyone seeking to enhance their success in various aspects of life.",
    reviews: 21, // Add a field for customer reviews
    sku: " PHT131011 PH111034-12", // Add a field for SKU
    tags: ["Furniture", "Painting", "Modern"], // Add tags
    images: [
      "../images/list/tranhtr1.webp", // Main image
      "../images/list/tranhtr2.webp",
      "../images/list/tranhtr3.webp", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/tranhtr1.webp",
    relatedImages: [
      "../images/list/tranh1.webp", // Related image 1
      "../images/list/tranh2.webp", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 25,
    name: "Wall Mirro",
    price: "450$",
    category: "Quận 3",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "The wall mirror is a stylish and functional addition to any space, designed to enhance both aesthetics and practicality. With its sleek frame and high-quality reflective surface, this mirror not only provides a clear, distortion-free view but also adds a touch of elegance to your decor. Ideal for any room, from the entryway to the Bình Thạnh or living room, it helps to create a sense of space and light.",
    longDescription:
      "A wall mirror is a versatile and elegant addition to any space, seamlessly blending aesthetics with functionality. Its design, encompassing a variety of shapes—rectangular, round, oval, and custom—along with diverse frame materials such as wood, metal, and glass, enhances the visual appeal of any room. Beyond its decorative role, a wall mirror serves practical purposes, such as creating the illusion of space in smaller areas, enhancing natural and artificial lighting, and providing a convenient reflection for daily routines. Strategically placed according to Feng Shui principles, it can improve the flow of positive energy and contribute to a harmonious atmosphere. Maintenance involves regular cleaning with gentle products and protecting the mirror from physical damage and excessive humidity. With its ability to brighten and enlarge spaces, a well-chosen wall mirror not only adds sophistication but also supports functionality, making it an essential element in both residential and commercial settings.",
    reviews: 21, // Add a field for customer reviews
    sku: " GT131011 GH5521-12", // Add a field for SKU
    tags: ["Furniture", "Mirro", "Modern"], // Add tags
    images: [
      "../images/list/guong1.jpg", // Main image
      "../images/list/guong2.jpg",
      "../images/list/guong3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/guong2.jpg",
    relatedImages: [
      "../images/list/bantr1.jpg", // Related image 1
      "../images/list/bantr3.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 26,
    name: "Ceramic Vase",
    price: "600$",
    category: "Quận 3",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "This exquisite ceramic vase adds a touch of elegance to any space with its timeless design and high-quality craftsmanship. Handcrafted from fine ceramic, it features a sleek, smooth finish and intricate detailing that highlights its artistic charm. Ideal for showcasing fresh flowers or decorative branches, the vase enhances both modern and traditional Quận 3s. Its versatile design complements a variety of decor styles, making it a perfect centerpiece for living rooms, dining areas, or entryways.",
    longDescription:
      "A ceramic vase is a quintessential decor piece that combines artistry with practicality, offering both aesthetic appeal and functional utility. Crafted with precision, these vases come in various shapes and sizes, from traditional urns to sleek modern designs, each contributing uniquely to a space’s ambiance. Handcrafted ceramic vases often feature intricate details and high-quality finishes, including glossy or matte glazes, adding sophistication to any Quận 3. Their versatile design makes them suitable for diverse settings, whether showcasing fresh flowers, decorative branches, or serving as standalone accents. The high-quality ceramic material ensures durability and resistance to wear, while a variety of utilities and patterns allow for seamless integration into different decor styles. Proper care, including gentle cleaning and protection from damage, maintains their pristine appearance over time. Ceramic vases enhance both modern and traditional Quận 3s, making them valuable additions that brighten and elevate any room's atmosphere.",
    reviews: 21, // Add a field for customer reviews
    sku: " BHG5542 BH251-12", // Add a field for SKU
    tags: ["Furniture", "Vase", "Modern"], // Add tags
    images: [
      "../images/list/binhhoa.jpg", // Main image
      "../images/list/binhhoa2.jpg",
      "../images/list/binhhoa3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/binhhoa.jpg",
    relatedImages: [
      "../images/list/binhgom1.jpg", // Related image 1
      "../images/list/binhgom2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 27,
    name: "Glossy Ceramic Vase",
    price: "1.000$",
    category: "Quận 3",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "This exquisite ceramic vase adds a touch of elegance to any space with its timeless design and high-quality craftsmanship. Handcrafted from fine ceramic, it features a sleek, smooth finish and intricate detailing that highlights its artistic charm. Ideal for showcasing fresh flowers or decorative branches, the vase enhances both modern and traditional Quận 3s. Its versatile design complements a variety of decor styles, making it a perfect centerpiece for living rooms, dining areas, or entryways.",
    longDescription:
      "A ceramic vase is a quintessential decor piece that combines artistry with practicality, offering both aesthetic appeal and functional utility. Crafted with precision, these vases come in various shapes and sizes, from traditional urns to sleek modern designs, each contributing uniquely to a space’s ambiance. Handcrafted ceramic vases often feature intricate details and high-quality finishes, including glossy or matte glazes, adding sophistication to any Quận 3. Their versatile design makes them suitable for diverse settings, whether showcasing fresh flowers, decorative branches, or serving as standalone accents. The high-quality ceramic material ensures durability and resistance to wear, while a variety of utilities and patterns allow for seamless integration into different decor styles. Proper care, including gentle cleaning and protection from damage, maintains their pristine appearance over time. Ceramic vases enhance both modern and traditional Quận 3s, making them valuable additions that brighten and elevate any room's atmosphere.",
    reviews: 11, // Add a field for customer reviews
    sku: " BHG4442 BH251-111", // Add a field for SKU
    tags: ["Furniture", "Vase", "Modern"], // Add tags
    images: [
      "../images/list/binhgom1.jpg", // Main image
      "../images/list/binhgom2.jpg",
      "../images/list/binhgom3.jpg", // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/binhgom1.jpg",
    relatedImages: [
      "../images/list/binhhoa2.jpg", // Related image 1
      "../images/list/binhhoa3.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 28,
    name: "Neoclassical Kitchen Cabinets",
    price: "10.000$",
    category: "Quận 1",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A kitchen cabinet is an essential piece of furniture that maximizes storage and organizes kitchen essentials efficiently. Made from high-quality materials such as wood, laminate, or stainless steel, kitchen cabinets are designed to withstand the demands of daily use. With a variety of styles, utilities, and finishes available, they can be customized to match any kitchen decor.",
    longDescription:
      "A kitchen cabinet plays a crucial role in both the functionality and aesthetics of a kitchen. Beyond simply offering storage space, it helps create a well-organized environment where everything from pots and pans to spices and utensils can be neatly stored and easily accessed. Kitchen cabinets are available in a variety of materials, such as solid wood, plywood, MDF, and even metal, each offering unique benefits in terms of durability, style, and maintenance. Solid wood cabinets, for instance, are known for their classic appeal and long-lasting strength, while laminate or MDF options are more affordable and come in a wide range of utilities and finishes.In modern kitchen design, kitchen cabinets often incorporate innovative features like soft-close hinges, pull-out trays, and vertical dividers to maximize storage efficiency and ease of use. Cabinets with glass doors or open shelving are also popular choices for displaying fine dishware or adding a decorative touch. Additionally, cabinetry can be custom-built to fit specific kitchen layouts and personal preferences, offering flexibility in terms of height, width, and depth. With the right choice of kitchen cabinets, homeowners can transform the look and feel of their kitchen, making it more inviting and practical.",
    reviews: 21, // Add a field for customer reviews
    sku: " TLV4442 TL251-111", // Add a field for SKU
    tags: ["Furniture", "Kitchen Cabinets", "Modern"], // Add tags
    images: [
      "../images/list/tubep1.jpg", // Main image
      "../images/list/tubep2.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/tubep1.jpg",
    relatedImages: [
      "../images/list/tuchen1.webp", // Related image 1
      "../images/list/tuchen2.webp", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 30,
    name: "Cupboard Kitchen",
    price: "9.000$",
    category: "Quận 1",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A kitchen cabinet offers essential storage, keeping cookware and utensils organized. Available in various materials and designs, it enhances both functionality and aesthetics in any kitchen space.",
    longDescription:
      "A kitchen cabinet is a vital component in any kitchen, providing both storage and style. It helps keep cooking essentials such as pots, pans, utensils, and food items neatly organized and within easy reach. Kitchen cabinets come in a variety of materials, including wood, MDF, laminate, and stainless steel, offering a wide range of designs to suit different tastes and kitchen layouts. Solid wood cabinets add a classic, timeless feel, while modern designs with laminate or stainless steel provide a sleek, contemporary look. Many kitchen cabinets now come equipped with features like soft-close drawers, pull-out shelves, and built-in organizers to maximize storage space and improve functionality.",
    reviews: 11, // Add a field for customer reviews
    sku: " TLV4556 TL21-111", // Add a field for SKU
    tags: ["Furniture", "Kitchen Cupbroad", "Modern"], // Add tags
    images: [
      "../images/list/tuchen1.webp", // Main image
      "../images/list/tuchen2.webp",
      "../images/list/tuchen3.webp",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/tuchen1.webp",
    relatedImages: [
      "../images/list/tubep1.jpg", // Related image 1
      "../images/list/tubep2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 31,
    name: "Table Kitchen",
    price: "10.500.000$",
    category: "Quận 1",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A kitchen countertop provides a functional and durable surface for food preparation, enhancing both the efficiency and style of the kitchen space.",
    longDescription:
      "A kitchen countertop is an essential feature in any kitchen, offering a sturdy and practical surface for various tasks such as food preparation, cooking, and even dining. Available in a wide range of materials, including granite, marble, quartz, laminate, and stainless steel, countertops are designed to be both durable and aesthetically pleasing. Granite and quartz countertops, for instance, are known for their strength, heat resistance, and luxurious appearance, while laminate offers a more affordable and versatile option in terms of design and color.",
    reviews: 5, // Add a field for customer reviews
    sku: " BB3352 BH21-11", // Add a field for SKU
    tags: ["Furniture", "Table Kitchen", "Modern"], // Add tags
    images: [
      "../images/list/banbep1.jpg", // Main image
      "../images/list/banbep2.jpg",
      "../images/list/banbep3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/banbep1.jpg",
    relatedImages: [
      "../images/list/ban1.webp", // Related image 1
      "../images/list/ban2.webp", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 32,
    name: "Faucet 1",
    price: "6.000$",
    category: "Quận 1",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A kitchen lavabo faucet is a crucial element for any kitchen, offering convenience and style. Available in various designs and finishes, it provides efficient water flow for cooking and cleaning. Made from durable materials like stainless steel, it ensures long-lasting performance while enhancing the kitchen's overall aesthetic.",
    longDescription:
      "A kitchen lavabo faucet is a key feature that combines both practicality and elegance in any kitchen space. Designed to offer smooth and efficient water flow, it simplifies tasks like washing dishes, prepping food, and cleaning up. Available in a range of designs—from sleek modern styles to more classic, traditional options—kitchen faucets can be customized to fit various aesthetic preferences. High-quality materials such as stainless steel, chrome, or brushed nickel ensure durability, resistance to rust, and easy maintenance. With features like swivel spouts and pull-out spray heads, these faucets provide flexibility and enhance the overall functionality of the kitchen.",
    reviews: 5, // Add a field for customer reviews
    sku: " BB3352 BH21-11", // Add a field for SKU
    tags: ["Furniture", "Faucet", "Modern"], // Add tags
    images: [
      "../images/list/voin1.jpg", // Main image
      "../images/list/voin2.jpg",
      "../images/list/voin3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/voin1.jpg",
    relatedImages: [
      "../images/list/voinuoc1.jpg", // Related image 1
      "../images/list/voinuoc2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 33,
    name: "Faucet 2",
    price: "6.500$",
    category: "Quận 1",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A kitchen lavabo faucet is a crucial element for any kitchen, offering convenience and style. Available in various designs and finishes, it provides efficient water flow for cooking and cleaning. Made from durable materials like stainless steel, it ensures long-lasting performance while enhancing the kitchen's overall aesthetic.",
    longDescription:
      "A kitchen lavabo faucet is a key feature that combines both practicality and elegance in any kitchen space. Designed to offer smooth and efficient water flow, it simplifies tasks like washing dishes, prepping food, and cleaning up. Available in a range of designs—from sleek modern styles to more classic, traditional options—kitchen faucets can be customized to fit various aesthetic preferences. High-quality materials such as stainless steel, chrome, or brushed nickel ensure durability, resistance to rust, and easy maintenance. With features like swivel spouts and pull-out spray heads, these faucets provide flexibility and enhance the overall functionality of the kitchen.",
    reviews: 5, // Add a field for customer reviews
    sku: " VNB23512 VH2151", // Add a field for SKU
    tags: ["Furniture", "Faucet", "Modern"], // Add tags
    images: [
      "../images/list/voinuoc1.jpg", // Main image
      "../images/list/voinuoc2.jpg",
      "../images/list/voinuoc3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/voinuoc1.jpg",
    relatedImages: [
      "../images/list/voint1.png", // Related image 1
      "../images/list/voint2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 34,
    name: "Food Cart 1",
    price: "3.500$",
    category: "Quận 1",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A food cart in the kitchen offers versatile storage and serving solutions. Ideal for meal preparation and entertaining, it provides extra countertop space and compartments for utensils, ingredients, and appliances. Its mobility allows easy movement, making it perfect for both small and large kitchens. With various styles and finishes available, a food cart adds both functionality and a touch of style to your cooking space.",
    longDescription:
      "A food cart in the kitchen is a practical and stylish addition that enhances both functionality and organization. It provides valuable extra counter space for meal prep and serving, while its built-in shelves or drawers offer convenient storage for utensils, ingredients, and kitchen tools. The cart’s mobility makes it easy to reposition as needed, whether you’re preparing a meal or hosting a gathering. Available in various designs and materials, from sleek modern to rustic charm, a food cart can seamlessly integrate into any kitchen decor, adding both utility and visual appeal.",
    reviews: 8, // Add a field for customer reviews
    sku: " XDB22512 XD122551", // Add a field for SKU
    tags: ["Furniture", "Food Cart", "Modern"], // Add tags
    images: [
      "../images/list/xed1.jpg", // Main image
      "../images/list/xed2.jpg",
      "../images/list/xed3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/xed1.jpg",
    relatedImages: [
      "../images/list/xeday1.png", // Related image 1
      "../images/list/xeday2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 35,
    name: "Food Cart 2",
    price: "3.500$",
    category: "Quận 1",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A food cart in the kitchen offers versatile storage and serving solutions. Ideal for meal preparation and entertaining, it provides extra countertop space and compartments for utensils, ingredients, and appliances. Its mobility allows easy movement, making it perfect for both small and large kitchens. With various styles and finishes available, a food cart adds both functionality and a touch of style to your cooking space.",
    longDescription:
      "A food cart in the kitchen is a practical and stylish addition that enhances both functionality and organization. It provides valuable extra counter space for meal prep and serving, while its built-in shelves or drawers offer convenient storage for utensils, ingredients, and kitchen tools. The cart’s mobility makes it easy to reposition as needed, whether you’re preparing a meal or hosting a gathering. Available in various designs and materials, from sleek modern to rustic charm, a food cart can seamlessly integrate into any kitchen decor, adding both utility and visual appeal.",
    reviews: 8, // Add a field for customer reviews
    sku: " XDB22512 XD122551", // Add a field for SKU
    tags: ["Furniture", "Food Cart", "Modern"], // Add tags
    images: [
      "../images/list/xeday1.png", // Main image
      "../images/list/xeday.jpg",
      "../images/list/xeday3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/xeday1.png",
    relatedImages: [
      "../images/list/xed1.jpg", // Related image 1
      "../images/list/xed2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 36,
    name: "Dressing Table KY-GH309",
    price: "8.000$",
    category: "Quận 3",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A bedroom vanity table is a stylish and functional addition to any bedroom. It provides a dedicated space for personal grooming and beauty routines, with features like drawers and mirrors for convenient storage and reflection. Available in various designs and finishes, it complements bedroom decor while enhancing daily rituals",
    longDescription:
      "A bedroom vanity table is a key piece that combines elegance with practicality, offering a dedicated area for grooming and makeup application. Equipped with a mirror and storage drawers, it keeps beauty essentials organized and accessible. Its stylish design enhances the room’s decor, adding a touch of sophistication. Available in various materials and finishes, it seamlessly integrates into any bedroom setting, providing both functionality and aesthetic appeal.",
    reviews: 7, // Add a field for customer reviews
    sku: "KY-GH309 GH-3335", // Add a field for SKU
    tags: ["Furniture", "Dressing Table", "Modern"], // Add tags
    images: [
      "../images/list/bantrang1.jpg", // Main image
      "../images/list/bantrang2.jpg",
      "../images/list/bantrang3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/bantrang1.jpg",
    relatedImages: [
      "../images/list/bantr1.jpg", // Related image 1
      "../images/list/bantr2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },

  {
    id: 37,
    name: "Dressing table KY-VH201",
    price: "8.200$",
    category: "Quận 3",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A bedroom vanity table is a stylish and functional addition to any bedroom. It provides a dedicated space for personal grooming and beauty routines, with features like drawers and mirrors for convenient storage and reflection. Available in various designs and finishes, it complements bedroom decor while enhancing daily rituals",
    longDescription:
      "A bedroom vanity table is a key piece that combines elegance with practicality, offering a dedicated area for grooming and makeup application. Equipped with a mirror and storage drawers, it keeps beauty essentials organized and accessible. Its stylish design enhances the room’s decor, adding a touch of sophistication. Available in various materials and finishes, it seamlessly integrates into any bedroom setting, providing both functionality and aesthetic appeal.",
    reviews: 6, // Add a field for customer reviews
    sku: "KY-VH201 GH-542", // Add a field for SKU
    tags: ["Furniture", "Dressing Table", "Modern"], // Add tags
    images: [
      "../images/list/bantr1.jpg", // Main image
      "../images/list/bantr2.jpg",
      "../images/list/bantr3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/bantr1.jpg",
    relatedImages: [
      "../images/list/bantrang1.jpg", // Related image 1
      "../images/list/bantrang2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 38,
    name: "Bathtub Faucet DL506",
    price: "900$",
    category: "Bình Thạnh",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A bedroom vanity table is a stylish and functional addition to any bedroom. It provides a dedicated space for personal grooming and beauty routines, with features like drawers and mirrors for convenient storage and reflection. Available in various designs and finishes, it complements bedroom decor while enhancing daily rituals",
    longDescription:
      "A bedroom vanity table is a key piece that combines elegance with practicality, offering a dedicated area for grooming and makeup application. Equipped with a mirror and storage drawers, it keeps beauty essentials organized and accessible. Its stylish design enhances the room’s decor, adding a touch of sophistication. Available in various materials and finishes, it seamlessly integrates into any bedroom setting, providing both functionality and aesthetic appeal.",
    reviews: 6, // Add a field for customer reviews
    sku: "KY-VH201 GH-542", // Add a field for SKU
    tags: ["Furniture", "Bathtub Faucet", "Modern"], // Add tags
    images: [
      "../images/list/voinhatam1.png", // Main image
      "../images/list/voinhatam2.jpg",
      "../images/list/voinhatam3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/voinhatam1.png",
    relatedImages: [
      "../images/list/voint2.jpg", // Related image 1
      "../images/list/voint3.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 39,
    name: "Bathtub Faucet DL776",
    price: "850$",
    category: "Bình Thạnh",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A bedroom vanity table is a stylish and functional addition to any bedroom. It provides a dedicated space for personal grooming and beauty routines, with features like drawers and mirrors for convenient storage and reflection. Available in various designs and finishes, it complements bedroom decor while enhancing daily rituals",
    longDescription:
      "A bedroom vanity table is a key piece that combines elegance with practicality, offering a dedicated area for grooming and makeup application. Equipped with a mirror and storage drawers, it keeps beauty essentials organized and accessible. Its stylish design enhances the room’s decor, adding a touch of sophistication. Available in various materials and finishes, it seamlessly integrates into any bedroom setting, providing both functionality and aesthetic appeal.",
    reviews: 6, // Add a field for customer reviews
    sku: "KY-VH201 GH-542", // Add a field for SKU
    tags: ["Furniture", "Bathtub Faucet", "Modern"], // Add tags
    images: [
      "../images/list/voint1.png", // Main image
      "../images/list/voint2.jpg",
      "../images/list/voint3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/voint1.png",
    relatedImages: [
      "../images/list/voinhatam1.png", // Related image 1
      "../images/list/voinhatam2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 40,
    name: "Shower DL442",
    price: "500$",
    category: "Bình Thạnh",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A bedroom vanity table is a stylish and functional addition to any bedroom. It provides a dedicated space for personal grooming and beauty routines, with features like drawers and mirrors for convenient storage and reflection. Available in various designs and finishes, it complements bedroom decor while enhancing daily rituals",
    longDescription:
      "A bedroom vanity table is a key piece that combines elegance with practicality, offering a dedicated area for grooming and makeup application. Equipped with a mirror and storage drawers, it keeps beauty essentials organized and accessible. Its stylish design enhances the room’s decor, adding a touch of sophistication. Available in various materials and finishes, it seamlessly integrates into any bedroom setting, providing both functionality and aesthetic appeal.",
    reviews: 6, // Add a field for customer reviews
    sku: "KY-VH201 GH-542", // Add a field for SKU
    tags: ["Furniture", "Shower", "Modern"], // Add tags
    images: [
      "../images/list/vois1.jpg", // Main image
      "../images/list/vois2.jpg",
      "../images/list/vois3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/vois1.jpg",
    relatedImages: [
      "../images/list/voisen1.jpg", // Related image 1
      "../images/list/vóien2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 41,
    name: "Bathtub BH223",
    price: "15.000$",
    category: "Bình Thạnh",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A bathtub is a luxurious addition to any Bình Thạnh, offering a relaxing and comfortable bathing experience. Available in various styles and materials, such as freestanding, alcove, or corner tubs, it enhances the Bình Thạnh's functionality and aesthetic appeal. With features like built-in jets or ergonomic designs, it provides both style and comfort for a rejuvenating soak.",
    longDescription:
      "A bathtub is an essential feature for any Bình Thạnh, offering a space for relaxation and self-care. Whether you prefer a sleek freestanding tub, a classic alcove design, or a space-saving corner model, there’s a variety to suit every style and need. Modern bathtubs often include features like built-in jets, heated surfaces, and ergonomic designs to enhance comfort and luxury. Its presence not only elevates the Bình Thạnh's functionality but also adds a touch of elegance to your home.",
    reviews: 16, // Add a field for customer reviews
    sku: "KY-1401 BH223", // Add a field for SKU
    tags: ["Furniture", "Bathtub", "Modern"], // Add tags
    images: [
      "../images/list/bontam1.jpg", // Main image
      "../images/list/bontam2.jpg",
      "../images/list/bontam3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/bontam1.jpg",
    relatedImages: [
      "../images/list/bonnt1.jpg", // Related image 1
      "../images/list/bonnt2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 42,
    name: "Bathtub GH311",
    price: "19.000$",
    category: "Bình Thạnh",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A bathtub is a luxurious addition to any Bình Thạnh, offering a relaxing and comfortable bathing experience. Available in various styles and materials, such as freestanding, alcove, or corner tubs, it enhances the Bình Thạnh's functionality and aesthetic appeal. With features like built-in jets or ergonomic designs, it provides both style and comfort for a rejuvenating soak.",
    longDescription:
      "A bathtub is an essential feature for any Bình Thạnh, offering a space for relaxation and self-care. Whether you prefer a sleek freestanding tub, a classic alcove design, or a space-saving corner model, there’s a variety to suit every style and need. Modern bathtubs often include features like built-in jets, heated surfaces, and ergonomic designs to enhance comfort and luxury. Its presence not only elevates the Bình Thạnh's functionality but also adds a touch of elegance to your home.",
    reviews: 16, // Add a field for customer reviews
    sku: "KY-1401 BH223", // Add a field for SKU
    tags: ["Furniture", "Bathtub", "Modern"], // Add tags
    images: [
      "../images/list/bont1.jpg", // Main image
      "../images/list/bont2.jpg",
      "../images/list/bont3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/bont1.jpg",
    relatedImages: [
      "../images/list/bontam1.jpg", // Related image 1
      "../images/list/bontam2.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },

  {
    id: 43,
    name: "Lavabo GH223",
    price: "5.900$",
    category: "Bình Thạnh",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A Bình Thạnh sink is a practical fixture designed for daily use. Available in various styles and materials, it provides a functional space for washing hands, brushing teeth, and other personal hygiene tasks. Its design enhances the Bình Thạnh's aesthetics while ensuring durability and ease of maintenance.",
    longDescription:
      "A Bình Thạnh sink is an essential fixture that combines functionality with style. Designed for daily routines like hand washing and brushing teeth, it is available in a variety of shapes, sizes, and materials such as porcelain, glass, and stainless steel. Modern sinks often come with features like integrated vanities or countertop space, adding convenience and enhancing organization. The sink's design can significantly impact the Bình Thạnh's overall look, with options ranging from sleek and contemporary to classic and traditional. Easy to maintain and durable, a well-chosen Bình Thạnh sink not only fulfills practical needs but also complements and elevates your Bình Thạnh decor.",
    reviews: 12, // Add a field for customer reviews
    sku: "KY-1401 GH223", // Add a field for SKU
    tags: ["Furniture", "Lavabo", "Modern"], // Add tags
    images: [
      "../images/list/bonrm1.jpg", // Main image
      "../images/list/bonrm2.jpg",
      "../images/list/bonrm3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/bonrm1.jpg",
    relatedImages: [
      "../images/list/bonnt1.jpg", // Related image 1
      "../images/list/bontam1.jpg", // Related image 2
    ],
    detail: "Xem Thêm",
  },
  {
    id: 44,
    name: "Cigar Cabinet",
    price: "9.900$",
    category: "Quận 3",
    material: "Leather",
    utilities: ["#d3b8ae", "#c4c4c4", "#f4f4f4", "#efcdcd"], // Update to color codes
    shortDescription:
      "A cigar cabinet is a sophisticated storage solution for cigar enthusiasts. It maintains optimal humidity and temperature, preserving the quality and flavor of cigars. With elegant designs and durable materials, it not only ensures ideal conditions for cigars but also adds a touch of luxury and organization to any space.",
    longDescription:
      "A cigar cabinet is a luxurious addition for any cigar aficionado, designed to offer both functionality and style. Equipped with humidity control and temperature regulation, it ensures cigars remain fresh and flavorful. Its sleek design and high-quality materials provide elegant storage, while features like glass doors and cedar lining enhance both presentation and preservation.",
    reviews: 22, // Add a field for customer reviews
    sku: "KY-254 CG212100", // Add a field for SKU
    tags: ["Furniture", "Cigar Cabinet", "Modern"], // Add tags
    images: [
      "../images/list/ciga1.jpg", // Main image
      "../images/list/ciga2.jpg",
      "../images/list/ciga3.jpg",
      // Thumbnail imag
      // Thumbnail image
    ],
    cover: "../images/list/ciga1.jpg",
    relatedImages: [
      "../images/list/tubep1.jpg", // Related image 1
      "../images/list/tu1.webp", // Related image 2
    ],
    detail: "Xem Thêm",
  },
];

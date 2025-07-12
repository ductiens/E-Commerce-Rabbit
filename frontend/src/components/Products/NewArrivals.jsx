import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false); //đánh dấu xem người dùng có đang kéo chuột không
  const [startX, setStartX] = useState(0); //lưu vị trí x ban đầu của chuột khi người dùng bắt đầu kéo
  const [scrollLeft, setScrollLeft] = useState(false); //tính toán vị trí cuộn mới khi người dùng kéo chuột (số pixel mà container đã cuộn ngang)
  const [canScrollLeft, setCanScrollLeft] = useState(false); //xác định xem có thể cuộn sang trái không (để ẩn/hiện nút)
  const [canScrollRight, setCanScrollRight] = useState(true); //xác định xem có thể cuộn sang phải không (để ẩn/hiện nút)

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  //Hàm xử lý sự kiện kéo chuột
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft); //vị trí chuột tương đối so với mép trái của container. Để tìm người dùng nhấn chuột tại vị trí
    setScrollLeft(scrollRef.current.scrollLeft); //Lưu vị trí cuộn hiện tại của container để làm mốc tính toán khi kéo
  };

  const handleMouseMove = (e) => {
    //Xử lý sự kiện khi chuột di chuyển trong lúc kéo
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    //walk: là khoảng cách chuột di chuyển kể từ khi nhấn chuột. Nếu walk > 0, chuột di chuyển sang phải; 
    // nếu walk < 0, chuột di chuyển sang trái.
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  //Hàm điều khiển cuộn bằng nút
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  //Cập nhật trạng thái của các nút cuộn (trái/phải) dựa trên vị trí cuộn hiện tại.
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft; //Lấy vị trí cuộn hiện tại
      const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth; //Kiểm tra xem còn nội dung để cuộn sang phải không

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container.scrollLeft, // bao nhiêu pixel đã cuộn ngang - scrollLeft: 0
      clientWidth: container.clientWidth, //chiều rộng hiện tại của khung cuộn - clientWidth: 1024
      containerScrollWidth: container.scrollWidth, //tổng chiều rộng nội dung có thể cuộn được - containerScrollWidth: 2626
      offsetLeft: scrollRef.current.offsetLeft,
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of
          fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded border ${
              canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown} //Gọi hàm khi nhấn chuột
        onMouseMove={handleMouseMove} //Gọi hàm khi di chuyển chuột
        onMouseUp={handleMouseUpOrLeave} //Gọi hàm khi thả chuột
        onMouseLeave={handleMouseUpOrLeave} //Gọi hàm khi chuột rời container
      >
        {newArrivals.map((product) => (
          <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

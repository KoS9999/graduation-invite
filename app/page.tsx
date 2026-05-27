"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import FallingDecorations from "./FallingDecorations";
import { GlobalRipple } from "./Ripple";


const sectionVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    willChange: "transform, opacity"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 45,    
      stiffness: 100, 
      mass: 0.4,      
      delay: 0.2,    
    },
  },
};

export default function GraduationPage() {
  const [openMap, setOpenMap] = useState(false);
  const [selectedImg, setSelectedImg] = useState<any>(null);
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#f8faff] text-slate-800 no-scrollbar">
      <GlobalRipple />
      {/* 🌟 GLOBAL FALLING DECORATIONS */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        <FallingDecorations />
      </div>
      <div className="relative z-10"></div>

      {/* 1️⃣ THƯ MỜI  */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-6 py-10 md:py-20 text-center snap-start overflow-hidden bg-[#f0f4f8]">

        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#e6f0ff_0%,_#f0f4f8_100%)] opacity-70" />

 

        {/* NỘI DUNG CHÍNH */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          className="relative max-w-5xl w-full z-10 bg-white/70 backdrop-blur-md p-6 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/50"
        >
          {/* 🛠️ TECH-CORNER ACCENTS */}
          <div className="absolute inset-2 md:inset-6 border border-blue-900/10 pointer-events-none rounded-[1.8rem] md:rounded-[2.8rem]" />
          <div className="absolute inset-4 md:inset-10 border border-amber-500/10 pointer-events-none rounded-[1.5rem] md:rounded-[2.5rem]" />

          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => {
            const isTop = pos.includes('top');
            const isLeft = pos.includes('left');

            return (
              <div
                key={pos}
                className={`absolute pointer-events-none w-20 h-20 md:w-32 md:h-32
            ${isTop ? 'top-3 md:top-10' : 'bottom-3 md:bottom-10'} 
            ${isLeft ? 'left-3 md:left-10' : 'right-3 md:right-10'}`}
              >
                {/* Ke góc vuông dày đậm */}
                <div className={`absolute w-8 h-8 md:w-12 md:h-12 border-[#00358E] 
            ${isTop ? 'border-t-[3px] top-0' : 'border-b-[3px] bottom-0'} 
            ${isLeft ? 'border-l-[3px] left-0' : 'border-r-[3px] right-0'} 
            ${isTop && isLeft ? 'rounded-tl-sm' : isTop ? 'rounded-tr-sm' : isLeft ? 'rounded-bl-sm' : 'rounded-br-sm'}`}
                />

                {/* Mạch điện ngang với Node */}
                <div className={`absolute ${isTop ? 'top-2' : 'bottom-2'} ${isLeft ? 'left-8' : 'right-8'} flex items-center`}>
                  <div className={`w-8 md:w-16 h-[1px] ${isLeft ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[#00358E] to-transparent`} />
                  <div className="w-1.5 h-1.5 rounded-full border border-blue-900 bg-white shadow-sm" />
                </div>

                {/* Mạch điện dọc với Chip-square */}
                <div className={`absolute ${isLeft ? 'left-2' : 'right-2'} ${isTop ? 'top-8' : 'bottom-8'} flex flex-col items-center`}>
                  <div className={`h-8 md:h-16 w-[1px] ${isTop ? 'bg-gradient-to-b' : 'bg-gradient-to-t'} from-amber-600 to-transparent`} />
                  <div className="w-2 h-2 bg-amber-600 rotate-45 border border-white shadow-sm" />
                </div>

                {/* Chỉ số nhị phân nhỏ ở góc */}
                <div className={`absolute text-[8px] font-mono text-blue-900/30 
            ${isTop ? 'top-0' : 'bottom-0'} ${isLeft ? 'left-10 md:left-14' : 'right-10 md:right-14'}`}>
                  {isLeft ? '01' : '10'}
                </div>
              </div>
            );
          })}

          {/* NỘI DUNG  */}
          <div className="relative z-20 space-y-6 md:space-y-12">
            <div className="flex flex-col gap-3 md:gap-5 pt-4 md:pt-0">
              <div className="inline-flex items-center justify-center gap-2">
                <div className="h-[1px] w-4 bg-blue-700" />
                <span className="text-blue-700 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-xs font-sans">
                  Invitation • Class of 2026
                </span>
                <div className="h-[1px] w-4 bg-blue-700" />
              </div>

              <h1 className="text-3xl md:text-7xl font-serif text-[#00358E] leading-tight drop-shadow-sm px-2">
                Lễ Tốt Nghiệp
              </h1>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] w-12 md:w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-900/20" />
                ))}
              </div>
              <div className="h-[1px] w-12 md:w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            </div>

            {/* VĂN BẢN */}
            <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto px-2">
              <p className="font-serif italic text-lg md:text-2xl text-blue-900/80">
                Trân trọng kính mời
              </p>

              <div className="text-slate-700 text-[14px] md:text-lg leading-[1.8] md:leading-[1.9] font-light">
                <p className="mb-4 px-2 md:px-0">
                  Bạn đến tham dự <span className="font-semibold text-blue-800 underline underline-offset-4 decoration-amber-500/30">Lễ Tốt Nghiệp</span> – dấu mốc ý nghĩa khép lại hành trình 4 năm học tập và trưởng thành tại
                  <span className="font-bold text-[#00358E]"> Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM</span>.
                </p>

                <div className="relative py-2">
                  <p className="text-slate-500 italic px-4 md:px-10 text-[13px] md:text-base leading-relaxed">
                    "Nơi ghi dấu những nỗ lực bền bỉ, quá trình tích lũy tri thức, rèn luyện kỹ năng,
                    cùng những kỷ niệm đáng nhớ và những bước trưởng thành không thể quên."
                  </p>
                </div>

                <p className="mt-4 text-slate-700 px-2 md:px-0">
                  Đánh dấu sự kết thúc của một chặng đường và mở ra những hành trình mới phía trước.
                  Sự hiện diện của bạn là <span className="text-blue-800 font-medium text-base md:text-lg">niềm vinh dự</span> góp phần làm trọn vẹn khoảnh khắc đáng nhớ này.
                </p>
              </div>
            </div>

            {/* TÊN */}
            <div className="pt-2 md:pt-6">
              <p className="font-serif text-2xl md:text-4xl text-[#00358E] font-semibold tracking-wide">
                Nguyễn Ngọc Tuấn Anh
              </p>
              <div className="flex flex-col items-center gap-1 mt-4">
                <div className="h-1.5 w-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-[0_2px_10px_rgba(245,158,11,0.3)]" />
                <div className="h-[2px] w-12 bg-blue-900/10 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR TECH STYLE */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#00358E] to-transparent mb-2" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-blue-900/60 font-bold">Scroll</span>
        </motion.div>
      </section>




      {/* 2️⃣ THÔNG TIN BUỔI LỄ */}
      <section className="min-h-screen w-full flex items-center justify-center bg-[#fcfcfc] px-4 md:px-6 py-10 md:py-16 snap-start relative overflow-hidden">

        {/* HỌA TIẾT TRANG TRÍ NỀN */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <svg className="absolute top-0 left-0 w-full h-full text-blue-900/10">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute -top-20 -left-20 w-60 h-60 md:w-80 md:h-80 border-[0.5px] border-amber-500/30 rounded-full" />
        </div>

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-5xl w-full space-y-6 md:space-y-12 z-10"
        >
          {/* TIÊU ĐỀ */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-7xl font-serif text-[#00358E] italic tracking-tight relative inline-block -top-3">
              Thông Tin Buổi Lễ
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-1.5 md:-bottom-3 left-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent"
              />
            </h2>
            <p className="text-amber-600 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-xs">
              Save the moments with us
            </p>
          </div>

{/* GRID CARD  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-hidden px-1">
  
  {/* Card 1: Thời gian */}
  <motion.div
    initial={{ 
      opacity: 0, 
      x: typeof window !== "undefined" && window.innerWidth < 768 ? -40 : 0 
    }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ 
      duration: 1, 
      ease: "easeOut" 
    }}
    whileHover={{ 
  y: -2,          
  scale: 1.05 }}
    className="group relative p-5 md:p-8 rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-xl bg-white border-t-4 border-t-amber-500 shadow-lg transition-all"
  >
    <div className="relative flex md:block items-center gap-4 md:space-y-4">
      <div className="inline-block p-2.5 bg-amber-50 rounded-xl text-amber-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
      <div className="space-y-1">
        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Thời gian bắt đầu</p>
        <p className="text-3xl md:text-5xl font-medium text-[#00358E]">11:00 AM</p>
        <p className="text-sm md:text-lg font-medium text-slate-600">Thứ Bảy, 24/01/2026</p>
      </div>
    </div>
  </motion.div>

  {/* Card 2: Địa điểm */}
  <motion.div
    initial={{ 
      opacity: 0, 
      x: typeof window !== "undefined" && window.innerWidth < 768 ? 40 : 0 
    }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ 
      duration: 1, 
      ease: "easeOut",
      delay: typeof window !== "undefined" && window.innerWidth < 768 ? 0.2 : 0
    }}
whileHover={{ 
  y: -2,          
  scale: 1.05      
}}    className="group relative p-5 md:p-8 rounded-t-xl rounded-b-[3rem] md:rounded-b-[4rem] bg-[#00358E] shadow-xl text-white transition-all"
  >
    <div className="relative flex md:block items-center gap-4 md:space-y-4">
      <div className="inline-block p-2.5 bg-white/10 backdrop-blur-md rounded-xl text-amber-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      </div>
      <div className="space-y-1">
        <p className="text-blue-200/60 font-bold text-[10px] uppercase tracking-widest">Địa điểm tổ chức</p>
        <p className="text-2xl md:text-4xl font-medium">Khuôn viên Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM</p>
        <p className="text-[11px] md:text-base text-blue-100/70 font-medium line-clamp-1">01 Võ Văn Ngân, Thủ Đức, TP.HCM</p>
      </div>
    </div>
  </motion.div>
</div>


          <div className="relative group p-1.5 md:p-2 bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="w-full h-[180px] md:h-[350px] rounded-[1.8rem] md:rounded-[2rem] overflow-hidden relative">
              <iframe
                className="w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4853986110947!2d106.76933817573617!3d10.85063238930273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752762f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMO Minh!5e0!3m2!1svi!2s!4v1715769741000!5m2!1svi!2s"
              />
            </div>

            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Trường+Đại+học+Sư+phạm+Kỹ+thuật+Thành+phố+Hồ+Chí+Minh&query_place_id=ChIJqxY48mMndTERb5G2QRRxLyg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 backdrop-blur-md text-[#00358E] px-4 py-2 md:px-6 md:py-3 rounded-full text-[9px] md:text-xs font-bold shadow-lg flex items-center gap-2 hover:bg-[#00358E] hover:text-white transition-all"
              >
                <span>GOOGLE MAPS</span>
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3 GỬI XE */}
      <section className="min-h-screen w-full flex items-center justify-center px-4 md:px-6 py-12 bg-[#001e3c] snap-start relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-500/50" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="max-w-6xl w-full space-y-8 md:space-y-12 relative z-10"
        >
          {/* Title */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-6xl font-serif text-amber-400 italic font-bold">
              Hướng Dẫn Gửi Xe
            </h2>
            <div className="h-px w-24 bg-amber-500/30 mx-auto" />
            <p className="text-blue-200/70 text-xs md:text-base font-light italic px-4">
              Nhấn vào hình ảnh để xem sơ đồ chi tiết
            </p>
          </div>

          {/* 2 CỘT */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-12">
            {/* Khu A */}
            <div
              onClick={() => setOpenMap(true)}
              className="space-y-4 group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 group-hover:border-amber-400/50 transition-all duration-500">
                <Image
                  src="/images/guixekhua.jpg"
                  alt="Bãi xe Khu A"
                  fill
                  className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-amber-500 text-[#001e3c] px-4 md:px-6 py-1 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest shadow-lg">
                  ƯU TIÊN
                </div>
                {/* Overlay khi hover */}
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="text-center md:text-left px-2">
                <h3 className="text-xl md:text-2xl font-bold text-white font-serif">
                  Bãi xe Khu A <span className="text-amber-400/80 font-light ml-1">(Cổng chính)</span>
                </h3>
                <p className="text-sm md:text-base text-blue-100/70 mt-2 font-light">
                  📍 Vào cổng chính, sau đó <strong className="text-amber-400 font-medium">rẽ phải</strong>.
                </p>
              </div>
            </div>

            {/* Khu E */}
            <div
              onClick={() => setOpenMap(true)}
              className="space-y-4 group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 group-hover:border-amber-400/50 transition-all duration-500">
                <Image
                  src="/images/guixekhue.jpg"
                  alt="Bãi xe Khu E"
                  fill
                  className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-slate-400/80 backdrop-blur-sm text-white px-4 md:px-6 py-1 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest shadow-lg">
                  DỰ PHÒNG
                </div>
                <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="text-center md:text-left px-2">
                <h3 className="text-xl md:text-2xl font-bold text-white font-serif">
                  Bãi xe Khu E <span className="text-amber-400/80 font-light ml-1">(Cổng phụ)</span>
                </h3>
                <p className="text-sm md:text-base text-blue-100/70 mt-2 font-light">
                  📍 Từ cổng chính đi thêm <strong className="text-amber-400 font-medium">100m</strong>, kế bên Last Minute.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MODAL SƠ ĐỒ */}
        {openMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#001e3c]/95 flex items-center justify-center p-2 md:p-4 backdrop-blur-md"
            onClick={() => setOpenMap(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-5xl w-full bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenMap(false)}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-[#001e3c]/80 hover:bg-amber-500 text-white hover:text-[#001e3c] rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300"
              >
                ✕
              </button>

              <div className="relative aspect-[4/3] md:aspect-video">
                <Image
                  src="/images/so-do-gui-xe.jpg"
                  alt="Sơ đồ gửi xe"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* 4️⃣ KHOẢNH KHẮC */}
      <section className="min-h-screen w-full flex items-center justify-center bg-white px-4 md:px-6 py-12 snap-start relative">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-5xl w-full space-y-6 md:space-y-12"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-6xl font-serif text-blue-900 italic">Hồi Ức Giảng Đường</h2>
            <p className="text-slate-400 text-sm md:text-base font-light italic">"Nơi bắt đầu những giấc mơ công nghệ"</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {[
              { id: 1, src: '/images/campus-1.jpg', caption: 'Phó Thủ tướng Lê Thành Long ký Quyết định số 2809/QĐ-TTg ngày 26/12/2025 đổi tên Trường Đại học Sư phạm Kỹ thuật TPHCM thành Trường Đại học Công nghệ Kỹ thuật TPHCM.' },
              { id: 2, src: '/images/campus-2.jpg', caption: 'Có những kỷ niệm không nằm trong lớp học, mà nằm ở hành lang – nơi ăn, ngủ và đi qua suốt những năm tháng ấy.' },
              { id: 3, src: '/images/campus-3.jpg', caption: 'Vừa tốt nghiệp thì trường nâng cấp phòng học, bàn ghế :D' },
              { id: 4, src: '/images/campus-4.jpg', caption: 'Một mình với máy, với code và những đêm dài fix bug bằng sự kiên trì để hoàn thành mảnh ghép cuối cùng của thời sinh viên.' },
            ].map((item) => (
              <motion.div
                key={item.id}
                layoutId={`gallery-img-${item.id}`}
                onClick={() => setSelectedImg(item)}
                className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-md cursor-pointer group"
              >
                <Image
                  src={item.src}
                  alt={`Campus ${item.id}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImg && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Backdrop mờ */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImg(null)}
                className="absolute inset-0 bg-slate-900/95 backdrop-blur-md"
              />

              {/* Card chứa ảnh */}
              <motion.div
                layoutId={`gallery-img-${selectedImg.id}`}
                className="relative max-w-full md:max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
              >
                <div className="relative w-full flex items-center justify-center bg-black/5">

                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={selectedImg.src}
                      alt="Full view"
                      fill
                      className="object-contain" 
                      priority
                    />
                  </div>
                </div>

                <div className="p-5 md:p-8 text-center border-t border-slate-50 bg-white">
                  <p className="text-blue-900 font-serif italic text-base md:text-xl leading-relaxed">
                    "{selectedImg.caption}"
                  </p>

                  <button
                    onClick={() => setSelectedImg(null)}
                    className="mt-4 px-5 py-1.5 rounded-full border border-slate-200 text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-amber-600 transition-colors"
                  >
                    Đóng
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 5️⃣ VR 360 (Interaction) */}
      <section className="min-h-screen w-full flex items-center justify-center bg-[#f8faff] px-4 md:px-6 py-12 snap-start">
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl w-full space-y-6 md:space-y-8 text-center"
        >
          <h2 className="text-3xl md:text-6xl font-serif text-blue-900 italic">PR Trường 1 xíu :D</h2>

          {/* Mobile: cao 250px, Viền trắng mỏng hơn (border-4) */}
          <div className="relative w-full h-[250px] md:h-[400px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-[4px] md:border-[10px] border-white group ">
            <Image
              src="/images/vr360.jpg"
              alt="VR 360"
              fill
              className="object-cover group-hover:scale-105 transition duration-[2s]"
            />
            <div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center backdrop-blur-[1px] md:backdrop-blur-[2px]">
              <a
                href="https://360.hcmute.edu.vn/"
                target="_blank"
                className="px-6 py-3 md:px-10 md:py-4 rounded-full bg-white text-blue-900 text-sm md:text-base font-bold shadow-2xl hover:bg-blue-50 transition transform active:scale-95 md:hover:scale-110"
              >
                TRUY CẬP VR 360
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6️⃣ LỜI KẾT */}
      <section className="h-screen w-full flex items-center justify-center bg-[#001e3c] text-white px-6 snap-start relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-amber-500" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] pointer-events-none" />

        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl w-full text-center space-y-8 md:space-y-12 relative z-10"
        >
          {/* Tiêu đề */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-400 font-bold italic tracking-wide">
              Lời Cảm Ơn
            </h2>
            <div className="h-px w-20 bg-amber-500/40 mx-auto" />
          </div>

          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-xl leading-relaxed md:leading-loose text-blue-50 font-light italic px-4 md:px-12 transition-all">
              "Hành trình này sẽ không thể trọn vẹn nếu thiếu đi sự yêu thương, tin tưởng và đồng hành của bạn.
              Mỗi lời động viên, mỗi sự hiện diện đều là nguồn sức mạnh giúp mình vững bước cho ngày hôm nay và mai sau.
              Sự có mặt của bạn chính là món quà quý giá nhất, góp phần làm nên ý nghĩa trọn vẹn cho khoảnh khắc này."
            </p>
          </div>

          <div className="pt-6 md:pt-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-amber-500/80 mb-4 font-bold"
            >
              Trân Trọng
            </motion.p>
            <p className="text-3xl md:text-5xl font-serif text-white tracking-tight">
              Thông & Gia Đình
            </p>
          </div>
        </motion.div>

        <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
          <div className="w-32 h-32 border-r-2 border-b-2 border-amber-500 rounded-br-3xl" />
        </div>
      </section>



      {/* Tối ưu Font & Scrollbar */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;600&display=swap');
        
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Inter', sans-serif;
        }

        body {
          font-family: var(--font-sans);
        }

        .font-serif {
          font-family: var(--font-serif);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
import { useState, useMemo } from "react";
import { ThumbsUp, Heart } from "lucide-react";

const baseReviews = [
  {
    id: 1,
    title: "Best Peanut Butter Ever!",
    text: "This peanut butter is super creamy and tastes amazing.the texture is thick and crunchy which feels kinda nice. every bite is like earthy and genuine u know? even the oil separation on top feels natural like it’s not trying to be fancy.",
    name: "Varshith",
    purchases: 12,
    rating: 4.8
  },
  {
    id: 2,
    title: "Good but slightly oily",
    text: "The taste is great but I noticed some oil separation.",
    name: "Anjali",
    purchases: 5,
    rating: 4.2
  },
  {
    id: 3,
    title: "Perfect for gym diet",
    text: "High protein and clean ingredients. A ready to go meal for my Gym",
    name: "Sai Swaran Teja",
    purchases: 20,
    rating: 4.6
  },
  {
    id: 4,
    title: "Kids Love It",
    text: "Great for breakfast meals. They love a lot",
    name: "Akshaya",
    purchases: 15,
    rating: 4.5
  },
  {
    id: 5,
    title: "Natural Taste",
    text: "Feels pure and healthy. always my go to peanut butter",
    name: "Ananya",
    purchases: 10,
    rating: 4.4
  },
  {
    id: 6,
    title: "Surprisingly Good Vibes",
    text: "Okay I usually avoid healthy snacks but this one surprised me.",
    name: "Kanha Agnihotri",
    purchases: 10,
    rating: 4.2
  },
  {
    id: 7,
    title: "Simplicity in a Jar",
    text: "Just roasted peanuts, no sugar no hassle.",
    name: "Venkatesh",
    purchases: 14,
    rating: 4.0
  }
];

function ReviewCard({ review, isLeft, delay }) {
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState(0);
  const [helpful, setHelpful] = useState(0);
  const [likeAnim, setLikeAnim] = useState(false);
  const [helpAnim, setHelpAnim] = useState(false);

  const shortText = review.text.slice(0, 80);

  const handleLike = () => {
    setLikes(likes + 1);
    setLikeAnim(true);
    setTimeout(() => setLikeAnim(false), 300);
  };

  const handleHelpful = () => {
    setHelpful(helpful + 1);
    setHelpAnim(true);
    setTimeout(() => setHelpAnim(false), 300);
  };

  return (
    <div
    id="reviews"
      className={`w-full md:w-1/2 px-4 mb-10 ${
        isLeft ? "md:pr-8" : "md:pl-8 ml-auto"
      }`}
      style={{
        animation: `fadeInUp 0.6s ease forwards`,
        animationDelay: `${delay}s`,
        opacity: 0
      }}
    >
      <div className="bg-[#FFF8F0] p-5 rounded-xl shadow hover:-translate-y-2 transition duration-300">
        
        <h2 className="text-[#6B3E26] font-semibold">
          🥜 {review.title}
        </h2>

        <div className="flex mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < Math.round(review.rating) ? "text-yellow-500" : "text-gray-300"}>
              ★
            </span>
          ))}
        </div>

        <p className="mt-2">
          {expanded ? review.text : shortText + "..."}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#C68642] text-sm cursor-pointer hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>

        <p className="text-sm mt-2 text-gray-500">
          — {review.name}❤️
        </p>

        <p className="text-sm text-gray-500">
          Purchases: {review.purchases}
        </p>

        <div className="flex gap-4 mt-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 cursor-pointer transition ${
              likeAnim ? "scale-125 text-red-500" : "hover:scale-110"
            }`}
          >
            <Heart size={16} fill={likeAnim ? "red" : "none"} /> {likes}
          </button>

          <button
            onClick={handleHelpful}
            className={`flex items-center gap-1 cursor-pointer transition ${
              helpAnim ? "scale-125 text-blue-500" : "hover:scale-110"
            }`}
          >
            <ThumbsUp size={16} /> {helpful}
          </button>
        </div>
      </div>
    </div>
  );
}

function SimpleView({ reviews }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, 4);

  return (
    <>
      <div className="relative">
        <div className="absolute left-1/2 w-1 h-full bg-[#EAD7C5]" />

        {visible.map((review, index) => (
          <ReviewCard
            key={review.id}
            review={review}
            isLeft={index % 2 === 0}
            delay={index * 0.2}
          />
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-5 py-2 rounded-full bg-[#6B3E26] text-white 
                     cursor-pointer transition hover:scale-105 hover:bg-[#5a3220]"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}

function BentoView({ reviews }) {
  const avg =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="grid md:grid-cols-4 gap-4 auto-rows-[150px]">
      <div className="md:col-span-2 md:row-span-2 bg-[#EAD7C5] p-6 rounded-xl">
        <h2>⭐ {reviews[0].title}</h2>
        <p className="line-clamp-4">{reviews[0].text}</p>
        <h2 className= "line-clamp-4">—{reviews[0].name}❤️</h2>
      </div>

      <div
        className="bg-[#C68642] text-white p-6 rounded-xl 
                  flex flex-col items-center justify-center text-center"
      >
        <p className="text-xl">Average Rating</p>
        <h2 className="text-xl font-bold mt-1">{avg.toFixed(1)} ⭐</h2>
      </div>

      {reviews.slice(1).map((r) => (
        <div key={r.id} className="bg-[#EAD7C5] p-4 rounded-xl">
          <h3>{r.title}</h3>
          <p className="line-clamp-3">{r.text}</p>
        </div>
      ))}
      <div className="bg-[#C68642] text-white p-6 rounded-xl 
                  flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-bold"> 🥜 100% Natural</h2>
      </div>
    </div>
  );
}

function MarqueeView({ reviews }) {
  const marqueeData = reviews.slice(1);
  return (
    <div className="space-y-6 overflow-hidden">
      <div className="flex gap-4 animate-marquee">
        {[...marqueeData, ...marqueeData].map((r, i) => (
          <div key={i} className="min-w-65 p-5 rounded-xl shadow bg-linear-to-br from-[#FFF8F0] to-[#EAD7C5] hover:scale-110 transition">
            <h3>🥜 {r.title}</h3>
            <p className="text-sm line-clamp-3">{r.text}</p>
            <p className="text-xs text-gray-500">— {r.name}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 animate-marquee-reverse">
        {[...marqueeData, ...marqueeData].map((r, i) => (
          <div key={i} className="min-w-65 p-5 rounded-xl shadow bg-linear-to-br from-[#EAD7C5] to-[#FFF8F0] hover:scale-110 transition">
            <h3>🥜 {r.title}</h3>
            <p className="text-sm line-clamp-3">{r.text}</p>
            <p className="text-xs text-gray-500">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeComponent() {
  const [view, setView] = useState("simple");
  const reviews = useMemo(() => baseReviews, []);

  const avg =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 font-[Poppins]">
      
      <h1 className="text-center text-2xl mb-2 text-[#6B3E26] font-bold">
        Look at the reviews 👀
      </h1>

      <p className="text-center text-[#C68642] font-semibold mb-6">
        ⭐ Average Rating: {avg.toFixed(1)}
      </p>

      <div className="flex justify-center gap-4 mb-8">
  {[
    { label: "Simple", value: "simple" },
    { label: "Bento Grid", value: "bento" },
    { label: "Marquee", value: "marquee" }
  ].map((btn) => (
    <button
      key={btn.value}
      onClick={() => setView(btn.value)}
      className={`px-5 py-2 rounded-xl cursor-pointer transition ${
        view === btn.value
          ? "bg-[#6B3E26] text-white"
          : "bg-[#EAD7C5]"
      }`}
    >
      {btn.label}
    </button>
  ))}
</div>

      {view === "simple" ? (
  <SimpleView reviews={reviews} />
) : view === "bento" ? (
  <BentoView reviews={reviews} />
) : (
  <MarqueeView reviews={reviews} />
)}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 30s linear infinite;
        }
          .animate-marquee:hover,
         .animate-marquee-reverse:hover {
          animation-play-state: paused;
          }
      `}</style>
    </div>
  );
}
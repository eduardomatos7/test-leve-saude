import { MdStar, MdStarBorder } from "react-icons/md";

export default function StarsRating(rating: number) {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <MdStar key={i} className="h-5 w-5" />
        ) : (
          <MdStarBorder key={i} className="h-5 w-5" />
        ),
      )}
    </div>
  );
}
